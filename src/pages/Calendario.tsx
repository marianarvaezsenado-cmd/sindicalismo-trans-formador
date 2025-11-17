import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar as CalendarIcon, ChevronLeft, ChevronRight, Filter } from "lucide-react";

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

// Datos mock de efemérides
const EFEMERIDES_MOCK = [
  { id: 1, dia: 8, mes: 3, titulo: "Día Internacional de la Mujer", tipo: "feminista", descripcion: "Conmemoración de la lucha de las mujeres por sus derechos" },
  { id: 2, dia: 17, mes: 11, titulo: "Día del Militante", tipo: "sindical", descripcion: "Día de la militancia y organización popular" },
  { id: 3, dia: 28, mes: 6, titulo: "Día del Orgullo LGBTIQ+", tipo: "trans", descripcion: "Conmemoración de los disturbios de Stonewall" },
  { id: 4, dia: 31, mes: 3, titulo: "Día de la Visibilidad Trans", tipo: "trans", descripcion: "Visibilización de las personas trans" },
  { id: 5, dia: 1, mes: 5, titulo: "Día del Trabajador", tipo: "sindical", descripcion: "Día Internacional de los Trabajadores" },
];

export default function Calendario() {
  const [mesSeleccionado, setMesSeleccionado] = useState(new Date().getMonth() + 1);
  const [tipoFiltro, setTipoFiltro] = useState("todos");

  // Filtrar efemérides por mes y tipo
  const efemeridesFiltered = EFEMERIDES_MOCK.filter(e => {
    const matchMes = e.mes === mesSeleccionado;
    const matchTipo = tipoFiltro === "todos" || e.tipo === tipoFiltro;
    return matchMes && matchTipo;
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
        return "bg-pink-500 text-white";
      case "trans":
        return "bg-blue-500 text-white";
      case "sindical":
        return "bg-red-500 text-white";
      case "feriado":
        return "bg-green-500 text-white";
      default:
        return "bg-gray-500 text-white";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 via-blue-50 to-purple-50 py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-pink-600 mb-4 flex items-center justify-center gap-3">
            <CalendarIcon className="h-10 w-10" />
            Calendario de Efemérides
          </h1>
          <p className="text-xl text-gray-700">
            Fechas clave del transfeminismo sindical
          </p>
        </div>

        {/* Controles */}
        <Card className="mb-8 border-pink-200">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              {/* Navegación de Mes */}
              <div className="flex items-center gap-4">
                <Button variant="outline" size="icon" onClick={mesAnterior}>
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <h2 className="text-2xl font-bold text-pink-600 min-w-[150px] text-center">
                  {MESES[mesSeleccionado - 1]}
                </h2>
                <Button variant="outline" size="icon" onClick={mesSiguiente}>
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>

              {/* Filtro por Tipo */}
              <div className="flex items-center gap-3 w-full md:w-auto">
                <Filter className="h-5 w-5 text-gray-600" />
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
        <div className="grid gap-4">
          {efemeridesFiltered.length === 0 ? (
            <Card>
              <CardContent className="p-8 text-center text-gray-600">
                No hay efemérides para este mes con el filtro seleccionado.
              </CardContent>
            </Card>
          ) : (
            efemeridesFiltered.map((efemeride) => (
              <Card key={efemeride.id} className="border-l-4 border-l-pink-500">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="text-center min-w-[60px]">
                      <div className="text-3xl font-bold text-pink-600">{efemeride.dia}</div>
                      <div className="text-sm text-gray-600">{MESES[efemeride.mes - 1]}</div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="text-xl font-bold">{efemeride.titulo}</h3>
                        <Badge className={getTipoBadgeColor(efemeride.tipo)}>
                          {TIPOS_EFEMERIDES.find(t => t.value === efemeride.tipo)?.label}
                        </Badge>
                      </div>
                      <p className="text-gray-700">{efemeride.descripcion}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))
          )}
        </div>

        {/* Nota */}
        <div className="mt-8 text-center text-sm text-gray-600">
          <p>💡 Esta es una versión simplificada. Conectá un backend para cargar todas las efemérides.</p>
        </div>
      </div>
    </div>
  );
}
