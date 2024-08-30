import css from "./FriendsListItem.module.css";

function FriendsListItem({ avatar, name, isOnline }) {
  return (
    <div className={css.container}>
      <img className={css.image} src={avatar} alt="Avatar" width="48" />
      <p className={css.name}>{name}</p>
      {isOnline && <p className={css.green}>Online</p>}
      {!isOnline && <p className={css.red}>Offline</p>}
    </div>
  );
}

export default FriendsListItem;
