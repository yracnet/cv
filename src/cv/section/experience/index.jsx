import { Title } from "../../ui/title";
import { ExperienceItem } from "./css";
import data from "./data.json";
import { Text, TextList } from "../../ui/text";
const Experience = () => {
  return (
    <>
      <Title>
        <Text value={data.title} />
      </Title>
      {data.items.map((exp) => (
        <ExperienceItem key={exp.id}>
          <div className="header">
            <div className="role">
              <Text value={exp.role} />
            </div>
            <div className="modality">
              <Text value={exp.modality} />
            </div>
          </div>

          <div className="company-location">
            <span className="company">
              <Text value={exp.company} />
            </span>
            -
            <span className="location">
              <Text value={exp.location} />
            </span>
          </div>

          <div className="period">
            {exp.period.from} - {exp.period.to}
          </div>

          {exp.description && (
            <ul className="description">
              {exp.description.map((d, idx) => (
                <li key={idx}>
                  <Text value={d} />
                </li>
              ))}
            </ul>
          )}

          {exp.projects && (
            <ul className="projects">
              {exp.projects.map((p, idx) => (
                <li key={idx}>
                  <Text value={p} />
                </li>
              ))}
            </ul>
          )}

          {exp.technologies && (
            <div className="technologies">
              <TextList value={exp.technologies} />
            </div>
          )}
        </ExperienceItem>
      ))}
    </>
  );
};

export default Experience;
