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
import { HiEye, HiEyeOff } from "react-icons/hi";
import { LuX } from "react-icons/lu";
import { cn, forwardRef } from "react-tvcx";
import { tv } from "tailwind-variants";
import { useComposedRefs } from "use-composed-refs";
export const input = tv({
    base: [
        "inline-flex cursor-text items-center gap-2 overflow-hidden text-ellipsis rounded-md border-2 border-transparent px-2 transition-all focus-within:border-primary",
        "h-[var(--input-size)] min-h-[var(--input-size)] min-w-[var(--input-size)] px-2 text-xs",
    ],
    slots: {
        input: [
            "h-full grow self-stretch overflow-hidden text-ellipsis border-transparent bg-transparent p-0",
            "placeholder:text-muted-foreground autofill:[-webkit-background-clip:text] focus:outline-none focus:ring-transparent",
        ],
        addonBefore: "rounded-r-none",
        addonAfter: "rounded-l-none",
    },
    variants: {
        size: {
            xs: "px-2 text-xs [--input-size:1.25rem]",
            sm: "px-2 text-sm [--input-size:1.5rem]",
            md: "px-4 text-sm [--input-size:2.25rem]",
            lg: "px-4 [--input-size:2.75rem]",
        },
        variant: {
            filled: "bg-component",
            outlined: "border-border",
            blur: "bg-component/20 backdrop-blur",
        },
        invalid: {
            true: {
                base: "border-2 border-error bg-error-subtle text-error focus-within:border-error-focus",
            },
        },
    },
    defaultVariants: {
        size: "md",
        variant: "outlined",
    },
});
export const Input = forwardRef((_a, ref) => {
    var { as: Component = "input", prefix, suffix, addonBefore, addonAfter, size, variant, invalid, clearable, onChange, transform, className, classNames } = _a, props = __rest(_a, ["as", "prefix", "suffix", "addonBefore", "addonAfter", "size", "variant", "invalid", "clearable", "onChange", "transform", "className", "classNames"]);
    const styles = input({ size, variant, invalid });
    const internalRef = React.useRef(null);
    const composedRef = useComposedRefs(ref, internalRef);
    const [showClear, setShowClear] = React.useState(false);
    const [showPassword, setShowPassword] = React.useState(false);
    function getTogglePassword() {
        if (props.type === "password") {
            if (showPassword) {
                return (_jsx(HiEye, { className: "ml-2", onClick: () => {
                        if (internalRef.current) {
                            internalRef.current.type = "password";
                            setShowPassword(false);
                        }
                    } }));
            }
            return (_jsx(HiEyeOff, { className: "ml-2 text-secondary", onClick: () => {
                    if (internalRef.current) {
                        internalRef.current.type = "text";
                        setShowPassword(true);
                    }
                } }));
        }
    }
    function getClear() {
        if (showClear && clearable) {
            return (_jsx(LuX, { className: "cursor-pointer text-secondary", onClick: function () {
                    if (internalRef.current) {
                        setShowClear(false);
                        internalRef.current.value = "";
                        const currentTarget = internalRef.current.cloneNode(true);
                        const event = Object.create(new Event("change"), {
                            target: { value: currentTarget },
                            currentTarget: { value: currentTarget },
                        });
                        if (onChange)
                            onChange(event);
                    }
                } }));
        }
    }
    function handleChange(ev) {
        if (transform && internalRef.current) {
            internalRef.current.value = transform(internalRef.current.value);
        }
        if (onChange)
            onChange(ev);
        setShowClear(!!ev.target.value);
    }
    function _renderPrefix() {
        const element = prefix;
        if (!element)
            return null;
        if (typeof element === "object" && "type" in element)
            return React.cloneElement(element);
        return _jsx("span", { children: element });
    }
    function _renderSuffix() {
        const element = suffix;
        if (!element)
            return null;
        if (typeof element === "object" && "type" in element)
            return React.cloneElement(element);
        return _jsx("span", { children: element });
    }
    function _renderAddonBefore() {
        const element = addonBefore;
        if (!element)
            return null;
        if (typeof element === "object" && "type" in element)
            return React.cloneElement(element, {
                className: styles.addonBefore({
                    className: element.props.className,
                    class: classNames === null || classNames === void 0 ? void 0 : classNames.addonBefore,
                }),
            });
        return (_jsx("span", { className: styles.addonBefore({ class: classNames === null || classNames === void 0 ? void 0 : classNames.addonBefore }), children: element }));
    }
    function _renderAddonAfter() {
        const element = addonAfter;
        if (!element)
            return null;
        if (typeof element === "object" && "type" in element)
            return React.cloneElement(element, {
                className: styles.addonAfter({
                    className: element.props.className,
                    class: classNames === null || classNames === void 0 ? void 0 : classNames.addonAfter,
                }),
            });
        return (_jsx("span", { className: styles.addonAfter({ class: classNames === null || classNames === void 0 ? void 0 : classNames.addonAfter }), children: element }));
    }
    return (_jsxs("label", { role: "input", className: styles.base({
            className: cn(className, classNames === null || classNames === void 0 ? void 0 : classNames.base, {
                "pl-0": !!addonBefore,
                "pr-0": !!addonAfter,
            }),
        }), children: [_renderAddonBefore(), _renderPrefix(), _jsx(Component, Object.assign({ ref: composedRef, onChange: handleChange, className: styles.input({ class: classNames === null || classNames === void 0 ? void 0 : classNames.input }) }, props)), getClear(), getTogglePassword(), _renderSuffix(), _renderAddonAfter()] }));
});
Input.displayName = "Input";
export default Input;
