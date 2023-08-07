/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import MarketingFooter from "./MarketingFooter";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Collection } from "@aws-amplify/ui-react";
export default function MarketingFooterCollection(props) {
  const { items, overrideItems, overrides, ...rest } = props;
  return (
    <Collection
      type="list"
      searchPlaceholder="Search..."
      direction="column"
      justifyContent="stretch"
      items={items || []}
      {...getOverrideProps(overrides, "MarketingFooterCollection")}
      {...rest}
    >
      {(item, index) => (
        <MarketingFooter
          key={item.id}
          {...(overrideItems && overrideItems({ item, index }))}
        ></MarketingFooter>
      )}
    </Collection>
  );
}
