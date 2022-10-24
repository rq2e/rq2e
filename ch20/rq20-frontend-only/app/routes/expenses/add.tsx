import { Link } from "@remix-run/react";
import styled from "styled-components";
import * as Forms from "~/components/form";

enum CategoryType {
  Existing = "existing",
  New = "new",
}

const Background = styled.aside`
  position: fixed;
  inset: 0;
  background-color: rgba(0 0 0 / 0.5);
`;

const Dialog = styled.section`
  position: absolute;
  inset: 1em 50%;
  background-color: white;
  padding: 1em;
  border-radius: 1em;
  --width: min(calc(100vw - 2em), 40em);
  width: var(--width);
  margin-left: calc(var(--width) / -2);
`;

export default function AddExpense() {
  return (
    <Background>
      <Dialog>
        <Forms.Form method="post">
          <Forms.Title>Add expense</Forms.Title>
          <Forms.Label>
            <Forms.LabelSpan>Description</Forms.LabelSpan>
            <Forms.Input name="item" />
          </Forms.Label>
          <Forms.Label>
            <Forms.LabelSpan>Amount</Forms.LabelSpan>
            <Forms.Input name="value" type="number" />
          </Forms.Label>
          <Forms.Label>
            <Forms.LabelSpan>Category</Forms.LabelSpan>
            <Forms.OptionGroup>
              <Forms.Option
                defaultChecked
                id="cat-exist"
                type="radio"
                name="categoryType"
                value={CategoryType.Existing}
              />
              <Forms.OptionName htmlFor="cat-exist">
                Select existing category
              </Forms.OptionName>
              <Forms.OptionContent>
                <Forms.Select name="categoryId">
                  <option>Food</option>
                  <option>Housing</option>
                  <option>Utilities</option>
                  <option>Transport</option>
                </Forms.Select>
              </Forms.OptionContent>
            </Forms.OptionGroup>
            <Forms.OptionGroup>
              <Forms.Option
                id="cat-new"
                type="radio"
                name="categoryType"
                value={CategoryType.New}
              />
              <Forms.OptionName htmlFor="cat-new">
                Create new category
              </Forms.OptionName>
              <Forms.OptionContent>
                <Forms.Label>
                  <Forms.LabelSpan>Category name</Forms.LabelSpan>
                  <Forms.Input name="name" />
                </Forms.Label>
                <Forms.Label>
                  <Forms.LabelSpan>Color</Forms.LabelSpan>
                  <Forms.Input name="color" type="color" />
                </Forms.Label>
              </Forms.OptionContent>
            </Forms.OptionGroup>
          </Forms.Label>
          <Forms.Buttons>
            <Forms.Cancel as={Link} to="..">
              Cancel
            </Forms.Cancel>
            <Forms.Submit>Add</Forms.Submit>
          </Forms.Buttons>
        </Forms.Form>
      </Dialog>
    </Background>
  );
}
