"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.verifyMessage = void 0;
var ethers_1 = require("ethers");
var VALIDATOR_1271_ABI = [
    "function isValidSignature(bytes32 hash, bytes signature) view returns (bytes4)",
];
var VALIDATOR_LEGACY_1271_ABI = [
    "function isValidSignature(bytes message, bytes signature) view returns (bytes4)",
];
// Outputted by solc contracts/DeploylessUniversalSigValidator.sol --bin --optimize --optimize-runs=1
var universalValidator = '0x60806040523480156200001157600080fd5b506040516200080f3803806200080f83398101604081905262000034916200068c565b6000620000438484846200004f565b9050806000526001601ff35b600080846001600160a01b0316803b806020016040519081016040528181526000908060200190933c845160208601209091507f6492649264926492649264926492649264926492649264926492649264926492620000ae856200056e565b03620002b157600060608086806020019051810190620000cf91906200068c565b875192955090935091506000036200019a576000836001600160a01b031683604051620000fd91906200070b565b6000604051808303816000865af19150503d80600081146200013c576040519150601f19603f3d011682016040523d82523d6000602084013e62000141565b606091505b5050905080620001985760405162461bcd60e51b815260206004820152601e60248201527f5369676e617475726556616c696461746f723a206465706c6f796d656e74000060448201526064015b60405180910390fd5b505b604051630b135d3f60e11b808252906001600160a01b038b1690631626ba7e90620001cc908890869060040162000757565b602060405180830381865afa158015620001ea573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200021091906200077a565b6001600160e01b0319161480620002a457506040516320c13b0b60e01b808252906001600160a01b038b16906320c13b0b9062000254908c908690600401620007a6565b602060405180830381865afa15801562000272573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200029891906200077a565b6001600160e01b031916145b9550505050505062000567565b815115620003cd57604051630b135d3f60e11b808252906001600160a01b03881690631626ba7e90620002eb908590899060040162000757565b602060405180830381865afa15801562000309573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200032f91906200077a565b6001600160e01b0319161480620003c357506040516320c13b0b60e01b808252906001600160a01b038816906320c13b0b90620003739089908990600401620007a6565b602060405180830381865afa15801562000391573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620003b791906200077a565b6001600160e01b031916145b9250505062000567565b8351604114620004355760405162461bcd60e51b815260206004820152603a6024820152600080516020620007ef83398151915260448201527f3a20696e76616c6964207369676e6174757265206c656e67746800000000000060648201526084016200018f565b6200043f62000588565b50602084015160408086015186518793926000918591908110620004675762000467620007d8565b016020015160f81c9050601b81148015906200048757508060ff16601c14155b15620004eb5760405162461bcd60e51b815260206004820152603b6024820152600080516020620007ef83398151915260448201527f3a20696e76616c6964207369676e617475726520762076616c7565000000000060648201526084016200018f565b60408051600081526020810180835287905260ff83169181019190915260608101849052608081018390526001600160a01b038b169060019060a0016020604051602081039080840390855afa1580156200054a573d6000803e3d6000fd5b505050602060405103516001600160a01b03161496505050505050505b9392505050565b60006020825110156200058057600080fd5b508051015190565b60405180606001604052806003906020820280368337509192915050565b6001600160a01b0381168114620005bc57600080fd5b50565b634e487b7160e01b600052604160045260246000fd5b60005b83811015620005f2578181015183820152602001620005d8565b50506000910152565b600082601f8301126200060d57600080fd5b81516001600160401b03808211156200062a576200062a620005bf565b604051601f8301601f19908116603f01168101908282118183101715620006555762000655620005bf565b816040528381528660208588010111156200066f57600080fd5b62000682846020830160208901620005d5565b9695505050505050565b600080600060608486031215620006a257600080fd5b8351620006af81620005a6565b60208501519093506001600160401b0380821115620006cd57600080fd5b620006db87838801620005fb565b93506040860151915080821115620006f257600080fd5b506200070186828701620005fb565b9150509250925092565b600082516200071f818460208701620005d5565b9190910192915050565b6000815180845262000743816020860160208601620005d5565b601f01601f19169290920160200192915050565b82815260406020820152600062000772604083018462000729565b949350505050565b6000602082840312156200078d57600080fd5b81516001600160e01b0319811681146200056757600080fd5b604081526000620007bb604083018562000729565b8281036020840152620007cf818562000729565b95945050505050565b634e487b7160e01b600052603260045260246000fdfe5369676e617475726556616c696461746f72237265636f7665725369676e6572';
/**
 * NOTE: you only need to pass one of: typedData, finalDigest, message
 */
function verifyMessage(_a) {
    var provider = _a.provider, signer = _a.signer, signature = _a.signature, message = _a.message, typedData = _a.typedData, finalDigest = _a.finalDigest;
    return __awaiter(this, void 0, void 0, function () {
        var coder, callResult;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    if (message) {
                        if (typeof (message) === "string") {
                            message = ethers_1.utils.toUtf8Bytes(message);
                        }
                        finalDigest = ethers_1.utils.concat([
                            ethers_1.utils.toUtf8Bytes("\x19Ethereum Signed Message:\n"),
                            ethers_1.utils.toUtf8Bytes(String(message.length)),
                            message
                        ]);
                    }
                    else if (typedData) {
                        finalDigest = ethers_1.utils._TypedDataEncoder.encode(typedData.domain, typedData.types, typedData.message);
                    }
                    else if (!finalDigest) {
                        throw Error("Missing one of the properties: message, unPrefixedMessage, typedData or finalDigest");
                    }
                    coder = new ethers_1.utils.AbiCoder();
                    return [4 /*yield*/, provider.call({
                            data: ethers_1.utils.concat([
                                universalValidator,
                                coder.encode(['address', 'bytes', 'bytes'], [signer, finalDigest, signature])
                            ])
                        })];
                case 1:
                    callResult = _b.sent();
                    if (callResult === '0x01')
                        return [2 /*return*/, true];
                    if (callResult === '0x00')
                        return [2 /*return*/, false];
                    if (callResult.startsWith('0x08c379a0'))
                        throw new Error(coder.decode(['string'], '0x' + callResult.slice(10))[0]);
                    throw new Error('Unexpected result from UniversalValidator: ' + callResult);
            }
        });
    });
}
exports.verifyMessage = verifyMessage;
