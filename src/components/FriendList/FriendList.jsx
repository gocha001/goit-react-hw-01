import FriendsListItem from "../FriendListItem/FriendsListItem.jsx";
import css from "./FriendList.module.css";

function FriendList({ friends }) {
  return (
    <ul className={css.list}>
      {friends.map((friend) => {
        return (
          <li className={css.item} key={friend.id}>
            <FriendsListItem
              avatar={friend.avatar}
              name={friend.name}
              isOnline={friend.isOnline}
            />
          </li>
        );
      })}
    </ul>
  );
}

export default FriendList;
