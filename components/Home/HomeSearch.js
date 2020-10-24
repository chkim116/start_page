import styled from "styled-components";

const MainSearchBlock = styled.div`
  margin: 3em 0;
  .main__search {
    .search-select {
      padding: 0.8em;
      cursor: pointer;
    }
    .search-text {
      padding: 0.8em;
      width: 340px;
    }
    .search-btn {
      all: unset;
      cursor: pointer;
      color: white;
      padding: 0.8em;
    }
  }
`;

export const HomeSearch = () => {
  return (
    <MainSearchBlock>
      <form className='main__search'>
        <select className='search-select'>
          <option value='naver'>네이버</option>
          <option value='google'>구글</option>
          <option value='daum'>다음</option>
        </select>
        <input
          className='search-text'
          type='text'
          placeholder='검색하세요...'
        />
        <button className='search-btn' type='submit'>
          search
        </button>
      </form>
    </MainSearchBlock>
  );
};
