import { Combobox as BaseCombobox, CollectionItem, ComboboxRootProps } from "@ark-ui/react";
import React from "react";
import { ComponentMetadata, ComposedTVProps } from "react-tvcx";
export declare const combobox: import("tailwind-variants").TVReturnType<{
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
}, {
    trigger: string;
    input: string;
    clearTrigger: string;
    content: string[];
    itemGroup: string;
    ItemGroupLabel: string;
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
}, {
    trigger: string;
    input: string;
    clearTrigger: string;
    content: string[];
    itemGroup: string;
    ItemGroupLabel: string;
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
}, {
    trigger: string;
    input: string;
    clearTrigger: string;
    content: string[];
    itemGroup: string;
    ItemGroupLabel: string;
    item: string[];
    itemText: string;
    itemIndicator: string;
}, "", unknown, unknown, undefined>>;
export interface ComboboxProps<T extends CollectionItem> extends ComboboxRootProps<T>, ComposedTVProps<typeof combobox> {
}
export interface Combobox extends ComponentMetadata {
    <T extends CollectionItem>(props: ComboboxProps<T>): React.ReactElement | null;
}
export declare const Combobox: Combobox & {
    Root: Combobox;
    RootProvider: React.ForwardRefExoticComponent<Omit<BaseCombobox.RootProviderProps<unknown> & React.RefAttributes<HTMLDivElement>, "ref"> & import("tailwind-variants").VariantProps<import("tailwind-variants").TVReturnType<{
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
    }, {
        trigger: string;
        input: string;
        clearTrigger: string;
        content: string[];
        itemGroup: string;
        ItemGroupLabel: string;
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
    }, {
        trigger: string;
        input: string;
        clearTrigger: string;
        content: string[];
        itemGroup: string;
        ItemGroupLabel: string;
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
    }, {
        trigger: string;
        input: string;
        clearTrigger: string;
        content: string[];
        itemGroup: string;
        ItemGroupLabel: string;
        item: string[];
        itemText: string;
        itemIndicator: string;
    }, "", unknown, unknown, undefined>>> & {
        classNames?: Partial<Record<"item" | "itemIndicator" | "base" | "input" | "content" | "trigger" | "clearTrigger" | "itemGroup" | "ItemGroupLabel" | "itemText", any>> | undefined;
    } & import("react-tvcx").UnstyledProps & React.RefAttributes<HTMLDivElement>>;
    Context: React.ForwardRefExoticComponent<BaseCombobox.ContextProps<unknown> & import("tailwind-variants").VariantProps<import("tailwind-variants").TVReturnType<{
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
    }, {
        trigger: string;
        input: string;
        clearTrigger: string;
        content: string[];
        itemGroup: string;
        ItemGroupLabel: string;
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
    }, {
        trigger: string;
        input: string;
        clearTrigger: string;
        content: string[];
        itemGroup: string;
        ItemGroupLabel: string;
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
    }, {
        trigger: string;
        input: string;
        clearTrigger: string;
        content: string[];
        itemGroup: string;
        ItemGroupLabel: string;
        item: string[];
        itemText: string;
        itemIndicator: string;
    }, "", unknown, unknown, undefined>>> & import("react-tvcx").UnstyledProps & React.RefAttributes<never>>;
    ItemContext: React.ForwardRefExoticComponent<BaseCombobox.ItemContextProps & import("tailwind-variants").VariantProps<import("tailwind-variants").TVReturnType<{
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
    }, {
        trigger: string;
        input: string;
        clearTrigger: string;
        content: string[];
        itemGroup: string;
        ItemGroupLabel: string;
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
    }, {
        trigger: string;
        input: string;
        clearTrigger: string;
        content: string[];
        itemGroup: string;
        ItemGroupLabel: string;
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
    }, {
        trigger: string;
        input: string;
        clearTrigger: string;
        content: string[];
        itemGroup: string;
        ItemGroupLabel: string;
        item: string[];
        itemText: string;
        itemIndicator: string;
    }, "", unknown, unknown, undefined>>> & import("react-tvcx").UnstyledProps & React.RefAttributes<never>>;
    Label: React.ForwardRefExoticComponent<Omit<BaseCombobox.LabelProps & React.RefAttributes<HTMLLabelElement>, "ref"> & import("tailwind-variants").VariantProps<import("tailwind-variants").TVReturnType<{
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
    }, {
        trigger: string;
        input: string;
        clearTrigger: string;
        content: string[];
        itemGroup: string;
        ItemGroupLabel: string;
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
    }, {
        trigger: string;
        input: string;
        clearTrigger: string;
        content: string[];
        itemGroup: string;
        ItemGroupLabel: string;
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
    }, {
        trigger: string;
        input: string;
        clearTrigger: string;
        content: string[];
        itemGroup: string;
        ItemGroupLabel: string;
        item: string[];
        itemText: string;
        itemIndicator: string;
    }, "", unknown, unknown, undefined>>> & import("react-tvcx").UnstyledProps & React.RefAttributes<HTMLLabelElement>>;
    Control: React.ForwardRefExoticComponent<Omit<BaseCombobox.ControlProps & React.RefAttributes<HTMLDivElement>, "ref"> & import("tailwind-variants").VariantProps<import("tailwind-variants").TVReturnType<{
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
    }, {
        trigger: string;
        input: string;
        clearTrigger: string;
        content: string[];
        itemGroup: string;
        ItemGroupLabel: string;
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
    }, {
        trigger: string;
        input: string;
        clearTrigger: string;
        content: string[];
        itemGroup: string;
        ItemGroupLabel: string;
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
    }, {
        trigger: string;
        input: string;
        clearTrigger: string;
        content: string[];
        itemGroup: string;
        ItemGroupLabel: string;
        item: string[];
        itemText: string;
        itemIndicator: string;
    }, "", unknown, unknown, undefined>>> & import("react-tvcx").UnstyledProps & React.RefAttributes<HTMLDivElement>>;
    Trigger: React.ForwardRefExoticComponent<Omit<BaseCombobox.TriggerProps & React.RefAttributes<HTMLButtonElement>, "ref"> & import("tailwind-variants").VariantProps<import("tailwind-variants").TVReturnType<{
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
    }, {
        trigger: string;
        input: string;
        clearTrigger: string;
        content: string[];
        itemGroup: string;
        ItemGroupLabel: string;
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
    }, {
        trigger: string;
        input: string;
        clearTrigger: string;
        content: string[];
        itemGroup: string;
        ItemGroupLabel: string;
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
    }, {
        trigger: string;
        input: string;
        clearTrigger: string;
        content: string[];
        itemGroup: string;
        ItemGroupLabel: string;
        item: string[];
        itemText: string;
        itemIndicator: string;
    }, "", unknown, unknown, undefined>>> & import("react-tvcx").UnstyledProps & React.RefAttributes<HTMLButtonElement>>;
    Input: React.ForwardRefExoticComponent<Omit<BaseCombobox.InputProps & React.RefAttributes<HTMLInputElement>, "ref"> & import("tailwind-variants").VariantProps<import("tailwind-variants").TVReturnType<{
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
    }, {
        trigger: string;
        input: string;
        clearTrigger: string;
        content: string[];
        itemGroup: string;
        ItemGroupLabel: string;
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
    }, {
        trigger: string;
        input: string;
        clearTrigger: string;
        content: string[];
        itemGroup: string;
        ItemGroupLabel: string;
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
    }, {
        trigger: string;
        input: string;
        clearTrigger: string;
        content: string[];
        itemGroup: string;
        ItemGroupLabel: string;
        item: string[];
        itemText: string;
        itemIndicator: string;
    }, "", unknown, unknown, undefined>>> & import("react-tvcx").UnstyledProps & React.RefAttributes<HTMLInputElement>>;
    ClearTrigger: React.ForwardRefExoticComponent<Omit<BaseCombobox.ClearTriggerProps & React.RefAttributes<HTMLButtonElement>, "ref"> & import("tailwind-variants").VariantProps<import("tailwind-variants").TVReturnType<{
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
    }, {
        trigger: string;
        input: string;
        clearTrigger: string;
        content: string[];
        itemGroup: string;
        ItemGroupLabel: string;
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
    }, {
        trigger: string;
        input: string;
        clearTrigger: string;
        content: string[];
        itemGroup: string;
        ItemGroupLabel: string;
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
    }, {
        trigger: string;
        input: string;
        clearTrigger: string;
        content: string[];
        itemGroup: string;
        ItemGroupLabel: string;
        item: string[];
        itemText: string;
        itemIndicator: string;
    }, "", unknown, unknown, undefined>>> & import("react-tvcx").UnstyledProps & React.RefAttributes<HTMLButtonElement>>;
    Positioner: React.ForwardRefExoticComponent<Omit<BaseCombobox.PositionerProps & React.RefAttributes<HTMLDivElement>, "ref"> & import("tailwind-variants").VariantProps<import("tailwind-variants").TVReturnType<{
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
    }, {
        trigger: string;
        input: string;
        clearTrigger: string;
        content: string[];
        itemGroup: string;
        ItemGroupLabel: string;
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
    }, {
        trigger: string;
        input: string;
        clearTrigger: string;
        content: string[];
        itemGroup: string;
        ItemGroupLabel: string;
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
    }, {
        trigger: string;
        input: string;
        clearTrigger: string;
        content: string[];
        itemGroup: string;
        ItemGroupLabel: string;
        item: string[];
        itemText: string;
        itemIndicator: string;
    }, "", unknown, unknown, undefined>>> & import("react-tvcx").UnstyledProps & React.RefAttributes<HTMLDivElement>>;
    List: React.ForwardRefExoticComponent<Omit<BaseCombobox.ListProps & React.RefAttributes<HTMLDivElement>, "ref"> & import("tailwind-variants").VariantProps<import("tailwind-variants").TVReturnType<{
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
    }, {
        trigger: string;
        input: string;
        clearTrigger: string;
        content: string[];
        itemGroup: string;
        ItemGroupLabel: string;
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
    }, {
        trigger: string;
        input: string;
        clearTrigger: string;
        content: string[];
        itemGroup: string;
        ItemGroupLabel: string;
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
    }, {
        trigger: string;
        input: string;
        clearTrigger: string;
        content: string[];
        itemGroup: string;
        ItemGroupLabel: string;
        item: string[];
        itemText: string;
        itemIndicator: string;
    }, "", unknown, unknown, undefined>>> & import("react-tvcx").UnstyledProps & React.RefAttributes<HTMLDivElement>>;
    Content: React.ForwardRefExoticComponent<Omit<Omit<BaseCombobox.ContentProps & React.RefAttributes<HTMLDivElement>, "ref"> & import("tailwind-variants").VariantProps<import("tailwind-variants").TVReturnType<{
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
    }, {
        trigger: string;
        input: string;
        clearTrigger: string;
        content: string[];
        itemGroup: string;
        ItemGroupLabel: string;
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
    }, {
        trigger: string;
        input: string;
        clearTrigger: string;
        content: string[];
        itemGroup: string;
        ItemGroupLabel: string;
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
    }, {
        trigger: string;
        input: string;
        clearTrigger: string;
        content: string[];
        itemGroup: string;
        ItemGroupLabel: string;
        item: string[];
        itemText: string;
        itemIndicator: string;
    }, "", unknown, unknown, undefined>>> & import("react-tvcx").UnstyledProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
    ItemGroup: React.ForwardRefExoticComponent<Omit<BaseCombobox.ItemGroupProps & React.RefAttributes<HTMLDivElement>, "ref"> & import("tailwind-variants").VariantProps<import("tailwind-variants").TVReturnType<{
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
    }, {
        trigger: string;
        input: string;
        clearTrigger: string;
        content: string[];
        itemGroup: string;
        ItemGroupLabel: string;
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
    }, {
        trigger: string;
        input: string;
        clearTrigger: string;
        content: string[];
        itemGroup: string;
        ItemGroupLabel: string;
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
    }, {
        trigger: string;
        input: string;
        clearTrigger: string;
        content: string[];
        itemGroup: string;
        ItemGroupLabel: string;
        item: string[];
        itemText: string;
        itemIndicator: string;
    }, "", unknown, unknown, undefined>>> & import("react-tvcx").UnstyledProps & React.RefAttributes<HTMLDivElement>>;
    ItemGroupLabel: React.ForwardRefExoticComponent<Omit<BaseCombobox.ItemGroupLabelProps & React.RefAttributes<HTMLDivElement>, "ref"> & import("tailwind-variants").VariantProps<import("tailwind-variants").TVReturnType<{
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
    }, {
        trigger: string;
        input: string;
        clearTrigger: string;
        content: string[];
        itemGroup: string;
        ItemGroupLabel: string;
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
    }, {
        trigger: string;
        input: string;
        clearTrigger: string;
        content: string[];
        itemGroup: string;
        ItemGroupLabel: string;
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
    }, {
        trigger: string;
        input: string;
        clearTrigger: string;
        content: string[];
        itemGroup: string;
        ItemGroupLabel: string;
        item: string[];
        itemText: string;
        itemIndicator: string;
    }, "", unknown, unknown, undefined>>> & import("react-tvcx").UnstyledProps & React.RefAttributes<HTMLDivElement>>;
    Item: React.ForwardRefExoticComponent<Omit<BaseCombobox.ItemProps & React.RefAttributes<HTMLDivElement>, "ref"> & import("tailwind-variants").VariantProps<import("tailwind-variants").TVReturnType<{
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
    }, {
        trigger: string;
        input: string;
        clearTrigger: string;
        content: string[];
        itemGroup: string;
        ItemGroupLabel: string;
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
    }, {
        trigger: string;
        input: string;
        clearTrigger: string;
        content: string[];
        itemGroup: string;
        ItemGroupLabel: string;
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
    }, {
        trigger: string;
        input: string;
        clearTrigger: string;
        content: string[];
        itemGroup: string;
        ItemGroupLabel: string;
        item: string[];
        itemText: string;
        itemIndicator: string;
    }, "", unknown, unknown, undefined>>> & import("react-tvcx").UnstyledProps & React.RefAttributes<HTMLDivElement>>;
    ItemText: React.ForwardRefExoticComponent<Omit<BaseCombobox.ItemTextProps & React.RefAttributes<HTMLDivElement>, "ref"> & import("tailwind-variants").VariantProps<import("tailwind-variants").TVReturnType<{
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
    }, {
        trigger: string;
        input: string;
        clearTrigger: string;
        content: string[];
        itemGroup: string;
        ItemGroupLabel: string;
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
    }, {
        trigger: string;
        input: string;
        clearTrigger: string;
        content: string[];
        itemGroup: string;
        ItemGroupLabel: string;
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
    }, {
        trigger: string;
        input: string;
        clearTrigger: string;
        content: string[];
        itemGroup: string;
        ItemGroupLabel: string;
        item: string[];
        itemText: string;
        itemIndicator: string;
    }, "", unknown, unknown, undefined>>> & import("react-tvcx").UnstyledProps & React.RefAttributes<HTMLDivElement>>;
    ItemIndicator: React.ForwardRefExoticComponent<Omit<BaseCombobox.ItemIndicatorProps & React.RefAttributes<HTMLDivElement>, "ref"> & import("tailwind-variants").VariantProps<import("tailwind-variants").TVReturnType<{
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
    }, {
        trigger: string;
        input: string;
        clearTrigger: string;
        content: string[];
        itemGroup: string;
        ItemGroupLabel: string;
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
    }, {
        trigger: string;
        input: string;
        clearTrigger: string;
        content: string[];
        itemGroup: string;
        ItemGroupLabel: string;
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
    }, {
        trigger: string;
        input: string;
        clearTrigger: string;
        content: string[];
        itemGroup: string;
        ItemGroupLabel: string;
        item: string[];
        itemText: string;
        itemIndicator: string;
    }, "", unknown, unknown, undefined>>> & import("react-tvcx").UnstyledProps & React.RefAttributes<HTMLDivElement>>;
} & Readonly<{
    Root: Combobox;
    RootProvider: React.ForwardRefExoticComponent<Omit<BaseCombobox.RootProviderProps<unknown> & React.RefAttributes<HTMLDivElement>, "ref"> & import("tailwind-variants").VariantProps<import("tailwind-variants").TVReturnType<{
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
    }, {
        trigger: string;
        input: string;
        clearTrigger: string;
        content: string[];
        itemGroup: string;
        ItemGroupLabel: string;
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
    }, {
        trigger: string;
        input: string;
        clearTrigger: string;
        content: string[];
        itemGroup: string;
        ItemGroupLabel: string;
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
    }, {
        trigger: string;
        input: string;
        clearTrigger: string;
        content: string[];
        itemGroup: string;
        ItemGroupLabel: string;
        item: string[];
        itemText: string;
        itemIndicator: string;
    }, "", unknown, unknown, undefined>>> & {
        classNames?: Partial<Record<"item" | "itemIndicator" | "base" | "input" | "content" | "trigger" | "clearTrigger" | "itemGroup" | "ItemGroupLabel" | "itemText", any>> | undefined;
    } & import("react-tvcx").UnstyledProps & React.RefAttributes<HTMLDivElement>>;
    Context: React.ForwardRefExoticComponent<BaseCombobox.ContextProps<unknown> & import("tailwind-variants").VariantProps<import("tailwind-variants").TVReturnType<{
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
    }, {
        trigger: string;
        input: string;
        clearTrigger: string;
        content: string[];
        itemGroup: string;
        ItemGroupLabel: string;
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
    }, {
        trigger: string;
        input: string;
        clearTrigger: string;
        content: string[];
        itemGroup: string;
        ItemGroupLabel: string;
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
    }, {
        trigger: string;
        input: string;
        clearTrigger: string;
        content: string[];
        itemGroup: string;
        ItemGroupLabel: string;
        item: string[];
        itemText: string;
        itemIndicator: string;
    }, "", unknown, unknown, undefined>>> & import("react-tvcx").UnstyledProps & React.RefAttributes<never>>;
    ItemContext: React.ForwardRefExoticComponent<BaseCombobox.ItemContextProps & import("tailwind-variants").VariantProps<import("tailwind-variants").TVReturnType<{
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
    }, {
        trigger: string;
        input: string;
        clearTrigger: string;
        content: string[];
        itemGroup: string;
        ItemGroupLabel: string;
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
    }, {
        trigger: string;
        input: string;
        clearTrigger: string;
        content: string[];
        itemGroup: string;
        ItemGroupLabel: string;
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
    }, {
        trigger: string;
        input: string;
        clearTrigger: string;
        content: string[];
        itemGroup: string;
        ItemGroupLabel: string;
        item: string[];
        itemText: string;
        itemIndicator: string;
    }, "", unknown, unknown, undefined>>> & import("react-tvcx").UnstyledProps & React.RefAttributes<never>>;
    Label: React.ForwardRefExoticComponent<Omit<BaseCombobox.LabelProps & React.RefAttributes<HTMLLabelElement>, "ref"> & import("tailwind-variants").VariantProps<import("tailwind-variants").TVReturnType<{
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
    }, {
        trigger: string;
        input: string;
        clearTrigger: string;
        content: string[];
        itemGroup: string;
        ItemGroupLabel: string;
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
    }, {
        trigger: string;
        input: string;
        clearTrigger: string;
        content: string[];
        itemGroup: string;
        ItemGroupLabel: string;
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
    }, {
        trigger: string;
        input: string;
        clearTrigger: string;
        content: string[];
        itemGroup: string;
        ItemGroupLabel: string;
        item: string[];
        itemText: string;
        itemIndicator: string;
    }, "", unknown, unknown, undefined>>> & import("react-tvcx").UnstyledProps & React.RefAttributes<HTMLLabelElement>>;
    Control: React.ForwardRefExoticComponent<Omit<BaseCombobox.ControlProps & React.RefAttributes<HTMLDivElement>, "ref"> & import("tailwind-variants").VariantProps<import("tailwind-variants").TVReturnType<{
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
    }, {
        trigger: string;
        input: string;
        clearTrigger: string;
        content: string[];
        itemGroup: string;
        ItemGroupLabel: string;
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
    }, {
        trigger: string;
        input: string;
        clearTrigger: string;
        content: string[];
        itemGroup: string;
        ItemGroupLabel: string;
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
    }, {
        trigger: string;
        input: string;
        clearTrigger: string;
        content: string[];
        itemGroup: string;
        ItemGroupLabel: string;
        item: string[];
        itemText: string;
        itemIndicator: string;
    }, "", unknown, unknown, undefined>>> & import("react-tvcx").UnstyledProps & React.RefAttributes<HTMLDivElement>>;
    Trigger: React.ForwardRefExoticComponent<Omit<BaseCombobox.TriggerProps & React.RefAttributes<HTMLButtonElement>, "ref"> & import("tailwind-variants").VariantProps<import("tailwind-variants").TVReturnType<{
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
    }, {
        trigger: string;
        input: string;
        clearTrigger: string;
        content: string[];
        itemGroup: string;
        ItemGroupLabel: string;
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
    }, {
        trigger: string;
        input: string;
        clearTrigger: string;
        content: string[];
        itemGroup: string;
        ItemGroupLabel: string;
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
    }, {
        trigger: string;
        input: string;
        clearTrigger: string;
        content: string[];
        itemGroup: string;
        ItemGroupLabel: string;
        item: string[];
        itemText: string;
        itemIndicator: string;
    }, "", unknown, unknown, undefined>>> & import("react-tvcx").UnstyledProps & React.RefAttributes<HTMLButtonElement>>;
    Input: React.ForwardRefExoticComponent<Omit<BaseCombobox.InputProps & React.RefAttributes<HTMLInputElement>, "ref"> & import("tailwind-variants").VariantProps<import("tailwind-variants").TVReturnType<{
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
    }, {
        trigger: string;
        input: string;
        clearTrigger: string;
        content: string[];
        itemGroup: string;
        ItemGroupLabel: string;
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
    }, {
        trigger: string;
        input: string;
        clearTrigger: string;
        content: string[];
        itemGroup: string;
        ItemGroupLabel: string;
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
    }, {
        trigger: string;
        input: string;
        clearTrigger: string;
        content: string[];
        itemGroup: string;
        ItemGroupLabel: string;
        item: string[];
        itemText: string;
        itemIndicator: string;
    }, "", unknown, unknown, undefined>>> & import("react-tvcx").UnstyledProps & React.RefAttributes<HTMLInputElement>>;
    ClearTrigger: React.ForwardRefExoticComponent<Omit<BaseCombobox.ClearTriggerProps & React.RefAttributes<HTMLButtonElement>, "ref"> & import("tailwind-variants").VariantProps<import("tailwind-variants").TVReturnType<{
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
    }, {
        trigger: string;
        input: string;
        clearTrigger: string;
        content: string[];
        itemGroup: string;
        ItemGroupLabel: string;
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
    }, {
        trigger: string;
        input: string;
        clearTrigger: string;
        content: string[];
        itemGroup: string;
        ItemGroupLabel: string;
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
    }, {
        trigger: string;
        input: string;
        clearTrigger: string;
        content: string[];
        itemGroup: string;
        ItemGroupLabel: string;
        item: string[];
        itemText: string;
        itemIndicator: string;
    }, "", unknown, unknown, undefined>>> & import("react-tvcx").UnstyledProps & React.RefAttributes<HTMLButtonElement>>;
    Positioner: React.ForwardRefExoticComponent<Omit<BaseCombobox.PositionerProps & React.RefAttributes<HTMLDivElement>, "ref"> & import("tailwind-variants").VariantProps<import("tailwind-variants").TVReturnType<{
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
    }, {
        trigger: string;
        input: string;
        clearTrigger: string;
        content: string[];
        itemGroup: string;
        ItemGroupLabel: string;
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
    }, {
        trigger: string;
        input: string;
        clearTrigger: string;
        content: string[];
        itemGroup: string;
        ItemGroupLabel: string;
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
    }, {
        trigger: string;
        input: string;
        clearTrigger: string;
        content: string[];
        itemGroup: string;
        ItemGroupLabel: string;
        item: string[];
        itemText: string;
        itemIndicator: string;
    }, "", unknown, unknown, undefined>>> & import("react-tvcx").UnstyledProps & React.RefAttributes<HTMLDivElement>>;
    List: React.ForwardRefExoticComponent<Omit<BaseCombobox.ListProps & React.RefAttributes<HTMLDivElement>, "ref"> & import("tailwind-variants").VariantProps<import("tailwind-variants").TVReturnType<{
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
    }, {
        trigger: string;
        input: string;
        clearTrigger: string;
        content: string[];
        itemGroup: string;
        ItemGroupLabel: string;
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
    }, {
        trigger: string;
        input: string;
        clearTrigger: string;
        content: string[];
        itemGroup: string;
        ItemGroupLabel: string;
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
    }, {
        trigger: string;
        input: string;
        clearTrigger: string;
        content: string[];
        itemGroup: string;
        ItemGroupLabel: string;
        item: string[];
        itemText: string;
        itemIndicator: string;
    }, "", unknown, unknown, undefined>>> & import("react-tvcx").UnstyledProps & React.RefAttributes<HTMLDivElement>>;
    Content: React.ForwardRefExoticComponent<Omit<Omit<BaseCombobox.ContentProps & React.RefAttributes<HTMLDivElement>, "ref"> & import("tailwind-variants").VariantProps<import("tailwind-variants").TVReturnType<{
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
    }, {
        trigger: string;
        input: string;
        clearTrigger: string;
        content: string[];
        itemGroup: string;
        ItemGroupLabel: string;
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
    }, {
        trigger: string;
        input: string;
        clearTrigger: string;
        content: string[];
        itemGroup: string;
        ItemGroupLabel: string;
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
    }, {
        trigger: string;
        input: string;
        clearTrigger: string;
        content: string[];
        itemGroup: string;
        ItemGroupLabel: string;
        item: string[];
        itemText: string;
        itemIndicator: string;
    }, "", unknown, unknown, undefined>>> & import("react-tvcx").UnstyledProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
    ItemGroup: React.ForwardRefExoticComponent<Omit<BaseCombobox.ItemGroupProps & React.RefAttributes<HTMLDivElement>, "ref"> & import("tailwind-variants").VariantProps<import("tailwind-variants").TVReturnType<{
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
    }, {
        trigger: string;
        input: string;
        clearTrigger: string;
        content: string[];
        itemGroup: string;
        ItemGroupLabel: string;
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
    }, {
        trigger: string;
        input: string;
        clearTrigger: string;
        content: string[];
        itemGroup: string;
        ItemGroupLabel: string;
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
    }, {
        trigger: string;
        input: string;
        clearTrigger: string;
        content: string[];
        itemGroup: string;
        ItemGroupLabel: string;
        item: string[];
        itemText: string;
        itemIndicator: string;
    }, "", unknown, unknown, undefined>>> & import("react-tvcx").UnstyledProps & React.RefAttributes<HTMLDivElement>>;
    ItemGroupLabel: React.ForwardRefExoticComponent<Omit<BaseCombobox.ItemGroupLabelProps & React.RefAttributes<HTMLDivElement>, "ref"> & import("tailwind-variants").VariantProps<import("tailwind-variants").TVReturnType<{
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
    }, {
        trigger: string;
        input: string;
        clearTrigger: string;
        content: string[];
        itemGroup: string;
        ItemGroupLabel: string;
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
    }, {
        trigger: string;
        input: string;
        clearTrigger: string;
        content: string[];
        itemGroup: string;
        ItemGroupLabel: string;
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
    }, {
        trigger: string;
        input: string;
        clearTrigger: string;
        content: string[];
        itemGroup: string;
        ItemGroupLabel: string;
        item: string[];
        itemText: string;
        itemIndicator: string;
    }, "", unknown, unknown, undefined>>> & import("react-tvcx").UnstyledProps & React.RefAttributes<HTMLDivElement>>;
    Item: React.ForwardRefExoticComponent<Omit<BaseCombobox.ItemProps & React.RefAttributes<HTMLDivElement>, "ref"> & import("tailwind-variants").VariantProps<import("tailwind-variants").TVReturnType<{
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
    }, {
        trigger: string;
        input: string;
        clearTrigger: string;
        content: string[];
        itemGroup: string;
        ItemGroupLabel: string;
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
    }, {
        trigger: string;
        input: string;
        clearTrigger: string;
        content: string[];
        itemGroup: string;
        ItemGroupLabel: string;
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
    }, {
        trigger: string;
        input: string;
        clearTrigger: string;
        content: string[];
        itemGroup: string;
        ItemGroupLabel: string;
        item: string[];
        itemText: string;
        itemIndicator: string;
    }, "", unknown, unknown, undefined>>> & import("react-tvcx").UnstyledProps & React.RefAttributes<HTMLDivElement>>;
    ItemText: React.ForwardRefExoticComponent<Omit<BaseCombobox.ItemTextProps & React.RefAttributes<HTMLDivElement>, "ref"> & import("tailwind-variants").VariantProps<import("tailwind-variants").TVReturnType<{
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
    }, {
        trigger: string;
        input: string;
        clearTrigger: string;
        content: string[];
        itemGroup: string;
        ItemGroupLabel: string;
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
    }, {
        trigger: string;
        input: string;
        clearTrigger: string;
        content: string[];
        itemGroup: string;
        ItemGroupLabel: string;
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
    }, {
        trigger: string;
        input: string;
        clearTrigger: string;
        content: string[];
        itemGroup: string;
        ItemGroupLabel: string;
        item: string[];
        itemText: string;
        itemIndicator: string;
    }, "", unknown, unknown, undefined>>> & import("react-tvcx").UnstyledProps & React.RefAttributes<HTMLDivElement>>;
    ItemIndicator: React.ForwardRefExoticComponent<Omit<BaseCombobox.ItemIndicatorProps & React.RefAttributes<HTMLDivElement>, "ref"> & import("tailwind-variants").VariantProps<import("tailwind-variants").TVReturnType<{
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
    }, {
        trigger: string;
        input: string;
        clearTrigger: string;
        content: string[];
        itemGroup: string;
        ItemGroupLabel: string;
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
    }, {
        trigger: string;
        input: string;
        clearTrigger: string;
        content: string[];
        itemGroup: string;
        ItemGroupLabel: string;
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
    }, {
        trigger: string;
        input: string;
        clearTrigger: string;
        content: string[];
        itemGroup: string;
        ItemGroupLabel: string;
        item: string[];
        itemText: string;
        itemIndicator: string;
    }, "", unknown, unknown, undefined>>> & import("react-tvcx").UnstyledProps & React.RefAttributes<HTMLDivElement>>;
}>;
//# sourceMappingURL=combobox.d.ts.map