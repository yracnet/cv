import type React from "react";
import styled from "styled-components";

export const PreStyle = styled.pre`
  font-size: 8pt;
`;
export const Debug: React.FC<{
  value: any;
}> = ({ value }) => {
  return (
    <PreStyle>
      <code>{JSON.stringify(value, null, 2)}</code>
    </PreStyle>
  );
};
