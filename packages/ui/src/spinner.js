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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export const Spinner = function (_a) {
    var props = __rest(_a, []);
    return (_jsx("svg", Object.assign({ width: "1em", height: "1em", stroke: "currentColor", viewBox: "0 0 24 24", strokeWidth: "4", xmlns: "http://www.w3.org/2000/svg" }, props, { children: _jsxs("g", { children: [_jsxs("circle", { cx: "12", cy: "12", r: "9.5", fill: "none", strokeLinecap: "round", children: [_jsx("animate", { attributeName: "stroke-dasharray", dur: "1.5s", calcMode: "spline", values: "0 150;42 150;42 150;42 150", keyTimes: "0;0.475;0.95;1", keySplines: "0.42,0,0.58,1;0.42,0,0.58,1;0.42,0,0.58,1", repeatCount: "indefinite" }), _jsx("animate", { attributeName: "stroke-dashoffset", dur: "1.5s", calcMode: "spline", values: "0;-16;-59;-59", keyTimes: "0;0.475;0.95;1", keySplines: "0.42,0,0.58,1;0.42,0,0.58,1;0.42,0,0.58,1", repeatCount: "indefinite" })] }), _jsx("animateTransform", { attributeName: "transform", type: "rotate", dur: "2s", values: "0 12 12;360 12 12", repeatCount: "indefinite" })] }) })));
};
Spinner.displayName = "Spinner";
