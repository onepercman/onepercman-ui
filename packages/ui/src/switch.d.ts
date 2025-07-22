import { Switch as BaseSwitch, SwitchRootProps } from "@ark-ui/react";
import React from "react";
import { ComponentMetadata, ComposedTVProps } from "react-tvcx";
export declare const switchVariants: import("tailwind-variants").TVReturnType<{
    size: {
        xs: {
            label: string;
            control: string;
            thumb: string;
        };
        sm: {
            label: string;
            control: string;
            thumb: string;
        };
        md: {
            label: string;
            control: string;
            thumb: string;
        };
        lg: {
            label: string;
            control: string;
            thumb: string;
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
    thumb: string[];
}, "inline-flex cursor-pointer items-center gap-2", {
    size: {
        xs: {
            label: string;
            control: string;
            thumb: string;
        };
        sm: {
            label: string;
            control: string;
            thumb: string;
        };
        md: {
            label: string;
            control: string;
            thumb: string;
        };
        lg: {
            label: string;
            control: string;
            thumb: string;
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
    thumb: string[];
}, import("tailwind-variants").TVReturnType<{
    size: {
        xs: {
            label: string;
            control: string;
            thumb: string;
        };
        sm: {
            label: string;
            control: string;
            thumb: string;
        };
        md: {
            label: string;
            control: string;
            thumb: string;
        };
        lg: {
            label: string;
            control: string;
            thumb: string;
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
    thumb: string[];
}, "inline-flex cursor-pointer items-center gap-2", unknown, unknown, undefined>>;
export interface SwitchProps extends SwitchRootProps, ComposedTVProps<typeof switchVariants> {
    indeterminate?: boolean;
}
export interface Switch extends ComponentMetadata {
    (props: SwitchProps): React.ReactElement | null;
}
export declare const Switch: React.ForwardRefExoticComponent<Omit<BaseSwitch.RootProps & React.RefAttributes<HTMLLabelElement>, "ref"> & import("tailwind-variants").VariantProps<import("tailwind-variants").TVReturnType<{
    size: {
        xs: {
            label: string;
            control: string;
            thumb: string;
        };
        sm: {
            label: string;
            control: string;
            thumb: string;
        };
        md: {
            label: string;
            control: string;
            thumb: string;
        };
        lg: {
            label: string;
            control: string;
            thumb: string;
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
    thumb: string[];
}, "inline-flex cursor-pointer items-center gap-2", {
    size: {
        xs: {
            label: string;
            control: string;
            thumb: string;
        };
        sm: {
            label: string;
            control: string;
            thumb: string;
        };
        md: {
            label: string;
            control: string;
            thumb: string;
        };
        lg: {
            label: string;
            control: string;
            thumb: string;
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
    thumb: string[];
}, import("tailwind-variants").TVReturnType<{
    size: {
        xs: {
            label: string;
            control: string;
            thumb: string;
        };
        sm: {
            label: string;
            control: string;
            thumb: string;
        };
        md: {
            label: string;
            control: string;
            thumb: string;
        };
        lg: {
            label: string;
            control: string;
            thumb: string;
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
    thumb: string[];
}, "inline-flex cursor-pointer items-center gap-2", unknown, unknown, undefined>>> & {
    classNames?: Partial<Record<"base" | "label" | "control" | "thumb", any>> | undefined;
} & import("react-tvcx").UnstyledProps & React.RefAttributes<HTMLLabelElement>> & {
    Root: React.ForwardRefExoticComponent<Omit<BaseSwitch.RootProps & React.RefAttributes<HTMLLabelElement>, "ref"> & import("tailwind-variants").VariantProps<import("tailwind-variants").TVReturnType<{
        size: {
            xs: {
                label: string;
                control: string;
                thumb: string;
            };
            sm: {
                label: string;
                control: string;
                thumb: string;
            };
            md: {
                label: string;
                control: string;
                thumb: string;
            };
            lg: {
                label: string;
                control: string;
                thumb: string;
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
        thumb: string[];
    }, "inline-flex cursor-pointer items-center gap-2", {
        size: {
            xs: {
                label: string;
                control: string;
                thumb: string;
            };
            sm: {
                label: string;
                control: string;
                thumb: string;
            };
            md: {
                label: string;
                control: string;
                thumb: string;
            };
            lg: {
                label: string;
                control: string;
                thumb: string;
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
        thumb: string[];
    }, import("tailwind-variants").TVReturnType<{
        size: {
            xs: {
                label: string;
                control: string;
                thumb: string;
            };
            sm: {
                label: string;
                control: string;
                thumb: string;
            };
            md: {
                label: string;
                control: string;
                thumb: string;
            };
            lg: {
                label: string;
                control: string;
                thumb: string;
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
        thumb: string[];
    }, "inline-flex cursor-pointer items-center gap-2", unknown, unknown, undefined>>> & {
        classNames?: Partial<Record<"base" | "label" | "control" | "thumb", any>> | undefined;
    } & import("react-tvcx").UnstyledProps & React.RefAttributes<HTMLLabelElement>>;
    RootProvider: React.ForwardRefExoticComponent<Omit<BaseSwitch.RootProviderProps & React.RefAttributes<HTMLLabelElement>, "ref"> & import("tailwind-variants").VariantProps<import("tailwind-variants").TVReturnType<{
        size: {
            xs: {
                label: string;
                control: string;
                thumb: string;
            };
            sm: {
                label: string;
                control: string;
                thumb: string;
            };
            md: {
                label: string;
                control: string;
                thumb: string;
            };
            lg: {
                label: string;
                control: string;
                thumb: string;
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
        thumb: string[];
    }, "inline-flex cursor-pointer items-center gap-2", {
        size: {
            xs: {
                label: string;
                control: string;
                thumb: string;
            };
            sm: {
                label: string;
                control: string;
                thumb: string;
            };
            md: {
                label: string;
                control: string;
                thumb: string;
            };
            lg: {
                label: string;
                control: string;
                thumb: string;
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
        thumb: string[];
    }, import("tailwind-variants").TVReturnType<{
        size: {
            xs: {
                label: string;
                control: string;
                thumb: string;
            };
            sm: {
                label: string;
                control: string;
                thumb: string;
            };
            md: {
                label: string;
                control: string;
                thumb: string;
            };
            lg: {
                label: string;
                control: string;
                thumb: string;
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
        thumb: string[];
    }, "inline-flex cursor-pointer items-center gap-2", unknown, unknown, undefined>>> & {
        classNames?: Partial<Record<"base" | "label" | "control" | "thumb", any>> | undefined;
    } & import("react-tvcx").UnstyledProps & React.RefAttributes<HTMLLabelElement>>;
    Context: React.ForwardRefExoticComponent<BaseSwitch.ContextProps & import("tailwind-variants").VariantProps<import("tailwind-variants").TVReturnType<{
        size: {
            xs: {
                label: string;
                control: string;
                thumb: string;
            };
            sm: {
                label: string;
                control: string;
                thumb: string;
            };
            md: {
                label: string;
                control: string;
                thumb: string;
            };
            lg: {
                label: string;
                control: string;
                thumb: string;
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
        thumb: string[];
    }, "inline-flex cursor-pointer items-center gap-2", {
        size: {
            xs: {
                label: string;
                control: string;
                thumb: string;
            };
            sm: {
                label: string;
                control: string;
                thumb: string;
            };
            md: {
                label: string;
                control: string;
                thumb: string;
            };
            lg: {
                label: string;
                control: string;
                thumb: string;
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
        thumb: string[];
    }, import("tailwind-variants").TVReturnType<{
        size: {
            xs: {
                label: string;
                control: string;
                thumb: string;
            };
            sm: {
                label: string;
                control: string;
                thumb: string;
            };
            md: {
                label: string;
                control: string;
                thumb: string;
            };
            lg: {
                label: string;
                control: string;
                thumb: string;
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
        thumb: string[];
    }, "inline-flex cursor-pointer items-center gap-2", unknown, unknown, undefined>>> & import("react-tvcx").UnstyledProps & React.RefAttributes<never>>;
    Control: React.ForwardRefExoticComponent<Omit<BaseSwitch.ControlProps & React.RefAttributes<HTMLSpanElement>, "ref"> & import("tailwind-variants").VariantProps<import("tailwind-variants").TVReturnType<{
        size: {
            xs: {
                label: string;
                control: string;
                thumb: string;
            };
            sm: {
                label: string;
                control: string;
                thumb: string;
            };
            md: {
                label: string;
                control: string;
                thumb: string;
            };
            lg: {
                label: string;
                control: string;
                thumb: string;
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
        thumb: string[];
    }, "inline-flex cursor-pointer items-center gap-2", {
        size: {
            xs: {
                label: string;
                control: string;
                thumb: string;
            };
            sm: {
                label: string;
                control: string;
                thumb: string;
            };
            md: {
                label: string;
                control: string;
                thumb: string;
            };
            lg: {
                label: string;
                control: string;
                thumb: string;
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
        thumb: string[];
    }, import("tailwind-variants").TVReturnType<{
        size: {
            xs: {
                label: string;
                control: string;
                thumb: string;
            };
            sm: {
                label: string;
                control: string;
                thumb: string;
            };
            md: {
                label: string;
                control: string;
                thumb: string;
            };
            lg: {
                label: string;
                control: string;
                thumb: string;
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
        thumb: string[];
    }, "inline-flex cursor-pointer items-center gap-2", unknown, unknown, undefined>>> & import("react-tvcx").UnstyledProps & React.RefAttributes<HTMLSpanElement>>;
    HiddenInput: React.ForwardRefExoticComponent<Omit<BaseSwitch.HiddenInputProps & React.RefAttributes<HTMLInputElement>, "ref"> & import("tailwind-variants").VariantProps<import("tailwind-variants").TVReturnType<{
        size: {
            xs: {
                label: string;
                control: string;
                thumb: string;
            };
            sm: {
                label: string;
                control: string;
                thumb: string;
            };
            md: {
                label: string;
                control: string;
                thumb: string;
            };
            lg: {
                label: string;
                control: string;
                thumb: string;
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
        thumb: string[];
    }, "inline-flex cursor-pointer items-center gap-2", {
        size: {
            xs: {
                label: string;
                control: string;
                thumb: string;
            };
            sm: {
                label: string;
                control: string;
                thumb: string;
            };
            md: {
                label: string;
                control: string;
                thumb: string;
            };
            lg: {
                label: string;
                control: string;
                thumb: string;
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
        thumb: string[];
    }, import("tailwind-variants").TVReturnType<{
        size: {
            xs: {
                label: string;
                control: string;
                thumb: string;
            };
            sm: {
                label: string;
                control: string;
                thumb: string;
            };
            md: {
                label: string;
                control: string;
                thumb: string;
            };
            lg: {
                label: string;
                control: string;
                thumb: string;
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
        thumb: string[];
    }, "inline-flex cursor-pointer items-center gap-2", unknown, unknown, undefined>>> & import("react-tvcx").UnstyledProps & React.RefAttributes<HTMLInputElement>>;
    Label: React.ForwardRefExoticComponent<Omit<BaseSwitch.LabelProps & React.RefAttributes<HTMLSpanElement>, "ref"> & import("tailwind-variants").VariantProps<import("tailwind-variants").TVReturnType<{
        size: {
            xs: {
                label: string;
                control: string;
                thumb: string;
            };
            sm: {
                label: string;
                control: string;
                thumb: string;
            };
            md: {
                label: string;
                control: string;
                thumb: string;
            };
            lg: {
                label: string;
                control: string;
                thumb: string;
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
        thumb: string[];
    }, "inline-flex cursor-pointer items-center gap-2", {
        size: {
            xs: {
                label: string;
                control: string;
                thumb: string;
            };
            sm: {
                label: string;
                control: string;
                thumb: string;
            };
            md: {
                label: string;
                control: string;
                thumb: string;
            };
            lg: {
                label: string;
                control: string;
                thumb: string;
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
        thumb: string[];
    }, import("tailwind-variants").TVReturnType<{
        size: {
            xs: {
                label: string;
                control: string;
                thumb: string;
            };
            sm: {
                label: string;
                control: string;
                thumb: string;
            };
            md: {
                label: string;
                control: string;
                thumb: string;
            };
            lg: {
                label: string;
                control: string;
                thumb: string;
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
        thumb: string[];
    }, "inline-flex cursor-pointer items-center gap-2", unknown, unknown, undefined>>> & import("react-tvcx").UnstyledProps & React.RefAttributes<HTMLSpanElement>>;
    Thumb: React.ForwardRefExoticComponent<Omit<BaseSwitch.ThumbProps & React.RefAttributes<HTMLSpanElement>, "ref"> & import("tailwind-variants").VariantProps<import("tailwind-variants").TVReturnType<{
        size: {
            xs: {
                label: string;
                control: string;
                thumb: string;
            };
            sm: {
                label: string;
                control: string;
                thumb: string;
            };
            md: {
                label: string;
                control: string;
                thumb: string;
            };
            lg: {
                label: string;
                control: string;
                thumb: string;
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
        thumb: string[];
    }, "inline-flex cursor-pointer items-center gap-2", {
        size: {
            xs: {
                label: string;
                control: string;
                thumb: string;
            };
            sm: {
                label: string;
                control: string;
                thumb: string;
            };
            md: {
                label: string;
                control: string;
                thumb: string;
            };
            lg: {
                label: string;
                control: string;
                thumb: string;
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
        thumb: string[];
    }, import("tailwind-variants").TVReturnType<{
        size: {
            xs: {
                label: string;
                control: string;
                thumb: string;
            };
            sm: {
                label: string;
                control: string;
                thumb: string;
            };
            md: {
                label: string;
                control: string;
                thumb: string;
            };
            lg: {
                label: string;
                control: string;
                thumb: string;
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
        thumb: string[];
    }, "inline-flex cursor-pointer items-center gap-2", unknown, unknown, undefined>>> & import("react-tvcx").UnstyledProps & React.RefAttributes<HTMLSpanElement>>;
} & Readonly<{
    Root: React.ForwardRefExoticComponent<Omit<BaseSwitch.RootProps & React.RefAttributes<HTMLLabelElement>, "ref"> & import("tailwind-variants").VariantProps<import("tailwind-variants").TVReturnType<{
        size: {
            xs: {
                label: string;
                control: string;
                thumb: string;
            };
            sm: {
                label: string;
                control: string;
                thumb: string;
            };
            md: {
                label: string;
                control: string;
                thumb: string;
            };
            lg: {
                label: string;
                control: string;
                thumb: string;
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
        thumb: string[];
    }, "inline-flex cursor-pointer items-center gap-2", {
        size: {
            xs: {
                label: string;
                control: string;
                thumb: string;
            };
            sm: {
                label: string;
                control: string;
                thumb: string;
            };
            md: {
                label: string;
                control: string;
                thumb: string;
            };
            lg: {
                label: string;
                control: string;
                thumb: string;
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
        thumb: string[];
    }, import("tailwind-variants").TVReturnType<{
        size: {
            xs: {
                label: string;
                control: string;
                thumb: string;
            };
            sm: {
                label: string;
                control: string;
                thumb: string;
            };
            md: {
                label: string;
                control: string;
                thumb: string;
            };
            lg: {
                label: string;
                control: string;
                thumb: string;
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
        thumb: string[];
    }, "inline-flex cursor-pointer items-center gap-2", unknown, unknown, undefined>>> & {
        classNames?: Partial<Record<"base" | "label" | "control" | "thumb", any>> | undefined;
    } & import("react-tvcx").UnstyledProps & React.RefAttributes<HTMLLabelElement>>;
    RootProvider: React.ForwardRefExoticComponent<Omit<BaseSwitch.RootProviderProps & React.RefAttributes<HTMLLabelElement>, "ref"> & import("tailwind-variants").VariantProps<import("tailwind-variants").TVReturnType<{
        size: {
            xs: {
                label: string;
                control: string;
                thumb: string;
            };
            sm: {
                label: string;
                control: string;
                thumb: string;
            };
            md: {
                label: string;
                control: string;
                thumb: string;
            };
            lg: {
                label: string;
                control: string;
                thumb: string;
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
        thumb: string[];
    }, "inline-flex cursor-pointer items-center gap-2", {
        size: {
            xs: {
                label: string;
                control: string;
                thumb: string;
            };
            sm: {
                label: string;
                control: string;
                thumb: string;
            };
            md: {
                label: string;
                control: string;
                thumb: string;
            };
            lg: {
                label: string;
                control: string;
                thumb: string;
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
        thumb: string[];
    }, import("tailwind-variants").TVReturnType<{
        size: {
            xs: {
                label: string;
                control: string;
                thumb: string;
            };
            sm: {
                label: string;
                control: string;
                thumb: string;
            };
            md: {
                label: string;
                control: string;
                thumb: string;
            };
            lg: {
                label: string;
                control: string;
                thumb: string;
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
        thumb: string[];
    }, "inline-flex cursor-pointer items-center gap-2", unknown, unknown, undefined>>> & {
        classNames?: Partial<Record<"base" | "label" | "control" | "thumb", any>> | undefined;
    } & import("react-tvcx").UnstyledProps & React.RefAttributes<HTMLLabelElement>>;
    Context: React.ForwardRefExoticComponent<BaseSwitch.ContextProps & import("tailwind-variants").VariantProps<import("tailwind-variants").TVReturnType<{
        size: {
            xs: {
                label: string;
                control: string;
                thumb: string;
            };
            sm: {
                label: string;
                control: string;
                thumb: string;
            };
            md: {
                label: string;
                control: string;
                thumb: string;
            };
            lg: {
                label: string;
                control: string;
                thumb: string;
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
        thumb: string[];
    }, "inline-flex cursor-pointer items-center gap-2", {
        size: {
            xs: {
                label: string;
                control: string;
                thumb: string;
            };
            sm: {
                label: string;
                control: string;
                thumb: string;
            };
            md: {
                label: string;
                control: string;
                thumb: string;
            };
            lg: {
                label: string;
                control: string;
                thumb: string;
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
        thumb: string[];
    }, import("tailwind-variants").TVReturnType<{
        size: {
            xs: {
                label: string;
                control: string;
                thumb: string;
            };
            sm: {
                label: string;
                control: string;
                thumb: string;
            };
            md: {
                label: string;
                control: string;
                thumb: string;
            };
            lg: {
                label: string;
                control: string;
                thumb: string;
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
        thumb: string[];
    }, "inline-flex cursor-pointer items-center gap-2", unknown, unknown, undefined>>> & import("react-tvcx").UnstyledProps & React.RefAttributes<never>>;
    Control: React.ForwardRefExoticComponent<Omit<BaseSwitch.ControlProps & React.RefAttributes<HTMLSpanElement>, "ref"> & import("tailwind-variants").VariantProps<import("tailwind-variants").TVReturnType<{
        size: {
            xs: {
                label: string;
                control: string;
                thumb: string;
            };
            sm: {
                label: string;
                control: string;
                thumb: string;
            };
            md: {
                label: string;
                control: string;
                thumb: string;
            };
            lg: {
                label: string;
                control: string;
                thumb: string;
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
        thumb: string[];
    }, "inline-flex cursor-pointer items-center gap-2", {
        size: {
            xs: {
                label: string;
                control: string;
                thumb: string;
            };
            sm: {
                label: string;
                control: string;
                thumb: string;
            };
            md: {
                label: string;
                control: string;
                thumb: string;
            };
            lg: {
                label: string;
                control: string;
                thumb: string;
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
        thumb: string[];
    }, import("tailwind-variants").TVReturnType<{
        size: {
            xs: {
                label: string;
                control: string;
                thumb: string;
            };
            sm: {
                label: string;
                control: string;
                thumb: string;
            };
            md: {
                label: string;
                control: string;
                thumb: string;
            };
            lg: {
                label: string;
                control: string;
                thumb: string;
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
        thumb: string[];
    }, "inline-flex cursor-pointer items-center gap-2", unknown, unknown, undefined>>> & import("react-tvcx").UnstyledProps & React.RefAttributes<HTMLSpanElement>>;
    HiddenInput: React.ForwardRefExoticComponent<Omit<BaseSwitch.HiddenInputProps & React.RefAttributes<HTMLInputElement>, "ref"> & import("tailwind-variants").VariantProps<import("tailwind-variants").TVReturnType<{
        size: {
            xs: {
                label: string;
                control: string;
                thumb: string;
            };
            sm: {
                label: string;
                control: string;
                thumb: string;
            };
            md: {
                label: string;
                control: string;
                thumb: string;
            };
            lg: {
                label: string;
                control: string;
                thumb: string;
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
        thumb: string[];
    }, "inline-flex cursor-pointer items-center gap-2", {
        size: {
            xs: {
                label: string;
                control: string;
                thumb: string;
            };
            sm: {
                label: string;
                control: string;
                thumb: string;
            };
            md: {
                label: string;
                control: string;
                thumb: string;
            };
            lg: {
                label: string;
                control: string;
                thumb: string;
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
        thumb: string[];
    }, import("tailwind-variants").TVReturnType<{
        size: {
            xs: {
                label: string;
                control: string;
                thumb: string;
            };
            sm: {
                label: string;
                control: string;
                thumb: string;
            };
            md: {
                label: string;
                control: string;
                thumb: string;
            };
            lg: {
                label: string;
                control: string;
                thumb: string;
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
        thumb: string[];
    }, "inline-flex cursor-pointer items-center gap-2", unknown, unknown, undefined>>> & import("react-tvcx").UnstyledProps & React.RefAttributes<HTMLInputElement>>;
    Label: React.ForwardRefExoticComponent<Omit<BaseSwitch.LabelProps & React.RefAttributes<HTMLSpanElement>, "ref"> & import("tailwind-variants").VariantProps<import("tailwind-variants").TVReturnType<{
        size: {
            xs: {
                label: string;
                control: string;
                thumb: string;
            };
            sm: {
                label: string;
                control: string;
                thumb: string;
            };
            md: {
                label: string;
                control: string;
                thumb: string;
            };
            lg: {
                label: string;
                control: string;
                thumb: string;
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
        thumb: string[];
    }, "inline-flex cursor-pointer items-center gap-2", {
        size: {
            xs: {
                label: string;
                control: string;
                thumb: string;
            };
            sm: {
                label: string;
                control: string;
                thumb: string;
            };
            md: {
                label: string;
                control: string;
                thumb: string;
            };
            lg: {
                label: string;
                control: string;
                thumb: string;
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
        thumb: string[];
    }, import("tailwind-variants").TVReturnType<{
        size: {
            xs: {
                label: string;
                control: string;
                thumb: string;
            };
            sm: {
                label: string;
                control: string;
                thumb: string;
            };
            md: {
                label: string;
                control: string;
                thumb: string;
            };
            lg: {
                label: string;
                control: string;
                thumb: string;
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
        thumb: string[];
    }, "inline-flex cursor-pointer items-center gap-2", unknown, unknown, undefined>>> & import("react-tvcx").UnstyledProps & React.RefAttributes<HTMLSpanElement>>;
    Thumb: React.ForwardRefExoticComponent<Omit<BaseSwitch.ThumbProps & React.RefAttributes<HTMLSpanElement>, "ref"> & import("tailwind-variants").VariantProps<import("tailwind-variants").TVReturnType<{
        size: {
            xs: {
                label: string;
                control: string;
                thumb: string;
            };
            sm: {
                label: string;
                control: string;
                thumb: string;
            };
            md: {
                label: string;
                control: string;
                thumb: string;
            };
            lg: {
                label: string;
                control: string;
                thumb: string;
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
        thumb: string[];
    }, "inline-flex cursor-pointer items-center gap-2", {
        size: {
            xs: {
                label: string;
                control: string;
                thumb: string;
            };
            sm: {
                label: string;
                control: string;
                thumb: string;
            };
            md: {
                label: string;
                control: string;
                thumb: string;
            };
            lg: {
                label: string;
                control: string;
                thumb: string;
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
        thumb: string[];
    }, import("tailwind-variants").TVReturnType<{
        size: {
            xs: {
                label: string;
                control: string;
                thumb: string;
            };
            sm: {
                label: string;
                control: string;
                thumb: string;
            };
            md: {
                label: string;
                control: string;
                thumb: string;
            };
            lg: {
                label: string;
                control: string;
                thumb: string;
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
        thumb: string[];
    }, "inline-flex cursor-pointer items-center gap-2", unknown, unknown, undefined>>> & import("react-tvcx").UnstyledProps & React.RefAttributes<HTMLSpanElement>>;
}>;
//# sourceMappingURL=switch.d.ts.map