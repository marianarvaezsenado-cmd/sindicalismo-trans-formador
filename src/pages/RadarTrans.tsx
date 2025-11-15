import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { PROVINCIAS } from "@/const";
import { trpc } from "@/lib/trpc";
import { toast } from "sonner";
import { AlertTriangle, MapPin, Shield, Users, Eye, FileText } from "lucide-react";

const TIPOS_INCIDENTE = [
  { value: "despido", label: "Despido", icon: AlertTriangle, color: "destructive" },
  { value: "discriminacion", label: "Discriminación", icon: Shield, color: "destructive" },
  { value: "violencia_institucional", label: "Violencia Institucional", icon: AlertTriangle, color: "destructive" },
  { value: "acoso_laboral", label: "Acoso Laboral", icon: Users, color: "destructive" },
  { value: "falta_acceso_salud", label: "Falta de Acceso a Salud", icon: Shield, color: "destructive" },
  { value: "otro", label: "Otro", icon: FileText, color: "muted" },
];

export default function RadarTrans() {
  const [vistaActual, setVistaActual] = useState<"formulario" | "mapa">("formulario");
  const [formData, setFormData] = useState({
    tipoIncidente: "",
    provincia: "",
    ciudad: "",
    organismo: "",
    descripcion: "",
    fechaIncidente: "",
    nombreReportante: "",
    emailContacto: "",
    telefonoContacto: "",
    esAnonimo: "no",
    necesitaAcompanamiento: "si",
  });

  const reporteMutation = trpc.radarTrans.create.useMutation({
    onSuccess: () => {
      toast.success("Reporte enviado exitosamente. La red ha sido alertada.");
      setFormData({
        tipoIncidente: "",
        provincia: "",
        ciudad: "",
        organismo: "",
        descripcion: "",
        fechaIncidente: "",
        nombreReportante: "",
        emailContacto: "",
        telefonoContacto: "",
        esAnonimo: "no",
        necesitaAcompanamiento: "si",
      });
    },
    onError: (error: any) => {
      toast.error(`Error al enviar reporte: ${error.message}`);
    },
  });

  const { data: reportes, isLoading } = trpc.radarTrans.list.useQuery();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    reporteMutation.mutate({
      tipo: formData.tipoIncidente as "Despido" | "Discriminación" | "Violencia institucional" | "Acoso laboral" | "Otro",
      provincia: formData.provincia,
      descripcion: formData.descripcion,
    });
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const getIncidenteInfo = (tipo: string) => {
    return TIPOS_INCIDENTE.find((t) => t.value === tipo) || TIPOS_INCIDENTE[TIPOS_INCIDENTE.length - 1];
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-destructive/5 to-destructive/10 py-12">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-destructive mb-4 flex items-center justify-center gap-3">
            <AlertTriangle className="h-10 w-10" />
            Radar Trans
          </h1>
          <p className="text-xl text-muted-foreground">
            Sistema de Monitoreo y Alerta Colectiva
          </p>
          <p className="text-md text-foreground mt-2 max-w-3xl mx-auto">
            Reportá incidentes de violencia institucional, despidos y discriminación. La red se activa para acompañarte y visibilizar lo que está pasando.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-8">
          <Button
            variant={vistaActual === "formulario" ? "default" : "outline"}
            onClick={() => setVistaActual("formulario")}
            className="flex items-center gap-2"
          >
            <FileText className="h-4 w-4" />
            Reportar Incidente
          </Button>
          <Button
            variant={vistaActual === "mapa" ? "default" : "outline"}
            onClick={() => setVistaActual("mapa")}
            className="flex items-center gap-2"
          >
            <Eye className="h-4 w-4" />
            Ver Reportes ({reportes?.length || 0})
          </Button>
        </div>

        {/* Vista Formulario */}
        {vistaActual === "formulario" && (
          <Card className="max-w-4xl mx-auto border-destructive/50 shadow-xl">
            <CardHeader className="bg-gradient-to-r from-destructive/20 to-destructive/10">
              <CardTitle className="text-3xl text-center flex items-center justify-center gap-2">
                <AlertTriangle className="h-8 w-8 text-destructive" />
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

                <div className="grid gap-6 md:grid-cols-2">
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

                  <div className="space-y-2">
                    <Label htmlFor="ciudad">Ciudad</Label>
                    <Input
                      id="ciudad"
                      value={formData.ciudad}
                      onChange={(e) => handleChange("ciudad", e.target.value)}
                      placeholder="Tu ciudad"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="organismo">Organismo</Label>
                    <Input
                      id="organismo"
                      value={formData.organismo}
                      onChange={(e) => handleChange("organismo", e.target.value)}
                      placeholder="Ej: Senado de la Nación"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="fechaIncidente">Fecha del Incidente</Label>
                    <Input
                      id="fechaIncidente"
                      type="date"
                      value={formData.fechaIncidente}
                      onChange={(e) => handleChange("fechaIncidente", e.target.value)}
                    />
                  </div>
                </div>

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

                {/* Datos de Contacto */}
                <div className="border-t pt-6">
                  <h3 className="text-lg font-semibold mb-4">Datos de Contacto (Opcional)</h3>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="esAnonimo">¿Querés reportar de forma anónima?</Label>
                      <Select value={formData.esAnonimo} onValueChange={(value) => handleChange("esAnonimo", value)}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="si">Sí, quiero ser anónime</SelectItem>
                          <SelectItem value="no">No, pueden contactarme</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {formData.esAnonimo === "no" && (
                      <div className="grid gap-4 md:grid-cols-3">
                        <div className="space-y-2">
                          <Label htmlFor="nombreReportante">Tu Nombre</Label>
                          <Input
                            id="nombreReportante"
                            value={formData.nombreReportante}
                            onChange={(e) => handleChange("nombreReportante", e.target.value)}
                            placeholder="Nombre"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="emailContacto">Email</Label>
                          <Input
                            id="emailContacto"
                            type="email"
                            value={formData.emailContacto}
                            onChange={(e) => handleChange("emailContacto", e.target.value)}
                            placeholder="tu@email.com"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="telefonoContacto">Teléfono</Label>
                          <Input
                            id="telefonoContacto"
                            type="tel"
                            value={formData.telefonoContacto}
                            onChange={(e) => handleChange("telefonoContacto", e.target.value)}
                            placeholder="+54 11 XXXX-XXXX"
                          />
                        </div>
                      </div>
                    )}

                    <div className="space-y-2">
                      <Label htmlFor="necesitaAcompanamiento">¿Necesitás acompañamiento de la red?</Label>
                      <Select
                        value={formData.necesitaAcompanamiento}
                        onValueChange={(value) => handleChange("necesitaAcompanamiento", value)}
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="si">Sí, necesito acompañamiento</SelectItem>
                          <SelectItem value="no">No, solo quiero visibilizar</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>

                <Button type="submit" size="lg" variant="destructive" className="w-full text-lg" disabled={reporteMutation.isPending}>
                  {reporteMutation.isPending ? "Enviando..." : "Enviar Reporte y Activar la Red"}
                </Button>
              </form>
            </CardContent>
          </Card>
        )}

        {/* Vista Mapa/Reportes */}
        {vistaActual === "mapa" && (
          <div className="space-y-6">
            {/* Estadísticas */}
            <div className="grid gap-6 md:grid-cols-4">
              <Card className="border-destructive/50">
                <CardContent className="p-6 text-center">
                  <AlertTriangle className="h-8 w-8 text-destructive mx-auto mb-2" />
                  <p className="text-3xl font-bold text-destructive">{reportes?.length || 0}</p>
                  <p className="text-sm text-muted-foreground">Reportes Totales</p>
                </CardContent>
              </Card>
              <Card className="border-destructive/50">
                <CardContent className="p-6 text-center">
                  <Users className="h-8 w-8 text-primary mx-auto mb-2" />
                  <p className="text-3xl font-bold text-primary">
                    {reportes?.filter((r: any) => r.necesitaAcompanamiento === "si").length || 0}
                  </p>
                  <p className="text-sm text-muted-foreground">Necesitan Acompañamiento</p>
                </CardContent>
              </Card>
              <Card className="border-destructive/50">
                <CardContent className="p-6 text-center">
                  <MapPin className="h-8 w-8 text-secondary mx-auto mb-2" />
                  <p className="text-3xl font-bold text-secondary">
                    {new Set(reportes?.map((r: any) => r.provincia)).size || 0}
                  </p>
                  <p className="text-sm text-muted-foreground">Provincias Afectadas</p>
                </CardContent>
              </Card>
              <Card className="border-destructive/50">
                <CardContent className="p-6 text-center">
                  <Shield className="h-8 w-8 text-accent mx-auto mb-2" />
                  <p className="text-3xl font-bold text-accent">
                    {reportes?.filter((r: any) => r.estadoSeguimiento === "resuelto").length || 0}
                  </p>
                  <p className="text-sm text-muted-foreground">Casos Resueltos</p>
                </CardContent>
              </Card>
            </div>

            {/* Lista de Reportes */}
            {isLoading ? (
              <div className="text-center py-12">
                <p className="text-muted-foreground">Cargando reportes...</p>
              </div>
            ) : reportes && reportes.length > 0 ? (
              <div className="grid gap-6">
                {reportes.map((reporte: any) => {
                  const incidenteInfo = getIncidenteInfo(reporte.tipoIncidente);
                  const Icon = incidenteInfo.icon;

                  return (
                    <Card key={reporte.id} className="border-destructive/30 hover:shadow-lg transition-shadow">
                      <CardHeader className="bg-gradient-to-r from-destructive/10 to-destructive/5">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                              <Icon className="h-6 w-6 text-destructive" />
                              <CardTitle className="text-xl">{incidenteInfo.label}</CardTitle>
                              <Badge variant={incidenteInfo.color as any}>{reporte.estadoSeguimiento || "pendiente"}</Badge>
                            </div>
                            <CardDescription className="flex items-center gap-2">
                              <MapPin className="h-4 w-4" />
                              {reporte.ciudad}, {reporte.provincia}
                              {reporte.organismo && ` • ${reporte.organismo}`}
                            </CardDescription>
                          </div>
                          {reporte.necesitaAcompanamiento === "si" && (
                            <Badge variant="outline" className="border-primary text-primary">
                              Necesita Acompañamiento
                            </Badge>
                          )}
                        </div>
                      </CardHeader>
                      <CardContent className="pt-4">
                        <p className="text-sm text-foreground leading-relaxed mb-3">{reporte.descripcion}</p>
                        <div className="flex items-center justify-between text-xs text-muted-foreground">
                          <span>
                            Reportado: {new Date(reporte.createdAt).toLocaleDateString("es-AR")}
                          </span>
                          {reporte.fechaIncidente && (
                            <span>Incidente: {new Date(reporte.fechaIncidente).toLocaleDateString("es-AR")}</span>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            ) : (
              <Card className="border-muted">
                <CardContent className="py-12 text-center">
                  <p className="text-muted-foreground text-lg">No hay reportes registrados aún.</p>
                </CardContent>
              </Card>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
