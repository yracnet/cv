import { SkillStyle } from "./css";

const Skill = ({ data }) => {
  if (!data || !Array.isArray(data)) return null;

  return (
    <SkillStyle>
      <h2>Skills</h2>
      {data.map((group, index) => (
        <div key={index}>
          <h3>{group.label}</h3>
          <ul>
            {group.items.map((item, idx) => (
              <li key={idx}>
                {item.value ?? item}
                {item.details && <span> ({item.details.join(", ")})</span>}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </SkillStyle>
  );
};

export default Skill;
