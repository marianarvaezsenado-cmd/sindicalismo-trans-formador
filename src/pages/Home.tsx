import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { PROYECTO_INFO, LEYENDA_QR, PROVINCIAS, ANEXOS } from "@/const";
import { trpc } from "@/lib/trpc";
import { toast } from "sonner";
import { QrCode, Users, Calendar, AlertTriangle, BookOpen, MapPin, Heart, MessageCircle } from "lucide-react";
import QRCode from "react-qr-code";

export default function Home() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    provincia: "",
    ciudad: "",
    organismo: "",
    sindicato: "",
    situacionLaboral: "",
    comentarios: "",
  });

  const registroMutation = trpc.registro.create.useMutation({
    onSuccess: () => {
      toast.success("¡Registro exitoso! Gracias por sumarte a la red.");
      setFormData({
        nombre: "",
        email: "",
        telefono: "",
        provincia: "",
        ciudad: "",
        organismo: "",
        sindicato: "",
        situacionLaboral: "",
        comentarios: "",
      });
    },
    onError: (error: any) => {
      toast.error(`Error al registrarse: ${error.message}`);
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    registroMutation.mutate(formData);
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-secondary/10 to-accent/10">
      {/* Hero Section con QR y Leyenda */}
      <section className="container py-12 md:py-20">
        <div className="grid gap-8 lg:grid-cols-2 items-center">
          {/* Columna Izquierda: Información y Leyenda */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold text-primary leading-tight">
                Coordinación Federal del Sindicalismo Trans-Formador
              </h1>
              <p className="text-xl md:text-2xl font-semibold text-secondary-foreground">
                El futuro del sindicalismo será revolucionario o no será
              </p>
              <div className="bg-accent/20 p-4 rounded-lg border-2 border-accent">
                <p className="text-lg font-medium text-foreground">
                  {PROYECTO_INFO.encuentro.nombre}
                </p>
                <p className="text-md text-muted-foreground mt-2">
                  📍 {PROYECTO_INFO.encuentro.ciudad} | 📅 {PROYECTO_INFO.encuentro.fechas}
                </p>
              </div>
            </div>

            {/* Leyenda Explicativa */}
            <Card className="border-primary/50 shadow-lg">
              <CardHeader className="bg-primary/10">
                <CardTitle className="flex items-center gap-2 text-primary">
                  <Heart className="h-6 w-6" />
                  ¿Por qué es importante participar?
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6 space-y-4">
                <div className="prose prose-sm max-w-none">
                  <p className="text-foreground leading-relaxed">
                    Ante el desamparo de Estado, eliminación del ministerio del MMYD y INADI, de un poder judicial al servicio de la usura y los gobiernos de facto...
                  </p>
                  <p className="text-xl font-bold text-primary my-4">
                    EL ESTADO AHORA SOMOS NOSOTRES
                  </p>
                  <p className="text-lg font-bold text-primary my-3">
                    Somos les que quedamos quienes nos toca la organización
                  </p>
                  <p className="text-foreground leading-relaxed">
                    Es vital y cuestión de defensa propia involucrarnos en los gremios: ese es un lugar que nos pertenece por naturaleza trabajadora estatal hacerlo de nuestra resistencia, formación, construcción efectiva, real es nuestra agencia de cara al 2027.
                  </p>
                  <p className="text-foreground leading-relaxed italic mt-3">
                    Recordar. Reacordar. Recuperar la dimensión espiritual de la raíz de esta Argentina de unir, discutir, debatir para encontrar la síntesis.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Columna Derecha: QR Code con mapa de fondo y logos */}
          <div className="flex flex-col items-center space-y-6">
            {/* Logo Zaguán arriba */}
            <div className="w-full max-w-md flex justify-center">
              <img 
                src="/images/logo-zaguan.jpeg" 
                alt="Zaguán Transindical" 
                className="h-24 object-contain"
              />
            </div>

            {/* QR Code con mapa de fondo */}
            <Card className="w-full max-w-md border-primary shadow-2xl relative overflow-hidden">
              {/* Mapa bicontinental como fondo */}
              <div 
                className="absolute inset-0 opacity-20 bg-cover bg-center"
                style={{ backgroundImage: 'url(/images/mapa-bicontinental.jpg)' }}
              />
              
              <CardHeader className="bg-gradient-to-r from-primary to-secondary text-center relative z-10">
                <CardTitle className="text-2xl text-white flex items-center justify-center gap-2">
                  <QrCode className="h-8 w-8" />
                  Escaneá y Registrate
                </CardTitle>
                <CardDescription className="text-white/90 text-lg">
                  Unite a la red federal
                </CardDescription>
              </CardHeader>
              <CardContent className="p-8 bg-white/95 backdrop-blur-sm relative z-10">
                <div className="flex justify-center">
                  <QRCode
                    value={window.location.origin + "/#registro"}
                    size={256}
                    level="H"
                    fgColor="#FF69B4"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Logo Congreso Trans abajo */}
            <div className="w-full max-w-md flex justify-center">
              <img 
                src="/images/congreso-trans.jpg" 
                alt="Congreso Trans" 
                className="h-20 object-contain"
              />
            </div>

            {/* Contador de Visitas */}
            <Card className="w-full max-w-md border-accent">
              <CardContent className="p-4 text-center">
                <p className="text-sm text-muted-foreground">Visitas a la plataforma</p>
                <p className="text-3xl font-bold text-primary">1,234</p>
                <p className="text-xs text-muted-foreground mt-1">Compañeras conectadas</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Formulario de Registro */}
      <section id="registro" className="container py-12">
        <Card className="max-w-4xl mx-auto border-primary/50 shadow-xl">
          <CardHeader className="bg-gradient-to-r from-primary/20 to-secondary/20">
            <CardTitle className="text-3xl text-center flex items-center justify-center gap-2">
              <Users className="h-8 w-8 text-primary" />
              Formulario de Registro
            </CardTitle>
            <CardDescription className="text-center text-lg">
              Completá tus datos para formar parte de la red federal de sindicalismo trans-formador
            </CardDescription>
          </CardHeader>
          <CardContent className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="nombre">Nombre Completo *</Label>
                  <Input
                    id="nombre"
                    value={formData.nombre}
                    onChange={(e) => handleChange("nombre", e.target.value)}
                    required
                    placeholder="Tu nombre"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    required
                    placeholder="tu@email.com"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="telefono">Teléfono</Label>
                  <Input
                    id="telefono"
                    type="tel"
                    value={formData.telefono}
                    onChange={(e) => handleChange("telefono", e.target.value)}
                    placeholder="+54 11 XXXX-XXXX"
                  />
                </div>

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
                  <Label htmlFor="organismo">Organismo donde trabajás</Label>
                  <Input
                    id="organismo"
                    value={formData.organismo}
                    onChange={(e) => handleChange("organismo", e.target.value)}
                    placeholder="Ej: Ministerio, Secretaría, etc."
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="sindicato">Sindicato</Label>
                  <Input
                    id="sindicato"
                    value={formData.sindicato}
                    onChange={(e) => handleChange("sindicato", e.target.value)}
                    placeholder="Ej: UPCN, ATE, etc."
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="situacionLaboral">Situación Laboral</Label>
                  <Select value={formData.situacionLaboral} onValueChange={(value) => handleChange("situacionLaboral", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Seleccioná tu situación" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="planta_permanente">Planta Permanente</SelectItem>
                      <SelectItem value="planta_transitoria">Planta Transitoria</SelectItem>
                      <SelectItem value="contratade">Contratade</SelectItem>
                      <SelectItem value="buscando_empleo">Buscando Empleo</SelectItem>
                      <SelectItem value="otra">Otra</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="comentarios">Comentarios (opcional)</Label>
                <Textarea
                  id="comentarios"
                  value={formData.comentarios}
                  onChange={(e) => handleChange("comentarios", e.target.value)}
                  placeholder="Contanos tu experiencia, expectativas o consultas..."
                  rows={4}
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-white text-lg py-6"
                disabled={registroMutation.isPending}
              >
                {registroMutation.isPending ? "Registrando..." : "Registrarme en la Red"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </section>

      {/* Sección de Anexos */}
      <section className="container py-12">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Herramientas y Recursos
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Accedé a todos los recursos, materiales y herramientas para fortalecer tu participación sindical
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {ANEXOS.map((anexo) => (
            <Card key={anexo.numero} className="hover:shadow-lg transition-shadow border-primary/30">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-primary" />
                  {anexo.titulo}
                </CardTitle>
                <CardDescription className="text-sm">
                  {anexo.descripcion}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() => {
                    if (anexo.numero === 5) window.location.href = "/#/radar-trans";
                    else if (anexo.numero === 12) window.location.href = "/#/encuentros";
                    else toast.info("Próximamente disponible");
                  }}
                >
                  Ver más
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Button
            size="lg"
            onClick={() => (window.location.href = "/#/anexos")}
            className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white"
          >
            Ver Todos los Recursos
          </Button>
        </div>
      </section>

      {/* Accesos Rápidos */}
      <section className="container py-12">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Accesos Rápidos
          </h2>
          <p className="text-lg text-muted-foreground">
            Herramientas principales de la plataforma
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {/* Bot Diana/Lohana */}
          <Card className="hover:shadow-xl transition-all border-2 border-primary/50 bg-gradient-to-br from-primary/5 to-secondary/5">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-primary">
                <MessageCircle className="h-6 w-6" />
                Hablás con Diana o Lohana
              </CardTitle>
              <CardDescription>
                Bot conversacional con las personalidades de Diana Sacayán y Lohana Berkins
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button
                className="w-full bg-primary hover:bg-primary/90"
                onClick={() => (window.location.href = "/#/bot")}
              >
                Conversar con Diana y Lohana
              </Button>
            </CardContent>
          </Card>

          {/* Calendario */}
          <Card className="hover:shadow-xl transition-all border-2 border-accent/50 bg-gradient-to-br from-accent/5 to-yellow-100/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-accent">
                <Calendar className="h-6 w-6" />
                Calendario de Efemérides
              </CardTitle>
              <CardDescription>
                Consultá las fechas clave del transfeminismo sindical
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button
                className="w-full bg-accent hover:bg-accent/90"
                onClick={() => (window.location.href = "/#/calendario")}
              >
                Ver Calendario
              </Button>
            </CardContent>
          </Card>

          {/* Radar Trans */}
          <Card className="hover:shadow-xl transition-all border-2 border-red-500/50 bg-gradient-to-br from-red-50 to-red-100/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-red-600">
                <AlertTriangle className="h-6 w-6" />
                Radar Trans
              </CardTitle>
              <CardDescription>
                Reportá violencia institucional y despidos
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button
                className="w-full bg-red-600 hover:bg-red-700 text-white"
                onClick={() => (window.location.href = "/#/radar-trans")}
              >
                Reportar Incidente
              </Button>
            </CardContent>
          </Card>

          {/* Mapa */}
          <Card className="hover:shadow-xl transition-all border-2 border-secondary/50 bg-gradient-to-br from-secondary/5 to-blue-100/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-secondary">
                <MapPin className="h-6 w-6" />
                Red en el Mapa
              </CardTitle>
              <CardDescription>
                Encontrá compañeras y organizaciones cerca tuyo
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button
                className="w-full bg-secondary hover:bg-secondary/90"
                onClick={() => (window.location.href = "/#/mapa")}
              >
                Ver Mapa
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary/10 py-8 mt-12">
        <div className="container text-center space-y-4">
          <p className="text-lg font-semibold text-primary">
            Coordinación Federal del Sindicalismo Trans-Formador
          </p>
          <p className="text-sm text-muted-foreground">
            En memoria de Diana Sacayán y Lohana Berkins
          </p>
          <p className="text-sm text-muted-foreground">
            El futuro del sindicalismo será revolucionario o no será
          </p>
        </div>
      </footer>
    </div>
  );
}
