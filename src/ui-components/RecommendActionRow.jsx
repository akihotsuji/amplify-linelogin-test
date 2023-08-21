/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Button, Flex, Text, View } from "@aws-amplify/ui-react";
export default function RecommendActionRow(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="11px"
      direction="row"
      width="1027px"
      height="unset"
      justifyContent="flex-start"
      alignItems="center"
      position="relative"
      border="1px SOLID rgba(217,217,217,1)"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "RecommendActionRow")}
      {...rest}
    >
      <Flex
        gap="10px"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        position="relative"
        padding="10px 10px 10px 10px"
        {...getOverrideProps(overrides, "RecommendActionImagePanel")}
      >
        <View
          width="301px"
          height="194px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(255,255,255,1)"
          {...getOverrideProps(overrides, "Rectangle 10")}
        ></View>
      </Flex>
      <Flex
        gap="37px"
        direction="column"
        width="695px"
        height="194px"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "RecommendActionPanel")}
      >
        <Flex
          gap="46px"
          direction="column"
          width="695px"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "DescriptionPanel")}
        >
          <Text
            fontFamily="Inter"
            fontSize="24px"
            fontWeight="400"
            color="rgba(0,0,0,1)"
            lineHeight="36px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="695px"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="おすすめアクションの題名"
            {...getOverrideProps(overrides, "RecommendActionName")}
          ></Text>
          <Text
            fontFamily="Noto Sans JP"
            fontSize="20px"
            fontWeight="400"
            color="rgba(0,0,0,1)"
            lineHeight="30px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="695px"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="おすすめアクションのサマリー"
            {...getOverrideProps(overrides, "RecomemndActionSummary")}
          ></Text>
        </Flex>
        <Flex
          gap="10px"
          direction="column"
          width="695px"
          height="unset"
          justifyContent="center"
          alignItems="flex-end"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "ActionPanel")}
        >
          <Button
            width="249px"
            height="unset"
            borderRadius="10px"
            shrink="0"
            size="large"
            isDisabled={false}
            variation="primary"
            children="アクションを開始する"
            {...getOverrideProps(overrides, "Button")}
          ></Button>
        </Flex>
      </Flex>
    </Flex>
  );
}
