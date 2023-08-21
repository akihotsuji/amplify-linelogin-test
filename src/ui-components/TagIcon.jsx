/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Text } from "@aws-amplify/ui-react";
export default function TagIcon(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="10px"
      direction="row"
      width="unset"
      height="unset"
      justifyContent="center"
      alignItems="center"
      position="relative"
      borderRadius="10px"
      padding="2px 5px 2px 5px"
      backgroundColor="rgba(29,186,54,1)"
      {...getOverrideProps(overrides, "TagIcon")}
      {...rest}
    >
      <Text
        fontFamily="Inter"
        fontSize="14px"
        fontWeight="400"
        color="rgba(255,255,255,1)"
        lineHeight="21px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="タグ名"
        {...getOverrideProps(overrides, "\u30BF\u30B0\u540D")}
      ></Text>
    </Flex>
  );
}
