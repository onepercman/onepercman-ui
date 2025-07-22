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
import React from "react";
import ReactDOM from "react-dom/client";
import { LuX } from "react-icons/lu";
import { createComponentFactory, createComponentTree, } from "react-tvcx";
import { tv } from "tailwind-variants";
import { Drawer } from "vaul";
import { Button } from "./button";
export const drawer = tv({
    slots: {
        overlay: "fixed inset-0 bg-background/50 backdrop-blur",
        handle: "bg-foreground/50",
        closeTrigger: "absolute right-4 top-4 text-muted-foreground",
        content: [
            "fixed rounded-md bg-popover p-4",
            "min-w-52 [&[vaul-drawer-direction=left]]:left-0",
            "[&[vaul-drawer-direction=left]]:top-0",
            "[&[vaul-drawer-direction=left]]:bottom-0",
            "min-w-52 [&[vaul-drawer-direction=right]]:right-0",
            "[&[vaul-drawer-direction=right]]:top-0",
            "[&[vaul-drawer-direction=right]]:bottom-0",
            "min-h-52 [&[vaul-drawer-direction=bottom]]:bottom-0",
            "[&[vaul-drawer-direction=bottom]]:left-0",
            "[&[vaul-drawer-direction=bottom]]:right-0",
            "min-h-52 [&[vaul-drawer-direction=top]]:top-0",
            "[&[vaul-drawer-direction=top]]:left-0",
            "[&[vaul-drawer-direction=top]]:right-0",
        ],
        title: "py-2 text-sm font-medium",
        description: "text-sm text-muted-foreground",
    },
});
const { withRoot, withSlot } = createComponentFactory(drawer);
const Root = withRoot(Drawer.Root);
const NestedRoot = withSlot(Drawer.NestedRoot);
const Description = withSlot(Drawer.Description, "description");
const Handle = withSlot(Drawer.Handle, "handle");
const Overlay = withSlot(Drawer.Overlay, "overlay");
const Portal = withSlot(Drawer.Portal);
const Title = withSlot(Drawer.Title, "title");
const Trigger = withSlot(Drawer.Trigger);
const Content = withSlot(Drawer.Content, "content");
const CloseTrigger = withSlot(Drawer.Close, "closeTrigger");
const CustomContent = React.forwardRef(function (_a, ref) {
    var { children } = _a, props = __rest(_a, ["children"]);
    return (_jsxs(Portal, { children: [_jsx(Overlay, {}), _jsx(Portal, { children: _jsx(Content, Object.assign({ ref: ref }, props, { children: children })) })] }));
});
CustomContent.displayName = "Content";
const CustomCloseTrigger = React.forwardRef(function (_a, ref) {
    var { children } = _a, props = __rest(_a, ["children"]);
    return (_jsx(CloseTrigger, Object.assign({ ref: ref }, props, { children: children || _jsx(LuX, { className: "h-4 w-4" }) })));
});
CustomCloseTrigger.displayName = "CloseTrigger";
export const Component = createComponentTree(Root, {
    Root,
    NestedRoot,
    Description,
    Handle,
    Overlay,
    Portal,
    Title,
    Trigger,
    Content: CustomContent,
    CloseTrigger: CustomCloseTrigger,
    open,
    confirm,
    dismiss,
});
Component.displayName = "Drawer";
function open(_a) {
    var { children, onClose } = _a, props = __rest(_a, ["children", "onClose"]);
    const root = ReactDOM.createRoot(document.createElement("div"));
    function close() {
        root.render(_jsx(Drawer.Root, Object.assign({ open: false }, props, { children: _jsx(Drawer.Content, { children: children }) })));
    }
    root.render(_jsx(Drawer.Root, Object.assign({ open: true, onClose: function () {
            close();
            onClose === null || onClose === void 0 ? void 0 : onClose();
        } }, props, { children: _jsx(Drawer.Content, { children: children }) })));
    return { close };
}
function confirm(_a) {
    var { children, onConfirm, onCancel } = _a, props = __rest(_a, ["children", "onConfirm", "onCancel"]);
    const root = ReactDOM.createRoot(document.createElement("div"));
    function close() {
        root.render(_jsx(Drawer.Root, Object.assign({ open: false }, props, { children: _jsx(Drawer.Content, { children: children }) })));
    }
    root.render(_jsx(Drawer.Root, Object.assign({ open: true, onClose: function () {
            close();
            onCancel === null || onCancel === void 0 ? void 0 : onCancel();
        } }, props, { children: _jsxs(Drawer.Content, { children: [children, _jsxs("div", { className: "mt-4 flex justify-end gap-2", children: [_jsx(Button, { variant: "outlined", onClick: function () {
                                close();
                                onCancel === null || onCancel === void 0 ? void 0 : onCancel();
                            }, children: "Cancel" }), _jsx(Button, { onClick: function () {
                                close();
                                onConfirm === null || onConfirm === void 0 ? void 0 : onConfirm();
                            }, children: "Confirm" })] })] }) })));
    return { close };
}
function dismiss(id) {
    document.querySelectorAll(`[data-dismiss=${id}]`).forEach((el) => {
        return el.click();
    });
}
