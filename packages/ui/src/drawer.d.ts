import React from "react";
import { ComponentMetadata } from "react-tvcx";
import { Drawer } from "vaul";
export type DrawerProps = React.ComponentPropsWithoutRef<typeof Drawer.Root>;
export declare const drawer: import("tailwind-variants").TVReturnType<{
    [key: string]: {
        [key: string]: import("tailwind-variants").ClassValue | {
            title?: import("tailwind-variants").ClassValue;
            content?: import("tailwind-variants").ClassValue;
            closeTrigger?: import("tailwind-variants").ClassValue;
            description?: import("tailwind-variants").ClassValue;
            overlay?: import("tailwind-variants").ClassValue;
            handle?: import("tailwind-variants").ClassValue;
        };
    };
} | {
    [x: string]: {
        [x: string]: import("tailwind-variants").ClassValue | {
            title?: import("tailwind-variants").ClassValue;
            content?: import("tailwind-variants").ClassValue;
            closeTrigger?: import("tailwind-variants").ClassValue;
            description?: import("tailwind-variants").ClassValue;
            overlay?: import("tailwind-variants").ClassValue;
            handle?: import("tailwind-variants").ClassValue;
        };
    };
} | {}, {
    overlay: string;
    handle: string;
    closeTrigger: string;
    content: string[];
    title: string;
    description: string;
}, undefined, {
    [key: string]: {
        [key: string]: import("tailwind-variants").ClassValue | {
            title?: import("tailwind-variants").ClassValue;
            content?: import("tailwind-variants").ClassValue;
            closeTrigger?: import("tailwind-variants").ClassValue;
            description?: import("tailwind-variants").ClassValue;
            overlay?: import("tailwind-variants").ClassValue;
            handle?: import("tailwind-variants").ClassValue;
        };
    };
} | {}, {
    overlay: string;
    handle: string;
    closeTrigger: string;
    content: string[];
    title: string;
    description: string;
}, import("tailwind-variants").TVReturnType<unknown, {
    overlay: string;
    handle: string;
    closeTrigger: string;
    content: string[];
    title: string;
    description: string;
}, undefined, unknown, unknown, undefined>>;
export declare const Component: ComponentMetadata;
//# sourceMappingURL=drawer.d.ts.map