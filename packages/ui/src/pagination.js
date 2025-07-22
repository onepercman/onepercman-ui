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
import { Pagination as BasePagination, } from "@ark-ui/react";
import React from "react";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";
import { cn } from "react-tvcx";
import { Button } from "./button";
function _bootstrap(render) {
    return React.forwardRef(render);
}
export const Pagination = _bootstrap(function (_a, ref) {
    var { className, size, variant, color, activeProps = { color: "primary" }, inactiveProps } = _a, props = __rest(_a, ["className", "size", "variant", "color", "activeProps", "inactiveProps"]);
    return (_jsxs(BasePagination.Root, Object.assign({ ref: ref, className: cn("inline-flex items-center gap-2", className) }, props, { children: [_jsx(BasePagination.PrevTrigger, { asChild: true, children: _jsx(Button, { size: size, variant: variant, color: color, leftIcon: _jsx(LuChevronLeft, {}) }) }), _jsx(BasePagination.Context, { children: (pagination) => pagination.pages.map((page, index) => page.type === "page" ? (_jsx(BasePagination.Item, { asChild: true, value: page.value, children: _jsx(Button, Object.assign({ size: size, variant: variant, color: color }, (pagination.page === page.value
                        ? activeProps
                        : inactiveProps), { children: page.value })) }, index)) : (_jsx(BasePagination.Ellipsis, { asChild: true, index: index, children: _jsx(Button, { size: size, variant: variant, color: color, className: "pointer-events-none", children: "\u2026" }) }, index))) }), _jsx(BasePagination.NextTrigger, { asChild: true, children: _jsx(Button, { size: size, variant: variant, color: color, leftIcon: _jsx(LuChevronRight, {}) }) })] })));
});
Pagination.displayName = "Pagination";
