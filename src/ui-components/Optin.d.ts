/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { LogoProps } from "./Logo";
import { ButtonProps, CheckboxFieldProps, FlexProps, TextAreaFieldProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type OptinOverridesProps = {
    Optin?: PrimitiveOverrideProps<ViewProps>;
    Logo?: LogoProps;
    MainPanel?: PrimitiveOverrideProps<FlexProps>;
    DescriptionPanel?: PrimitiveOverrideProps<FlexProps>;
    TitlePanel?: PrimitiveOverrideProps<FlexProps>;
    "HirobaChat\u5229\u7528\u898F\u7D04\u3078\u306E\u540C\u610F"?: PrimitiveOverrideProps<TextProps>;
    TextPanel?: PrimitiveOverrideProps<FlexProps>;
    "HirobaChat\u3092\u5229\u7528\u3044\u305F\u3060\u304F\u306B\u3042\u305F\u308A\u3001\u5229\u7528\u898F\u7D04\u53CA\u3073\u30D7\u30E9\u30A4\u30D0\u30B7\u30FC\u30DD\u30EA\u30B7\u30FC\u3092\u4E00\u8AAD\u304F\u3060\u3055\u3044\u3002\u540C\u610F\u3044\u305F\u3060\u304F\u5834\u5408\u306B\u306F\u3001\u753B\u9762\u4E0B\u306E\u30C1\u30A7\u30C3\u30AF\u30DC\u30C3\u30AF\u30B9\u3092\u9078\u629E\u5F8C\u3001\u540C\u610F\u30DC\u30BF\u30F3\u3092\u62BC\u3057\u3066\u304F\u3060\u3055\u3044\u3002"?: PrimitiveOverrideProps<TextProps>;
    TermsPanel?: PrimitiveOverrideProps<FlexProps>;
    TextAreaField?: PrimitiveOverrideProps<TextAreaFieldProps>;
    ActionPanel?: PrimitiveOverrideProps<FlexProps>;
    OptinCheckboxPanel?: PrimitiveOverrideProps<FlexProps>;
    CheckboxField?: PrimitiveOverrideProps<CheckboxFieldProps>;
    OptinPanel?: PrimitiveOverrideProps<FlexProps>;
    Button?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type OptinProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: OptinOverridesProps | undefined | null;
}>;
export default function Optin(props: OptinProps): React.ReactElement;
