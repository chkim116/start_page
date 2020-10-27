import styled from "styled-components";
import { BookMarkLink } from "./BookMarkLink";

const BookMarkBlock = styled.div`
  display: flex;
  flex-direction: column;
  .bookmark-title {
    font-size: 24px;
    text-align: center;
  }

  .bookmark-edit {
    cursor: pointer;
    width: fit-content;
    margin: 0 auto;
  }
  .bookmark {
    display: flex;
    max-width: 800px;
    margin: 3em 0;
    flex-wrap: wrap;
    text-align: center;
    position: relative;

    .bookmark-icons {
      margin: 0 1em;
      border: 1px solid #fdfdfd;
      width: 30px;
      height: 30px;
      text-align: center;
      line-height: 30px;
      font-size: 24px;
      padding: 0.5em;
      cursor: pointer;
      color: white;
      border-radius: 33px;
    }

    .del-btn {
      position: absolute;
      top: -20px;
      cursor: pointer;
      transtion: opacity 500ms;
      visibility: ${(props) => (props.edit ? "visible" : "hidden")};
    }
  }
`;

export const HomeBookMark = ({ bookmarkList, onDel, onEdit, edit }) => {
  return (
    <BookMarkBlock edit={edit}>
      <div className='bookmark-title'>북마크</div>
      <div className='bookmark-edit' onClick={onEdit}>
        EDIT
      </div>
      <div className='bookmark'>
        <BookMarkLink link='https://www.naver.com' icon='N' name='Naver' />
        <BookMarkLink link='https://www.daum.net' icon='D' name='Daum' />
        <BookMarkLink link='https://www.google.co.kr' icon='G' name='Google' />
        {bookmarkList !== [] &&
          bookmarkList.map((list) => (
            <div key={list.id}>
              <BookMarkLink
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
