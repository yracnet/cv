import { SettingProvider } from "./section/ui/context";
import Education from "./section/education";
import Experience from "./section/experience";
import Opensource from "./section/opensource";
import References from "./section/reference";
import Profile from "./section/profile/index";
import Skill from "./section/skills/index";
import { Body, Page } from "./section/css";
import Tool from "./section/tool";

const App = () => {
  return (
    <SettingProvider>
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
    </SettingProvider>
  );
};

export default App;
