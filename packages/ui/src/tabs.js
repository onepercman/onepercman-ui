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
import { Tabs as BaseTabs } from "@ark-ui/react";
import React from "react";
import { createComponentFactory, createComponentTree, } from "react-tvcx";
import { tv } from "tailwind-variants";
export const tabs = tv({
    base: "",
    slots: {
        list: "relative inline-flex items-center gap-2",
        trigger: "relative select-none text-muted-foreground transition-colors data-[selected]:text-primary data-[selected]:[text-shadow:_0px_0px_10px_rgba(var(--tw-schemes-primary),0.50)] hover:text-foreground",
        indicator: "",
        content: "",
    },
    variants: {
        size: {
            sm: {
                trigger: "px-2 py-1 text-sm",
            },
            md: {
                trigger: "px-4 py-2 text-base",
            },
            lg: {
                trigger: "px-3 py-2 text-base",
            },
        },
        variant: {
            solid: {
                list: "rounded-md bg-component p-1",
                indicator: "absolute bottom-1 left-[var(--left)] h-[var(--height)] w-[var(--width)] rounded-md bg-card",
            },
            underlined: {
                list: "",
                indicator: "absolute bottom-0 left-[var(--left)] h-1 w-[var(--width)] rounded-md bg-foreground",
            },
            bordered: {
                list: "rounded-md border border-border p-1",
                indicator: "absolute bottom-1 left-[var(--left)] h-[var(--height)] w-[var(--width)] rounded-md bg-card",
            },
            light: {
                list: "",
                indicator: "absolute bottom-0 left-[var(--left)] h-[var(--height)] w-[var(--width)] rounded-md bg-card",
            },
        },
    },
    defaultVariants: {
        variant: "solid",
        size: "md",
    },
});
const { withRoot, withSlot } = createComponentFactory(tabs);
const Root = withRoot(BaseTabs.Root, "base");
const Content = withSlot(BaseTabs.Content, "content");
const Context = withSlot(BaseTabs.Context);
const Indicator = withSlot(BaseTabs.Indicator, "indicator");
const List = withSlot(BaseTabs.List, "list");
const RootProvider = withSlot(BaseTabs.RootProvider);
const Trigger = withSlot(BaseTabs.Trigger, "trigger");
const CustomList = React.forwardRef(function (_a, ref) {
    var { children } = _a, props = __rest(_a, ["children"]);
    return (_jsxs(List, Object.assign({ ref: ref }, props, { children: [_jsx(Indicator, {}), children] })));
});
CustomList.displayName = "List";
export const Tabs = createComponentTree(Root, {
    Root,
    Content,
    Context,
    Indicator,
    List: CustomList,
    RootProvider,
    Trigger,
});
Tabs.displayName = "Tabs";
