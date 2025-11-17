import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { AlertTriangle, FileText } from "lucide-react";

const PROVINCIAS = [
  "Buenos Aires", "CABA", "Catamarca", "Chaco", "Chubut", "Córdoba",
  "Corrientes", "Entre Ríos", "Formosa", "Jujuy", "La Pampa", "La Rioja",
  "Mendoza", "Misiones", "Neuquén", "Río Negro", "Salta", "San Juan",
  "San Luis", "Santa Cruz", "Santa Fe", "Santiago del Estero",
  "Tierra del Fuego", "Tucumán"
];

const TIPOS_INCIDENTE = [
  { value: "despido", label: "Despido" },
  { value: "discriminacion", label: "Discriminación" },
  { value: "violencia_institucional", label: "Violencia Institucional" },
  { value: "acoso_laboral", label: "Acoso Laboral" },
  { value: "falta_acceso_salud", label: "Falta de Acceso a Salud" },
  { value: "otro", label: "Otro" },
];

export default function RadarTrans() {
  const [formData, setFormData] = useState({
    tipoIncidente: "",
    provincia: "",
    descripcion: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Reporte enviado (versión demo). Conectá un backend para guardar los reportes.");
    setFormData({
      tipoIncidente: "",
      provincia: "",
      descripcion: "",
    });
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 via-orange-50 to-yellow-50 py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-red-600 mb-4 flex items-center justify-center gap-3">
            <AlertTriangle className="h-10 w-10" />
            Radar Trans
          </h1>
          <p className="text-xl text-gray-700">
            Sistema de Monitoreo y Alerta Colectiva
          </p>
          <p className="text-md text-gray-600 mt-2 max-w-3xl mx-auto">
            Reportá incidentes de violencia institucional, despidos y discriminación. La red se activa para acompañarte y visibilizar lo que está pasando.
          </p>
        </div>

        {/* Formulario */}
        <Card className="max-w-4xl mx-auto border-red-200 shadow-xl">
          <CardHeader className="bg-gradient-to-r from-red-100 to-orange-100">
            <CardTitle className="text-3xl text-center flex items-center justify-center gap-2">
              <FileText className="h-8 w-8 text-red-600" />
              Formulario de Reporte
            </CardTitle>
            <CardDescription className="text-center text-lg">
              Tu reporte es confidencial y ayuda a visibilizar la violencia institucional
            </CardDescription>
          </CardHeader>
          <CardContent className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Tipo de Incidente */}
              <div className="space-y-2">
                <Label htmlFor="tipoIncidente">Tipo de Incidente *</Label>
                <Select value={formData.tipoIncidente} onValueChange={(value) => handleChange("tipoIncidente", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Seleccioná el tipo de incidente" />
                  </SelectTrigger>
                  <SelectContent>
                    {TIPOS_INCIDENTE.map((tipo) => (
                      <SelectItem key={tipo.value} value={tipo.value}>
                        {tipo.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Provincia */}
              <div className="space-y-2">
                <Label htmlFor="provincia">Provincia *</Label>
                <Select value={formData.provincia} onValueChange={(value) => handleChange("provincia", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Seleccioná tu provincia" />
                  </SelectTrigger>
                  <SelectContent>
                    {PROVINCIAS.map((prov) => (
                      <SelectItem key={prov} value={prov}>
                        {prov}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Descripción */}
              <div className="space-y-2">
                <Label htmlFor="descripcion">Descripción del Incidente *</Label>
                <Textarea
                  id="descripcion"
                  value={formData.descripcion}
                  onChange={(e) => handleChange("descripcion", e.target.value)}
                  placeholder="Contanos qué pasó, con el mayor detalle posible..."
                  rows={6}
                  required
                />
              </div>

              {/* Botón */}
              <Button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-white">
                Enviar Reporte
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Nota */}
        <div className="mt-8 text-center text-sm text-gray-600">
          <p>💡 Esta es una versión demo. Conectá un backend para guardar los reportes reales.</p>
        </div>
      </div>
    </div>
  );
}
