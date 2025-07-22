import { PaginationRootProps } from "@ark-ui/react";
import React from "react";
import { ComponentMetadata, ComposedTVProps } from "react-tvcx";
import { button, ButtonProps } from "./button";
export interface PaginationProps extends Omit<PaginationRootProps, "color">, ComposedTVProps<typeof button> {
    activeProps?: ButtonProps;
    inactiveProps?: ButtonProps;
}
interface Pagination extends ComponentMetadata {
    (props: PaginationProps): React.ReactElement | null;
}
export declare const Pagination: Pagination;
export {};
//# sourceMappingURL=pagination.d.ts.map