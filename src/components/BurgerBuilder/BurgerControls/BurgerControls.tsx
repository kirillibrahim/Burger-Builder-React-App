import React from "react";
import styled from "styled-components";

const ControlsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0.3125rem 0;
`;

const LabelName = styled.div`
  padding: 0.625rem;
  font-weight: bold;
  width: 3rem;
`;

const Button = styled.div`
  display: block;
  font: inherit;
  padding: 0.3125rem;
  margin: 0 0.3125rem;
  width: 3rem;
  cursor: pointer;
  outline: none;
`;

const AddButton = styled(Button)`
  color: #c0764f;
`;

const RemoveButton = styled(Button)`
  color: red;
`;

interface Props {
  label: string;
  disabled?: boolean;
  remove?: () => any;
  add?: () => any;
}

const BurgerControls = (props: Props) => (
  <ControlsWrapper>
    <LabelName>{props.label}</LabelName>
    <AddButton onClick={props.add}>Add</AddButton>
    <RemoveButton onClick={props.remove} disabled={props.disabled}>
      Remove
    </RemoveButton>
  </ControlsWrapper>
);

export default BurgerControls;
