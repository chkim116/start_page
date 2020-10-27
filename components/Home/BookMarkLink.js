export const BookMarkLink = ({ link, icon, name }) => {
  const onClick = () => {
    window.location.href = link;
  };

  return (
    <div>
      <div onClick={onClick} className='bookmark-icons'>
        {icon}
      </div>
      <div>{name}</div>
    </div>
  );
};
