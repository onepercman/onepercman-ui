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
import { Avatar as BaseAvatar } from "@ark-ui/react";
import React from "react";
import { createComponentFactory, createComponentTree } from "react-tvcx";
import { tv } from "tailwind-variants";
export const avatar = tv({
    base: "relative flex aspect-square flex-none overflow-hidden rounded-full",
    slots: {
        fallback: "m-auto",
        image: "inset-0 object-cover",
    },
    variants: {
        size: {
            xs: { base: "h-6 w-6" },
            sm: { base: "h-10 w-10" },
            md: { base: "h-12 w-12" },
            lg: { base: "h-20 w-20" },
        },
    },
    defaultVariants: {
        size: "md",
    },
});
const { withRoot, withSlot } = createComponentFactory(avatar);
const Root = withRoot(BaseAvatar.Root, "base");
const RootProvider = withSlot(BaseAvatar.RootProvider, "base");
const Context = withSlot(BaseAvatar.Context);
const Image = withSlot(BaseAvatar.Image, "image");
const Fallback = withSlot(BaseAvatar.Fallback, "fallback");
const Compact = React.forwardRef(function (_a, ref) {
    var { fallback, seed } = _a, props = __rest(_a, ["fallback", "seed"]);
    const defaultFallback = (_jsx("img", { src: `https://api.dicebear.com/9.x/initials/svg?seed=${seed}`, alt: seed, className: "h-full w-full object-cover" }));
    return (_jsxs(Root, Object.assign({ ref: ref }, props, { children: [_jsx(Fallback, { children: fallback || defaultFallback }), _jsx(Image, Object.assign({}, props))] })));
});
Compact.displayName = "Avatar";
export const Avatar = createComponentTree(Compact, {
    Root,
    RootProvider,
    Context,
    Image,
    Fallback,
});
Avatar.displayName = "Avatar";
