"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import React from "react";
export const Check = React.forwardRef(function (props, ref) {
    return (_jsx("svg", Object.assign({ ref: ref, xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 52 52", stroke: "currentColor" }, props, { children: _jsx("path", { fill: "none", strokeWidth: "8", strokeLinecap: "round", strokeLinejoin: "round", d: "M10 27l10 12 25-25", strokeDasharray: "50", strokeDashoffset: "50", children: _jsx("animate", { attributeName: "stroke-dashoffset", values: "50;0", dur: "0.1s", fill: "freeze" }) }) })));
});
Check.displayName = "Check";
