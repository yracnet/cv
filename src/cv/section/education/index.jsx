import { PrintText } from "../ui/text";
import { TitleLine } from "../ui/title";
import { EducationItem } from "./css";
import data from "./data.json";

const Education = () => {
  return (
    <>
      <TitleLine>
        <PrintText value={data.title} />
      </TitleLine>
      {data.items.map((group, idx) => (
        <EducationItem key={idx}>
          <h3>
            <PrintText value={group.group} />
          </h3>
          <div className="content">
            {group.items.map((item, i) => (
              <div key={i} className="education-item">
                <div className="institution">
                  <PrintText value={item.institution} />
                </div>
                <div className="degree">
                  <PrintText value={item.degree || item.course} />
                </div>
                <div className="period">
                  {item.period.from} - {item.period.to}
                </div>
                {item.field && (
                  <div className="field">
                    <PrintText value={item.field} />
                  </div>
                )}
                {item.details && (
                  <ul className="details-list">
                    {item.details.map((d, j) => (
                      <li key={j}>
                        <PrintText value={d} />
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </EducationItem>
      ))}
    </>
  );
};

export default Education;
