import { OpensourceStyle } from "./css";

const Opensource = ({ data }) => {
  if (!data || !Array.isArray(data)) return null;

  return (
    <OpensourceStyle>
      <h2>Open Source Projects</h2>
      {data.map((proj, idx) => (
        <div key={idx}>
          <div className="header">
            <a
              href={proj.link}
              target="_blank"
              rel="noopener noreferrer"
              className="name"
            >
              {proj.name}
            </a>
          </div>
          <div className="description">{proj.description}</div>
        </div>
      ))}
    </OpensourceStyle>
  );
};

export default Opensource;
