import React from "react";
import { ComposedTVProps } from "react-tvcx";
export declare const input: import("tailwind-variants").TVReturnType<{
    size: {
        xs: string;
        sm: string;
        md: string;
        lg: string;
    };
    variant: {
        filled: string;
        outlined: string;
        blur: string;
    };
    invalid: {
        true: {
            base: string;
        };
    };
}, {
    input: string[];
    addonBefore: string;
    addonAfter: string;
}, string[], {
    size: {
        xs: string;
        sm: string;
        md: string;
        lg: string;
    };
    variant: {
        filled: string;
        outlined: string;
        blur: string;
    };
    invalid: {
        true: {
            base: string;
        };
    };
}, {
    input: string[];
    addonBefore: string;
    addonAfter: string;
}, import("tailwind-variants").TVReturnType<{
    size: {
        xs: string;
        sm: string;
        md: string;
        lg: string;
    };
    variant: {
        filled: string;
        outlined: string;
        blur: string;
    };
    invalid: {
        true: {
            base: string;
        };
    };
}, {
    input: string[];
    addonBefore: string;
    addonAfter: string;
}, string[], unknown, unknown, undefined>>;
export interface InputFieldProps {
    prefix?: React.ReactNode | React.ReactElement;
    suffix?: React.ReactNode | React.ReactElement;
    addonBefore?: React.ReactNode | React.ReactElement;
    addonAfter?: React.ReactNode | React.ReactElement;
    clearable?: boolean;
    transform?(value: string): string;
}
export interface InputProps extends InputFieldProps, ComposedTVProps<typeof input> {
}
export declare const Input: import("react-tvcx").ForwardRefExoticComponentWithAs<"input", InputProps>;
export default Input;
//# sourceMappingURL=input.d.ts.map