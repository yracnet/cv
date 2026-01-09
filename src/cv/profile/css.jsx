import styled from "styled-components";

export const ProfileStyle = styled.section`
  .header {
    display: flex;
    align-items: center;
    gap: 16mm;

    > img {
      width: 32mm;
      height: 32mm;
      object-fit: cover;
      border-radius: 50%;
    }
    > div {
      h1 {
        font-size: 20pt;
        margin: 0;
        font-weight: 700;
        color: #111827;
      }

      h2 {
        font-size: 11.5pt;
        margin: 0px;
        font-weight: 500;
        color: #374151;
      }
    }
  }

  .summary {
    margin: 10mm 0 6mm;
    padding-left: 5mm;

    > li {
      margin-bottom: 2mm;
      line-height: 1.5;
    }
  }

  .contacts {
    display: flex;
    flex-wrap: wrap;
    gap: 2mm 6mm;
    font-size: 9.5pt;

    > a {
      display: inline-flex;
      align-items: center;
      gap: 2mm;
      color: #2563eb;
      text-decoration: none;
      padding: 0.5mm 1mm;
      > .label {
        font-weight: 500;
        color: black;
      }
      > .value {
        white-space: nowrap;
        color: gray;
      }
      &:hover {
        text-decoration: none;
        > .label {
          text-decoration: none;
        }
        > .value {
          text-decoration: underline;
        }
      }
    }
  }
`;
