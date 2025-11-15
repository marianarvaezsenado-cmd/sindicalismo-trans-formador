import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  BookOpen,
  MapPin,
  Globe,
  FileText,
  Shield,
  Radio,
  GraduationCap,
  Heart,
  Scale,
  MessageSquare,
  Calendar,
  Newspaper,
  Sparkles,
  Users,
  Briefcase,
  Building2,
} from "lucide-react";

interface Anexo {
  id: string;
  numero?: number;
  titulo: string;
  descripcion: string;
  icon: any;
  color: string;
  link?: string;
  externo?: boolean;
  nuevo?: boolean;
}

const ANEXOS: Anexo[] = [
  {
    id: "anexo-0",
    numero: 0,
    titulo: "Orientación Teórica y Legal",
    descripcion:
      "Contacto con abogades del colectivo, de los gremios, jurisprudencia sobre presentaciones individuales y colectivas, seguimiento de casos. La Ley 27.636 como expresión de Doctrina Justicialista",
    icon: BookOpen,
    color: "text-pink-600",
  },
  {
    id: "anexo-1",
    numero: 1,
    titulo: "Red Provincial",
    descripcion:
      "Contacto con las provincias, organizaciones provinciales, referentas estatales. Cronología Histórica Normativa del Cupo Laboral Trans (2003-2025)",
    icon: MapPin,
    color: "text-blue-600",
  },
  {
    id: "anexo-2",
    numero: 2,
    titulo: "Contactos Internacionales",
    descripcion:
      "Contacto con organismos internacionales. Experiencias Internacionales: Canadá, Brasil, Reino Unido",
    icon: Globe,
    color: "text-green-600",
  },
  {
    id: "anexo-3",
    numero: 3,
    titulo: "Cláusulas para Convenios",
    descripcion:
      "Propuesta informativa sobre cláusulas para los convenios. Modelo de Cláusulas para Convenios Colectivos",
    icon: FileText,
    color: "text-purple-600",
  },
  {
    id: "anexo-4",
    numero: 4,
    titulo: "Protocolo Antidiscriminatorio",
    descripcion:
      "Propuesta de protocolo para intervención antidiscriminatoria. Autodefenderse institucionalmente. Recursos",
    icon: Shield,
    color: "text-red-600",
  },
  {
    id: "anexo-5",
    numero: 5,
    titulo: "Radar Trans",
    descripcion:
      "Sistema de Monitoreo por tus compañeras en todo el país. Indicadores y Métricas para realizar acciones colectivas",
    icon: Radio,
    color: "text-orange-600",
    link: "/radar-trans",
  },
  {
    id: "anexo-6",
    numero: 6,
    titulo: "Formación Digital",
    descripcion: "Programa de Formación Digital Trans-Sindical (pedir respaldo a los gremios)",
    icon: GraduationCap,
    color: "text-indigo-600",
  },
  {
    id: "anexo-7",
    numero: 7,
    titulo: "Salud Integral Trans",
    descripcion: "Acceso a la salud. Contacto con obras sociales. Kit de Negociación en Salud Integral Trans",
    icon: Heart,
    color: "text-pink-600",
  },
  {
    id: "anexo-8",
    numero: 8,
    titulo: "Argumentario Legal para Paritarias",
    descripcion: "Propuesta paritarias legal. Argumentario Legal y Técnico para Paritarias",
    icon: Scale,
    color: "text-blue-600",
  },
  {
    id: "anexo-9",
    numero: 9,
    titulo: "Herramientas de Comunicación",
    descripcion:
      "Este proyecto completo. Herramientas de Comunicación Sindical Trans-Media: Web, App, Bot",
    icon: MessageSquare,
    color: "text-green-600",
  },
  {
    id: "anexo-12",
    numero: 12,
    titulo: "Historia de los Encuentros",
    descripcion:
      "Todo sobre nuestra historia en los Encuentros. Consideraciones Encuentros Pluri de mujeres 35°, 36°, 37°, 38° – Talleres Cupo",
    icon: Calendar,
    color: "text-purple-600",
    link: "/encuentros",
  },
  {
    id: "anexo-13",
    numero: 13,
    titulo: "Noticias y Actualidad",
    descripcion:
      "Noticias sobre todo lo relacionado al mundo sindical, gremial, político relacionado a nuestro laburo. Por qué, para qué y cómo nos afecta la Reforma Laboral",
    icon: Newspaper,
    color: "text-red-600",
  },
];

