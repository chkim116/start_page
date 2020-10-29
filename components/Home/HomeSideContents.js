import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled, { css } from "styled-components";
import { setTodoList } from "../../modules/todolist";
import { HomeToDoList } from "./HomeToDoList";

const HomeSideBlock = styled.div`
  width: 100%;
  position: fixed;
  margin: 0 auto;
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  top: 30%;
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
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todolist);
  const [showList, setShowList] = useState([]);

  const onChange = useCallback((e) => {
    const { value } = e.target;
    dispatch(setTodoList(value));
  }, []);

  const onSubmit = useCallback((e) => {
    e.preventDefault();
    if (todos.todo === "") {
      return alert("입력해주세요~");
    }
    setShowList(showList.concat(todos));
    dispatch(setTodoList(""));
  });

  const onDel = useCallback((e) => {
    const { id } = e.target.dataset;
    setShowList(showList.filter((todos) => todos.id !== parseInt(id)));
  });

  useEffect(() => {
    if (showList.length >= 0) {
      localStorage.setItem("todolist", JSON.stringify(showList));
    }
  }, [showList]);

  useEffect(() => {
    const getLocal = localStorage.getItem("todolist");
    if (getLocal) {
      if (getLocal.length > 2) {
        setShowList(showList.concat(JSON.parse(getLocal)));
      }
    }
  }, []);

  return (
    <HomeSideBlock move={move}>
      <HomeToDoList
        onSubmit={onSubmit}
        showList={showList}
        onDel={onDel}
        onChange={onChange}
        todos={todos}
      />
    </HomeSideBlock>
  );
};
