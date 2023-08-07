/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { MarketingFooterProps } from "./MarketingFooter";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { CollectionProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MarketingFooterCollectionOverridesProps = {
    MarketingFooterCollection?: PrimitiveOverrideProps<CollectionProps>;
    MarketingFooter?: MarketingFooterProps;
} & EscapeHatchProps;
export declare type MarketingFooterCollectionProps = React.PropsWithChildren<Partial<CollectionProps<any>> & {
    items?: any[];
    overrideItems?: (collectionItem: {
        item: any;
        index: number;
    }) => MarketingFooterProps;
} & {
    overrides?: MarketingFooterCollectionOverridesProps | undefined | null;
}>;
export default function MarketingFooterCollection(props: MarketingFooterCollectionProps): React.ReactElement;
