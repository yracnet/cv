import styled from "styled-components";

export const ExperienceStyle = styled.section`
  > h2 {
    font-size: 13pt;
    font-weight: 600;
    margin-bottom: 4mm;
    color: #111827;
    border-bottom: 1px solid #e5e7eb;
    padding-bottom: 1.5mm;
  }

  .experience-item {
    margin-bottom: 6mm;

    .header {
      display: flex;
      justify-content: space-between;
      margin-bottom: 1mm;

      .role {
        font-weight: 600;
        font-size: 11pt;
        color: #1f2937;
      }

      .modality {
        font-size: 9.5pt;
        color: #4b5563;
        font-style: italic;
      }
    }

    .company-location {
      font-size: 9.5pt;
      color: #374151;
      margin-bottom: 1mm;

      .company {
        font-weight: 500;
      }

      .location {
        font-style: italic;
      }
    }

    .period {
      font-size: 9pt;
      color: #6b7280;
      margin-bottom: 2mm;
    }

    .description,
    .projects {
      padding-left: 4mm;
      margin-bottom: 2mm;

      > li {
        font-size: 9.5pt;
        line-height: 1.45;
        margin-bottom: 1mm;
      }
    }

    .technologies {
      font-size: 9pt;
      color: #4b5563;
      margin-top: 1mm;
      font-style: italic;
    }
  }
`;
