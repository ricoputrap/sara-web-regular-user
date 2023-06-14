import styled from "@emotion/styled";

export const Container = styled.div`
  position: relative;
  width: 40px;
  height: 20px;
`;

export interface Props {
  isActive: boolean;
}

export const Circle = styled.div<Props>`
  position: absolute;
  height: 20px;
  width: 20px;
  background: ${({ isActive }) => isActive ? "blue" : "#e4e4e5"};
  transform: ${({ isActive }) => isActive ? "translateX(15px)" : "none"};
  box-shadow: 0 1px 5px grey;
  transition: .4s;
  border-radius: 50%;
  z-index: 1;
  cursor: pointer;
`;

export const Lane = styled.div<Props>`
  position: absolute;
  cursor: pointer;
  top: 5px;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${({ isActive }) => isActive ? "#bddef0" : "#CCC"};
  box-shadow: ${({ isActive }) => isActive ? "0 0 1px #bddef0" : "none"};
  transition: .4s;
  border-radius: 34px;
  height: 13px;
  width: 32px;
`;