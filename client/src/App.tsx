import { HelmetProvider } from "react-helmet-async";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch, useLocation } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Award from "./pages/Award";
import Guide from "./pages/Guide";
import Sponsor from "./pages/Sponsor";
import Thai from "./pages/Thai";
import Henro from "./pages/Henro";
import HenroShinsoku from "./pages/HenroShinsoku";
import Juku from "./pages/Juku";
import Efj from "./pages/Efj";
import EarthFamilyJourney from "./pages/EarthFamilyJourney";
import EarthFamily from "./pages/EarthFamily";
import { useEffect } from "react";


function ScrollToTop() {
  const [location] = useLocation();
  useEffect(() => {
    // アンカーリンク（#付き）の場合はスクロールトップしない
    if (!location.includes("#")) {
      window.scrollTo({ top: 0, behavior: "instant" });
    }
  }, [location]);
  return null;
}

function Router() {
  return (
    <>
      <ScrollToTop />
      <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/award"} component={Award} />
      <Route path={"/guide"} component={Guide} />
      <Route path={"/sponsor"} component={Sponsor} />
      <Route path={"/thai"} component={Thai} />
      <Route path={"/henro"} component={Henro} />
      <Route path={"/henro-shinsoku"} component={HenroShinsoku} />
      <Route path={"/juku"} component={Juku} />
      <Route path={"/efj"} component={Efj} />
      <Route path={"/earth-family"} component={EarthFamily} />
      <Route path={"/earth-family-journey"} component={EarthFamilyJourney} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
    </>
  );
}

function App() {
  return (
    <HelmetProvider>
      <ErrorBoundary>
        <ThemeProvider
          defaultTheme="light"
        >
          <TooltipProvider>
            <Toaster />
            <Router />
          </TooltipProvider>
        </ThemeProvider>
      </ErrorBoundary>
    </HelmetProvider>
  );
}

export default App;
