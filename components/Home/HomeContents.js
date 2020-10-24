import React, { useState } from "react";
import styled from "styled-components";
import { HomeAside } from "./HomeAside";
import { HomeBookMark } from "./HomeBookMark";
import { HomeSearch } from "./HomeSearch";

const MainBlock = styled.main`
  max-width: 1000px;
  margin: 0 auto;
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .date {
    width: 800px;
    margin: 0 auto;
    text-align: center;
    font-size: 90px;
    color: #fdfdfd;
    font-weight: 500;
  }
`;

const ClickBlock = styled.div`
  text-align: center;
  line-height: 45px;

  .modal-btn {
    all: unset;
    cursor: pointer;
    font-size: 24px;
    font-weight: bold;
  }
`;

const LeftMove = styled.div`
  position: absolute;
  left: 2.5%;
`;

export const HomeContents = () => {
  const [getDate, setGetDate] = useState(0);

  function getTime() {
    const date = new Date();
    const time = date.toLocaleTimeString();
    setGetDate(time);
  }

  setInterval(getTime, 1000);

  if (getDate === 0) {
    return <div>로딩...</div>;
  }

  return (
    <>
      <MainBlock>
        {/* 시간 */}
        <div className='date'>{getDate}</div>

        {/* 검색창 */}
        <HomeSearch />

        {/* 북마크 현황 */}
        <HomeBookMark />

        {/* 추가 하기 */}
        <ClickBlock>
          <div>원하는 사이트를 추가하고 삭제해 보세요!</div>
          <div>눌러서 추가하기 </div>
          <button className='modal-btn' type='button'>
            +
          </button>
        </ClickBlock>

        <LeftMove>
          {/* 왼쪽으로 누르면 오른쪽으로 나오게 만들기 */}
          <div>왼쪽으로</div>
          {/* 뉴스 뷰어 api */}
        </LeftMove>
      </MainBlock>
      {/* 모달 */}
      <HomeAside />
    </>
  );
};
