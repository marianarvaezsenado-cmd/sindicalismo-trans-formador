import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, MapPin, Users, FileText, TrendingUp, Heart } from "lucide-react";

interface Encuentro {
  numero: number;
  año: number;
  ciudad: string;
  provincia: string;
  fechas: string;
  participantes?: number;
  talleresCupo?: string[];
  conclusiones?: string[];
  destacado?: string;
  proximamente?: boolean;
}

const ENCUENTROS: Encuentro[] = [
  {
    numero: 35,
    año: 2022,
    ciudad: "San Luis",
    provincia: "San Luis",
    fechas: "8, 9 y 10 de octubre",
    participantes: 80000,
    talleresCupo: [
      "Taller de Cupo Laboral Trans",
      "Estrategias de implementación en provincias",
      "Articulación con sindicatos",
    ],
    conclusiones: [
      "Necesidad de fortalecer la implementación del cupo laboral trans en todas las provincias",
      "Crear redes de apoyo entre compañeras que accedieron al cupo",
      "Exigir cumplimiento efectivo de la Ley 27.636",
    ],
    destacado: "Primer encuentro post-pandemia con fuerte presencia trans en talleres sindicales",
  },
  {
    numero: 36,
    año: 2023,
    ciudad: "Resistencia",
    provincia: "Chaco",
    fechas: "7, 8 y 9 de octubre",
    participantes: 90000,
    talleresCupo: [
      "Taller de Cupo Laboral Trans y Travestis",
      "Violencia institucional en el acceso al trabajo",
      "Experiencias de compañeras en el Estado",
    ],
    conclusiones: [
      "Denunciar la falta de cumplimiento del cupo en organismos nacionales",
      "Crear un observatorio de seguimiento del cupo laboral trans",
      "Articular con organizaciones sindicales para garantizar derechos laborales",
    ],
    destacado: "Fuerte denuncia sobre incumplimiento del cupo y violencia institucional",
  },
  {
    numero: 37,
    año: 2024,
    ciudad: "Jujuy",
    provincia: "Jujuy",
    fechas: "12, 13 y 14 de octubre",
    participantes: 85000,
    talleresCupo: [
      "Taller de Trabajo, Cupo Laboral Trans y Sindicalismo",
      "Estrategias de resistencia frente a despidos",
      "Organización colectiva en tiempos de ajuste",
    ],
    conclusiones: [
      "Resistir los despidos de compañeras trans en el Estado",
      "Fortalecer la organización sindical como herramienta de defensa",
      "Crear redes de contención y apoyo mutuo",
      "Exigir que los sindicatos defiendan activamente a las compañeras trans",
    ],
    destacado:
      "Encuentro marcado por la resistencia al ajuste y los despidos de compañeras trans del Estado",
  },
  {
    numero: 38,
    año: 2025,
    ciudad: "Corrientes",
    provincia: "Corrientes",
    fechas: "22, 23 y 24 de noviembre",
    proximamente: true,
    talleresCupo: [
      "Taller de Sindicalismo Trans-Formador",
      "Coordinación Nacional del Cupo Laboral Trans",
      "Herramientas digitales para la organización",
    ],
    destacado:
      "Lanzamiento de la Coordinación Nacional del Sindicalismo Trans-Formador y presentación de la plataforma digital",
  },
];

