import { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Users, AlertTriangle, Building2 } from "lucide-react";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix para los iconos de Leaflet en React
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png",
  iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png",
  shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png",
});

// Coordenadas de provincias argentinas (capitales)
const PROVINCIAS_COORDS: Record<string, [number, number]> = {
  "Buenos Aires": [-34.6037, -58.3816],
  "CABA": [-34.6037, -58.3816],
  "Catamarca": [-28.4696, -65.7795],
  "Chaco": [-27.4514, -58.9867],
  "Chubut": [-43.2489, -65.3094],
  "Córdoba": [-31.4201, -64.1888],
  "Corrientes": [-27.4692, -58.8306],
  "Entre Ríos": [-31.7333, -60.5297],
  "Formosa": [-26.1775, -58.1781],
  "Jujuy": [-24.1858, -65.2995],
  "La Pampa": [-36.6167, -64.2833],
  "La Rioja": [-29.4131, -66.8558],
  "Mendoza": [-32.8895, -68.8458],
  "Misiones": [-27.3671, -55.8961],
  "Neuquén": [-38.9516, -68.0591],
  "Río Negro": [-40.8135, -62.9967],
  "Salta": [-24.7821, -65.4232],
  "San Juan": [-31.5375, -68.5364],
  "San Luis": [-33.3017, -66.3378],
  "Santa Cruz": [-51.6226, -69.2181],
  "Santa Fe": [-31.6333, -60.7000],
  "Santiago del Estero": [-27.7834, -64.2642],
  "Tierra del Fuego": [-54.8019, -68.3029],
  "Tucumán": [-26.8241, -65.2226],
};

// Iconos personalizados
const createCustomIcon = (color: string) => {
  return L.divIcon({
    className: "custom-marker",
    html: `
      <div style="
        background-color: ${color};
        width: 30px;
        height: 30px;
        border-radius: 50%;
        border: 3px solid white;
        box-shadow: 0 2px 5px rgba(0,0,0,0.3);
        display: flex;
        align-items: center;
        justify-content: center;
      ">
        <div style="
          width: 10px;
          height: 10px;
          background-color: white;
          border-radius: 50%;
        "></div>
      </div>
    `,
    iconSize: [30, 30],
    iconAnchor: [15, 15],
  });
};

const seccionalIcon = createCustomIcon("#FF69B4"); // Rosa
const radarIcon = createCustomIcon("#ef4444"); // Rojo
const delegadoIcon = createCustomIcon("#10b981"); // Verde

interface MapData {
  seccionales: Array<{
    id: number;
    nombre: string;
    provincia: string;
    direccion?: string;
    sindicato: string;
  }>;
  reportesRadar: Array<{
    id: number;
    provincia: string;
    tipo: string;
    fecha: string;
  }>;
  delegados: Array<{
    id: number;
    nombre: string;
    provincia: string;
    sindicato: string;
  }>;
}

// Datos de ejemplo (en producción vendrían de la base de datos)
const MOCK_DATA: MapData = {
  seccionales: [
    { id: 1, nombre: "UPCN CABA", provincia: "CABA", direccion: "Av. Corrientes 1234", sindicato: "UPCN" },
    { id: 2, nombre: "ATE Buenos Aires", provincia: "Buenos Aires", direccion: "Calle 50 N° 789", sindicato: "ATE" },
    { id: 3, nombre: "UPCN Córdoba", provincia: "Córdoba", direccion: "Av. Colón 456", sindicato: "UPCN" },
    { id: 4, nombre: "ATE Corrientes", provincia: "Corrientes", direccion: "9 de Julio 123", sindicato: "ATE" },
    { id: 5, nombre: "UPCN Mendoza", provincia: "Mendoza", direccion: "San Martín 890", sindicato: "UPCN" },
  ],
  reportesRadar: [
    { id: 1, provincia: "CABA", tipo: "Discriminación", fecha: "2025-11-10" },
    { id: 2, provincia: "Buenos Aires", tipo: "Despido", fecha: "2025-11-08" },
    { id: 3, provincia: "Córdoba", tipo: "Violencia institucional", fecha: "2025-11-05" },
  ],
  delegados: [
    { id: 1, nombre: "María T.", provincia: "CABA", sindicato: "UPCN" },
    { id: 2, nombre: "Sofía R.", provincia: "Buenos Aires", sindicato: "ATE" },
    { id: 3, nombre: "Lucía M.", provincia: "Córdoba", sindicato: "UPCN" },
    { id: 4, nombre: "Ana P.", provincia: "Corrientes", sindicato: "ATE" },
  ],
};

function MapController({ center }: { center: [number, number] }) {
  const map = useMap();
  useEffect(() => {
    map.setView(center, 5);
  }, [center, map]);
  return null;
}

