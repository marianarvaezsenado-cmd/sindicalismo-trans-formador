import { useState } from 'react';
import { efemeridesData } from '../data/efemerides';
import { seccionalesData, delegadesTransData, reportesRadarTransData } from '../data/mapa';

// Mock hook para efemérides
export function useMockEfemerides(params?: { mes?: number; tipo?: string }) {
  let data = [...efemeridesData];
  
  if (params?.mes) {
    data = data.filter(e => e.mes === params.mes);
  }
  
  if (params?.tipo && params.tipo !== 'todos') {
    data = data.filter(e => e.tipo === params.tipo);
  }
  
  return {
    data,
    isLoading: false,
    error: null
  };
}

// Mock hook para registro
export function useMockRegistro() {
  const [isLoading, setIsLoading] = useState(false);
  
  const mutate = async (data: any) => {
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsLoading(false);
    console.log('Registro guardado (mock):', data);
  };
  
  return {
    mutate,
    isLoading,
    isSuccess: false,
    isError: false
  };
}

// Mock hook para Radar Trans
export function useMockRadarTrans() {
  return {
    data: reportesRadarTransData,
    isLoading: false,
    error: null
  };
}

export function useMockRadarTransCreate() {
  const [isLoading, setIsLoading] = useState(false);
  
  const mutate = async (data: any) => {
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsLoading(false);
    console.log('Reporte guardado (mock):', data);
  };
  
  return {
    mutate,
    isLoading,
    isSuccess: false,
    isError: false
  };
}

// Mock hook para el mapa
export function useMockMapa() {
  return {
    seccionales: seccionalesData,
    delegades: delegadesTransData,
    reportes: reportesRadarTransData,
    isLoading: false
  };
}

// Mock hook para el bot
export function useMockBot() {
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<Array<{role: string; content: string}>>([
    { role: 'assistant', content: 'Hola compañera, soy Diana Sacayán. Hoy le hablo yo, pero también está Lohana por acá. Nos vamos turnando para acompañarte. ¿En qué te puedo ayudar?' }
  ]);
  
  const mutate = async (data: { message: string }) => {
    setIsLoading(true);
    setMessages(prev => [...prev, { role: 'user', content: data.message }]);
    
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setMessages(prev => [...prev, { 
      role: 'assistant', 
      content: 'Esta es una demo del bot. En la versión completa, Diana y Lohana responderán usando inteligencia artificial. Por ahora, podés explorar el resto de la plataforma.' 
    }]);
    
    setIsLoading(false);
  };
  
  return {
    mutate,
    messages,
    isLoading
  };
}
