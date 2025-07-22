"use client";
import { Splitter as BaseSplitter } from "@ark-ui/react";
import { createComponentFactory, createComponentTree, } from "react-tvcx";
import { tv } from "tailwind-variants";
export const splitter = tv({
    base: "",
});
const { withRoot, withSlot } = createComponentFactory(splitter);
const Root = withRoot(BaseSplitter.Root);
const RootProvider = withRoot(BaseSplitter.RootProvider);
const Context = withSlot(BaseSplitter.Context);
const Panel = withSlot(BaseSplitter.Panel);
const ResizeTrigger = withSlot(BaseSplitter.ResizeTrigger);
export const Splitter = createComponentTree(Root, {
    Root,
    RootProvider,
    Context,
    Panel,
    ResizeTrigger,
});
Splitter.displayName = "Splitter";
