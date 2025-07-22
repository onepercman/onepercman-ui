"use client";
import { Editable as BaseEditable } from "@ark-ui/react";
import { createComponentFactory, createComponentTree, } from "react-tvcx";
import { tv } from "tailwind-variants";
export const editable = tv({
    base: "",
});
const { withRoot, withSlot } = createComponentFactory(editable);
const Root = withRoot(BaseEditable.Root);
const RootProvider = withRoot(BaseEditable.RootProvider);
const Context = withSlot(BaseEditable.Context);
const Area = withSlot(BaseEditable.Area);
const CancelTrigger = withSlot(BaseEditable.CancelTrigger);
const Control = withSlot(BaseEditable.Control);
const EditTrigger = withSlot(BaseEditable.EditTrigger);
const Input = withSlot(BaseEditable.Input);
const Label = withSlot(BaseEditable.Label);
const Preview = withSlot(BaseEditable.Preview);
const SubmitTrigger = withSlot(BaseEditable.SubmitTrigger);
export const Editable = createComponentTree(Root, {
    Root,
    RootProvider,
    Context,
    Area,
    CancelTrigger,
    Control,
    EditTrigger,
    Input,
    Label,
    Preview,
    SubmitTrigger,
});
Editable.displayName = "Editable";
