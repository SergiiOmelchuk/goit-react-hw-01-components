const FriendListItem = ({ isOnline, avatar, name }) => {
  return (
    <li className="item">
      <span className={isOnline ? 'status_on' : 'status_of'}></span>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </li>
  );
};

export default FriendListItem;
