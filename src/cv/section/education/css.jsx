import styled from "styled-components";

export const EducationItem = styled.div`
  margin-left: 5mm;
  > h3 {
    font-size: 11pt;
    font-weight: 600;
    margin-top: 0;
    margin-bottom: 2mm;
    color: #1f2937;
  }

  > .content {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  .education-item {
    margin-bottom: 2mm;
    margin-left: 5mm;

    .period {
      font-size: 9pt;
      color: #6b7280;
      margin-bottom: 1mm;
    }

    .institution {
      font-weight: 600;
      font-size: 10pt;
      color: #111827;
    }

    .degree {
      font-weight: 500;
      font-size: 9.5pt;
      color: #374151;
      margin-bottom: 1mm;
    }

    .field {
      font-size: 9pt;
      color: #4b5563;
      font-style: italic;
      margin-bottom: 1mm;
    }

    .details-list {
      display: none;
      padding-left: 4mm;

      > li {
        font-size: 9pt;
        line-height: 1.45;
        margin-bottom: 0.5mm;
      }
    }
  }
`;
