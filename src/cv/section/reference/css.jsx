import styled from "styled-components";
export const ReferencesCol = styled.div`
  margin-left: 5mm;
  display: grid;
  grid-template-columns: 1fr 1fr;
`;
export const ReferencesItem = styled.div`
  .company-name {
    font-size: 11pt;
    font-weight: 600;
    margin-bottom: 2mm;
    color: #1f2937;
  }

  .contact-item {
    margin-bottom: 2mm;
    padding-left: 4mm;

    .contact-header {
      font-size: 10pt;
      font-weight: 500;
      color: #111827;
      .contact-role {
        font-weight: 600;
        font-size: 9pt;
      }
    }

    .contact-items {
      font-size: 9pt;
      .type {
        color: #7d7d7e;
        font-weight: 600;
      }
      .value {
        color: #374151;
      }
    }
  }
`;
