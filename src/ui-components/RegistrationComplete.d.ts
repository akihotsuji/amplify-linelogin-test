/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, IconProps, ImageProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type RegistrationCompleteOverridesProps = {
    RegistrationComplete?: PrimitiveOverrideProps<ViewProps>;
    Header?: PrimitiveOverrideProps<FlexProps>;
    Logo?: PrimitiveOverrideProps<IconProps>;
    HeroContents?: PrimitiveOverrideProps<FlexProps>;
    LeftContents?: PrimitiveOverrideProps<FlexProps>;
    regist_complete?: PrimitiveOverrideProps<ImageProps>;
    RightContents?: PrimitiveOverrideProps<FlexProps>;
    HeroMessage?: PrimitiveOverrideProps<FlexProps>;
    Heading?: PrimitiveOverrideProps<FlexProps>;
    "\u300CHiroba Chat\u300D\u3078\u306E\u30ED\u30B0\u30A4\u30F3\u306B\u6210\u529F\u3057\u307E\u3057\u305F\u3002 \u300CHiroba Chat\u300D\u3067\u306F\u3001\u3042\u306A\u305F\u306E\u30D3\u30B8\u30CD\u30B9\u3067\u306E\u6210\u529F\u3092\u5F37\u529B\u306B\u30B5\u30DD\u30FC\u30C8\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002\u3059\u3050\u306B\u6E96\u5099\u3092\u306F\u3058\u3081\u307E\u3057\u3087\u3046\uFF01"?: PrimitiveOverrideProps<TextProps>;
    HeroAction?: PrimitiveOverrideProps<FlexProps>;
    Button?: PrimitiveOverrideProps<FlexProps>;
} & EscapeHatchProps;
export declare type RegistrationCompleteProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: RegistrationCompleteOverridesProps | undefined | null;
}>;
export default function RegistrationComplete(props: RegistrationCompleteProps): React.ReactElement;
