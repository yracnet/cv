import { useCV } from "../../context";
import { Text } from "../../ui/text";
import { ProfileStyle } from "./css";
import profile from "./data.json";

const Profile = () => {
  const { name, picture, headline, summary, contact } = profile;
  return (
    <ProfileStyle>
      <div className="header">
        {picture && <img src={picture} alt={name} />}
        <div>
          <h1>
            <Text value={name} />
          </h1>
          {headline.map((item, index) => (
            <h2 key={index}>
              <Text value={item} />
            </h2>
          ))}
        </div>
      </div>
      <ul className="summary">
        {summary.map((item, index) => (
          <li key={index}>
            <Text value={item} />
          </li>
        ))}
      </ul>
      <div className="contacts">
        {contact.map((item, index) => (
          <a
            key={index}
            href={item.value}
            target={item.type === "email" ? undefined : "_blank"}
          >
            <span className="label">
              <Text value={item.label} />
            </span>
            <span className="value">
              <Text value={item.value} />
            </span>
          </a>
        ))}
      </div>
    </ProfileStyle>
  );
};

export default Profile;
