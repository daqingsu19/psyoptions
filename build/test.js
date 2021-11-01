"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
        while (_) try {
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
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(exports, "__esModule", { value: true });
var psy_american_1 = require("@mithraic-labs/psy-american");
var market_meta_1 = require("@mithraic-labs/market-meta");
var anchor_1 = require("@project-serum/anchor");
var provider_1 = require("@project-serum/anchor/dist/cjs/provider");
var spl_token_1 = require("@solana/spl-token");
var web3_js_1 = require("@solana/web3.js");
var fs = __importStar(require("fs"));
var serum_1 = require("@project-serum/serum");
var crypto_1 = require("crypto");
function readKeypair() {
    return JSON.parse(fs.readFileSync('/Users/jasonchitla/.config/solana/id.json', 'utf-8'));
}
// Below we create the Anchor Program from the PsyAmerican IDL,
//  devnet connection, and wallet keypair
var PSY_PROGRAM_ID = new web3_js_1.PublicKey('R2y9ip6mxmWUj4pt54jP2hz2dgvMozy9VTSwMWE7evs');
var WRAPPED_SOL_MINT = new web3_js_1.PublicKey('So11111111111111111111111111111111111111112');
var connection = new web3_js_1.Connection('https://api.devnet.solana.com', 'processed');
var wallet = new provider_1.NodeWallet(web3_js_1.Keypair.fromSecretKey(Buffer.from(readKeypair())));
var provider = new anchor_1.Provider(connection, wallet, { commitment: 'processed' });
var program = new anchor_1.Program(psy_american_1.PsyAmericanIdl, PSY_PROGRAM_ID, provider);
// Filter devnet markets to only unexpired markets
// TODO: Filter for only SOL markets
var activeDevnetMarkets = market_meta_1.MarketMeta.devnet.optionMarkets.filter(function (marketMeta) { return marketMeta.expiration * 1000 > new Date().getTime(); });
/**
 * WSol call option
 */
var EXAMPLE_WSOL_CALL_OPTION = {
    expiration: 1637971199,
    optionMarketAddress: "DmoqgMkpMiAupjFozK8a8CWb2B1d8KNGeaT8RxVUTCS9",
    optionContractMintAddress: "7E1P15cQZHcJoCcpYKFFeWTamUmQR1cRafpgXTCvfut3",
    optionWriterTokenMintAddress: "EgGYZt9NYshajJZX5UTojxcT4TZzKnSUQWEZjt4RsmhZ",
    quoteAssetMint: "E6Z6zLzk8MWY3TY8E87mr88FhGowEPJTeMWzkqtL6qkF",
    quoteAssetPoolAddress: "7f28ZHC4Vp3QAH2tfpr7BQ6rshTRwsiAGGQWXYZLe6c3",
    underlyingAssetMint: "So11111111111111111111111111111111111111112",
    underlyingAssetPoolAddress: "CUxCMR35ikgb1Y8c1AM1PgVzo297Q6EVzk4cEViAtvna",
    underlyingAssetPerContract: "1000000000",
    quoteAssetPerContract: "25000",
    serumMarketAddress: "6dorcowNBneqQgQuJJqhs9vXBdjR1MiJ3LBp4Bx6Ewf",
    serumProgramId: "DESVgJVGajEgKGXhb6XmqDHGz3VjdgP7rEVESBgxmroY",
    psyOptionsProgramId: "R2y9ip6mxmWUj4pt54jP2hz2dgvMozy9VTSwMWE7evs",
};
var optionPublicKey = new web3_js_1.PublicKey(EXAMPLE_WSOL_CALL_OPTION.optionMarketAddress);
var optionTokenMint = new web3_js_1.PublicKey(EXAMPLE_WSOL_CALL_OPTION.optionContractMintAddress);
var writerTokenMint = new web3_js_1.PublicKey(EXAMPLE_WSOL_CALL_OPTION.optionWriterTokenMintAddress);
var serumMarketKey = new web3_js_1.PublicKey(EXAMPLE_WSOL_CALL_OPTION.serumMarketAddress);
var quoteAssetMint = new web3_js_1.PublicKey(EXAMPLE_WSOL_CALL_OPTION.quoteAssetMint);
var WrappedSolToken = new spl_token_1.Token(connection, WRAPPED_SOL_MINT, spl_token_1.TOKEN_PROGRAM_ID, wallet.payer);
var QuoteAssetToken = new spl_token_1.Token(connection, quoteAssetMint, spl_token_1.TOKEN_PROGRAM_ID, wallet.payer);
var optionToken = new spl_token_1.Token(program.provider.connection, optionTokenMint, spl_token_1.TOKEN_PROGRAM_ID, null);
var writerToken = new spl_token_1.Token(program.provider.connection, writerTokenMint, spl_token_1.TOKEN_PROGRAM_ID, null);
/**
 * Create an account that wraps Sol
 */
var createWSolAccountInstruction = function (wallet, lamports) {
    var keypair = new web3_js_1.Keypair();
    var transaction = new web3_js_1.Transaction();
    transaction.add(web3_js_1.SystemProgram.createAccount({
        fromPubkey: wallet.publicKey,
        newAccountPubkey: keypair.publicKey,
        lamports: lamports,
        space: spl_token_1.AccountLayout.span,
        programId: spl_token_1.TOKEN_PROGRAM_ID,
    }));
    transaction.add(spl_token_1.Token.createInitAccountInstruction(spl_token_1.TOKEN_PROGRAM_ID, WRAPPED_SOL_MINT, keypair.publicKey, wallet.publicKey));
    return [transaction, keypair];
};
(function () { return __awaiter(void 0, void 0, void 0, function () {
    var option, optionWithKey, splTokenRentBalance, mintTransaction, signers, fees, numContracts, lamports, _a, createWSolAccountTx, wSolKeypair, _b, optionTokenDest, writerTokenDest, err_1, ix_1, err_2, ix_2, _c, ix, _signers, closeWSolIx, market, bids, asks, _d, _e, _f, price, size, asks_1, asks_1_1, order_1, side, payer, _g, clientId, serumProgramId, order, _h, openOrdersKey, newOrderTx, cancelOrderTx, _j, _k, exerciseTx, exerciseSigners, quoteAssetSource, optionTokenSource, exerciseFees, exerciseNumContracts, exerciseLamports, _l, createExerciseWSolAccountTx, wSolExerciseKeypair, exerciseIx;
    var e_1, _m, e_2, _o;
    return __generator(this, function (_p) {
        switch (_p.label) {
            case 0: return [4 /*yield*/, program.account.optionMarket.fetch(EXAMPLE_WSOL_CALL_OPTION.optionMarketAddress)];
            case 1:
                option = (_p.sent());
                optionWithKey = __assign(__assign({}, option), { key: new web3_js_1.PublicKey(EXAMPLE_WSOL_CALL_OPTION.optionMarketAddress) });
                return [4 /*yield*/, connection.getMinimumBalanceForRentExemption(spl_token_1.AccountLayout.span)];
            case 2:
                splTokenRentBalance = _p.sent();
                mintTransaction = new web3_js_1.Transaction();
                signers = [];
                fees = (0, psy_american_1.feeAmountPerContract)(option.underlyingAmountPerContract);
                numContracts = 1;
                lamports = option.underlyingAmountPerContract
                    .add(fees)
                    .mul(new anchor_1.BN(numContracts));
                _a = __read(createWSolAccountInstruction(wallet, splTokenRentBalance + lamports.toNumber()), 2), createWSolAccountTx = _a[0], wSolKeypair = _a[1];
                mintTransaction.add(createWSolAccountTx);
                signers.push(wSolKeypair);
                return [4 /*yield*/, Promise.all([
                        spl_token_1.Token.getAssociatedTokenAddress(spl_token_1.ASSOCIATED_TOKEN_PROGRAM_ID, spl_token_1.TOKEN_PROGRAM_ID, optionTokenMint, wallet.publicKey),
                        spl_token_1.Token.getAssociatedTokenAddress(spl_token_1.ASSOCIATED_TOKEN_PROGRAM_ID, spl_token_1.TOKEN_PROGRAM_ID, writerTokenMint, wallet.publicKey),
                    ])];
            case 3:
                _b = __read.apply(void 0, [_p.sent(), 2]), optionTokenDest = _b[0], writerTokenDest = _b[1];
                _p.label = 4;
            case 4:
                _p.trys.push([4, 6, , 7]);
                return [4 /*yield*/, optionToken.getAccountInfo(optionTokenDest)];
            case 5:
                _p.sent();
                return [3 /*break*/, 7];
            case 6:
                err_1 = _p.sent();
                ix_1 = spl_token_1.Token.createAssociatedTokenAccountInstruction(spl_token_1.ASSOCIATED_TOKEN_PROGRAM_ID, spl_token_1.TOKEN_PROGRAM_ID, optionTokenMint, optionTokenDest, wallet.publicKey, wallet.publicKey);
                mintTransaction.add(ix_1);
                return [3 /*break*/, 7];
            case 7:
                _p.trys.push([7, 9, , 10]);
                return [4 /*yield*/, writerToken.getAccountInfo(writerTokenDest)];
            case 8:
                _p.sent();
                return [3 /*break*/, 10];
            case 9:
                err_2 = _p.sent();
                ix_2 = spl_token_1.Token.createAssociatedTokenAccountInstruction(spl_token_1.ASSOCIATED_TOKEN_PROGRAM_ID, spl_token_1.TOKEN_PROGRAM_ID, writerTokenMint, writerTokenDest, wallet.publicKey, wallet.publicKey);
                mintTransaction.add(ix_2);
                return [3 /*break*/, 10];
            case 10: return [4 /*yield*/, psy_american_1.instructions.mintOptionInstruction(program, optionTokenDest, writerTokenDest, wSolKeypair.publicKey, new anchor_1.BN(1), optionWithKey)];
            case 11:
                _c = _p.sent(), ix = _c.ix, _signers = _c.signers;
                mintTransaction.add(ix);
                signers.concat(_signers);
                closeWSolIx = spl_token_1.Token.createCloseAccountInstruction(spl_token_1.TOKEN_PROGRAM_ID, wSolKeypair.publicKey, wallet.publicKey, // Send any remaining SOL to the owner
                wallet.publicKey, // payer to close account
                []);
                mintTransaction.add(closeWSolIx);
                // Sign and send transaction
                return [4 /*yield*/, program.provider.send(mintTransaction, signers)];
            case 12:
                // Sign and send transaction
                _p.sent();
                return [4 /*yield*/, serum_1.Market.load(connection, new web3_js_1.PublicKey(EXAMPLE_WSOL_CALL_OPTION.serumMarketAddress), {}, new web3_js_1.PublicKey(EXAMPLE_WSOL_CALL_OPTION.serumProgramId))];
            case 13:
                market = _p.sent();
                return [4 /*yield*/, market.loadBids(connection)];
            case 14:
                bids = _p.sent();
                return [4 /*yield*/, market.loadAsks(connection)];
            case 15:
                asks = _p.sent();
                try {
                    // L2 orderbook data
                    for (_d = __values(bids.getL2(20)), _e = _d.next(); !_e.done; _e = _d.next()) {
                        _f = __read(_e.value, 2), price = _f[0], size = _f[1];
                        console.log(price, size);
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (_e && !_e.done && (_m = _d.return)) _m.call(_d);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
                try {
                    // L3 orderbook data
                    for (asks_1 = __values(asks), asks_1_1 = asks_1.next(); !asks_1_1.done; asks_1_1 = asks_1.next()) {
                        order_1 = asks_1_1.value;
                        console.log(order_1.openOrdersAddress.toBase58(), order_1.orderId.toString('hex'), order_1.price, order_1.size, order_1.side);
                    }
                }
                catch (e_2_1) { e_2 = { error: e_2_1 }; }
                finally {
                    try {
                        if (asks_1_1 && !asks_1_1.done && (_o = asks_1.return)) _o.call(asks_1);
                    }
                    finally { if (e_2) throw e_2.error; }
                }
                side = 'buy';
                if (!(side === 'buy')) return [3 /*break*/, 17];
                return [4 /*yield*/, spl_token_1.Token.getAssociatedTokenAddress(spl_token_1.ASSOCIATED_TOKEN_PROGRAM_ID, spl_token_1.TOKEN_PROGRAM_ID, market.quoteMintAddress, wallet.publicKey)];
            case 16:
                _g = _p.sent();
                return [3 /*break*/, 18];
            case 17:
                _g = optionTokenDest;
                _p.label = 18;
            case 18:
                payer = _g;
                clientId = new anchor_1.BN((0, crypto_1.randomInt)(100000));
                serumProgramId = new web3_js_1.PublicKey(EXAMPLE_WSOL_CALL_OPTION.serumProgramId);
                order = {
                    owner: wallet.publicKey,
                    payer: payer,
                    side: side,
                    price: 221,
                    size: 1,
                    orderType: 'limit',
                    clientId: clientId,
                    selfTradeBehavior: 'decrementTake',
                    programId: serumProgramId,
                };
                return [4 /*yield*/, psy_american_1.serumInstructions.newOrderInstruction(program, optionPublicKey, serumProgramId, serumMarketKey, order)];
            case 19:
                _h = _p.sent(), openOrdersKey = _h.openOrdersKey, newOrderTx = _h.tx;
                return [4 /*yield*/, program.provider.send(newOrderTx)];
            case 20:
                _p.sent();
                _k = (_j = new web3_js_1.Transaction()).add;
                return [4 /*yield*/, psy_american_1.serumInstructions.cancelOrderByClientId(program, optionPublicKey, serumProgramId, serumMarketKey, { clientId: clientId, openOrdersAddress: openOrdersKey })];
            case 21:
                cancelOrderTx = _k.apply(_j, [_p.sent()]);
                return [4 /*yield*/, program.provider.send(cancelOrderTx)];
            case 22:
                _p.sent();
                exerciseTx = new web3_js_1.Transaction();
                exerciseSigners = [];
                return [4 /*yield*/, spl_token_1.Token.getAssociatedTokenAddress(spl_token_1.ASSOCIATED_TOKEN_PROGRAM_ID, spl_token_1.TOKEN_PROGRAM_ID, quoteAssetMint, wallet.publicKey)];
            case 23:
                quoteAssetSource = _p.sent();
                optionTokenSource = optionTokenDest;
                exerciseFees = (0, psy_american_1.feeAmountPerContract)(option.underlyingAmountPerContract);
                exerciseNumContracts = 1;
                exerciseLamports = option.underlyingAmountPerContract
                    .add(exerciseFees)
                    .mul(new anchor_1.BN(exerciseNumContracts));
                _l = __read(createWSolAccountInstruction(wallet, splTokenRentBalance + exerciseLamports.toNumber()), 2), createExerciseWSolAccountTx = _l[0], wSolExerciseKeypair = _l[1];
                exerciseTx.add(createExerciseWSolAccountTx);
                exerciseSigners.push(wSolExerciseKeypair);
                return [4 /*yield*/, psy_american_1.instructions.exerciseOptionsInstruction(program, new anchor_1.BN(1), optionWithKey, optionTokenSource, wSolExerciseKeypair.publicKey, quoteAssetSource)];
            case 24:
                exerciseIx = _p.sent();
                exerciseTx.add(exerciseIx);
                // Sign and send transaction to exercise
                return [4 /*yield*/, program.provider.send(exerciseTx, exerciseSigners)];
            case 25:
                // Sign and send transaction to exercise
                _p.sent();
                return [2 /*return*/];
        }
    });
}); })();
