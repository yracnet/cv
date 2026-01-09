import { CVProvider } from "./context";
import Education from "./section/education";
import Experience from "./section/experience";
import Opensource from "./section/opensource";
import References from "./section/reference";
import Profile from "./section/profile/index";
import Skill from "./section/skills/index";
import { Body, Page } from "./ui/body";
import Tool from "./section/tool";

const App = () => {
  return (
    <CVProvider>
      <Body>
        <Tool />
        <Page>
          <Profile />
          <Experience />
          <Skill />
          <Opensource />
          <Education />
          <References />
        </Page>
      </Body>
    </CVProvider>
  );
};
/**
          
 
 */

export default App;
