/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { NavBarHeader2Props } from "./NavBarHeader2";
import { FlexProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MarketingPageOverridesProps = {
    MarketingPage?: PrimitiveOverrideProps<FlexProps>;
    NavBarHeader2?: NavBarHeader2Props;
    HeroLayout1?: PrimitiveOverrideProps<FlexProps>;
    MarketingPricing?: PrimitiveOverrideProps<FlexProps>;
    Features2x2?: PrimitiveOverrideProps<FlexProps>;
    CTASection?: PrimitiveOverrideProps<FlexProps>;
    MarketingFooter?: PrimitiveOverrideProps<FlexProps>;
} & EscapeHatchProps;
export declare type MarketingPageProps = React.PropsWithChildren<Partial<FlexProps> & {
    プロパティ1?: "\u30C7\u30D5\u30A9\u30EB\u30C8" | "\u30D0\u30EA\u30A2\u30F3\u30C82";
} & {
    overrides?: MarketingPageOverridesProps | undefined | null;
}>;
export default function MarketingPage(props: MarketingPageProps): React.ReactElement;
