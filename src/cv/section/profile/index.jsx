import { useCV } from "../../context";
import { HeaderDescription, HeaderTitle, TextRaw } from "../../ui/head";
import { PrintText } from "../../ui/text";
import { ProfileStyle } from "./css";
import profile from "./data.json";

const Profile = () => {
  const { name, picture, headline, summary, contact } = profile;
  return (
    <ProfileStyle>
      <div className="photo">
        <img src={picture} alt={name} />
      </div>
      <div className="title">
        <h1>
          <PrintText value={name} />
        </h1>
        {headline.map((item, index) => (
          <h2 key={index}>
            <PrintText value={item} />
          </h2>
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
          <a
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
          </a>
        ))}
      </div>
    </ProfileStyle>
  );
};

export default Profile;
