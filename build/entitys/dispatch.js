"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var typeorm_1 = require("typeorm");
var agent_1 = __importDefault(require("./agent"));
var message_1 = __importDefault(require("./message"));
var Dispatch = /** @class */ (function (_super) {
    __extends(Dispatch, _super);
    function Dispatch() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn(),
        __metadata("design:type", Number)
    ], Dispatch.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column({ type: "date" }),
        __metadata("design:type", String)
    ], Dispatch.prototype, "timestamp", void 0);
    __decorate([
        typeorm_1.Column({ nullable: true }),
        __metadata("design:type", Number)
    ], Dispatch.prototype, "agentId", void 0);
    __decorate([
        typeorm_1.ManyToOne(function () { return message_1.default; }),
        typeorm_1.JoinColumn(),
        __metadata("design:type", Number)
    ], Dispatch.prototype, "messageId", void 0);
    __decorate([
        typeorm_1.ManyToOne(function () { return agent_1.default; }),
        typeorm_1.JoinColumn(),
        __metadata("design:type", Number)
    ], Dispatch.prototype, "agentID", void 0);
    Dispatch = __decorate([
        typeorm_1.Entity()
    ], Dispatch);
    return Dispatch;
}(typeorm_1.BaseEntity));
exports.default = Dispatch;
