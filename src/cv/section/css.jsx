import styled from "styled-components";

const names = [
  "role",
  "modality",
  "title",
  "info",
  "details",
  "summary",
  "date",
  "company",
  "location",
  "photo",
  "links",
  "contacts",
  "headline",
  "content",
  "description",
  "projects",
  "technologies",
];

export const BaseSection = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  gap: 0px 0px;
  grid-auto-flow: row;
  ${names.map(
    (name) => `> .${name} { grid-area: ${name}; &:empty {  display: none;}}`
  )}
`;

export const Body = styled.body`
  min-height: 100vh;
  background: #f3f4f6;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  &.debug {
    border: 1px solid red;
    > * {
      border: 1px solid blue;
      > * {
        border: 1px solid green;
        > * {
          border: 1px solid black;
          > * {
            border: 1px solid red;
            > * {
              border: 1px solid blue;
            }
          }
        }
      }
    }
  }
`;

export const Page = styled.div`
  margin: 5mm 0;
  width: 215.9mm;
  min-height: 279.4mm;
  background: #ffffff;
  display: flex;
  flex-direction: column;
  gap: 2mm;

  font-family: system-ui, BlinkMacSystemFont, "Segoe UI", Arial;
  font-size: 11pt;
  line-height: 1.45;

  padding: 20mm 20mm 15mm 20mm;
  box-shadow: 0 0 4mm rgba(0, 0, 0, 0.12);

  page-break-after: always;

  @media print {
    margin: 0;
    padding: 0;
    box-shadow: none;
    width: 100%;
    min-height: auto;
  }
`;
