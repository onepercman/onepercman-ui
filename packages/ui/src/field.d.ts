import { Field as BaseField } from "@ark-ui/react";
import { ComponentMetadata, ComposedTVProps } from "react-tvcx";
export declare const field: import("tailwind-variants").TVReturnType<{
    size: {
        xs: {
            label: string;
        };
        sm: {
            label: string;
        };
        md: {
            label: string;
        };
        lg: {
            label: string;
        };
    };
    invalid: {
        true: {
            label: string;
        };
    };
    required: {
        true: {
            label: string;
        };
    };
}, {
    label: string;
    errorText: string;
    helperText: string;
}, "flex flex-col gap-2", {
    size: {
        xs: {
            label: string;
        };
        sm: {
            label: string;
        };
        md: {
            label: string;
        };
        lg: {
            label: string;
        };
    };
    invalid: {
        true: {
            label: string;
        };
    };
    required: {
        true: {
            label: string;
        };
    };
}, {
    label: string;
    errorText: string;
    helperText: string;
}, import("tailwind-variants").TVReturnType<{
    size: {
        xs: {
            label: string;
        };
        sm: {
            label: string;
        };
        md: {
            label: string;
        };
        lg: {
            label: string;
        };
    };
    invalid: {
        true: {
            label: string;
        };
    };
    required: {
        true: {
            label: string;
        };
    };
}, {
    label: string;
    errorText: string;
    helperText: string;
}, "flex flex-col gap-2", unknown, unknown, undefined>>;
export interface FieldProps extends ComposedTVProps<typeof field> {
}
export interface Field extends ComponentMetadata {
    (props: FieldProps): React.ReactElement | null;
}
export declare const Field: import("react").ForwardRefExoticComponent<Omit<BaseField.RootProps & import("react").RefAttributes<HTMLDivElement>, "ref"> & import("tailwind-variants").VariantProps<import("tailwind-variants").TVReturnType<{
    size: {
        xs: {
            label: string;
        };
        sm: {
            label: string;
        };
        md: {
            label: string;
        };
        lg: {
            label: string;
        };
    };
    invalid: {
        true: {
            label: string;
        };
    };
    required: {
        true: {
            label: string;
        };
    };
}, {
    label: string;
    errorText: string;
    helperText: string;
}, "flex flex-col gap-2", {
    size: {
        xs: {
            label: string;
        };
        sm: {
            label: string;
        };
        md: {
            label: string;
        };
        lg: {
            label: string;
        };
    };
    invalid: {
        true: {
            label: string;
        };
    };
    required: {
        true: {
            label: string;
        };
    };
}, {
    label: string;
    errorText: string;
    helperText: string;
}, import("tailwind-variants").TVReturnType<{
    size: {
        xs: {
            label: string;
        };
        sm: {
            label: string;
        };
        md: {
            label: string;
        };
        lg: {
            label: string;
        };
    };
    invalid: {
        true: {
            label: string;
        };
    };
    required: {
        true: {
            label: string;
        };
    };
}, {
    label: string;
    errorText: string;
    helperText: string;
}, "flex flex-col gap-2", unknown, unknown, undefined>>> & {
    classNames?: Partial<Record<"base" | "label" | "errorText" | "helperText", any>> | undefined;
} & import("react-tvcx").UnstyledProps & import("react").RefAttributes<HTMLDivElement>> & {
    Context: import("react").ForwardRefExoticComponent<BaseField.ContextProps & import("tailwind-variants").VariantProps<import("tailwind-variants").TVReturnType<{
        size: {
            xs: {
                label: string;
            };
            sm: {
                label: string;
            };
            md: {
                label: string;
            };
            lg: {
                label: string;
            };
        };
        invalid: {
            true: {
                label: string;
            };
        };
        required: {
            true: {
                label: string;
            };
        };
    }, {
        label: string;
        errorText: string;
        helperText: string;
    }, "flex flex-col gap-2", {
        size: {
            xs: {
                label: string;
            };
            sm: {
                label: string;
            };
            md: {
                label: string;
            };
            lg: {
                label: string;
            };
        };
        invalid: {
            true: {
                label: string;
            };
        };
        required: {
            true: {
                label: string;
            };
        };
    }, {
        label: string;
        errorText: string;
        helperText: string;
    }, import("tailwind-variants").TVReturnType<{
        size: {
            xs: {
                label: string;
            };
            sm: {
                label: string;
            };
            md: {
                label: string;
            };
            lg: {
                label: string;
            };
        };
        invalid: {
            true: {
                label: string;
            };
        };
        required: {
            true: {
                label: string;
            };
        };
    }, {
        label: string;
        errorText: string;
        helperText: string;
    }, "flex flex-col gap-2", unknown, unknown, undefined>>> & import("react-tvcx").UnstyledProps & import("react").RefAttributes<never>>;
    ErrorText: import("react").ForwardRefExoticComponent<Omit<BaseField.ErrorTextProps & import("react").RefAttributes<HTMLSpanElement>, "ref"> & import("tailwind-variants").VariantProps<import("tailwind-variants").TVReturnType<{
        size: {
            xs: {
                label: string;
            };
            sm: {
                label: string;
            };
            md: {
                label: string;
            };
            lg: {
                label: string;
            };
        };
        invalid: {
            true: {
                label: string;
            };
        };
        required: {
            true: {
                label: string;
            };
        };
    }, {
        label: string;
        errorText: string;
        helperText: string;
    }, "flex flex-col gap-2", {
        size: {
            xs: {
                label: string;
            };
            sm: {
                label: string;
            };
            md: {
                label: string;
            };
            lg: {
                label: string;
            };
        };
        invalid: {
            true: {
                label: string;
            };
        };
        required: {
            true: {
                label: string;
            };
        };
    }, {
        label: string;
        errorText: string;
        helperText: string;
    }, import("tailwind-variants").TVReturnType<{
        size: {
            xs: {
                label: string;
            };
            sm: {
                label: string;
            };
            md: {
                label: string;
            };
            lg: {
                label: string;
            };
        };
        invalid: {
            true: {
                label: string;
            };
        };
        required: {
            true: {
                label: string;
            };
        };
    }, {
        label: string;
        errorText: string;
        helperText: string;
    }, "flex flex-col gap-2", unknown, unknown, undefined>>> & import("react-tvcx").UnstyledProps & import("react").RefAttributes<HTMLSpanElement>>;
    HelperText: import("react").ForwardRefExoticComponent<Omit<BaseField.HelperTextProps & import("react").RefAttributes<HTMLSpanElement>, "ref"> & import("tailwind-variants").VariantProps<import("tailwind-variants").TVReturnType<{
        size: {
            xs: {
                label: string;
            };
            sm: {
                label: string;
            };
            md: {
                label: string;
            };
            lg: {
                label: string;
            };
        };
        invalid: {
            true: {
                label: string;
            };
        };
        required: {
            true: {
                label: string;
            };
        };
    }, {
        label: string;
        errorText: string;
        helperText: string;
    }, "flex flex-col gap-2", {
        size: {
            xs: {
                label: string;
            };
            sm: {
                label: string;
            };
            md: {
                label: string;
            };
            lg: {
                label: string;
            };
        };
        invalid: {
            true: {
                label: string;
            };
        };
        required: {
            true: {
                label: string;
            };
        };
    }, {
        label: string;
        errorText: string;
        helperText: string;
    }, import("tailwind-variants").TVReturnType<{
        size: {
            xs: {
                label: string;
            };
            sm: {
                label: string;
            };
            md: {
                label: string;
            };
            lg: {
                label: string;
            };
        };
        invalid: {
            true: {
                label: string;
            };
        };
        required: {
            true: {
                label: string;
            };
        };
    }, {
        label: string;
        errorText: string;
        helperText: string;
    }, "flex flex-col gap-2", unknown, unknown, undefined>>> & import("react-tvcx").UnstyledProps & import("react").RefAttributes<HTMLSpanElement>>;
    Input: import("react").ForwardRefExoticComponent<Omit<BaseField.InputProps & import("react").RefAttributes<HTMLInputElement>, "ref"> & import("tailwind-variants").VariantProps<import("tailwind-variants").TVReturnType<{
        size: {
            xs: {
                label: string;
            };
            sm: {
                label: string;
            };
            md: {
                label: string;
            };
            lg: {
                label: string;
            };
        };
        invalid: {
            true: {
                label: string;
            };
        };
        required: {
            true: {
                label: string;
            };
        };
    }, {
        label: string;
        errorText: string;
        helperText: string;
    }, "flex flex-col gap-2", {
        size: {
            xs: {
                label: string;
            };
            sm: {
                label: string;
            };
            md: {
                label: string;
            };
            lg: {
                label: string;
            };
        };
        invalid: {
            true: {
                label: string;
            };
        };
        required: {
            true: {
                label: string;
            };
        };
    }, {
        label: string;
        errorText: string;
        helperText: string;
    }, import("tailwind-variants").TVReturnType<{
        size: {
            xs: {
                label: string;
            };
            sm: {
                label: string;
            };
            md: {
                label: string;
            };
            lg: {
                label: string;
            };
        };
        invalid: {
            true: {
                label: string;
            };
        };
        required: {
            true: {
                label: string;
            };
        };
    }, {
        label: string;
        errorText: string;
        helperText: string;
    }, "flex flex-col gap-2", unknown, unknown, undefined>>> & import("react-tvcx").UnstyledProps & import("react").RefAttributes<HTMLInputElement>>;
    Label: import("react").ForwardRefExoticComponent<Omit<BaseField.LabelProps & import("react").RefAttributes<HTMLLabelElement>, "ref"> & import("tailwind-variants").VariantProps<import("tailwind-variants").TVReturnType<{
        size: {
            xs: {
                label: string;
            };
            sm: {
                label: string;
            };
            md: {
                label: string;
            };
            lg: {
                label: string;
            };
        };
        invalid: {
            true: {
                label: string;
            };
        };
        required: {
            true: {
                label: string;
            };
        };
    }, {
        label: string;
        errorText: string;
        helperText: string;
    }, "flex flex-col gap-2", {
        size: {
            xs: {
                label: string;
            };
            sm: {
                label: string;
            };
            md: {
                label: string;
            };
            lg: {
                label: string;
            };
        };
        invalid: {
            true: {
                label: string;
            };
        };
        required: {
            true: {
                label: string;
            };
        };
    }, {
        label: string;
        errorText: string;
        helperText: string;
    }, import("tailwind-variants").TVReturnType<{
        size: {
            xs: {
                label: string;
            };
            sm: {
                label: string;
            };
            md: {
                label: string;
            };
            lg: {
                label: string;
            };
        };
        invalid: {
            true: {
                label: string;
            };
        };
        required: {
            true: {
                label: string;
            };
        };
    }, {
        label: string;
        errorText: string;
        helperText: string;
    }, "flex flex-col gap-2", unknown, unknown, undefined>>> & import("react-tvcx").UnstyledProps & import("react").RefAttributes<HTMLLabelElement>>;
    Root: import("react").ForwardRefExoticComponent<Omit<BaseField.RootProps & import("react").RefAttributes<HTMLDivElement>, "ref"> & import("tailwind-variants").VariantProps<import("tailwind-variants").TVReturnType<{
        size: {
            xs: {
                label: string;
            };
            sm: {
                label: string;
            };
            md: {
                label: string;
            };
            lg: {
                label: string;
            };
        };
        invalid: {
            true: {
                label: string;
            };
        };
        required: {
            true: {
                label: string;
            };
        };
    }, {
        label: string;
        errorText: string;
        helperText: string;
    }, "flex flex-col gap-2", {
        size: {
            xs: {
                label: string;
            };
            sm: {
                label: string;
            };
            md: {
                label: string;
            };
            lg: {
                label: string;
            };
        };
        invalid: {
            true: {
                label: string;
            };
        };
        required: {
            true: {
                label: string;
            };
        };
    }, {
        label: string;
        errorText: string;
        helperText: string;
    }, import("tailwind-variants").TVReturnType<{
        size: {
            xs: {
                label: string;
            };
            sm: {
                label: string;
            };
            md: {
                label: string;
            };
            lg: {
                label: string;
            };
        };
        invalid: {
            true: {
                label: string;
            };
        };
        required: {
            true: {
                label: string;
            };
        };
    }, {
        label: string;
        errorText: string;
        helperText: string;
    }, "flex flex-col gap-2", unknown, unknown, undefined>>> & {
        classNames?: Partial<Record<"base" | "label" | "errorText" | "helperText", any>> | undefined;
    } & import("react-tvcx").UnstyledProps & import("react").RefAttributes<HTMLDivElement>>;
    RootProvider: import("react").ForwardRefExoticComponent<Omit<BaseField.RootProviderProps & import("react").RefAttributes<HTMLDivElement>, "ref"> & import("tailwind-variants").VariantProps<import("tailwind-variants").TVReturnType<{
        size: {
            xs: {
                label: string;
            };
            sm: {
                label: string;
            };
            md: {
                label: string;
            };
            lg: {
                label: string;
            };
        };
        invalid: {
            true: {
                label: string;
            };
        };
        required: {
            true: {
                label: string;
            };
        };
    }, {
        label: string;
        errorText: string;
        helperText: string;
    }, "flex flex-col gap-2", {
        size: {
            xs: {
                label: string;
            };
            sm: {
                label: string;
            };
            md: {
                label: string;
            };
            lg: {
                label: string;
            };
        };
        invalid: {
            true: {
                label: string;
            };
        };
        required: {
            true: {
                label: string;
            };
        };
    }, {
        label: string;
        errorText: string;
        helperText: string;
    }, import("tailwind-variants").TVReturnType<{
        size: {
            xs: {
                label: string;
            };
            sm: {
                label: string;
            };
            md: {
                label: string;
            };
            lg: {
                label: string;
            };
        };
        invalid: {
            true: {
                label: string;
            };
        };
        required: {
            true: {
                label: string;
            };
        };
    }, {
        label: string;
        errorText: string;
        helperText: string;
    }, "flex flex-col gap-2", unknown, unknown, undefined>>> & import("react-tvcx").UnstyledProps & import("react").RefAttributes<HTMLDivElement>>;
    Select: import("react").ForwardRefExoticComponent<Omit<BaseField.SelectProps & import("react").RefAttributes<HTMLSelectElement>, "ref"> & import("tailwind-variants").VariantProps<import("tailwind-variants").TVReturnType<{
        size: {
            xs: {
                label: string;
            };
            sm: {
                label: string;
            };
            md: {
                label: string;
            };
            lg: {
                label: string;
            };
        };
        invalid: {
            true: {
                label: string;
            };
        };
        required: {
            true: {
                label: string;
            };
        };
    }, {
        label: string;
        errorText: string;
        helperText: string;
    }, "flex flex-col gap-2", {
        size: {
            xs: {
                label: string;
            };
            sm: {
                label: string;
            };
            md: {
                label: string;
            };
            lg: {
                label: string;
            };
        };
        invalid: {
            true: {
                label: string;
            };
        };
        required: {
            true: {
                label: string;
            };
        };
    }, {
        label: string;
        errorText: string;
        helperText: string;
    }, import("tailwind-variants").TVReturnType<{
        size: {
            xs: {
                label: string;
            };
            sm: {
                label: string;
            };
            md: {
                label: string;
            };
            lg: {
                label: string;
            };
        };
        invalid: {
            true: {
                label: string;
            };
        };
        required: {
            true: {
                label: string;
            };
        };
    }, {
        label: string;
        errorText: string;
        helperText: string;
    }, "flex flex-col gap-2", unknown, unknown, undefined>>> & import("react-tvcx").UnstyledProps & import("react").RefAttributes<HTMLSelectElement>>;
    Textarea: import("react").ForwardRefExoticComponent<Omit<BaseField.TextareaProps & import("react").RefAttributes<HTMLTextAreaElement>, "ref"> & import("tailwind-variants").VariantProps<import("tailwind-variants").TVReturnType<{
        size: {
            xs: {
                label: string;
            };
            sm: {
                label: string;
            };
            md: {
                label: string;
            };
            lg: {
                label: string;
            };
        };
        invalid: {
            true: {
                label: string;
            };
        };
        required: {
            true: {
                label: string;
            };
        };
    }, {
        label: string;
        errorText: string;
        helperText: string;
    }, "flex flex-col gap-2", {
        size: {
            xs: {
                label: string;
            };
            sm: {
                label: string;
            };
            md: {
                label: string;
            };
            lg: {
                label: string;
            };
        };
        invalid: {
            true: {
                label: string;
            };
        };
        required: {
            true: {
                label: string;
            };
        };
    }, {
        label: string;
        errorText: string;
        helperText: string;
    }, import("tailwind-variants").TVReturnType<{
        size: {
            xs: {
                label: string;
            };
            sm: {
                label: string;
            };
            md: {
                label: string;
            };
            lg: {
                label: string;
            };
        };
        invalid: {
            true: {
                label: string;
            };
        };
        required: {
            true: {
                label: string;
            };
        };
    }, {
        label: string;
        errorText: string;
        helperText: string;
    }, "flex flex-col gap-2", unknown, unknown, undefined>>> & import("react-tvcx").UnstyledProps & import("react").RefAttributes<HTMLTextAreaElement>>;
} & Readonly<{
    Context: import("react").ForwardRefExoticComponent<BaseField.ContextProps & import("tailwind-variants").VariantProps<import("tailwind-variants").TVReturnType<{
        size: {
            xs: {
                label: string;
            };
            sm: {
                label: string;
            };
            md: {
                label: string;
            };
            lg: {
                label: string;
            };
        };
        invalid: {
            true: {
                label: string;
            };
        };
        required: {
            true: {
                label: string;
            };
        };
    }, {
        label: string;
        errorText: string;
        helperText: string;
    }, "flex flex-col gap-2", {
        size: {
            xs: {
                label: string;
            };
            sm: {
                label: string;
            };
            md: {
                label: string;
            };
            lg: {
                label: string;
            };
        };
        invalid: {
            true: {
                label: string;
            };
        };
        required: {
            true: {
                label: string;
            };
        };
    }, {
        label: string;
        errorText: string;
        helperText: string;
    }, import("tailwind-variants").TVReturnType<{
        size: {
            xs: {
                label: string;
            };
            sm: {
                label: string;
            };
            md: {
                label: string;
            };
            lg: {
                label: string;
            };
        };
        invalid: {
            true: {
                label: string;
            };
        };
        required: {
            true: {
                label: string;
            };
        };
    }, {
        label: string;
        errorText: string;
        helperText: string;
    }, "flex flex-col gap-2", unknown, unknown, undefined>>> & import("react-tvcx").UnstyledProps & import("react").RefAttributes<never>>;
    ErrorText: import("react").ForwardRefExoticComponent<Omit<BaseField.ErrorTextProps & import("react").RefAttributes<HTMLSpanElement>, "ref"> & import("tailwind-variants").VariantProps<import("tailwind-variants").TVReturnType<{
        size: {
            xs: {
                label: string;
            };
            sm: {
                label: string;
            };
            md: {
                label: string;
            };
            lg: {
                label: string;
            };
        };
        invalid: {
            true: {
                label: string;
            };
        };
        required: {
            true: {
                label: string;
            };
        };
    }, {
        label: string;
        errorText: string;
        helperText: string;
    }, "flex flex-col gap-2", {
        size: {
            xs: {
                label: string;
            };
            sm: {
                label: string;
            };
            md: {
                label: string;
            };
            lg: {
                label: string;
            };
        };
        invalid: {
            true: {
                label: string;
            };
        };
        required: {
            true: {
                label: string;
            };
        };
    }, {
        label: string;
        errorText: string;
        helperText: string;
    }, import("tailwind-variants").TVReturnType<{
        size: {
            xs: {
                label: string;
            };
            sm: {
                label: string;
            };
            md: {
                label: string;
            };
            lg: {
                label: string;
            };
        };
        invalid: {
            true: {
                label: string;
            };
        };
        required: {
            true: {
                label: string;
            };
        };
    }, {
        label: string;
        errorText: string;
        helperText: string;
    }, "flex flex-col gap-2", unknown, unknown, undefined>>> & import("react-tvcx").UnstyledProps & import("react").RefAttributes<HTMLSpanElement>>;
    HelperText: import("react").ForwardRefExoticComponent<Omit<BaseField.HelperTextProps & import("react").RefAttributes<HTMLSpanElement>, "ref"> & import("tailwind-variants").VariantProps<import("tailwind-variants").TVReturnType<{
        size: {
            xs: {
                label: string;
            };
            sm: {
                label: string;
            };
            md: {
                label: string;
            };
            lg: {
                label: string;
            };
        };
        invalid: {
            true: {
                label: string;
            };
        };
        required: {
            true: {
                label: string;
            };
        };
    }, {
        label: string;
        errorText: string;
        helperText: string;
    }, "flex flex-col gap-2", {
        size: {
            xs: {
                label: string;
            };
            sm: {
                label: string;
            };
            md: {
                label: string;
            };
            lg: {
                label: string;
            };
        };
        invalid: {
            true: {
                label: string;
            };
        };
        required: {
            true: {
                label: string;
            };
        };
    }, {
        label: string;
        errorText: string;
        helperText: string;
    }, import("tailwind-variants").TVReturnType<{
        size: {
            xs: {
                label: string;
            };
            sm: {
                label: string;
            };
            md: {
                label: string;
            };
            lg: {
                label: string;
            };
        };
        invalid: {
            true: {
                label: string;
            };
        };
        required: {
            true: {
                label: string;
            };
        };
    }, {
        label: string;
        errorText: string;
        helperText: string;
    }, "flex flex-col gap-2", unknown, unknown, undefined>>> & import("react-tvcx").UnstyledProps & import("react").RefAttributes<HTMLSpanElement>>;
    Input: import("react").ForwardRefExoticComponent<Omit<BaseField.InputProps & import("react").RefAttributes<HTMLInputElement>, "ref"> & import("tailwind-variants").VariantProps<import("tailwind-variants").TVReturnType<{
        size: {
            xs: {
                label: string;
            };
            sm: {
                label: string;
            };
            md: {
                label: string;
            };
            lg: {
                label: string;
            };
        };
        invalid: {
            true: {
                label: string;
            };
        };
        required: {
            true: {
                label: string;
            };
        };
    }, {
        label: string;
        errorText: string;
        helperText: string;
    }, "flex flex-col gap-2", {
        size: {
            xs: {
                label: string;
            };
            sm: {
                label: string;
            };
            md: {
                label: string;
            };
            lg: {
                label: string;
            };
        };
        invalid: {
            true: {
                label: string;
            };
        };
        required: {
            true: {
                label: string;
            };
        };
    }, {
        label: string;
        errorText: string;
        helperText: string;
    }, import("tailwind-variants").TVReturnType<{
        size: {
            xs: {
                label: string;
            };
            sm: {
                label: string;
            };
            md: {
                label: string;
            };
            lg: {
                label: string;
            };
        };
        invalid: {
            true: {
                label: string;
            };
        };
        required: {
            true: {
                label: string;
            };
        };
    }, {
        label: string;
        errorText: string;
        helperText: string;
    }, "flex flex-col gap-2", unknown, unknown, undefined>>> & import("react-tvcx").UnstyledProps & import("react").RefAttributes<HTMLInputElement>>;
    Label: import("react").ForwardRefExoticComponent<Omit<BaseField.LabelProps & import("react").RefAttributes<HTMLLabelElement>, "ref"> & import("tailwind-variants").VariantProps<import("tailwind-variants").TVReturnType<{
        size: {
            xs: {
                label: string;
            };
            sm: {
                label: string;
            };
            md: {
                label: string;
            };
            lg: {
                label: string;
            };
        };
        invalid: {
            true: {
                label: string;
            };
        };
        required: {
            true: {
                label: string;
            };
        };
    }, {
        label: string;
        errorText: string;
        helperText: string;
    }, "flex flex-col gap-2", {
        size: {
            xs: {
                label: string;
            };
            sm: {
                label: string;
            };
            md: {
                label: string;
            };
            lg: {
                label: string;
            };
        };
        invalid: {
            true: {
                label: string;
            };
        };
        required: {
            true: {
                label: string;
            };
        };
    }, {
        label: string;
        errorText: string;
        helperText: string;
    }, import("tailwind-variants").TVReturnType<{
        size: {
            xs: {
                label: string;
            };
            sm: {
                label: string;
            };
            md: {
                label: string;
            };
            lg: {
                label: string;
            };
        };
        invalid: {
            true: {
                label: string;
            };
        };
        required: {
            true: {
                label: string;
            };
        };
    }, {
        label: string;
        errorText: string;
        helperText: string;
    }, "flex flex-col gap-2", unknown, unknown, undefined>>> & import("react-tvcx").UnstyledProps & import("react").RefAttributes<HTMLLabelElement>>;
    Root: import("react").ForwardRefExoticComponent<Omit<BaseField.RootProps & import("react").RefAttributes<HTMLDivElement>, "ref"> & import("tailwind-variants").VariantProps<import("tailwind-variants").TVReturnType<{
        size: {
            xs: {
                label: string;
            };
            sm: {
                label: string;
            };
            md: {
                label: string;
            };
            lg: {
                label: string;
            };
        };
        invalid: {
            true: {
                label: string;
            };
        };
        required: {
            true: {
                label: string;
            };
        };
    }, {
        label: string;
        errorText: string;
        helperText: string;
    }, "flex flex-col gap-2", {
        size: {
            xs: {
                label: string;
            };
            sm: {
                label: string;
            };
            md: {
                label: string;
            };
            lg: {
                label: string;
            };
        };
        invalid: {
            true: {
                label: string;
            };
        };
        required: {
            true: {
                label: string;
            };
        };
    }, {
        label: string;
        errorText: string;
        helperText: string;
    }, import("tailwind-variants").TVReturnType<{
        size: {
            xs: {
                label: string;
            };
            sm: {
                label: string;
            };
            md: {
                label: string;
            };
            lg: {
                label: string;
            };
        };
        invalid: {
            true: {
                label: string;
            };
        };
        required: {
            true: {
                label: string;
            };
        };
    }, {
        label: string;
        errorText: string;
        helperText: string;
    }, "flex flex-col gap-2", unknown, unknown, undefined>>> & {
        classNames?: Partial<Record<"base" | "label" | "errorText" | "helperText", any>> | undefined;
    } & import("react-tvcx").UnstyledProps & import("react").RefAttributes<HTMLDivElement>>;
    RootProvider: import("react").ForwardRefExoticComponent<Omit<BaseField.RootProviderProps & import("react").RefAttributes<HTMLDivElement>, "ref"> & import("tailwind-variants").VariantProps<import("tailwind-variants").TVReturnType<{
        size: {
            xs: {
                label: string;
            };
            sm: {
                label: string;
            };
            md: {
                label: string;
            };
            lg: {
                label: string;
            };
        };
        invalid: {
            true: {
                label: string;
            };
        };
        required: {
            true: {
                label: string;
            };
        };
    }, {
        label: string;
        errorText: string;
        helperText: string;
    }, "flex flex-col gap-2", {
        size: {
            xs: {
                label: string;
            };
            sm: {
                label: string;
            };
            md: {
                label: string;
            };
            lg: {
                label: string;
            };
        };
        invalid: {
            true: {
                label: string;
            };
        };
        required: {
            true: {
                label: string;
            };
        };
    }, {
        label: string;
        errorText: string;
        helperText: string;
    }, import("tailwind-variants").TVReturnType<{
        size: {
            xs: {
                label: string;
            };
            sm: {
                label: string;
            };
            md: {
                label: string;
            };
            lg: {
                label: string;
            };
        };
        invalid: {
            true: {
                label: string;
            };
        };
        required: {
            true: {
                label: string;
            };
        };
    }, {
        label: string;
        errorText: string;
        helperText: string;
    }, "flex flex-col gap-2", unknown, unknown, undefined>>> & import("react-tvcx").UnstyledProps & import("react").RefAttributes<HTMLDivElement>>;
    Select: import("react").ForwardRefExoticComponent<Omit<BaseField.SelectProps & import("react").RefAttributes<HTMLSelectElement>, "ref"> & import("tailwind-variants").VariantProps<import("tailwind-variants").TVReturnType<{
        size: {
            xs: {
                label: string;
            };
            sm: {
                label: string;
            };
            md: {
                label: string;
            };
            lg: {
                label: string;
            };
        };
        invalid: {
            true: {
                label: string;
            };
        };
        required: {
            true: {
                label: string;
            };
        };
    }, {
        label: string;
        errorText: string;
        helperText: string;
    }, "flex flex-col gap-2", {
        size: {
            xs: {
                label: string;
            };
            sm: {
                label: string;
            };
            md: {
                label: string;
            };
            lg: {
                label: string;
            };
        };
        invalid: {
            true: {
                label: string;
            };
        };
        required: {
            true: {
                label: string;
            };
        };
    }, {
        label: string;
        errorText: string;
        helperText: string;
    }, import("tailwind-variants").TVReturnType<{
        size: {
            xs: {
                label: string;
            };
            sm: {
                label: string;
            };
            md: {
                label: string;
            };
            lg: {
                label: string;
            };
        };
        invalid: {
            true: {
                label: string;
            };
        };
        required: {
            true: {
                label: string;
            };
        };
    }, {
        label: string;
        errorText: string;
        helperText: string;
    }, "flex flex-col gap-2", unknown, unknown, undefined>>> & import("react-tvcx").UnstyledProps & import("react").RefAttributes<HTMLSelectElement>>;
    Textarea: import("react").ForwardRefExoticComponent<Omit<BaseField.TextareaProps & import("react").RefAttributes<HTMLTextAreaElement>, "ref"> & import("tailwind-variants").VariantProps<import("tailwind-variants").TVReturnType<{
        size: {
            xs: {
                label: string;
            };
            sm: {
                label: string;
            };
            md: {
                label: string;
            };
            lg: {
                label: string;
            };
        };
        invalid: {
            true: {
                label: string;
            };
        };
        required: {
            true: {
                label: string;
            };
        };
    }, {
        label: string;
        errorText: string;
        helperText: string;
    }, "flex flex-col gap-2", {
        size: {
            xs: {
                label: string;
            };
            sm: {
                label: string;
            };
            md: {
                label: string;
            };
            lg: {
                label: string;
            };
        };
        invalid: {
            true: {
                label: string;
            };
        };
        required: {
            true: {
                label: string;
            };
        };
    }, {
        label: string;
        errorText: string;
        helperText: string;
    }, import("tailwind-variants").TVReturnType<{
        size: {
            xs: {
                label: string;
            };
            sm: {
                label: string;
            };
            md: {
                label: string;
            };
            lg: {
                label: string;
            };
        };
        invalid: {
            true: {
                label: string;
            };
        };
        required: {
            true: {
                label: string;
            };
        };
    }, {
        label: string;
        errorText: string;
        helperText: string;
    }, "flex flex-col gap-2", unknown, unknown, undefined>>> & import("react-tvcx").UnstyledProps & import("react").RefAttributes<HTMLTextAreaElement>>;
}>;
export default Field;
//# sourceMappingURL=field.d.ts.map