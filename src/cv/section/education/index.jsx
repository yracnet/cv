import { PrintText, PrintTextList } from "../ui/text";
import { TitleLine } from "../ui/title";
import { EducationItem } from "./css";
import { data } from "./data.js";

const Education = () => {
  return (
    <>
      <TitleLine>
        <PrintText value={data.title} />
      </TitleLine>
      {data.items
        .filter((it) => it.hiden !== true)
        .map((group, idx) => (
          <EducationItem key={idx}>
            <h3>
              <PrintText value={group.group} />
            </h3>
            <div className="content">
              {group.items
                .filter((it) => it.hiden !== true)
                .map((item, i) => (
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
                      <div className="details-list">
                        <PrintTextList value={item.details} split=" | " />
                      </div>
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
