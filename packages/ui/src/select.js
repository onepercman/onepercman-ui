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
import { Select as BaseSelect, } from "@ark-ui/react";
import React from "react";
import { createComponentFactory, createComponentTree, } from "react-tvcx";
import { tv } from "tailwind-variants";
export const select = tv({
    base: "",
    slots: {
        trigger: "data-[placeholder-shown]:text-muted-foreground",
        valueText: "grow text-left",
        clearTrigger: "text-muted-foreground",
        indicator: "text-muted-foreground",
        content: [
            "flex w-full flex-col overflow-hidden rounded-md bg-popover p-2 shadow-lg",
            "data-[state=open]:animate-in",
            "data-[state=open]:fade-in",
            "data-[state=closed]:animate-out",
            "data-[state=closed]:fade-out",
        ],
        itemGroup: "flex flex-col",
        itemGroupLabel: "w-full px-2 py-1 text-xs text-muted-foreground",
        item: [
            "relative inline-flex cursor-pointer select-none items-start justify-between gap-2 rounded-md py-2 pl-3 pr-8 font-medium hover:bg-component/80",
            "data-[state=checked]:text-primary",
            "data-[disabled]:cursor-not-allowed data-[disabled]:text-muted",
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
        invalid: {
            true: {
                label: "text-error",
                trigger: "border-2 border-error bg-error-subtle !text-error",
            },
        },
    },
    defaultVariants: { size: "md" },
});
const { withRoot, withSlot } = createComponentFactory(select);
const Root = withRoot(BaseSelect.Root, "base");
const RootProvider = withRoot(BaseSelect.RootProvider, "base");
const Context = withSlot(BaseSelect.Context);
const ItemContext = withSlot(BaseSelect.ItemContext);
const Label = withSlot(BaseSelect.Label);
const Control = withSlot(BaseSelect.Control);
const Trigger = withSlot(BaseSelect.Trigger, "trigger");
const ValueText = withSlot(BaseSelect.ValueText, "valueText");
const ClearTrigger = withSlot(BaseSelect.ClearTrigger, "clearTrigger");
const Indicator = withSlot(BaseSelect.Indicator, "indicator");
const HiddenSelect = withSlot(BaseSelect.HiddenSelect);
const Positioner = withSlot(BaseSelect.Positioner);
const List = withSlot(BaseSelect.List);
const Content = withSlot(BaseSelect.Content, "content");
const ItemGroup = withSlot(BaseSelect.ItemGroup, "itemGroup");
const ItemGroupLabel = withSlot(BaseSelect.ItemGroupLabel, "itemGroupLabel");
const Item = withSlot(BaseSelect.Item, "item");
const ItemText = withSlot(BaseSelect.ItemText, "itemText");
const ItemIndicator = withSlot(BaseSelect.ItemIndicator, "itemIndicator");
function _bootstrap(render) {
    return React.forwardRef(render);
}
const CustomRoot = _bootstrap(function (_a, ref) {
    var { children, positioning } = _a, props = __rest(_a, ["children", "positioning"]);
    return (_jsxs(Root, Object.assign({ ref: ref, positioning: Object.assign({ sameWidth: true }, positioning), unmountOnExit: true }, props, { children: [children, _jsx(HiddenSelect, {})] })));
});
const CustomContent = React.forwardRef(function (_a, ref) {
    var { children } = _a, props = __rest(_a, ["children"]);
    return (_jsx(Positioner, { children: _jsx(Content, Object.assign({ ref: ref }, props, { children: children })) }));
});
CustomContent.displayName = "Content";
export const Select = createComponentTree(CustomRoot, {
    Root: Root,
    RootProvider,
    Context,
    ItemContext,
    Label,
    Control,
    Trigger,
    ValueText,
    ClearTrigger,
    Indicator,
    HiddenSelect,
    Positioner,
    List,
    Content: CustomContent,
    ItemGroup,
    ItemGroupLabel,
    Item,
    ItemText,
    ItemIndicator,
});
Select.displayName = "Select";
