/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Icon, View } from "@aws-amplify/ui-react";
export default function SpeechBubbleDescription(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="23px"
      direction="row"
      width="unset"
      height="unset"
      justifyContent="flex-start"
      alignItems="center"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "SpeechBubbleDescription")}
      {...rest}
    >
      <View
        width="721px"
        height="125px"
        {...getOverrideProps(overrides, "SpeechBubble")}
      ></View>
      <Icon
        width="93px"
        height="87px"
        viewBox={{ minX: 0, minY: 0, width: 93, height: 87 }}
        paths={[
          {
            d: "M93 43.5C93 67.5244 72.1812 87 46.5 87C20.8188 87 0 67.5244 0 43.5C0 19.4756 20.8188 0 46.5 0C72.1812 0 93 19.4756 93 43.5Z",
            fill: "rgba(217,217,217,1)",
            fillRule: "nonzero",
          },
        ]}
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        shrink="0"
        position="relative"
        {...getOverrideProps(overrides, "Speaker")}
      ></Icon>
    </Flex>
  );
}
