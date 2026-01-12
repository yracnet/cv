import styled from "styled-components";
import { BaseSection } from "../css";

export const ExperienceItem = styled(BaseSection)`
  margin-left: 5mm;
  grid-template-columns: 2fr max-content;
  grid-template-areas:
    "title modality"
    "location period"
    "description description"
    "projects projects"
    "technologies technologies";

  > .title {
    font-weight: 600;
    font-size: 11pt;
    color: #1f2937;
  }

  > .modality {
    font-size: 9.5pt;
    color: #4b5563;
    font-style: italic;
  }

  > .location {
    font-size: 9.5pt;
    color: #374151;
    .company {
      font-weight: 500;
    }
    .location {
      font-style: italic;
    }
  }
  > .period {
    font-size: 9pt;
    color: #6b7280;
    font-style: italic;
  }

  > .description,
  > .projects {
    padding-left: 10mm;
    padding-top: 2mm;
    > ul {
      padding: 0;
      margin: 0;
      > li {
        font-size: 9.5pt;
        line-height: 1.45;
        padding-bottom: 0.5mm;
      }
    }
  }

  > .technologies {
    padding-left: 10mm;
    font-size: 9pt;
    color: #4b5563;
    font-style: italic;
  }
`;

export const ExperienceItem2 = styled.section`
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
`;
