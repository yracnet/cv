import styled from "styled-components";
import { BaseSection } from "../css";

export const ProfileStyle = styled(BaseSection)`
  grid-template-columns: 150px 1fr;
  grid-template-rows: min-content;
  grid-template-areas:
    "photo title"
    "photo headline"
    "summary summary"
    "contacts contacts";
  > .photo {
    > img {
      width: 32mm;
      height: 32mm;
      object-fit: cover;
      border-radius: 50%;
    }
  }
  > .title {
    font-size: 20pt;
    margin: 0;
    font-weight: 700;
    color: #111827;
  }
  > .headline {
    font-size: 11.5pt;
    margin: 0px;
    font-weight: 500;
    color: #374151;
  }
  > .summary {
    padding-left: 5mm;
    line-height: 1.5;
    font-size: 10pt;
    > li {
      list-style: circle;
      margin: 0px;
      font-weight: 500;
      color: #374151;
    }
  }

  > .contacts {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1mm 0mm;
    font-size: 9.5pt;
    > a {
      display: inline-flex;
      align-items: center;
      gap: 0 2mm;
      color: #2563eb;
      text-decoration: none;
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
