import React, {
  createContext,
  useContext,
  useState,
  type Dispatch,
  type ReactNode,
} from "react";

type SettingValue = {
  lang: string;
  setLang: Dispatch<string>;
};

//@ts-ignore
export const SettingContext = createContext<SettingValue>(null);

export const SettingProvider: React.FC<{
  children: ReactNode;
  defaultLang?: string;
}> = ({ children, defaultLang = "en" }) => {
  const [lang, setLang] = useState(defaultLang);
  return (
    <SettingContext
      value={{
        lang,
        setLang,
      }}
    >
      {children}
    </SettingContext>
  );
};

export const useSetting = () => {
  const { lang, setLang } = useContext(SettingContext);
  return { lang, setLang };
};