export default function Encuentros() {
  const [encuentroSeleccionado, setEncuentroSeleccionado] = useState<Encuentro>(ENCUENTROS[3]); // 38° por defecto

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-secondary/10 to-accent/10 py-8">
      <div className="container">
        {/* Header */}
        <Card className="mb-6 border-primary/50 shadow-xl">
          <CardHeader className="bg-gradient-to-r from-primary/20 to-secondary/20">
            <CardTitle className="text-3xl text-center flex items-center justify-center gap-2">
              <Calendar className="h-8 w-8 text-primary" />
              Historia de los Encuentros Plurinacionales
            </CardTitle>
            <CardDescription className="text-center text-lg">
              Encuentros Plurinacionales de Mujeres, Lesbianas, Trans, Travestis, Bisexuales,
              Intersexuales y No Binaries
            </CardDescription>
          </CardHeader>
        </Card>

        {/* Selector de Encuentros */}
        <div className="mb-6">
          <Tabs
            defaultValue="38"
            className="w-full"
            onValueChange={(value) => {
              const encuentro = ENCUENTROS.find((e) => e.numero.toString() === value);
              if (encuentro) setEncuentroSeleccionado(encuentro);
            }}
          >
            <TabsList className="grid w-full grid-cols-4 mb-6">
              {ENCUENTROS.map((encuentro) => (
                <TabsTrigger key={encuentro.numero} value={encuentro.numero.toString()}>
                  {encuentro.numero}° Encuentro
                  {encuentro.proximamente && (
                    <Badge variant="secondary" className="ml-2 text-xs">
                      Próximo
                    </Badge>
                  )}
                </TabsTrigger>
              ))}
            </TabsList>

            {ENCUENTROS.map((encuentro) => (
              <TabsContent key={encuentro.numero} value={encuentro.numero.toString()}>
                <div className="grid gap-6 md:grid-cols-2">
                  {/* Información General */}
                  <Card className="border-primary/50">
                    <CardHeader className="bg-primary/10">
                      <CardTitle className="flex items-center gap-2">
                        <MapPin className="h-5 w-5 text-primary" />
                        {encuentro.numero}° Encuentro Plurinacional
                      </CardTitle>
                      <CardDescription>
                        {encuentro.ciudad}, {encuentro.provincia} - {encuentro.año}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="pt-6 space-y-4">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">
                          <strong>Fechas:</strong> {encuentro.fechas}
                        </span>
                      </div>
                      {encuentro.participantes && (
                        <div className="flex items-center gap-2">
                          <Users className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm">
                            <strong>Participantes:</strong> {encuentro.participantes.toLocaleString()}
                          </span>
                        </div>
                      )}
                      {encuentro.destacado && (
                        <div className="mt-4 p-4 bg-accent/20 rounded-lg border border-accent">
                          <div className="flex items-start gap-2">
                            <Heart className="h-5 w-5 text-accent mt-0.5" />
                            <div>
                              <p className="text-sm font-semibold mb-1">Destacado:</p>
                              <p className="text-sm">{encuentro.destacado}</p>
                            </div>
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>

                  {/* Talleres de Cupo */}
                  <Card className="border-secondary/50">
                    <CardHeader className="bg-secondary/10">
                      <CardTitle className="flex items-center gap-2">
                        <FileText className="h-5 w-5 text-secondary" />
                        Talleres de Cupo Laboral Trans
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-6">
                      {encuentro.talleresCupo && encuentro.talleresCupo.length > 0 ? (
                        <ul className="space-y-2">
                          {encuentro.talleresCupo.map((taller, index) => (
                            <li key={index} className="flex items-start gap-2">
                              <span className="text-primary font-bold">•</span>
                              <span className="text-sm">{taller}</span>
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <p className="text-sm text-muted-foreground">
                          Información de talleres próximamente
                        </p>
                      )}
                    </CardContent>
                  </Card>
                </div>

                {/* Conclusiones */}
                {encuentro.conclusiones && encuentro.conclusiones.length > 0 && (
                  <Card className="mt-6 border-accent/50">
                    <CardHeader className="bg-accent/10">
                      <CardTitle className="flex items-center gap-2">
                        <TrendingUp className="h-5 w-5 text-accent" />
                        Conclusiones y Compromisos
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-6">
                      <ul className="space-y-3">
                        {encuentro.conclusiones.map((conclusion, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <Badge variant="outline" className="mt-0.5">
                              {index + 1}
                            </Badge>
                            <span className="text-sm flex-1">{conclusion}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                )}

                {/* Próximamente para el 38° */}
                {encuentro.proximamente && (
                  <Card className="mt-6 border-primary bg-gradient-to-r from-primary/10 to-secondary/10">
                    <CardContent className="p-6">
                      <div className="text-center space-y-4">
                        <h3 className="text-2xl font-bold text-primary">
                          ¡Nos vemos en Corrientes!
                        </h3>
                        <p className="text-lg">
                          El 38° Encuentro Plurinacional será el lanzamiento oficial de la{" "}
                          <strong>Coordinación Nacional del Sindicalismo Trans-Formador</strong>
                        </p>
                        <p className="text-sm text-muted-foreground">
                          Esta plataforma digital será presentada como herramienta de organización,
                          articulación y resistencia para todas las compañeras trans que trabajan o
                          buscan trabajar en el Estado.
                        </p>
                        <div className="flex gap-4 justify-center mt-6">
                          <Button size="lg" onClick={() => (window.location.href = "/")}>
                            Registrate ahora
                          </Button>
                          <Button
                            size="lg"
                            variant="outline"
                            onClick={() => (window.location.href = "/bot")}
                          >
                            Hablá con Diana y Lohana
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )}
              </TabsContent>
            ))}
          </Tabs>
        </div>

        {/* Evolución Histórica */}
        <Card className="border-primary/30">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5" />
              Evolución de la Lucha por el Cupo Laboral Trans
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-sm">
                Los Encuentros Plurinacionales han sido espacios fundamentales para la construcción
                colectiva de estrategias de implementación del cupo laboral trans. Desde el 35°
                Encuentro en San Luis (2022) hasta el próximo 38° en Corrientes (2025), hemos
                avanzado en:
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">→</span>
                  <span>
                    <strong>Articulación sindical:</strong> Construcción de vínculos con sindicatos
                    como UPCN, ATE y otros gremios del sector público
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">→</span>
                  <span>
                    <strong>Monitoreo colectivo:</strong> Creación del Radar Trans para visibilizar
                    incumplimientos y violencias
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">→</span>
                  <span>
                    <strong>Herramientas digitales:</strong> Desarrollo de esta plataforma como
                    espacio autónomo de organización
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">→</span>
                  <span>
                    <strong>Resistencia colectiva:</strong> Estrategias de defensa frente a despidos
                    y ajustes
                  </span>
                </li>
              </ul>
              <p className="text-sm mt-4 italic text-muted-foreground">
                "Somos les que somos y quedamos les que quedamos. La organización colectiva es
                nuestra fuerza."
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
