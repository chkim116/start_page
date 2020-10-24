import styled from "styled-components";

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

    .bookmark-icons {
      margin: 0 1em;
      border: 1px solid #fdfdfd;
      width: 50px;
      height: 50px;
      text-align: center;
      line-height: 50px;
      padding: 0.5em;
    }
  }
`;

export const HomeBookMark = () => {
  return (
    <BookMarkBlock>
      <div className='bookmark-title'>북마크</div>
      <div className='bookmark'>
        <div className='bookmark-icons'>네이버</div>
        <div className='bookmark-icons'>구글</div>
        <div className='bookmark-icons'>유튜브</div>
        <div className='bookmark-icons'>인스타그램</div>
      </div>
    </BookMarkBlock>
  );
};
