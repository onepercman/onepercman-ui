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
import { SegmentGroup as BaseSegmentGroup } from "@ark-ui/react";
import React from "react";
import { createComponentFactory, createComponentTree, } from "react-tvcx";
import { tv } from "tailwind-variants";
export const segmentGroup = tv({
    base: "relative inline-flex items-center gap-2",
    slots: {
        item: "relative cursor-pointer select-none text-muted-foreground transition-colors data-[state=checked]:text-primary data-[state=checked]:[text-shadow:_0px_0px_10px_rgba(var(--tw-schemes-primary),0.50)] hover:text-foreground",
        indicator: "",
    },
    variants: {
        size: {
            sm: {
                item: "px-2 py-1 text-sm",
            },
            md: {
                item: "px-4 py-2 text-base",
            },
            lg: {
                item: "px-3 py-2 text-base",
            },
        },
        variant: {
            solid: {
                base: "rounded-md bg-component p-1",
                indicator: "absolute bottom-1 left-[var(--left)] h-[var(--height)] w-[var(--width)] rounded-md bg-card",
            },
            underlined: {
                base: "",
                indicator: "absolute bottom-0 left-[var(--left)] h-1 w-[var(--width)] rounded-md bg-foreground",
            },
            bordered: {
                base: "rounded-md border border-border p-1",
                indicator: "absolute bottom-1 left-[var(--left)] h-[var(--height)] w-[var(--width)] rounded-md bg-card",
            },
            light: {
                base: "",
                indicator: "absolute bottom-0 left-[var(--left)] h-[var(--height)] w-[var(--width)] rounded-md bg-card",
            },
        },
    },
    defaultVariants: {
        variant: "solid",
        size: "md",
    },
});
const { withRoot, withSlot } = createComponentFactory(segmentGroup);
const Root = withRoot(BaseSegmentGroup.Root, "base");
const RootProvider = withRoot(BaseSegmentGroup.RootProvider, "base");
const Context = withSlot(BaseSegmentGroup.Context);
const Indicator = withSlot(BaseSegmentGroup.Indicator, "indicator");
const Item = withSlot(BaseSegmentGroup.Item, "item");
const ItemContext = withSlot(BaseSegmentGroup.ItemContext);
const ItemControl = withSlot(BaseSegmentGroup.ItemControl);
const ItemHiddenInput = withSlot(BaseSegmentGroup.ItemHiddenInput);
const ItemText = withSlot(BaseSegmentGroup.ItemText);
const Label = withSlot(BaseSegmentGroup.Label);
const CustomItem = React.forwardRef(function (_a, ref) {
    var { children } = _a, props = __rest(_a, ["children"]);
    return (_jsxs(Item, Object.assign({ ref: ref }, props, { children: [_jsx(ItemText, { children: children }), _jsx(ItemControl, {}), _jsx(ItemHiddenInput, {})] })));
});
CustomItem.displayName = "Item";
function _bootstrap(render) {
    return React.forwardRef(render);
}
const CustomRoot = _bootstrap(function (_a, ref) {
    var { children } = _a, props = __rest(_a, ["children"]);
    return (_jsxs(Root, Object.assign({ ref: ref }, props, { children: [_jsx(Indicator, {}), children] })));
});
export const SegmentGroup = createComponentTree(CustomRoot, {
    Root,
    RootProvider,
    Context,
    Indicator,
    Item: CustomItem,
    ItemContext,
    ItemControl,
    ItemHiddenInput,
    ItemText,
    Label,
});
SegmentGroup.displayName = "SegmentGroup";
