import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Calendario from "./pages/Calendario";
import RadarTrans from "./pages/RadarTrans";
import Bot from "./pages/Bot";
import Mapa from "./pages/Mapa";
import Anexos from "./pages/Anexos";
import Encuentros from "./pages/Encuentros";

function Router() {
  // make sure to consider if you need authentication for certain routes
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path="/calendario" component={Calendario} />
      <Route path="/radar-trans" component={RadarTrans} />
      <Route path="/bot" component={Bot} />
      <Route path="/mapa" component={Mapa} />
      <Route path="/anexos" component={Anexos} />
      <Route path="/encuentros" component={Encuentros} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="light"
        // switchable
      >
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
