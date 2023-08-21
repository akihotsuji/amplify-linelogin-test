/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Icon, Image, Text } from "@aws-amplify/ui-react";
export default function Header(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="1027px"
      direction="row"
      width="1326px"
      height="unset"
      justifyContent="space-between"
      alignItems="center"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(64,170,191,1)"
      {...getOverrideProps(overrides, "Header")}
      {...rest}
    >
      <Flex
        gap="8px"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        position="relative"
        padding="8px 8px 8px 8px"
        {...getOverrideProps(overrides, "Logo")}
      >
        <Image
          width="108px"
          height="37px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          objectFit="unset"
          {...getOverrideProps(overrides, "HirobaC 1")}
        ></Image>
      </Flex>
      <Flex
        gap="11px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="center"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "CustomerPanel")}
      >
        <Flex
          gap="10px"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="center"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "NotificationsIcon")}
        >
          <Icon
            width="38px"
            height="34px"
            viewBox={{ minX: 0, minY: 0, width: 38, height: 34 }}
            paths={[]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            shrink="0"
            position="relative"
            {...getOverrideProps(overrides, "Vector39213956")}
          ></Icon>
          <Icon
            width="25.33px"
            height="27.63px"
            viewBox={{
              minX: 0,
              minY: 0,
              width: 25.333332061767578,
              height: 27.625,
            }}
            paths={[
              {
                d: "M12.6667 27.625C14.4083 27.625 15.8333 26.35 15.8333 24.7917L9.5 24.7917C9.5 26.35 10.925 27.625 12.6667 27.625ZM22.1667 19.125L22.1667 12.0417C22.1667 7.6925 19.5858 4.05167 15.0417 3.08833L15.0417 2.125C15.0417 0.949167 13.9808 0 12.6667 0C11.3525 0 10.2917 0.949167 10.2917 2.125L10.2917 3.08833C5.76333 4.05167 3.16667 7.67833 3.16667 12.0417L3.16667 19.125L0 21.9583L0 23.375L25.3333 23.375L25.3333 21.9583L22.1667 19.125ZM19 20.5417L6.33333 20.5417L6.33333 12.0417C6.33333 8.52833 8.72417 5.66667 12.6667 5.66667C16.6092 5.66667 19 8.52833 19 12.0417L19 20.5417Z",
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
            {...getOverrideProps(overrides, "Vector39213957")}
          ></Icon>
        </Flex>
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
          {...getOverrideProps(overrides, "PlanIcon")}
        >
          <Icon
            width="34px"
            height="34px"
            viewBox={{ minX: 0, minY: 0, width: 34, height: 34 }}
            paths={[]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            shrink="0"
            position="relative"
            {...getOverrideProps(overrides, "Vector39213959")}
          ></Icon>
          <Icon
            width="28.33px"
            height="28.33px"
            viewBox={{
              minX: 0,
              minY: 0,
              width: 28.333332061767578,
              height: 28.33331298828125,
            }}
            paths={[
              {
                d: "M14.1525 0C6.3325 0 0 6.34667 0 14.1667C0 21.9867 6.3325 28.3333 14.1525 28.3333C21.9867 28.3333 28.3333 21.9867 28.3333 14.1667C28.3333 6.34667 21.9867 0 14.1525 0ZM14.1667 25.5C7.905 25.5 2.83333 20.4283 2.83333 14.1667C2.83333 7.905 7.905 2.83333 14.1667 2.83333C20.4283 2.83333 25.5 7.905 25.5 14.1667C25.5 20.4283 20.4283 25.5 14.1667 25.5ZM19.125 12.75C20.3008 12.75 21.25 11.8008 21.25 10.625C21.25 9.44917 20.3008 8.5 19.125 8.5C17.9492 8.5 17 9.44917 17 10.625C17 11.8008 17.9492 12.75 19.125 12.75ZM9.20833 12.75C10.3842 12.75 11.3333 11.8008 11.3333 10.625C11.3333 9.44917 10.3842 8.5 9.20833 8.5C8.0325 8.5 7.08333 9.44917 7.08333 10.625C7.08333 11.8008 8.0325 12.75 9.20833 12.75ZM14.1667 21.9583C17.0425 21.9583 19.55 20.3858 20.8958 18.0625C21.165 17.595 20.825 17 20.2725 17L8.06083 17C7.5225 17 7.16833 17.595 7.4375 18.0625C8.78333 20.3858 11.2908 21.9583 14.1667 21.9583Z",
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
            {...getOverrideProps(overrides, "Vector39213960")}
          ></Icon>
        </Flex>
        <Flex
          gap="8px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="center"
          shrink="0"
          position="relative"
          padding="0px 30px 0px 0px"
          {...getOverrideProps(overrides, "CustomerName")}
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
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="LoginName"
            {...getOverrideProps(overrides, "LoginName")}
          ></Text>
        </Flex>
      </Flex>
    </Flex>
  );
}
