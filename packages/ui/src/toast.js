"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Toast as BaseToast, Toaster as BaseToaster, } from "@ark-ui/react";
import { LuCheck, LuCircleX, LuInfo, LuX } from "react-icons/lu";
import { tv } from "tailwind-variants";
import { Button } from "./button";
import { Spinner } from "./spinner";
export const toast = tv({
    base: [
        "relative min-w-64 rounded border border-line bg-component p-4 shadow-lg transition-all duration-300",
        "z-[var(--z-index)]",
        "opacity-[var(--opacity)]",
        "translate-x-[var(--x)]",
        "translate-y-[var(--y)]",
        "h-[var(--height)]",
        "[scale:var(--scale)]",
    ],
    slots: {
        container: "gap-8",
        title: "mt-0 inline-flex items-center gap-2 pr-6 text-sm",
        description: "text-xs text-secondary",
        dismiss: "absolute right-2 top-2",
    },
});
function getIcon(type) {
    switch (type) {
        case "loading":
            return _jsx(Spinner, {});
        case "success":
            return _jsx(LuCheck, { className: "text-success" });
        case "error":
            return _jsx(LuCircleX, { className: "text-error" });
        case "info":
            return _jsx(LuInfo, { className: "text-info" });
        default:
            return null;
    }
}
export const Toaster = ({ toaster }) => {
    const styles = toast();
    return (_jsx(BaseToaster, { toaster: toaster, className: styles.container(), children: ({ id, title, description, type }) => {
            return (_jsxs(BaseToast.Root, { className: styles.base(), children: [_jsxs(BaseToast.Title, { className: styles.title(), children: [getIcon(type), title] }), _jsx(BaseToast.Description, { className: styles.description(), children: description }), _jsx(BaseToast.CloseTrigger, { asChild: true, children: _jsx(Button, { size: "xs", shape: "circle", className: styles.dismiss(), leftIcon: _jsx(LuX, {}) }) })] }, id));
        } }));
};
Toaster.displayName = "Toaster";
