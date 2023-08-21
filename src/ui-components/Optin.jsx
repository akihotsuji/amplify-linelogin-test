/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import Logo from "./Logo";
import {
  Button,
  CheckboxField,
  Flex,
  Text,
  TextAreaField,
  View,
} from "@aws-amplify/ui-react";
export default function Optin(props) {
  // チェックボックスの状態を管理するためのReactのstate
  const [isChecked, setIsChecked] = React.useState(false);

  const { overrides, ...rest } = props;

  // チェックボックスの状態を変更する関数
  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
  };

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
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "Optin")}
      {...rest}
    >
      <Logo
        display="flex"
        gap="8px"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="center"
        alignItems="center"
        position="absolute"
        top="0px"
        left="0px"
        padding="8px 8px 8px 8px"
        {...getOverrideProps(overrides, "Logo")}
      ></Logo>
      <Flex
        gap="20px"
        direction="column"
        width="1174px"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        position="absolute"
        top="132px"
        left="124px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "MainPanel")}
      >
        <Flex
          gap="0"
          direction="column"
          width="1174px"
          height="126px"
          justifyContent="space-between"
          alignItems="flex-start"
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
            alignItems="flex-start"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "TitlePanel")}
          >
            <Text
              fontFamily="Inter"
              fontSize="32px"
              fontWeight="400"
              color="rgba(0,0,0,1)"
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
              children="HirobaChat利用規約への同意"
              {...getOverrideProps(
                overrides,
                "HirobaChat\u5229\u7528\u898F\u7D04\u3078\u306E\u540C\u610F"
              )}
            ></Text>
          </Flex>
          <Flex
            gap="10px"
            direction="row"
            width="1183px"
            height="unset"
            justifyContent="flex-start"
            alignItems="flex-start"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "TextPanel")}
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
              width="1183px"
              height="unset"
              gap="unset"
              alignItems="unset"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="HirobaChatを利用いただくにあたり、利用規約及びプライバシーポリシーを一読ください。同意いただく場合には、画面下のチェックボックスを選択後、同意ボタンを押してください。"
              {...getOverrideProps(
                overrides,
                "HirobaChat\u3092\u5229\u7528\u3044\u305F\u3060\u304F\u306B\u3042\u305F\u308A\u3001\u5229\u7528\u898F\u7D04\u53CA\u3073\u30D7\u30E9\u30A4\u30D0\u30B7\u30FC\u30DD\u30EA\u30B7\u30FC\u3092\u4E00\u8AAD\u304F\u3060\u3055\u3044\u3002\u540C\u610F\u3044\u305F\u3060\u304F\u5834\u5408\u306B\u306F\u3001\u753B\u9762\u4E0B\u306E\u30C1\u30A7\u30C3\u30AF\u30DC\u30C3\u30AF\u30B9\u3092\u9078\u629E\u5F8C\u3001\u540C\u610F\u30DC\u30BF\u30F3\u3092\u62BC\u3057\u3066\u304F\u3060\u3055\u3044\u3002"
              )}
            ></Text>
          </Flex>
        </Flex>
        <Flex
          gap="10px"
          direction="column"
          width="1174px"
          height="530px"
          justifyContent="flex-start"
          alignItems="flex-start"
          shrink="0"
          position="relative"
          padding="10px 10px 10px 10px"
          {...getOverrideProps(overrides, "TermsPanel")}
        >
          <TextAreaField
            width="1180px"
            height="418px"
            shrink="0"
            placeholder="Placeholder"
            size="large"
            isDisabled={false}
            labelHidden={true}
            variation="default"
            {...getOverrideProps(overrides, "TextAreaField")}
          ></TextAreaField>
        </Flex>
        <Flex
          //gap="499px"
          direction="row"
          width="1174px"
          height="unset"
          justifyContent="space-between"
          alignItems="flex-start"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "ActionPanel")}
        >
          <Flex
            gap="10px"
            direction="column"
            width="unset"
            height="30px"
            justifyContent="space-between"
            alignItems="flex-start"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "OptinCheckboxPanel")}
          >
            <CheckboxField
              width="unset"
              height="unset"
              label="HirobaChatの利用規約とプライバシーポリシーに同意する"
              shrink="0"
              size="large"
              defaultChecked={false} // 初期状態をfalseに変更
              onChange={handleCheckboxChange} // チェックボックスの変更を監視
              isDisabled={false}
              labelPosition="end"
              {...getOverrideProps(overrides, "CheckboxField")}
            ></CheckboxField>
          </Flex>
          <Flex
            gap="10px"
            direction="column"
            width="499px"
            height="unset"
            justifyContent="center"
            alignItems="flex-end"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "OptinPanel")}
          >
            <Button
              width="337px"
              height="unset"
              shrink="0"
              size="large"
              isDisabled={!isChecked} // チェックボックスの状態に基づいてボタンの無効状態を変更
              variation="primary"
              children="同意する"
              {...getOverrideProps(overrides, "Button")}
            ></Button>
          </Flex>
        </Flex>
      </Flex>
    </View>
  );
}
