"use client";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { jsx as _jsx } from "react/jsx-runtime";
import { cn, forwardRef } from "react-tvcx";
import { Spinner } from "./spinner";
export const Loader = forwardRef(function (_a, ref) {
    var { as: Component = "div", children, className } = _a, props = __rest(_a, ["as", "children", "className"]);
    return (_jsx(Component, Object.assign({ ref: ref, className: cn("flex min-h-56", className) }, props, { children: _jsx("div", { className: "m-auto flex flex-col items-center gap-4 p-4", children: _jsx(Spinner, {}) }) })));
});
Loader.displayName = "Loader";
export default Loader;
