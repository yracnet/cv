import { ProfileStyle } from "./css";

const Profile = ({ data }) => {
  if (!data) return null;

  const { name, picture, headline, summary, contact } = data;

  return (
    <ProfileStyle>
      <div className="header">
        {picture && <img src={picture} alt={name} />}
        <div>
          <h1>{name}</h1>
          {headline.map((item, index) => (
            <h2 key={index}>{item}</h2>
          ))}
        </div>
      </div>
      <ul className="summary">
        {summary.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <div className="contacts">
        {contact.map((item, index) => (
          <a
            key={index}
            href={item.value}
            target={item.type === "email" ? undefined : "_blank"}
          >
            <span className="label">{item.label}:</span>
            <span className="value">{item.value}</span>
          </a>
        ))}
      </div>
    </ProfileStyle>
  );
};

export default Profile;
