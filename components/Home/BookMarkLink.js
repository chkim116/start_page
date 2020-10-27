import styled from "styled-components";
import Link from "next/link";

const BookmarkLinkBlock = styled.div`
  margin-bottom: 1em;
  .bookmark-box {
    height: 60px;
    width: 60px;
    border: 1px solid #fdfdfd;
    border-radius: 33px;
    text-align: center;
    cursor: pointer;
    margin: 0 1em;
    line-height: 60px;
  }

  .bookmark-icons {
    font-size: 24px;
    text-decoration: none;
    color: white;
  }
`;

export const BookMarkLink = ({ blank, link, icon, name }) => {
  return (
    <BookmarkLinkBlock>
      <div className='bookmark-box'>
        <Link href={link}>
          <a target={blank ? "blank" : undefined} className='bookmark-icons'>
            {icon}
          </a>
        </Link>
      </div>
      <div>{name}</div>
    </BookmarkLinkBlock>
  );
};
