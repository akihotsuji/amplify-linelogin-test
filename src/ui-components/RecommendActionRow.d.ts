/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ButtonProps, FlexProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type RecommendActionRowOverridesProps = {
    RecommendActionRow?: PrimitiveOverrideProps<FlexProps>;
    RecommendActionImagePanel?: PrimitiveOverrideProps<FlexProps>;
    "Rectangle 10"?: PrimitiveOverrideProps<ViewProps>;
    RecommendActionPanel?: PrimitiveOverrideProps<FlexProps>;
    DescriptionPanel?: PrimitiveOverrideProps<FlexProps>;
    RecommendActionName?: PrimitiveOverrideProps<TextProps>;
    RecomemndActionSummary?: PrimitiveOverrideProps<TextProps>;
    ActionPanel?: PrimitiveOverrideProps<FlexProps>;
    Button?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type RecommendActionRowProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: RecommendActionRowOverridesProps | undefined | null;
}>;
export default function RecommendActionRow(props: RecommendActionRowProps): React.ReactElement;
