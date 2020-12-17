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

const LinkBtn = styled.a`
  padding: 1em;
  border-radius: 33px;
  z-index: 5;
`;

export const BookMarkLink = ({ blank, link, icon, name }) => {
  return (
    <BookmarkLinkBlock>
      <div className='bookmark-box'>
        <Link href={link} passHref>
          <LinkBtn
            target={blank ? "_blank" : undefined}
            className='bookmark-icons'>
            {icon}
          </LinkBtn>
        </Link>
      </div>
      <div>{name}</div>
    </BookmarkLinkBlock>
  );
};
