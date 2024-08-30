import css from "./Profile.module.css";

function Profile({
  name,
  tag,
  location,
  image,
  stats: { followers, views, likes },
}) {
  return (
    <div className={css.container}>
      <div className={css.containerImg}>
        <img className={css.image} src={image} alt={name} />
        <p className={css.name}>{name}</p>
        <p className={css.tag}>@{tag}</p>
        <p className={css.location}>{location}</p>
      </div>

      <ul className={css.list}>
        <li className={css.item}>
          <span>Followers</span>
          <span>{followers}</span>
        </li>
        <li className={css.item}>
          <span>Views</span>
          <span>{views}</span>
        </li>
        <li className={css.item}>
          <span>Likes</span>
          <span>{likes}</span>
        </li>
      </ul>
    </div>
  );
}

export default Profile;
