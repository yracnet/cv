import { EducationStyle } from "./css";

const Education = ({ data }) => {
  if (!data || !Array.isArray(data)) return null;

  return (
    <EducationStyle>
      <h2>Education</h2>

      {data.map((group, idx) => (
        <div key={idx} className="education-group">
          <h3>{group.group}</h3>
          {group.items.map((item, i) => (
            <div key={i} className="education-item">
              <div className="period">
                {item.period.from} - {item.period.to}
              </div>
              <div className="institution">{item.institution}</div>
              <div className="degree">{item.degree || item.course}</div>
              {item.field && <div className="field">{item.field}</div>}
              {item.details && (
                <ul className="details-list">
                  {item.details.map((d, j) => (
                    <li key={j}>{d}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      ))}
    </EducationStyle>
  );
};

export default Education;
