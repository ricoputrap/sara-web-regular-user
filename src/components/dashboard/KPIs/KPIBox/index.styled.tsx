import styled from "@emotion/styled";

interface CardProps {
  isActive: boolean;
  isBlinking: boolean;
}

export const Card = styled.div<CardProps>`
  cursor: pointer;
  background-color: ${({ isActive }) => isActive ? "#E9EFF7" : "#FFFFFF"};
  width: 156px;
  box-shadow: 1px 2px 3px #aaa;
  padding: 8px;
  border-radius: 10px;
`;

export const Value = styled.div`
  font-size: 40px;
  line-height: 44px;
  color: black1;
`;