import { Signer, ContractFactory, Overrides } from 'ethers';
import type { Provider, TransactionRequest } from '@ethersproject/providers';
import type { AaveTokenV3, AaveTokenV3Interface } from '../AaveTokenV3';
declare type AaveTokenV3ConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class AaveTokenV3__factory extends ContractFactory {
    constructor(...args: AaveTokenV3ConstructorParams);
    deploy(overrides?: Overrides & {
        from?: string;
    }): Promise<AaveTokenV3>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string;
    }): TransactionRequest;
    attach(address: string): AaveTokenV3;
    connect(signer: Signer): AaveTokenV3__factory;
    static readonly bytecode = "0x61016060405260006006553480156200001757600080fd5b506040518060400160405280600d81526020016c4161766520746f6b656e20563360981b815250604051806040016040528060018152602001601960f91b81525062000069826200011560201b60201c565b61012052620000788162000115565b61014052815160208084019190912060e052815190820120610100524660a0526200010660e05161010051604080517f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f60208201529081019290925260608201524660808201523060a082015260009060c00160405160208183030381529060405280519060200120905090565b60805250503060c052620001d9565b600080829050601f815111156200014c578260405163305a27a960e01b815260040162000143919062000161565b60405180910390fd5b80516200015982620001b1565b179392505050565b600060208083528351808285015260005b81811015620001905785810183015185820160400152820162000172565b506000604082860101526040601f19601f8301168501019250505092915050565b80516020808301519190811015620001d3576000198160200360031b1b821691505b50919050565b60805160a05160c05160e0516101005161012051610140516121cf62000234600039600061149101526000611466015260006112b40152600061128c015260006111e7015260006112110152600061123b01526121cf6000f3fe608060405234801561001057600080fd5b50600436106101cf5760003560e01c80636f50458d11610104578063a9059cbb116100a2578063d505accf11610071578063d505accf1461043d578063dc937e1c14610450578063dd62ed3e14610463578063dde43cba1461049c57600080fd5b8063a9059cbb146103d0578063aa9fbe02146103e3578063b2f4201d1461040a578063b9844d8d1461041d57600080fd5b806384b0196e116100de57806384b0196e1461038757806395d89b41146103a2578063a095ac19146103aa578063a457c2d7146103bd57600080fd5b80636f50458d1461034157806370a082311461036c5780638129fc1c1461037f57600080fd5b8063313ce5671161017157806341cbf54a1161014b57806341cbf54a146102e6578063570a97141461030d5780635c19a95c14610319578063657f0cde1461032e57600080fd5b8063313ce567146102bc5780633644e515146102cb57806339509351146102d357600080fd5b806318160ddd116101ad57806318160ddd1461024857806323b872dd1461025a5780632a8b36681461026d57806330adf81f1461029557600080fd5b806306fdde03146101d4578063095ea7b3146101f2578063169db77d14610215575b600080fd5b6101dc6104a4565b6040516101e99190611c86565b60405180910390f35b610205610200366004611cb5565b610536565b60405190151581526020016101e9565b610228610223366004611cdf565b610550565b604080516001600160a01b039384168152929091166020830152016101e9565b6002545b6040519081526020016101e9565b610205610268366004611cfa565b610582565b61028061027b366004611cdf565b6105a8565b604080519283526020830191909152016101e9565b61024c7f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c981565b604051601281526020016101e9565b61024c6105ca565b6102056102e1366004611cb5565b6105d9565b61024c7fd46e8b93b5190df6403875402a5c13897b72d2a576da5d1bfea20a63638d216e81565b61024c6402540be40081565b61032c610327366004611cdf565b610618565b005b61032c61033c366004611d56565b610633565b61035461034f366004611dc7565b610778565b6040516001600160a01b0390911681526020016101e9565b61024c61037a366004611cdf565b61078d565b61032c6107b1565b61038f610821565b6040516101e99796959493929190611dfa565b6101dc610867565b61032c6103b8366004611e90565b610876565b6102056103cb366004611cb5565b6109a8565b6102056103de366004611cb5565b610a45565b61024c7f6e77642f8f60cdece0498bfeeb2f06ccfef0e8f86d28a1b6255c5e48f1d72a0381565b61024c610418366004611dc7565b610a53565b61024c61042b366004611cdf565b60396020526000908152604090205481565b61032c61044b366004611eef565b610ad5565b61032c61045e366004611dc7565b610c1c565b61024c610471366004611f3d565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b61024c600481565b6060600380546104b390611f67565b80601f01602080910402602001604051908101604052809291908181526020018280546104df90611f67565b801561052c5780601f106105015761010080835404028352916020019161052c565b820191906000526020600020905b81548152906001019060200180831161050f57829003601f168201915b5050505050905090565b600033610544818585610c2b565b60019150505b92915050565b600080600061055e84610d50565b905061056c84826000610e53565b61057885836001610e53565b9250925050915091565b600033610590858285610f03565b61059b858585610f95565b60019150505b9392505050565b6000806105b6836000610a53565b6105c1846001610a53565b91509150915091565b60006105d46111da565b905090565b3360008181526001602090815260408083206001600160a01b03871684529091528120549091906105449082908690610613908790611fb7565b610c2b565b61062433826000611305565b61063033826001611305565b50565b6001600160a01b0387166106625760405162461bcd60e51b815260040161065990611fca565b60405180910390fd5b834211156106825760405162461bcd60e51b815260040161065990611ff1565b600061072561068f61142d565b7f6e77642f8f60cdece0498bfeeb2f06ccfef0e8f86d28a1b6255c5e48f1d72a038a8a8a6106da8e6001600160a01b0316600090815260396020526040902080546001810190915590565b8b6040516020016106f096959493929190612055565b6040516020818303038152906040528051906020012060405161190160f01b8152600281019290925260228201526042902090565b905061073381858585611437565b6001600160a01b0316886001600160a01b0316146107635760405162461bcd60e51b815260040161065990612094565b61076e888888611305565b5050505050505050565b60006105a18361078785610d50565b84610e53565b6001600160a01b03166000908152602081905260409020546001600160681b031690565b600654600490811161081c5760405162461bcd60e51b815260206004820152602e60248201527f436f6e747261637420696e7374616e63652068617320616c726561647920626560448201526d195b881a5b9a5d1a585b1a5e995960921b6064820152608401610659565b600655565b60006060806000806000606061083561145f565b61083d61148a565b60408051600080825260208201909252600f60f81b9b939a50919850469750309650945092509050565b6060600480546104b390611f67565b6001600160a01b03861661089c5760405162461bcd60e51b815260040161065990611fca565b834211156108bc5760405162461bcd60e51b815260040161065990611ff1565b60006109496108c961142d565b7fd46e8b93b5190df6403875402a5c13897b72d2a576da5d1bfea20a63638d216e89896109138c6001600160a01b0316600090815260396020526040902080546001810190915590565b6040805160208101959095526001600160a01b039384169085015291166060830152608082015260a0810188905260c0016106f0565b905061095781858585611437565b6001600160a01b0316876001600160a01b0316146109875760405162461bcd60e51b815260040161065990612094565b61099387876000611305565b61099f87876001611305565b50505050505050565b3360008181526001602090815260408083206001600160a01b038716845290915281205490919083811015610a2d5760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b6064820152608401610659565b610a3a8286868403610c2b565b506001949350505050565b600033610544818585610f95565b600080610a5f84610d50565b90506000836001811115610a7557610a7561201d565b610a809060016120bf565b82604001516003811115610a9657610a9661201d565b1660ff16600014610aa8576000610ab1565b610ab18561078d565b90506000610abf83866114b5565b9050610acb8183611fb7565b9695505050505050565b6001600160a01b038716610afb5760405162461bcd60e51b815260040161065990611fca565b83421115610b1b5760405162461bcd60e51b815260040161065990611ff1565b6001600160a01b0387811660008181526039602090815260408083205481517f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c9938101939093529082019390935292891660608401526080830188905260a0830182905260c083018790529091610baa9060e001604051602081830303815290604052805190602001206114f4565b9050610bb881868686611437565b6001600160a01b0316896001600160a01b031614610be85760405162461bcd60e51b815260040161065990612094565b6001600160a01b0389166000908152603960205260409020600183019055610c11898989610c2b565b505050505050505050565b610c27338383611305565b5050565b6001600160a01b038316610c8d5760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b6064820152608401610659565b6001600160a01b038216610cee5760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b6064820152608401610659565b6001600160a01b0383811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591015b60405180910390a3505050565b610d7160408051606081018252600080825260208201819052909182015290565b6001600160a01b038216600090815260208181526040808320815160808101835281546001600160681b03811682526001600160481b03600160681b8204811695830195909552600160b01b8104909416928101929092529091606083019060ff600160f81b909104166003811115610dec57610dec61201d565b6003811115610dfd57610dfd61201d565b815250509050604051806060016040528082602001516001600160481b0316815260200182604001516001600160481b0316815260200182606001516003811115610e4a57610e4a61201d565b90529392505050565b600080826001811115610e6857610e6861201d565b03610eba57600183604001516003811115610e8557610e8561201d565b1660ff16600003610e97576000610eb3565b6001600160a01b03808516600090815260426020526040902054165b90506105a1565b600283604001516003811115610ed257610ed261201d565b1015610edf576000610efb565b6001600160a01b03808516600090815260436020526040902054165b949350505050565b6001600160a01b038381166000908152600160209081526040808320938616835292905220546000198114610f8f5781811015610f825760405162461bcd60e51b815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e63650000006044820152606401610659565b610f8f8484848403610c2b565b50505050565b6001600160a01b038316610ff95760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b6064820152608401610659565b6001600160a01b03821661105b5760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b6064820152608401610659565b816001600160a01b0316836001600160a01b031614611195576001600160a01b038084166000908152602081905260408082205492851682529020546001600160681b039182169116828210156111035760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b6064820152608401610659565b6001600160a01b038516600090815260208190526040902080546cffffffffffffffffffffffffff19168484036001600160681b031617905561114683826120d8565b6001600160a01b038516600090815260208190526040902080546cffffffffffffffffffffffffff19166001600160681b03928316179055611192908690869085811690851687611521565b50505b816001600160a01b0316836001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051610d4391815260200190565b6000306001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614801561123357507f000000000000000000000000000000000000000000000000000000000000000046145b1561125d57507f000000000000000000000000000000000000000000000000000000000000000090565b6105d4604080517f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f60208201527f0000000000000000000000000000000000000000000000000000000000000000918101919091527f000000000000000000000000000000000000000000000000000000000000000060608201524660808201523060a082015260009060c00160405160208183030381529060405280519060200120905090565b6000836001600160a01b0316836001600160a01b0316146113265782611329565b60005b9050600061133685610d50565b90506000611345868386610e53565b9050806001600160a01b0316836001600160a01b03160361136857505050505050565b6001600160a01b038181161515908416151560006113858961078d565b9050821561139a5761139a816000868a611535565b81156113ad576113ad600082888a611535565b6113b88988886115ff565b821515821515146113d7576113d7896113d2878a866116a2565b6117c2565b856001600160a01b0316896001600160a01b03167fe8d51c8e11bd570db1734c8ec775785330e77007feed45c43b608ef33ff914bd8960405161141a91906120ff565b60405180910390a3505050505050505050565b60006105d46105ca565b600080600061144887878787611862565b9150915061145581611926565b5095945050505050565b60606105d47f0000000000000000000000000000000000000000000000000000000000000000611a70565b60606105d47f0000000000000000000000000000000000000000000000000000000000000000611a70565b6000808260018111156114ca576114ca61201d565b146114d65782516114dc565b82602001515b6105a1906001600160481b03166402540be40061210d565b600061054a6115016111da565b8360405161190160f01b8152600281019290925260228201526042902090565b61152e8585858585611aaf565b5050505050565b6001600160a01b03821615610f8f57838314610f8f57600061156461155f6402540be40087612124565b611bac565b9050600061157a61155f6402540be40087612124565b9050600061158785610d50565b9050600084600181111561159d5761159d61201d565b036115d057818382602001516115b39190612146565b6115bd9190612166565b6001600160481b031660208201526115f5565b805182906115df908590612146565b6115e99190612166565b6001600160481b031681525b61099f85826117c2565b6000836001600160a01b0316826001600160a01b0316146116205781611623565b60005b905060008360018111156116395761163961201d565b03611671576001600160a01b03848116600090815260426020526040902080546001600160a01b031916918316919091179055610f8f565b6001600160a01b03938416600090815260436020526040902080546001600160a01b03191691909416179092555050565b6116c360408051606081018252600080825260208201819052909182015290565b8115611742578260018111156116db576116db61201d565b6116e69060016120bf565b846040015160038111156116fc576116fc61201d565b1760ff1660038111156117115761171161201d565b846040019060038111156117275761172761201d565b9081600381111561173a5761173a61201d565b9052506117ba565b60038360018111156117565761175661201d565b6117619060016120bf565b18846040015160038111156117785761177861201d565b1660ff16600381111561178d5761178d61201d565b846040019060038111156117a3576117a361201d565b908160038111156117b6576117b661201d565b9052505b509192915050565b6001600160a01b03821660009081526020818152604091829020835181549285015171ffffffffffffffffffffffffffffffffffff60681b19909316600160681b6001600160481b039283160268ffffffffffffffffff60b01b191617600160b01b91909316029190911780825591830151909182906001600160f81b0316600160f81b8360038111156118585761185861201d565b0217905550505050565b6000807f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a0831115611899575060009050600361191d565b6040805160008082526020820180845289905260ff881692820192909252606081018690526080810185905260019060a0016020604051602081039080840390855afa1580156118ed573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b0381166119165760006001925092505061191d565b9150600090505b94509492505050565b600081600481111561193a5761193a61201d565b036119425750565b60018160048111156119565761195661201d565b036119a35760405162461bcd60e51b815260206004820152601860248201527f45434453413a20696e76616c6964207369676e617475726500000000000000006044820152606401610659565b60028160048111156119b7576119b761201d565b03611a045760405162461bcd60e51b815260206004820152601f60248201527f45434453413a20696e76616c6964207369676e6174757265206c656e677468006044820152606401610659565b6003816004811115611a1857611a1861201d565b036106305760405162461bcd60e51b815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202773272076616c604482015261756560f01b6064820152608401610659565b60606000611a7d83611c18565b604080516020808252818301909252919250600091906020820181803683375050509182525060208101929092525090565b836001600160a01b0316856001600160a01b0316031561152e576001600160a01b03851615611b43576000611ae386610d50565b90506000611af18386612186565b9050600082604001516003811115611b0b57611b0b61201d565b14611b4057611b288582611b218a866000610e53565b6000611535565b611b408582611b398a866001610e53565b6001611535565b50505b6001600160a01b0384161561152e576000611b5d85610d50565b90506000611b6b8385611fb7565b9050600082604001516003811115611b8557611b8561201d565b1461099f57611b9b8482611b2189866000610e53565b61099f8482611b3989866001610e53565b60006001600160481b03821115611c145760405162461bcd60e51b815260206004820152602660248201527f53616665436173743a2076616c756520646f65736e27742066697420696e203760448201526532206269747360d01b6064820152608401610659565b5090565b600060ff8216601f81111561054a57604051632cd44ac360e21b815260040160405180910390fd5b6000815180845260005b81811015611c6657602081850181015186830182015201611c4a565b506000602082860101526020601f19601f83011685010191505092915050565b6020815260006105a16020830184611c40565b80356001600160a01b0381168114611cb057600080fd5b919050565b60008060408385031215611cc857600080fd5b611cd183611c99565b946020939093013593505050565b600060208284031215611cf157600080fd5b6105a182611c99565b600080600060608486031215611d0f57600080fd5b611d1884611c99565b9250611d2660208501611c99565b9150604084013590509250925092565b803560028110611cb057600080fd5b803560ff81168114611cb057600080fd5b600080600080600080600060e0888a031215611d7157600080fd5b611d7a88611c99565b9650611d8860208901611c99565b9550611d9660408901611d36565b945060608801359350611dab60808901611d45565b925060a0880135915060c0880135905092959891949750929550565b60008060408385031215611dda57600080fd5b611de383611c99565b9150611df160208401611d36565b90509250929050565b60ff60f81b881681526000602060e081840152611e1a60e084018a611c40565b8381036040850152611e2c818a611c40565b606085018990526001600160a01b038816608086015260a0850187905284810360c0860152855180825283870192509083019060005b81811015611e7e57835183529284019291840191600101611e62565b50909c9b505050505050505050505050565b60008060008060008060c08789031215611ea957600080fd5b611eb287611c99565b9550611ec060208801611c99565b945060408701359350611ed560608801611d45565b92506080870135915060a087013590509295509295509295565b600080600080600080600060e0888a031215611f0a57600080fd5b611f1388611c99565b9650611f2160208901611c99565b95506040880135945060608801359350611dab60808901611d45565b60008060408385031215611f5057600080fd5b611f5983611c99565b9150611df160208401611c99565b600181811c90821680611f7b57607f821691505b602082108103611f9b57634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fd5b8082018082111561054a5761054a611fa1565b6020808252600d908201526c24a72b20a624a22fa7aba722a960991b604082015260600190565b60208082526012908201527124a72b20a624a22fa2ac2824a920aa24a7a760711b604082015260600190565b634e487b7160e01b600052602160045260246000fd5b6002811061205157634e487b7160e01b600052602160045260246000fd5b9052565b8681526001600160a01b0386811660208301528516604082015260c081016120806060830186612033565b608082019390935260a00152949350505050565b602080825260119082015270494e56414c49445f5349474e415455524560781b604082015260600190565b60ff818116838216019081111561054a5761054a611fa1565b6001600160681b038181168382160190808211156120f8576120f8611fa1565b5092915050565b6020810161054a8284612033565b808202811582820484141761054a5761054a611fa1565b60008261214157634e487b7160e01b600052601260045260246000fd5b500490565b6001600160481b038281168282160390808211156120f8576120f8611fa1565b6001600160481b038181168382160190808211156120f8576120f8611fa1565b8181038181111561054a5761054a611fa156fea2646970667358221220031d3febae0d90117808e443ab3b4b6923733bd26a4184ff7cedb41ae7c1a14564736f6c63430008140033";
    static readonly abi: readonly [{
        readonly inputs: readonly [];
        readonly name: "InvalidShortString";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "str";
            readonly type: "string";
        }];
        readonly name: "StringTooLong";
        readonly type: "error";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "owner";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "spender";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "value";
            readonly type: "uint256";
        }];
        readonly name: "Approval";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "delegator";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "delegatee";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "enum IGovernancePowerDelegationToken.GovernancePowerType";
            readonly name: "delegationType";
            readonly type: "uint8";
        }];
        readonly name: "DelegateChanged";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [];
        readonly name: "EIP712DomainChanged";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "from";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "to";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "value";
            readonly type: "uint256";
        }];
        readonly name: "Transfer";
        readonly type: "event";
    }, {
        readonly inputs: readonly [];
        readonly name: "DELEGATE_BY_TYPE_TYPEHASH";
        readonly outputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "";
            readonly type: "bytes32";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "DELEGATE_TYPEHASH";
        readonly outputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "";
            readonly type: "bytes32";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "DOMAIN_SEPARATOR";
        readonly outputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "";
            readonly type: "bytes32";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "PERMIT_TYPEHASH";
        readonly outputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "";
            readonly type: "bytes32";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "POWER_SCALE_FACTOR";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "REVISION";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly name: "_nonces";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "owner";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "spender";
            readonly type: "address";
        }];
        readonly name: "allowance";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "spender";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly name: "approve";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }];
        readonly name: "balanceOf";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "decimals";
        readonly outputs: readonly [{
            readonly internalType: "uint8";
            readonly name: "";
            readonly type: "uint8";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "spender";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "subtractedValue";
            readonly type: "uint256";
        }];
        readonly name: "decreaseAllowance";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "delegatee";
            readonly type: "address";
        }];
        readonly name: "delegate";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "delegatee";
            readonly type: "address";
        }, {
            readonly internalType: "enum IGovernancePowerDelegationToken.GovernancePowerType";
            readonly name: "delegationType";
            readonly type: "uint8";
        }];
        readonly name: "delegateByType";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "eip712Domain";
        readonly outputs: readonly [{
            readonly internalType: "bytes1";
            readonly name: "fields";
            readonly type: "bytes1";
        }, {
            readonly internalType: "string";
            readonly name: "name";
            readonly type: "string";
        }, {
            readonly internalType: "string";
            readonly name: "version";
            readonly type: "string";
        }, {
            readonly internalType: "uint256";
            readonly name: "chainId";
            readonly type: "uint256";
        }, {
            readonly internalType: "address";
            readonly name: "verifyingContract";
            readonly type: "address";
        }, {
            readonly internalType: "bytes32";
            readonly name: "salt";
            readonly type: "bytes32";
        }, {
            readonly internalType: "uint256[]";
            readonly name: "extensions";
            readonly type: "uint256[]";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "delegator";
            readonly type: "address";
        }, {
            readonly internalType: "enum IGovernancePowerDelegationToken.GovernancePowerType";
            readonly name: "delegationType";
            readonly type: "uint8";
        }];
        readonly name: "getDelegateeByType";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "delegator";
            readonly type: "address";
        }];
        readonly name: "getDelegates";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "user";
            readonly type: "address";
        }, {
            readonly internalType: "enum IGovernancePowerDelegationToken.GovernancePowerType";
            readonly name: "delegationType";
            readonly type: "uint8";
        }];
        readonly name: "getPowerCurrent";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "user";
            readonly type: "address";
        }];
        readonly name: "getPowersCurrent";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "spender";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "addedValue";
            readonly type: "uint256";
        }];
        readonly name: "increaseAllowance";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "initialize";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "delegator";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "delegatee";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "deadline";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint8";
            readonly name: "v";
            readonly type: "uint8";
        }, {
            readonly internalType: "bytes32";
            readonly name: "r";
            readonly type: "bytes32";
        }, {
            readonly internalType: "bytes32";
            readonly name: "s";
            readonly type: "bytes32";
        }];
        readonly name: "metaDelegate";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "delegator";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "delegatee";
            readonly type: "address";
        }, {
            readonly internalType: "enum IGovernancePowerDelegationToken.GovernancePowerType";
            readonly name: "delegationType";
            readonly type: "uint8";
        }, {
            readonly internalType: "uint256";
            readonly name: "deadline";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint8";
            readonly name: "v";
            readonly type: "uint8";
        }, {
            readonly internalType: "bytes32";
            readonly name: "r";
            readonly type: "bytes32";
        }, {
            readonly internalType: "bytes32";
            readonly name: "s";
            readonly type: "bytes32";
        }];
        readonly name: "metaDelegateByType";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "name";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "owner";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "spender";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "value";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "deadline";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint8";
            readonly name: "v";
            readonly type: "uint8";
        }, {
            readonly internalType: "bytes32";
            readonly name: "r";
            readonly type: "bytes32";
        }, {
            readonly internalType: "bytes32";
            readonly name: "s";
            readonly type: "bytes32";
        }];
        readonly name: "permit";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "symbol";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "totalSupply";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "to";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly name: "transfer";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "from";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "to";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly name: "transferFrom";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    static createInterface(): AaveTokenV3Interface;
    static connect(address: string, signerOrProvider: Signer | Provider): AaveTokenV3;
}
export {};
//# sourceMappingURL=AaveTokenV3__factory.d.ts.map