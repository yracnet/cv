import styled from "styled-components";

const Page = styled.div`
  margin: 5mm 0;
  width: 210mm;
  min-height: 297mm;
  background: #ffffff;
  display: flex;
  flex-direction: column;
  font-family: system-ui, BlinkMacSystemFont, "Segoe UI", Arial;
  font-size: 11pt;
  line-height: 1.45;
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.12);
  padding: 20mm 0 15mm 20mm;
  page-break-inside: avoid;
  @media print {
    box-shadow: none;
    margin: 0;
    width: 100%;
    min-height: auto;
  }
`;

export default Page;
