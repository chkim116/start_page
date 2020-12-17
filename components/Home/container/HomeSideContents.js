import { useCallback, useEffect, useState } from "react";
import styled, { css } from "styled-components";
import { HomeToDoList } from "../presenter/HomeToDoList";

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
    const [todos, setTodos] = useState({ todo: "", id: "" });
    const [showList, setShowList] = useState([]);

    const onChange = useCallback(
        (e) => {
            const { value } = e.target;
            setTodos({ todo: value, id: Date.now() });
        },
        [todos]
    );

    const onSubmit = useCallback(
        (e) => {
            e.preventDefault();
            if (todos.todo === "") {
                return alert("입력해주세요~");
            }
            setShowList(showList.concat(todos));
            setTodos({ todo: "", id: "" });
        },
        [todos, showList]
    );

    const onDel = useCallback(
        (e) => {
            const { id } = e.target.dataset;
            setShowList(showList.filter((todos) => todos.id !== parseInt(id)));
        },
        [showList, todos]
    );

    useEffect(() => {
        const getLocal = localStorage.getItem("todolist");
        if (getLocal) {
            if (getLocal.length > 2) {
                setShowList(showList.concat(JSON.parse(getLocal)));
            }
        }
    }, []);

    useEffect(() => {
        if (showList.length >= 0) {
            localStorage.setItem("todolist", JSON.stringify(showList));
        }
    }, [showList]);

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
