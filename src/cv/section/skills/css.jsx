import styled from "styled-components";
import { BaseSection } from "../css";

export const SkillItem = styled(BaseSection)`
  margin-left: 5mm;
  grid-template-columns: 1fr;
  grid-template-rows: min-content;
  grid-template-areas:
    "title"
    "content";
  .title {
    font-size: 10.5pt;
    font-weight: 600;
    color: #1f2937;
  }
  .content {
    > ul {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 1mm 5mm;
      font-size: 9.5pt;
      line-height: 1.45;
      margin: 0;
      padding: 0;
      padding-left: 4mm;
      > * {
        > span {
          font-size: 9pt;
          color: #4b5563;
          font-style: italic;
          margin-bottom: 0.5mm;
        }
      }
    }
  }
`;
