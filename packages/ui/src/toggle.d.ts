import { Toggle as BaseToggle } from "@ark-ui/react";
import { ComponentMetadata, ComposedTVProps } from "react-tvcx";
export declare const toggle: import("tailwind-variants").TVReturnType<{
    [key: string]: {
        [key: string]: import("tailwind-variants").ClassValue | {
            base?: import("tailwind-variants").ClassValue;
        };
    };
} | {
    [x: string]: {
        [x: string]: import("tailwind-variants").ClassValue | {
            base?: import("tailwind-variants").ClassValue;
        };
    };
} | {}, {}, "", {
    [key: string]: {
        [key: string]: import("tailwind-variants").ClassValue | {
            base?: import("tailwind-variants").ClassValue;
        };
    };
} | {}, {}, import("tailwind-variants").TVReturnType<unknown, {}, "", unknown, unknown, undefined>>;
export interface ToggleProps extends ComposedTVProps<typeof toggle> {
}
export interface Toggle extends ComponentMetadata {
    (props: ToggleProps): React.ReactElement | null;
}
export declare const Toggle: import("react").ForwardRefExoticComponent<Omit<BaseToggle.RootProps & import("react").RefAttributes<HTMLButtonElement>, "ref"> & import("tailwind-variants").VariantProps<import("tailwind-variants").TVReturnType<{
    [key: string]: {
        [key: string]: import("tailwind-variants").ClassValue | {
            base?: import("tailwind-variants").ClassValue;
        };
    };
} | {
    [x: string]: {
        [x: string]: import("tailwind-variants").ClassValue | {
            base?: import("tailwind-variants").ClassValue;
        };
    };
} | {}, {}, "", {
    [key: string]: {
        [key: string]: import("tailwind-variants").ClassValue | {
            base?: import("tailwind-variants").ClassValue;
        };
    };
} | {}, {}, import("tailwind-variants").TVReturnType<unknown, {}, "", unknown, unknown, undefined>>> & {
    classNames?: Partial<Record<"base", any>> | undefined;
} & import("react-tvcx").UnstyledProps & import("react").RefAttributes<HTMLButtonElement>> & {
    Root: import("react").ForwardRefExoticComponent<Omit<BaseToggle.RootProps & import("react").RefAttributes<HTMLButtonElement>, "ref"> & import("tailwind-variants").VariantProps<import("tailwind-variants").TVReturnType<{
        [key: string]: {
            [key: string]: import("tailwind-variants").ClassValue | {
                base?: import("tailwind-variants").ClassValue;
            };
        };
    } | {
        [x: string]: {
            [x: string]: import("tailwind-variants").ClassValue | {
                base?: import("tailwind-variants").ClassValue;
            };
        };
    } | {}, {}, "", {
        [key: string]: {
            [key: string]: import("tailwind-variants").ClassValue | {
                base?: import("tailwind-variants").ClassValue;
            };
        };
    } | {}, {}, import("tailwind-variants").TVReturnType<unknown, {}, "", unknown, unknown, undefined>>> & {
        classNames?: Partial<Record<"base", any>> | undefined;
    } & import("react-tvcx").UnstyledProps & import("react").RefAttributes<HTMLButtonElement>>;
    Context: import("react").ForwardRefExoticComponent<BaseToggle.ContextProps & import("tailwind-variants").VariantProps<import("tailwind-variants").TVReturnType<{
        [key: string]: {
            [key: string]: import("tailwind-variants").ClassValue | {
                base?: import("tailwind-variants").ClassValue;
            };
        };
    } | {
        [x: string]: {
            [x: string]: import("tailwind-variants").ClassValue | {
                base?: import("tailwind-variants").ClassValue;
            };
        };
    } | {}, {}, "", {
        [key: string]: {
            [key: string]: import("tailwind-variants").ClassValue | {
                base?: import("tailwind-variants").ClassValue;
            };
        };
    } | {}, {}, import("tailwind-variants").TVReturnType<unknown, {}, "", unknown, unknown, undefined>>> & import("react-tvcx").UnstyledProps & import("react").RefAttributes<never>>;
    Indicator: import("react").ForwardRefExoticComponent<Omit<BaseToggle.IndicatorProps & import("react").RefAttributes<HTMLDivElement>, "ref"> & import("tailwind-variants").VariantProps<import("tailwind-variants").TVReturnType<{
        [key: string]: {
            [key: string]: import("tailwind-variants").ClassValue | {
                base?: import("tailwind-variants").ClassValue;
            };
        };
    } | {
        [x: string]: {
            [x: string]: import("tailwind-variants").ClassValue | {
                base?: import("tailwind-variants").ClassValue;
            };
        };
    } | {}, {}, "", {
        [key: string]: {
            [key: string]: import("tailwind-variants").ClassValue | {
                base?: import("tailwind-variants").ClassValue;
            };
        };
    } | {}, {}, import("tailwind-variants").TVReturnType<unknown, {}, "", unknown, unknown, undefined>>> & import("react-tvcx").UnstyledProps & import("react").RefAttributes<HTMLDivElement>>;
} & Readonly<{
    Root: import("react").ForwardRefExoticComponent<Omit<BaseToggle.RootProps & import("react").RefAttributes<HTMLButtonElement>, "ref"> & import("tailwind-variants").VariantProps<import("tailwind-variants").TVReturnType<{
        [key: string]: {
            [key: string]: import("tailwind-variants").ClassValue | {
                base?: import("tailwind-variants").ClassValue;
            };
        };
    } | {
        [x: string]: {
            [x: string]: import("tailwind-variants").ClassValue | {
                base?: import("tailwind-variants").ClassValue;
            };
        };
    } | {}, {}, "", {
        [key: string]: {
            [key: string]: import("tailwind-variants").ClassValue | {
                base?: import("tailwind-variants").ClassValue;
            };
        };
    } | {}, {}, import("tailwind-variants").TVReturnType<unknown, {}, "", unknown, unknown, undefined>>> & {
        classNames?: Partial<Record<"base", any>> | undefined;
    } & import("react-tvcx").UnstyledProps & import("react").RefAttributes<HTMLButtonElement>>;
    Context: import("react").ForwardRefExoticComponent<BaseToggle.ContextProps & import("tailwind-variants").VariantProps<import("tailwind-variants").TVReturnType<{
        [key: string]: {
            [key: string]: import("tailwind-variants").ClassValue | {
                base?: import("tailwind-variants").ClassValue;
            };
        };
    } | {
        [x: string]: {
            [x: string]: import("tailwind-variants").ClassValue | {
                base?: import("tailwind-variants").ClassValue;
            };
        };
    } | {}, {}, "", {
        [key: string]: {
            [key: string]: import("tailwind-variants").ClassValue | {
                base?: import("tailwind-variants").ClassValue;
            };
        };
    } | {}, {}, import("tailwind-variants").TVReturnType<unknown, {}, "", unknown, unknown, undefined>>> & import("react-tvcx").UnstyledProps & import("react").RefAttributes<never>>;
    Indicator: import("react").ForwardRefExoticComponent<Omit<BaseToggle.IndicatorProps & import("react").RefAttributes<HTMLDivElement>, "ref"> & import("tailwind-variants").VariantProps<import("tailwind-variants").TVReturnType<{
        [key: string]: {
            [key: string]: import("tailwind-variants").ClassValue | {
                base?: import("tailwind-variants").ClassValue;
            };
        };
    } | {
        [x: string]: {
            [x: string]: import("tailwind-variants").ClassValue | {
                base?: import("tailwind-variants").ClassValue;
            };
        };
    } | {}, {}, "", {
        [key: string]: {
            [key: string]: import("tailwind-variants").ClassValue | {
                base?: import("tailwind-variants").ClassValue;
            };
        };
    } | {}, {}, import("tailwind-variants").TVReturnType<unknown, {}, "", unknown, unknown, undefined>>> & import("react-tvcx").UnstyledProps & import("react").RefAttributes<HTMLDivElement>>;
}>;
//# sourceMappingURL=toggle.d.ts.map