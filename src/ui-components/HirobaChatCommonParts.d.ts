/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { SideMenuProps } from "./SideMenu";
import { HeaderProps } from "./Header";
import { ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type HirobaChatCommonPartsOverridesProps = {
    HirobaChatCommonParts?: PrimitiveOverrideProps<ViewProps>;
    SideMenu?: SideMenuProps;
    Header?: HeaderProps;
} & EscapeHatchProps;
export declare type HirobaChatCommonPartsProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: HirobaChatCommonPartsOverridesProps | undefined | null;
}>;
export default function HirobaChatCommonParts(props: HirobaChatCommonPartsProps): React.ReactElement;
