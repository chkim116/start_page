import styled from "styled-components";

const AsideBlock = styled.aside`
  position: absolute;
  height: 100vh;
  widht: 100%;
  top: 0;
  right: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
  display: none;

  .modal__form {
    position: relative;
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    width: 500px;
    height: 500px;

    .modal-close {
      position: absolute;
      color: white;
      top: -50px;
      right: 0;
      cursor: pointer;
      font-size: 32px;
    }

    .modal__form-input {
      width: 380px;
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

export const HomeAside = () => {
  return (
    <AsideBlock>
      <form className='modal__form'>
        <div className='modal-close'>X</div>
        <input
          className='modal__form-input'
          type='text'
          placeholder='저장할 이름'
        />
        <input className='modal__form-input' type='text' placeholder='URL' />
        <div className='modal__form-btn'>
          <button type='submit'>확인</button>
          <button type='button'>취소</button>
        </div>
      </form>
    </AsideBlock>
  );
};
