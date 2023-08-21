/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, IconProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SideMenuOverridesProps = {
    SideMenu?: PrimitiveOverrideProps<FlexProps>;
    MenuDailyWork?: PrimitiveOverrideProps<FlexProps>;
    MenuHome?: PrimitiveOverrideProps<FlexProps>;
    MemuHomeIcon?: PrimitiveOverrideProps<FlexProps>;
    Vector39213968?: PrimitiveOverrideProps<IconProps>;
    MenuHomeText?: PrimitiveOverrideProps<FlexProps>;
    "\u30DB\u30FC\u30E0"?: PrimitiveOverrideProps<TextProps>;
    MenuReport?: PrimitiveOverrideProps<FlexProps>;
    MenuReportIcon?: PrimitiveOverrideProps<FlexProps>;
    Vector39213984?: PrimitiveOverrideProps<IconProps>;
    MenuReportText?: PrimitiveOverrideProps<FlexProps>;
    "\u30EC\u30DD\u30FC\u30C8"?: PrimitiveOverrideProps<TextProps>;
    MenuMessage?: PrimitiveOverrideProps<FlexProps>;
    MenuMessageIcon?: PrimitiveOverrideProps<FlexProps>;
    Vector39264885?: PrimitiveOverrideProps<IconProps>;
    MenuMessageText?: PrimitiveOverrideProps<FlexProps>;
    "\u30E1\u30C3\u30BB\u30FC\u30B8"?: PrimitiveOverrideProps<TextProps>;
    MenuSendMessage?: PrimitiveOverrideProps<FlexProps>;
    MenuSendMessageSpacer?: PrimitiveOverrideProps<FlexProps>;
    "Rectangle 53927149"?: PrimitiveOverrideProps<ViewProps>;
    MenuSendMessageText?: PrimitiveOverrideProps<FlexProps>;
    "\u30E1\u30C3\u30BB\u30FC\u30B8\u914D\u4FE1"?: PrimitiveOverrideProps<TextProps>;
    MenuMessageTemplete?: PrimitiveOverrideProps<FlexProps>;
    MenuMessageTempleteSpacer?: PrimitiveOverrideProps<FlexProps>;
    "Rectangle 53927153"?: PrimitiveOverrideProps<ViewProps>;
    MenuMessageTempleteText?: PrimitiveOverrideProps<FlexProps>;
    "\u30C6\u30F3\u30D7\u30EC\u30FC\u30C8\u767B\u9332"?: PrimitiveOverrideProps<TextProps>;
    MenuTask?: PrimitiveOverrideProps<FlexProps>;
    MenuTaskIcon?: PrimitiveOverrideProps<FlexProps>;
    Vector39264831?: PrimitiveOverrideProps<IconProps>;
    MenuTaskText?: PrimitiveOverrideProps<FlexProps>;
    "\u304A\u3059\u3059\u3081\u30A2\u30AF\u30B7\u30E7\u30F3"?: PrimitiveOverrideProps<TextProps>;
    MenuSettingLINE?: PrimitiveOverrideProps<FlexProps>;
    MenuService?: PrimitiveOverrideProps<FlexProps>;
    MenuServiceIcon?: PrimitiveOverrideProps<FlexProps>;
    Vector39264844?: PrimitiveOverrideProps<IconProps>;
    Vector39264845?: PrimitiveOverrideProps<IconProps>;
    Vector39264846?: PrimitiveOverrideProps<IconProps>;
    Vector39264847?: PrimitiveOverrideProps<IconProps>;
    MenuServiceText?: PrimitiveOverrideProps<FlexProps>;
    "\u30B5\u30FC\u30D3\u30B9\u8A2D\u5B9A"?: PrimitiveOverrideProps<TextProps>;
    MenuRichMenu?: PrimitiveOverrideProps<FlexProps>;
    MenuRichMenuSpacer?: PrimitiveOverrideProps<FlexProps>;
    "Rectangle 63928170"?: PrimitiveOverrideProps<ViewProps>;
    MenuRichMenutext?: PrimitiveOverrideProps<FlexProps>;
    "\u30EA\u30C3\u30C1\u30E1\u30CB\u30E5\u30FC"?: PrimitiveOverrideProps<TextProps>;
    MenuKeywordRespond?: PrimitiveOverrideProps<FlexProps>;
    MenuKeywordRespondSpacer?: PrimitiveOverrideProps<FlexProps>;
    "Rectangle 63928176"?: PrimitiveOverrideProps<ViewProps>;
    MenuKeywordRespondText?: PrimitiveOverrideProps<FlexProps>;
    "\u30AD\u30FC\u30EF\u30FC\u30C9\u5FDC\u7B54"?: PrimitiveOverrideProps<TextProps>;
    MenuJoinRespond?: PrimitiveOverrideProps<FlexProps>;
    MenuJoinRespondSpacer?: PrimitiveOverrideProps<FlexProps>;
    "Rectangle 63929181"?: PrimitiveOverrideProps<ViewProps>;
    MenuJoinRespondText?: PrimitiveOverrideProps<FlexProps>;
    "\u304A\u53CB\u9054\u8FFD\u52A0\u5FDC\u7B54"?: PrimitiveOverrideProps<TextProps>;
    MenuSimpleCoupon?: PrimitiveOverrideProps<FlexProps>;
    MenuSimpleCouponSpacer?: PrimitiveOverrideProps<FlexProps>;
    "Rectangle 63929186"?: PrimitiveOverrideProps<ViewProps>;
    MenuSimpleCouponText?: PrimitiveOverrideProps<FlexProps>;
    "\u30B7\u30F3\u30D7\u30EB\u30AF\u30FC\u30DD\u30F3"?: PrimitiveOverrideProps<TextProps>;
    MenuOther?: PrimitiveOverrideProps<FlexProps>;
    MenuSetting?: PrimitiveOverrideProps<FlexProps>;
    MenuSettingIcon?: PrimitiveOverrideProps<FlexProps>;
    Vector39264898?: PrimitiveOverrideProps<IconProps>;
    Vector39264899?: PrimitiveOverrideProps<IconProps>;
    MenuSettingText?: PrimitiveOverrideProps<FlexProps>;
    "\u8A2D\u5B9A"?: PrimitiveOverrideProps<TextProps>;
    MenuLogout?: PrimitiveOverrideProps<FlexProps>;
    MenuLogoutIcon?: PrimitiveOverrideProps<FlexProps>;
    Vector39264905?: PrimitiveOverrideProps<IconProps>;
    MenuLogoutText?: PrimitiveOverrideProps<FlexProps>;
    "\u30ED\u30B0\u30A2\u30A6\u30C8"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type SideMenuProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: SideMenuOverridesProps | undefined | null;
}>;
export default function SideMenu(props: SideMenuProps): React.ReactElement;
