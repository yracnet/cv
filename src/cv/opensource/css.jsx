import styled from "styled-components";

export const OpensourceStyle = styled.section`
  > h2 {
    font-size: 13pt;
    font-weight: 600;
    margin-bottom: 4mm;
    color: #111827;
    border-bottom: 1px solid #e5e7eb;
    padding-bottom: 1.5mm;
  }

  > div {
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
  }
`;
