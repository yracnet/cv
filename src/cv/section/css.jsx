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
