/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, IconProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SpeechBubbleDescriptionOverridesProps = {
    SpeechBubbleDescription?: PrimitiveOverrideProps<FlexProps>;
    SpeechBubble?: PrimitiveOverrideProps<ViewProps>;
    Speaker?: PrimitiveOverrideProps<IconProps>;
} & EscapeHatchProps;
export declare type SpeechBubbleDescriptionProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: SpeechBubbleDescriptionOverridesProps | undefined | null;
}>;
export default function SpeechBubbleDescription(props: SpeechBubbleDescriptionProps): React.ReactElement;
