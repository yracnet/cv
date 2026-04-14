import { PrintText } from "../ui/text";
import { TitleLine } from "../ui/title";
import { ReferencesCol, ReferencesItem } from "./css";
import { data } from "./data.js";

const References = () => {
  return (
    <>
      <TitleLine>
        <PrintText value={data.title} />
      </TitleLine>
      <ReferencesCol>
        {data.items
          .filter((it) => it.hide !== true)
          .map((it, idx) => (
            <ReferencesItem key={idx} className="company-group">
              <div className="company-name">{it.company}</div>
              {it.contacts.map((contact, cidx) => (
                <div key={cidx} className="contact-item">
                  <div className="contact-header">
                    <span className="contact-name">
                      <PrintText value={contact.name} />
                    </span>
                    <div className="contact-role">
                      <PrintText value={contact.role} />
                    </div>
                  </div>
                  <div className="contact-items">
                    {contact.items.map((item, iidx) => (
                      <span key={iidx}>
                        <span className="type">
                          <PrintText value={item.type} />:
                        </span>{" "}
                        <span className="value">
                          <PrintText value={item.value} />
                        </span>{" "}
                      </span>
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
