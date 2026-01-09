import { useCV } from "../../context";
import { ToolStyle, LangButton, PrintButton } from "./css";

const Tool = () => {
  const { lang, setLang } = useCV();
  const values = ["es", "en"];

  const handlePrint = () => {
    window.print();
  };

  return (
    <ToolStyle>
      <div className="lang-switch">
        {values.map((v) => (
          <LangButton key={v} disabled={lang === v} onClick={() => setLang(v)}>
            {v.toUpperCase()}
          </LangButton>
        ))}
      </div>

      <PrintButton onClick={handlePrint}>🖨 Imprimir</PrintButton>
    </ToolStyle>
  );
};

export default Tool;
