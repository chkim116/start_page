import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { searchInput, searchText } from "../../modules/search";
import { AiOutlineSearch } from "react-icons/ai";

const MainSearchBlock = styled.div`
  margin: 3em 0;
  text-align: center;

  .main__search {
    position: relative;
    display: flex;
    align-items: center;
    .search-select {
      padding: 0.8em;
      font-size: 18px;
      width: 130px;
      cursor: pointer;
      border-top-left-radius: 12px;
      border-bottom-left-radius: 12px;
      outline: none;
      height: 52px;
    }
    .search-text {
      padding: 0.8em;
      width: 560px;
      border-top-right-radius: 12px;
      border-bottom-right-radius: 12px;
      font-size: 18px;
    }
    .search-btn {
      position: absolute;
      cursor: pointer;
      right: 5px;
      color: black;
      z-index: 3;
      top: 12px;
    }
  }
`;

export const HomeSearch = () => {
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const search = useSelector((state) => state.search);
  const { url } = search;

  const onChange = (e) => {
    const { name, value } = e.target;
    dispatch(searchInput({ ...search, [name]: value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    search.select === "naver" &&
      dispatch(
        searchText(
          `https://search.naver.com/search.naver?sm=top_hty&fbm=1&ie=utf8&query=${search.query}`
        )
      );
    search.select === "google" &&
      dispatch(searchText(`https://www.google.co.kr/search?q=${search.query}`));

    search.select === "daum" &&
      dispatch(
        searchText(`https://search.daum.net/search?w=tot&q=${search.query}`)
      );
    setLoading(true);
  };

  useEffect(() => {
    if (loading) {
      window.location.href = url;
    }
  }, [loading]);

  return (
    <MainSearchBlock>
      <form className='main__search' onChange={onChange} onSubmit={onSubmit}>
        <select className='search-select' name='select'>
          <option value='naver'>네이버</option>
          <option value='google'>구글</option>
          <option value='daum'>다음</option>
        </select>
        <input
          className='search-text'
          name='query'
          type='text'
          placeholder='검색하세요...'
        />
        <button className='search-btn' type='submit'>
          <AiOutlineSearch size={28} />
        </button>
      </form>
    </MainSearchBlock>
  );
};
