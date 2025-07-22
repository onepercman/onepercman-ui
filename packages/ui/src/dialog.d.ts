import { Dialog as BaseDialog, DialogRootProps } from "@ark-ui/react";
import React from "react";
import { ComponentMetadata, ComposedTVProps } from "react-tvcx";
import { Button } from "./button";
export declare const dialog: import("tailwind-variants").TVReturnType<{
    size: {
        sm: {
            content: string;
        };
        md: {
            content: string;
        };
        lg: {
            content: string;
        };
    };
    placement: {
        center: {
            content: string;
        };
        topCenter: {
            content: string;
        };
        left: {
            content: string;
        };
        right: {
            content: string;
        };
    };
    scrollBehavior: {
        inside: string;
        outside: string;
    };
}, {
    backdrop: string[];
    positioner: string;
    content: string[];
    title: string;
    closeTrigger: string;
    description: string;
}, undefined, {
    size: {
        sm: {
            content: string;
        };
        md: {
            content: string;
        };
        lg: {
            content: string;
        };
    };
    placement: {
        center: {
            content: string;
        };
        topCenter: {
            content: string;
        };
        left: {
            content: string;
        };
        right: {
            content: string;
        };
    };
    scrollBehavior: {
        inside: string;
        outside: string;
    };
}, {
    backdrop: string[];
    positioner: string;
    content: string[];
    title: string;
    closeTrigger: string;
    description: string;
}, import("tailwind-variants").TVReturnType<{
    size: {
        sm: {
            content: string;
        };
        md: {
            content: string;
        };
        lg: {
            content: string;
        };
    };
    placement: {
        center: {
            content: string;
        };
        topCenter: {
            content: string;
        };
        left: {
            content: string;
        };
        right: {
            content: string;
        };
    };
    scrollBehavior: {
        inside: string;
        outside: string;
    };
}, {
    backdrop: string[];
    positioner: string;
    content: string[];
    title: string;
    closeTrigger: string;
    description: string;
}, undefined, unknown, unknown, undefined>>;
declare function open({ children, onOpenChange, ...props }: DialogRootProps): {
    close(): void;
};
declare function confirm({ question, confirmProps, cancelProps, ...props }: DialogRootProps & {
    question?: React.ReactNode;
    confirmProps?: React.ComponentPropsWithoutRef<typeof Button>;
    cancelProps?: React.ComponentPropsWithoutRef<typeof Button>;
}): Promise<unknown>;
export interface DialogProps extends DialogRootProps, ComposedTVProps<typeof dialog> {
}
export interface Dialog extends ComponentMetadata {
    (props: DialogProps): React.ReactElement | null;
}
export declare const Dialog: React.ForwardRefExoticComponent<BaseDialog.RootProps & import("tailwind-variants").VariantProps<import("tailwind-variants").TVReturnType<{
    size: {
        sm: {
            content: string;
        };
        md: {
            content: string;
        };
        lg: {
            content: string;
        };
    };
    placement: {
        center: {
            content: string;
        };
        topCenter: {
            content: string;
        };
        left: {
            content: string;
        };
        right: {
            content: string;
        };
    };
    scrollBehavior: {
        inside: string;
        outside: string;
    };
}, {
    backdrop: string[];
    positioner: string;
    content: string[];
    title: string;
    closeTrigger: string;
    description: string;
}, undefined, {
    size: {
        sm: {
            content: string;
        };
        md: {
            content: string;
        };
        lg: {
            content: string;
        };
    };
    placement: {
        center: {
            content: string;
        };
        topCenter: {
            content: string;
        };
        left: {
            content: string;
        };
        right: {
            content: string;
        };
    };
    scrollBehavior: {
        inside: string;
        outside: string;
    };
}, {
    backdrop: string[];
    positioner: string;
    content: string[];
    title: string;
    closeTrigger: string;
    description: string;
}, import("tailwind-variants").TVReturnType<{
    size: {
        sm: {
            content: string;
        };
        md: {
            content: string;
        };
        lg: {
            content: string;
        };
    };
    placement: {
        center: {
            content: string;
        };
        topCenter: {
            content: string;
        };
        left: {
            content: string;
        };
        right: {
            content: string;
        };
    };
    scrollBehavior: {
        inside: string;
        outside: string;
    };
}, {
    backdrop: string[];
    positioner: string;
    content: string[];
    title: string;
    closeTrigger: string;
    description: string;
}, undefined, unknown, unknown, undefined>>> & {
    classNames?: Partial<Record<"title" | "content" | "positioner" | "closeTrigger" | "description" | "backdrop", any>> | undefined;
} & import("react-tvcx").UnstyledProps & React.RefAttributes<never>> & {
    Root: React.ForwardRefExoticComponent<BaseDialog.RootProps & import("tailwind-variants").VariantProps<import("tailwind-variants").TVReturnType<{
        size: {
            sm: {
                content: string;
            };
            md: {
                content: string;
            };
            lg: {
                content: string;
            };
        };
        placement: {
            center: {
                content: string;
            };
            topCenter: {
                content: string;
            };
            left: {
                content: string;
            };
            right: {
                content: string;
            };
        };
        scrollBehavior: {
            inside: string;
            outside: string;
        };
    }, {
        backdrop: string[];
        positioner: string;
        content: string[];
        title: string;
        closeTrigger: string;
        description: string;
    }, undefined, {
        size: {
            sm: {
                content: string;
            };
            md: {
                content: string;
            };
            lg: {
                content: string;
            };
        };
        placement: {
            center: {
                content: string;
            };
            topCenter: {
                content: string;
            };
            left: {
                content: string;
            };
            right: {
                content: string;
            };
        };
        scrollBehavior: {
            inside: string;
            outside: string;
        };
    }, {
        backdrop: string[];
        positioner: string;
        content: string[];
        title: string;
        closeTrigger: string;
        description: string;
    }, import("tailwind-variants").TVReturnType<{
        size: {
            sm: {
                content: string;
            };
            md: {
                content: string;
            };
            lg: {
                content: string;
            };
        };
        placement: {
            center: {
                content: string;
            };
            topCenter: {
                content: string;
            };
            left: {
                content: string;
            };
            right: {
                content: string;
            };
        };
        scrollBehavior: {
            inside: string;
            outside: string;
        };
    }, {
        backdrop: string[];
        positioner: string;
        content: string[];
        title: string;
        closeTrigger: string;
        description: string;
    }, undefined, unknown, unknown, undefined>>> & {
        classNames?: Partial<Record<"title" | "content" | "positioner" | "closeTrigger" | "description" | "backdrop", any>> | undefined;
    } & import("react-tvcx").UnstyledProps & React.RefAttributes<never>>;
    RootProvider: React.ForwardRefExoticComponent<BaseDialog.RootProviderProps & import("tailwind-variants").VariantProps<import("tailwind-variants").TVReturnType<{
        size: {
            sm: {
                content: string;
            };
            md: {
                content: string;
            };
            lg: {
                content: string;
            };
        };
        placement: {
            center: {
                content: string;
            };
            topCenter: {
                content: string;
            };
            left: {
                content: string;
            };
            right: {
                content: string;
            };
        };
        scrollBehavior: {
            inside: string;
            outside: string;
        };
    }, {
        backdrop: string[];
        positioner: string;
        content: string[];
        title: string;
        closeTrigger: string;
        description: string;
    }, undefined, {
        size: {
            sm: {
                content: string;
            };
            md: {
                content: string;
            };
            lg: {
                content: string;
            };
        };
        placement: {
            center: {
                content: string;
            };
            topCenter: {
                content: string;
            };
            left: {
                content: string;
            };
            right: {
                content: string;
            };
        };
        scrollBehavior: {
            inside: string;
            outside: string;
        };
    }, {
        backdrop: string[];
        positioner: string;
        content: string[];
        title: string;
        closeTrigger: string;
        description: string;
    }, import("tailwind-variants").TVReturnType<{
        size: {
            sm: {
                content: string;
            };
            md: {
                content: string;
            };
            lg: {
                content: string;
            };
        };
        placement: {
            center: {
                content: string;
            };
            topCenter: {
                content: string;
            };
            left: {
                content: string;
            };
            right: {
                content: string;
            };
        };
        scrollBehavior: {
            inside: string;
            outside: string;
        };
    }, {
        backdrop: string[];
        positioner: string;
        content: string[];
        title: string;
        closeTrigger: string;
        description: string;
    }, undefined, unknown, unknown, undefined>>> & import("react-tvcx").UnstyledProps & React.RefAttributes<never>>;
    Backdrop: React.ForwardRefExoticComponent<Omit<BaseDialog.BackdropProps & React.RefAttributes<HTMLDivElement>, "ref"> & import("tailwind-variants").VariantProps<import("tailwind-variants").TVReturnType<{
        size: {
            sm: {
                content: string;
            };
            md: {
                content: string;
            };
            lg: {
                content: string;
            };
        };
        placement: {
            center: {
                content: string;
            };
            topCenter: {
                content: string;
            };
            left: {
                content: string;
            };
            right: {
                content: string;
            };
        };
        scrollBehavior: {
            inside: string;
            outside: string;
        };
    }, {
        backdrop: string[];
        positioner: string;
        content: string[];
        title: string;
        closeTrigger: string;
        description: string;
    }, undefined, {
        size: {
            sm: {
                content: string;
            };
            md: {
                content: string;
            };
            lg: {
                content: string;
            };
        };
        placement: {
            center: {
                content: string;
            };
            topCenter: {
                content: string;
            };
            left: {
                content: string;
            };
            right: {
                content: string;
            };
        };
        scrollBehavior: {
            inside: string;
            outside: string;
        };
    }, {
        backdrop: string[];
        positioner: string;
        content: string[];
        title: string;
        closeTrigger: string;
        description: string;
    }, import("tailwind-variants").TVReturnType<{
        size: {
            sm: {
                content: string;
            };
            md: {
                content: string;
            };
            lg: {
                content: string;
            };
        };
        placement: {
            center: {
                content: string;
            };
            topCenter: {
                content: string;
            };
            left: {
                content: string;
            };
            right: {
                content: string;
            };
        };
        scrollBehavior: {
            inside: string;
            outside: string;
        };
    }, {
        backdrop: string[];
        positioner: string;
        content: string[];
        title: string;
        closeTrigger: string;
        description: string;
    }, undefined, unknown, unknown, undefined>>> & import("react-tvcx").UnstyledProps & React.RefAttributes<HTMLDivElement>>;
    Context: React.ForwardRefExoticComponent<BaseDialog.ContextProps & import("tailwind-variants").VariantProps<import("tailwind-variants").TVReturnType<{
        size: {
            sm: {
                content: string;
            };
            md: {
                content: string;
            };
            lg: {
                content: string;
            };
        };
        placement: {
            center: {
                content: string;
            };
            topCenter: {
                content: string;
            };
            left: {
                content: string;
            };
            right: {
                content: string;
            };
        };
        scrollBehavior: {
            inside: string;
            outside: string;
        };
    }, {
        backdrop: string[];
        positioner: string;
        content: string[];
        title: string;
        closeTrigger: string;
        description: string;
    }, undefined, {
        size: {
            sm: {
                content: string;
            };
            md: {
                content: string;
            };
            lg: {
                content: string;
            };
        };
        placement: {
            center: {
                content: string;
            };
            topCenter: {
                content: string;
            };
            left: {
                content: string;
            };
            right: {
                content: string;
            };
        };
        scrollBehavior: {
            inside: string;
            outside: string;
        };
    }, {
        backdrop: string[];
        positioner: string;
        content: string[];
        title: string;
        closeTrigger: string;
        description: string;
    }, import("tailwind-variants").TVReturnType<{
        size: {
            sm: {
                content: string;
            };
            md: {
                content: string;
            };
            lg: {
                content: string;
            };
        };
        placement: {
            center: {
                content: string;
            };
            topCenter: {
                content: string;
            };
            left: {
                content: string;
            };
            right: {
                content: string;
            };
        };
        scrollBehavior: {
            inside: string;
            outside: string;
        };
    }, {
        backdrop: string[];
        positioner: string;
        content: string[];
        title: string;
        closeTrigger: string;
        description: string;
    }, undefined, unknown, unknown, undefined>>> & import("react-tvcx").UnstyledProps & React.RefAttributes<never>>;
    Description: React.ForwardRefExoticComponent<Omit<BaseDialog.DescriptionProps & React.RefAttributes<HTMLDivElement>, "ref"> & import("tailwind-variants").VariantProps<import("tailwind-variants").TVReturnType<{
        size: {
            sm: {
                content: string;
            };
            md: {
                content: string;
            };
            lg: {
                content: string;
            };
        };
        placement: {
            center: {
                content: string;
            };
            topCenter: {
                content: string;
            };
            left: {
                content: string;
            };
            right: {
                content: string;
            };
        };
        scrollBehavior: {
            inside: string;
            outside: string;
        };
    }, {
        backdrop: string[];
        positioner: string;
        content: string[];
        title: string;
        closeTrigger: string;
        description: string;
    }, undefined, {
        size: {
            sm: {
                content: string;
            };
            md: {
                content: string;
            };
            lg: {
                content: string;
            };
        };
        placement: {
            center: {
                content: string;
            };
            topCenter: {
                content: string;
            };
            left: {
                content: string;
            };
            right: {
                content: string;
            };
        };
        scrollBehavior: {
            inside: string;
            outside: string;
        };
    }, {
        backdrop: string[];
        positioner: string;
        content: string[];
        title: string;
        closeTrigger: string;
        description: string;
    }, import("tailwind-variants").TVReturnType<{
        size: {
            sm: {
                content: string;
            };
            md: {
                content: string;
            };
            lg: {
                content: string;
            };
        };
        placement: {
            center: {
                content: string;
            };
            topCenter: {
                content: string;
            };
            left: {
                content: string;
            };
            right: {
                content: string;
            };
        };
        scrollBehavior: {
            inside: string;
            outside: string;
        };
    }, {
        backdrop: string[];
        positioner: string;
        content: string[];
        title: string;
        closeTrigger: string;
        description: string;
    }, undefined, unknown, unknown, undefined>>> & import("react-tvcx").UnstyledProps & React.RefAttributes<HTMLDivElement>>;
    Positioner: React.ForwardRefExoticComponent<Omit<BaseDialog.PositionerProps & React.RefAttributes<HTMLDivElement>, "ref"> & import("tailwind-variants").VariantProps<import("tailwind-variants").TVReturnType<{
        size: {
            sm: {
                content: string;
            };
            md: {
                content: string;
            };
            lg: {
                content: string;
            };
        };
        placement: {
            center: {
                content: string;
            };
            topCenter: {
                content: string;
            };
            left: {
                content: string;
            };
            right: {
                content: string;
            };
        };
        scrollBehavior: {
            inside: string;
            outside: string;
        };
    }, {
        backdrop: string[];
        positioner: string;
        content: string[];
        title: string;
        closeTrigger: string;
        description: string;
    }, undefined, {
        size: {
            sm: {
                content: string;
            };
            md: {
                content: string;
            };
            lg: {
                content: string;
            };
        };
        placement: {
            center: {
                content: string;
            };
            topCenter: {
                content: string;
            };
            left: {
                content: string;
            };
            right: {
                content: string;
            };
        };
        scrollBehavior: {
            inside: string;
            outside: string;
        };
    }, {
        backdrop: string[];
        positioner: string;
        content: string[];
        title: string;
        closeTrigger: string;
        description: string;
    }, import("tailwind-variants").TVReturnType<{
        size: {
            sm: {
                content: string;
            };
            md: {
                content: string;
            };
            lg: {
                content: string;
            };
        };
        placement: {
            center: {
                content: string;
            };
            topCenter: {
                content: string;
            };
            left: {
                content: string;
            };
            right: {
                content: string;
            };
        };
        scrollBehavior: {
            inside: string;
            outside: string;
        };
    }, {
        backdrop: string[];
        positioner: string;
        content: string[];
        title: string;
        closeTrigger: string;
        description: string;
    }, undefined, unknown, unknown, undefined>>> & import("react-tvcx").UnstyledProps & React.RefAttributes<HTMLDivElement>>;
    Title: React.ForwardRefExoticComponent<Omit<BaseDialog.TitleProps & React.RefAttributes<HTMLHeadingElement>, "ref"> & import("tailwind-variants").VariantProps<import("tailwind-variants").TVReturnType<{
        size: {
            sm: {
                content: string;
            };
            md: {
                content: string;
            };
            lg: {
                content: string;
            };
        };
        placement: {
            center: {
                content: string;
            };
            topCenter: {
                content: string;
            };
            left: {
                content: string;
            };
            right: {
                content: string;
            };
        };
        scrollBehavior: {
            inside: string;
            outside: string;
        };
    }, {
        backdrop: string[];
        positioner: string;
        content: string[];
        title: string;
        closeTrigger: string;
        description: string;
    }, undefined, {
        size: {
            sm: {
                content: string;
            };
            md: {
                content: string;
            };
            lg: {
                content: string;
            };
        };
        placement: {
            center: {
                content: string;
            };
            topCenter: {
                content: string;
            };
            left: {
                content: string;
            };
            right: {
                content: string;
            };
        };
        scrollBehavior: {
            inside: string;
            outside: string;
        };
    }, {
        backdrop: string[];
        positioner: string;
        content: string[];
        title: string;
        closeTrigger: string;
        description: string;
    }, import("tailwind-variants").TVReturnType<{
        size: {
            sm: {
                content: string;
            };
            md: {
                content: string;
            };
            lg: {
                content: string;
            };
        };
        placement: {
            center: {
                content: string;
            };
            topCenter: {
                content: string;
            };
            left: {
                content: string;
            };
            right: {
                content: string;
            };
        };
        scrollBehavior: {
            inside: string;
            outside: string;
        };
    }, {
        backdrop: string[];
        positioner: string;
        content: string[];
        title: string;
        closeTrigger: string;
        description: string;
    }, undefined, unknown, unknown, undefined>>> & import("react-tvcx").UnstyledProps & React.RefAttributes<HTMLHeadingElement>>;
    Trigger: React.ForwardRefExoticComponent<Omit<BaseDialog.TriggerProps & React.RefAttributes<HTMLButtonElement>, "ref"> & import("tailwind-variants").VariantProps<import("tailwind-variants").TVReturnType<{
        size: {
            sm: {
                content: string;
            };
            md: {
                content: string;
            };
            lg: {
                content: string;
            };
        };
        placement: {
            center: {
                content: string;
            };
            topCenter: {
                content: string;
            };
            left: {
                content: string;
            };
            right: {
                content: string;
            };
        };
        scrollBehavior: {
            inside: string;
            outside: string;
        };
    }, {
        backdrop: string[];
        positioner: string;
        content: string[];
        title: string;
        closeTrigger: string;
        description: string;
    }, undefined, {
        size: {
            sm: {
                content: string;
            };
            md: {
                content: string;
            };
            lg: {
                content: string;
            };
        };
        placement: {
            center: {
                content: string;
            };
            topCenter: {
                content: string;
            };
            left: {
                content: string;
            };
            right: {
                content: string;
            };
        };
        scrollBehavior: {
            inside: string;
            outside: string;
        };
    }, {
        backdrop: string[];
        positioner: string;
        content: string[];
        title: string;
        closeTrigger: string;
        description: string;
    }, import("tailwind-variants").TVReturnType<{
        size: {
            sm: {
                content: string;
            };
            md: {
                content: string;
            };
            lg: {
                content: string;
            };
        };
        placement: {
            center: {
                content: string;
            };
            topCenter: {
                content: string;
            };
            left: {
                content: string;
            };
            right: {
                content: string;
            };
        };
        scrollBehavior: {
            inside: string;
            outside: string;
        };
    }, {
        backdrop: string[];
        positioner: string;
        content: string[];
        title: string;
        closeTrigger: string;
        description: string;
    }, undefined, unknown, unknown, undefined>>> & import("react-tvcx").UnstyledProps & React.RefAttributes<HTMLButtonElement>>;
    Content: React.ForwardRefExoticComponent<Omit<Omit<BaseDialog.ContentProps & React.RefAttributes<HTMLDivElement>, "ref"> & import("tailwind-variants").VariantProps<import("tailwind-variants").TVReturnType<{
        size: {
            sm: {
                content: string;
            };
            md: {
                content: string;
            };
            lg: {
                content: string;
            };
        };
        placement: {
            center: {
                content: string;
            };
            topCenter: {
                content: string;
            };
            left: {
                content: string;
            };
            right: {
                content: string;
            };
        };
        scrollBehavior: {
            inside: string;
            outside: string;
        };
    }, {
        backdrop: string[];
        positioner: string;
        content: string[];
        title: string;
        closeTrigger: string;
        description: string;
    }, undefined, {
        size: {
            sm: {
                content: string;
            };
            md: {
                content: string;
            };
            lg: {
                content: string;
            };
        };
        placement: {
            center: {
                content: string;
            };
            topCenter: {
                content: string;
            };
            left: {
                content: string;
            };
            right: {
                content: string;
            };
        };
        scrollBehavior: {
            inside: string;
            outside: string;
        };
    }, {
        backdrop: string[];
        positioner: string;
        content: string[];
        title: string;
        closeTrigger: string;
        description: string;
    }, import("tailwind-variants").TVReturnType<{
        size: {
            sm: {
                content: string;
            };
            md: {
                content: string;
            };
            lg: {
                content: string;
            };
        };
        placement: {
            center: {
                content: string;
            };
            topCenter: {
                content: string;
            };
            left: {
                content: string;
            };
            right: {
                content: string;
            };
        };
        scrollBehavior: {
            inside: string;
            outside: string;
        };
    }, {
        backdrop: string[];
        positioner: string;
        content: string[];
        title: string;
        closeTrigger: string;
        description: string;
    }, undefined, unknown, unknown, undefined>>> & import("react-tvcx").UnstyledProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
    CloseTrigger: React.ForwardRefExoticComponent<Omit<Omit<BaseDialog.CloseTriggerProps & React.RefAttributes<HTMLButtonElement>, "ref"> & import("tailwind-variants").VariantProps<import("tailwind-variants").TVReturnType<{
        size: {
            sm: {
                content: string;
            };
            md: {
                content: string;
            };
            lg: {
                content: string;
            };
        };
        placement: {
            center: {
                content: string;
            };
            topCenter: {
                content: string;
            };
            left: {
                content: string;
            };
            right: {
                content: string;
            };
        };
        scrollBehavior: {
            inside: string;
            outside: string;
        };
    }, {
        backdrop: string[];
        positioner: string;
        content: string[];
        title: string;
        closeTrigger: string;
        description: string;
    }, undefined, {
        size: {
            sm: {
                content: string;
            };
            md: {
                content: string;
            };
            lg: {
                content: string;
            };
        };
        placement: {
            center: {
                content: string;
            };
            topCenter: {
                content: string;
            };
            left: {
                content: string;
            };
            right: {
                content: string;
            };
        };
        scrollBehavior: {
            inside: string;
            outside: string;
        };
    }, {
        backdrop: string[];
        positioner: string;
        content: string[];
        title: string;
        closeTrigger: string;
        description: string;
    }, import("tailwind-variants").TVReturnType<{
        size: {
            sm: {
                content: string;
            };
            md: {
                content: string;
            };
            lg: {
                content: string;
            };
        };
        placement: {
            center: {
                content: string;
            };
            topCenter: {
                content: string;
            };
            left: {
                content: string;
            };
            right: {
                content: string;
            };
        };
        scrollBehavior: {
            inside: string;
            outside: string;
        };
    }, {
        backdrop: string[];
        positioner: string;
        content: string[];
        title: string;
        closeTrigger: string;
        description: string;
    }, undefined, unknown, unknown, undefined>>> & import("react-tvcx").UnstyledProps & React.RefAttributes<HTMLButtonElement>, "ref"> & React.RefAttributes<HTMLButtonElement>>;
    open: typeof open;
    confirm: typeof confirm;
} & Readonly<{
    Root: React.ForwardRefExoticComponent<BaseDialog.RootProps & import("tailwind-variants").VariantProps<import("tailwind-variants").TVReturnType<{
        size: {
            sm: {
                content: string;
            };
            md: {
                content: string;
            };
            lg: {
                content: string;
            };
        };
        placement: {
            center: {
                content: string;
            };
            topCenter: {
                content: string;
            };
            left: {
                content: string;
            };
            right: {
                content: string;
            };
        };
        scrollBehavior: {
            inside: string;
            outside: string;
        };
    }, {
        backdrop: string[];
        positioner: string;
        content: string[];
        title: string;
        closeTrigger: string;
        description: string;
    }, undefined, {
        size: {
            sm: {
                content: string;
            };
            md: {
                content: string;
            };
            lg: {
                content: string;
            };
        };
        placement: {
            center: {
                content: string;
            };
            topCenter: {
                content: string;
            };
            left: {
                content: string;
            };
            right: {
                content: string;
            };
        };
        scrollBehavior: {
            inside: string;
            outside: string;
        };
    }, {
        backdrop: string[];
        positioner: string;
        content: string[];
        title: string;
        closeTrigger: string;
        description: string;
    }, import("tailwind-variants").TVReturnType<{
        size: {
            sm: {
                content: string;
            };
            md: {
                content: string;
            };
            lg: {
                content: string;
            };
        };
        placement: {
            center: {
                content: string;
            };
            topCenter: {
                content: string;
            };
            left: {
                content: string;
            };
            right: {
                content: string;
            };
        };
        scrollBehavior: {
            inside: string;
            outside: string;
        };
    }, {
        backdrop: string[];
        positioner: string;
        content: string[];
        title: string;
        closeTrigger: string;
        description: string;
    }, undefined, unknown, unknown, undefined>>> & {
        classNames?: Partial<Record<"title" | "content" | "positioner" | "closeTrigger" | "description" | "backdrop", any>> | undefined;
    } & import("react-tvcx").UnstyledProps & React.RefAttributes<never>>;
    RootProvider: React.ForwardRefExoticComponent<BaseDialog.RootProviderProps & import("tailwind-variants").VariantProps<import("tailwind-variants").TVReturnType<{
        size: {
            sm: {
                content: string;
            };
            md: {
                content: string;
            };
            lg: {
                content: string;
            };
        };
        placement: {
            center: {
                content: string;
            };
            topCenter: {
                content: string;
            };
            left: {
                content: string;
            };
            right: {
                content: string;
            };
        };
        scrollBehavior: {
            inside: string;
            outside: string;
        };
    }, {
        backdrop: string[];
        positioner: string;
        content: string[];
        title: string;
        closeTrigger: string;
        description: string;
    }, undefined, {
        size: {
            sm: {
                content: string;
            };
            md: {
                content: string;
            };
            lg: {
                content: string;
            };
        };
        placement: {
            center: {
                content: string;
            };
            topCenter: {
                content: string;
            };
            left: {
                content: string;
            };
            right: {
                content: string;
            };
        };
        scrollBehavior: {
            inside: string;
            outside: string;
        };
    }, {
        backdrop: string[];
        positioner: string;
        content: string[];
        title: string;
        closeTrigger: string;
        description: string;
    }, import("tailwind-variants").TVReturnType<{
        size: {
            sm: {
                content: string;
            };
            md: {
                content: string;
            };
            lg: {
                content: string;
            };
        };
        placement: {
            center: {
                content: string;
            };
            topCenter: {
                content: string;
            };
            left: {
                content: string;
            };
            right: {
                content: string;
            };
        };
        scrollBehavior: {
            inside: string;
            outside: string;
        };
    }, {
        backdrop: string[];
        positioner: string;
        content: string[];
        title: string;
        closeTrigger: string;
        description: string;
    }, undefined, unknown, unknown, undefined>>> & import("react-tvcx").UnstyledProps & React.RefAttributes<never>>;
    Backdrop: React.ForwardRefExoticComponent<Omit<BaseDialog.BackdropProps & React.RefAttributes<HTMLDivElement>, "ref"> & import("tailwind-variants").VariantProps<import("tailwind-variants").TVReturnType<{
        size: {
            sm: {
                content: string;
            };
            md: {
                content: string;
            };
            lg: {
                content: string;
            };
        };
        placement: {
            center: {
                content: string;
            };
            topCenter: {
                content: string;
            };
            left: {
                content: string;
            };
            right: {
                content: string;
            };
        };
        scrollBehavior: {
            inside: string;
            outside: string;
        };
    }, {
        backdrop: string[];
        positioner: string;
        content: string[];
        title: string;
        closeTrigger: string;
        description: string;
    }, undefined, {
        size: {
            sm: {
                content: string;
            };
            md: {
                content: string;
            };
            lg: {
                content: string;
            };
        };
        placement: {
            center: {
                content: string;
            };
            topCenter: {
                content: string;
            };
            left: {
                content: string;
            };
            right: {
                content: string;
            };
        };
        scrollBehavior: {
            inside: string;
            outside: string;
        };
    }, {
        backdrop: string[];
        positioner: string;
        content: string[];
        title: string;
        closeTrigger: string;
        description: string;
    }, import("tailwind-variants").TVReturnType<{
        size: {
            sm: {
                content: string;
            };
            md: {
                content: string;
            };
            lg: {
                content: string;
            };
        };
        placement: {
            center: {
                content: string;
            };
            topCenter: {
                content: string;
            };
            left: {
                content: string;
            };
            right: {
                content: string;
            };
        };
        scrollBehavior: {
            inside: string;
            outside: string;
        };
    }, {
        backdrop: string[];
        positioner: string;
        content: string[];
        title: string;
        closeTrigger: string;
        description: string;
    }, undefined, unknown, unknown, undefined>>> & import("react-tvcx").UnstyledProps & React.RefAttributes<HTMLDivElement>>;
    Context: React.ForwardRefExoticComponent<BaseDialog.ContextProps & import("tailwind-variants").VariantProps<import("tailwind-variants").TVReturnType<{
        size: {
            sm: {
                content: string;
            };
            md: {
                content: string;
            };
            lg: {
                content: string;
            };
        };
        placement: {
            center: {
                content: string;
            };
            topCenter: {
                content: string;
            };
            left: {
                content: string;
            };
            right: {
                content: string;
            };
        };
        scrollBehavior: {
            inside: string;
            outside: string;
        };
    }, {
        backdrop: string[];
        positioner: string;
        content: string[];
        title: string;
        closeTrigger: string;
        description: string;
    }, undefined, {
        size: {
            sm: {
                content: string;
            };
            md: {
                content: string;
            };
            lg: {
                content: string;
            };
        };
        placement: {
            center: {
                content: string;
            };
            topCenter: {
                content: string;
            };
            left: {
                content: string;
            };
            right: {
                content: string;
            };
        };
        scrollBehavior: {
            inside: string;
            outside: string;
        };
    }, {
        backdrop: string[];
        positioner: string;
        content: string[];
        title: string;
        closeTrigger: string;
        description: string;
    }, import("tailwind-variants").TVReturnType<{
        size: {
            sm: {
                content: string;
            };
            md: {
                content: string;
            };
            lg: {
                content: string;
            };
        };
        placement: {
            center: {
                content: string;
            };
            topCenter: {
                content: string;
            };
            left: {
                content: string;
            };
            right: {
                content: string;
            };
        };
        scrollBehavior: {
            inside: string;
            outside: string;
        };
    }, {
        backdrop: string[];
        positioner: string;
        content: string[];
        title: string;
        closeTrigger: string;
        description: string;
    }, undefined, unknown, unknown, undefined>>> & import("react-tvcx").UnstyledProps & React.RefAttributes<never>>;
    Description: React.ForwardRefExoticComponent<Omit<BaseDialog.DescriptionProps & React.RefAttributes<HTMLDivElement>, "ref"> & import("tailwind-variants").VariantProps<import("tailwind-variants").TVReturnType<{
        size: {
            sm: {
                content: string;
            };
            md: {
                content: string;
            };
            lg: {
                content: string;
            };
        };
        placement: {
            center: {
                content: string;
            };
            topCenter: {
                content: string;
            };
            left: {
                content: string;
            };
            right: {
                content: string;
            };
        };
        scrollBehavior: {
            inside: string;
            outside: string;
        };
    }, {
        backdrop: string[];
        positioner: string;
        content: string[];
        title: string;
        closeTrigger: string;
        description: string;
    }, undefined, {
        size: {
            sm: {
                content: string;
            };
            md: {
                content: string;
            };
            lg: {
                content: string;
            };
        };
        placement: {
            center: {
                content: string;
            };
            topCenter: {
                content: string;
            };
            left: {
                content: string;
            };
            right: {
                content: string;
            };
        };
        scrollBehavior: {
            inside: string;
            outside: string;
        };
    }, {
        backdrop: string[];
        positioner: string;
        content: string[];
        title: string;
        closeTrigger: string;
        description: string;
    }, import("tailwind-variants").TVReturnType<{
        size: {
            sm: {
                content: string;
            };
            md: {
                content: string;
            };
            lg: {
                content: string;
            };
        };
        placement: {
            center: {
                content: string;
            };
            topCenter: {
                content: string;
            };
            left: {
                content: string;
            };
            right: {
                content: string;
            };
        };
        scrollBehavior: {
            inside: string;
            outside: string;
        };
    }, {
        backdrop: string[];
        positioner: string;
        content: string[];
        title: string;
        closeTrigger: string;
        description: string;
    }, undefined, unknown, unknown, undefined>>> & import("react-tvcx").UnstyledProps & React.RefAttributes<HTMLDivElement>>;
    Positioner: React.ForwardRefExoticComponent<Omit<BaseDialog.PositionerProps & React.RefAttributes<HTMLDivElement>, "ref"> & import("tailwind-variants").VariantProps<import("tailwind-variants").TVReturnType<{
        size: {
            sm: {
                content: string;
            };
            md: {
                content: string;
            };
            lg: {
                content: string;
            };
        };
        placement: {
            center: {
                content: string;
            };
            topCenter: {
                content: string;
            };
            left: {
                content: string;
            };
            right: {
                content: string;
            };
        };
        scrollBehavior: {
            inside: string;
            outside: string;
        };
    }, {
        backdrop: string[];
        positioner: string;
        content: string[];
        title: string;
        closeTrigger: string;
        description: string;
    }, undefined, {
        size: {
            sm: {
                content: string;
            };
            md: {
                content: string;
            };
            lg: {
                content: string;
            };
        };
        placement: {
            center: {
                content: string;
            };
            topCenter: {
                content: string;
            };
            left: {
                content: string;
            };
            right: {
                content: string;
            };
        };
        scrollBehavior: {
            inside: string;
            outside: string;
        };
    }, {
        backdrop: string[];
        positioner: string;
        content: string[];
        title: string;
        closeTrigger: string;
        description: string;
    }, import("tailwind-variants").TVReturnType<{
        size: {
            sm: {
                content: string;
            };
            md: {
                content: string;
            };
            lg: {
                content: string;
            };
        };
        placement: {
            center: {
                content: string;
            };
            topCenter: {
                content: string;
            };
            left: {
                content: string;
            };
            right: {
                content: string;
            };
        };
        scrollBehavior: {
            inside: string;
            outside: string;
        };
    }, {
        backdrop: string[];
        positioner: string;
        content: string[];
        title: string;
        closeTrigger: string;
        description: string;
    }, undefined, unknown, unknown, undefined>>> & import("react-tvcx").UnstyledProps & React.RefAttributes<HTMLDivElement>>;
    Title: React.ForwardRefExoticComponent<Omit<BaseDialog.TitleProps & React.RefAttributes<HTMLHeadingElement>, "ref"> & import("tailwind-variants").VariantProps<import("tailwind-variants").TVReturnType<{
        size: {
            sm: {
                content: string;
            };
            md: {
                content: string;
            };
            lg: {
                content: string;
            };
        };
        placement: {
            center: {
                content: string;
            };
            topCenter: {
                content: string;
            };
            left: {
                content: string;
            };
            right: {
                content: string;
            };
        };
        scrollBehavior: {
            inside: string;
            outside: string;
        };
    }, {
        backdrop: string[];
        positioner: string;
        content: string[];
        title: string;
        closeTrigger: string;
        description: string;
    }, undefined, {
        size: {
            sm: {
                content: string;
            };
            md: {
                content: string;
            };
            lg: {
                content: string;
            };
        };
        placement: {
            center: {
                content: string;
            };
            topCenter: {
                content: string;
            };
            left: {
                content: string;
            };
            right: {
                content: string;
            };
        };
        scrollBehavior: {
            inside: string;
            outside: string;
        };
    }, {
        backdrop: string[];
        positioner: string;
        content: string[];
        title: string;
        closeTrigger: string;
        description: string;
    }, import("tailwind-variants").TVReturnType<{
        size: {
            sm: {
                content: string;
            };
            md: {
                content: string;
            };
            lg: {
                content: string;
            };
        };
        placement: {
            center: {
                content: string;
            };
            topCenter: {
                content: string;
            };
            left: {
                content: string;
            };
            right: {
                content: string;
            };
        };
        scrollBehavior: {
            inside: string;
            outside: string;
        };
    }, {
        backdrop: string[];
        positioner: string;
        content: string[];
        title: string;
        closeTrigger: string;
        description: string;
    }, undefined, unknown, unknown, undefined>>> & import("react-tvcx").UnstyledProps & React.RefAttributes<HTMLHeadingElement>>;
    Trigger: React.ForwardRefExoticComponent<Omit<BaseDialog.TriggerProps & React.RefAttributes<HTMLButtonElement>, "ref"> & import("tailwind-variants").VariantProps<import("tailwind-variants").TVReturnType<{
        size: {
            sm: {
                content: string;
            };
            md: {
                content: string;
            };
            lg: {
                content: string;
            };
        };
        placement: {
            center: {
                content: string;
            };
            topCenter: {
                content: string;
            };
            left: {
                content: string;
            };
            right: {
                content: string;
            };
        };
        scrollBehavior: {
            inside: string;
            outside: string;
        };
    }, {
        backdrop: string[];
        positioner: string;
        content: string[];
        title: string;
        closeTrigger: string;
        description: string;
    }, undefined, {
        size: {
            sm: {
                content: string;
            };
            md: {
                content: string;
            };
            lg: {
                content: string;
            };
        };
        placement: {
            center: {
                content: string;
            };
            topCenter: {
                content: string;
            };
            left: {
                content: string;
            };
            right: {
                content: string;
            };
        };
        scrollBehavior: {
            inside: string;
            outside: string;
        };
    }, {
        backdrop: string[];
        positioner: string;
        content: string[];
        title: string;
        closeTrigger: string;
        description: string;
    }, import("tailwind-variants").TVReturnType<{
        size: {
            sm: {
                content: string;
            };
            md: {
                content: string;
            };
            lg: {
                content: string;
            };
        };
        placement: {
            center: {
                content: string;
            };
            topCenter: {
                content: string;
            };
            left: {
                content: string;
            };
            right: {
                content: string;
            };
        };
        scrollBehavior: {
            inside: string;
            outside: string;
        };
    }, {
        backdrop: string[];
        positioner: string;
        content: string[];
        title: string;
        closeTrigger: string;
        description: string;
    }, undefined, unknown, unknown, undefined>>> & import("react-tvcx").UnstyledProps & React.RefAttributes<HTMLButtonElement>>;
    Content: React.ForwardRefExoticComponent<Omit<Omit<BaseDialog.ContentProps & React.RefAttributes<HTMLDivElement>, "ref"> & import("tailwind-variants").VariantProps<import("tailwind-variants").TVReturnType<{
        size: {
            sm: {
                content: string;
            };
            md: {
                content: string;
            };
            lg: {
                content: string;
            };
        };
        placement: {
            center: {
                content: string;
            };
            topCenter: {
                content: string;
            };
            left: {
                content: string;
            };
            right: {
                content: string;
            };
        };
        scrollBehavior: {
            inside: string;
            outside: string;
        };
    }, {
        backdrop: string[];
        positioner: string;
        content: string[];
        title: string;
        closeTrigger: string;
        description: string;
    }, undefined, {
        size: {
            sm: {
                content: string;
            };
            md: {
                content: string;
            };
            lg: {
                content: string;
            };
        };
        placement: {
            center: {
                content: string;
            };
            topCenter: {
                content: string;
            };
            left: {
                content: string;
            };
            right: {
                content: string;
            };
        };
        scrollBehavior: {
            inside: string;
            outside: string;
        };
    }, {
        backdrop: string[];
        positioner: string;
        content: string[];
        title: string;
        closeTrigger: string;
        description: string;
    }, import("tailwind-variants").TVReturnType<{
        size: {
            sm: {
                content: string;
            };
            md: {
                content: string;
            };
            lg: {
                content: string;
            };
        };
        placement: {
            center: {
                content: string;
            };
            topCenter: {
                content: string;
            };
            left: {
                content: string;
            };
            right: {
                content: string;
            };
        };
        scrollBehavior: {
            inside: string;
            outside: string;
        };
    }, {
        backdrop: string[];
        positioner: string;
        content: string[];
        title: string;
        closeTrigger: string;
        description: string;
    }, undefined, unknown, unknown, undefined>>> & import("react-tvcx").UnstyledProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
    CloseTrigger: React.ForwardRefExoticComponent<Omit<Omit<BaseDialog.CloseTriggerProps & React.RefAttributes<HTMLButtonElement>, "ref"> & import("tailwind-variants").VariantProps<import("tailwind-variants").TVReturnType<{
        size: {
            sm: {
                content: string;
            };
            md: {
                content: string;
            };
            lg: {
                content: string;
            };
        };
        placement: {
            center: {
                content: string;
            };
            topCenter: {
                content: string;
            };
            left: {
                content: string;
            };
            right: {
                content: string;
            };
        };
        scrollBehavior: {
            inside: string;
            outside: string;
        };
    }, {
        backdrop: string[];
        positioner: string;
        content: string[];
        title: string;
        closeTrigger: string;
        description: string;
    }, undefined, {
        size: {
            sm: {
                content: string;
            };
            md: {
                content: string;
            };
            lg: {
                content: string;
            };
        };
        placement: {
            center: {
                content: string;
            };
            topCenter: {
                content: string;
            };
            left: {
                content: string;
            };
            right: {
                content: string;
            };
        };
        scrollBehavior: {
            inside: string;
            outside: string;
        };
    }, {
        backdrop: string[];
        positioner: string;
        content: string[];
        title: string;
        closeTrigger: string;
        description: string;
    }, import("tailwind-variants").TVReturnType<{
        size: {
            sm: {
                content: string;
            };
            md: {
                content: string;
            };
            lg: {
                content: string;
            };
        };
        placement: {
            center: {
                content: string;
            };
            topCenter: {
                content: string;
            };
            left: {
                content: string;
            };
            right: {
                content: string;
            };
        };
        scrollBehavior: {
            inside: string;
            outside: string;
        };
    }, {
        backdrop: string[];
        positioner: string;
        content: string[];
        title: string;
        closeTrigger: string;
        description: string;
    }, undefined, unknown, unknown, undefined>>> & import("react-tvcx").UnstyledProps & React.RefAttributes<HTMLButtonElement>, "ref"> & React.RefAttributes<HTMLButtonElement>>;
    open: typeof open;
    confirm: typeof confirm;
}>;
export {};
//# sourceMappingURL=dialog.d.ts.map