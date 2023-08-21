/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, IconProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type HeaderBackPageOverridesProps = {
    HeaderBackPage?: PrimitiveOverrideProps<FlexProps>;
    BackPageIcon?: PrimitiveOverrideProps<FlexProps>;
    Vector40364803?: PrimitiveOverrideProps<IconProps>;
    Vector40364804?: PrimitiveOverrideProps<IconProps>;
    BackBageText?: PrimitiveOverrideProps<FlexProps>;
} & EscapeHatchProps;
export declare type HeaderBackPageProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: HeaderBackPageOverridesProps | undefined | null;
}>;
export default function HeaderBackPage(props: HeaderBackPageProps): React.ReactElement;
