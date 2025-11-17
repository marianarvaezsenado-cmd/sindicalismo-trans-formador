import { useRef } from "react";
import { Route, Switch } from "wouter";
import HomeSimple from "./pages/HomeSimple";
import Calendario from "./pages/Calendario";
import Anexo from "./pages/Anexo";
import Mapa from "./pages/Mapa";
import RadarTrans from "./pages/RadarTrans";
import Encuentros from "./pages/Encuentros";
import ChatWidget, { ChatWidgetRef } from "./components/ChatWidget";

export default function App() {
  const chatWidgetRef = useRef<ChatWidgetRef>(null);

  return (
    <>
      <ChatWidget ref={chatWidgetRef} />
      <Switch>
        <Route path="/">
          <HomeSimple chatWidgetRef={chatWidgetRef} />
        </Route>
        <Route path="/calendario">
          <Calendario />
        </Route>
        <Route path="/anexos">
          <Anexo />
        </Route>
        <Route path="/mapa">
          <Mapa />
        </Route>
        <Route path="/radar">
          <RadarTrans />
        </Route>
        <Route path="/encuentros">
          <Encuentros />
        </Route>
        <Route path="/historia">
          <Encuentros />
        </Route>
        <Route>
          <div className="min-h-screen flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-4xl font-bold mb-4">404 - Página no encontrada</h1>
              <a href="/" className="text-pink-600 hover:underline">Volver al inicio</a>
            </div>
          </div>
        </Route>
      </Switch>
    </>
  );
}
