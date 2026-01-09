import { useCV } from "../../context";
import { Text, TextList } from "../../ui/text";
import { SkillItem, SkillStyle } from "./css";
import data from "./data.json";
import { Title } from "../../ui/title";
import { Debug } from "../../ui/debug";

const Skill = () => {
  return (
    <>
      <Title>
        <Text value={data.title} />
      </Title>
      {data.items.map((skill, index) => (
        <SkillItem key={index}>
          <Text value={skill.label} />
          <ul>
            {skill.items.map((item, idx) => (
              <li key={idx}>
                <Text value={item.value ?? item} />
                {item.details && (
                  <span>
                    {" "}
                    (
                    <TextList value={item.details} />)
                  </span>
                )}
              </li>
            ))}
          </ul>
        </SkillItem>
      ))}
    </>
  );
};

export default Skill;
