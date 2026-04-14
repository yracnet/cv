import { PrintText } from "../ui/text";
import { ProfileStyle } from "./css";
import { data as profile } from "./data.js";

const Profile = () => {
  const { name, picture, headline, summary, contact } = profile;
  return (
    <ProfileStyle>
      <div className="photo">
        <img src={picture} alt={name} />
      </div>
      <div className="title">
        <PrintText value={name} />
      </div>
      <div className="headline">
        {headline.map((item, index) => (
          <div key={index}>
            <PrintText value={item} />
          </div>
        ))}
      </div>
      <ul className="summary">
        {summary.map((item, index) => (
          <li key={index}>
            <PrintText value={item} />
          </li>
        ))}
      </ul>
      <div className="contacts">
        {contact.map((item, index) => (
          <div
            key={index}
            href={item.value}
            target={item.type === "email" ? undefined : "_blank"}
          >
            <span className="label">
              <PrintText value={item.label} />
            </span>
            <span className="value">
              <PrintText value={item.value} />
            </span>
          </div>
        ))}
      </div>
    </ProfileStyle>
  );
};

export default Profile;
