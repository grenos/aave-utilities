import { BigNumber, } from 'ethers';
import { estimateGasByNetwork } from './gasStation';
import { ProtocolAction, eEthereumTxType, } from './types';
import { DEFAULT_NULL_VALUE_ON_TX, gasLimitRecommendations } from './utils';
export default class BaseService {
    constructor(provider, contractFactory) {
        this.getContractInstance = (address) => {
            if (!this.contractInstances[address]) {
                this.contractInstances[address] = this.contractFactory.connect(address, this.provider);
            }
            return this.contractInstances[address];
        };
        this.generateTxCallback = ({ rawTxMethod, from, value, gasSurplus, action, }) => async () => {
            var _a;
            const txRaw = await rawTxMethod();
            const tx = Object.assign(Object.assign({}, txRaw), { from, value: value !== null && value !== void 0 ? value : DEFAULT_NULL_VALUE_ON_TX });
            try {
                tx.gasLimit = await estimateGasByNetwork(tx, this.provider, gasSurplus);
            }
            catch (error) {
                console.log("Error generateTxCallback :::", error);
                if (action) {
                    tx.gasLimit = BigNumber.from(gasLimitRecommendations[action].recommended);
                }
            }
            if (action &&
                gasLimitRecommendations[action] &&
                ((_a = tx.gasLimit) === null || _a === void 0 ? void 0 : _a.lte(BigNumber.from(gasLimitRecommendations[action].limit)))) {
                tx.gasLimit = BigNumber.from(gasLimitRecommendations[action].recommended);
            }
            return tx;
        };
        this.generateTxPriceEstimation = (txs, txCallback, action = ProtocolAction.default) => async (force = false) => {
            const gasPrice = await this.provider.getGasPrice();
            const hasPendingApprovals = txs.find(tx => tx.txType === eEthereumTxType.ERC20_APPROVAL);
            if (!hasPendingApprovals || force) {
                const { gasLimit, gasPrice: gasPriceProv } = await txCallback();
                if (!gasLimit) {
                    // If we don't receive the correct gas we throw an error
                    throw new Error('Transaction calculation error');
                }
                return {
                    gasLimit: gasLimit.toString(),
                    gasPrice: gasPriceProv
                        ? gasPriceProv.toString()
                        : gasPrice.toString(),
                };
            }
            return {
                gasLimit: gasLimitRecommendations[action].recommended,
                gasPrice: gasPrice.toString(),
            };
        };
        this.estimateGasLimit = async ({ tx, gasSurplus, action, skipGasEstimation, }) => {
            const gasLimit = action
                ? BigNumber.from(gasLimitRecommendations[action].limit)
                : BigNumber.from(gasLimitRecommendations[ProtocolAction.default].limit);
            if (skipGasEstimation) {
                tx.gasLimit = gasLimit;
                return tx;
            }
            let estimatedGasLimit = BigNumber.from('0');
            try {
                estimatedGasLimit = await estimateGasByNetwork(Object.assign(Object.assign({}, tx), { value: tx.value ? tx.value.toHexString() : DEFAULT_NULL_VALUE_ON_TX }), this.provider, gasSurplus);
            }
            catch (_) {
                // Don't log anything as this is expected to for methods requiring approval
            }
            if (estimatedGasLimit.gt(gasLimit)) {
                tx.gasLimit = estimatedGasLimit;
            }
            else {
                tx.gasLimit = gasLimit;
            }
            return tx;
        };
        this.contractFactory = contractFactory;
        this.provider = provider;
        this.contractInstances = {};
    }
}
//# sourceMappingURL=BaseService.js.map