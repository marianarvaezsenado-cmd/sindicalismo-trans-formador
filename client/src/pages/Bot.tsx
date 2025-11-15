import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { trpc } from "@/lib/trpc";
import { toast } from "sonner";
import { MessageCircle, Send, Sparkles } from "lucide-react";

interface Mensaje {
  id: string;
  texto: string;
  esUsuario: boolean;
  personalidad?: "diana" | "lohana";
  nombre?: string;
  timestamp: Date;
}

export default function Bot() {
  const [mensajes, setMensajes] = useState<Mensaje[]>([
    {
      id: "bienvenida",
      texto: "Hola compañera, soy Diana Sacayán. Hoy te hablo yo, pero también está Lohana por acá. Nos vamos turnando para acompañarte. ¿En qué te puedo ayudar?",
      esUsuario: false,
      personalidad: "diana",
      nombre: "Diana Sacayán",
      timestamp: new Date(),
    },
  ]);
  const [inputMensaje, setInputMensaje] = useState("");
  const mensajesEndRef = useRef<HTMLDivElement>(null);

  const enviarMensajeMutation = trpc.bot.enviarMensaje.useMutation({
    onSuccess: (data) => {
      setMensajes((prev) => [
        ...prev,
        {
          id: Date.now().toString(),
          texto: data.respuesta,
          esUsuario: false,
          personalidad: data.personalidad,
          nombre: data.nombre,
          timestamp: new Date(),
        },
      ]);
    },
    onError: (error: any) => {
      toast.error(`Error: ${error.message}`);
    },
  });

  const handleEnviar = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputMensaje.trim()) return;

    // Agregar mensaje del usuario
    const nuevoMensaje: Mensaje = {
      id: Date.now().toString(),
      texto: inputMensaje,
      esUsuario: true,
      timestamp: new Date(),
    };

    setMensajes((prev) => [...prev, nuevoMensaje]);
    setInputMensaje("");

    // Enviar al bot
    enviarMensajeMutation.mutate({
      mensaje: inputMensaje,
    });
  };

  // Scroll automático al último mensaje
  useEffect(() => {
    mensajesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [mensajes]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-secondary/10 to-accent/10 py-8">
      <div className="container max-w-4xl">
        {/* Header */}
        <Card className="mb-6 border-primary/50 shadow-xl">
          <CardHeader className="bg-gradient-to-r from-primary/20 to-secondary/20">
            <CardTitle className="text-3xl text-center flex items-center justify-center gap-2">
              <MessageCircle className="h-8 w-8 text-primary" />
              Hablás con Diana o Lohana
            </CardTitle>
            <CardDescription className="text-center text-lg">
              Bot conversacional con las personalidades de Diana Sacayán y Lohana Berkins
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="bg-accent/20 p-4 rounded-lg border-2 border-accent">
              <p className="text-sm text-muted-foreground">
                <Sparkles className="inline h-4 w-4 mr-2 text-primary" />
                Diana y Lohana se turnan para responderte según el tema de conversación. 
                Podés preguntarles sobre cupo laboral trans, sindicatos, identidad, derechos, 
                y cómo organizarte colectivamente.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Chat */}
        <Card className="border-primary/50 shadow-xl">
          <CardContent className="p-6">
            {/* Mensajes */}
            <div className="space-y-4 mb-4 max-h-[500px] overflow-y-auto">
              {mensajes.map((mensaje) => (
                <div
                  key={mensaje.id}
                  className={`flex ${mensaje.esUsuario ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[80%] rounded-lg p-4 ${
                      mensaje.esUsuario
                        ? "bg-primary text-primary-foreground"
                        : mensaje.personalidad === "diana"
                        ? "bg-secondary/20 border-2 border-secondary"
                        : "bg-accent/20 border-2 border-accent"
                    }`}
                  >
                    {!mensaje.esUsuario && (
                      <div className="flex items-center gap-2 mb-2">
                        <div
                          className={`w-2 h-2 rounded-full ${
                            mensaje.personalidad === "diana" ? "bg-secondary" : "bg-accent"
                          }`}
                        />
                        <span className="text-xs font-semibold text-muted-foreground">
                          {mensaje.nombre}
                        </span>
                      </div>
                    )}
                    <p className="text-sm whitespace-pre-wrap">{mensaje.texto}</p>
                    <span className="text-xs text-muted-foreground mt-2 block">
                      {mensaje.timestamp.toLocaleTimeString("es-AR", {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </span>
                  </div>
                </div>
              ))}
              <div ref={mensajesEndRef} />
            </div>

            {/* Input */}
            <form onSubmit={handleEnviar} className="flex gap-2">
              <Input
                value={inputMensaje}
                onChange={(e) => setInputMensaje(e.target.value)}
                placeholder="Escribí tu mensaje..."
                disabled={enviarMensajeMutation.isPending}
                className="flex-1"
              />
              <Button
                type="submit"
                disabled={enviarMensajeMutation.isPending || !inputMensaje.trim()}
                size="icon"
              >
                {enviarMensajeMutation.isPending ? (
                  <div className="animate-spin">⏳</div>
                ) : (
                  <Send className="h-4 w-4" />
                )}
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Info adicional */}
        <Card className="mt-6 border-primary/30">
          <CardContent className="p-4">
            <p className="text-xs text-muted-foreground text-center">
              Este bot usa inteligencia artificial para emular las personalidades de Diana Sacayán 
              y Lohana Berkins basándose en sus discursos, entrevistas y escritos reales. 
              No reemplaza la organización colectiva ni el acompañamiento humano.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
