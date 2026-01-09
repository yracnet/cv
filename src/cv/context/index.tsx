import React, {
  createContext,
  useContext,
  useState,
  type Dispatch,
  type ReactNode,
} from "react";

type CVValue = {
  lang: string;
  setLang: Dispatch<string>;
};

//@ts-ignore
export const CVContext = createContext<CVValue>(null);

export const CVProvider: React.FC<{
  children: ReactNode;
  defaultLang?: string;
}> = ({ children, defaultLang = "en" }) => {
  const [lang, setLang] = useState(defaultLang);
  return (
    <CVContext
      value={{
        lang,
        setLang,
      }}
    >
      {children}
    </CVContext>
  );
};

export const useCV = () => {
  const { lang, setLang } = useContext(CVContext);
  return { lang, setLang };
};
