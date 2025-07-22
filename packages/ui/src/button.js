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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from "react";
import { cn, forwardRef } from "react-tvcx";
import { tv } from "tailwind-variants";
import { Spinner } from "./spinner";
export const button = tv({
    base: [
        "inline-flex select-none items-center justify-center gap-2 whitespace-nowrap font-semibold",
        "cursor-pointer border-0 border-transparent outline-none ring ring-transparent transition-all",
        "h-[var(--button-size)] min-h-[var(--button-size)] min-w-[var(--button-size)] px-2 text-xs",
        "[&:not(:disabled)]:active:brightness-105",
        "disabled:cursor-not-allowed disabled:opacity-75 disabled:saturate-0 disabled:data-[loading]:saturate-50",
    ],
    variants: {
        size: {
            xs: "px-2 text-xs [--button-size:1.25rem]",
            sm: "px-2 text-sm [--button-size:1.5rem]",
            md: "px-4 text-sm [--button-size:2.25rem]",
            lg: "px-4 [--button-size:2.75rem]",
        },
        variant: {
            default: "border-0",
            outlined: "border-2",
            ghost: "border-0 bg-transparent",
            light: "border-0",
        },
        color: {
            default: "",
            primary: "",
            accent: "",
            info: "",
            success: "",
            warning: "",
            error: "",
        },
        shape: {
            normal: "rounded-md",
            pill: "rounded-full",
            circle: "aspect-square rounded-full p-0",
            square: "aspect-square rounded-md p-0",
        },
    },
    compoundVariants: [
        // default
        {
            variant: "default",
            color: "default",
            class: ["bg-component"],
        },
        {
            variant: "default",
            color: "primary",
            class: [
                "bg-primary",
                "text-primary-foreground",
                "[&:not(:disabled)]:hover:bg-primary-focus",
            ],
        },
        {
            variant: "default",
            color: "info",
            class: [
                "bg-info",
                "text-info-foreground",
                "[&:not(:disabled)]:hover:bg-info-focus",
            ],
        },
        {
            variant: "default",
            color: "success",
            class: [
                "bg-success",
                "text-success-foreground",
                "[&:not(:disabled)]:hover:bg-success-focus",
            ],
        },
        {
            variant: "default",
            color: "warning",
            class: [
                "bg-warning",
                "text-warning-foreground",
                "[&:not(:disabled)]:hover:bg-warning-focus",
            ],
        },
        {
            variant: "default",
            color: "error",
            class: [
                "bg-error",
                "text-error-foreground",
                "[&:not(:disabled)]:hover:bg-error-focus",
            ],
        },
        {
            variant: "default",
            color: "accent",
            class: [
                "bg-accent",
                "text-accent-foreground",
                "[&:not(:disabled)]:hover:bg-accent-focus",
            ],
        },
        // light
        {
            variant: "light",
            color: "default",
            class: [
                "bg-component/20",
                "text-foreground",
                "[&:not(:disabled)]:hover:bg-component/50",
            ],
        },
        {
            variant: "light",
            color: "primary",
            class: [
                "bg-primary-muted",
                "text-primary",
                "[&:not(:disabled)]:hover:bg-primary/50",
            ],
        },
        {
            variant: "light",
            color: "info",
            class: [
                "bg-info-muted",
                "text-info",
                "[&:not(:disabled)]:hover:bg-info/50",
            ],
        },
        {
            variant: "light",
            color: "success",
            class: [
                "bg-success-muted",
                "text-success",
                "[&:not(:disabled)]:hover:bg-success/50",
            ],
        },
        {
            variant: "light",
            color: "warning",
            class: [
                "bg-warning-muted",
                "text-warning",
                "[&:not(:disabled)]:hover:bg-warning/50",
            ],
        },
        {
            variant: "light",
            color: "error",
            class: [
                "bg-error-muted",
                "text-error",
                "[&:not(:disabled)]:hover:bg-error/50",
            ],
        },
        {
            variant: "light",
            color: "accent",
            class: [
                "bg-accent-muted",
                "text-accent",
                "[&:not(:disabled)]:hover:bg-accent/50",
            ],
        },
        // outlined
        {
            variant: "outlined",
            color: "default",
            class: ["border-border", "[&:not(:disabled)]:hover:bg-component"],
        },
        {
            variant: "outlined",
            color: "primary",
            class: [
                "border-primary text-primary",
                "[&:not(:disabled)]:hover:border-primary-focus [&:not(:disabled)]:hover:text-primary-focus",
            ],
        },
        {
            variant: "outlined",
            color: "info",
            class: [
                "border-info text-info",
                "[&:not(:disabled)]:hover:border-info-focus [&:not(:disabled)]:hover:text-info-focus",
            ],
        },
        {
            variant: "outlined",
            color: "success",
            class: [
                "border-success text-success",
                "[&:not(:disabled)]:hover:border-success-focus [&:not(:disabled)]:hover:text-success-focus",
            ],
        },
        {
            variant: "outlined",
            color: "warning",
            class: [
                "border-warning text-warning",
                "[&:not(:disabled)]:hover:border-warning-focus [&:not(:disabled)]:hover:text-warning-focus",
            ],
        },
        {
            variant: "outlined",
            color: "error",
            class: [
                "border-error text-error",
                "[&:not(:disabled)]:hover:border-error-focus [&:not(:disabled)]:hover:text-error-focus",
            ],
        },
        {
            variant: "outlined",
            color: "accent",
            class: [
                "border-accent text-accent",
                "[&:not(:disabled)]:hover:border-accent-focus [&:not(:disabled)]:hover:text-accent-focus",
            ],
        },
        // ghost
        {
            variant: "ghost",
            color: "default",
            class: ["text-foreground", "[&:not(:disabled)]:hover:bg-component"],
        },
        {
            variant: "ghost",
            color: "primary",
            class: ["text-primary", "[&:not(:disabled)]:hover:bg-primary-subtle"],
        },
        {
            variant: "ghost",
            color: "info",
            class: ["text-info", "[&:not(:disabled)]:hover:bg-info-subtle"],
        },
        {
            variant: "ghost",
            color: "success",
            class: ["text-success", "[&:not(:disabled)]:hover:bg-success-subtle"],
        },
        {
            variant: "ghost",
            color: "warning",
            class: ["text-warning", "[&:not(:disabled)]:hover:bg-warning-subtle"],
        },
        {
            variant: "ghost",
            color: "error",
            class: ["text-error", "[&:not(:disabled)]:hover:bg-error-subtle"],
        },
        {
            variant: "ghost",
            color: "accent",
            class: ["text-accent", "[&:not(:disabled)]:hover:bg-accent-subtle"],
        },
    ],
    defaultVariants: {
        size: "md",
        variant: "default",
        color: "default",
        shape: "normal",
    },
});
function useButton(_a) {
    var { onClick, loading, disabled } = _a, props = __rest(_a, ["onClick", "loading", "disabled"]);
    const className = button(props);
    const [asyncLoading, setAsyncLoading] = React.useState(false);
    function handleClick(ev) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!onClick)
                return;
            if (onClick.constructor.name === "AsyncFunction") {
                try {
                    setAsyncLoading(true);
                    yield onClick(ev);
                }
                catch (err) {
                    throw new Error(err);
                }
                finally {
                    setAsyncLoading(false);
                }
            }
            else {
                onClick(ev);
            }
        });
    }
    const _loading = Boolean(asyncLoading || loading);
    return Object.assign(Object.assign({}, props), { className, onClick: handleClick, loading: _loading, disabled: _loading || disabled });
}
export const Button = forwardRef(function (_a, ref) {
    var { as: Component = "button", children, loadingText, loadingVariant = "transparent", leftIcon, rightIcon } = _a, props = __rest(_a, ["as", "children", "loadingText", "loadingVariant", "leftIcon", "rightIcon"]);
    const buttonProps = useButton(props);
    return (_jsxs(Component, Object.assign({ ref: ref, type: "button", "data-loading": buttonProps.loading }, buttonProps, { children: [buttonProps.loading && (_jsx(Spinner, { className: loadingVariant === "default" ? "relative" : "absolute" })), leftIcon ? (buttonProps.loading ? (_jsx("span", { className: loadingVariant === "default" ? "hidden" : "opacity-0", children: leftIcon })) : (leftIcon)) : null, children || loadingText ? (buttonProps.loading ? (_jsx("span", { className: cn({ "opacity-0": loadingVariant === "transparent" }), children: loadingText || children })) : (children)) : null, rightIcon ? (buttonProps.loading ? (_jsx("span", { className: cn({ "opacity-0": loadingVariant === "transparent" }), children: rightIcon })) : (rightIcon)) : null] })));
});
Button.displayName = "Button";
