/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Button, Icon, Text, View } from "@aws-amplify/ui-react";
export default function Page1(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="1440px"
      height="900px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "Page1")}
      {...rest}
    >
      <Icon
        width="1440px"
        height="144px"
        viewBox={{ minX: 0, minY: 0, width: 1440, height: 144 }}
        paths={[
          {
            d: "M0 0L1440 0L1440 144L0 144L0 0Z",
            fill: "rgba(254,205,42,1)",
            fillRule: "nonzero",
          },
        ]}
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0px"
        left="0px"
        {...getOverrideProps(overrides, "header")}
      ></Icon>
      <Icon
        width="100px"
        height="100px"
        viewBox={{ minX: 0, minY: 0, width: 100, height: 100 }}
        paths={[
          {
            d: "M100 50C100 77.6142 77.6142 100 50 100C22.3858 100 0 77.6142 0 50C0 22.3858 22.3858 0 50 0C77.6142 0 100 22.3858 100 50Z",
            fill: "rgba(217,217,217,1)",
            fillRule: "nonzero",
          },
        ]}
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="22px"
        left="70px"
        {...getOverrideProps(overrides, "icon")}
      ></Icon>
      <Text
        fontFamily="Inter"
        fontSize="50px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="60.5113639831543px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="259px"
        height="67px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="209px"
        left="70px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="メッセージ"
        {...getOverrideProps(overrides, "\u30E1\u30C3\u30BB\u30FC\u30B8")}
      ></Text>
      <View
        width="306px"
        height="324px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="358px"
        left="120px"
        borderRadius="33px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(217,217,217,1)"
        {...getOverrideProps(overrides, "\u8AAC\u660E\u753B\u50CF1")}
      ></View>
      <View
        width="306px"
        height="324px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="358px"
        left="calc(50% - 153px - 28px)"
        borderRadius="33px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(217,217,217,1)"
        {...getOverrideProps(overrides, "\u8AAC\u660E\u753B\u50CF2")}
      ></View>
      <View
        width="306px"
        height="324px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="358px"
        right="160px"
        borderRadius="33px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(217,217,217,1)"
        {...getOverrideProps(overrides, "\u8AAC\u660E\u753B\u50CF3")}
      ></View>
      <Text
        fontFamily="Inter"
        fontSize="50px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="60.5113639831543px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="691px"
        height="82px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="764px"
        left="70px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="テキストテキストテキスト"
        {...getOverrideProps(overrides, "\u8AAC\u660E\u6587")}
      ></Text>
      <Button
        width="190px"
        height="53px"
        position="absolute"
        top="764px"
        left="1032px"
        size="large"
        isDisabled={false}
        variation="primary"
        children="LINEでログイン"
        {...getOverrideProps(overrides, "Button")}
      ></Button>
    </View>
  );
}
