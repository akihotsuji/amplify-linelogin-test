/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import SideMenu from "./SideMenu";
import Header from "./Header";
import { View } from "@aws-amplify/ui-react";
export default function HirobaChatCommonParts(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="1326px"
      height="1003px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "HirobaChatCommonParts")}
      {...rest}
    >
      <SideMenu
        display="flex"
        gap="106px"
        direction="column"
        width="unset"
        height="950px"
        justifyContent="space-between"
        alignItems="flex-start"
        position="absolute"
        top="53px"
        left="0px"
        padding="40px 30px 40px 30px"
        backgroundColor="rgba(217,217,217,1)"
        {...getOverrideProps(overrides, "SideMenu")}
      ></SideMenu>
      <Header
        display="flex"
        gap="1027px"
        direction="row"
        width="1326px"
        height="unset"
        justifyContent="space-between"
        alignItems="center"
        position="absolute"
        top="0px"
        left="0px"
        right="0px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(64,170,191,1)"
        {...getOverrideProps(overrides, "Header")}
      ></Header>
    </View>
  );
}
