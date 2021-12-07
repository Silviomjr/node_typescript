"use strict";
/**
 * nome - string;
 * duration - number
 * educator: string
 */
Object.defineProperty(exports, "__esModule", { value: true });
class CreateCouseService {
    execute({ duration = 8, educator, name }) {
        console.log(name, duration, educator);
    }
}
exports.default = new CreateCouseService();
