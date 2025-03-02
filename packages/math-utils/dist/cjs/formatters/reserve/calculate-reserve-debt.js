"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateReserveDebt = void 0;
const pool_math_1 = require("../../pool-math");
const ray_math_1 = require("../../ray.math");
function calculateReserveDebt(reserveDebt, currentTimestamp) {
    const totalVariableDebt = getTotalVariableDebt(reserveDebt, currentTimestamp);
    const totalStableDebt = getTotalStableDebt(reserveDebt, currentTimestamp);
    const totalDebt = totalVariableDebt.plus(totalStableDebt);
    const totalLiquidity = totalDebt.plus(reserveDebt.availableLiquidity);
    return {
        totalVariableDebt,
        totalStableDebt,
        totalDebt,
        totalLiquidity,
    };
}
exports.calculateReserveDebt = calculateReserveDebt;
function getTotalVariableDebt(reserveDebt, currentTimestamp) {
    return (0, ray_math_1.rayMul)((0, ray_math_1.rayMul)(reserveDebt.totalScaledVariableDebt, reserveDebt.variableBorrowIndex), (0, pool_math_1.calculateCompoundedInterest)({
        rate: reserveDebt.variableBorrowRate,
        currentTimestamp,
        lastUpdateTimestamp: reserveDebt.lastUpdateTimestamp,
    }));
}
function getTotalStableDebt(reserveDebt, currentTimestamp) {
    return (0, ray_math_1.rayMul)(reserveDebt.totalPrincipalStableDebt, (0, pool_math_1.calculateCompoundedInterest)({
        rate: reserveDebt.averageStableRate,
        currentTimestamp,
        lastUpdateTimestamp: reserveDebt.stableDebtLastUpdateTimestamp,
    }));
}
//# sourceMappingURL=calculate-reserve-debt.js.map