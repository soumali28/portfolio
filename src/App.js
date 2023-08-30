import { ThemeProvider } from "styled-components";
import GlobalStyle from "./globalStyles";
import { lightTheme } from "./components/Themes";
import { Route, Switch } from "react-router-dom";

//Components
import Main from "./components/Main";
import Experience from "./components/Experience";
import Achievements from "./components/Achievements";
import Skills from "./components/Skills";
import Error from "./components/Error";
import Contacts from "./components/Contacts";
import Work from "./components/Work";

function App() {
  return (
    <>
      <GlobalStyle />

      <ThemeProvider theme={lightTheme}>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/experience" component={Experience} />
          <Route exact path="/achievements" component={Achievements} />
          <Route exact path="/work" component={Work} />
          <Route exact path="/skills" component={Skills} />
          <Route exact path="/contact" component={Contacts} />
          <Route component={Error} />
        </Switch>
      </ThemeProvider>
    </>
  );
}

export default App;
