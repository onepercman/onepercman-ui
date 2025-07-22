"use client";
import { RatingGroup as BaseRatingGroup } from "@ark-ui/react";
import { createComponentFactory, createComponentTree, } from "react-tvcx";
import { tv } from "tailwind-variants";
export const ratingGroup = tv({
    base: "",
});
const { withRoot, withSlot } = createComponentFactory(ratingGroup);
const Root = withRoot(BaseRatingGroup.Root);
const RootProvider = withRoot(BaseRatingGroup.RootProvider);
const Context = withSlot(BaseRatingGroup.Context);
const Control = withSlot(BaseRatingGroup.Control);
const HiddenInput = withSlot(BaseRatingGroup.HiddenInput);
const Item = withSlot(BaseRatingGroup.Item);
const ItemContext = withSlot(BaseRatingGroup.ItemContext);
const Label = withSlot(BaseRatingGroup.Label);
export const RatingGroup = createComponentTree(Root, {
    Root,
    RootProvider,
    Context,
    Control,
    HiddenInput,
    Item,
    ItemContext,
    Label,
});
RatingGroup.displayName = "RatingGroup";
