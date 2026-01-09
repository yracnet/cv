import { Text } from "../../ui/text";
import { Title } from "../../ui/title";
import { ReferencesItem } from "./css";
import data from "./data.json";

const References = () => {
  return (
    <>
      <Title>
        <Text value={data.title} />
      </Title>
      {data.items.map((it, idx) => (
        <ReferencesItem key={idx} className="company-group">
          <h3 className="company-name">{it.company}</h3>
          {it.contacts.map((contact, cidx) => (
            <div key={cidx} className="contact-item">
              <div className="contact-header">
                <span className="contact-name">
                  <Text value={contact.name} />
                </span>
                -
                <span className="contact-role">
                  <Text value={contact.role} />
                </span>
              </div>
              <div className="contact-items">
                {contact.items.map((item, iidx) => (
                  <div key={iidx} className={`contact-item-${item.type}`}>
                    <strong>
                      <Text value={item.type} />:
                    </strong>{" "}
                    <span>
                      <Text value={item.value} />
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </ReferencesItem>
      ))}
    </>
  );
};

export default References;
