import styled, { css } from "styled-components";

const HomeSideBlock = styled.div`
  width: 100%;
  position: fixed;
  margin: 0 auto;
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  top: 0;
  bottom: 0;
  align-items: center;
  ${(props) =>
    props.move
      ? css`
          transition: right 1s;
          right: 0%;
        `
      : css`
          transition: right 1s;
          right: -300%;
        `}
`;

export const HomeSide = ({ move }) => {
  return (
    <HomeSideBlock move={move}>dwqwqwqwqwqwqwqwqwqwqwqwqwqwqgg</HomeSideBlock>
  );
};
