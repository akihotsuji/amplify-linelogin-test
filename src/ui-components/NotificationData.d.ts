/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type NotificationDataOverridesProps = {
    NotificationData?: PrimitiveOverrideProps<FlexProps>;
    LeftPanel?: PrimitiveOverrideProps<FlexProps>;
    NotificationImage?: PrimitiveOverrideProps<ViewProps>;
    RightPanel?: PrimitiveOverrideProps<FlexProps>;
    NotificationDate?: PrimitiveOverrideProps<FlexProps>;
    Date?: PrimitiveOverrideProps<TextProps>;
    NotificationTitle?: PrimitiveOverrideProps<FlexProps>;
    Title?: PrimitiveOverrideProps<TextProps>;
    NotificationPanel?: PrimitiveOverrideProps<FlexProps>;
    Summary?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type NotificationDataProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: NotificationDataOverridesProps | undefined | null;
}>;
export default function NotificationData(props: NotificationDataProps): React.ReactElement;
