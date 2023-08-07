/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ButtonProps, IconProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type Page1OverridesProps = {
    Page1?: PrimitiveOverrideProps<ViewProps>;
    header?: PrimitiveOverrideProps<IconProps>;
    icon?: PrimitiveOverrideProps<IconProps>;
    "\u30E1\u30C3\u30BB\u30FC\u30B8"?: PrimitiveOverrideProps<TextProps>;
    "\u8AAC\u660E\u753B\u50CF1"?: PrimitiveOverrideProps<ViewProps>;
    "\u8AAC\u660E\u753B\u50CF2"?: PrimitiveOverrideProps<ViewProps>;
    "\u8AAC\u660E\u753B\u50CF3"?: PrimitiveOverrideProps<ViewProps>;
    "\u8AAC\u660E\u6587"?: PrimitiveOverrideProps<TextProps>;
    Button?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type Page1Props = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: Page1OverridesProps | undefined | null;
}>;
export default function Page1(props: Page1Props): React.ReactElement;
