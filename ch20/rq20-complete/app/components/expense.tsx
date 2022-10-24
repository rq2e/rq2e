import styled from "styled-components";
import type { Category, Expense } from "../models/types.client";

type Props = Pick<Expense, "item" | "value"> & {
  category: Pick<Category, "name" | "color">;
};

const Row = styled.p`
  background: white;
  border-radius: 0.25em;
  padding: 0.125em 0.5em;
  margin: 0;
  display: flex;
  align-items: center;
  gap: 0.5em;
  font-size: 120%;
`;

const Tag = styled.span`
  color: black;
  box-shadow: 0 0 1px white;
  display: block;
  line-height: 1;
  font-size: 50%;
  padding: 0.25em 0.5em;
  border-radius: 1em;
`;

const Item = styled.span`
  flex-grow: 1;
`;

const Value = styled.span`
  text-align: right;
  flex-basis: 30%;
`;

export const List = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.35em;
  align-items: stretch;
`;

function ExpenseItem({ item, category, value }: Props) {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });
  return (
    <Row>
      <Item>{item}</Item>
      <Tag style={{ backgroundColor: category.color }}>{category.name}</Tag>
      <Value>{formatter.format(value)}</Value>
    </Row>
  );
}

export default ExpenseItem;
