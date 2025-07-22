import React from "react";
import { ComposedTVProps } from "react-tvcx";
export declare const button: import("tailwind-variants").TVReturnType<{
    size: {
        xs: string;
        sm: string;
        md: string;
        lg: string;
    };
    variant: {
        default: string;
        outlined: string;
        ghost: string;
        light: string;
    };
    color: {
        default: string;
        primary: string;
        accent: string;
        info: string;
        success: string;
        warning: string;
        error: string;
    };
    shape: {
        normal: string;
        pill: string;
        circle: string;
        square: string;
    };
}, undefined, string[], {
    size: {
        xs: string;
        sm: string;
        md: string;
        lg: string;
    };
    variant: {
        default: string;
        outlined: string;
        ghost: string;
        light: string;
    };
    color: {
        default: string;
        primary: string;
        accent: string;
        info: string;
        success: string;
        warning: string;
        error: string;
    };
    shape: {
        normal: string;
        pill: string;
        circle: string;
        square: string;
    };
}, undefined, import("tailwind-variants").TVReturnType<{
    size: {
        xs: string;
        sm: string;
        md: string;
        lg: string;
    };
    variant: {
        default: string;
        outlined: string;
        ghost: string;
        light: string;
    };
    color: {
        default: string;
        primary: string;
        accent: string;
        info: string;
        success: string;
        warning: string;
        error: string;
    };
    shape: {
        normal: string;
        pill: string;
        circle: string;
        square: string;
    };
}, undefined, string[], unknown, unknown, undefined>>;
export interface ButtonBaseProps {
    loading?: boolean;
    loadingText?: string;
    leftIcon?: React.ReactElement | React.ReactNode;
    rightIcon?: React.ReactElement | React.ReactNode;
    loadingVariant?: "default" | "transparent";
}
export interface ButtonProps extends ButtonBaseProps, ComposedTVProps<typeof button> {
}
export declare const Button: import("react-tvcx").ForwardRefExoticComponentWithAs<"button", ButtonProps>;
//# sourceMappingURL=button.d.ts.map