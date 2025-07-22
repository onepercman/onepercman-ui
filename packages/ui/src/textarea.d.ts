import React from "react";
import { TextareaAutosizeProps } from "react-textarea-autosize";
import { ComposedTVProps } from "react-tvcx";
export declare const textarea: import("tailwind-variants").TVReturnType<{
    size: {
        xs: string;
        sm: string;
        md: string;
        lg: string;
    };
    variant: {
        filled: string;
        outlined: string;
    };
    invalid: {
        true: {
            base: string;
            label: string;
        };
    };
    autoSize: {
        true: {
            textarea: string;
        };
    };
}, {
    textarea: string[];
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
    };
    invalid: {
        true: {
            base: string;
            label: string;
        };
    };
    autoSize: {
        true: {
            textarea: string;
        };
    };
}, {
    textarea: string[];
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
    };
    invalid: {
        true: {
            base: string;
            label: string;
        };
    };
    autoSize: {
        true: {
            textarea: string;
        };
    };
}, {
    textarea: string[];
    addonBefore: string;
    addonAfter: string;
}, string[], unknown, unknown, undefined>>;
export interface TextareaProps<AutoSize extends boolean = true> extends ComposedTVProps<typeof textarea> {
    autoSize?: AutoSize;
    prefix?: React.ReactNode | React.ReactElement;
    suffix?: React.ReactNode | React.ReactElement;
    addonBefore?: React.ReactNode | React.ReactElement;
    addonAfter?: React.ReactNode | React.ReactElement;
    clearable?: boolean;
    transform?(value: string): string;
    autoSizeOptions?: AutoSize extends true ? TextareaAutosizeProps : undefined;
}
export declare const Textarea: import("react-tvcx").ForwardRefExoticComponentWithAs<"textarea", TextareaProps<true>>;
//# sourceMappingURL=textarea.d.ts.map