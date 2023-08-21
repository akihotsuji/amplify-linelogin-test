/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, TextProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TagIconOverridesProps = {
    TagIcon?: PrimitiveOverrideProps<FlexProps>;
    "\u30BF\u30B0\u540D"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type TagIconProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: TagIconOverridesProps | undefined | null;
}>;
export default function TagIcon(props: TagIconProps): React.ReactElement;