import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Bio from "./pages/Bio";
import Releases from "./pages/Releases";
import Projects from "./pages/Projects";
import Education from "./pages/Education";
import Contact from "./pages/Contact";
import LookUpRadio from "./pages/LookUpRadio";
import ClearProject from "./pages/ClearProject";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/bio"} component={Bio} />
      <Route path={"/releases"} component={Releases} />
      <Route path={"/projects"} component={Projects} />
      <Route path={"/education"} component={Education} />
      <Route path={"/contact"} component={Contact} />
      <Route path={"/projects/look-up-radio"} component={LookUpRadio} />
      <Route path={"/projects/clear"} component={ClearProject} />
      
      <Route path={"/404"} component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="dark"
      >
        <TooltipProvider>
          <Toaster />
          <Navigation />
          <Router />
          <Footer />
          <div className="grain-overlay" />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
