/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Icon } from "@aws-amplify/ui-react";
export default function HeaderBackPage(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="0"
      direction="row"
      width="unset"
      height="unset"
      justifyContent="flex-start"
      alignItems="center"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "HeaderBackPage")}
      {...rest}
    >
      <Flex
        gap="0"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "BackPageIcon")}
      >
        <Icon
          width="40px"
          height="40px"
          viewBox={{ minX: 0, minY: 0, width: 40, height: 40 }}
          paths={[]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          shrink="0"
          position="relative"
          {...getOverrideProps(overrides, "Vector40364803")}
        ></Icon>
        <Icon
          width="17.9px"
          height="31.28px"
          viewBox={{
            minX: 0,
            minY: 0,
            width: 17.902099609375,
            height: 31.2750244140625,
          }}
          paths={[
            {
              d: "M17.2875 0.6125C16.4708 -0.204167 15.1542 -0.204167 14.3375 0.6125L0.4875 14.4625C-0.1625 15.1125 -0.1625 16.1625 0.4875 16.8125L14.3375 30.6625C15.1542 31.4792 16.4708 31.4792 17.2875 30.6625C18.1042 29.8458 18.1042 28.5292 17.2875 27.7125L5.22083 15.6292L17.3042 3.54583C18.1042 2.74583 18.1042 1.4125 17.2875 0.6125Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          shrink="0"
          position="relative"
          {...getOverrideProps(overrides, "Vector40364804")}
        ></Icon>
      </Flex>
      <Flex
        width="unset"
        height="unset"
        {...getOverrideProps(overrides, "BackBageText")}
      ></Flex>
    </Flex>
  );
}
