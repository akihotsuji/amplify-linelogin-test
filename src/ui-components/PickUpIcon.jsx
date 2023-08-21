/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Text, View } from "@aws-amplify/ui-react";
export default function PickUpIcon(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="94px"
      height="31px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "PickUpIcon")}
      {...rest}
    >
      <View
        width="94px"
        height="29px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="6.45%"
        bottom="0%"
        left="0%"
        right="0%"
        borderRadius="15px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(29,186,54,1)"
        {...getOverrideProps(overrides, "Rectangle 7")}
      ></View>
      <Text
        fontFamily="Noto Sans JP"
        fontSize="20px"
        fontWeight="400"
        color="rgba(255,255,255,1)"
        lineHeight="30px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="0%"
        bottom="3.23%"
        left="15.96%"
        right="15.96%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Pickup"
        {...getOverrideProps(overrides, "Pickup")}
      ></Text>
    </View>
  );
}
