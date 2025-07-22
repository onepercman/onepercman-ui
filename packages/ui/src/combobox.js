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
import { Combobox as BaseCombobox, } from "@ark-ui/react";
import React from "react";
import { createComponentFactory, createComponentTree, } from "react-tvcx";
import { tv } from "tailwind-variants";
export const combobox = tv({
    base: "",
    slots: {
        trigger: "text-muted-foreground",
        input: "w-full",
        clearTrigger: "text-muted-foreground",
        content: [
            "flex w-full flex-col overflow-hidden rounded-md bg-popover p-2 shadow-lg",
            "data-[state=open]:animate-in",
            "data-[state=open]:fade-in",
            "data-[state=closed]:animate-out",
            "data-[state=closed]:fade-out",
        ],
        itemGroup: "flex flex-col",
        ItemGroupLabel: "w-full px-2 py-1 text-xs text-muted-foreground",
        item: [
            "relative inline-flex cursor-pointer items-start justify-between gap-2 rounded-md py-2 pl-3 pr-8 font-medium data-[state=checked]:text-primary hover:bg-component/80",
            "data-[disabled]:text-muted",
        ],
        itemText: "grow",
        itemIndicator: "absolute right-2 top-0 h-full items-center text-xs text-primary data-[state=checked]:flex",
    },
    variants: {
        size: {
            xs: { item: "py-1 text-xs" },
            sm: { item: "py-1 text-sm" },
            md: { item: "text-base" },
            lg: { item: "text-lg" },
        },
    },
    defaultVariants: { size: "md" },
});
const { withRoot, withSlot } = createComponentFactory(combobox);
const Root = withRoot(BaseCombobox.Root, "base");
const RootProvider = withRoot(BaseCombobox.RootProvider, "base");
const Context = withSlot(BaseCombobox.Context);
const ItemContext = withSlot(BaseCombobox.ItemContext);
const Label = withSlot(BaseCombobox.Label);
const Control = withSlot(BaseCombobox.Control);
const Trigger = withSlot(BaseCombobox.Trigger, "trigger");
const Input = withSlot(BaseCombobox.Input, "input");
const ClearTrigger = withSlot(BaseCombobox.ClearTrigger, "clearTrigger");
const Positioner = withSlot(BaseCombobox.Positioner);
const List = withSlot(BaseCombobox.List);
const Content = withSlot(BaseCombobox.Content, "content");
const ItemGroup = withSlot(BaseCombobox.ItemGroup, "itemGroup");
const ItemGroupLabel = withSlot(BaseCombobox.ItemGroupLabel, "ItemGroupLabel");
const Item = withSlot(BaseCombobox.Item, "item");
const ItemText = withSlot(BaseCombobox.ItemText, "itemText");
const ItemIndicator = withSlot(BaseCombobox.ItemIndicator, "itemIndicator");
function _bootstrap(render) {
    return React.forwardRef(render);
}
const CustomRoot = _bootstrap(function (_a, ref) {
    var { children, positioning } = _a, props = __rest(_a, ["children", "positioning"]);
    return (_jsx(Root, Object.assign({ ref: ref, unmountOnExit: true, positioning: Object.assign({ sameWidth: true }, positioning) }, props, { children: children })));
});
const CustomContent = React.forwardRef(function (_a, ref) {
    var { children } = _a, props = __rest(_a, ["children"]);
    return (_jsx(Positioner, { children: _jsx(Content, Object.assign({ ref: ref }, props, { children: children })) }));
});
CustomContent.displayName = "Content";
export const Combobox = createComponentTree(CustomRoot, {
    Root: Root,
    RootProvider,
    Context,
    ItemContext,
    Label,
    Control,
    Trigger,
    Input,
    ClearTrigger,
    Positioner,
    List,
    Content: CustomContent,
    ItemGroup,
    ItemGroupLabel,
    Item,
    ItemText,
    ItemIndicator,
});
Combobox.displayName = "Combobox";
