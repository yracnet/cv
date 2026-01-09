import type React from "react";
import { useCV } from "../context";

type ValueText =
  | string
  | {
      [key: string]: string;
    };

export const Text: React.FC<{
  value: ValueText;
}> = ({ value }) => {
  const { lang } = useCV();
  const text =
    value === undefined
      ? ""
      : typeof value === "string"
      ? value
      : value[lang] ?? value.en ?? value.es;
  return text;
};

export const TextList: React.FC<{
  value: ValueText[];
}> = ({ value }) => {
  if (!value) return null;

  return (
    <span>
      {value.map((it, i) => (
        <span key={i}>
          <Text value={it} />
          {i < value.length - 1 && ", "}
        </span>
      ))}
    </span>
  );
};
