import React, { useEffect, useState } from "react";
import { Item } from "../types/types";
import SingleOffer from "./SingleOffer";
import styled from "styled-components";
import {fetchItems} from "../api/api";

const Container = styled.div`
  border-radius: 15px;
  background-color: #ffffff;
  font-family: "Titillium Web", sans-serif;
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.014),
    0 6.7px 5.3px rgba(0, 0, 0, 0.02), 0 12.5px 10px rgba(0, 0, 0, 0.025),
    0 22.3px 17.9px rgba(0, 0, 0, 0.03), 0 41.8px 33.4px rgba(0, 0, 0, 0.036),
    0 100px 80px rgba(0, 0, 0, 0.05);
  overflow: hidden;
`;

const Offers = () => {
  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    fetchItems().then((items) => setItems(items));
  }, []);

  if (!items) {
    return null;
  }

  return (
    <Container>
      {items.map((item) => (
        <SingleOffer key={item.id} item={item} />
      ))}
    </Container>
  );
};

export default Offers;
