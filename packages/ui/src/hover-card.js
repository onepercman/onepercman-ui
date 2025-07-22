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
import { HoverCard as BaseHoverCard } from "@ark-ui/react";
import React from "react";
import { createComponentFactory, createComponentTree, } from "react-tvcx";
import { tv } from "tailwind-variants";
export const hoverCard = tv({
    slots: {
        content: [
            "[--arrow-size]:[6px]",
            "[--arrow-offset]:[-3px]",
            "z-[var(--z-index)] rounded-md border border-border bg-popover px-3 py-2 shadow-lg",
            "data-[state=open]:animate-in",
            "data-[state=open]:fade-in",
            "data-[state=closed]:animate-out",
            "data-[state=closed]:fade-out",
        ],
        arrowTip: "border-l border-t border-border !bg-popover",
    },
    variants: {
        size: {
            sm: { content: "p-1 text-xs" },
            md: { content: "px-2 py-1 text-sm" },
            lg: { content: "px-3 py-2 text-base" },
        },
    },
    defaultVariants: {
        size: "md",
    },
});
const { withRoot, withSlot } = createComponentFactory(hoverCard);
const Root = withRoot(BaseHoverCard.Root);
const RootProvider = withRoot(BaseHoverCard.RootProvider);
const Context = withSlot(BaseHoverCard.Context);
const Positioner = withSlot(BaseHoverCard.Positioner);
const Trigger = withSlot(BaseHoverCard.Trigger);
const Arrow = withSlot(BaseHoverCard.Arrow);
const ArrowTip = withSlot(BaseHoverCard.ArrowTip, "arrowTip");
const Content = withSlot(BaseHoverCard.Content, "content");
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
export const HoverCard = createComponentTree(Root, {
    Root,
    RootProvider,
    Context,
    Positioner,
    Trigger,
    Arrow: CustomArrow,
    ArrowTip,
    Content: CustomContent,
});
HoverCard.displayName = "HoverCard";
