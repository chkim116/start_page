import React from "react";
import styled from "styled-components";

const ToDoBlock = styled.div`
    text-align: center;

    .todolist-form {
        position: relative;
        margin-top: 2em;
        .todolist-input {
            padding: 1em 2em;
            width: 300px;
            border-radius: 12px;
            border-right: 1px solid rgba(0, 0, 0, 0.2);
            font-size: 13px;
        }
        .todolist-btn {
            font-size: 18px;
            color: #333333;
            position: absolute;
            top: 7px;
            right: 8px;
            font-weight: bold;
        }
    }
`;

const ShowToDo = styled.div`
    display: flex;
    border-bottom: 1px solid #fdfdfd;
    align-items: center;
    justify-content: space-between;
    padding: 0.5em;

    .todolist-del {
        cursor: pointer;
    }
`;

export const HomeToDoList = ({
    onChange,
    todos,
    onSubmit,
    onDel,
    showList,
}) => {
    return (
        <div>
            <ToDoBlock>
                <div>오늘 할일 적기</div>
                <form className="todolist-form" onSubmit={onSubmit}>
                    <input
                        className="todolist-input"
                        type="text"
                        placeholder="오늘 할일은?"
                        value={todos.todo}
                        onChange={onChange}
                    />
                    <button className="todolist-btn" type="submit">
                        +
                    </button>
                </form>
            </ToDoBlock>
            {showList.map((list, index) => (
                <ShowToDo key={index}>
                    <div className="todolist">{list.todo}</div>
                    <div
                        className="todolist-del"
                        data-id={list.id}
                        onClick={onDel}>
                        X
                    </div>
                </ShowToDo>
            ))}
        </div>
    );
};
