import { createToaster } from "@ark-ui/react";
import { FC } from "react";
export declare const toast: import("tailwind-variants").TVReturnType<{
    [key: string]: {
        [key: string]: import("tailwind-variants").ClassValue | {
            base?: import("tailwind-variants").ClassValue;
            title?: import("tailwind-variants").ClassValue;
            description?: import("tailwind-variants").ClassValue;
            container?: import("tailwind-variants").ClassValue;
            dismiss?: import("tailwind-variants").ClassValue;
        };
    };
} | {
    [x: string]: {
        [x: string]: import("tailwind-variants").ClassValue | {
            base?: import("tailwind-variants").ClassValue;
            title?: import("tailwind-variants").ClassValue;
            description?: import("tailwind-variants").ClassValue;
            container?: import("tailwind-variants").ClassValue;
            dismiss?: import("tailwind-variants").ClassValue;
        };
    };
} | {}, {
    container: string;
    title: string;
    description: string;
    dismiss: string;
}, string[], {
    [key: string]: {
        [key: string]: import("tailwind-variants").ClassValue | {
            base?: import("tailwind-variants").ClassValue;
            title?: import("tailwind-variants").ClassValue;
            description?: import("tailwind-variants").ClassValue;
            container?: import("tailwind-variants").ClassValue;
            dismiss?: import("tailwind-variants").ClassValue;
        };
    };
} | {}, {
    container: string;
    title: string;
    description: string;
    dismiss: string;
}, import("tailwind-variants").TVReturnType<unknown, {
    container: string;
    title: string;
    description: string;
    dismiss: string;
}, string[], unknown, unknown, undefined>>;
export interface ToasterProps {
    toaster: ReturnType<typeof createToaster>;
}
export declare const Toaster: FC<ToasterProps>;
//# sourceMappingURL=toast.d.ts.map