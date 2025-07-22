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
function pad(d) {
    return d < 10 ? "0" + d.toString() : d.toString();
}
function generateNumbers(maxValue) {
    return Array(maxValue + 1)
        .fill(0)
        .map((_, index) => [pad(index), _jsx("br", {}, index)]);
}
export const Countdown = forwardRef(function (_a, ref) {
    var { as: Component = "span", value = 0, className, maxValue = 99 } = _a, props = __rest(_a, ["as", "value", "className", "maxValue"]);
    return (_jsx(Component, { ref: ref, className: cn(className, "inline-flex"), children: _jsx("span", Object.assign({ className: "inline-block h-[1em] overflow-hidden" }, props, { children: _jsx("span", { className: "ease-expo relative block whitespace-pre text-center leading-none transition-all duration-500", style: {
                    top: -value + "em",
                }, children: generateNumbers(maxValue) }) })) }));
});
Countdown.displayName = "Countdown";
