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
import { LuX } from "react-icons/lu";
import TextAreaAutoSize from "react-textarea-autosize";
import { cn, forwardRef } from "react-tvcx";
import { tv } from "tailwind-variants";
import { useComposedRefs } from "use-composed-refs";
export const textarea = tv({
    base: [
        "inline-flex cursor-text items-center gap-2 overflow-hidden text-ellipsis rounded-md border-2 px-2 py-2 transition-all",
        "focus-within:border-primary",
    ],
    slots: {
        textarea: [
            "my-auto h-fit grow self-stretch text-ellipsis border-transparent bg-transparent p-0",
            "focus:outline-none focus:ring-transparent",
        ],
        addonBefore: "rounded-r-none",
        addonAfter: "rounded-l-none",
    },
    variants: {
        size: {
            xs: "min-h-[1.5rem] min-w-[1.5rem] px-2 text-xs",
            sm: "min-h-[2rem] min-w-[2rem] px-2 text-sm",
            md: "min-h-[2.5rem] min-w-[2.5rem] px-2",
            lg: "min-h-[3rem] min-w-[3rem] px-4",
        },
        variant: {
            filled: "border-transparent bg-component",
            outlined: "border-2 border-border",
        },
        invalid: {
            true: {
                base: "border-2 border-error bg-error-subtle text-error focus-within:border-error-focus",
                label: "text-error",
            },
        },
        autoSize: {
            true: { textarea: "resize-none" },
        },
    },
    defaultVariants: {
        size: "md",
        variant: "filled",
    },
});
export const Textarea = forwardRef((_a, ref) => {
    var { as: Comp = "textarea", prefix, suffix, addonBefore, addonAfter, variant, size, invalid, clearable, autoSize, autoSizeOptions, onChange, transform, className, classNames } = _a, props = __rest(_a, ["as", "prefix", "suffix", "addonBefore", "addonAfter", "variant", "size", "invalid", "clearable", "autoSize", "autoSizeOptions", "onChange", "transform", "className", "classNames"]);
    const styles = textarea({ variant, size, invalid, className });
    const internalRef = React.useRef(null);
    const composedRef = useComposedRefs(ref, internalRef);
    const [showClear, setShowClear] = React.useState(false);
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
    const Component = autoSize ? TextAreaAutoSize : Comp;
    return (_jsxs("label", { role: "input", className: styles.base({
            className: cn(className, classNames === null || classNames === void 0 ? void 0 : classNames.base, {
                "pl-0": addonBefore,
                "pr-0": addonAfter,
            }),
        }), children: [_renderAddonBefore(), _renderPrefix(), _jsx(Component, Object.assign({ ref: composedRef, onChange: handleChange, className: styles.textarea({
                    autoSize,
                    class: classNames === null || classNames === void 0 ? void 0 : classNames.textarea,
                }) }, props, autoSizeOptions)), getClear(), _renderSuffix(), _renderAddonAfter()] }));
});
Textarea.displayName = "Textarea";
