import { Text } from "../../ui/text";
import { Title } from "../../ui/title";
import { OpensourceItem } from "./css";
import data from "./data.json";

const Opensource = () => {
  return (
    <>
      <Title>
        <Text value={data.title} />
      </Title>
      {data.items.map((proj, idx) => (
        <OpensourceItem key={idx}>
          <div className="header">
            <a
              href={proj.link}
              target="_blank"
              rel="noopener noreferrer"
              className="name"
            >
              <Text value={proj.name} />
            </a>
          </div>
          <div className="description">
            <Text value={proj.description} />
          </div>
        </OpensourceItem>
      ))}
    </>
  );
};

export default Opensource;
