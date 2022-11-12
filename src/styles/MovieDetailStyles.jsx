import styled from "styled-components";

export const MovieDetailContainer = styled.div`
  min-height: 80vh;
  padding-top: 20px;
`;

export const VideoParts = styled.div`
  width: 70%;
  height: 300px;
  background-color: red;
  opacity: 0.5;
  margin: 0 auto;
`;
export const DetailsPart = styled.div`
  display: flex;
  width: 90%;
  margin: 20px auto;
  border: 1px solid gray;
`;

export const DownLeftPart = styled.div`
  width: 30%;
  background-color: aquamarine;
  img {
    width: 100%;
    height: 100%;
  }
`;
export const DownRightPart = styled.div`
  width: 70%;
  background-color: #ff7c7c;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: aliceblue;
  font-size: 20px;
  padding: 20px;
`;
