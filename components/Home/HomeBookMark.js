import styled from "styled-components";
import { BookMarkLink } from "./BookMarkLink";

const BookMarkBlock = styled.div`
  display: flex;
  flex-direction: column;
  .bookmark-title {
    font-size: 24px;
    text-align: center;
  }

  .bookmark {
    display: flex;
    max-width: 800px;
    width: 100%;
    justify-content: center;
    text-align: center;
    margin: 3em auto;
    flex-wrap: wrap;

    .del-btn {
      position: relative;
      top: -110px;
      cursor: pointer;
      transtion: opacity 500ms;
      visibility: ${(props) => (props.edit ? "visible" : "hidden")};
    }
  }

  .bookmark__util {
    display: flex;
    align-items: center;
    justify-content: center;

    .bookmark-edit {
      cursor: pointer;
      width: fit-content;
      border: 1px solid black;
      margin-top: 1em;
      margin-right: 1em;
      padding: 0.5em;
      background: ${(props) => props.edit && "black"};
    }
    .checkbox {
      margin-top: 1em;
      text-align: center;
      z-index: 2;
      .check {
        &[type="checkbox" i] {
          display: none;
        }
      }
      .check-label {
        border: 1px solid black;
        cursor: pointer;
        padding: 0.5em;
        background: ${(props) => props.blank && "black"};
      }
    }
  }
`;

export const HomeBookMark = ({
  bookmarkList,
  onDel,
  onEdit,
  edit,
  onChecked,
  blank,
}) => {
  return (
    <BookMarkBlock edit={edit} blank={blank}>
      <div className='bookmark-title'>북마크</div>
      <div className='bookmark__util'>
        <div className='bookmark-edit' onClick={onEdit}>
          EDIT
        </div>
        <div className='checkbox'>
          <input
            onClick={onChecked}
            className='check'
            type='checkbox'
            id='target'
          />
          <label className='check-label' htmlFor='target'>
            새 창으로 열기
          </label>
        </div>
      </div>
      <div className='bookmark'>
        {bookmarkList !== [] &&
          bookmarkList.map((list) => (
            <div key={list.id}>
              <BookMarkLink
                blank={blank}
                link={list.url}
                name={list.name}
                icon={list.name.substring(0, 1).toUpperCase()}
              />
              <span className='del-btn' data-id={list.id} onClick={onDel}>
                X
              </span>
            </div>
          ))}
      </div>
    </BookMarkBlock>
  );
};