export default function Mapa() {
  const [mapData] = useState<MapData>(MOCK_DATA);
  const [filtro, setFiltro] = useState<"todos" | "seccionales" | "radar" | "delegados">("todos");
  const [center, setCenter] = useState<[number, number]>([-38.4161, -63.6167]); // Centro de Argentina

  const mostrarSeccionales = filtro === "todos" || filtro === "seccionales";
  const mostrarRadar = filtro === "todos" || filtro === "radar";
  const mostrarDelegados = filtro === "todos" || filtro === "delegados";

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-secondary/10 to-accent/10 py-8">
      <div className="container">
        {/* Header */}
        <Card className="mb-6 border-primary/50 shadow-xl">
          <CardHeader className="bg-gradient-to-r from-primary/20 to-secondary/20">
            <CardTitle className="text-3xl text-center flex items-center justify-center gap-2">
              <MapPin className="h-8 w-8 text-primary" />
              Mapa Nacional Trans-Formador
            </CardTitle>
            <CardDescription className="text-center text-lg">
              Red de seccionales sindicales, delegades trans y reportes del Radar Trans
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            {/* Filtros */}
            <div className="flex flex-wrap gap-2 justify-center mb-4">
              <Button
                variant={filtro === "todos" ? "default" : "outline"}
                onClick={() => setFiltro("todos")}
              >
                Ver Todo
              </Button>
              <Button
                variant={filtro === "seccionales" ? "default" : "outline"}
                onClick={() => setFiltro("seccionales")}
                className="gap-2"
              >
                <Building2 className="h-4 w-4" />
                Seccionales ({mapData.seccionales.length})
              </Button>
              <Button
                variant={filtro === "delegados" ? "default" : "outline"}
                onClick={() => setFiltro("delegados")}
                className="gap-2"
              >
                <Users className="h-4 w-4" />
                Delegades ({mapData.delegados.length})
              </Button>
              <Button
                variant={filtro === "radar" ? "default" : "outline"}
                onClick={() => setFiltro("radar")}
                className="gap-2"
              >
                <AlertTriangle className="h-4 w-4" />
                Radar Trans ({mapData.reportesRadar.length})
              </Button>
            </div>

            {/* Leyenda */}
            <div className="flex flex-wrap gap-4 justify-center text-sm">
              {mostrarSeccionales && (
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-[#FF69B4] border-2 border-white shadow"></div>
                  <span>Seccionales Sindicales</span>
                </div>
              )}
              {mostrarDelegados && (
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-[#10b981] border-2 border-white shadow"></div>
                  <span>Delegades Trans</span>
                </div>
              )}
              {mostrarRadar && (
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-[#ef4444] border-2 border-white shadow"></div>
                  <span>Reportes Radar Trans</span>
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Mapa */}
        <Card className="border-primary/50 shadow-xl overflow-hidden">
          <div style={{ height: "600px", width: "100%" }}>
            <MapContainer
              center={center}
              zoom={5}
              style={{ height: "100%", width: "100%" }}
              scrollWheelZoom={true}
            >
              <MapController center={center} />
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />

              {/* Marcadores de Seccionales */}
              {mostrarSeccionales &&
                mapData.seccionales.map((seccional) => {
                  const coords = PROVINCIAS_COORDS[seccional.provincia];
                  if (!coords) return null;
                  return (
                    <Marker key={`seccional-${seccional.id}`} position={coords} icon={seccionalIcon}>
                      <Popup>
                        <div className="p-2">
                          <h3 className="font-bold text-primary">{seccional.nombre}</h3>
                          <p className="text-sm">
                            <strong>Sindicato:</strong> {seccional.sindicato}
                          </p>
                          <p className="text-sm">
                            <strong>Provincia:</strong> {seccional.provincia}
                          </p>
                          {seccional.direccion && (
                            <p className="text-sm">
                              <strong>Dirección:</strong> {seccional.direccion}
                            </p>
                          )}
                          <Badge className="mt-2">Seccional</Badge>
                        </div>
                      </Popup>
                    </Marker>
                  );
                })}

              {/* Marcadores de Delegades */}
              {mostrarDelegados &&
                mapData.delegados.map((delegado) => {
                  const coords = PROVINCIAS_COORDS[delegado.provincia];
                  if (!coords) return null;
                  // Offset para evitar superposición
                  const offsetCoords: [number, number] = [coords[0] + 0.3, coords[1] + 0.3];
                  return (
                    <Marker key={`delegado-${delegado.id}`} position={offsetCoords} icon={delegadoIcon}>
                      <Popup>
                        <div className="p-2">
                          <h3 className="font-bold text-green-600">{delegado.nombre}</h3>
                          <p className="text-sm">
                            <strong>Sindicato:</strong> {delegado.sindicato}
                          </p>
                          <p className="text-sm">
                            <strong>Provincia:</strong> {delegado.provincia}
                          </p>
                          <Badge variant="secondary" className="mt-2">
                            Delegade Trans
                          </Badge>
                        </div>
                      </Popup>
                    </Marker>
                  );
                })}

              {/* Marcadores de Radar Trans */}
              {mostrarRadar &&
                mapData.reportesRadar.map((reporte) => {
                  const coords = PROVINCIAS_COORDS[reporte.provincia];
                  if (!coords) return null;
                  // Offset diferente para evitar superposición
                  const offsetCoords: [number, number] = [coords[0] - 0.3, coords[1] - 0.3];
                  return (
                    <Marker key={`radar-${reporte.id}`} position={offsetCoords} icon={radarIcon}>
                      <Popup>
                        <div className="p-2">
                          <h3 className="font-bold text-red-600">Reporte Radar Trans</h3>
                          <p className="text-sm">
                            <strong>Tipo:</strong> {reporte.tipo}
                          </p>
                          <p className="text-sm">
                            <strong>Provincia:</strong> {reporte.provincia}
                          </p>
                          <p className="text-sm">
                            <strong>Fecha:</strong>{" "}
                            {new Date(reporte.fecha).toLocaleDateString("es-AR")}
                          </p>
                          <Badge variant="destructive" className="mt-2">
                            Alerta
                          </Badge>
                        </div>
                      </Popup>
                    </Marker>
                  );
                })}
            </MapContainer>
          </div>
        </Card>

        {/* Info adicional */}
        <Card className="mt-6 border-primary/30">
          <CardContent className="p-4">
            <p className="text-sm text-muted-foreground text-center">
              Este mapa muestra la red nacional de seccionales sindicales, delegades trans y reportes
              del Radar Trans. Hacé clic en los marcadores para ver más información. Si querés agregar
              tu seccional o reportar un incidente, usá el formulario de registro o el Radar Trans.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
