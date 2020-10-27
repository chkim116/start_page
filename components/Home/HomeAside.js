import styled from "styled-components";

const AsideBlock = styled.aside`
  position: absolute;
  height: 100vh;
  widht: 100%;
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

    .modal-close {
      position: absolute;
      color: white;
      top: 100px;
      right: 50px;
      cursor: pointer;
      font-size: 32px;
    }

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
        background: black;
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
      <form className='modal__form' onSubmit={onSubmit}>
        <div className='modal-close' onClick={onModal}>
          X
        </div>
        <input
          className='modal__form-input'
          name='name'
          type='text'
          placeholder='저장할 이름'
          value={bookmark.name}
          onChange={onChange}
        />
        <input
          className='modal__form-input'
          name='url'
          type='text'
          placeholder='URL'
          value={bookmark.url}
          onChange={onChange}
        />
        <div className='modal__form-btn'>
          <button type='submit'>확인</button>
          <button type='button' onClick={onModal}>
            취소
          </button>
        </div>
      </form>
    </AsideBlock>
  );
};
