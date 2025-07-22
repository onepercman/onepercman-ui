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
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { Checkbox as BaseCheckbox } from "@ark-ui/react";
import React from "react";
import { LuMinus } from "react-icons/lu";
import { createComponentFactory, createComponentTree, } from "react-tvcx";
import { tv } from "tailwind-variants";
import { Check } from "./check";
export const checkbox = tv({
    base: "inline-flex cursor-pointer items-center gap-2",
    slots: {
        label: "",
        control: [
            "flex rounded-md border-2 border-border text-primary transition-colors hover:border-primary",
            "data-[state=checked]:border-primary",
        ],
        indicator: "m-auto",
    },
    variants: {
        size: {
            xs: { label: "text-xs", control: "h-4 w-4 text-xs" },
            sm: { label: "text-sm", control: "h-5 w-5 text-sm" },
            md: { label: "text-base", control: "h-6 w-6 text-base" },
            lg: { label: "text-lg", control: "h-8 w-8 text-lg" },
        },
        indeterminate: {
            true: {
                control: "data-[state=checked]:bg-primary data-[state=checked]:text-white",
            },
        },
        placement: {
            head: "flex-row",
            tail: "flex-row-reverse",
        },
    },
    defaultVariants: {
        size: "md",
        placement: "head",
        variant: "outlined",
        color: "primary",
    },
});
const { withRoot, withSlot } = createComponentFactory(checkbox);
const Root = withRoot(BaseCheckbox.Root, "base");
const RootProvider = withRoot(BaseCheckbox.RootProvider, "base");
const Context = withSlot(BaseCheckbox.Context);
const Control = withSlot(BaseCheckbox.Control, "control");
const Group = withSlot(BaseCheckbox.Group);
const HiddenInput = withSlot(BaseCheckbox.HiddenInput);
const Indicator = withSlot(BaseCheckbox.Indicator, "indicator");
const Label = withSlot(BaseCheckbox.Label, "label");
function _bootstrap(render) {
    return React.forwardRef(render);
}
export const CheckboxCustomRoot = _bootstrap(function (_a, ref) {
    var { children } = _a, props = __rest(_a, ["children"]);
    return (_jsx(Root, Object.assign({ ref: ref }, props, { children: _jsx(Context, { children: ({ checked }) => (_jsxs(_Fragment, { children: [_jsx(Label, { children: children }), _jsx(Control, { children: _jsx(Indicator, { children: checked ? (props.indeterminate ? (_jsx(LuMinus, { strokeWidth: 6 })) : (_jsx(Check, {}))) : null }) }), _jsx(HiddenInput, {})] })) }) })));
});
export const Checkbox = createComponentTree(CheckboxCustomRoot, {
    Root,
    RootProvider,
    Context,
    Control,
    Group,
    HiddenInput,
    Indicator,
    Label,
});
Checkbox.displayName = "Checkbox";
