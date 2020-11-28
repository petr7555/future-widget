import React, { useEffect, useState } from "react";
import axios from "axios";
import { Item } from "../types/types";
import OfferRow from "./OfferRow";

const NUMBER_OF_ITEMS = 4;

const fetchItems = async () => {
  try {
    const { data } = await axios.get(
      "https://search-api.fie.future.net.uk/widget.php?id=review&model_name=xbox_one_s&area=GB"
    );
    const rawItems: any[] = data.widget.data.offers.slice(0, NUMBER_OF_ITEMS);
    return rawItems.map((rawItem) => createItem(rawItem));
  } catch (e) {
    console.log(e);
    return e;
  }
};

const createItem = (rawItem: any): Item => ({
  id: rawItem.id,
  name: rawItem.offer.name,
  imageUrl: rawItem.image,
  currencySymbol: rawItem.offer.currency_symbol,
  price: rawItem.offer.price,
  merchantName: rawItem.merchant.name,
  link: rawItem.offer.link,
  linkText: rawItem.offer.link_text,
});

const Offers = () => {
  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    fetchItems().then((items) => setItems(items));
  }, []);

  if (!items) {
    return null;
  }

  return (
    <table>
      {items.map((item) => (
        <OfferRow key={item.id} item={item} />
      ))}
    </table>
  );
};

export default Offers;
