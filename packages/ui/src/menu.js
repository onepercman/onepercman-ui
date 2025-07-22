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
import { Menu as BaseMenu } from "@ark-ui/react";
import React from "react";
import { createComponentFactory, createComponentTree, } from "react-tvcx";
import { tv } from "tailwind-variants";
export const menu = tv({
    slots: {
        content: [
            "flex w-full flex-col overflow-hidden rounded-md bg-popover p-2 shadow-lg outline-none",
            "data-[state=open]:animate-in",
            "data-[state=open]:fade-in",
            "data-[state=closed]:animate-out",
            "data-[state=closed]:fade-out",
        ],
        itemGroup: "flex flex-col",
        itemGroupLabel: "w-full px-2 py-1 text-xs text-muted-foreground",
        item: "relative inline-flex cursor-pointer items-center justify-between gap-2 rounded-md px-3 py-2 font-medium hover:bg-component/80",
        itemIndicator: [
            "absolute right-2 top-0 h-full items-center",
            "data-[state=checked]:flex",
        ],
        separator: "my-1 h-px w-full border-border",
    },
    variants: {
        size: {
            xs: { item: "py-1 text-xs" },
            sm: { item: "py-1 text-sm" },
            md: { item: "text-sm" },
            lg: { item: "text-lg" },
        },
    },
    defaultVariants: {
        size: "md",
    },
});
const { withRoot, withSlot } = createComponentFactory(menu);
const Root = withRoot(BaseMenu.Root);
const RootProvider = withRoot(BaseMenu.RootProvider);
const Arrow = withSlot(BaseMenu.Arrow);
const ArrowTip = withSlot(BaseMenu.ArrowTip);
const CheckboxItem = withSlot(BaseMenu.CheckboxItem);
const Context = withSlot(BaseMenu.Context);
const ContextTrigger = withSlot(BaseMenu.ContextTrigger);
const Indicator = withSlot(BaseMenu.Indicator);
const Item = withSlot(BaseMenu.Item, "item");
const ItemContext = withSlot(BaseMenu.ItemContext);
const ItemGroup = withSlot(BaseMenu.ItemGroup, "itemGroup");
const ItemGroupLabel = withSlot(BaseMenu.ItemGroupLabel, "itemGroupLabel");
const ItemIndicator = withSlot(BaseMenu.ItemIndicator, "itemIndicator");
const ItemText = withSlot(BaseMenu.ItemText);
const Positioner = withSlot(BaseMenu.Positioner);
const RadioItem = withSlot(BaseMenu.RadioItem, "item");
const RadioItemGroup = withSlot(BaseMenu.RadioItemGroup, "itemGroup");
const Separator = withSlot(BaseMenu.Separator, "separator");
const Trigger = withSlot(BaseMenu.Trigger);
const TriggerItem = withSlot(BaseMenu.TriggerItem);
const Content = withSlot(BaseMenu.Content, "content");
const CustomContent = React.forwardRef(function (_a, ref) {
    var { children } = _a, props = __rest(_a, ["children"]);
    return (_jsx(Positioner, { children: _jsx(Content, Object.assign({ ref: ref }, props, { children: children })) }));
});
CustomContent.displayName = "Content";
export const Menu = createComponentTree(Root, {
    Root,
    RootProvider,
    Arrow,
    ArrowTip,
    CheckboxItem,
    Context,
    ContextTrigger,
    Indicator,
    Item,
    ItemContext,
    ItemGroup,
    ItemGroupLabel,
    ItemIndicator,
    ItemText,
    Positioner,
    RadioItem,
    RadioItemGroup,
    Separator,
    Trigger,
    TriggerItem,
    Content: CustomContent,
});
Menu.displayName = "Menu";
