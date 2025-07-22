"use client";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { Dialog as BaseDialog } from "@ark-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import { LuX } from "react-icons/lu";
import { createComponentFactory, createComponentTree, } from "react-tvcx";
import { tv } from "tailwind-variants";
import { Button } from "./button";
export const dialog = tv({
    slots: {
        backdrop: [
            "fixed inset-0 bg-background/80",
            "data-[state=open]:animate-in",
            "data-[state=open]:fade-in",
            "data-[state=closed]:animate-out",
            "data-[state=closed]:fade-out",
        ],
        positioner: "fixed inset-0 flex overflow-auto p-4",
        content: [
            "relative h-fit w-fit rounded-lg border border-border bg-popover p-4 shadow",
            "data-[state=open]:animate-in",
            "data-[state=open]:fade-in",
            "data-[state=closed]:animate-out",
            "data-[state=closed]:fade-out",
        ],
        title: "pb-4 text-sm font-medium",
        closeTrigger: "absolute right-4 top-3",
        description: "",
    },
    variants: {
        size: {
            sm: { content: "min-w-[340px]" },
            md: { content: "min-w-[640px]" },
            lg: { content: "min-w-[768px]" },
        },
        placement: {
            center: { content: "m-auto" },
            topCenter: { content: "mx-auto mt-24" },
            left: { content: "mr-auto h-full" },
            right: { content: "ml-auto h-full" },
        },
        scrollBehavior: {
            inside: "",
            outside: "",
        },
    },
    defaultVariants: {
        size: "sm",
        placement: "topCenter",
    },
});
const { withRoot, withSlot } = createComponentFactory(dialog);
const Root = withRoot(BaseDialog.Root);
const RootProvider = withSlot(BaseDialog.RootProvider);
const Backdrop = withSlot(BaseDialog.Backdrop, "backdrop");
const Context = withSlot(BaseDialog.Context);
const Description = withSlot(BaseDialog.Description, "description");
const Positioner = withSlot(BaseDialog.Positioner, "positioner");
const Title = withSlot(BaseDialog.Title, "title");
const Trigger = withSlot(BaseDialog.Trigger);
const Content = withSlot(BaseDialog.Content, "content");
const CloseTrigger = withSlot(BaseDialog.CloseTrigger, "closeTrigger");
const CustomContent = React.forwardRef(function (_a, ref) {
    var { children } = _a, props = __rest(_a, ["children"]);
    return (_jsxs(_Fragment, { children: [_jsx(Backdrop, {}), _jsx(Positioner, { children: _jsx(Content, Object.assign({ ref: ref }, props, { children: children })) })] }));
});
CustomContent.displayName = "Content";
const CustomCloseTrigger = React.forwardRef(function (_a, ref) {
    var { children } = _a, props = __rest(_a, ["children"]);
    return (_jsx(CloseTrigger, Object.assign({ ref: ref, asChild: true }, props, { children: _jsx(LuX, { role: "button", className: "text-secondary" }) })));
});
CustomCloseTrigger.displayName = "CloseTrigger";
function open(_a) {
    var { children, onOpenChange } = _a, props = __rest(_a, ["children", "onOpenChange"]);
    const container = document.createDocumentFragment();
    const root = ReactDOM.createRoot(container);
    function close() {
        root.render(_jsx(Root, Object.assign({ open: false, unmountOnExit: true }, props, { children: _jsx(Content, { children: children }) })));
    }
    root.render(_jsx(Root, Object.assign({ open: true, onOpenChange: function (details) {
            if (onOpenChange) {
                onOpenChange(details);
            }
            close();
        } }, props, { children: _jsx(Content, { children: children }) })));
    return {
        close,
    };
}
function confirm(_a) {
    return __awaiter(this, void 0, void 0, function* () {
        var { question, confirmProps, cancelProps } = _a, props = __rest(_a, ["question", "confirmProps", "cancelProps"]);
        return new Promise(function (resolve) {
            open(Object.assign({ onOpenChange({ open }) {
                    if (!open) {
                        resolve(false);
                    }
                }, children: (_jsx(Context, { children: ({ setOpen }) => (_jsxs("div", { className: "space-y-4", children: [_jsx("div", { className: "text-low text-sm", children: question }), _jsxs("div", { className: "flex items-center justify-end gap-2", children: [_jsx(Button, Object.assign({ size: "sm" }, cancelProps, { onClick: function (e) {
                                            return __awaiter(this, void 0, void 0, function* () {
                                                var _a;
                                                if (((_a = cancelProps === null || cancelProps === void 0 ? void 0 : cancelProps.onClick) === null || _a === void 0 ? void 0 : _a.constructor.name) === "AsyncFunction") {
                                                    yield (cancelProps === null || cancelProps === void 0 ? void 0 : cancelProps.onClick(e));
                                                }
                                                else if (cancelProps === null || cancelProps === void 0 ? void 0 : cancelProps.onClick) {
                                                    cancelProps === null || cancelProps === void 0 ? void 0 : cancelProps.onClick(e);
                                                }
                                                setOpen(false);
                                                resolve(false);
                                            });
                                        }, children: (cancelProps === null || cancelProps === void 0 ? void 0 : cancelProps.children) || "Cancel" })), _jsx(Button, Object.assign({ size: "sm", color: "primary" }, confirmProps, { onClick: function (e) {
                                            return __awaiter(this, void 0, void 0, function* () {
                                                var _a;
                                                if (((_a = confirmProps === null || confirmProps === void 0 ? void 0 : confirmProps.onClick) === null || _a === void 0 ? void 0 : _a.constructor.name) ===
                                                    "AsyncFunction") {
                                                    yield (confirmProps === null || confirmProps === void 0 ? void 0 : confirmProps.onClick(e));
                                                }
                                                else if (confirmProps === null || confirmProps === void 0 ? void 0 : confirmProps.onClick) {
                                                    confirmProps === null || confirmProps === void 0 ? void 0 : confirmProps.onClick(e);
                                                }
                                                resolve(true);
                                                setOpen(false);
                                            });
                                        }, children: (confirmProps === null || confirmProps === void 0 ? void 0 : confirmProps.children) || "Confirm" }))] })] })) })) }, props));
        });
    });
}
export const Dialog = createComponentTree(Root, {
    Root,
    RootProvider,
    Backdrop,
    Context,
    Description,
    Positioner,
    Title,
    Trigger,
    Content: CustomContent,
    CloseTrigger: CustomCloseTrigger,
    open,
    confirm,
});
Dialog.displayName = "Dialog";
