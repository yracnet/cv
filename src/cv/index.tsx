import data from "./data/es.json";
import Education from "./education";
import Experience from "./experience";
import Opensource from "./opensource";
import Page from "./page";
import Profile from "./profile/index";
import References from "./reference";
import Skill from "./skills/index";
import styled from "styled-components";

const Body = styled.div`
  min-height: 100vh;
  background: #f3f4f6;
  padding: 2rem;
  display: flex;
  justify-content: center;
`;

const App = () => {
  return (
    <Body>
      <Page>
        <Profile data={data.profile} />
        <Experience data={data.experience} />
        <Skill data={data.skills} />
        <Opensource data={data.opensource} />
        <Education data={data.education} />
        <References data={data.references} />
      </Page>
    </Body>
  );
};

export default App;
