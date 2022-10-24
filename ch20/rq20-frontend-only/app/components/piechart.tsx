import styled from "styled-components";

type PieItem = { name: string; color: string; value: number };
type Props = { items: PieItem[] };

const Wrapper = styled.section`
  background: white;
  border-radius: 0.5em;
  display: flex;
  flex-direction: column;
  margin: 0.5em 0;
  padding: 0.5em;
  align-items: center;
`;

const Pie = styled.div`
  width: 10em;
  height: 10em;
  border-radius: 50%;
`;

const Legend = styled.ul`
  font-size: 70%;
  list-style: none;
  display: flex;
  justify-content: center;
  gap: 1em;
  flex-wrap: wrap;
  padding: 0 0.75em;
`;

const Label = styled.li`
  display: flex;
  align-items: center;
  gap: 0.5em;
`;

const Dot = styled.span`
  border-radius: 50%;
  display: inline-block;
  width: 0.5em;
  height: 0.5em;
`;

function PieChart({ items }: Props) {
  items.sort(({ value: a }, { value: b }) => b - a);
  const sum = items.reduce((a, { value }) => a + value, 0);
  const incremental = items
    .reduce((list, { value }) => [...list, list[list.length - 1] + value], [0])
    .slice(1);
  const gradientStops = Object.values(incremental)
    .map((value, index) => [
      [items[index].color, 0].join(" "),
      [items[index].color, `${value / sum}turn`].join(" "),
    ])
    .flat()
    .join(",");
  const gradient = `conic-gradient(${gradientStops})`;
  return (
    <Wrapper>
      <Pie style={{ backgroundImage: gradient }} />
      <Legend>
        {items.map(({ name, color, value }) =>
          value > 0 ? (
            <Label key={name}>
              <Dot style={{ backgroundColor: color }} />
              {name}
            </Label>
          ) : null
        )}
      </Legend>
    </Wrapper>
  );
}

export default PieChart;
