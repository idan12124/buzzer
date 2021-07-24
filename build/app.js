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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var messages_1 = __importDefault(require("./routes/messages"));
var division_1 = __importDefault(require("./routes/division"));
var agent_1 = __importDefault(require("./routes/agent"));
var dispatch_1 = __importDefault(require("./routes/dispatch"));
var typeorm_1 = require("typeorm");
var division_2 = __importDefault(require("./entitys/division"));
var agent_2 = __importDefault(require("./entitys/agent"));
var message_1 = __importDefault(require("./entitys/message"));
var dispatch_2 = __importDefault(require("./entitys/dispatch"));
var dispatcher_1 = __importDefault(require("./dispatcher"));
var app = express_1.default();
var PORT = process.env.PORT || 5000;
app.use(express_1.default.json());
app.use("/message", messages_1.default);
app.use("/agent", agent_1.default);
app.use("/dispatch", dispatch_1.default);
app.use("/division", division_1.default);
typeorm_1.createConnection({
    type: "postgres",
    url: "postgres://weahxkqvxopzks:e6ddbff5046b6c0be5f943f352b41fe9ce600ad9297837cccf4367a7373a8a7c@ec2-54-147-93-73.compute-1.amazonaws.com:5432/d38okb516mk9uk",
    // host: "localhost",
    // port: 5432,
    // username: "postgres",
    // password: "abc123",
    // database: "test",
    // logging: true,
    synchronize: true,
    extra: {
        ssl: true,
    },
    entities: [division_2.default, agent_2.default, message_1.default, dispatch_2.default],
}).then(function () {
    app.listen(5000, function () { return __awaiter(void 0, void 0, void 0, function () {
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    console.log("listeen on port 5000");
                    _a = setInterval;
                    return [4 /*yield*/, dispatcher_1.default];
                case 1:
                    _a.apply(void 0, [_b.sent(), 900000]);
                    return [2 /*return*/];
            }
        });
    }); });
});
