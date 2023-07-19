import FriendListItem from './FriendListItem/FriendListItem';
const FriendList = ({ friends }) => {
  return (
    <ul className="friend-list">
      {friends.map(({ id, isOnline, avatar, name }) => (
        <FriendListItem
          key={id}
          isOnline={isOnline}
          avatar={avatar}
          name={name}
        />
      ))}
    </ul>
  );
};

export default FriendList;
