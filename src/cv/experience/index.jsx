import { ExperienceStyle } from "./css";

const Experience = ({ data }) => {
  if (!data || !Array.isArray(data)) return null;

  return (
    <ExperienceStyle>
      <h2>Experience</h2>

      {data.map((exp) => (
        <div key={exp.id} className="experience-item">
          <div className="header">
            <div className="role">{exp.role}</div>
            <div className="modality">{exp.modality}</div>
          </div>

          <div className="company-location">
            <span className="company">{exp.company}</span> -{" "}
            <span className="location">{exp.location}</span>
          </div>

          <div className="period">
            {exp.period.from} - {exp.period.to}
          </div>

          {exp.description && (
            <ul className="description">
              {exp.description.map((d, idx) => (
                <li key={idx}>{d}</li>
              ))}
            </ul>
          )}

          {exp.projects && (
            <ul className="projects">
              {exp.projects.map((p, idx) => (
                <li key={idx}>{p}</li>
              ))}
            </ul>
          )}

          {exp.technologies && (
            <div className="technologies">{exp.technologies.join(", ")}</div>
          )}
        </div>
      ))}
    </ExperienceStyle>
  );
};

export default Experience;
