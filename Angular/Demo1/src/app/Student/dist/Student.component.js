"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.StudentComponent = void 0;
var core_1 = require("@angular/core");
var StudentComponent = /** @class */ (function () {
    function StudentComponent() {
    }
    StudentComponent = __decorate([
        core_1.Component({
            selector: "xyz",
            template: "\n  <h1>Student Component Works dude</h1>\n\n  ",
            styleUrls: ["./Student.component.css"]
        })
    ], StudentComponent);
    return StudentComponent;
}());
exports.StudentComponent = StudentComponent;
