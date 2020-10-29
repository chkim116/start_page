import React, { useCallback, useEffect, useState } from "react";
import styled, { css } from "styled-components";
import { HomeAside } from "./HomeAside";
import { HomeBookMark } from "./HomeBookMark";
import { HomeSearch } from "./HomeSearch";
import { HomeSide } from "./HomeSideContents";

const MainBlock = styled.main`
  margin: 0 auto;
  margin-top: 2em;
  height: 100vh;
  overflow: hidden;
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  overflow: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  ${(props) =>
    props.move
      ? css`
          transition: left 1s;
          left: -300%;
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
  .modal-btn {
    cursor: pointer;
    font-size: 20px;
    font-weight: bold;
    width: 50px;
    height: 50px;
    &:hover {
      background: #fdfdfd;
      transition: all 300ms;
      color: #333333;
      border-radius: 33px;
    }
  }
`;

const LeftMove = styled.div`
  position: absolute;
  cursor: pointer;
  font-size: 20px;
  top: 50%;
  z-index: 55;
  animation: blink 1s ease-in-out infinite alternate;
  @keyframes blink {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

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
  //  모달 관리
  const [modalOn, setModalOn] = useState(false);

  const onModal = useCallback(() => {
    !modalOn ? setModalOn(true) : setModalOn(false);
    if (!modalOn) {
      setBookmark({ name: "", url: "" });
    }
  }, [modalOn]);

  // 로컬스토리지를 활용한 url 북마크
  const [bookmark, setBookmark] = useState({ name: "", url: "" });
  const [bookmarkList, setBookmarkList] = useState([]);
  const getLocal = localStorage.getItem("list");

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
      if (bookmark.name === "" || bookmark.url === "") {
        return alert("입력해주세요");
      }
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

  // 왼쪽, 오른쪽 무빙
  const [move, setMove] = useState(false);

  const onMove = useCallback(() => {
    !move ? setMove(true) : setMove(false);
  }, [move]);

  // edit btn

  const [edit, setEdit] = useState(false);

  const onEdit = () => {
    !edit ? setEdit(true) : setEdit(false);
  };

  // target_blank 설정

  const [blank, setBlank] = useState(false);

  const onChecked = useCallback(
    (e) => {
      const { checked } = e.target;
      checked ? setBlank(true) : setBlank(false);
    },
    [blank]
  );

  return (
    <>
      <MainBlock move={move}>
        {/* 시간 */}
        <div className='date'>{getDate}</div>

        {/* 검색창 */}
        <HomeSearch />

        {/* 추가 하기 */}
        <ClickBlock>
          <h3>원하는 사이트를 추가하고 삭제해 보세요!</h3>
          <button className='modal-btn' type='button' onClick={onModal}>
            +
          </button>
        </ClickBlock>

        {/* 북마크 현황 */}
        <HomeBookMark
          edit={edit}
          onEdit={onEdit}
          bookmarkList={bookmarkList}
          onDel={onDel}
          blank={blank}
          onChecked={onChecked}
        />
      </MainBlock>

      {/* 모달 */}
      <HomeAside
        bookmark={bookmark}
        modalOn={modalOn}
        onModal={onModal}
        onChange={onChange}
        onSubmit={onSubmit}
      />

      {/* 슬라이더 이동 */}
      <LeftMove move={move}>
        {move ? (
          <div onClick={onMove}>searching</div>
        ) : (
          <div onClick={onMove}>todolist</div>
        )}
      </LeftMove>

      {/* 두번째 화면 */}
      <HomeSide move={move} />
    </>
  );
};
