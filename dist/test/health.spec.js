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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const supertest_1 = __importDefault(require("supertest"));
const index_1 = __importDefault(require("../index")); // Assuming your Express app is exported from app.ts
describe('Health Check API', () => {
    it('should return status 200 and a message', () => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield (0, supertest_1.default)(index_1.default).get('/');
        (0, chai_1.expect)(res.status).to.equal(200);
        (0, chai_1.expect)(res.body).to.have.property('message').to.equal('Health Check Ok');
    }));
});
describe('Counts API', () => {
    it('should return total of two numbers', () => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield (0, supertest_1.default)(index_1.default)
            .post('/counts')
            .send({
            num1: 5,
            num2: 10
        });
        (0, chai_1.expect)(res.status).to.equal(200);
        (0, chai_1.expect)(res.body).to.have.property('result').to.equal(15);
    }));
    it('should return all counts', () => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield (0, supertest_1.default)(index_1.default).get('/counts');
        (0, chai_1.expect)(res.status).to.equal(200);
        (0, chai_1.expect)(res.body).to.have.property('counts').to.be.an('array');
        (0, chai_1.expect)(res.body.counts[0]).to.have.property('count', 15);
    }));
});
