// /components/SmallButton.tsx
import styled from 'styled-components';

const SmallButton = styled.button`
  background-color: #272727;
  width: fit-content;
  height: fit-content;
  color: #fff;
  border: none;
  border-radius: 6px;
  padding: 8px 16px;
  cursor: pointer;
  font-family: 'Roboto Mono', monospace;

  &:hover {
    background-color: #444;
  }
`;

export default SmallButton;
