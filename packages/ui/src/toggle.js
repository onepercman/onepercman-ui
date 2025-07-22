"use client";
import { Toggle as BaseToggle } from "@ark-ui/react";
import { createComponentFactory, createComponentTree, } from "react-tvcx";
import { tv } from "tailwind-variants";
export const toggle = tv({
    base: "",
    slots: {},
});
const { withRoot, withSlot } = createComponentFactory(toggle);
const Root = withRoot(BaseToggle.Root, "base");
const Context = withSlot(BaseToggle.Context);
const Indicator = withSlot(BaseToggle.Indicator);
export const Toggle = createComponentTree(Root, {
    Root,
    Context,
    Indicator,
});
Toggle.displayName = "Toggle";
