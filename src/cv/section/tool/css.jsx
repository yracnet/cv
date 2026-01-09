import styled from "styled-components";

export const ToolStyle = styled.div`
  position: fixed;
  top: 4mm;
  right: 4mm;
  background: white;
  padding: 2.5mm 3.5mm;
  display: flex;
  align-items: center;
  gap: 3mm;
  box-shadow: 0 3mm 6mm rgba(0, 0, 0, 0.12);
  z-index: 1000;
  @media print {
    display: none;
  }
`;

export const LangButton = styled.button`
  border: none;
  padding: 1.5mm 3mm;
  font-weight: 600;
  cursor: pointer;
  background: ${({ disabled }) => (disabled ? "#2563eb" : "#e5e7eb")};
  color: ${({ disabled }) => (disabled ? "white" : "#374151")};
  transition: all 0.2s ease;

  &:hover {
    background: ${({ disabled }) => (disabled ? "#1d4ed8" : "#d1d5db")};
  }
`;

export const PrintButton = styled.button`
  border: none;
  padding: 1.5mm 3.5mm;
  background: #16a34a;
  color: white;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s ease;

  &:hover {
    background: #15803d;
  }
`;
