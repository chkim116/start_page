import styled from "styled-components";
import Link from "next/link";

const BookmarkLinkBlock = styled.div`
  .bookmark-box {
    width: 60px;
    border: 4px solid rgb(123, 124, 129);
    border-radius: 33px;
    text-align: center;
    cursor: pointer;
    margin: 0 1em;
    line-height: 60px;
  }

  .bookmark-icons {
    font-size: 20px;
    text-decoration: none;
    color: #fdfdfd;
    &:hover {
      color: rgb(123, 124, 129);
    }
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
