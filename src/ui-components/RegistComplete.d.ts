/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { LogoProps } from "./Logo";
import { ButtonProps, FlexProps, ImageProps, TextProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type RegistCompleteOverridesProps = {
    RegistComplete?: PrimitiveOverrideProps<FlexProps>;
    Header?: PrimitiveOverrideProps<FlexProps>;
    Logo?: LogoProps;
    MainPanel?: PrimitiveOverrideProps<FlexProps>;
    LeftPanel?: PrimitiveOverrideProps<FlexProps>;
    "regist_complete 1"?: PrimitiveOverrideProps<ImageProps>;
    RightPanel?: PrimitiveOverrideProps<FlexProps>;
    DescriptionPanel?: PrimitiveOverrideProps<FlexProps>;
    ThanksMessage?: PrimitiveOverrideProps<FlexProps>;
    "\u30ED\u30B0\u30A4\u30F3\u3042\u308A\u304C\u3068\u3046\u3054\u3056\u3044\u307E\u3059\uFF01"?: PrimitiveOverrideProps<TextProps>;
    ThanksDetailMessage?: PrimitiveOverrideProps<FlexProps>;
    "\u300CHirobaChat\u306F\u3001\u3042\u306A\u305F\u306ELINE\u516C\u5F0F\u30A2\u30AB\u30A6\u30F3\u30C8\u3092\u5168\u529B\u3067\u30B5\u30DD\u30FC\u30C8\u3057\u307E\u3059\u3002\u65B0\u3057\u3044\u30B9\u30C6\u30C3\u30D7\u3092\u5171\u306B\u9032\u307F\u307E\u3057\u3087\u3046\u3002\u2028\u2028\u300CLINE\u30D3\u30B8\u30CD\u30B9\u3092\u6210\u529F\u306B\u5C0E\u304F\u305F\u3081\u306E\u30B5\u30DD\u30FC\u30C8\u2028\u2028\u3000\u30FB\u3000AI\u306B\u3088\u308B\u30D1\u30FC\u30BD\u30CA\u30E9\u30A4\u30BA\u3055\u308C\u305F\u30B3\u30F3\u30C6\u30F3\u30C4\u63D0\u6848\u2028\u3000\u30FB\u3000\u30B7\u30F3\u30D7\u30EB\u3067\u3059\u3050\u59CB\u3081\u308B\u3053\u3068\u304C\u3067\u304D\u308B\u30EA\u30C3\u30C1\u30E1\u30CB\u30E5\u30FC\u2028\u3000\u30FB\u3000\u4ECA\u65E5\u304B\u3089\u3059\u3050\u306B\u59CB\u3081\u308B\u3053\u3068\u304C\u3067\u304D\u308B\u30AF\u30FC\u30DD\u30F3\u2028\u2028"?: PrimitiveOverrideProps<TextProps>;
    ActionPanel?: PrimitiveOverrideProps<FlexProps>;
    Button?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type RegistCompleteProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: RegistCompleteOverridesProps | undefined | null;
}>;
export default function RegistComplete(props: RegistCompleteProps): React.ReactElement;
