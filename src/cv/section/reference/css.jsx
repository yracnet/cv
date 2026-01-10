import styled from "styled-components";
export const ReferencesCol = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;
export const ReferencesItem = styled.div`
  margin-bottom: 0mm;
  margin-left: 5mm;

  .company-name {
    font-size: 11pt;
    font-weight: 600;
    margin-bottom: 2mm;
    color: #1f2937;
  }

  .contact-item {
    margin-bottom: 4mm;
    padding-left: 4mm;

    .contact-header {
      font-size: 10pt;
      font-weight: 500;
      color: #111827;
      margin-bottom: 1mm;
    }

    .contact-items {
      font-size: 9pt;
      color: #374151;

      > div {
        margin-bottom: 0.5mm;

        strong {
          color: #111827;
        }
      }
    }
  }
`;
