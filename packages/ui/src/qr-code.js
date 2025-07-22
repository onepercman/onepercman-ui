"use client";
import { QrCode as BaseQrCode } from "@ark-ui/react";
import { createComponentFactory, createComponentTree, } from "react-tvcx";
import { tv } from "tailwind-variants";
export const qrCode = tv({
    base: "",
});
const { withRoot, withSlot } = createComponentFactory(qrCode);
const Root = withRoot(BaseQrCode.Root);
const RootProvider = withRoot(BaseQrCode.RootProvider);
const Context = withSlot(BaseQrCode.Context);
const Frame = withSlot(BaseQrCode.Frame);
const Overlay = withSlot(BaseQrCode.Overlay);
const Pattern = withSlot(BaseQrCode.Pattern);
export const QrCode = createComponentTree(Root, {
    Root,
    RootProvider,
    Context,
    Frame,
    Overlay,
    Pattern,
});
QrCode.displayName = "QrCode";
