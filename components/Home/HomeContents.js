import React, { useCallback, useEffect, useState } from "react";
import styled, { css } from "styled-components";
import { HomeAside } from "./HomeAside";
import { HomeBookMark } from "./HomeBookMark";
import { HomeSearch } from "./HomeSearch";
import { HomeSide } from "./HomeSideContents";

const MainBlock = styled.main`
  margin: 0 auto;
  height: 100vh;
  overflow: hidden;
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  align-items: center;
  ${(props) =>
    props.move
      ? css`
          transition: left 1s;
          left: -180%;
        `
      : css`
          transition: left 1s;
          left: 0%;
        `}

  .date {
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
  cursor: pointer;
  font-size: 24px;
  top: 50%;
  z-index: 55;
  ${(props) =>
    props.move
      ? css`
          right: 2%;
        `
      : css`
          left: 2%;
        `}
`;

export const HomeContents = ({ getDate }) => {
  const [modalOn, setModalOn] = useState(false);
  const [bookmark, setBookmark] = useState({ name: "", url: "" });
  const [bookmarkList, setBookmarkList] = useState([]);
  const getLocal = localStorage.getItem("list");

  const onModal = useCallback(() => {
    !modalOn ? setModalOn(true) : setModalOn(false);
    if (!modalOn) {
      setBookmark({ name: "", url: "" });
    }
  }, [modalOn]);

  const onChange = useCallback(
    (e) => {
      const { name, value } = e.target;
      setBookmark({ ...bookmark, [name]: value, id: Date.now() });
    },
    [bookmark]
  );
  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      setBookmarkList(bookmarkList.concat({ ...bookmark }));
      setModalOn(false);
    },
    [bookmark]
  );

  const onDel = useCallback((e) => {
    const { id } = e.target.dataset;
    setBookmarkList(
      bookmarkList.filter((list) => {
        return list.id !== parseInt(id);
      })
    );
  });

  useEffect(() => {
    if (getLocal) {
      if (getLocal.length > 2) {
        setBookmarkList(JSON.parse(getLocal));
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(bookmarkList));
  }, [bookmarkList]);

  const [move, setMove] = useState(false);

  const onMove = useCallback(() => {
    !move ? setMove(true) : setMove(false);
  }, [move]);

  // edit btn

  const [edit, setEdit] = useState(false);

  const onEdit = () => {
    !edit ? setEdit(true) : setEdit(false);
  };

  return (
    <>
      <MainBlock move={move}>
        {/* 시간 */}
        <div className='date'>{getDate}</div>

        {/* 검색창 */}
        <HomeSearch />

        {/* 북마크 현황 */}
        <HomeBookMark
          edit={edit}
          onEdit={onEdit}
          bookmarkList={bookmarkList}
          onDel={onDel}
        />

        {/* 추가 하기 */}
        <ClickBlock>
          <div>원하는 사이트를 추가하고 삭제해 보세요!</div>
          <div>눌러서 추가하기 </div>
          <button className='modal-btn' type='button' onClick={onModal}>
            +
          </button>
        </ClickBlock>
      </MainBlock>
      {/* 모달 */}
      <HomeAside
        bookmark={bookmark}
        modalOn={modalOn}
        onModal={onModal}
        onChange={onChange}
        onSubmit={onSubmit}
      />
      <LeftMove move={move}>
        {/* 왼쪽으로 누르면 오른쪽으로 나오게 만들기 */}
        {move ? (
          <div onClick={onMove}>오른쪽으로</div>
        ) : (
          <div onClick={onMove}>왼쪽으로</div>
        )}
        {/* 뉴스 뷰어 api */}
      </LeftMove>
      <HomeSide move={move} />
    </>
  );
};
