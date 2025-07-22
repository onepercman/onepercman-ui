"use client";
import { ToggleGroup as BaseToggleGroup } from "@ark-ui/react";
import { createComponentFactory, createComponentTree, } from "react-tvcx";
import { tv } from "tailwind-variants";
export const toggleGroup = tv({
    base: "",
});
const { withRoot, withSlot } = createComponentFactory(toggleGroup);
const Root = withRoot(BaseToggleGroup.Root);
const RootProvider = withRoot(BaseToggleGroup.RootProvider);
const Context = withSlot(BaseToggleGroup.Context);
const Item = withSlot(BaseToggleGroup.Item);
export const ToggleGroup = createComponentTree(Root, {
    RootProvider,
    Context,
    Item,
});
ToggleGroup.displayName = "ToggleGroup";
