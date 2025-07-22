import { Select as BaseSelect, CollectionItem, SelectRootProps } from "@ark-ui/react";
import React from "react";
import { ComponentMetadata, ComposedTVProps } from "react-tvcx";
export declare const select: import("tailwind-variants").TVReturnType<{
    size: {
        xs: {
            item: string;
        };
        sm: {
            item: string;
        };
        md: {
            item: string;
        };
        lg: {
            item: string;
        };
    };
    invalid: {
        true: {
            label: string;
            trigger: string;
        };
    };
}, {
    trigger: string;
    valueText: string;
    clearTrigger: string;
    indicator: string;
    content: string[];
    itemGroup: string;
    itemGroupLabel: string;
    item: string[];
    itemText: string;
    itemIndicator: string;
}, "", {
    size: {
        xs: {
            item: string;
        };
        sm: {
            item: string;
        };
        md: {
            item: string;
        };
        lg: {
            item: string;
        };
    };
    invalid: {
        true: {
            label: string;
            trigger: string;
        };
    };
}, {
    trigger: string;
    valueText: string;
    clearTrigger: string;
    indicator: string;
    content: string[];
    itemGroup: string;
    itemGroupLabel: string;
    item: string[];
    itemText: string;
    itemIndicator: string;
}, import("tailwind-variants").TVReturnType<{
    size: {
        xs: {
            item: string;
        };
        sm: {
            item: string;
        };
        md: {
            item: string;
        };
        lg: {
            item: string;
        };
    };
    invalid: {
        true: {
            label: string;
            trigger: string;
        };
    };
}, {
    trigger: string;
    valueText: string;
    clearTrigger: string;
    indicator: string;
    content: string[];
    itemGroup: string;
    itemGroupLabel: string;
    item: string[];
    itemText: string;
    itemIndicator: string;
}, "", unknown, unknown, undefined>>;
export interface SelectProps<T extends CollectionItem> extends SelectRootProps<T>, ComposedTVProps<typeof select> {
}
export interface Select extends ComponentMetadata {
    <T extends CollectionItem>(props: SelectProps<T> & React.RefAttributes<Select>): JSX.Element;
}
export declare const Select: Select & {
    Root: Select;
    RootProvider: React.ForwardRefExoticComponent<Omit<BaseSelect.RootProviderProps<unknown> & React.RefAttributes<HTMLDivElement>, "ref"> & import("tailwind-variants").VariantProps<import("tailwind-variants").TVReturnType<{
        size: {
            xs: {
                item: string;
            };
            sm: {
                item: string;
            };
            md: {
                item: string;
            };
            lg: {
                item: string;
            };
        };
        invalid: {
            true: {
                label: string;
                trigger: string;
            };
        };
    }, {
        trigger: string;
        valueText: string;
        clearTrigger: string;
        indicator: string;
        content: string[];
        itemGroup: string;
        itemGroupLabel: string;
        item: string[];
        itemText: string;
        itemIndicator: string;
    }, "", {
        size: {
            xs: {
                item: string;
            };
            sm: {
                item: string;
            };
            md: {
                item: string;
            };
            lg: {
                item: string;
            };
        };
        invalid: {
            true: {
                label: string;
                trigger: string;
            };
        };
    }, {
        trigger: string;
        valueText: string;
        clearTrigger: string;
        indicator: string;
        content: string[];
        itemGroup: string;
        itemGroupLabel: string;
        item: string[];
        itemText: string;
        itemIndicator: string;
    }, import("tailwind-variants").TVReturnType<{
        size: {
            xs: {
                item: string;
            };
            sm: {
                item: string;
            };
            md: {
                item: string;
            };
            lg: {
                item: string;
            };
        };
        invalid: {
            true: {
                label: string;
                trigger: string;
            };
        };
    }, {
        trigger: string;
        valueText: string;
        clearTrigger: string;
        indicator: string;
        content: string[];
        itemGroup: string;
        itemGroupLabel: string;
        item: string[];
        itemText: string;
        itemIndicator: string;
    }, "", unknown, unknown, undefined>>> & {
        classNames?: Partial<Record<"item" | "itemIndicator" | "base" | "content" | "indicator" | "trigger" | "clearTrigger" | "itemGroup" | "itemText" | "itemGroupLabel" | "valueText", any>> | undefined;
    } & import("react-tvcx").UnstyledProps & React.RefAttributes<HTMLDivElement>>;
    Context: React.ForwardRefExoticComponent<BaseSelect.ContextProps<unknown> & import("tailwind-variants").VariantProps<import("tailwind-variants").TVReturnType<{
        size: {
            xs: {
                item: string;
            };
            sm: {
                item: string;
            };
            md: {
                item: string;
            };
            lg: {
                item: string;
            };
        };
        invalid: {
            true: {
                label: string;
                trigger: string;
            };
        };
    }, {
        trigger: string;
        valueText: string;
        clearTrigger: string;
        indicator: string;
        content: string[];
        itemGroup: string;
        itemGroupLabel: string;
        item: string[];
        itemText: string;
        itemIndicator: string;
    }, "", {
        size: {
            xs: {
                item: string;
            };
            sm: {
                item: string;
            };
            md: {
                item: string;
            };
            lg: {
                item: string;
            };
        };
        invalid: {
            true: {
                label: string;
                trigger: string;
            };
        };
    }, {
        trigger: string;
        valueText: string;
        clearTrigger: string;
        indicator: string;
        content: string[];
        itemGroup: string;
        itemGroupLabel: string;
        item: string[];
        itemText: string;
        itemIndicator: string;
    }, import("tailwind-variants").TVReturnType<{
        size: {
            xs: {
                item: string;
            };
            sm: {
                item: string;
            };
            md: {
                item: string;
            };
            lg: {
                item: string;
            };
        };
        invalid: {
            true: {
                label: string;
                trigger: string;
            };
        };
    }, {
        trigger: string;
        valueText: string;
        clearTrigger: string;
        indicator: string;
        content: string[];
        itemGroup: string;
        itemGroupLabel: string;
        item: string[];
        itemText: string;
        itemIndicator: string;
    }, "", unknown, unknown, undefined>>> & import("react-tvcx").UnstyledProps & React.RefAttributes<never>>;
    ItemContext: React.ForwardRefExoticComponent<BaseSelect.ItemContextProps & import("tailwind-variants").VariantProps<import("tailwind-variants").TVReturnType<{
        size: {
            xs: {
                item: string;
            };
            sm: {
                item: string;
            };
            md: {
                item: string;
            };
            lg: {
                item: string;
            };
        };
        invalid: {
            true: {
                label: string;
                trigger: string;
            };
        };
    }, {
        trigger: string;
        valueText: string;
        clearTrigger: string;
        indicator: string;
        content: string[];
        itemGroup: string;
        itemGroupLabel: string;
        item: string[];
        itemText: string;
        itemIndicator: string;
    }, "", {
        size: {
            xs: {
                item: string;
            };
            sm: {
                item: string;
            };
            md: {
                item: string;
            };
            lg: {
                item: string;
            };
        };
        invalid: {
            true: {
                label: string;
                trigger: string;
            };
        };
    }, {
        trigger: string;
        valueText: string;
        clearTrigger: string;
        indicator: string;
        content: string[];
        itemGroup: string;
        itemGroupLabel: string;
        item: string[];
        itemText: string;
        itemIndicator: string;
    }, import("tailwind-variants").TVReturnType<{
        size: {
            xs: {
                item: string;
            };
            sm: {
                item: string;
            };
            md: {
                item: string;
            };
            lg: {
                item: string;
            };
        };
        invalid: {
            true: {
                label: string;
                trigger: string;
            };
        };
    }, {
        trigger: string;
        valueText: string;
        clearTrigger: string;
        indicator: string;
        content: string[];
        itemGroup: string;
        itemGroupLabel: string;
        item: string[];
        itemText: string;
        itemIndicator: string;
    }, "", unknown, unknown, undefined>>> & import("react-tvcx").UnstyledProps & React.RefAttributes<never>>;
    Label: React.ForwardRefExoticComponent<Omit<BaseSelect.LabelProps & React.RefAttributes<HTMLLabelElement>, "ref"> & import("tailwind-variants").VariantProps<import("tailwind-variants").TVReturnType<{
        size: {
            xs: {
                item: string;
            };
            sm: {
                item: string;
            };
            md: {
                item: string;
            };
            lg: {
                item: string;
            };
        };
        invalid: {
            true: {
                label: string;
                trigger: string;
            };
        };
    }, {
        trigger: string;
        valueText: string;
        clearTrigger: string;
        indicator: string;
        content: string[];
        itemGroup: string;
        itemGroupLabel: string;
        item: string[];
        itemText: string;
        itemIndicator: string;
    }, "", {
        size: {
            xs: {
                item: string;
            };
            sm: {
                item: string;
            };
            md: {
                item: string;
            };
            lg: {
                item: string;
            };
        };
        invalid: {
            true: {
                label: string;
                trigger: string;
            };
        };
    }, {
        trigger: string;
        valueText: string;
        clearTrigger: string;
        indicator: string;
        content: string[];
        itemGroup: string;
        itemGroupLabel: string;
        item: string[];
        itemText: string;
        itemIndicator: string;
    }, import("tailwind-variants").TVReturnType<{
        size: {
            xs: {
                item: string;
            };
            sm: {
                item: string;
            };
            md: {
                item: string;
            };
            lg: {
                item: string;
            };
        };
        invalid: {
            true: {
                label: string;
                trigger: string;
            };
        };
    }, {
        trigger: string;
        valueText: string;
        clearTrigger: string;
        indicator: string;
        content: string[];
        itemGroup: string;
        itemGroupLabel: string;
        item: string[];
        itemText: string;
        itemIndicator: string;
    }, "", unknown, unknown, undefined>>> & import("react-tvcx").UnstyledProps & React.RefAttributes<HTMLLabelElement>>;
    Control: React.ForwardRefExoticComponent<Omit<BaseSelect.ControlProps & React.RefAttributes<HTMLDivElement>, "ref"> & import("tailwind-variants").VariantProps<import("tailwind-variants").TVReturnType<{
        size: {
            xs: {
                item: string;
            };
            sm: {
                item: string;
            };
            md: {
                item: string;
            };
            lg: {
                item: string;
            };
        };
        invalid: {
            true: {
                label: string;
                trigger: string;
            };
        };
    }, {
        trigger: string;
        valueText: string;
        clearTrigger: string;
        indicator: string;
        content: string[];
        itemGroup: string;
        itemGroupLabel: string;
        item: string[];
        itemText: string;
        itemIndicator: string;
    }, "", {
        size: {
            xs: {
                item: string;
            };
            sm: {
                item: string;
            };
            md: {
                item: string;
            };
            lg: {
                item: string;
            };
        };
        invalid: {
            true: {
                label: string;
                trigger: string;
            };
        };
    }, {
        trigger: string;
        valueText: string;
        clearTrigger: string;
        indicator: string;
        content: string[];
        itemGroup: string;
        itemGroupLabel: string;
        item: string[];
        itemText: string;
        itemIndicator: string;
    }, import("tailwind-variants").TVReturnType<{
        size: {
            xs: {
                item: string;
            };
            sm: {
                item: string;
            };
            md: {
                item: string;
            };
            lg: {
                item: string;
            };
        };
        invalid: {
            true: {
                label: string;
                trigger: string;
            };
        };
    }, {
        trigger: string;
        valueText: string;
        clearTrigger: string;
        indicator: string;
        content: string[];
        itemGroup: string;
        itemGroupLabel: string;
        item: string[];
        itemText: string;
        itemIndicator: string;
    }, "", unknown, unknown, undefined>>> & import("react-tvcx").UnstyledProps & React.RefAttributes<HTMLDivElement>>;
    Trigger: React.ForwardRefExoticComponent<Omit<BaseSelect.TriggerProps & React.RefAttributes<HTMLButtonElement>, "ref"> & import("tailwind-variants").VariantProps<import("tailwind-variants").TVReturnType<{
        size: {
            xs: {
                item: string;
            };
            sm: {
                item: string;
            };
            md: {
                item: string;
            };
            lg: {
                item: string;
            };
        };
        invalid: {
            true: {
                label: string;
                trigger: string;
            };
        };
    }, {
        trigger: string;
        valueText: string;
        clearTrigger: string;
        indicator: string;
        content: string[];
        itemGroup: string;
        itemGroupLabel: string;
        item: string[];
        itemText: string;
        itemIndicator: string;
    }, "", {
        size: {
            xs: {
                item: string;
            };
            sm: {
                item: string;
            };
            md: {
                item: string;
            };
            lg: {
                item: string;
            };
        };
        invalid: {
            true: {
                label: string;
                trigger: string;
            };
        };
    }, {
        trigger: string;
        valueText: string;
        clearTrigger: string;
        indicator: string;
        content: string[];
        itemGroup: string;
        itemGroupLabel: string;
        item: string[];
        itemText: string;
        itemIndicator: string;
    }, import("tailwind-variants").TVReturnType<{
        size: {
            xs: {
                item: string;
            };
            sm: {
                item: string;
            };
            md: {
                item: string;
            };
            lg: {
                item: string;
            };
        };
        invalid: {
            true: {
                label: string;
                trigger: string;
            };
        };
    }, {
        trigger: string;
        valueText: string;
        clearTrigger: string;
        indicator: string;
        content: string[];
        itemGroup: string;
        itemGroupLabel: string;
        item: string[];
        itemText: string;
        itemIndicator: string;
    }, "", unknown, unknown, undefined>>> & import("react-tvcx").UnstyledProps & React.RefAttributes<HTMLButtonElement>>;
    ValueText: React.ForwardRefExoticComponent<Omit<BaseSelect.ValueTextProps & React.RefAttributes<HTMLSpanElement>, "ref"> & import("tailwind-variants").VariantProps<import("tailwind-variants").TVReturnType<{
        size: {
            xs: {
                item: string;
            };
            sm: {
                item: string;
            };
            md: {
                item: string;
            };
            lg: {
                item: string;
            };
        };
        invalid: {
            true: {
                label: string;
                trigger: string;
            };
        };
    }, {
        trigger: string;
        valueText: string;
        clearTrigger: string;
        indicator: string;
        content: string[];
        itemGroup: string;
        itemGroupLabel: string;
        item: string[];
        itemText: string;
        itemIndicator: string;
    }, "", {
        size: {
            xs: {
                item: string;
            };
            sm: {
                item: string;
            };
            md: {
                item: string;
            };
            lg: {
                item: string;
            };
        };
        invalid: {
            true: {
                label: string;
                trigger: string;
            };
        };
    }, {
        trigger: string;
        valueText: string;
        clearTrigger: string;
        indicator: string;
        content: string[];
        itemGroup: string;
        itemGroupLabel: string;
        item: string[];
        itemText: string;
        itemIndicator: string;
    }, import("tailwind-variants").TVReturnType<{
        size: {
            xs: {
                item: string;
            };
            sm: {
                item: string;
            };
            md: {
                item: string;
            };
            lg: {
                item: string;
            };
        };
        invalid: {
            true: {
                label: string;
                trigger: string;
            };
        };
    }, {
        trigger: string;
        valueText: string;
        clearTrigger: string;
        indicator: string;
        content: string[];
        itemGroup: string;
        itemGroupLabel: string;
        item: string[];
        itemText: string;
        itemIndicator: string;
    }, "", unknown, unknown, undefined>>> & import("react-tvcx").UnstyledProps & React.RefAttributes<HTMLSpanElement>>;
    ClearTrigger: React.ForwardRefExoticComponent<Omit<BaseSelect.ClearTriggerProps & React.RefAttributes<HTMLButtonElement>, "ref"> & import("tailwind-variants").VariantProps<import("tailwind-variants").TVReturnType<{
        size: {
            xs: {
                item: string;
            };
            sm: {
                item: string;
            };
            md: {
                item: string;
            };
            lg: {
                item: string;
            };
        };
        invalid: {
            true: {
                label: string;
                trigger: string;
            };
        };
    }, {
        trigger: string;
        valueText: string;
        clearTrigger: string;
        indicator: string;
        content: string[];
        itemGroup: string;
        itemGroupLabel: string;
        item: string[];
        itemText: string;
        itemIndicator: string;
    }, "", {
        size: {
            xs: {
                item: string;
            };
            sm: {
                item: string;
            };
            md: {
                item: string;
            };
            lg: {
                item: string;
            };
        };
        invalid: {
            true: {
                label: string;
                trigger: string;
            };
        };
    }, {
        trigger: string;
        valueText: string;
        clearTrigger: string;
        indicator: string;
        content: string[];
        itemGroup: string;
        itemGroupLabel: string;
        item: string[];
        itemText: string;
        itemIndicator: string;
    }, import("tailwind-variants").TVReturnType<{
        size: {
            xs: {
                item: string;
            };
            sm: {
                item: string;
            };
            md: {
                item: string;
            };
            lg: {
                item: string;
            };
        };
        invalid: {
            true: {
                label: string;
                trigger: string;
            };
        };
    }, {
        trigger: string;
        valueText: string;
        clearTrigger: string;
        indicator: string;
        content: string[];
        itemGroup: string;
        itemGroupLabel: string;
        item: string[];
        itemText: string;
        itemIndicator: string;
    }, "", unknown, unknown, undefined>>> & import("react-tvcx").UnstyledProps & React.RefAttributes<HTMLButtonElement>>;
    Indicator: React.ForwardRefExoticComponent<Omit<BaseSelect.IndicatorProps & React.RefAttributes<HTMLDivElement>, "ref"> & import("tailwind-variants").VariantProps<import("tailwind-variants").TVReturnType<{
        size: {
            xs: {
                item: string;
            };
            sm: {
                item: string;
            };
            md: {
                item: string;
            };
            lg: {
                item: string;
            };
        };
        invalid: {
            true: {
                label: string;
                trigger: string;
            };
        };
    }, {
        trigger: string;
        valueText: string;
        clearTrigger: string;
        indicator: string;
        content: string[];
        itemGroup: string;
        itemGroupLabel: string;
        item: string[];
        itemText: string;
        itemIndicator: string;
    }, "", {
        size: {
            xs: {
                item: string;
            };
            sm: {
                item: string;
            };
            md: {
                item: string;
            };
            lg: {
                item: string;
            };
        };
        invalid: {
            true: {
                label: string;
                trigger: string;
            };
        };
    }, {
        trigger: string;
        valueText: string;
        clearTrigger: string;
        indicator: string;
        content: string[];
        itemGroup: string;
        itemGroupLabel: string;
        item: string[];
        itemText: string;
        itemIndicator: string;
    }, import("tailwind-variants").TVReturnType<{
        size: {
            xs: {
                item: string;
            };
            sm: {
                item: string;
            };
            md: {
                item: string;
            };
            lg: {
                item: string;
            };
        };
        invalid: {
            true: {
                label: string;
                trigger: string;
            };
        };
    }, {
        trigger: string;
        valueText: string;
        clearTrigger: string;
        indicator: string;
        content: string[];
        itemGroup: string;
        itemGroupLabel: string;
        item: string[];
        itemText: string;
        itemIndicator: string;
    }, "", unknown, unknown, undefined>>> & import("react-tvcx").UnstyledProps & React.RefAttributes<HTMLDivElement>>;
    HiddenSelect: React.ForwardRefExoticComponent<Omit<BaseSelect.HiddenSelectProps & React.RefAttributes<HTMLSelectElement>, "ref"> & import("tailwind-variants").VariantProps<import("tailwind-variants").TVReturnType<{
        size: {
            xs: {
                item: string;
            };
            sm: {
                item: string;
            };
            md: {
                item: string;
            };
            lg: {
                item: string;
            };
        };
        invalid: {
            true: {
                label: string;
                trigger: string;
            };
        };
    }, {
        trigger: string;
        valueText: string;
        clearTrigger: string;
        indicator: string;
        content: string[];
        itemGroup: string;
        itemGroupLabel: string;
        item: string[];
        itemText: string;
        itemIndicator: string;
    }, "", {
        size: {
            xs: {
                item: string;
            };
            sm: {
                item: string;
            };
            md: {
                item: string;
            };
            lg: {
                item: string;
            };
        };
        invalid: {
            true: {
                label: string;
                trigger: string;
            };
        };
    }, {
        trigger: string;
        valueText: string;
        clearTrigger: string;
        indicator: string;
        content: string[];
        itemGroup: string;
        itemGroupLabel: string;
        item: string[];
        itemText: string;
        itemIndicator: string;
    }, import("tailwind-variants").TVReturnType<{
        size: {
            xs: {
                item: string;
            };
            sm: {
                item: string;
            };
            md: {
                item: string;
            };
            lg: {
                item: string;
            };
        };
        invalid: {
            true: {
                label: string;
                trigger: string;
            };
        };
    }, {
        trigger: string;
        valueText: string;
        clearTrigger: string;
        indicator: string;
        content: string[];
        itemGroup: string;
        itemGroupLabel: string;
        item: string[];
        itemText: string;
        itemIndicator: string;
    }, "", unknown, unknown, undefined>>> & import("react-tvcx").UnstyledProps & React.RefAttributes<HTMLSelectElement>>;
    Positioner: React.ForwardRefExoticComponent<Omit<BaseSelect.PositionerProps & React.RefAttributes<HTMLDivElement>, "ref"> & import("tailwind-variants").VariantProps<import("tailwind-variants").TVReturnType<{
        size: {
            xs: {
                item: string;
            };
            sm: {
                item: string;
            };
            md: {
                item: string;
            };
            lg: {
                item: string;
            };
        };
        invalid: {
            true: {
                label: string;
                trigger: string;
            };
        };
    }, {
        trigger: string;
        valueText: string;
        clearTrigger: string;
        indicator: string;
        content: string[];
        itemGroup: string;
        itemGroupLabel: string;
        item: string[];
        itemText: string;
        itemIndicator: string;
    }, "", {
        size: {
            xs: {
                item: string;
            };
            sm: {
                item: string;
            };
            md: {
                item: string;
            };
            lg: {
                item: string;
            };
        };
        invalid: {
            true: {
                label: string;
                trigger: string;
            };
        };
    }, {
        trigger: string;
        valueText: string;
        clearTrigger: string;
        indicator: string;
        content: string[];
        itemGroup: string;
        itemGroupLabel: string;
        item: string[];
        itemText: string;
        itemIndicator: string;
    }, import("tailwind-variants").TVReturnType<{
        size: {
            xs: {
                item: string;
            };
            sm: {
                item: string;
            };
            md: {
                item: string;
            };
            lg: {
                item: string;
            };
        };
        invalid: {
            true: {
                label: string;
                trigger: string;
            };
        };
    }, {
        trigger: string;
        valueText: string;
        clearTrigger: string;
        indicator: string;
        content: string[];
        itemGroup: string;
        itemGroupLabel: string;
        item: string[];
        itemText: string;
        itemIndicator: string;
    }, "", unknown, unknown, undefined>>> & import("react-tvcx").UnstyledProps & React.RefAttributes<HTMLDivElement>>;
    List: React.ForwardRefExoticComponent<Omit<BaseSelect.ListProps & React.RefAttributes<HTMLDivElement>, "ref"> & import("tailwind-variants").VariantProps<import("tailwind-variants").TVReturnType<{
        size: {
            xs: {
                item: string;
            };
            sm: {
                item: string;
            };
            md: {
                item: string;
            };
            lg: {
                item: string;
            };
        };
        invalid: {
            true: {
                label: string;
                trigger: string;
            };
        };
    }, {
        trigger: string;
        valueText: string;
        clearTrigger: string;
        indicator: string;
        content: string[];
        itemGroup: string;
        itemGroupLabel: string;
        item: string[];
        itemText: string;
        itemIndicator: string;
    }, "", {
        size: {
            xs: {
                item: string;
            };
            sm: {
                item: string;
            };
            md: {
                item: string;
            };
            lg: {
                item: string;
            };
        };
        invalid: {
            true: {
                label: string;
                trigger: string;
            };
        };
    }, {
        trigger: string;
        valueText: string;
        clearTrigger: string;
        indicator: string;
        content: string[];
        itemGroup: string;
        itemGroupLabel: string;
        item: string[];
        itemText: string;
        itemIndicator: string;
    }, import("tailwind-variants").TVReturnType<{
        size: {
            xs: {
                item: string;
            };
            sm: {
                item: string;
            };
            md: {
                item: string;
            };
            lg: {
                item: string;
            };
        };
        invalid: {
            true: {
                label: string;
                trigger: string;
            };
        };
    }, {
        trigger: string;
        valueText: string;
        clearTrigger: string;
        indicator: string;
        content: string[];
        itemGroup: string;
        itemGroupLabel: string;
        item: string[];
        itemText: string;
        itemIndicator: string;
    }, "", unknown, unknown, undefined>>> & import("react-tvcx").UnstyledProps & React.RefAttributes<HTMLDivElement>>;
    Content: React.ForwardRefExoticComponent<Omit<Omit<BaseSelect.ContentProps & React.RefAttributes<HTMLDivElement>, "ref"> & import("tailwind-variants").VariantProps<import("tailwind-variants").TVReturnType<{
        size: {
            xs: {
                item: string;
            };
            sm: {
                item: string;
            };
            md: {
                item: string;
            };
            lg: {
                item: string;
            };
        };
        invalid: {
            true: {
                label: string;
                trigger: string;
            };
        };
    }, {
        trigger: string;
        valueText: string;
        clearTrigger: string;
        indicator: string;
        content: string[];
        itemGroup: string;
        itemGroupLabel: string;
        item: string[];
        itemText: string;
        itemIndicator: string;
    }, "", {
        size: {
            xs: {
                item: string;
            };
            sm: {
                item: string;
            };
            md: {
                item: string;
            };
            lg: {
                item: string;
            };
        };
        invalid: {
            true: {
                label: string;
                trigger: string;
            };
        };
    }, {
        trigger: string;
        valueText: string;
        clearTrigger: string;
        indicator: string;
        content: string[];
        itemGroup: string;
        itemGroupLabel: string;
        item: string[];
        itemText: string;
        itemIndicator: string;
    }, import("tailwind-variants").TVReturnType<{
        size: {
            xs: {
                item: string;
            };
            sm: {
                item: string;
            };
            md: {
                item: string;
            };
            lg: {
                item: string;
            };
        };
        invalid: {
            true: {
                label: string;
                trigger: string;
            };
        };
    }, {
        trigger: string;
        valueText: string;
        clearTrigger: string;
        indicator: string;
        content: string[];
        itemGroup: string;
        itemGroupLabel: string;
        item: string[];
        itemText: string;
        itemIndicator: string;
    }, "", unknown, unknown, undefined>>> & import("react-tvcx").UnstyledProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
    ItemGroup: React.ForwardRefExoticComponent<Omit<BaseSelect.ItemGroupProps & React.RefAttributes<HTMLDivElement>, "ref"> & import("tailwind-variants").VariantProps<import("tailwind-variants").TVReturnType<{
        size: {
            xs: {
                item: string;
            };
            sm: {
                item: string;
            };
            md: {
                item: string;
            };
            lg: {
                item: string;
            };
        };
        invalid: {
            true: {
                label: string;
                trigger: string;
            };
        };
    }, {
        trigger: string;
        valueText: string;
        clearTrigger: string;
        indicator: string;
        content: string[];
        itemGroup: string;
        itemGroupLabel: string;
        item: string[];
        itemText: string;
        itemIndicator: string;
    }, "", {
        size: {
            xs: {
                item: string;
            };
            sm: {
                item: string;
            };
            md: {
                item: string;
            };
            lg: {
                item: string;
            };
        };
        invalid: {
            true: {
                label: string;
                trigger: string;
            };
        };
    }, {
        trigger: string;
        valueText: string;
        clearTrigger: string;
        indicator: string;
        content: string[];
        itemGroup: string;
        itemGroupLabel: string;
        item: string[];
        itemText: string;
        itemIndicator: string;
    }, import("tailwind-variants").TVReturnType<{
        size: {
            xs: {
                item: string;
            };
            sm: {
                item: string;
            };
            md: {
                item: string;
            };
            lg: {
                item: string;
            };
        };
        invalid: {
            true: {
                label: string;
                trigger: string;
            };
        };
    }, {
        trigger: string;
        valueText: string;
        clearTrigger: string;
        indicator: string;
        content: string[];
        itemGroup: string;
        itemGroupLabel: string;
        item: string[];
        itemText: string;
        itemIndicator: string;
    }, "", unknown, unknown, undefined>>> & import("react-tvcx").UnstyledProps & React.RefAttributes<HTMLDivElement>>;
    ItemGroupLabel: React.ForwardRefExoticComponent<Omit<BaseSelect.ItemGroupLabelProps & React.RefAttributes<HTMLDivElement>, "ref"> & import("tailwind-variants").VariantProps<import("tailwind-variants").TVReturnType<{
        size: {
            xs: {
                item: string;
            };
            sm: {
                item: string;
            };
            md: {
                item: string;
            };
            lg: {
                item: string;
            };
        };
        invalid: {
            true: {
                label: string;
                trigger: string;
            };
        };
    }, {
        trigger: string;
        valueText: string;
        clearTrigger: string;
        indicator: string;
        content: string[];
        itemGroup: string;
        itemGroupLabel: string;
        item: string[];
        itemText: string;
        itemIndicator: string;
    }, "", {
        size: {
            xs: {
                item: string;
            };
            sm: {
                item: string;
            };
            md: {
                item: string;
            };
            lg: {
                item: string;
            };
        };
        invalid: {
            true: {
                label: string;
                trigger: string;
            };
        };
    }, {
        trigger: string;
        valueText: string;
        clearTrigger: string;
        indicator: string;
        content: string[];
        itemGroup: string;
        itemGroupLabel: string;
        item: string[];
        itemText: string;
        itemIndicator: string;
    }, import("tailwind-variants").TVReturnType<{
        size: {
            xs: {
                item: string;
            };
            sm: {
                item: string;
            };
            md: {
                item: string;
            };
            lg: {
                item: string;
            };
        };
        invalid: {
            true: {
                label: string;
                trigger: string;
            };
        };
    }, {
        trigger: string;
        valueText: string;
        clearTrigger: string;
        indicator: string;
        content: string[];
        itemGroup: string;
        itemGroupLabel: string;
        item: string[];
        itemText: string;
        itemIndicator: string;
    }, "", unknown, unknown, undefined>>> & import("react-tvcx").UnstyledProps & React.RefAttributes<HTMLDivElement>>;
    Item: React.ForwardRefExoticComponent<Omit<BaseSelect.ItemProps & React.RefAttributes<HTMLDivElement>, "ref"> & import("tailwind-variants").VariantProps<import("tailwind-variants").TVReturnType<{
        size: {
            xs: {
                item: string;
            };
            sm: {
                item: string;
            };
            md: {
                item: string;
            };
            lg: {
                item: string;
            };
        };
        invalid: {
            true: {
                label: string;
                trigger: string;
            };
        };
    }, {
        trigger: string;
        valueText: string;
        clearTrigger: string;
        indicator: string;
        content: string[];
        itemGroup: string;
        itemGroupLabel: string;
        item: string[];
        itemText: string;
        itemIndicator: string;
    }, "", {
        size: {
            xs: {
                item: string;
            };
            sm: {
                item: string;
            };
            md: {
                item: string;
            };
            lg: {
                item: string;
            };
        };
        invalid: {
            true: {
                label: string;
                trigger: string;
            };
        };
    }, {
        trigger: string;
        valueText: string;
        clearTrigger: string;
        indicator: string;
        content: string[];
        itemGroup: string;
        itemGroupLabel: string;
        item: string[];
        itemText: string;
        itemIndicator: string;
    }, import("tailwind-variants").TVReturnType<{
        size: {
            xs: {
                item: string;
            };
            sm: {
                item: string;
            };
            md: {
                item: string;
            };
            lg: {
                item: string;
            };
        };
        invalid: {
            true: {
                label: string;
                trigger: string;
            };
        };
    }, {
        trigger: string;
        valueText: string;
        clearTrigger: string;
        indicator: string;
        content: string[];
        itemGroup: string;
        itemGroupLabel: string;
        item: string[];
        itemText: string;
        itemIndicator: string;
    }, "", unknown, unknown, undefined>>> & import("react-tvcx").UnstyledProps & React.RefAttributes<HTMLDivElement>>;
    ItemText: React.ForwardRefExoticComponent<Omit<BaseSelect.ItemTextProps & React.RefAttributes<HTMLDivElement>, "ref"> & import("tailwind-variants").VariantProps<import("tailwind-variants").TVReturnType<{
        size: {
            xs: {
                item: string;
            };
            sm: {
                item: string;
            };
            md: {
                item: string;
            };
            lg: {
                item: string;
            };
        };
        invalid: {
            true: {
                label: string;
                trigger: string;
            };
        };
    }, {
        trigger: string;
        valueText: string;
        clearTrigger: string;
        indicator: string;
        content: string[];
        itemGroup: string;
        itemGroupLabel: string;
        item: string[];
        itemText: string;
        itemIndicator: string;
    }, "", {
        size: {
            xs: {
                item: string;
            };
            sm: {
                item: string;
            };
            md: {
                item: string;
            };
            lg: {
                item: string;
            };
        };
        invalid: {
            true: {
                label: string;
                trigger: string;
            };
        };
    }, {
        trigger: string;
        valueText: string;
        clearTrigger: string;
        indicator: string;
        content: string[];
        itemGroup: string;
        itemGroupLabel: string;
        item: string[];
        itemText: string;
        itemIndicator: string;
    }, import("tailwind-variants").TVReturnType<{
        size: {
            xs: {
                item: string;
            };
            sm: {
                item: string;
            };
            md: {
                item: string;
            };
            lg: {
                item: string;
            };
        };
        invalid: {
            true: {
                label: string;
                trigger: string;
            };
        };
    }, {
        trigger: string;
        valueText: string;
        clearTrigger: string;
        indicator: string;
        content: string[];
        itemGroup: string;
        itemGroupLabel: string;
        item: string[];
        itemText: string;
        itemIndicator: string;
    }, "", unknown, unknown, undefined>>> & import("react-tvcx").UnstyledProps & React.RefAttributes<HTMLDivElement>>;
    ItemIndicator: React.ForwardRefExoticComponent<Omit<BaseSelect.ItemIndicatorProps & React.RefAttributes<HTMLDivElement>, "ref"> & import("tailwind-variants").VariantProps<import("tailwind-variants").TVReturnType<{
        size: {
            xs: {
                item: string;
            };
            sm: {
                item: string;
            };
            md: {
                item: string;
            };
            lg: {
                item: string;
            };
        };
        invalid: {
            true: {
                label: string;
                trigger: string;
            };
        };
    }, {
        trigger: string;
        valueText: string;
        clearTrigger: string;
        indicator: string;
        content: string[];
        itemGroup: string;
        itemGroupLabel: string;
        item: string[];
        itemText: string;
        itemIndicator: string;
    }, "", {
        size: {
            xs: {
                item: string;
            };
            sm: {
                item: string;
            };
            md: {
                item: string;
            };
            lg: {
                item: string;
            };
        };
        invalid: {
            true: {
                label: string;
                trigger: string;
            };
        };
    }, {
        trigger: string;
        valueText: string;
        clearTrigger: string;
        indicator: string;
        content: string[];
        itemGroup: string;
        itemGroupLabel: string;
        item: string[];
        itemText: string;
        itemIndicator: string;
    }, import("tailwind-variants").TVReturnType<{
        size: {
            xs: {
                item: string;
            };
            sm: {
                item: string;
            };
            md: {
                item: string;
            };
            lg: {
                item: string;
            };
        };
        invalid: {
            true: {
                label: string;
                trigger: string;
            };
        };
    }, {
        trigger: string;
        valueText: string;
        clearTrigger: string;
        indicator: string;
        content: string[];
        itemGroup: string;
        itemGroupLabel: string;
        item: string[];
        itemText: string;
        itemIndicator: string;
    }, "", unknown, unknown, undefined>>> & import("react-tvcx").UnstyledProps & React.RefAttributes<HTMLDivElement>>;
} & Readonly<{
    Root: Select;
    RootProvider: React.ForwardRefExoticComponent<Omit<BaseSelect.RootProviderProps<unknown> & React.RefAttributes<HTMLDivElement>, "ref"> & import("tailwind-variants").VariantProps<import("tailwind-variants").TVReturnType<{
        size: {
            xs: {
                item: string;
            };
            sm: {
                item: string;
            };
            md: {
                item: string;
            };
            lg: {
                item: string;
            };
        };
        invalid: {
            true: {
                label: string;
                trigger: string;
            };
        };
    }, {
        trigger: string;
        valueText: string;
        clearTrigger: string;
        indicator: string;
        content: string[];
        itemGroup: string;
        itemGroupLabel: string;
        item: string[];
        itemText: string;
        itemIndicator: string;
    }, "", {
        size: {
            xs: {
                item: string;
            };
            sm: {
                item: string;
            };
            md: {
                item: string;
            };
            lg: {
                item: string;
            };
        };
        invalid: {
            true: {
                label: string;
                trigger: string;
            };
        };
    }, {
        trigger: string;
        valueText: string;
        clearTrigger: string;
        indicator: string;
        content: string[];
        itemGroup: string;
        itemGroupLabel: string;
        item: string[];
        itemText: string;
        itemIndicator: string;
    }, import("tailwind-variants").TVReturnType<{
        size: {
            xs: {
                item: string;
            };
            sm: {
                item: string;
            };
            md: {
                item: string;
            };
            lg: {
                item: string;
            };
        };
        invalid: {
            true: {
                label: string;
                trigger: string;
            };
        };
    }, {
        trigger: string;
        valueText: string;
        clearTrigger: string;
        indicator: string;
        content: string[];
        itemGroup: string;
        itemGroupLabel: string;
        item: string[];
        itemText: string;
        itemIndicator: string;
    }, "", unknown, unknown, undefined>>> & {
        classNames?: Partial<Record<"item" | "itemIndicator" | "base" | "content" | "indicator" | "trigger" | "clearTrigger" | "itemGroup" | "itemText" | "itemGroupLabel" | "valueText", any>> | undefined;
    } & import("react-tvcx").UnstyledProps & React.RefAttributes<HTMLDivElement>>;
    Context: React.ForwardRefExoticComponent<BaseSelect.ContextProps<unknown> & import("tailwind-variants").VariantProps<import("tailwind-variants").TVReturnType<{
        size: {
            xs: {
                item: string;
            };
            sm: {
                item: string;
            };
            md: {
                item: string;
            };
            lg: {
                item: string;
            };
        };
        invalid: {
            true: {
                label: string;
                trigger: string;
            };
        };
    }, {
        trigger: string;
        valueText: string;
        clearTrigger: string;
        indicator: string;
        content: string[];
        itemGroup: string;
        itemGroupLabel: string;
        item: string[];
        itemText: string;
        itemIndicator: string;
    }, "", {
        size: {
            xs: {
                item: string;
            };
            sm: {
                item: string;
            };
            md: {
                item: string;
            };
            lg: {
                item: string;
            };
        };
        invalid: {
            true: {
                label: string;
                trigger: string;
            };
        };
    }, {
        trigger: string;
        valueText: string;
        clearTrigger: string;
        indicator: string;
        content: string[];
        itemGroup: string;
        itemGroupLabel: string;
        item: string[];
        itemText: string;
        itemIndicator: string;
    }, import("tailwind-variants").TVReturnType<{
        size: {
            xs: {
                item: string;
            };
            sm: {
                item: string;
            };
            md: {
                item: string;
            };
            lg: {
                item: string;
            };
        };
        invalid: {
            true: {
                label: string;
                trigger: string;
            };
        };
    }, {
        trigger: string;
        valueText: string;
        clearTrigger: string;
        indicator: string;
        content: string[];
        itemGroup: string;
        itemGroupLabel: string;
        item: string[];
        itemText: string;
        itemIndicator: string;
    }, "", unknown, unknown, undefined>>> & import("react-tvcx").UnstyledProps & React.RefAttributes<never>>;
    ItemContext: React.ForwardRefExoticComponent<BaseSelect.ItemContextProps & import("tailwind-variants").VariantProps<import("tailwind-variants").TVReturnType<{
        size: {
            xs: {
                item: string;
            };
            sm: {
                item: string;
            };
            md: {
                item: string;
            };
            lg: {
                item: string;
            };
        };
        invalid: {
            true: {
                label: string;
                trigger: string;
            };
        };
    }, {
        trigger: string;
        valueText: string;
        clearTrigger: string;
        indicator: string;
        content: string[];
        itemGroup: string;
        itemGroupLabel: string;
        item: string[];
        itemText: string;
        itemIndicator: string;
    }, "", {
        size: {
            xs: {
                item: string;
            };
            sm: {
                item: string;
            };
            md: {
                item: string;
            };
            lg: {
                item: string;
            };
        };
        invalid: {
            true: {
                label: string;
                trigger: string;
            };
        };
    }, {
        trigger: string;
        valueText: string;
        clearTrigger: string;
        indicator: string;
        content: string[];
        itemGroup: string;
        itemGroupLabel: string;
        item: string[];
        itemText: string;
        itemIndicator: string;
    }, import("tailwind-variants").TVReturnType<{
        size: {
            xs: {
                item: string;
            };
            sm: {
                item: string;
            };
            md: {
                item: string;
            };
            lg: {
                item: string;
            };
        };
        invalid: {
            true: {
                label: string;
                trigger: string;
            };
        };
    }, {
        trigger: string;
        valueText: string;
        clearTrigger: string;
        indicator: string;
        content: string[];
        itemGroup: string;
        itemGroupLabel: string;
        item: string[];
        itemText: string;
        itemIndicator: string;
    }, "", unknown, unknown, undefined>>> & import("react-tvcx").UnstyledProps & React.RefAttributes<never>>;
    Label: React.ForwardRefExoticComponent<Omit<BaseSelect.LabelProps & React.RefAttributes<HTMLLabelElement>, "ref"> & import("tailwind-variants").VariantProps<import("tailwind-variants").TVReturnType<{
        size: {
            xs: {
                item: string;
            };
            sm: {
                item: string;
            };
            md: {
                item: string;
            };
            lg: {
                item: string;
            };
        };
        invalid: {
            true: {
                label: string;
                trigger: string;
            };
        };
    }, {
        trigger: string;
        valueText: string;
        clearTrigger: string;
        indicator: string;
        content: string[];
        itemGroup: string;
        itemGroupLabel: string;
        item: string[];
        itemText: string;
        itemIndicator: string;
    }, "", {
        size: {
            xs: {
                item: string;
            };
            sm: {
                item: string;
            };
            md: {
                item: string;
            };
            lg: {
                item: string;
            };
        };
        invalid: {
            true: {
                label: string;
                trigger: string;
            };
        };
    }, {
        trigger: string;
        valueText: string;
        clearTrigger: string;
        indicator: string;
        content: string[];
        itemGroup: string;
        itemGroupLabel: string;
        item: string[];
        itemText: string;
        itemIndicator: string;
    }, import("tailwind-variants").TVReturnType<{
        size: {
            xs: {
                item: string;
            };
            sm: {
                item: string;
            };
            md: {
                item: string;
            };
            lg: {
                item: string;
            };
        };
        invalid: {
            true: {
                label: string;
                trigger: string;
            };
        };
    }, {
        trigger: string;
        valueText: string;
        clearTrigger: string;
        indicator: string;
        content: string[];
        itemGroup: string;
        itemGroupLabel: string;
        item: string[];
        itemText: string;
        itemIndicator: string;
    }, "", unknown, unknown, undefined>>> & import("react-tvcx").UnstyledProps & React.RefAttributes<HTMLLabelElement>>;
    Control: React.ForwardRefExoticComponent<Omit<BaseSelect.ControlProps & React.RefAttributes<HTMLDivElement>, "ref"> & import("tailwind-variants").VariantProps<import("tailwind-variants").TVReturnType<{
        size: {
            xs: {
                item: string;
            };
            sm: {
                item: string;
            };
            md: {
                item: string;
            };
            lg: {
                item: string;
            };
        };
        invalid: {
            true: {
                label: string;
                trigger: string;
            };
        };
    }, {
        trigger: string;
        valueText: string;
        clearTrigger: string;
        indicator: string;
        content: string[];
        itemGroup: string;
        itemGroupLabel: string;
        item: string[];
        itemText: string;
        itemIndicator: string;
    }, "", {
        size: {
            xs: {
                item: string;
            };
            sm: {
                item: string;
            };
            md: {
                item: string;
            };
            lg: {
                item: string;
            };
        };
        invalid: {
            true: {
                label: string;
                trigger: string;
            };
        };
    }, {
        trigger: string;
        valueText: string;
        clearTrigger: string;
        indicator: string;
        content: string[];
        itemGroup: string;
        itemGroupLabel: string;
        item: string[];
        itemText: string;
        itemIndicator: string;
    }, import("tailwind-variants").TVReturnType<{
        size: {
            xs: {
                item: string;
            };
            sm: {
                item: string;
            };
            md: {
                item: string;
            };
            lg: {
                item: string;
            };
        };
        invalid: {
            true: {
                label: string;
                trigger: string;
            };
        };
    }, {
        trigger: string;
        valueText: string;
        clearTrigger: string;
        indicator: string;
        content: string[];
        itemGroup: string;
        itemGroupLabel: string;
        item: string[];
        itemText: string;
        itemIndicator: string;
    }, "", unknown, unknown, undefined>>> & import("react-tvcx").UnstyledProps & React.RefAttributes<HTMLDivElement>>;
    Trigger: React.ForwardRefExoticComponent<Omit<BaseSelect.TriggerProps & React.RefAttributes<HTMLButtonElement>, "ref"> & import("tailwind-variants").VariantProps<import("tailwind-variants").TVReturnType<{
        size: {
            xs: {
                item: string;
            };
            sm: {
                item: string;
            };
            md: {
                item: string;
            };
            lg: {
                item: string;
            };
        };
        invalid: {
            true: {
                label: string;
                trigger: string;
            };
        };
    }, {
        trigger: string;
        valueText: string;
        clearTrigger: string;
        indicator: string;
        content: string[];
        itemGroup: string;
        itemGroupLabel: string;
        item: string[];
        itemText: string;
        itemIndicator: string;
    }, "", {
        size: {
            xs: {
                item: string;
            };
            sm: {
                item: string;
            };
            md: {
                item: string;
            };
            lg: {
                item: string;
            };
        };
        invalid: {
            true: {
                label: string;
                trigger: string;
            };
        };
    }, {
        trigger: string;
        valueText: string;
        clearTrigger: string;
        indicator: string;
        content: string[];
        itemGroup: string;
        itemGroupLabel: string;
        item: string[];
        itemText: string;
        itemIndicator: string;
    }, import("tailwind-variants").TVReturnType<{
        size: {
            xs: {
                item: string;
            };
            sm: {
                item: string;
            };
            md: {
                item: string;
            };
            lg: {
                item: string;
            };
        };
        invalid: {
            true: {
                label: string;
                trigger: string;
            };
        };
    }, {
        trigger: string;
        valueText: string;
        clearTrigger: string;
        indicator: string;
        content: string[];
        itemGroup: string;
        itemGroupLabel: string;
        item: string[];
        itemText: string;
        itemIndicator: string;
    }, "", unknown, unknown, undefined>>> & import("react-tvcx").UnstyledProps & React.RefAttributes<HTMLButtonElement>>;
    ValueText: React.ForwardRefExoticComponent<Omit<BaseSelect.ValueTextProps & React.RefAttributes<HTMLSpanElement>, "ref"> & import("tailwind-variants").VariantProps<import("tailwind-variants").TVReturnType<{
        size: {
            xs: {
                item: string;
            };
            sm: {
                item: string;
            };
            md: {
                item: string;
            };
            lg: {
                item: string;
            };
        };
        invalid: {
            true: {
                label: string;
                trigger: string;
            };
        };
    }, {
        trigger: string;
        valueText: string;
        clearTrigger: string;
        indicator: string;
        content: string[];
        itemGroup: string;
        itemGroupLabel: string;
        item: string[];
        itemText: string;
        itemIndicator: string;
    }, "", {
        size: {
            xs: {
                item: string;
            };
            sm: {
                item: string;
            };
            md: {
                item: string;
            };
            lg: {
                item: string;
            };
        };
        invalid: {
            true: {
                label: string;
                trigger: string;
            };
        };
    }, {
        trigger: string;
        valueText: string;
        clearTrigger: string;
        indicator: string;
        content: string[];
        itemGroup: string;
        itemGroupLabel: string;
        item: string[];
        itemText: string;
        itemIndicator: string;
    }, import("tailwind-variants").TVReturnType<{
        size: {
            xs: {
                item: string;
            };
            sm: {
                item: string;
            };
            md: {
                item: string;
            };
            lg: {
                item: string;
            };
        };
        invalid: {
            true: {
                label: string;
                trigger: string;
            };
        };
    }, {
        trigger: string;
        valueText: string;
        clearTrigger: string;
        indicator: string;
        content: string[];
        itemGroup: string;
        itemGroupLabel: string;
        item: string[];
        itemText: string;
        itemIndicator: string;
    }, "", unknown, unknown, undefined>>> & import("react-tvcx").UnstyledProps & React.RefAttributes<HTMLSpanElement>>;
    ClearTrigger: React.ForwardRefExoticComponent<Omit<BaseSelect.ClearTriggerProps & React.RefAttributes<HTMLButtonElement>, "ref"> & import("tailwind-variants").VariantProps<import("tailwind-variants").TVReturnType<{
        size: {
            xs: {
                item: string;
            };
            sm: {
                item: string;
            };
            md: {
                item: string;
            };
            lg: {
                item: string;
            };
        };
        invalid: {
            true: {
                label: string;
                trigger: string;
            };
        };
    }, {
        trigger: string;
        valueText: string;
        clearTrigger: string;
        indicator: string;
        content: string[];
        itemGroup: string;
        itemGroupLabel: string;
        item: string[];
        itemText: string;
        itemIndicator: string;
    }, "", {
        size: {
            xs: {
                item: string;
            };
            sm: {
                item: string;
            };
            md: {
                item: string;
            };
            lg: {
                item: string;
            };
        };
        invalid: {
            true: {
                label: string;
                trigger: string;
            };
        };
    }, {
        trigger: string;
        valueText: string;
        clearTrigger: string;
        indicator: string;
        content: string[];
        itemGroup: string;
        itemGroupLabel: string;
        item: string[];
        itemText: string;
        itemIndicator: string;
    }, import("tailwind-variants").TVReturnType<{
        size: {
            xs: {
                item: string;
            };
            sm: {
                item: string;
            };
            md: {
                item: string;
            };
            lg: {
                item: string;
            };
        };
        invalid: {
            true: {
                label: string;
                trigger: string;
            };
        };
    }, {
        trigger: string;
        valueText: string;
        clearTrigger: string;
        indicator: string;
        content: string[];
        itemGroup: string;
        itemGroupLabel: string;
        item: string[];
        itemText: string;
        itemIndicator: string;
    }, "", unknown, unknown, undefined>>> & import("react-tvcx").UnstyledProps & React.RefAttributes<HTMLButtonElement>>;
    Indicator: React.ForwardRefExoticComponent<Omit<BaseSelect.IndicatorProps & React.RefAttributes<HTMLDivElement>, "ref"> & import("tailwind-variants").VariantProps<import("tailwind-variants").TVReturnType<{
        size: {
            xs: {
                item: string;
            };
            sm: {
                item: string;
            };
            md: {
                item: string;
            };
            lg: {
                item: string;
            };
        };
        invalid: {
            true: {
                label: string;
                trigger: string;
            };
        };
    }, {
        trigger: string;
        valueText: string;
        clearTrigger: string;
        indicator: string;
        content: string[];
        itemGroup: string;
        itemGroupLabel: string;
        item: string[];
        itemText: string;
        itemIndicator: string;
    }, "", {
        size: {
            xs: {
                item: string;
            };
            sm: {
                item: string;
            };
            md: {
                item: string;
            };
            lg: {
                item: string;
            };
        };
        invalid: {
            true: {
                label: string;
                trigger: string;
            };
        };
    }, {
        trigger: string;
        valueText: string;
        clearTrigger: string;
        indicator: string;
        content: string[];
        itemGroup: string;
        itemGroupLabel: string;
        item: string[];
        itemText: string;
        itemIndicator: string;
    }, import("tailwind-variants").TVReturnType<{
        size: {
            xs: {
                item: string;
            };
            sm: {
                item: string;
            };
            md: {
                item: string;
            };
            lg: {
                item: string;
            };
        };
        invalid: {
            true: {
                label: string;
                trigger: string;
            };
        };
    }, {
        trigger: string;
        valueText: string;
        clearTrigger: string;
        indicator: string;
        content: string[];
        itemGroup: string;
        itemGroupLabel: string;
        item: string[];
        itemText: string;
        itemIndicator: string;
    }, "", unknown, unknown, undefined>>> & import("react-tvcx").UnstyledProps & React.RefAttributes<HTMLDivElement>>;
    HiddenSelect: React.ForwardRefExoticComponent<Omit<BaseSelect.HiddenSelectProps & React.RefAttributes<HTMLSelectElement>, "ref"> & import("tailwind-variants").VariantProps<import("tailwind-variants").TVReturnType<{
        size: {
            xs: {
                item: string;
            };
            sm: {
                item: string;
            };
            md: {
                item: string;
            };
            lg: {
                item: string;
            };
        };
        invalid: {
            true: {
                label: string;
                trigger: string;
            };
        };
    }, {
        trigger: string;
        valueText: string;
        clearTrigger: string;
        indicator: string;
        content: string[];
        itemGroup: string;
        itemGroupLabel: string;
        item: string[];
        itemText: string;
        itemIndicator: string;
    }, "", {
        size: {
            xs: {
                item: string;
            };
            sm: {
                item: string;
            };
            md: {
                item: string;
            };
            lg: {
                item: string;
            };
        };
        invalid: {
            true: {
                label: string;
                trigger: string;
            };
        };
    }, {
        trigger: string;
        valueText: string;
        clearTrigger: string;
        indicator: string;
        content: string[];
        itemGroup: string;
        itemGroupLabel: string;
        item: string[];
        itemText: string;
        itemIndicator: string;
    }, import("tailwind-variants").TVReturnType<{
        size: {
            xs: {
                item: string;
            };
            sm: {
                item: string;
            };
            md: {
                item: string;
            };
            lg: {
                item: string;
            };
        };
        invalid: {
            true: {
                label: string;
                trigger: string;
            };
        };
    }, {
        trigger: string;
        valueText: string;
        clearTrigger: string;
        indicator: string;
        content: string[];
        itemGroup: string;
        itemGroupLabel: string;
        item: string[];
        itemText: string;
        itemIndicator: string;
    }, "", unknown, unknown, undefined>>> & import("react-tvcx").UnstyledProps & React.RefAttributes<HTMLSelectElement>>;
    Positioner: React.ForwardRefExoticComponent<Omit<BaseSelect.PositionerProps & React.RefAttributes<HTMLDivElement>, "ref"> & import("tailwind-variants").VariantProps<import("tailwind-variants").TVReturnType<{
        size: {
            xs: {
                item: string;
            };
            sm: {
                item: string;
            };
            md: {
                item: string;
            };
            lg: {
                item: string;
            };
        };
        invalid: {
            true: {
                label: string;
                trigger: string;
            };
        };
    }, {
        trigger: string;
        valueText: string;
        clearTrigger: string;
        indicator: string;
        content: string[];
        itemGroup: string;
        itemGroupLabel: string;
        item: string[];
        itemText: string;
        itemIndicator: string;
    }, "", {
        size: {
            xs: {
                item: string;
            };
            sm: {
                item: string;
            };
            md: {
                item: string;
            };
            lg: {
                item: string;
            };
        };
        invalid: {
            true: {
                label: string;
                trigger: string;
            };
        };
    }, {
        trigger: string;
        valueText: string;
        clearTrigger: string;
        indicator: string;
        content: string[];
        itemGroup: string;
        itemGroupLabel: string;
        item: string[];
        itemText: string;
        itemIndicator: string;
    }, import("tailwind-variants").TVReturnType<{
        size: {
            xs: {
                item: string;
            };
            sm: {
                item: string;
            };
            md: {
                item: string;
            };
            lg: {
                item: string;
            };
        };
        invalid: {
            true: {
                label: string;
                trigger: string;
            };
        };
    }, {
        trigger: string;
        valueText: string;
        clearTrigger: string;
        indicator: string;
        content: string[];
        itemGroup: string;
        itemGroupLabel: string;
        item: string[];
        itemText: string;
        itemIndicator: string;
    }, "", unknown, unknown, undefined>>> & import("react-tvcx").UnstyledProps & React.RefAttributes<HTMLDivElement>>;
    List: React.ForwardRefExoticComponent<Omit<BaseSelect.ListProps & React.RefAttributes<HTMLDivElement>, "ref"> & import("tailwind-variants").VariantProps<import("tailwind-variants").TVReturnType<{
        size: {
            xs: {
                item: string;
            };
            sm: {
                item: string;
            };
            md: {
                item: string;
            };
            lg: {
                item: string;
            };
        };
        invalid: {
            true: {
                label: string;
                trigger: string;
            };
        };
    }, {
        trigger: string;
        valueText: string;
        clearTrigger: string;
        indicator: string;
        content: string[];
        itemGroup: string;
        itemGroupLabel: string;
        item: string[];
        itemText: string;
        itemIndicator: string;
    }, "", {
        size: {
            xs: {
                item: string;
            };
            sm: {
                item: string;
            };
            md: {
                item: string;
            };
            lg: {
                item: string;
            };
        };
        invalid: {
            true: {
                label: string;
                trigger: string;
            };
        };
    }, {
        trigger: string;
        valueText: string;
        clearTrigger: string;
        indicator: string;
        content: string[];
        itemGroup: string;
        itemGroupLabel: string;
        item: string[];
        itemText: string;
        itemIndicator: string;
    }, import("tailwind-variants").TVReturnType<{
        size: {
            xs: {
                item: string;
            };
            sm: {
                item: string;
            };
            md: {
                item: string;
            };
            lg: {
                item: string;
            };
        };
        invalid: {
            true: {
                label: string;
                trigger: string;
            };
        };
    }, {
        trigger: string;
        valueText: string;
        clearTrigger: string;
        indicator: string;
        content: string[];
        itemGroup: string;
        itemGroupLabel: string;
        item: string[];
        itemText: string;
        itemIndicator: string;
    }, "", unknown, unknown, undefined>>> & import("react-tvcx").UnstyledProps & React.RefAttributes<HTMLDivElement>>;
    Content: React.ForwardRefExoticComponent<Omit<Omit<BaseSelect.ContentProps & React.RefAttributes<HTMLDivElement>, "ref"> & import("tailwind-variants").VariantProps<import("tailwind-variants").TVReturnType<{
        size: {
            xs: {
                item: string;
            };
            sm: {
                item: string;
            };
            md: {
                item: string;
            };
            lg: {
                item: string;
            };
        };
        invalid: {
            true: {
                label: string;
                trigger: string;
            };
        };
    }, {
        trigger: string;
        valueText: string;
        clearTrigger: string;
        indicator: string;
        content: string[];
        itemGroup: string;
        itemGroupLabel: string;
        item: string[];
        itemText: string;
        itemIndicator: string;
    }, "", {
        size: {
            xs: {
                item: string;
            };
            sm: {
                item: string;
            };
            md: {
                item: string;
            };
            lg: {
                item: string;
            };
        };
        invalid: {
            true: {
                label: string;
                trigger: string;
            };
        };
    }, {
        trigger: string;
        valueText: string;
        clearTrigger: string;
        indicator: string;
        content: string[];
        itemGroup: string;
        itemGroupLabel: string;
        item: string[];
        itemText: string;
        itemIndicator: string;
    }, import("tailwind-variants").TVReturnType<{
        size: {
            xs: {
                item: string;
            };
            sm: {
                item: string;
            };
            md: {
                item: string;
            };
            lg: {
                item: string;
            };
        };
        invalid: {
            true: {
                label: string;
                trigger: string;
            };
        };
    }, {
        trigger: string;
        valueText: string;
        clearTrigger: string;
        indicator: string;
        content: string[];
        itemGroup: string;
        itemGroupLabel: string;
        item: string[];
        itemText: string;
        itemIndicator: string;
    }, "", unknown, unknown, undefined>>> & import("react-tvcx").UnstyledProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
    ItemGroup: React.ForwardRefExoticComponent<Omit<BaseSelect.ItemGroupProps & React.RefAttributes<HTMLDivElement>, "ref"> & import("tailwind-variants").VariantProps<import("tailwind-variants").TVReturnType<{
        size: {
            xs: {
                item: string;
            };
            sm: {
                item: string;
            };
            md: {
                item: string;
            };
            lg: {
                item: string;
            };
        };
        invalid: {
            true: {
                label: string;
                trigger: string;
            };
        };
    }, {
        trigger: string;
        valueText: string;
        clearTrigger: string;
        indicator: string;
        content: string[];
        itemGroup: string;
        itemGroupLabel: string;
        item: string[];
        itemText: string;
        itemIndicator: string;
    }, "", {
        size: {
            xs: {
                item: string;
            };
            sm: {
                item: string;
            };
            md: {
                item: string;
            };
            lg: {
                item: string;
            };
        };
        invalid: {
            true: {
                label: string;
                trigger: string;
            };
        };
    }, {
        trigger: string;
        valueText: string;
        clearTrigger: string;
        indicator: string;
        content: string[];
        itemGroup: string;
        itemGroupLabel: string;
        item: string[];
        itemText: string;
        itemIndicator: string;
    }, import("tailwind-variants").TVReturnType<{
        size: {
            xs: {
                item: string;
            };
            sm: {
                item: string;
            };
            md: {
                item: string;
            };
            lg: {
                item: string;
            };
        };
        invalid: {
            true: {
                label: string;
                trigger: string;
            };
        };
    }, {
        trigger: string;
        valueText: string;
        clearTrigger: string;
        indicator: string;
        content: string[];
        itemGroup: string;
        itemGroupLabel: string;
        item: string[];
        itemText: string;
        itemIndicator: string;
    }, "", unknown, unknown, undefined>>> & import("react-tvcx").UnstyledProps & React.RefAttributes<HTMLDivElement>>;
    ItemGroupLabel: React.ForwardRefExoticComponent<Omit<BaseSelect.ItemGroupLabelProps & React.RefAttributes<HTMLDivElement>, "ref"> & import("tailwind-variants").VariantProps<import("tailwind-variants").TVReturnType<{
        size: {
            xs: {
                item: string;
            };
            sm: {
                item: string;
            };
            md: {
                item: string;
            };
            lg: {
                item: string;
            };
        };
        invalid: {
            true: {
                label: string;
                trigger: string;
            };
        };
    }, {
        trigger: string;
        valueText: string;
        clearTrigger: string;
        indicator: string;
        content: string[];
        itemGroup: string;
        itemGroupLabel: string;
        item: string[];
        itemText: string;
        itemIndicator: string;
    }, "", {
        size: {
            xs: {
                item: string;
            };
            sm: {
                item: string;
            };
            md: {
                item: string;
            };
            lg: {
                item: string;
            };
        };
        invalid: {
            true: {
                label: string;
                trigger: string;
            };
        };
    }, {
        trigger: string;
        valueText: string;
        clearTrigger: string;
        indicator: string;
        content: string[];
        itemGroup: string;
        itemGroupLabel: string;
        item: string[];
        itemText: string;
        itemIndicator: string;
    }, import("tailwind-variants").TVReturnType<{
        size: {
            xs: {
                item: string;
            };
            sm: {
                item: string;
            };
            md: {
                item: string;
            };
            lg: {
                item: string;
            };
        };
        invalid: {
            true: {
                label: string;
                trigger: string;
            };
        };
    }, {
        trigger: string;
        valueText: string;
        clearTrigger: string;
        indicator: string;
        content: string[];
        itemGroup: string;
        itemGroupLabel: string;
        item: string[];
        itemText: string;
        itemIndicator: string;
    }, "", unknown, unknown, undefined>>> & import("react-tvcx").UnstyledProps & React.RefAttributes<HTMLDivElement>>;
    Item: React.ForwardRefExoticComponent<Omit<BaseSelect.ItemProps & React.RefAttributes<HTMLDivElement>, "ref"> & import("tailwind-variants").VariantProps<import("tailwind-variants").TVReturnType<{
        size: {
            xs: {
                item: string;
            };
            sm: {
                item: string;
            };
            md: {
                item: string;
            };
            lg: {
                item: string;
            };
        };
        invalid: {
            true: {
                label: string;
                trigger: string;
            };
        };
    }, {
        trigger: string;
        valueText: string;
        clearTrigger: string;
        indicator: string;
        content: string[];
        itemGroup: string;
        itemGroupLabel: string;
        item: string[];
        itemText: string;
        itemIndicator: string;
    }, "", {
        size: {
            xs: {
                item: string;
            };
            sm: {
                item: string;
            };
            md: {
                item: string;
            };
            lg: {
                item: string;
            };
        };
        invalid: {
            true: {
                label: string;
                trigger: string;
            };
        };
    }, {
        trigger: string;
        valueText: string;
        clearTrigger: string;
        indicator: string;
        content: string[];
        itemGroup: string;
        itemGroupLabel: string;
        item: string[];
        itemText: string;
        itemIndicator: string;
    }, import("tailwind-variants").TVReturnType<{
        size: {
            xs: {
                item: string;
            };
            sm: {
                item: string;
            };
            md: {
                item: string;
            };
            lg: {
                item: string;
            };
        };
        invalid: {
            true: {
                label: string;
                trigger: string;
            };
        };
    }, {
        trigger: string;
        valueText: string;
        clearTrigger: string;
        indicator: string;
        content: string[];
        itemGroup: string;
        itemGroupLabel: string;
        item: string[];
        itemText: string;
        itemIndicator: string;
    }, "", unknown, unknown, undefined>>> & import("react-tvcx").UnstyledProps & React.RefAttributes<HTMLDivElement>>;
    ItemText: React.ForwardRefExoticComponent<Omit<BaseSelect.ItemTextProps & React.RefAttributes<HTMLDivElement>, "ref"> & import("tailwind-variants").VariantProps<import("tailwind-variants").TVReturnType<{
        size: {
            xs: {
                item: string;
            };
            sm: {
                item: string;
            };
            md: {
                item: string;
            };
            lg: {
                item: string;
            };
        };
        invalid: {
            true: {
                label: string;
                trigger: string;
            };
        };
    }, {
        trigger: string;
        valueText: string;
        clearTrigger: string;
        indicator: string;
        content: string[];
        itemGroup: string;
        itemGroupLabel: string;
        item: string[];
        itemText: string;
        itemIndicator: string;
    }, "", {
        size: {
            xs: {
                item: string;
            };
            sm: {
                item: string;
            };
            md: {
                item: string;
            };
            lg: {
                item: string;
            };
        };
        invalid: {
            true: {
                label: string;
                trigger: string;
            };
        };
    }, {
        trigger: string;
        valueText: string;
        clearTrigger: string;
        indicator: string;
        content: string[];
        itemGroup: string;
        itemGroupLabel: string;
        item: string[];
        itemText: string;
        itemIndicator: string;
    }, import("tailwind-variants").TVReturnType<{
        size: {
            xs: {
                item: string;
            };
            sm: {
                item: string;
            };
            md: {
                item: string;
            };
            lg: {
                item: string;
            };
        };
        invalid: {
            true: {
                label: string;
                trigger: string;
            };
        };
    }, {
        trigger: string;
        valueText: string;
        clearTrigger: string;
        indicator: string;
        content: string[];
        itemGroup: string;
        itemGroupLabel: string;
        item: string[];
        itemText: string;
        itemIndicator: string;
    }, "", unknown, unknown, undefined>>> & import("react-tvcx").UnstyledProps & React.RefAttributes<HTMLDivElement>>;
    ItemIndicator: React.ForwardRefExoticComponent<Omit<BaseSelect.ItemIndicatorProps & React.RefAttributes<HTMLDivElement>, "ref"> & import("tailwind-variants").VariantProps<import("tailwind-variants").TVReturnType<{
        size: {
            xs: {
                item: string;
            };
            sm: {
                item: string;
            };
            md: {
                item: string;
            };
            lg: {
                item: string;
            };
        };
        invalid: {
            true: {
                label: string;
                trigger: string;
            };
        };
    }, {
        trigger: string;
        valueText: string;
        clearTrigger: string;
        indicator: string;
        content: string[];
        itemGroup: string;
        itemGroupLabel: string;
        item: string[];
        itemText: string;
        itemIndicator: string;
    }, "", {
        size: {
            xs: {
                item: string;
            };
            sm: {
                item: string;
            };
            md: {
                item: string;
            };
            lg: {
                item: string;
            };
        };
        invalid: {
            true: {
                label: string;
                trigger: string;
            };
        };
    }, {
        trigger: string;
        valueText: string;
        clearTrigger: string;
        indicator: string;
        content: string[];
        itemGroup: string;
        itemGroupLabel: string;
        item: string[];
        itemText: string;
        itemIndicator: string;
    }, import("tailwind-variants").TVReturnType<{
        size: {
            xs: {
                item: string;
            };
            sm: {
                item: string;
            };
            md: {
                item: string;
            };
            lg: {
                item: string;
            };
        };
        invalid: {
            true: {
                label: string;
                trigger: string;
            };
        };
    }, {
        trigger: string;
        valueText: string;
        clearTrigger: string;
        indicator: string;
        content: string[];
        itemGroup: string;
        itemGroupLabel: string;
        item: string[];
        itemText: string;
        itemIndicator: string;
    }, "", unknown, unknown, undefined>>> & import("react-tvcx").UnstyledProps & React.RefAttributes<HTMLDivElement>>;
}>;
//# sourceMappingURL=select.d.ts.map