const NUEVOS_ITEMS: Anexo[] = [
  {
    id: "cristina-libre",
    titulo: "CRISTINA LIBRE",
    descripcion:
      'Cristina Fernández de Kirchner sobre la Ley de Identidad de Género: "Marcamos rumbo en el mundo". La Presidenta entregó los primeros DNI.',
    icon: Sparkles,
    color: "text-pink-600",
    link: "https://www.institutopatria.org.ar/",
    externo: true,
    nuevo: true,
  },
  {
    id: "reparacion-historica",
    titulo: "REPARACIÓN HISTÓRICA",
    descripcion:
      "Futuro Trans y Ley de las Históricas Argentinas de PBA. Reparación histórica para compañeras trans mayores.",
    icon: Users,
    color: "text-purple-600",
    link: "https://www.instagram.com/futurotrans/?hl=es",
    externo: true,
    nuevo: true,
  },
  {
    id: "monotributo",
    titulo: "MONOTRIBUTO",
    descripcion:
      "Información sobre monotributo social y categorías especiales. Enlace a Zaguán TTNB para asesoramiento.",
    icon: Briefcase,
    color: "text-blue-600",
    link: "https://www.instagram.com/zaguanttnb",
    externo: true,
    nuevo: true,
  },
  {
    id: "ammar",
    titulo: "AMMAR - Casa Roja",
    descripcion:
      "Asociación de Mujeres Meretrices de Argentina. Red de contención y apoyo para trabajadoras sexuales.",
    icon: Building2,
    color: "text-red-600",
    link: "https://www.instagram.com/casaroja.ammar",
    externo: true,
    nuevo: true,
  },
  {
    id: "attta-ley-integral",
    titulo: "LEY INTEGRAL TRANS - ATTTA",
    descripcion:
      "ATTTA (Asociación de Travestis, Transexuales y Transgéneros de Argentina). 30 años de lucha por la Ley Integral Trans. Miembro de FALGBT - Federación Argentina LGBT+.",
    icon: Scale,
    color: "text-purple-600",
    link: "https://www.instagram.com/atttarednacional",
    externo: true,
    nuevo: true,
  },
];

export default function Anexos() {
  const handleClick = (anexo: Anexo) => {
    if (anexo.externo && anexo.link) {
      window.open(anexo.link, "_blank");
    } else if (anexo.link) {
      window.location.href = anexo.link;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-secondary/10 to-accent/10 py-8">
      <div className="container">
        {/* Header */}
        <Card className="mb-6 border-primary/50 shadow-xl">
          <CardHeader className="bg-gradient-to-r from-primary/20 to-secondary/20">
            <CardTitle className="text-3xl text-center">Herramientas y Recursos</CardTitle>
            <CardDescription className="text-center text-lg">
              Anexos del Proyecto de Coordinación Nacional del Sindicalismo Trans-Formador
            </CardDescription>
          </CardHeader>
        </Card>

        {/* Nuevos Items */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-primary flex items-center gap-2">
            <Sparkles className="h-6 w-6" />
            Nuevos Recursos
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {NUEVOS_ITEMS.map((item) => {
              const Icon = item.icon;
              return (
                <Card
                  key={item.id}
                  className="border-primary hover:shadow-lg transition-shadow cursor-pointer"
                  onClick={() => handleClick(item)}
                >
                  <CardHeader className="bg-primary/10">
                    <div className="flex items-start justify-between">
                      <CardTitle className="flex items-center gap-2 text-lg">
                        <Icon className={`h-6 w-6 ${item.color}`} />
                        {item.titulo}
                      </CardTitle>
                      {item.nuevo && (
                        <Badge variant="secondary" className="text-xs">
                          NUEVO
                        </Badge>
                      )}
                    </div>
                  </CardHeader>
                  <CardContent className="pt-4">
                    <p className="text-sm text-muted-foreground mb-4">{item.descripcion}</p>
                    <Button
                      className="w-full"
                      variant={item.externo ? "outline" : "default"}
                      onClick={(e) => {
                        e.stopPropagation();
                        handleClick(item);
                      }}
                    >
                      {item.externo ? "Visitar sitio" : "Ver más"}
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Anexos */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-primary flex items-center gap-2">
            <BookOpen className="h-6 w-6" />
            Anexos del Trabajo Integrador Final
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {ANEXOS.map((anexo) => {
              const Icon = anexo.icon;
              return (
                <Card
                  key={anexo.id}
                  className="border-secondary hover:shadow-lg transition-shadow cursor-pointer"
                  onClick={() => anexo.link && handleClick(anexo)}
                >
                  <CardHeader className="bg-secondary/10">
                    <CardTitle className="flex items-center gap-2 text-lg">
                      <Icon className={`h-6 w-6 ${anexo.color}`} />
                      {anexo.numero !== undefined && `Anexo ${anexo.numero}: `}
                      {anexo.titulo}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-4">
                    <p className="text-sm text-muted-foreground mb-4">{anexo.descripcion}</p>
                    <Button
                      className="w-full"
                      variant="secondary"
                      disabled={!anexo.link}
                      onClick={(e) => {
                        e.stopPropagation();
                        anexo.link && handleClick(anexo);
                      }}
                    >
                      {anexo.link ? "Ver más" : "Próximamente"}
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Footer */}
        <Card className="mt-8 border-primary/30">
          <CardContent className="p-4">
            <p className="text-sm text-muted-foreground text-center">
              Estos anexos son parte del Trabajo Integrador Final de la Diplomatura en Estudios del
              Trabajo en el Sector Público (UNSAM) y constituyen herramientas prácticas para la
              implementación del cupo laboral trans y la organización sindical.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
