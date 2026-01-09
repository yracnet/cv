import { Text } from "../../ui/text";
import { Title } from "../../ui/title";
import { EducationItem } from "./css";
import data from "./data.json";

const Education = () => {
  return (
    <>
      <Title>
        <Text value={data.title} />
      </Title>
      {data.items.map((group, idx) => (
        <EducationItem key={idx} className="education-group">
          <h3>
            <Text value={group.group} />
          </h3>
          {group.items.map((item, i) => (
            <div key={i} className="education-item">
              <div className="period">
                {item.period.from} - {item.period.to}
              </div>
              <div className="institution">
                <Text value={item.institution} />
              </div>
              <div className="degree">
                <Text value={item.degree || item.course} />
              </div>
              {item.field && (
                <div className="field">
                  <Text value={item.field} />
                </div>
              )}
              {item.details && (
                <ul className="details-list">
                  {item.details.map((d, j) => (
                    <li key={j}>
                      <Text value={d} />
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </EducationItem>
      ))}
    </>
  );
};

export default Education;
