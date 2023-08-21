/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, IconProps, ImageProps, TextProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type HeaderOverridesProps = {
    Header?: PrimitiveOverrideProps<FlexProps>;
    Logo?: PrimitiveOverrideProps<FlexProps>;
    "HirobaC 1"?: PrimitiveOverrideProps<ImageProps>;
    CustomerPanel?: PrimitiveOverrideProps<FlexProps>;
    NotificationsIcon?: PrimitiveOverrideProps<FlexProps>;
    Vector39213956?: PrimitiveOverrideProps<IconProps>;
    Vector39213957?: PrimitiveOverrideProps<IconProps>;
    PlanIcon?: PrimitiveOverrideProps<FlexProps>;
    Vector39213959?: PrimitiveOverrideProps<IconProps>;
    Vector39213960?: PrimitiveOverrideProps<IconProps>;
    CustomerName?: PrimitiveOverrideProps<FlexProps>;
    LoginName?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type HeaderProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: HeaderOverridesProps | undefined | null;
}>;
export default function Header(props: HeaderProps): React.ReactElement;
