import { PrintText } from "../../ui/text";
import { TitleLine } from "../../ui/title";
import { OpensourceCol, OpensourceItem } from "./css";
import data from "./data.json";

const Opensource = () => {
  return (
    <>
      <TitleLine>
        <PrintText value={data.title} />
      </TitleLine>
      <OpensourceCol>
        {data.items.map((proj, idx) => (
          <OpensourceItem key={idx}>
            <div className="header">
              <a
                href={proj.link}
                target="_blank"
                rel="noopener noreferrer"
                className="name"
              >
                <PrintText value={proj.name} />
              </a>
            </div>
            <div className="description">
              <PrintText value={proj.description} />
            </div>
          </OpensourceItem>
        ))}
      </OpensourceCol>
    </>
  );
};

export default Opensource;
