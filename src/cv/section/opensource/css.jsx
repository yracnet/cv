import styled from "styled-components";

export const OpensourceCol = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;
export const OpensourceItem = styled.section`
  margin-bottom: 4mm;

  .header {
    .name {
      font-size: 10.5pt;
      font-weight: 600;
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }
  }

  .description {
    font-size: 9.5pt;
    color: #374151;
    padding-left: 4mm;
    line-height: 1.45;
  }
`;
