import { TitleLine } from "../ui/title";
import { ExperienceItem } from "./css";
import { data } from "./data.js";
import { PrintText, PrintTextList } from "../ui/text";
const Experience = () => {
  return (
    <>
      <TitleLine>
        <PrintText value={data.title} />
      </TitleLine>
      {data.items.map((exp) => (
        <ExperienceItem key={exp.id}>
          <div className="title">
            <PrintText value={exp.role} />
          </div>
          <div className="location">
            <span className="company">
              <PrintText value={exp.company} />
            </span>
            -
            <span className="location">
              <PrintText value={exp.location} />
            </span>
          </div>
          <div className="modality">
            <PrintText value={exp.modality} />
          </div>
          <div className="period">
            {exp.period.from} - {exp.period.to}
          </div>
          <div className="description">
            {exp.description && (
              <ul>
                {exp.description?.map((d, idx) => (
                  <li key={idx}>
                    <PrintText value={d} />
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div className="projects">
            {exp.projects && (
              <ul>
                {exp.projects?.map((p, idx) => (
                  <li key={idx}>
                    <PrintText value={p} />
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div className="technologies">
            <PrintTextList value={exp.technologies} split=" | " />
          </div>
        </ExperienceItem>
      ))}
    </>
  );
};

export default Experience;
