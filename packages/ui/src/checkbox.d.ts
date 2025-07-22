import { Checkbox as BaseCheckbox, CheckboxRootProps } from "@ark-ui/react";
import React from "react";
import { ComponentMetadata, ComposedTVProps } from "react-tvcx";
export declare const checkbox: import("tailwind-variants").TVReturnType<{
    size: {
        xs: {
            label: string;
            control: string;
        };
        sm: {
            label: string;
            control: string;
        };
        md: {
            label: string;
            control: string;
        };
        lg: {
            label: string;
            control: string;
        };
    };
    indeterminate: {
        true: {
            control: string;
        };
    };
    placement: {
        head: string;
        tail: string;
    };
}, {
    label: string;
    control: string[];
    indicator: string;
}, "inline-flex cursor-pointer items-center gap-2", {
    size: {
        xs: {
            label: string;
            control: string;
        };
        sm: {
            label: string;
            control: string;
        };
        md: {
            label: string;
            control: string;
        };
        lg: {
            label: string;
            control: string;
        };
    };
    indeterminate: {
        true: {
            control: string;
        };
    };
    placement: {
        head: string;
        tail: string;
    };
}, {
    label: string;
    control: string[];
    indicator: string;
}, import("tailwind-variants").TVReturnType<{
    size: {
        xs: {
            label: string;
            control: string;
        };
        sm: {
            label: string;
            control: string;
        };
        md: {
            label: string;
            control: string;
        };
        lg: {
            label: string;
            control: string;
        };
    };
    indeterminate: {
        true: {
            control: string;
        };
    };
    placement: {
        head: string;
        tail: string;
    };
}, {
    label: string;
    control: string[];
    indicator: string;
}, "inline-flex cursor-pointer items-center gap-2", unknown, unknown, undefined>>;
export interface CheckboxProps extends CheckboxRootProps, ComposedTVProps<typeof checkbox> {
}
export interface Checkbox extends ComponentMetadata {
    (props: CheckboxProps): React.ReactElement | null;
}
export declare const CheckboxCustomRoot: Checkbox;
export declare const Checkbox: Checkbox & {
    Root: React.ForwardRefExoticComponent<Omit<BaseCheckbox.RootProps & React.RefAttributes<HTMLLabelElement>, "ref"> & import("tailwind-variants").VariantProps<import("tailwind-variants").TVReturnType<{
        size: {
            xs: {
                label: string;
                control: string;
            };
            sm: {
                label: string;
                control: string;
            };
            md: {
                label: string;
                control: string;
            };
            lg: {
                label: string;
                control: string;
            };
        };
        indeterminate: {
            true: {
                control: string;
            };
        };
        placement: {
            head: string;
            tail: string;
        };
    }, {
        label: string;
        control: string[];
        indicator: string;
    }, "inline-flex cursor-pointer items-center gap-2", {
        size: {
            xs: {
                label: string;
                control: string;
            };
            sm: {
                label: string;
                control: string;
            };
            md: {
                label: string;
                control: string;
            };
            lg: {
                label: string;
                control: string;
            };
        };
        indeterminate: {
            true: {
                control: string;
            };
        };
        placement: {
            head: string;
            tail: string;
        };
    }, {
        label: string;
        control: string[];
        indicator: string;
    }, import("tailwind-variants").TVReturnType<{
        size: {
            xs: {
                label: string;
                control: string;
            };
            sm: {
                label: string;
                control: string;
            };
            md: {
                label: string;
                control: string;
            };
            lg: {
                label: string;
                control: string;
            };
        };
        indeterminate: {
            true: {
                control: string;
            };
        };
        placement: {
            head: string;
            tail: string;
        };
    }, {
        label: string;
        control: string[];
        indicator: string;
    }, "inline-flex cursor-pointer items-center gap-2", unknown, unknown, undefined>>> & {
        classNames?: Partial<Record<"base" | "label" | "indicator" | "control", any>> | undefined;
    } & import("react-tvcx").UnstyledProps & React.RefAttributes<HTMLLabelElement>>;
    RootProvider: React.ForwardRefExoticComponent<Omit<BaseCheckbox.RootProviderProps & React.RefAttributes<HTMLLabelElement>, "ref"> & import("tailwind-variants").VariantProps<import("tailwind-variants").TVReturnType<{
        size: {
            xs: {
                label: string;
                control: string;
            };
            sm: {
                label: string;
                control: string;
            };
            md: {
                label: string;
                control: string;
            };
            lg: {
                label: string;
                control: string;
            };
        };
        indeterminate: {
            true: {
                control: string;
            };
        };
        placement: {
            head: string;
            tail: string;
        };
    }, {
        label: string;
        control: string[];
        indicator: string;
    }, "inline-flex cursor-pointer items-center gap-2", {
        size: {
            xs: {
                label: string;
                control: string;
            };
            sm: {
                label: string;
                control: string;
            };
            md: {
                label: string;
                control: string;
            };
            lg: {
                label: string;
                control: string;
            };
        };
        indeterminate: {
            true: {
                control: string;
            };
        };
        placement: {
            head: string;
            tail: string;
        };
    }, {
        label: string;
        control: string[];
        indicator: string;
    }, import("tailwind-variants").TVReturnType<{
        size: {
            xs: {
                label: string;
                control: string;
            };
            sm: {
                label: string;
                control: string;
            };
            md: {
                label: string;
                control: string;
            };
            lg: {
                label: string;
                control: string;
            };
        };
        indeterminate: {
            true: {
                control: string;
            };
        };
        placement: {
            head: string;
            tail: string;
        };
    }, {
        label: string;
        control: string[];
        indicator: string;
    }, "inline-flex cursor-pointer items-center gap-2", unknown, unknown, undefined>>> & {
        classNames?: Partial<Record<"base" | "label" | "indicator" | "control", any>> | undefined;
    } & import("react-tvcx").UnstyledProps & React.RefAttributes<HTMLLabelElement>>;
    Context: React.ForwardRefExoticComponent<BaseCheckbox.ContextProps & import("tailwind-variants").VariantProps<import("tailwind-variants").TVReturnType<{
        size: {
            xs: {
                label: string;
                control: string;
            };
            sm: {
                label: string;
                control: string;
            };
            md: {
                label: string;
                control: string;
            };
            lg: {
                label: string;
                control: string;
            };
        };
        indeterminate: {
            true: {
                control: string;
            };
        };
        placement: {
            head: string;
            tail: string;
        };
    }, {
        label: string;
        control: string[];
        indicator: string;
    }, "inline-flex cursor-pointer items-center gap-2", {
        size: {
            xs: {
                label: string;
                control: string;
            };
            sm: {
                label: string;
                control: string;
            };
            md: {
                label: string;
                control: string;
            };
            lg: {
                label: string;
                control: string;
            };
        };
        indeterminate: {
            true: {
                control: string;
            };
        };
        placement: {
            head: string;
            tail: string;
        };
    }, {
        label: string;
        control: string[];
        indicator: string;
    }, import("tailwind-variants").TVReturnType<{
        size: {
            xs: {
                label: string;
                control: string;
            };
            sm: {
                label: string;
                control: string;
            };
            md: {
                label: string;
                control: string;
            };
            lg: {
                label: string;
                control: string;
            };
        };
        indeterminate: {
            true: {
                control: string;
            };
        };
        placement: {
            head: string;
            tail: string;
        };
    }, {
        label: string;
        control: string[];
        indicator: string;
    }, "inline-flex cursor-pointer items-center gap-2", unknown, unknown, undefined>>> & import("react-tvcx").UnstyledProps & React.RefAttributes<never>>;
    Control: React.ForwardRefExoticComponent<Omit<BaseCheckbox.ControlProps & React.RefAttributes<HTMLDivElement>, "ref"> & import("tailwind-variants").VariantProps<import("tailwind-variants").TVReturnType<{
        size: {
            xs: {
                label: string;
                control: string;
            };
            sm: {
                label: string;
                control: string;
            };
            md: {
                label: string;
                control: string;
            };
            lg: {
                label: string;
                control: string;
            };
        };
        indeterminate: {
            true: {
                control: string;
            };
        };
        placement: {
            head: string;
            tail: string;
        };
    }, {
        label: string;
        control: string[];
        indicator: string;
    }, "inline-flex cursor-pointer items-center gap-2", {
        size: {
            xs: {
                label: string;
                control: string;
            };
            sm: {
                label: string;
                control: string;
            };
            md: {
                label: string;
                control: string;
            };
            lg: {
                label: string;
                control: string;
            };
        };
        indeterminate: {
            true: {
                control: string;
            };
        };
        placement: {
            head: string;
            tail: string;
        };
    }, {
        label: string;
        control: string[];
        indicator: string;
    }, import("tailwind-variants").TVReturnType<{
        size: {
            xs: {
                label: string;
                control: string;
            };
            sm: {
                label: string;
                control: string;
            };
            md: {
                label: string;
                control: string;
            };
            lg: {
                label: string;
                control: string;
            };
        };
        indeterminate: {
            true: {
                control: string;
            };
        };
        placement: {
            head: string;
            tail: string;
        };
    }, {
        label: string;
        control: string[];
        indicator: string;
    }, "inline-flex cursor-pointer items-center gap-2", unknown, unknown, undefined>>> & import("react-tvcx").UnstyledProps & React.RefAttributes<HTMLDivElement>>;
    Group: React.ForwardRefExoticComponent<Omit<BaseCheckbox.GroupProps & React.RefAttributes<HTMLDivElement>, "ref"> & import("tailwind-variants").VariantProps<import("tailwind-variants").TVReturnType<{
        size: {
            xs: {
                label: string;
                control: string;
            };
            sm: {
                label: string;
                control: string;
            };
            md: {
                label: string;
                control: string;
            };
            lg: {
                label: string;
                control: string;
            };
        };
        indeterminate: {
            true: {
                control: string;
            };
        };
        placement: {
            head: string;
            tail: string;
        };
    }, {
        label: string;
        control: string[];
        indicator: string;
    }, "inline-flex cursor-pointer items-center gap-2", {
        size: {
            xs: {
                label: string;
                control: string;
            };
            sm: {
                label: string;
                control: string;
            };
            md: {
                label: string;
                control: string;
            };
            lg: {
                label: string;
                control: string;
            };
        };
        indeterminate: {
            true: {
                control: string;
            };
        };
        placement: {
            head: string;
            tail: string;
        };
    }, {
        label: string;
        control: string[];
        indicator: string;
    }, import("tailwind-variants").TVReturnType<{
        size: {
            xs: {
                label: string;
                control: string;
            };
            sm: {
                label: string;
                control: string;
            };
            md: {
                label: string;
                control: string;
            };
            lg: {
                label: string;
                control: string;
            };
        };
        indeterminate: {
            true: {
                control: string;
            };
        };
        placement: {
            head: string;
            tail: string;
        };
    }, {
        label: string;
        control: string[];
        indicator: string;
    }, "inline-flex cursor-pointer items-center gap-2", unknown, unknown, undefined>>> & import("react-tvcx").UnstyledProps & React.RefAttributes<HTMLDivElement>>;
    HiddenInput: React.ForwardRefExoticComponent<Omit<BaseCheckbox.HiddenInputProps & React.RefAttributes<HTMLInputElement>, "ref"> & import("tailwind-variants").VariantProps<import("tailwind-variants").TVReturnType<{
        size: {
            xs: {
                label: string;
                control: string;
            };
            sm: {
                label: string;
                control: string;
            };
            md: {
                label: string;
                control: string;
            };
            lg: {
                label: string;
                control: string;
            };
        };
        indeterminate: {
            true: {
                control: string;
            };
        };
        placement: {
            head: string;
            tail: string;
        };
    }, {
        label: string;
        control: string[];
        indicator: string;
    }, "inline-flex cursor-pointer items-center gap-2", {
        size: {
            xs: {
                label: string;
                control: string;
            };
            sm: {
                label: string;
                control: string;
            };
            md: {
                label: string;
                control: string;
            };
            lg: {
                label: string;
                control: string;
            };
        };
        indeterminate: {
            true: {
                control: string;
            };
        };
        placement: {
            head: string;
            tail: string;
        };
    }, {
        label: string;
        control: string[];
        indicator: string;
    }, import("tailwind-variants").TVReturnType<{
        size: {
            xs: {
                label: string;
                control: string;
            };
            sm: {
                label: string;
                control: string;
            };
            md: {
                label: string;
                control: string;
            };
            lg: {
                label: string;
                control: string;
            };
        };
        indeterminate: {
            true: {
                control: string;
            };
        };
        placement: {
            head: string;
            tail: string;
        };
    }, {
        label: string;
        control: string[];
        indicator: string;
    }, "inline-flex cursor-pointer items-center gap-2", unknown, unknown, undefined>>> & import("react-tvcx").UnstyledProps & React.RefAttributes<HTMLInputElement>>;
    Indicator: React.ForwardRefExoticComponent<Omit<BaseCheckbox.IndicatorProps & React.RefAttributes<HTMLDivElement>, "ref"> & import("tailwind-variants").VariantProps<import("tailwind-variants").TVReturnType<{
        size: {
            xs: {
                label: string;
                control: string;
            };
            sm: {
                label: string;
                control: string;
            };
            md: {
                label: string;
                control: string;
            };
            lg: {
                label: string;
                control: string;
            };
        };
        indeterminate: {
            true: {
                control: string;
            };
        };
        placement: {
            head: string;
            tail: string;
        };
    }, {
        label: string;
        control: string[];
        indicator: string;
    }, "inline-flex cursor-pointer items-center gap-2", {
        size: {
            xs: {
                label: string;
                control: string;
            };
            sm: {
                label: string;
                control: string;
            };
            md: {
                label: string;
                control: string;
            };
            lg: {
                label: string;
                control: string;
            };
        };
        indeterminate: {
            true: {
                control: string;
            };
        };
        placement: {
            head: string;
            tail: string;
        };
    }, {
        label: string;
        control: string[];
        indicator: string;
    }, import("tailwind-variants").TVReturnType<{
        size: {
            xs: {
                label: string;
                control: string;
            };
            sm: {
                label: string;
                control: string;
            };
            md: {
                label: string;
                control: string;
            };
            lg: {
                label: string;
                control: string;
            };
        };
        indeterminate: {
            true: {
                control: string;
            };
        };
        placement: {
            head: string;
            tail: string;
        };
    }, {
        label: string;
        control: string[];
        indicator: string;
    }, "inline-flex cursor-pointer items-center gap-2", unknown, unknown, undefined>>> & import("react-tvcx").UnstyledProps & React.RefAttributes<HTMLDivElement>>;
    Label: React.ForwardRefExoticComponent<Omit<BaseCheckbox.LabelProps & React.RefAttributes<HTMLSpanElement>, "ref"> & import("tailwind-variants").VariantProps<import("tailwind-variants").TVReturnType<{
        size: {
            xs: {
                label: string;
                control: string;
            };
            sm: {
                label: string;
                control: string;
            };
            md: {
                label: string;
                control: string;
            };
            lg: {
                label: string;
                control: string;
            };
        };
        indeterminate: {
            true: {
                control: string;
            };
        };
        placement: {
            head: string;
            tail: string;
        };
    }, {
        label: string;
        control: string[];
        indicator: string;
    }, "inline-flex cursor-pointer items-center gap-2", {
        size: {
            xs: {
                label: string;
                control: string;
            };
            sm: {
                label: string;
                control: string;
            };
            md: {
                label: string;
                control: string;
            };
            lg: {
                label: string;
                control: string;
            };
        };
        indeterminate: {
            true: {
                control: string;
            };
        };
        placement: {
            head: string;
            tail: string;
        };
    }, {
        label: string;
        control: string[];
        indicator: string;
    }, import("tailwind-variants").TVReturnType<{
        size: {
            xs: {
                label: string;
                control: string;
            };
            sm: {
                label: string;
                control: string;
            };
            md: {
                label: string;
                control: string;
            };
            lg: {
                label: string;
                control: string;
            };
        };
        indeterminate: {
            true: {
                control: string;
            };
        };
        placement: {
            head: string;
            tail: string;
        };
    }, {
        label: string;
        control: string[];
        indicator: string;
    }, "inline-flex cursor-pointer items-center gap-2", unknown, unknown, undefined>>> & import("react-tvcx").UnstyledProps & React.RefAttributes<HTMLSpanElement>>;
} & Readonly<{
    Root: React.ForwardRefExoticComponent<Omit<BaseCheckbox.RootProps & React.RefAttributes<HTMLLabelElement>, "ref"> & import("tailwind-variants").VariantProps<import("tailwind-variants").TVReturnType<{
        size: {
            xs: {
                label: string;
                control: string;
            };
            sm: {
                label: string;
                control: string;
            };
            md: {
                label: string;
                control: string;
            };
            lg: {
                label: string;
                control: string;
            };
        };
        indeterminate: {
            true: {
                control: string;
            };
        };
        placement: {
            head: string;
            tail: string;
        };
    }, {
        label: string;
        control: string[];
        indicator: string;
    }, "inline-flex cursor-pointer items-center gap-2", {
        size: {
            xs: {
                label: string;
                control: string;
            };
            sm: {
                label: string;
                control: string;
            };
            md: {
                label: string;
                control: string;
            };
            lg: {
                label: string;
                control: string;
            };
        };
        indeterminate: {
            true: {
                control: string;
            };
        };
        placement: {
            head: string;
            tail: string;
        };
    }, {
        label: string;
        control: string[];
        indicator: string;
    }, import("tailwind-variants").TVReturnType<{
        size: {
            xs: {
                label: string;
                control: string;
            };
            sm: {
                label: string;
                control: string;
            };
            md: {
                label: string;
                control: string;
            };
            lg: {
                label: string;
                control: string;
            };
        };
        indeterminate: {
            true: {
                control: string;
            };
        };
        placement: {
            head: string;
            tail: string;
        };
    }, {
        label: string;
        control: string[];
        indicator: string;
    }, "inline-flex cursor-pointer items-center gap-2", unknown, unknown, undefined>>> & {
        classNames?: Partial<Record<"base" | "label" | "indicator" | "control", any>> | undefined;
    } & import("react-tvcx").UnstyledProps & React.RefAttributes<HTMLLabelElement>>;
    RootProvider: React.ForwardRefExoticComponent<Omit<BaseCheckbox.RootProviderProps & React.RefAttributes<HTMLLabelElement>, "ref"> & import("tailwind-variants").VariantProps<import("tailwind-variants").TVReturnType<{
        size: {
            xs: {
                label: string;
                control: string;
            };
            sm: {
                label: string;
                control: string;
            };
            md: {
                label: string;
                control: string;
            };
            lg: {
                label: string;
                control: string;
            };
        };
        indeterminate: {
            true: {
                control: string;
            };
        };
        placement: {
            head: string;
            tail: string;
        };
    }, {
        label: string;
        control: string[];
        indicator: string;
    }, "inline-flex cursor-pointer items-center gap-2", {
        size: {
            xs: {
                label: string;
                control: string;
            };
            sm: {
                label: string;
                control: string;
            };
            md: {
                label: string;
                control: string;
            };
            lg: {
                label: string;
                control: string;
            };
        };
        indeterminate: {
            true: {
                control: string;
            };
        };
        placement: {
            head: string;
            tail: string;
        };
    }, {
        label: string;
        control: string[];
        indicator: string;
    }, import("tailwind-variants").TVReturnType<{
        size: {
            xs: {
                label: string;
                control: string;
            };
            sm: {
                label: string;
                control: string;
            };
            md: {
                label: string;
                control: string;
            };
            lg: {
                label: string;
                control: string;
            };
        };
        indeterminate: {
            true: {
                control: string;
            };
        };
        placement: {
            head: string;
            tail: string;
        };
    }, {
        label: string;
        control: string[];
        indicator: string;
    }, "inline-flex cursor-pointer items-center gap-2", unknown, unknown, undefined>>> & {
        classNames?: Partial<Record<"base" | "label" | "indicator" | "control", any>> | undefined;
    } & import("react-tvcx").UnstyledProps & React.RefAttributes<HTMLLabelElement>>;
    Context: React.ForwardRefExoticComponent<BaseCheckbox.ContextProps & import("tailwind-variants").VariantProps<import("tailwind-variants").TVReturnType<{
        size: {
            xs: {
                label: string;
                control: string;
            };
            sm: {
                label: string;
                control: string;
            };
            md: {
                label: string;
                control: string;
            };
            lg: {
                label: string;
                control: string;
            };
        };
        indeterminate: {
            true: {
                control: string;
            };
        };
        placement: {
            head: string;
            tail: string;
        };
    }, {
        label: string;
        control: string[];
        indicator: string;
    }, "inline-flex cursor-pointer items-center gap-2", {
        size: {
            xs: {
                label: string;
                control: string;
            };
            sm: {
                label: string;
                control: string;
            };
            md: {
                label: string;
                control: string;
            };
            lg: {
                label: string;
                control: string;
            };
        };
        indeterminate: {
            true: {
                control: string;
            };
        };
        placement: {
            head: string;
            tail: string;
        };
    }, {
        label: string;
        control: string[];
        indicator: string;
    }, import("tailwind-variants").TVReturnType<{
        size: {
            xs: {
                label: string;
                control: string;
            };
            sm: {
                label: string;
                control: string;
            };
            md: {
                label: string;
                control: string;
            };
            lg: {
                label: string;
                control: string;
            };
        };
        indeterminate: {
            true: {
                control: string;
            };
        };
        placement: {
            head: string;
            tail: string;
        };
    }, {
        label: string;
        control: string[];
        indicator: string;
    }, "inline-flex cursor-pointer items-center gap-2", unknown, unknown, undefined>>> & import("react-tvcx").UnstyledProps & React.RefAttributes<never>>;
    Control: React.ForwardRefExoticComponent<Omit<BaseCheckbox.ControlProps & React.RefAttributes<HTMLDivElement>, "ref"> & import("tailwind-variants").VariantProps<import("tailwind-variants").TVReturnType<{
        size: {
            xs: {
                label: string;
                control: string;
            };
            sm: {
                label: string;
                control: string;
            };
            md: {
                label: string;
                control: string;
            };
            lg: {
                label: string;
                control: string;
            };
        };
        indeterminate: {
            true: {
                control: string;
            };
        };
        placement: {
            head: string;
            tail: string;
        };
    }, {
        label: string;
        control: string[];
        indicator: string;
    }, "inline-flex cursor-pointer items-center gap-2", {
        size: {
            xs: {
                label: string;
                control: string;
            };
            sm: {
                label: string;
                control: string;
            };
            md: {
                label: string;
                control: string;
            };
            lg: {
                label: string;
                control: string;
            };
        };
        indeterminate: {
            true: {
                control: string;
            };
        };
        placement: {
            head: string;
            tail: string;
        };
    }, {
        label: string;
        control: string[];
        indicator: string;
    }, import("tailwind-variants").TVReturnType<{
        size: {
            xs: {
                label: string;
                control: string;
            };
            sm: {
                label: string;
                control: string;
            };
            md: {
                label: string;
                control: string;
            };
            lg: {
                label: string;
                control: string;
            };
        };
        indeterminate: {
            true: {
                control: string;
            };
        };
        placement: {
            head: string;
            tail: string;
        };
    }, {
        label: string;
        control: string[];
        indicator: string;
    }, "inline-flex cursor-pointer items-center gap-2", unknown, unknown, undefined>>> & import("react-tvcx").UnstyledProps & React.RefAttributes<HTMLDivElement>>;
    Group: React.ForwardRefExoticComponent<Omit<BaseCheckbox.GroupProps & React.RefAttributes<HTMLDivElement>, "ref"> & import("tailwind-variants").VariantProps<import("tailwind-variants").TVReturnType<{
        size: {
            xs: {
                label: string;
                control: string;
            };
            sm: {
                label: string;
                control: string;
            };
            md: {
                label: string;
                control: string;
            };
            lg: {
                label: string;
                control: string;
            };
        };
        indeterminate: {
            true: {
                control: string;
            };
        };
        placement: {
            head: string;
            tail: string;
        };
    }, {
        label: string;
        control: string[];
        indicator: string;
    }, "inline-flex cursor-pointer items-center gap-2", {
        size: {
            xs: {
                label: string;
                control: string;
            };
            sm: {
                label: string;
                control: string;
            };
            md: {
                label: string;
                control: string;
            };
            lg: {
                label: string;
                control: string;
            };
        };
        indeterminate: {
            true: {
                control: string;
            };
        };
        placement: {
            head: string;
            tail: string;
        };
    }, {
        label: string;
        control: string[];
        indicator: string;
    }, import("tailwind-variants").TVReturnType<{
        size: {
            xs: {
                label: string;
                control: string;
            };
            sm: {
                label: string;
                control: string;
            };
            md: {
                label: string;
                control: string;
            };
            lg: {
                label: string;
                control: string;
            };
        };
        indeterminate: {
            true: {
                control: string;
            };
        };
        placement: {
            head: string;
            tail: string;
        };
    }, {
        label: string;
        control: string[];
        indicator: string;
    }, "inline-flex cursor-pointer items-center gap-2", unknown, unknown, undefined>>> & import("react-tvcx").UnstyledProps & React.RefAttributes<HTMLDivElement>>;
    HiddenInput: React.ForwardRefExoticComponent<Omit<BaseCheckbox.HiddenInputProps & React.RefAttributes<HTMLInputElement>, "ref"> & import("tailwind-variants").VariantProps<import("tailwind-variants").TVReturnType<{
        size: {
            xs: {
                label: string;
                control: string;
            };
            sm: {
                label: string;
                control: string;
            };
            md: {
                label: string;
                control: string;
            };
            lg: {
                label: string;
                control: string;
            };
        };
        indeterminate: {
            true: {
                control: string;
            };
        };
        placement: {
            head: string;
            tail: string;
        };
    }, {
        label: string;
        control: string[];
        indicator: string;
    }, "inline-flex cursor-pointer items-center gap-2", {
        size: {
            xs: {
                label: string;
                control: string;
            };
            sm: {
                label: string;
                control: string;
            };
            md: {
                label: string;
                control: string;
            };
            lg: {
                label: string;
                control: string;
            };
        };
        indeterminate: {
            true: {
                control: string;
            };
        };
        placement: {
            head: string;
            tail: string;
        };
    }, {
        label: string;
        control: string[];
        indicator: string;
    }, import("tailwind-variants").TVReturnType<{
        size: {
            xs: {
                label: string;
                control: string;
            };
            sm: {
                label: string;
                control: string;
            };
            md: {
                label: string;
                control: string;
            };
            lg: {
                label: string;
                control: string;
            };
        };
        indeterminate: {
            true: {
                control: string;
            };
        };
        placement: {
            head: string;
            tail: string;
        };
    }, {
        label: string;
        control: string[];
        indicator: string;
    }, "inline-flex cursor-pointer items-center gap-2", unknown, unknown, undefined>>> & import("react-tvcx").UnstyledProps & React.RefAttributes<HTMLInputElement>>;
    Indicator: React.ForwardRefExoticComponent<Omit<BaseCheckbox.IndicatorProps & React.RefAttributes<HTMLDivElement>, "ref"> & import("tailwind-variants").VariantProps<import("tailwind-variants").TVReturnType<{
        size: {
            xs: {
                label: string;
                control: string;
            };
            sm: {
                label: string;
                control: string;
            };
            md: {
                label: string;
                control: string;
            };
            lg: {
                label: string;
                control: string;
            };
        };
        indeterminate: {
            true: {
                control: string;
            };
        };
        placement: {
            head: string;
            tail: string;
        };
    }, {
        label: string;
        control: string[];
        indicator: string;
    }, "inline-flex cursor-pointer items-center gap-2", {
        size: {
            xs: {
                label: string;
                control: string;
            };
            sm: {
                label: string;
                control: string;
            };
            md: {
                label: string;
                control: string;
            };
            lg: {
                label: string;
                control: string;
            };
        };
        indeterminate: {
            true: {
                control: string;
            };
        };
        placement: {
            head: string;
            tail: string;
        };
    }, {
        label: string;
        control: string[];
        indicator: string;
    }, import("tailwind-variants").TVReturnType<{
        size: {
            xs: {
                label: string;
                control: string;
            };
            sm: {
                label: string;
                control: string;
            };
            md: {
                label: string;
                control: string;
            };
            lg: {
                label: string;
                control: string;
            };
        };
        indeterminate: {
            true: {
                control: string;
            };
        };
        placement: {
            head: string;
            tail: string;
        };
    }, {
        label: string;
        control: string[];
        indicator: string;
    }, "inline-flex cursor-pointer items-center gap-2", unknown, unknown, undefined>>> & import("react-tvcx").UnstyledProps & React.RefAttributes<HTMLDivElement>>;
    Label: React.ForwardRefExoticComponent<Omit<BaseCheckbox.LabelProps & React.RefAttributes<HTMLSpanElement>, "ref"> & import("tailwind-variants").VariantProps<import("tailwind-variants").TVReturnType<{
        size: {
            xs: {
                label: string;
                control: string;
            };
            sm: {
                label: string;
                control: string;
            };
            md: {
                label: string;
                control: string;
            };
            lg: {
                label: string;
                control: string;
            };
        };
        indeterminate: {
            true: {
                control: string;
            };
        };
        placement: {
            head: string;
            tail: string;
        };
    }, {
        label: string;
        control: string[];
        indicator: string;
    }, "inline-flex cursor-pointer items-center gap-2", {
        size: {
            xs: {
                label: string;
                control: string;
            };
            sm: {
                label: string;
                control: string;
            };
            md: {
                label: string;
                control: string;
            };
            lg: {
                label: string;
                control: string;
            };
        };
        indeterminate: {
            true: {
                control: string;
            };
        };
        placement: {
            head: string;
            tail: string;
        };
    }, {
        label: string;
        control: string[];
        indicator: string;
    }, import("tailwind-variants").TVReturnType<{
        size: {
            xs: {
                label: string;
                control: string;
            };
            sm: {
                label: string;
                control: string;
            };
            md: {
                label: string;
                control: string;
            };
            lg: {
                label: string;
                control: string;
            };
        };
        indeterminate: {
            true: {
                control: string;
            };
        };
        placement: {
            head: string;
            tail: string;
        };
    }, {
        label: string;
        control: string[];
        indicator: string;
    }, "inline-flex cursor-pointer items-center gap-2", unknown, unknown, undefined>>> & import("react-tvcx").UnstyledProps & React.RefAttributes<HTMLSpanElement>>;
}>;
//# sourceMappingURL=checkbox.d.ts.map