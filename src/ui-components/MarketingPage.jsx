/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  getOverrideProps,
  getOverridesFromVariants,
  mergeVariantsAndOverrides,
} from "@aws-amplify/ui-react/internal";
import NavBarHeader2 from "./NavBarHeader2";
import { Flex } from "@aws-amplify/ui-react";
export default function MarketingPage(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: {
        NavBarHeader2: {},
        HeroLayout1: {},
        MarketingPricing: {},
        Features2x2: {},
        CTASection: {},
        MarketingFooter: {},
        MarketingPage: {},
      },
      variantValues: {
        "\u30D7\u30ED\u30D1\u30C6\u30A31": "\u30C7\u30D5\u30A9\u30EB\u30C8",
      },
    },
    {
      overrides: {
        NavBarHeader2: {},
        HeroLayout1: {},
        MarketingPricing: {},
        Features2x2: {},
        CTASection: {},
        MarketingFooter: {},
        MarketingPage: {},
      },
      variantValues: {
        "\u30D7\u30ED\u30D1\u30C6\u30A31": "\u30D0\u30EA\u30A2\u30F3\u30C82",
      },
    },
  ];
  const overrides = mergeVariantsAndOverrides(
    getOverridesFromVariants(variants, props),
    overridesProp || {}
  );
  return (
    <Flex
      gap="0"
      direction="column"
      width="1440px"
      height="unset"
      justifyContent="flex-start"
      alignItems="flex-start"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      display="flex"
      {...getOverrideProps(overrides, "MarketingPage")}
      {...rest}
    >
      <NavBarHeader2
        display="flex"
        gap="0"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "NavBarHeader2")}
      ></NavBarHeader2>
      <Flex
        width="1440px"
        height="unset"
        {...getOverrideProps(overrides, "HeroLayout1")}
      ></Flex>
      <Flex
        width="1440px"
        height="unset"
        {...getOverrideProps(overrides, "MarketingPricing")}
      ></Flex>
      <Flex
        width="1440px"
        height="unset"
        {...getOverrideProps(overrides, "Features2x2")}
      ></Flex>
      <Flex
        width="1440px"
        height="unset"
        {...getOverrideProps(overrides, "CTASection")}
      ></Flex>
      <Flex
        width="1440px"
        height="unset"
        {...getOverrideProps(overrides, "MarketingFooter")}
      ></Flex>
    </Flex>
  );
}
