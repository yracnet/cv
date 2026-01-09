import { ReferencesStyle } from "./css";

const References = ({ data }) => {
  if (!data || !Array.isArray(data)) return null;

  return (
    <ReferencesStyle>
      <h2>Personal References</h2>

      {data.map((company, idx) => (
        <div key={idx} className="company-group">
          <h3 className="company-name">{company.company}</h3>

          {company.contacts.map((contact, cidx) => (
            <div key={cidx} className="contact-item">
              <div className="contact-header">
                <span className="contact-name">{contact.name}</span> –{" "}
                <span className="contact-role">{contact.role}</span>
              </div>
              <div className="contact-items">
                {contact.items.map((item, iidx) => (
                  <div key={iidx} className={`contact-item-${item.type}`}>
                    <strong>{item.type}: </strong> {item.value}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      ))}
    </ReferencesStyle>
  );
};

export default References;
