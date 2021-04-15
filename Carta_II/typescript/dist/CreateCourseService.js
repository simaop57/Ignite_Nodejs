"use strict";
/**
 * name: string
 * duration: number
 * educator: string
 */
Object.defineProperty(exports, "__esModule", { value: true });
var CreateCourse = /** @class */ (function () {
    function CreateCourse() {
    }
    CreateCourse.prototype.execute = function (_a) {
        var name = _a.name, educator = _a.educator, _b = _a.duration, duration = _b === void 0 ? 8 : _b;
        return console.log(educator, duration, name);
    };
    return CreateCourse;
}());
exports.default = new CreateCourse();
