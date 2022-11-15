import { Link } from "react-router-dom";
import styled from "styled-components";

export const MovieDetailContainer = styled.div`
  min-height: 80vh;
  padding-top: 20px;
  background-color: #292e49;
`;

export const VideoParts = styled.div`
  text-align: center;
  width: 70%;
  height: 300px;
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
  img {
    width: 100%;
    height: 100%;
  }
`;
export const DownRightPart = styled.div`
  width: 70%;
  background-color: #707d9d;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: #fcf9bf;
  font-size: 20px;
  padding: 20px;
`;

export const MyLink = styled(Link)`
  color: #76c893;
  font-weight: 700;
  margin: 0 auto;
`;
