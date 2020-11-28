import React from "react";
import { Item } from "../types/types";

type OfferRowProps = {
  item: Item;
};

const OfferRow = ({ item }: OfferRowProps) => {
  return (
    <tr>
      <td>
        <img src={item.imageUrl} alt={item.name} />
      </td>
      <td>{item.name}</td>
      <td>
        <span
          dangerouslySetInnerHTML={{
            __html: `${item.currencySymbol}`,
          }}
        />
        {`${item.price} at ${item.merchantName}`}
      </td>
      <td>
        <a href={item.link}>{item.linkText}</a>
      </td>
    </tr>
  );
};

export default OfferRow;
