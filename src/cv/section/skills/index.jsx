import { PrintText, PrintTextList } from "../ui/text";
import { SkillItem } from "./css";
import data from "./data.json";
import { TitleLine } from "../ui/title";
import { Debug } from "../ui/debug";

const Skill = () => {
  return (
    <>
      <TitleLine>
        <PrintText value={data.title} />
      </TitleLine>
      {data.items.map((skill, index) => (
        <SkillItem key={index}>
          <div className="title">
            <PrintText value={skill.label} />
          </div>
          <div className="content">
            <ul>
              {skill.items.map((item, idx) => (
                <li key={idx}>
                  <PrintText value={item.value ?? item} />{" "}
                  {item.details && (
                    <span>
                      ( <PrintTextList value={item.details} />)
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </SkillItem>
      ))}
    </>
  );
};

export default Skill;
