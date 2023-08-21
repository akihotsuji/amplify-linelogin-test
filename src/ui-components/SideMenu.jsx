/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Icon, Text, View } from "@aws-amplify/ui-react";
export default function SideMenu(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="106px"
      direction="column"
      width="unset"
      height="unset"
      justifyContent="flex-start"
      alignItems="flex-start"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "SideMenu")}
      {...rest}
    >
      <Flex
        gap="19px"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "MenuDailyWork")}
      >
        <Flex
          gap="12px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="center"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "MenuHome")}
        >
          <Flex
            gap="8px"
            direction="row"
            width="40px"
            height="40px"
            justifyContent="flex-start"
            alignItems="flex-start"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "MemuHomeIcon")}
          >
            <Icon
              width="30.67px"
              height="27.76px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 30.6668701171875,
                height: 27.758331298828125,
              }}
              paths={[
                {
                  d: "M11.9964 26.0917L11.9964 17.7583L18.6631 17.7583L18.6631 26.0917C18.6631 27.0083 19.4131 27.7583 20.3298 27.7583L25.3298 27.7583C26.2464 27.7583 26.9964 27.0083 26.9964 26.0917L26.9964 14.425L29.8298 14.425C30.5964 14.425 30.9631 13.475 30.3798 12.975L16.4464 0.425C15.8131 -0.141667 14.8464 -0.141667 14.2131 0.425L0.279753 12.975C-0.286913 13.475 0.0630865 14.425 0.829753 14.425L3.66309 14.425L3.66309 26.0917C3.66309 27.0083 4.41309 27.7583 5.32975 27.7583L10.3298 27.7583C11.2464 27.7583 11.9964 27.0083 11.9964 26.0917Z",
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
              {...getOverrideProps(overrides, "Vector39213968")}
            ></Icon>
          </Flex>
          <Flex
            gap="10px"
            direction="row"
            width="unset"
            height="40px"
            justifyContent="flex-start"
            alignItems="center"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "MenuHomeText")}
          >
            <Text
              fontFamily="Noto Sans JP"
              fontSize="16px"
              fontWeight="400"
              color="rgba(0,0,0,1)"
              lineHeight="23.167999267578125px"
              textAlign="left"
              display="block"
              direction="column"
              justifyContent="unset"
              width="48px"
              height="17px"
              gap="unset"
              alignItems="unset"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="ホーム"
              {...getOverrideProps(overrides, "\u30DB\u30FC\u30E0")}
            ></Text>
          </Flex>
        </Flex>
        <Flex
          gap="9px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="center"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "MenuReport")}
        >
          <Flex
            gap="8px"
            direction="column"
            width="40px"
            height="40px"
            justifyContent="center"
            alignItems="center"
            shrink="0"
            position="relative"
            padding="8px 8px 8px 8px"
            {...getOverrideProps(overrides, "MenuReportIcon")}
          >
            <Icon
              width="27.42px"
              height="25px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 27.4193115234375,
                height: 25,
              }}
              paths={[
                {
                  d: "M0 7.5L5.87558 7.5L5.87558 25L0 25L0 7.5ZM10.9677 0L16.4516 0L16.4516 25L10.9677 25L10.9677 0ZM21.9355 14.2857L27.4194 14.2857L27.4194 25L21.9355 25L21.9355 14.2857Z",
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
              {...getOverrideProps(overrides, "Vector39213984")}
            ></Icon>
          </Flex>
          <Flex
            gap="10px"
            direction="row"
            width="unset"
            height="40px"
            justifyContent="flex-start"
            alignItems="center"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "MenuReportText")}
          >
            <Text
              fontFamily="Noto Sans JP"
              fontSize="16px"
              fontWeight="400"
              color="rgba(0,0,0,1)"
              lineHeight="23.167999267578125px"
              textAlign="left"
              display="block"
              direction="column"
              justifyContent="unset"
              width="64px"
              height="28px"
              gap="unset"
              alignItems="unset"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="レポート"
              {...getOverrideProps(overrides, "\u30EC\u30DD\u30FC\u30C8")}
            ></Text>
          </Flex>
        </Flex>
        <Flex
          gap="9px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="center"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "MenuMessage")}
        >
          <Flex
            gap="8px"
            direction="row"
            width="40px"
            height="40px"
            justifyContent="center"
            alignItems="center"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "MenuMessageIcon")}
          >
            <Icon
              width="33.33px"
              height="33.33px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 33.3333740234375,
                height: 33.333343505859375,
              }}
              paths={[
                {
                  d: "M30 0L3.33333 0C1.5 0 0 1.5 0 3.33333L0 33.3333L6.66667 26.6667L30 26.6667C31.8333 26.6667 33.3333 25.1667 33.3333 23.3333L33.3333 3.33333C33.3333 1.5 31.8333 0 30 0ZM30 23.3333L6.66667 23.3333L3.33333 26.6667L3.33333 3.33333L30 3.33333L30 23.3333Z",
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
              {...getOverrideProps(overrides, "Vector39264885")}
            ></Icon>
          </Flex>
          <Flex
            gap="10px"
            direction="row"
            width="unset"
            height="40px"
            justifyContent="flex-start"
            alignItems="center"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "MenuMessageText")}
          >
            <Text
              fontFamily="Noto Sans JP"
              fontSize="16px"
              fontWeight="400"
              color="rgba(0,0,0,1)"
              lineHeight="23.167999267578125px"
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
              children="メッセージ"
              {...getOverrideProps(overrides, "\u30E1\u30C3\u30BB\u30FC\u30B8")}
            ></Text>
          </Flex>
        </Flex>
        <Flex
          gap="8px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "MenuSendMessage")}
        >
          <Flex
            gap="10px"
            direction="row"
            width="40px"
            height="40px"
            justifyContent="center"
            alignItems="center"
            shrink="0"
            position="relative"
            padding="10px 10px 10px 10px"
            {...getOverrideProps(overrides, "MenuSendMessageSpacer")}
          >
            <View
              width="35px"
              height="35px"
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              backgroundColor="rgba(217,217,217,1)"
              {...getOverrideProps(overrides, "Rectangle 53927149")}
            ></View>
          </Flex>
          <Flex
            gap="10px"
            direction="row"
            width="unset"
            height="40px"
            justifyContent="flex-start"
            alignItems="center"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "MenuSendMessageText")}
          >
            <Text
              fontFamily="Noto Sans JP"
              fontSize="16px"
              fontWeight="400"
              color="rgba(0,0,0,1)"
              lineHeight="23.167999267578125px"
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
              children="メッセージ配信"
              {...getOverrideProps(
                overrides,
                "\u30E1\u30C3\u30BB\u30FC\u30B8\u914D\u4FE1"
              )}
            ></Text>
          </Flex>
        </Flex>
        <Flex
          gap="8px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "MenuMessageTemplete")}
        >
          <Flex
            gap="10px"
            direction="row"
            width="40px"
            height="40px"
            justifyContent="center"
            alignItems="center"
            shrink="0"
            position="relative"
            padding="10px 10px 10px 10px"
            {...getOverrideProps(overrides, "MenuMessageTempleteSpacer")}
          >
            <View
              width="35px"
              height="35px"
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              backgroundColor="rgba(217,217,217,1)"
              {...getOverrideProps(overrides, "Rectangle 53927153")}
            ></View>
          </Flex>
          <Flex
            gap="10px"
            direction="row"
            width="unset"
            height="40px"
            justifyContent="flex-start"
            alignItems="center"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "MenuMessageTempleteText")}
          >
            <Text
              fontFamily="Noto Sans JP"
              fontSize="16px"
              fontWeight="400"
              color="rgba(0,0,0,1)"
              lineHeight="23.167999267578125px"
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
              children="テンプレート登録"
              {...getOverrideProps(
                overrides,
                "\u30C6\u30F3\u30D7\u30EC\u30FC\u30C8\u767B\u9332"
              )}
            ></Text>
          </Flex>
        </Flex>
        <Flex
          gap="9px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "MenuTask")}
        >
          <Flex
            gap="8px"
            direction="row"
            width="40px"
            height="40px"
            justifyContent="center"
            alignItems="center"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "MenuTaskIcon")}
          >
            <Icon
              width="33.33px"
              height="31.67px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 33.3333740234375,
                height: 31.666671752929688,
              }}
              paths={[
                {
                  d: "M20 6.66667L20 3.33333L13.3333 3.33333L13.3333 6.66667L20 6.66667ZM3.33333 10L3.33333 28.3333L30 28.3333L30 10L3.33333 10ZM30 6.66667C31.85 6.66667 33.3333 8.15 33.3333 10L33.3333 28.3333C33.3333 30.1833 31.85 31.6667 30 31.6667L3.33333 31.6667C1.48333 31.6667 0 30.1833 0 28.3333L0.0166667 10C0.0166667 8.15 1.48333 6.66667 3.33333 6.66667L10 6.66667L10 3.33333C10 1.48333 11.4833 0 13.3333 0L20 0C21.85 0 23.3333 1.48333 23.3333 3.33333L23.3333 6.66667L30 6.66667Z",
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
              {...getOverrideProps(overrides, "Vector39264831")}
            ></Icon>
          </Flex>
          <Flex
            gap="10px"
            direction="row"
            width="unset"
            height="40px"
            justifyContent="flex-start"
            alignItems="center"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "MenuTaskText")}
          >
            <Text
              fontFamily="Noto Sans JP"
              fontSize="16px"
              fontWeight="400"
              color="rgba(0,0,0,1)"
              lineHeight="23.167999267578125px"
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
              children="おすすめアクション"
              {...getOverrideProps(
                overrides,
                "\u304A\u3059\u3059\u3081\u30A2\u30AF\u30B7\u30E7\u30F3"
              )}
            ></Text>
          </Flex>
        </Flex>
      </Flex>
      <Flex
        gap="14px"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "MenuSettingLINE")}
      >
        <Flex
          gap="9px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "MenuService")}
        >
          <Flex
            gap="8px"
            direction="row"
            width="40px"
            height="40px"
            justifyContent="center"
            alignItems="center"
            shrink="0"
            position="relative"
            padding="6px 6px 6px 6px"
            {...getOverrideProps(overrides, "MenuServiceIcon")}
          >
            <Icon
              width="35px"
              height="35px"
              viewBox={{ minX: 0, minY: 0, width: 35, height: 35 }}
              paths={[]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              shrink="0"
              position="relative"
              {...getOverrideProps(overrides, "Vector39264844")}
            ></Icon>
            <Icon
              width="28.33px"
              height="21.67px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 28.3333740234375,
                height: 21.666667938232422,
              }}
              paths={[
                {
                  d: "M23.3333 16.6667L26.6667 16.6667L26.6667 11.6667L28.3333 11.6667L28.3333 8.33333L26.6667 0L1.66667 0L0 8.33333L0 11.6667L1.66667 11.6667L1.66667 21.6667L16.6667 21.6667L16.6667 11.6667L23.3333 11.6667L23.3333 16.6667ZM13.3333 18.3333L5 18.3333L5 11.6667L13.3333 11.6667L13.3333 18.3333Z",
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
              {...getOverrideProps(overrides, "Vector39264845")}
            ></Icon>
            <Icon
              width="25px"
              height="3.33px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 25,
                height: 3.333333969116211,
              }}
              paths={[
                {
                  d: "M0 0L25 0L25 3.33333L0 3.33333L0 0Z",
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
              {...getOverrideProps(overrides, "Vector39264846")}
            ></Icon>
            <Icon
              width="13.33px"
              height="13.33px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 13.3333740234375,
                height: 13.333335876464844,
              }}
              paths={[
                {
                  d: "M8.33333 5L8.33333 0L5 0L5 5L0 5L0 8.33333L5 8.33333L5 13.3333L8.33333 13.3333L8.33333 8.33333L13.3333 8.33333L13.3333 5L8.33333 5Z",
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
              {...getOverrideProps(overrides, "Vector39264847")}
            ></Icon>
          </Flex>
          <Flex
            gap="10px"
            direction="row"
            width="unset"
            height="40px"
            justifyContent="flex-start"
            alignItems="center"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "MenuServiceText")}
          >
            <Text
              fontFamily="Noto Sans JP"
              fontSize="16px"
              fontWeight="400"
              color="rgba(0,0,0,1)"
              lineHeight="23.167999267578125px"
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
              children="サービス設定"
              {...getOverrideProps(
                overrides,
                "\u30B5\u30FC\u30D3\u30B9\u8A2D\u5B9A"
              )}
            ></Text>
          </Flex>
        </Flex>
        <Flex
          gap="9px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "MenuRichMenu")}
        >
          <Flex
            gap="10px"
            direction="row"
            width="40px"
            height="40px"
            justifyContent="center"
            alignItems="center"
            shrink="0"
            position="relative"
            padding="10px 10px 10px 10px"
            {...getOverrideProps(overrides, "MenuRichMenuSpacer")}
          >
            <View
              width="35px"
              height="35px"
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              backgroundColor="rgba(217,217,217,1)"
              {...getOverrideProps(overrides, "Rectangle 63928170")}
            ></View>
          </Flex>
          <Flex
            gap="10px"
            direction="row"
            width="unset"
            height="40px"
            justifyContent="flex-start"
            alignItems="center"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "MenuRichMenutext")}
          >
            <Text
              fontFamily="Noto Sans JP"
              fontSize="16px"
              fontWeight="400"
              color="rgba(0,0,0,1)"
              lineHeight="23.167999267578125px"
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
              children="リッチメニュー"
              {...getOverrideProps(
                overrides,
                "\u30EA\u30C3\u30C1\u30E1\u30CB\u30E5\u30FC"
              )}
            ></Text>
          </Flex>
        </Flex>
        <Flex
          gap="9px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "MenuKeywordRespond")}
        >
          <Flex
            gap="10px"
            direction="row"
            width="40px"
            height="40px"
            justifyContent="center"
            alignItems="center"
            shrink="0"
            position="relative"
            padding="10px 10px 10px 10px"
            {...getOverrideProps(overrides, "MenuKeywordRespondSpacer")}
          >
            <View
              width="35px"
              height="35px"
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              backgroundColor="rgba(217,217,217,1)"
              {...getOverrideProps(overrides, "Rectangle 63928176")}
            ></View>
          </Flex>
          <Flex
            gap="10px"
            direction="row"
            width="unset"
            height="40px"
            justifyContent="flex-start"
            alignItems="center"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "MenuKeywordRespondText")}
          >
            <Text
              fontFamily="Noto Sans JP"
              fontSize="16px"
              fontWeight="400"
              color="rgba(0,0,0,1)"
              lineHeight="23.167999267578125px"
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
              children="キーワード応答"
              {...getOverrideProps(
                overrides,
                "\u30AD\u30FC\u30EF\u30FC\u30C9\u5FDC\u7B54"
              )}
            ></Text>
          </Flex>
        </Flex>
        <Flex
          gap="9px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "MenuJoinRespond")}
        >
          <Flex
            gap="10px"
            direction="row"
            width="40px"
            height="40px"
            justifyContent="center"
            alignItems="center"
            shrink="0"
            position="relative"
            padding="10px 10px 10px 10px"
            {...getOverrideProps(overrides, "MenuJoinRespondSpacer")}
          >
            <View
              width="35px"
              height="35px"
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              backgroundColor="rgba(217,217,217,1)"
              {...getOverrideProps(overrides, "Rectangle 63929181")}
            ></View>
          </Flex>
          <Flex
            gap="10px"
            direction="row"
            width="unset"
            height="40px"
            justifyContent="flex-start"
            alignItems="center"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "MenuJoinRespondText")}
          >
            <Text
              fontFamily="Noto Sans JP"
              fontSize="16px"
              fontWeight="400"
              color="rgba(0,0,0,1)"
              lineHeight="23.167999267578125px"
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
              children="お友達追加応答"
              {...getOverrideProps(
                overrides,
                "\u304A\u53CB\u9054\u8FFD\u52A0\u5FDC\u7B54"
              )}
            ></Text>
          </Flex>
        </Flex>
        <Flex
          gap="9px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "MenuSimpleCoupon")}
        >
          <Flex
            gap="10px"
            direction="row"
            width="40px"
            height="40px"
            justifyContent="center"
            alignItems="center"
            shrink="0"
            position="relative"
            padding="10px 10px 10px 10px"
            {...getOverrideProps(overrides, "MenuSimpleCouponSpacer")}
          >
            <View
              width="35px"
              height="35px"
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              backgroundColor="rgba(217,217,217,1)"
              {...getOverrideProps(overrides, "Rectangle 63929186")}
            ></View>
          </Flex>
          <Flex
            gap="10px"
            direction="row"
            width="unset"
            height="40px"
            justifyContent="flex-start"
            alignItems="center"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "MenuSimpleCouponText")}
          >
            <Text
              fontFamily="Noto Sans JP"
              fontSize="16px"
              fontWeight="400"
              color="rgba(0,0,0,1)"
              lineHeight="23.167999267578125px"
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
              children="シンプルクーポン"
              {...getOverrideProps(
                overrides,
                "\u30B7\u30F3\u30D7\u30EB\u30AF\u30FC\u30DD\u30F3"
              )}
            ></Text>
          </Flex>
        </Flex>
      </Flex>
      <Flex
        gap="22px"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "MenuOther")}
      >
        <Flex
          gap="9px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="center"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "MenuSetting")}
        >
          <Flex
            gap="8px"
            direction="row"
            width="40px"
            height="40px"
            justifyContent="center"
            alignItems="center"
            shrink="0"
            position="relative"
            padding="6px 6px 6px 6px"
            {...getOverrideProps(overrides, "MenuSettingIcon")}
          >
            <Icon
              width="35px"
              height="35px"
              viewBox={{ minX: 0, minY: 0, width: 35, height: 35 }}
              paths={[]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              shrink="0"
              position="relative"
              {...getOverrideProps(overrides, "Vector39264898")}
            ></Icon>
            <Icon
              width="31.13px"
              height="32px"
              viewBox={{ minX: 0, minY: 0, width: 31.126708984375, height: 32 }}
              paths={[
                {
                  d: "M27.4633 17.5667C27.53 17.0667 27.5633 16.55 27.5633 16C27.5633 15.4667 27.53 14.9333 27.4467 14.4333L30.83 11.8C31.13 11.5667 31.2133 11.1167 31.03 10.7833L27.83 5.25C27.63 4.88333 27.2133 4.76667 26.8467 4.88333L22.8633 6.48333C22.03 5.85 21.1467 5.31667 20.1633 4.91667L19.5633 0.683333C19.4967 0.283333 19.1633 0 18.7633 0L12.3633 0C11.9633 0 11.6467 0.283333 11.58 0.683333L10.98 4.91667C9.99667 5.31667 9.09667 5.86667 8.28 6.48333L4.29667 4.88333C3.93 4.75 3.51333 4.88333 3.31333 5.25L0.130001 10.7833C-0.0699994 11.1333 -0.00333294 11.5667 0.33 11.8L3.71333 14.4333C3.63 14.9333 3.56333 15.4833 3.56333 16C3.56333 16.5167 3.59667 17.0667 3.68 17.5667L0.296667 20.2C-0.00333292 20.4333 -0.0866661 20.8833 0.0966673 21.2167L3.29667 26.75C3.49667 27.1167 3.91333 27.2333 4.28 27.1167L8.26333 25.5167C9.09667 26.15 9.98 26.6833 10.9633 27.0833L11.5633 31.3167C11.6467 31.7167 11.9633 32 12.3633 32L18.7633 32C19.1633 32 19.4967 31.7167 19.5467 31.3167L20.1467 27.0833C21.13 26.6833 22.03 26.15 22.8467 25.5167L26.83 27.1167C27.1967 27.25 27.6133 27.1167 27.8133 26.75L31.0133 21.2167C31.2133 20.85 31.13 20.4333 30.8133 20.2L27.4633 17.5667ZM15.5633 22C12.2633 22 9.56333 19.3 9.56333 16C9.56333 12.7 12.2633 10 15.5633 10C18.8633 10 21.5633 12.7 21.5633 16C21.5633 19.3 18.8633 22 15.5633 22Z",
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
              {...getOverrideProps(overrides, "Vector39264899")}
            ></Icon>
          </Flex>
          <Flex
            gap="10px"
            direction="row"
            width="unset"
            height="40px"
            justifyContent="flex-start"
            alignItems="center"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "MenuSettingText")}
          >
            <Text
              fontFamily="Noto Sans JP"
              fontSize="16px"
              fontWeight="400"
              color="rgba(0,0,0,1)"
              lineHeight="23.167999267578125px"
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
              children="設定"
              {...getOverrideProps(overrides, "\u8A2D\u5B9A")}
            ></Text>
          </Flex>
        </Flex>
        <Flex
          gap="9px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "MenuLogout")}
        >
          <Flex
            gap="8px"
            direction="row"
            width="40px"
            height="40px"
            justifyContent="center"
            alignItems="center"
            shrink="0"
            position="relative"
            padding="6px 6px 6px 6px"
            {...getOverrideProps(overrides, "MenuLogoutIcon")}
          >
            <Icon
              width="28px"
              height="28px"
              viewBox={{ minX: 0, minY: 0, width: 28, height: 28 }}
              paths={[
                {
                  d: "M21 6.22222L19.026 8.41556L22.638 12.4444L8.4 12.4444L8.4 15.5556L22.638 15.5556L19.026 19.5689L21 21.7778L28 14L21 6.22222ZM2.8 3.11111L14 3.11111L14 0L2.8 0C1.26 0 0 1.4 0 3.11111L0 24.8889C0 26.6 1.26 28 2.8 28L14 28L14 24.8889L2.8 24.8889L2.8 3.11111Z",
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
              {...getOverrideProps(overrides, "Vector39264905")}
            ></Icon>
          </Flex>
          <Flex
            gap="10px"
            direction="row"
            width="unset"
            height="40px"
            justifyContent="flex-start"
            alignItems="center"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "MenuLogoutText")}
          >
            <Text
              fontFamily="Noto Sans JP"
              fontSize="16px"
              fontWeight="400"
              color="rgba(0,0,0,1)"
              lineHeight="23.167999267578125px"
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
              children="ログアウト"
              {...getOverrideProps(overrides, "\u30ED\u30B0\u30A2\u30A6\u30C8")}
            ></Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
