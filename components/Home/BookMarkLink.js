import styled from "styled-components";

const BookmarkLinkBlock = styled.div`
  margin-bottom: 1em;
`;

export const BookMarkLink = ({ link, icon, name }) => {
  const onClick = () => {
    window.location.href = link;
  };

  return (
    <BookmarkLinkBlock>
      <div onClick={onClick} className='bookmark-icons'>
        {icon}
      </div>
      <div>{name}</div>
    </BookmarkLinkBlock>
  );
};
