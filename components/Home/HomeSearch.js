import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { searchText } from "../../modules/search";

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
  const dispatch = useDispatch();
  const [text, setText] = useState({
    select: "naver",
    query: "",
  });
  const [loading, setLoading] = useState(false);

  const search = useSelector((state) => state.search);
  const { url } = search;

  const onChange = (e) => {
    const { name, value } = e.target;
    setText({ ...text, [name]: value });
    console.log(text);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (text.select === "naver") {
      dispatch(
        searchText(
          `https://search.naver.com/search.naver?sm=top_hty&fbm=1&ie=utf8&query=${text.query}`
        )
      );
    }
    if (text.select === "google") {
      dispatch(searchText(`https://www.google.co.kr/search?q=${text.query}`));
    }
    if (text.select === "daum") {
      dispatch(
        searchText(`https://search.daum.net/search?w=tot&q=${text.query}`)
      );
    }
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
          search
        </button>
      </form>
    </MainSearchBlock>
  );
};
