import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { trpc } from "@/lib/trpc";
import { Calendar as CalendarIcon, ChevronLeft, ChevronRight, Filter, Star } from "lucide-react";

const MESES = [
  "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
  "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
];

const TIPOS_EFEMERIDES = [
  { value: "todos", label: "Todas" },
  { value: "feminista", label: "Feministas" },
  { value: "trans", label: "Trans/LGBTIQ+" },
  { value: "sindical", label: "Sindicales" },
  { value: "feriado", label: "Feriados Nacionales" },
  { value: "otro", label: "Otras" },
];

export default function Calendario() {
  const [mesSeleccionado, setMesSeleccionado] = useState(new Date().getMonth() + 1);
  const [tipoFiltro, setTipoFiltro] = useState("todos");

  const { data: efemerides, isLoading } = trpc.efemerides.list.useQuery({
    mes: mesSeleccionado,
    tipo: tipoFiltro === "todos" ? undefined : (tipoFiltro as "feminista" | "trans" | "sindical" | "feriado"),
  });

  const mesAnterior = () => {
    setMesSeleccionado((prev) => (prev === 1 ? 12 : prev - 1));
  };

  const mesSiguiente = () => {
    setMesSeleccionado((prev) => (prev === 12 ? 1 : prev + 1));
  };

  const getTipoBadgeColor = (tipo: string) => {
    switch (tipo) {
      case "feminista":
        return "bg-primary text-primary-foreground";
      case "trans":
        return "bg-secondary text-secondary-foreground";
      case "sindical":
        return "bg-accent text-accent-foreground";
      case "feriado":
        return "bg-destructive text-destructive-foreground";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  const esDestacada = (dia: number, mes: number) => {
    // Destacar el 17 de noviembre (Día del Militante)
    return dia === 17 && mes === 11;
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-secondary/10 to-accent/10 py-12">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4 flex items-center justify-center gap-3">
            <CalendarIcon className="h-10 w-10" />
            Calendario de Efemérides
          </h1>
          <p className="text-xl text-muted-foreground">
            Fechas clave del transfeminismo sindical
          </p>
        </div>

        {/* Controles */}
        <Card className="mb-8 border-primary/50">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              {/* Navegación de Mes */}
              <div className="flex items-center gap-4">
                <Button variant="outline" size="icon" onClick={mesAnterior}>
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <h2 className="text-2xl font-bold text-primary min-w-[150px] text-center">
                  {MESES[mesSeleccionado - 1]}
                </h2>
                <Button variant="outline" size="icon" onClick={mesSiguiente}>
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>

              {/* Filtro por Tipo */}
              <div className="flex items-center gap-3 w-full md:w-auto">
                <Filter className="h-5 w-5 text-muted-foreground" />
                <Select value={tipoFiltro} onValueChange={setTipoFiltro}>
                  <SelectTrigger className="w-full md:w-[200px]">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {TIPOS_EFEMERIDES.map((tipo) => (
                      <SelectItem key={tipo.value} value={tipo.value}>
                        {tipo.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Lista de Efemérides */}
        {isLoading ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground">Cargando efemérides...</p>
          </div>
        ) : efemerides && efemerides.length > 0 ? (
          <div className="grid gap-6">
            {efemerides.map((efemeride: any) => (
              <Card
                key={efemeride.id}
                className={`hover:shadow-lg transition-all ${
                  esDestacada(efemeride.dia, efemeride.mes)
                    ? "border-primary border-2 shadow-xl"
                    : "border-primary/30"
                }`}
              >
                <CardHeader className="bg-gradient-to-r from-primary/10 to-secondary/10">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="bg-primary text-primary-foreground rounded-lg px-4 py-2 text-center min-w-[60px]">
                          <div className="text-2xl font-bold">{efemeride.dia}</div>
                          <div className="text-xs uppercase">{MESES[efemeride.mes - 1].slice(0, 3)}</div>
                        </div>
                        <div className="flex-1">
                          <CardTitle className="text-xl flex items-center gap-2">
                            {esDestacada(efemeride.dia, efemeride.mes) && (
                              <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                            )}
                            {efemeride.titulo}
                          </CardTitle>
                          <CardDescription className="mt-1">
                            {efemeride.descripcion}
                          </CardDescription>
                        </div>
                      </div>
                    </div>
                    <Badge className={getTipoBadgeColor(efemeride.tipo)}>
                      {efemeride.tipo}
                    </Badge>
                  </div>
                </CardHeader>

                {efemeride.referenciaHistorica && (
                  <CardContent className="pt-4">
                    <div className="bg-muted/50 p-4 rounded-lg">
                      <p className="text-sm text-foreground leading-relaxed">
                        <strong className="text-primary">Referencia histórica:</strong>{" "}
                        {efemeride.referenciaHistorica}
                      </p>
                    </div>
                    {efemeride.pais && (
                      <p className="text-xs text-muted-foreground mt-2">
                        📍 {efemeride.pais}
                        {efemeride.esInternacional === "si" && " (Internacional)"}
                      </p>
                    )}
                  </CardContent>
                )}

                {esDestacada(efemeride.dia, efemeride.mes) && (
                  <CardContent className="pt-0">
                    <div className="bg-primary/20 p-4 rounded-lg border-2 border-primary">
                      <p className="text-sm font-semibold text-primary">
                        ⭐ Fecha destacada para el Proyecto Sindicalismo Trans-Formador
                      </p>
                    </div>
                  </CardContent>
                )}
              </Card>
            ))}
          </div>
        ) : (
          <Card className="border-muted">
            <CardContent className="py-12 text-center">
              <p className="text-muted-foreground text-lg">
                No hay efemérides registradas para este mes y filtro.
              </p>
            </CardContent>
          </Card>
        )}

        {/* Leyenda de Colores */}
        <Card className="mt-8 border-primary/30">
          <CardHeader>
            <CardTitle className="text-lg">Leyenda de Tipos</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-3">
              {TIPOS_EFEMERIDES.filter((t) => t.value !== "todos").map((tipo) => (
                <Badge key={tipo.value} className={getTipoBadgeColor(tipo.value)}>
                  {tipo.label}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
