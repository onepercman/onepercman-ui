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
import { jsx as _jsx } from "react/jsx-runtime";
import React from "react";
import { createComponentFactory, createComponentTree, } from "react-tvcx";
import { tv } from "tailwind-variants";
export const table = tv({
    base: "overflow-auto rounded-md text-xs",
    slots: {
        table: "w-full border-separate border-spacing-y-1",
        head: "",
        body: "relative",
        column: "bg-component px-4 py-2 font-semibold first:rounded-l-md last:rounded-r-md",
        row: "group",
        cell: "bg-card px-4 py-2 font-normal first:rounded-l-md last:rounded-r-md",
    },
    variants: {
        size: {
            sm: {
                base: "text-xs",
                column: "px-2 py-1",
                cell: "px-2 py-1",
            },
            md: {
                base: "text-sm",
                column: "px-4 py-1.5",
                cell: "px-4 py-1.5",
            },
            lg: {
                base: "text-base",
                column: "px-6 py-2",
                cell: "px-6 py-2",
            },
        },
        highlightRow: {
            true: {
                cell: "cursor-pointer transition-colors group-hover:bg-component/80",
            },
        },
    },
    defaultVariants: {
        size: "md",
    },
});
const { withRoot, withSlot } = createComponentFactory(table);
const Root = withRoot("div", "base");
const TableElement = withSlot("table", "table");
const Head = withSlot("thead", "head");
const Body = withSlot("tbody", "body");
const Column = withSlot("th", "column");
const Row = withSlot("tr", "row");
const Cell = withSlot("td", "cell");
export const Wrapper = React.forwardRef(function (_a, ref) {
    var { size, highlightRow, className, classNames, children } = _a, props = __rest(_a, ["size", "highlightRow", "className", "classNames", "children"]);
    return (_jsx(Root, { size: size, highlightRow: highlightRow, className: className, classNames: classNames, children: _jsx(TableElement, Object.assign({ ref: ref }, props, { children: children })) }));
});
Wrapper.displayName = "TableWrapper";
export const Header = React.forwardRef(function (_a, ref) {
    var { children } = _a, props = __rest(_a, ["children"]);
    return (_jsx(Head, Object.assign({ ref: ref }, props, { children: _jsx(Row, { children: children }) })));
});
Header.displayName = "TableHeader";
export const Table = createComponentTree(Wrapper, {
    Root,
    Table: TableElement,
    Head,
    Header,
    Body,
    Column,
    Row,
    Cell,
});
Table.displayName = "Table";
