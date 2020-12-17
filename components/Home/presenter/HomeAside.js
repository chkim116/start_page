import styled from "styled-components";

const AsideBlock = styled.aside`
    position: absolute;
    height: 100vh;
    width: 100%;
    top: 0;
    right: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.5);
    display: ${(props) => (props.modalOn ? "block" : "none")};

    .modal__form {
        position: relative;
        display: flex;
        flex-direction: column;
        text-align: center;
        justify-content: center;
        width: 500px;
        margin: 0 auto;
        height: 500px;
        border: 1px solid #fdfdfd;
        top: 10%;
        border-radius: 33px;
        background: rgba(0, 0, 0, 0.5);

        .modal__form-input {
            width: 300px;
            padding: 0.5em;
            text-align: center;
            margin: 0.5em auto;
        }

        .modal__form-btn {
            button {
                margin: 1em;
                padding: 0.5em;
                font-size: 14px;
                background: #333333;
            }
        }
    }
`;

export const HomeAside = ({
    bookmark,
    onModal,
    modalOn,
    onChange,
    onSubmit,
}) => {
    return (
        <AsideBlock modalOn={modalOn}>
            <form className="modal__form" onSubmit={onSubmit}>
                <input
                    className="modal__form-input"
                    name="name"
                    type="text"
                    placeholder="저장할 이름"
                    value={bookmark.name}
                    onChange={onChange}
                />
                <input
                    className="modal__form-input"
                    name="url"
                    type="text"
                    placeholder="URL"
                    value={bookmark.url}
                    onChange={onChange}
                />
                <div className="modal__form-btn">
                    <button type="submit">확인</button>
                    <button type="button" onClick={onModal}>
                        취소
                    </button>
                </div>
            </form>
        </AsideBlock>
    );
};
