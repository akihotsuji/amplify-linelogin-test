/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type Frame4381OverridesProps = {
    Frame4381?: PrimitiveOverrideProps<FlexProps>;
    HeroLayout1?: PrimitiveOverrideProps<FlexProps>;
} & EscapeHatchProps;
export declare type Frame4381Props = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: Frame4381OverridesProps | undefined | null;
}>;
export default function Frame4381(props: Frame4381Props): React.ReactElement;
