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
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { DatePicker as BaseDatePicker, } from "@ark-ui/react";
import React, { Fragment } from "react";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";
import { createComponentFactory, createComponentTree, } from "react-tvcx";
import { tv } from "tailwind-variants";
import { Button } from "./button";
export const datePicker = tv({
    slots: {
        content: [
            "w-fit rounded-md border border-border bg-popover p-2 shadow",
            "data-[state=open]:animate-in",
            "data-[state=open]:fade-in",
            "data-[state=closed]:animate-out",
            "data-[state=closed]:fade-out",
        ],
        control: "inline-flex items-center gap-2",
        trigger: "inline-flex items-center gap-2",
        viewControl: "inline-flex w-full items-center justify-between gap-2 py-2",
        table: "border-separate border-spacing-1",
        tableHeader: "text-xs font-normal text-muted-foreground",
        tableCellTrigger: [
            "relative inline-flex w-full items-center justify-center rounded-md px-2 py-1.5 text-xs font-normal",
            "hover:bg-primary/20",
            "data-[in-range]:bg-primary/50",
            "data-[selected]:bg-primary",
            "data-[selected]:hover:bg-primary",
            "data-[disabled]:text-muted",
            "data-[today]:after:content-['']",
            "data-[today]:after:absolute",
            "data-[today]:after:bottom-0",
            "data-[today]:after:w-1",
            "data-[today]:after:h-1",
            "data-[today]:after:rounded-full",
            "data-[today]:after:bg-primary",
        ],
    },
    variants: {},
    defaultVariants: {},
});
const { withRoot, withSlot } = createComponentFactory(datePicker);
const Root = withRoot(BaseDatePicker.Root);
const RootProvider = withRoot(BaseDatePicker.RootProvider);
const ClearTrigger = withSlot(BaseDatePicker.ClearTrigger);
const Content = withSlot(BaseDatePicker.Content, "content");
const Context = withSlot(BaseDatePicker.Context);
const Control = withSlot(BaseDatePicker.Control, "control");
const Input = withSlot(BaseDatePicker.Input);
const Label = withSlot(BaseDatePicker.Label);
const MonthSelect = withSlot(BaseDatePicker.MonthSelect);
const NextTrigger = withSlot(BaseDatePicker.NextTrigger);
const Positioner = withSlot(BaseDatePicker.Positioner);
const PresetTrigger = withSlot(BaseDatePicker.PresetTrigger);
const PrevTrigger = withSlot(BaseDatePicker.PrevTrigger);
const RangeText = withSlot(BaseDatePicker.RangeText);
const Table = withSlot(BaseDatePicker.Table, "table");
const TableBody = withSlot(BaseDatePicker.TableBody);
const TableCell = withSlot(BaseDatePicker.TableCell);
const TableCellTrigger = withSlot(BaseDatePicker.TableCellTrigger, "tableCellTrigger");
const TableHead = withSlot(BaseDatePicker.TableHead);
const TableHeader = withSlot(BaseDatePicker.TableHeader, "tableHeader");
const TableRow = withSlot(BaseDatePicker.TableRow);
const Trigger = withSlot(BaseDatePicker.Trigger, "trigger");
const View = withSlot(BaseDatePicker.View);
const ViewControl = withSlot(BaseDatePicker.ViewControl, "viewControl");
const ViewTrigger = withSlot(BaseDatePicker.ViewTrigger);
const YearSelect = withSlot(BaseDatePicker.YearSelect);
function _bootstrap(render) {
    return React.forwardRef(render);
}
const CustomRoot = _bootstrap(function (_a, ref) {
    var { children, positioning } = _a, props = __rest(_a, ["children", "positioning"]);
    return (_jsx(Root, Object.assign({ ref: ref, asChild: true, positioning: Object.assign({ placement: "bottom-end" }, positioning) }, props, { children: _jsx(Fragment, { children: children }) })));
});
const CustomContent = React.forwardRef(function (_a, ref) {
    var props = __rest(_a, []);
    return (_jsx(Positioner, { children: _jsx(Content, Object.assign({ ref: ref }, props)) }));
});
CustomContent.displayName = "Content";
const SimpleViews = React.forwardRef(function () {
    return (_jsxs(_Fragment, { children: [_jsx(View, { view: "day", children: _jsx(Context, { children: (datePicker) => (_jsxs(_Fragment, { children: [_jsxs(ViewControl, { children: [_jsx(PrevTrigger, { asChild: true, children: _jsx(Button, { leftIcon: _jsx(LuChevronLeft, {}) }) }), _jsx(ViewTrigger, { asChild: true, children: _jsx(Button, { children: _jsx(RangeText, {}) }) }), _jsx(NextTrigger, { asChild: true, children: _jsx(Button, { leftIcon: _jsx(LuChevronRight, {}) }) })] }), _jsxs(Table, { children: [_jsx(TableHead, { children: _jsx(TableRow, { children: datePicker.weekDays.map((weekDay, id) => (_jsx(TableHeader, { children: weekDay.narrow }, id))) }) }), _jsx(TableBody, { children: datePicker.weeks.map((week, id) => (_jsx(TableRow, { children: week.map((day, id) => (_jsx(TableCell, { value: day, children: _jsx(TableCellTrigger, { children: day.day }) }, id))) }, id))) })] })] })) }) }), _jsx(View, { view: "month", children: _jsx(Context, { children: (datePicker) => (_jsxs(_Fragment, { children: [_jsxs(ViewControl, { children: [_jsx(PrevTrigger, { asChild: true, children: _jsx(Button, { leftIcon: _jsx(LuChevronLeft, {}) }) }), _jsx(ViewTrigger, { asChild: true, children: _jsx(Button, { children: _jsx(RangeText, {}) }) }), _jsx(NextTrigger, { asChild: true, children: _jsx(Button, { leftIcon: _jsx(LuChevronRight, {}) }) })] }), _jsx(Table, { children: _jsx(TableBody, { children: datePicker
                                        .getMonthsGrid({ columns: 4, format: "short" })
                                        .map((months, id) => (_jsx(TableRow, { children: months.map((month, id) => (_jsx(TableCell, { value: month.value, children: _jsx(TableCellTrigger, { children: month.label }) }, id))) }, id))) }) })] })) }) }), _jsx(View, { view: "year", children: _jsx(Context, { children: (datePicker) => (_jsxs(_Fragment, { children: [_jsxs(ViewControl, { children: [_jsx(PrevTrigger, { asChild: true, children: _jsx(Button, { leftIcon: _jsx(LuChevronLeft, {}) }) }), _jsx(ViewTrigger, { asChild: true, children: _jsx(Button, { children: _jsx(RangeText, {}) }) }), _jsx(NextTrigger, { asChild: true, children: _jsx(Button, { leftIcon: _jsx(LuChevronRight, {}) }) })] }), _jsx(Table, { children: _jsx(TableBody, { children: datePicker.getYearsGrid({ columns: 4 }).map((years, id) => (_jsx(TableRow, { children: years.map((year, id) => (_jsx(TableCell, { value: year.value, children: _jsx(TableCellTrigger, { children: year.label }) }, id))) }, id))) }) })] })) }) })] }));
});
SimpleViews.displayName = "SimpleViews";
export const DatePicker = createComponentTree(CustomRoot, {
    Root,
    RootProvider,
    ClearTrigger,
    Content: CustomContent,
    Context,
    Control,
    Input,
    Label,
    MonthSelect,
    NextTrigger,
    Positioner,
    PresetTrigger,
    PrevTrigger,
    RangeText,
    Table,
    TableBody,
    TableCell,
    TableCellTrigger,
    TableHead,
    TableHeader,
    TableRow,
    Trigger,
    View,
    ViewControl,
    ViewTrigger,
    YearSelect,
    SimpleViews,
});
DatePicker.displayName = "DatePicker";
