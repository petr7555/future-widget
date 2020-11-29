import React from "react";
import { Item } from "../types/types";
import styled from "styled-components";

const Table = styled.div`
  border-bottom: 1px solid grey;
  &:last-child {
    border-bottom-style: none;
  }
`;

const Content = styled.div`
  display: flex;
  align-items: stretch;
`;

const PriceTag = styled.a`
  color: #3083dc;
  font-weight: bold;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const ViewButton = styled.a`
  display: block;
  background-color: #2ebfa5;
  text-decoration: none;
  color: white;
  width: 100px;
  font-size: 16px;
  font-weight: 600;
  text-align: center;
  padding: 2px 12px;
  align-self: flex-end;
  transition: background-color 0.1s;

  &:hover {
    background-color: #1f8371;
  }
`;

const ImageDiv = styled.div`
  align-self: center;
`;

const Description = styled.div`
  width: 100%;
  width: height%;
  text-align: left;
  padding: 10px;
  display: flex;
  flex-direction: column;
`;

const Name = styled.p`
  margin: 0;
`;

type OfferRowProps = {
  item: Item;
};

const SingleOffer = ({ item }: OfferRowProps) => {
  return (
    <Table>
      <Content>
        <ImageDiv>
          {item.imageUrl && (
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              <img src={item.imageUrl} alt={item.name} />
            </a>
          )}
        </ImageDiv>
        <Description>
          <Name>
            <strong>{item.name}</strong>
          </Name>
          <PriceTag href={item.link}>
            <span
              dangerouslySetInnerHTML={{
                __html: `${item.currencySymbol}`,
              }}
            />
            {`${item.price} at ${item.merchantName}`}
          </PriceTag>
          <ViewButton
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            {item.linkText}
          </ViewButton>
        </Description>
      </Content>
    </Table>
  );
};

export default SingleOffer;
