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
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @class RandomImage
 */
class RandomImage {
    /**
     * Creates an instance of RandomImage.
     * @param {NekoBot} client
     */
    constructor(client) {
        this.client = client;
    }
    /**
     * @param {RandomImageType} type
     * @returns {(Promise<String | void>)}
     */
    getImage(type) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { body } = yield this.client.request.get(`${this.client.baseURL}image`)
                    .query({
                    type
                });
                return body.message;
            }
            catch (err) {
                if (err.message === "Bad Request") {
                    throw Error("Make sure the parameter(s) is correct!");
                }
            }
        });
    }
}
exports.RandomImage = RandomImage;
//# sourceMappingURL=RandomImage.js.map