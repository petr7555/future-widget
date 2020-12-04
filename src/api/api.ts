import axios from "axios";
import { Item } from "../types/types";

const NUMBER_OF_ITEMS = 4;

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

export const fetchItems = async () => {
  try {
    const { data } = await axios.get(
      "https://search-api.fie.future.net.uk/widget.php?id=review&model_name=xbox_one_s&area=GB"
    );
    const rawItems: any[] = data.widget.data.offers.slice(0, NUMBER_OF_ITEMS);
    return rawItems.map((rawItem) => createItem(rawItem));
  } catch (e) {
    console.log(e);
    throw e;
  }
};