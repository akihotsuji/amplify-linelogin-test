/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Icon, Image, Text, View } from "@aws-amplify/ui-react";
export default function RegistrationComplete(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="1440px"
      height="1024px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      border="1px SOLID rgba(0,0,0,1)"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "RegistrationComplete")}
      {...rest}
    >
      <Flex
        gap="29px"
        direction="row"
        width="150px"
        height="unset"
        justifyContent="flex-start"
        alignItems="center"
        position="absolute"
        top="0px"
        left="0px"
        padding="10px 10px 10px 10px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "Header")}
      >
        <Icon
          width="147px"
          height="50px"
          viewBox={{ minX: 0, minY: 0, width: 147, height: 50 }}
          paths={[{ d: "M0 0L147 0L147 50L0 50L0 0Z", fillRule: "nonzero" }]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          shrink="0"
          position="relative"
          {...getOverrideProps(overrides, "Logo")}
        ></Icon>
      </Flex>
      <Flex
        gap="65px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="center"
        alignItems="center"
        position="absolute"
        top="calc(50% - 210px - 0.5px)"
        left="calc(50% - 649px - 0px)"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "HeroContents")}
      >
        <Flex
          gap="10px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="center"
          alignItems="center"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "LeftContents")}
        >
          <Image
            width="629px"
            height="420px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            objectFit="cover"
            {...getOverrideProps(overrides, "regist_complete")}
          ></Image>
        </Flex>
        <Flex
          gap="48px"
          direction="column"
          width="604px"
          height="419px"
          justifyContent="center"
          alignItems="center"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "RightContents")}
        >
          <Flex
            gap="40px"
            direction="column"
            width="603px"
            height="unset"
            justifyContent="flex-start"
            alignItems="flex-start"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "HeroMessage")}
          >
            <Flex
              width="unset"
              height="unset"
              {...getOverrideProps(overrides, "Heading")}
            ></Flex>
            <Text
              fontFamily="Inter"
              fontSize="24px"
              fontWeight="400"
              color="rgba(13,26,38,1)"
              lineHeight="24px"
              textAlign="left"
              display="block"
              direction="column"
              justifyContent="unset"
              letterSpacing="0.09px"
              width="534px"
              height="unset"
              gap="unset"
              alignItems="unset"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="「Hiroba Chat」へのログインに成功しました。&#xA;&#xA;「Hiroba Chat」では、あなたのビジネスでの成功を強力にサポートすることができます。すぐに準備をはじめましょう！"
              {...getOverrideProps(
                overrides,
                "\u300CHiroba Chat\u300D\u3078\u306E\u30ED\u30B0\u30A4\u30F3\u306B\u6210\u529F\u3057\u307E\u3057\u305F\u3002 \u300CHiroba Chat\u300D\u3067\u306F\u3001\u3042\u306A\u305F\u306E\u30D3\u30B8\u30CD\u30B9\u3067\u306E\u6210\u529F\u3092\u5F37\u529B\u306B\u30B5\u30DD\u30FC\u30C8\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002\u3059\u3050\u306B\u6E96\u5099\u3092\u306F\u3058\u3081\u307E\u3057\u3087\u3046\uFF01"
              )}
            ></Text>
          </Flex>
          <Flex
            gap="10px"
            direction="column"
            width="602px"
            height="160px"
            justifyContent="flex-end"
            alignItems="flex-end"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "HeroAction")}
          >
            <Flex
              width="320px"
              height="64px"
              {...getOverrideProps(overrides, "Button")}
            ></Flex>
          </Flex>
        </Flex>
      </Flex>
    </View>
  );
}
