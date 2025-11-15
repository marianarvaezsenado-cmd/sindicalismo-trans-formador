import { Route, Switch } from "wouter";
import HomeSimple from "./pages/HomeSimple";

export default function App() {
  return (
    <Switch>
      <Route path="/" component={HomeSimple} />
      <Route path="/bot">
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-50 to-blue-50">
          <div className="text-center p-8">
            <h1 className="text-4xl font-bold text-pink-600 mb-4">Bot Diana/Lohana</h1>
            <p className="text-lg text-gray-700">Esta funcionalidad requiere backend con IA.</p>
            <p className="text-gray-600 mt-2">En la versión completa, podrás conversar con Diana Sacayán y Lohana Berkins.</p>
            <a href="/" className="mt-6 inline-block bg-pink-500 text-white px-6 py-3 rounded-lg hover:bg-pink-600">
              Volver al inicio
            </a>
          </div>
        </div>
      </Route>
      <Route path="/calendario">
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-yellow-50 to-green-50">
          <div className="text-center p-8">
            <h1 className="text-4xl font-bold text-green-600 mb-4">Calendario de Efemérides</h1>
            <p className="text-lg text-gray-700">Esta funcionalidad se está desarrollando.</p>
            <a href="/" className="mt-6 inline-block bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600">
              Volver al inicio
            </a>
          </div>
        </div>
      </Route>
      <Route path="/radar">
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-50 to-orange-50">
          <div className="text-center p-8">
            <h1 className="text-4xl font-bold text-red-600 mb-4">Radar Trans</h1>
            <p className="text-lg text-gray-700">Sistema de reportes de violencia institucional.</p>
            <p className="text-gray-600 mt-2">Esta funcionalidad requiere backend para guardar reportes.</p>
            <a href="/" className="mt-6 inline-block bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600">
              Volver al inicio
            </a>
          </div>
        </div>
      </Route>
      <Route path="/mapa">
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-cyan-50">
          <div className="text-center p-8">
            <h1 className="text-4xl font-bold text-blue-600 mb-4">Mapa de la Red</h1>
            <p className="text-lg text-gray-700">Mapa interactivo con seccionales y delegades trans.</p>
            <p className="text-gray-600 mt-2">Esta funcionalidad se está desarrollando.</p>
            <a href="/" className="mt-6 inline-block bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600">
              Volver al inicio
            </a>
          </div>
        </div>
      </Route>
      <Route path="/anexos">
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 to-pink-50">
          <div className="text-center p-8">
            <h1 className="text-4xl font-bold text-purple-600 mb-4">Recursos y Anexos</h1>
            <p className="text-lg text-gray-700">13 anexos + 5 nuevos recursos disponibles.</p>
            <p className="text-gray-600 mt-2">Esta sección se está desarrollando.</p>
            <a href="/" className="mt-6 inline-block bg-purple-500 text-white px-6 py-3 rounded-lg hover:bg-purple-600">
              Volver al inicio
            </a>
          </div>
        </div>
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
  );
}
