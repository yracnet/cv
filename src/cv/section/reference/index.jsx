import { PrintText } from "../../ui/text";
import { TitleLine } from "../../ui/title";
import { ReferencesCol, ReferencesItem } from "./css";
import data from "./data.json";

const References = () => {
  return (
    <>
      <TitleLine>
        <PrintText value={data.title} />
      </TitleLine>
      <ReferencesCol>
        {data.items.map((it, idx) => (
          <ReferencesItem key={idx} className="company-group">
            <h3 className="company-name">{it.company}</h3>
            {it.contacts.map((contact, cidx) => (
              <div key={cidx} className="contact-item">
                <div className="contact-header">
                  <span className="contact-name">
                    <PrintText value={contact.name} />
                  </span>
                  -
                  <span className="contact-role">
                    <PrintText value={contact.role} />
                  </span>
                </div>
                <div className="contact-items">
                  {contact.items.map((item, iidx) => (
                    <div key={iidx}>
                      <strong>
                        <PrintText value={item.type} />:
                      </strong>{" "}
                      <span>
                        <PrintText value={item.value} />
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </ReferencesItem>
        ))}
      </ReferencesCol>
    </>
  );
};

export default References;
