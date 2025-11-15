import { useState } from "react";
import { Link } from "wouter";
import { QRCodeSVG } from "qrcode.react";
import { Calendar, MapPin, AlertTriangle, MessageCircle, ExternalLink } from "lucide-react";
import { useMockRegistro } from "../hooks/useMockData";

export default function Home() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    organismo: "",
    sindicato: "",
    provincia: "",
  });

  const { mutate, isLoading } = useMockRegistro();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutate(formData);
    alert("¡Gracias por registrarte! (Esta es una demo, los datos no se guardan)");
    setFormData({
      nombre: "",
      email: "",
      telefono: "",
      organismo: "",
      sindicato: "",
      provincia: "",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-blue-50 to-green-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-pink-500 via-blue-400 to-green-400 text-white py-8 shadow-lg">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-2">
            Coordinación Federal del Sindicalismo Trans-Formador
          </h1>
          <p className="text-xl md:text-2xl text-center font-semibold">
            El futuro del sindicalismo será revolucionario o no será
          </p>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Sección principal con QR y logos */}
        <div className="bg-white rounded-lg shadow-xl p-8 mb-8">
          <div className="flex flex-col items-center">
            {/* Logo Zaguán */}
            <div className="mb-6">
              <img 
                src="/zaguan-logo.jpeg" 
                alt="Zaguán Transindical" 
                className="h-24 object-contain"
              />
            </div>

            {/* QR Code con mapa de fondo */}
            <div className="relative mb-6">
              <div className="absolute inset-0 opacity-20">
                <img 
                  src="/argentina-bicontinental.jpg" 
                  alt="Mapa Argentina Bicontinental" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="relative bg-white p-4 rounded-lg shadow-lg">
                <QRCodeSVG
                  value="https://sindicalismo-trans-formador.vercel.app"
                  size={200}
                  level="H"
                  fgColor="#EC4899"
                />
              </div>
            </div>

            {/* Logo Congreso Trans */}
            <div className="mb-6">
              <img 
                src="/congreso-trans.jpg" 
                alt="Congreso Trans" 
                className="h-24 object-contain"
              />
            </div>

            <p className="text-center text-lg font-semibold text-gray-700 mb-4">
              Escaneá y Registrate
            </p>
          </div>

          {/* Información del Encuentro */}
          <div className="bg-gradient-to-r from-pink-100 to-blue-100 rounded-lg p-6 mb-6">
            <h2 className="text-2xl font-bold text-center mb-2">
              38° Encuentro Plurinacional de Mujeres, Lesbianas, Trans, Travestis, Bisexuales, Intersexuales y No Binaries
            </h2>
            <p className="text-center text-lg">
              📍 Corrientes, Argentina | 📅 22, 23 y 24 de Noviembre de 2025
            </p>
          </div>

          {/* Mensaje político */}
          <div className="bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-lg p-6 mb-6">
            <h3 className="text-2xl font-bold text-center mb-4">
              EL ESTADO AHORA SOMOS NOSOTRES
            </h3>
            <p className="text-center text-lg mb-2">
              Somos les que quedamos quienes nos toca la organización
            </p>
            <p className="text-center italic">
              "Es vital y cuestión de defensa propia involucrarnos en los gremios, 
              porque el sindicalismo es el lugar de resistencia efectiva y real."
            </p>
          </div>

          {/* Contador de visitas */}
          <div className="text-center mb-6">
            <p className="text-gray-600">
              👥 Visitas: <span className="font-bold text-pink-600">1,234</span>
            </p>
          </div>
        </div>

        {/* Formulario de Registro */}
        <div className="bg-white rounded-lg shadow-xl p-8 mb-8">
          <h2 className="text-3xl font-bold text-center mb-6 text-pink-600">
            Registrate en la Red
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Nombre completo *"
                value={formData.nombre}
                onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                required
                className="border rounded-lg px-4 py-2"
              />
              <input
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="border rounded-lg px-4 py-2"
              />
              <input
                type="tel"
                placeholder="Teléfono"
                value={formData.telefono}
                onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                className="border rounded-lg px-4 py-2"
              />
              <input
                type="text"
                placeholder="Organismo donde trabajás *"
                value={formData.organismo}
                onChange={(e) => setFormData({ ...formData, organismo: e.target.value })}
                required
                className="border rounded-lg px-4 py-2"
              />
              <input
                type="text"
                placeholder="Sindicato (si estás afiliada)"
                value={formData.sindicato}
                onChange={(e) => setFormData({ ...formData, sindicato: e.target.value })}
                className="border rounded-lg px-4 py-2"
              />
              <input
                type="text"
                placeholder="Provincia"
                value={formData.provincia}
                onChange={(e) => setFormData({ ...formData, provincia: e.target.value })}
                className="border rounded-lg px-4 py-2"
              />
            </div>
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-pink-500 to-purple-500 text-white py-3 rounded-lg font-bold hover:from-pink-600 hover:to-purple-600 disabled:opacity-50"
            >
              {isLoading ? "Guardando..." : "Registrarme"}
            </button>
          </form>
        </div>

        {/* Accesos Rápidos */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Link href="/bot">
            <a className="block bg-gradient-to-br from-pink-400 to-pink-600 text-white rounded-lg p-6 hover:shadow-xl transition-shadow">
              <MessageCircle className="w-12 h-12 mb-4" />
              <h3 className="text-xl font-bold mb-2">Hablás con Diana o Lohana</h3>
              <p className="text-sm">Bot conversacional con IA</p>
            </a>
          </Link>

          <Link href="/calendario">
            <a className="block bg-gradient-to-br from-yellow-400 to-green-500 text-white rounded-lg p-6 hover:shadow-xl transition-shadow">
              <Calendar className="w-12 h-12 mb-4" />
              <h3 className="text-xl font-bold mb-2">Calendario de Efemérides</h3>
              <p className="text-sm">Fechas clave del transfeminismo sindical</p>
            </a>
          </Link>

          <Link href="/radar">
            <a className="block bg-gradient-to-br from-red-400 to-red-600 text-white rounded-lg p-6 hover:shadow-xl transition-shadow">
              <AlertTriangle className="w-12 h-12 mb-4" />
              <h3 className="text-xl font-bold mb-2">Radar Trans</h3>
              <p className="text-sm">Reportá violencia institucional y despidos</p>
            </a>
          </Link>

          <Link href="/mapa">
            <a className="block bg-gradient-to-br from-blue-400 to-blue-600 text-white rounded-lg p-6 hover:shadow-xl transition-shadow">
              <MapPin className="w-12 h-12 mb-4" />
              <h3 className="text-xl font-bold mb-2">Red en el Mapa</h3>
              <p className="text-sm">Encontrá compañeras y organizaciones</p>
            </a>
          </Link>
        </div>

        {/* Anexos */}
        <div className="bg-white rounded-lg shadow-xl p-8">
          <h2 className="text-3xl font-bold text-center mb-6 text-pink-600">
            Recursos y Anexos
          </h2>
          <div className="text-center">
            <Link href="/anexos">
              <a className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white px-8 py-3 rounded-lg font-bold hover:from-pink-600 hover:to-purple-600">
                Ver Todos los Recursos <ExternalLink className="w-5 h-5" />
              </a>
            </Link>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-2">🏳️‍⚧️ En memoria de Diana Sacayán y Lohana Berkins 🏳️‍⚧️</p>
          <p className="text-sm text-gray-400">
            Coordinación Federal del Sindicalismo Trans-Formador © 2025
          </p>
        </div>
      </footer>
    </div>
  );
}
