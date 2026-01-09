import styled from "styled-components";

export const SkillStyle = styled.section`
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

    > h3 {
      font-size: 10.5pt;
      font-weight: 600;
      margin-bottom: 2mm;
      color: #1f2937;
    }

    > ul {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 1.5mm 6mm;
      padding-left: 4mm;
      > li {
        font-size: 9.5pt;
        line-height: 1.45;
        > span {
          font-size: 8.5pt;
        }
      }
    }
  }
`;
