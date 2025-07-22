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
import { Popover as BasePopover } from "@ark-ui/react";
import React from "react";
import { createComponentFactory, createComponentTree, } from "react-tvcx";
import { tv } from "tailwind-variants";
export const popover = tv({
    slots: {
        content: [
            "z-[var(--z-index)] rounded-md border border-border bg-popover px-3 py-2 shadow-lg",
            "data-[state=open]:animate-in",
            "data-[state=open]:fade-in",
            "data-[state=closed]:animate-out",
            "data-[state=closed]:fade-out",
        ],
        arrow: "",
        arrowTip: "border-l border-t border-border !bg-popover",
    },
    variants: {
        size: {
            sm: { content: "p-1 text-xs" },
            md: { content: "px-2 py-1 text-sm" },
            lg: { content: "px-3 py-2 text-base" },
        },
        arrowSize: {
            md: { arrow: "[--arrow-size:0.5rem]" },
        },
    },
    defaultVariants: {
        size: "md",
        arrowSize: "md",
    },
});
const { withRoot, withSlot } = createComponentFactory(popover);
const Root = withRoot(BasePopover.Root);
const RootProvider = withRoot(BasePopover.RootProvider);
const Anchor = withSlot(BasePopover.Anchor);
const Arrow = withSlot(BasePopover.Arrow, "arrow");
const ArrowTip = withSlot(BasePopover.ArrowTip, "arrowTip");
const CloseTrigger = withSlot(BasePopover.CloseTrigger);
const Context = withSlot(BasePopover.Context);
const Content = withSlot(BasePopover.Content, "content");
const Description = withSlot(BasePopover.Description);
const Indicator = withSlot(BasePopover.Indicator);
const Positioner = withSlot(BasePopover.Positioner);
const Title = withSlot(BasePopover.Title);
const Trigger = withSlot(BasePopover.Trigger);
const CustomContent = React.forwardRef(function (_a, ref) {
    var { children } = _a, props = __rest(_a, ["children"]);
    return (_jsx(Positioner, { children: _jsx(Content, Object.assign({ ref: ref }, props, { children: children })) }));
});
CustomContent.displayName = "Content";
const CustomArrow = React.forwardRef(function (_a, ref) {
    var { children } = _a, props = __rest(_a, ["children"]);
    return (_jsx(Arrow, Object.assign({ ref: ref }, props, { children: _jsx(ArrowTip, {}) })));
});
CustomArrow.displayName = "Arrow";
export const Popover = createComponentTree(Root, {
    Root,
    RootProvider,
    Anchor,
    Arrow: CustomArrow,
    ArrowTip,
    CloseTrigger,
    Context,
    Content: CustomContent,
    Description,
    Indicator,
    Positioner,
    Title,
    Trigger,
});
Popover.displayName = "Popover";
