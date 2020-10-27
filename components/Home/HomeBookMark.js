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
    margin: 3em 0;
    text-align: center;

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
  }
`;

export const HomeBookMark = ({ bookmarkList }) => {
  return (
    <BookMarkBlock>
      <div className='bookmark-title'>북마크</div>
      <div className='bookmark'>
        <BookMarkLink link='https://www.naver.com' icon='N' name='Naver' />
        <BookMarkLink link='https://www.daum.net' icon='D' name='Daum' />
        <BookMarkLink link='https://www.google.co.kr' icon='G' name='Google' />
        {bookmarkList !== [] &&
          bookmarkList.map((list, index) => (
            <div key={index}>
              <BookMarkLink
                link={list.url}
                name={list.name}
                icon={list.name.substring(0, 1).toUpperCase()}
              />
            </div>
          ))}
      </div>
    </BookMarkBlock>
  );
};
