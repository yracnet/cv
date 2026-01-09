import styled from "styled-components";

const Page = styled.main`
  width: 210mm;
  min-height: 297mm;
  background: #ffffff;
  display: flex;
  flex-direction: column;
  font-family: system-ui, BlinkMacSystemFont, "Segoe UI", Arial;
  font-size: 11pt;
  line-height: 1.45;
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.12);
  > * {
    margin: 20mm 15mm 0mm 20mm;
    page-break-inside: avoid;
  }
  @media print {
    box-shadow: none;
    margin: 0;
    width: 100%;
    min-height: auto;
  }
`;

export default Page;
