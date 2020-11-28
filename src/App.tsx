import React, { useEffect, useState } from "react";
import axios from "axios";

const NUMBER_OF_ITEMS = 4;

const fetchItems = async () => {
  try {
    const { data } = await axios.get(
      "https://search-api.fie.future.net.uk/widget.php?id=review&model_name=xbox_one_s&area=GB"
    );
    return data.widget.data.offers.slice(0, NUMBER_OF_ITEMS);
  } catch (error) {
    console.log(error);
  }
};

const App = () => {
  const [items, setItems] = useState();

  useEffect(() => {
    fetchItems().then((offers) => setItems(offers));
  }, []);

  if (!items) {
    return null;
  }

  return (
    <table>
      {
        // @ts-ignore
        items.map((item) => (
          <tr key={item.id}>
            <td>
              <img src={item.image} alt={item.name} />
            </td>
            <td>{item.offer.name}</td>
            <td>
              <span
                dangerouslySetInnerHTML={{
                  __html: `${item.offer.currency_symbol}`,
                }}
              />
              {`${item.offer.price} at ${item.merchant.name}`}
            </td>
            <td>
              <a href={item.offer.link}>{item.offer.link_text}</a>
            </td>
          </tr>
        ))
      }
    </table>
  );
};

export default App;
