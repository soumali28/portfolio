import { ThemeProvider } from "styled-components";
import GlobalStyle from "./globalStyles";
import { lightTheme } from "./components/Themes";
import { Route, Switch } from "react-router-dom";

//Components
import Main from "./components/Main";
import About from "./components/About";
import Achievements from "./components/Achievements";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Error from "./components/Error";
import Contacts from "./components/Contacts";

function App() {
  return (
    <>
      <GlobalStyle />

      <ThemeProvider theme={lightTheme}>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/about" component={About} />
          <Route exact path="/achievements" component={Achievements} />
          <Route exact path="/work" component={Projects} />
          <Route exact path="/skills" component={Skills} />
          <Route exact path="/contact" component={Contacts} />
          <Route component={Error} />
        </Switch>
      </ThemeProvider>
    </>
  );
}

export default App;
