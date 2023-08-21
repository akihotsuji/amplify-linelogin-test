/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import Logo from "./Logo";
import { Button, Flex, Image, Text } from "@aws-amplify/ui-react";
export default function RegistComplete(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="68px"
      direction="column"
      width="1440px"
      height="1024px"
      justifyContent="flex-start"
      alignItems="center"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "RegistComplete")}
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
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Header")}
      >
        <Logo
          display="flex"
          gap="8px"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="center"
          alignItems="center"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Logo")}
        ></Logo>
      </Flex>
      <Flex
        gap="0"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="center"
        alignItems="center"
        grow="1"
        shrink="1"
        basis="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "MainPanel")}
      >
        <Flex
          gap="10px"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="center"
          alignItems="center"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "LeftPanel")}
        >
          <Image
            width="587px"
            height="588px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            objectFit="contain"
            {...getOverrideProps(overrides, "regist_complete 1")}
          ></Image>
        </Flex>
        <Flex
          gap="30px"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="center"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "RightPanel")}
        >
          <Flex
            gap="0"
            direction="column"
            width="unset"
            height="unset"
            justifyContent="center"
            alignItems="center"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "DescriptionPanel")}
          >
            <Flex
              gap="10px"
              direction="row"
              width="unset"
              height="unset"
              justifyContent="flex-start"
              alignItems="center"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "ThanksMessage")}
            >
              <Text
                fontFamily="Inter"
                fontSize="32px"
                fontWeight="400"
                color="rgba(13,26,38,1)"
                lineHeight="48px"
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
                children="ログインありがとうございます！"
                {...getOverrideProps(
                  overrides,
                  "\u30ED\u30B0\u30A4\u30F3\u3042\u308A\u304C\u3068\u3046\u3054\u3056\u3044\u307E\u3059\uFF01"
                )}
              ></Text>
            </Flex>
            <Flex
              gap="10px"
              direction="column"
              width="unset"
              height="unset"
              justifyContent="flex-start"
              alignItems="flex-start"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "ThanksDetailMessage")}
            >
              <Text
                fontFamily="Inter"
                fontSize="16px"
                fontWeight="400"
                color="rgba(0,0,0,1)"
                lineHeight="24px"
                textAlign="left"
                display="block"
                direction="column"
                justifyContent="unset"
                letterSpacing="0.01px"
                width="476px"
                height="unset"
                gap="unset"
                alignItems="unset"
                shrink="0"
                position="relative"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children="「HirobaChatは、あなたのLINE公式アカウントを全力でサポートします。新しいステップを共に進みましょう。&#x2028;&#x2028;「LINEビジネスを成功に導くためのサポート&#x2028;&#x2028;　・　AIによるパーソナライズされたコンテンツ提案&#x2028;　・　シンプルですぐ始めることができるリッチメニュー&#x2028;　・　今日からすぐに始めることができるクーポン&#x2028;&#x2028;"
                {...getOverrideProps(
                  overrides,
                  "\u300CHirobaChat\u306F\u3001\u3042\u306A\u305F\u306ELINE\u516C\u5F0F\u30A2\u30AB\u30A6\u30F3\u30C8\u3092\u5168\u529B\u3067\u30B5\u30DD\u30FC\u30C8\u3057\u307E\u3059\u3002\u65B0\u3057\u3044\u30B9\u30C6\u30C3\u30D7\u3092\u5171\u306B\u9032\u307F\u307E\u3057\u3087\u3046\u3002\u2028\u2028\u300CLINE\u30D3\u30B8\u30CD\u30B9\u3092\u6210\u529F\u306B\u5C0E\u304F\u305F\u3081\u306E\u30B5\u30DD\u30FC\u30C8\u2028\u2028\u3000\u30FB\u3000AI\u306B\u3088\u308B\u30D1\u30FC\u30BD\u30CA\u30E9\u30A4\u30BA\u3055\u308C\u305F\u30B3\u30F3\u30C6\u30F3\u30C4\u63D0\u6848\u2028\u3000\u30FB\u3000\u30B7\u30F3\u30D7\u30EB\u3067\u3059\u3050\u59CB\u3081\u308B\u3053\u3068\u304C\u3067\u304D\u308B\u30EA\u30C3\u30C1\u30E1\u30CB\u30E5\u30FC\u2028\u3000\u30FB\u3000\u4ECA\u65E5\u304B\u3089\u3059\u3050\u306B\u59CB\u3081\u308B\u3053\u3068\u304C\u3067\u304D\u308B\u30AF\u30FC\u30DD\u30F3\u2028\u2028"
                )}
              ></Text>
            </Flex>
          </Flex>
          <Flex
            gap="10px"
            direction="row"
            width="499px"
            height="unset"
            justifyContent="flex-end"
            alignItems="center"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "ActionPanel")}
          >
            <Button
              width="337px"
              height="unset"
              shrink="0"
              size="large"
              isDisabled={false}
              variation="primary"
              children="HirobaChatをはじめる"
              {...getOverrideProps(overrides, "Button")}
            ></Button>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
