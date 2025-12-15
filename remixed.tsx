import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Home } from 'lucide-react';

// Colores corporativos según Manual de Identidad Visual ISER
const colors = {
  primary: {
    green: '#1B9E88',    // R:27 G:158 B:136
    yellow: '#FCBD05',   // R:252 G:189 B:7
    red: '#EB4335',      // R:235 G:67 B:53
    white: '#FFFFFF'
  },
  secondary: {
    orange: '#E27C32',   // R:226 G:124 B:50
    lime: '#CFDA4B',     // R:207 G:218 B:75
    blue: '#5894EF',     // R:88 G:148 B:239
    magenta: '#C82260'   // R:200 G:34 B:96
  },
  neutral: {
    grayLight: '#CFCFCF',  // R:207 G:207 B:207
    grayMedium: '#9C9C9B', // R:156 G:156 B:155
    grayDark: '#646363',   // R:100 G:100 B:99
    black: '#000000'
  }
};

const Presentation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    // Slide 1 - Portada
    {
      type: 'title',
      title: 'Proyecto Educativo Institucional',
      subtitle: 'Institución Universitaria de Educación Rural - UniRural',
      detail: 'Cambio de Carácter Académico',
      year: 'Horizonte 2034'
    },
    
    // Slide 2 - Agenda
    {
      type: 'agenda',
      title: 'Agenda de Presentación',
      items: [
        'Identidad Institucional',
        'Fundamentos y Lineamientos',
        'Justificación del Cambio de Carácter',
        'Estructura Académica',
        'Comunidad Académica',
        'Modelo de Gestión'
      ]
    },
    
    // Slide 3 - Historia
    {
      type: 'timeline',
      title: 'Nuestra Trayectoria Histórica',
      subtitle: '69 años formando el campo colombiano',
      events: [
        { year: '1956', text: 'Creación mediante Decreto 2365' },
        { year: '1963', text: 'Reconocimiento como IES' },
        { year: '1988', text: 'Instituto Tecnológico' },
        { year: '2009', text: 'Vinculación Departamental' },
        { year: '2025', text: 'Cambio de Carácter' }
      ]
    },
    
    // Slide 4 - Naturaleza Jurídica
    {
      type: 'content',
      title: 'Naturaleza Jurídica',
      items: [
        { label: 'Origen', text: 'Decreto Ley 2365 de 1956 - Plantel Piloto Nacional' },
        { label: 'Actual', text: 'Establecimiento público departamental adscrito a Norte de Santander' },
        { label: 'Proceso', text: 'Cambio de carácter conforme al Decreto 2038 de 2023' }
      ]
    },
    
    // Slide 5 - Símbolos Institucionales
    {
      type: 'symbols',
      title: 'Símbolos Institucionales',
      subtitle: 'Nuestra Bandera',
      stripes: [
        { color: 'white', meaning: 'Cúspide de los sueños y metas, igualdad, responsabilidad y paz' },
        { color: 'green', meaning: 'Frescor de la naturaleza y desarrollo humano, símbolo de vida' },
        { color: 'yellow', meaning: 'Inteligencia, creatividad y riqueza de espíritu' },
        { color: 'red', meaning: 'Justicia e igualdad social, ardor juvenil y entusiasmo' }
      ]
    },
    
    // Slide 6 - Escudo
    {
      type: 'shield',
      title: 'Nuestro Escudo',
      elements: [
        { name: 'El círculo', meaning: 'Perfección, globalización y dinamismo' },
        { name: 'Hombre en el átomo', meaning: 'El ser humano como ser pensante, activo y central en el saber' },
        { name: 'Semicírculo con espigas', meaning: 'Compromiso histórico con la educación rural' },
        { name: 'Semicírculo superior', meaning: 'Contexto y ámbito de acción territorial' }
      ]
    },
    
    // Slide 7 - Misión
    {
      type: 'mission',
      title: 'Nuestra Misión',
      text: 'Formar Personas Integrales, competentes y socialmente responsables, con capacidad de generar y adaptar conocimientos, conservar y reinterpretar la cultura y participar activamente en el desarrollo armónico de la comunidad, privilegiando el sector rural y las poblaciones vulnerables, orientados desde la docencia, la investigación, la extensión y el bienestar institucional.'
    },
    
    // Slide 8 - Visión
    {
      type: 'vision',
      title: 'Nuestra Visión 2034',
      text: 'En el año 2034, La Institución Universitaria de Educación Rural - UniRural será reconocida en el oriente colombiano como una institución acreditada, incluyente y líder en la formación técnica, tecnológica y profesional, con un enfoque del desarrollo humano que apuesta por la ruralidad.'
    },
    
    // Slide 9 - Principios
    {
      type: 'grid',
      title: 'Principios Institucionales',
      items: [
        { name: 'Autonomía', icon: '🎓' },
        { name: 'Integridad', icon: '⚖️' },
        { name: 'Pertinencia', icon: '🎯' },
        { name: 'Inclusión', icon: '🤝' },
        { name: 'Equidad', icon: '⚖️' },
        { name: 'Sostenibilidad', icon: '🌱' },
        { name: 'Libertad Académica', icon: '📚' },
        { name: 'Calidad', icon: '⭐' }
      ]
    },
    
    // Slide 10 - Identidad Rural
    {
      type: 'highlight',
      title: 'Nuestra Identidad Rural',
      subtitle: 'El Sello Diferenciador',
      points: [
        'Comunidades rurales como expresiones de vida, cultura y desarrollo',
        'Desarrollo humano como fundamento conceptual',
        'El territorio-naturaleza como sujeto activo',
        'Prácticas de convivencia democrática y participativa',
        'Criterios de equidad, justicia, género y sustentabilidad'
      ]
    },
    
    // Slide 11 - Cobertura Territorial
    {
      type: 'map',
      title: 'Presencia Territorial',
      subtitle: '16 Centros de Atención Tutorial en 6 departamentos',
      regions: [
        { name: 'Norte de Santander', centers: 8 },
        { name: 'Santander', centers: 3 },
        { name: 'Arauca', centers: 3 },
        { name: 'Bolívar', centers: 2 },
        { name: 'Cesar', centers: 6 },
        { name: 'Magdalena', centers: 2 }
      ]
    },
    
    // Slide 12 - Fundamentos Filosóficos
    {
      type: 'concept',
      title: 'Fundamento Filosófico',
      concept: 'Desarrollo Humano',
      definition: 'Proceso de ampliación de las capacidades de las personas, ubicándolas en el centro del desarrollo con capacidad de agencia para transformarse y transformar su entorno.',
      author: 'Basado en Amartya Sen y Martha Nussbaum'
    },
    
    // Slide 13 - Formación Integral
    {
      type: 'dimensions',
      title: 'Formación Integral',
      subtitle: 'La persona como ser multidimensional',
      dimensions: ['Intelectual', 'Afectiva', 'Social', 'Ética', 'Política', 'Estética']
    },
    
    // Slide 14 - Enfoque por Competencias
    {
      type: 'competencies',
      title: 'Enfoque por Competencias',
      areas: [
        { name: 'Saber Ser', desc: 'Dimensión ética y actitudinal' },
        { name: 'Saber Hacer', desc: 'Dimensión procedimental' },
        { name: 'Saber Conocer', desc: 'Dimensión cognitiva' },
        { name: 'Saber Estar', desc: 'Dimensión relacional' }
      ]
    },
    
    // Slide 15 - Pensamiento Pedagógico
    {
      type: 'highlight',
      title: 'Pensamiento Pedagógico Socio-Crítico',
      points: [
        'Aplicación del conocimiento a problemáticas reales',
        'Generación de conciencia crítica y reflexiva',
        'Conducción autónoma del criterio propio',
        'Formación de personas libres y autónomas',
        'Trabajo cooperativo y colaborativo'
      ]
    },
    
    // Slide 16 - Modalidades
    {
      type: 'modalities',
      title: 'Modalidades de Formación',
      modalities: [
        { name: 'Presencial', desc: 'Interacción directa en espacios físicos' },
        { name: 'Virtual', desc: 'Totalmente en entornos digitales' },
        { name: 'A Distancia', desc: 'Mediada con encuentros periódicos' },
        { name: 'Dual', desc: 'Alterna academia y práctica empresarial' },
        { name: 'Híbrida', desc: 'Combinación flexible de modalidades' }
      ]
    },
    
    // Slide 17 - Contexto Regional
    {
      type: 'stats',
      title: 'Contexto Regional',
      subtitle: 'Norte de Santander y zona de influencia',
      stats: [
        { label: 'Municipios PDET', value: '8+' },
        { label: 'Población Rural', value: '45%' },
        { label: 'Cobertura ES Rural', value: '<20%' },
        { label: 'Departamentos', value: '6' }
      ]
    },
    
    // Slide 18 - Brechas Educativas
    {
      type: 'challenges',
      title: 'Brechas en Educación Superior',
      challenges: [
        'Baja cobertura en zonas rurales dispersas',
        'Oferta concentrada en ciudades capitales',
        'Necesidad de trayectorias educativas completas',
        'Falta de programas profesionales en territorios',
        'Dificultades de acceso y permanencia'
      ]
    },
    
    // Slide 19 - Infraestructura
    {
      type: 'infrastructure',
      title: 'Capacidades Institucionales',
      subtitle: 'Infraestructura Física',
      items: [
        '190 cupos en residencias estudiantiles',
        '140 capacidad en comedor institucional',
        'Laboratorios especializados modernos',
        'Granja La Rinconada y Hacienda La Caldera',
        'Energía solar en instalaciones',
        'Sistema de Gestión ISO 9001:2015'
      ]
    },
    
    // Slide 20 - Oferta Académica Actual
    {
      type: 'programs',
      title: 'Oferta Académica Vigente',
      subtitle: '11 programas activos con Registro Calificado',
      faculties: [
        {
          name: 'Ciencias Administrativas',
          count: 6,
          programs: ['Gestión Empresarial', 'Gestión Comunitaria', 'Mercadeo', 'SST']
        },
        {
          name: 'Ingenierías e Informática',
          count: 5,
          programs: ['Agroindustria', 'Gestión Industrial', 'TIC', 'Obras Civiles', 'Agropecuaria']
        }
      ]
    },
    
    // Slide 21 - Investigación
    {
      type: 'research',
      title: 'Trayectoria en Investigación',
      groups: [
        { name: 'GICTIN', category: 'C', area: 'Ingenierías' },
        { name: 'GIESD', category: 'Reconocido', area: 'Ciencias Admin.' }
      ],
      achievements: [
        '6 profesores clasificados MinCiencias 2024',
        'Proyecto SGR implementado',
        'Semilleros activos de investigación',
        'Eventos académicos nacionales'
      ]
    },
    
    // Slide 22 - EPSEA
    {
      type: 'highlight',
      title: 'Extensión y Proyección Social',
      subtitle: 'Entidad Prestadora de Servicios de Extensión Agropecuaria',
      points: [
        'Habilitación EPSEA vigente',
        'Asistencia técnica a productores',
        'Consultoría y asesoría empresarial',
        'Convenios con sector productivo',
        'Articulación con SNIA'
      ]
    },
    
    // Slide 23 - ODS
    {
      type: 'ods',
      title: 'Articulación con ODS 2030',
      objectives: [
        { number: 4, name: 'Educación de Calidad' },
        { number: 8, name: 'Trabajo Decente' },
        { number: 10, name: 'Reducción de Desigualdades' },
        { number: 11, name: 'Ciudades Sostenibles' },
        { number: 12, name: 'Producción Responsable' }
      ]
    },
    
    // Slide 24 - Decreto 2038
    {
      type: 'requirements',
      title: 'Cumplimiento Decreto 2038/2023',
      subtitle: 'Requisitos para Cambio de Carácter',
      requirements: [
        { item: 'Reglamentos actualizados', status: '✓ Cumple' },
        { item: 'Políticas de interacción', status: '✓ Cumple' },
        { item: 'Plan de Desarrollo vigente', status: '✓ Cumple' },
        { item: 'Condiciones verificadas', status: '✓ Cumple' },
        { item: 'Programas con RC', status: '✓ 11 activos' }
      ]
    },
    
    // Slide 25 - Estructura Académica
    {
      type: 'structure',
      title: 'Estructura de Gobierno Académico',
      levels: [
        'Consejo Directivo - Máxima autoridad',
        'Consejo Académico - Autoridad académica',
        'Rectoría - Dirección ejecutiva',
        'Vicerrectorías - Gestión misional',
        'Facultades - Unidades académicas',
        'Programas - Gestión operativa'
      ]
    },
    
    // Slide 26 - Facultades
    {
      type: 'faculties',
      title: 'Facultades Actuales y Proyectadas',
      current: [
        'Ciencias Administrativas y Sociales',
        'Ingenierías e Informática'
      ],
      projected: [
        'Ciencias Básicas y Educación (proyectada)'
      ]
    },
    
    // Slide 27 - Nuevos Programas
    {
      type: 'expansion',
      title: 'Proyección de Oferta Académica',
      subtitle: 'Programas en trámite de Registro Calificado',
      programs: [
        'Ingeniería en Ciencia de Datos - Virtual',
        'Trabajo Social y Comunitario - Virtual',
        'Bioingeniería - Presencial'
      ],
      areas: [
        'Programas Profesionales Universitarios',
        'Especializaciones',
        'Maestrías'
      ]
    },
    
    // Slide 28 - Sistema Investigación
    {
      type: 'system',
      title: 'Sistema de Investigación',
      subtitle: 'Líneas de investigación',
      lines: [
        'Bioeconomía y desarrollo sostenible',
        'Cadenas productivas agroindustriales',
        'Transición energética',
        'Digitalización y tecnologías emergentes',
        'Adaptación al cambio climático',
        'Desarrollo humano rural'
      ]
    },
    
    // Slide 29 - Extensión
    {
      type: 'extension',
      title: 'Sistema de Extensión',
      modalities: [
        { type: 'Académica', desc: 'Educación continuada, diplomados' },
        { type: 'Social', desc: 'Proyectos solidarios, desarrollo comunitario' },
        { type: 'Económica', desc: 'Consultoría, asesoría, asistencia técnica' },
        { type: 'Graduados', desc: 'Seguimiento y vinculación' },
        { type: 'Internacional', desc: 'Movilidad, convenios' }
      ]
    },
    
    // Slide 30 - NEXO
    {
      type: 'nexo',
      title: 'Núcleo de Experiencias y Organización',
      subtitle: 'Coordinación de formación multimodal',
      functions: [
        'Gestión tecnológica y contenidos digitales',
        'Acompañamiento pedagógico docente',
        'Soporte técnico-operativo',
        'Seguimiento a bienestar digital',
        'Monitoreo del ecosistema virtual'
      ]
    },
    
    // Slide 31 - Perfil Estudiante
    {
      type: 'profile',
      title: 'Perfil del Estudiante Iserista',
      competencies: [
        'Responsabilidad y autoconfianza',
        'Resolución de problemas',
        'Habilidades comunicativas',
        'Uso competente de TIC',
        'Pensamiento crítico y flexible',
        'Trabajo en equipo',
        'Iniciativa y creatividad'
      ]
    },
    
    // Slide 32 - Perfil Docente
    {
      type: 'profile',
      title: 'Perfil del Docente UniRural',
      competencies: [
        'Facilitador del aprendizaje',
        'Diseñador curricular',
        'Acompañante y orientador',
        'Investigador y extensionista',
        'Actualización permanente',
        'Compromiso con el desarrollo rural'
      ]
    },
    
    // Slide 33 - Bienestar
    {
      type: 'wellness',
      title: 'Sistema de Bienestar Institucional',
      components: [
        'Salud integral y hábitos saludables',
        'Orientación educativa y tutorías',
        'Competencias para la vida',
        'Permanencia e inclusión',
        'Promoción socioeconómica',
        'Artes y cultura',
        'Bienestar social laboral'
      ]
    },
    
    // Slide 34 - Internacionalización
    {
      type: 'international',
      title: 'Internacionalización',
      dimensions: [
        'Alianzas con instituciones globales',
        'Movilidad académica entrante y saliente',
        'Contenidos multiculturales en currículo',
        'Redes académicas internacionales',
        'Diplomacia científica y cooperación',
        'Recursos multilingües'
      ]
    },
    
    // Slide 35 - Gestión
    {
      type: 'management',
      title: 'Modelo de Gestión y Calidad',
      principles: [
        'Trabajo por procesos',
        'Ciclos de mejora continua (PHVA)',
        'Toma de decisiones basada en datos',
        'Gestión del conocimiento',
        'Sistema de calidad ISO 9001:2015',
        'Transparencia y rendición de cuentas'
      ]
    },
    
    // Slide 36 - Compromisos
    {
      type: 'commitments',
      title: 'Nuestros Compromisos',
      items: [
        'Acceso, permanencia y graduación con calidad',
        'Transparencia y rendición de cuentas',
        'Participación de toda la comunidad',
        'Equidad territorial y poblacional',
        'Sostenibilidad ambiental y financiera',
        'Formación integral para el desarrollo rural'
      ]
    },
    
    // Slide 37 - Retos
    {
      type: 'challenges',
      title: 'Retos del Cambio de Carácter',
      challenges: [
        'Consolidar oferta de programas profesionales',
        'Fortalecer capacidades de investigación',
        'Ampliar cobertura territorial',
        'Avanzar hacia la acreditación de alta calidad',
        'Desarrollar programas de posgrado',
        'Fortalecer vinculación con egresados'
      ]
    },
    
    // Slide 38 - Horizonte 2034
    {
      type: 'vision2034',
      title: 'Horizonte 2034',
      subtitle: 'Una institución universitaria acreditada, incluyente y líder',
      goals: [
        'Acreditación institucional de alta calidad',
        'Oferta ampliada de programas profesionales y posgrados',
        'Presencia consolidada en 6+ departamentos',
        'Grupos de investigación categoría A',
        'Alianzas internacionales estratégicas',
        'Referente nacional en educación rural'
      ]
    },
    
    // Slide 39 - Cierre
    {
      type: 'closing',
      title: '69 años formando el campo colombiano',
      subtitle: 'Hacia una institución universitaria de excelencia',
      quote: '"El desarrollo humano es el proceso de ampliación de las capacidades de las personas, ubicándolas en el centro con capacidad de agencia para transformarse y transformar su entorno."',
      footer: 'Instituto Superior de Educación Rural - UniRural'
    }
  ];

  const SlideContent = ({ slide }) => {
    switch (slide.type) {
      case 'title':
        return (
          <div className="flex flex-col items-center justify-center h-full text-white p-12" style={{background: `linear-gradient(135deg, ${colors.primary.green} 0%, #147a6a 100%)`}}>
            <div className="text-center space-y-6">
              <div className="text-5xl font-bold mb-4" style={{fontFamily: 'Arial, sans-serif'}}>{slide.title}</div>
              <div className="text-2xl font-light">{slide.subtitle}</div>
              <div className="text-xl mt-8 pt-6" style={{borderTop: `4px solid ${colors.primary.yellow}`}}>{slide.detail}</div>
              <div className="text-lg mt-4" style={{color: colors.primary.yellow}}>{slide.year}</div>
              <div className="mt-8 text-sm opacity-80">vigilado Mineducación</div>
            </div>
          </div>
        );

      case 'agenda':
        return (
          <div className="p-12 bg-white h-full">
            <h1 className="text-4xl font-bold mb-12" style={{color: colors.primary.red, fontFamily: 'Arial, sans-serif'}}>{slide.title}</h1>
            <div className="grid grid-cols-2 gap-6">
              {slide.items.map((item, idx) => (
                <div key={idx} className="flex items-center space-x-4 p-5 rounded-lg" style={{backgroundColor: '#f5f5f5', borderLeft: `4px solid ${colors.primary.green}`}}>
                  <div className="text-2xl font-bold" style={{color: colors.primary.green}}>{idx + 1}</div>
                  <div className="text-lg" style={{color: colors.neutral.grayDark}}>{item}</div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'timeline':
        return (
          <div className="p-12 h-full" style={{backgroundColor: '#f8f9fa'}}>
            <h1 className="text-4xl font-bold mb-4" style={{color: colors.primary.red, fontFamily: 'Arial, sans-serif'}}>{slide.title}</h1>
            <p className="text-xl mb-10" style={{color: colors.neutral.grayDark}}>{slide.subtitle}</p>
            <div className="space-y-5">
              {slide.events.map((event, idx) => (
                <div key={idx} className="flex items-center space-x-6">
                  <div className="text-white px-5 py-3 rounded-lg font-bold text-lg min-w-[110px] text-center" style={{backgroundColor: colors.primary.green}}>
                    {event.year}
                  </div>
                  <div className="flex-1 bg-white p-4 rounded-lg shadow-sm text-base" style={{color: colors.neutral.grayDark}}>
                    {event.text}
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'content':
        return (
          <div className="p-12 bg-white h-full">
            <h1 className="text-4xl font-bold mb-10" style={{color: colors.primary.red, fontFamily: 'Arial, sans-serif'}}>{slide.title}</h1>
            <div className="space-y-8">
              {slide.items.map((item, idx) => (
                <div key={idx} className="pl-6 py-2" style={{borderLeft: `4px solid ${colors.primary.green}`}}>
                  <div className="text-xl font-semibold mb-2" style={{color: colors.primary.green}}>{item.label}</div>
                  <div className="text-lg" style={{color: colors.neutral.grayDark}}>{item.text}</div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'symbols':
        return (
          <div className="p-12 bg-white h-full">
            <h1 className="text-4xl font-bold mb-4" style={{color: colors.primary.red, fontFamily: 'Arial, sans-serif'}}>{slide.title}</h1>
            <p className="text-xl mb-8" style={{color: colors.neutral.grayDark}}>{slide.subtitle}</p>
            <div className="space-y-4">
              {slide.stripes.map((stripe, idx) => {
                const bgColor = stripe.color === 'white' ? '#f5f5f5' : 
                               stripe.color === 'green' ? colors.primary.green :
                               stripe.color === 'yellow' ? colors.primary.yellow :
                               colors.primary.red;
                const textColor = stripe.color === 'yellow' || stripe.color === 'white' ? colors.neutral.black : colors.primary.white;
                return (
                  <div key={idx} className="p-5 rounded-lg" style={{backgroundColor: bgColor, color: textColor}}>
                    <span className="font-bold capitalize">{stripe.color === 'white' ? 'Blanco' : stripe.color === 'green' ? 'Verde' : stripe.color === 'yellow' ? 'Amarillo' : 'Rojo'}:</span> {stripe.meaning}
                  </div>
                );
              })}
            </div>
          </div>
        );

      case 'shield':
        return (
          <div className="p-12 h-full" style={{backgroundColor: '#f8f9fa'}}>
            <h1 className="text-4xl font-bold mb-10" style={{color: colors.primary.red, fontFamily: 'Arial, sans-serif'}}>{slide.title}</h1>
            <div className="grid grid-cols-2 gap-6">
              {slide.elements.map((el, idx) => (
                <div key={idx} className="bg-white p-6 rounded-lg shadow-sm" style={{borderTop: `4px solid ${colors.primary.green}`}}>
                  <div className="font-bold text-lg mb-2" style={{color: colors.primary.green}}>{el.name}</div>
                  <div style={{color: colors.neutral.grayDark}}>{el.meaning}</div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'mission':
      case 'vision':
        return (
          <div className="p-12 h-full flex flex-col justify-center" style={{background: `linear-gradient(135deg, ${colors.primary.green} 0%, #147a6a 100%)`}}>
            <h1 className="text-4xl font-bold mb-8" style={{color: colors.primary.yellow, fontFamily: 'Arial, sans-serif'}}>{slide.title}</h1>
            <div className="p-8 rounded-xl" style={{backgroundColor: 'rgba(255,255,255,0.15)', border: `2px solid ${colors.primary.yellow}`}}>
              <p className="text-xl text-white leading-relaxed">{slide.text}</p>
            </div>
          </div>
        );

      case 'grid':
        return (
          <div className="p-12 bg-white h-full">
            <h1 className="text-4xl font-bold mb-10" style={{color: colors.primary.red, fontFamily: 'Arial, sans-serif'}}>{slide.title}</h1>
            <div className="grid grid-cols-4 gap-5">
              {slide.items.map((item, idx) => (
                <div key={idx} className="p-5 rounded-xl shadow-sm flex flex-col items-center justify-center text-center space-y-3" style={{backgroundColor: '#f8f9fa', border: `2px solid ${colors.primary.green}`}}>
                  <div className="text-3xl">{item.icon}</div>
                  <div className="text-base font-semibold" style={{color: colors.primary.green}}>{item.name}</div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'highlight':
        return (
          <div className="p-12 h-full" style={{backgroundColor: '#f8f9fa'}}>
            <h1 className="text-4xl font-bold mb-4" style={{color: colors.primary.red, fontFamily: 'Arial, sans-serif'}}>{slide.title}</h1>
            {slide.subtitle && <p className="text-xl mb-8" style={{color: colors.primary.green}}>{slide.subtitle}</p>}
            <div className="space-y-4">
              {slide.points.map((point, idx) => (
                <div key={idx} className="flex items-start space-x-4 bg-white p-5 rounded-lg shadow-sm">
                  <div className="text-white rounded-full w-9 h-9 flex items-center justify-center font-bold flex-shrink-0" style={{backgroundColor: colors.primary.green}}>
                    {idx + 1}
                  </div>
                  <div className="text-lg pt-1" style={{color: colors.neutral.grayDark}}>{point}</div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'map':
        return (
          <div className="p-12 bg-white h-full">
            <h1 className="text-4xl font-bold mb-4" style={{color: colors.primary.red, fontFamily: 'Arial, sans-serif'}}>{slide.title}</h1>
            <p className="text-xl mb-10" style={{color: colors.neutral.grayDark}}>{slide.subtitle}</p>
            <div className="grid grid-cols-3 gap-5">
              {slide.regions.map((region, idx) => (
                <div key={idx} className="p-6 rounded-xl shadow-lg text-white" style={{backgroundColor: colors.primary.green}}>
                  <div className="text-xl font-bold mb-3">{region.name}</div>
                  <div className="text-4xl font-bold" style={{color: colors.primary.yellow}}>{region.centers}</div>
                  <div className="text-sm opacity-80">Centros de Atención</div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'stats':
        return (
          <div className="p-12 h-full text-white" style={{background: `linear-gradient(135deg, ${colors.primary.green} 0%, #147a6a 100%)`}}>
            <h1 className="text-4xl font-bold mb-4" style={{fontFamily: 'Arial, sans-serif'}}>{slide.title}</h1>
            <p className="text-xl mb-10 opacity-80">{slide.subtitle}</p>
            <div className="grid grid-cols-2 gap-6">
              {slide.stats.map((stat, idx) => (
                <div key={idx} className="p-6 rounded-xl text-center" style={{backgroundColor: 'rgba(255,255,255,0.15)', border: `2px solid ${colors.primary.yellow}`}}>
                  <div className="text-5xl font-bold mb-3" style={{color: colors.primary.yellow}}>{stat.value}</div>
                  <div className="text-lg">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'programs':
        return (
          <div className="p-12 bg-white h-full">
            <h1 className="text-4xl font-bold mb-4" style={{color: colors.primary.red, fontFamily: 'Arial, sans-serif'}}>{slide.title}</h1>
            <p className="text-xl mb-10" style={{color: colors.neutral.grayDark}}>{slide.subtitle}</p>
            <div className="space-y-6">
              {slide.faculties.map((faculty, idx) => (
                <div key={idx} className="p-6 rounded-xl shadow-sm" style={{backgroundColor: '#f8f9fa'}}>
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-2xl font-bold" style={{color: colors.primary.green}}>{faculty.name}</h2>
                    <div className="text-white px-5 py-2 rounded-full text-lg font-bold" style={{backgroundColor: colors.primary.green}}>
                      {faculty.count} Programas
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {faculty.programs.map((program, pidx) => (
                      <span key={pidx} className="bg-white px-3 py-2 rounded-lg text-sm shadow-sm" style={{color: colors.neutral.grayDark}}>
                        {program}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'modalities':
        return (
          <div className="p-12 h-full" style={{backgroundColor: '#f8f9fa'}}>
            <h1 className="text-4xl font-bold mb-10" style={{color: colors.primary.red, fontFamily: 'Arial, sans-serif'}}>{slide.title}</h1>
            <div className="space-y-4">
              {slide.modalities.map((mod, idx) => (
                <div key={idx} className="bg-white p-5 rounded-xl shadow-sm flex items-center space-x-5" style={{borderLeft: `4px solid ${colors.primary.green}`}}>
                  <div className="text-white px-5 py-3 rounded-lg font-bold text-base min-w-[140px] text-center" style={{backgroundColor: colors.primary.green}}>
                    {mod.name}
                  </div>
                  <div className="text-base" style={{color: colors.neutral.grayDark}}>{mod.desc}</div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'competencies':
        return (
          <div className="p-12 bg-white h-full">
            <h1 className="text-4xl font-bold mb-10" style={{color: colors.primary.red, fontFamily: 'Arial, sans-serif'}}>{slide.title}</h1>
            <div className="grid grid-cols-2 gap-6">
              {slide.areas.map((area, idx) => (
                <div key={idx} className="p-6 rounded-xl shadow-lg text-white" style={{backgroundColor: colors.primary.green}}>
                  <div className="text-2xl font-bold mb-3">{area.name}</div>
                  <div className="text-lg opacity-90">{area.desc}</div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'dimensions':
        return (
          <div className="p-12 h-full" style={{backgroundColor: '#f8f9fa'}}>
            <h1 className="text-4xl font-bold mb-4" style={{color: colors.primary.red, fontFamily: 'Arial, sans-serif'}}>{slide.title}</h1>
            <p className="text-xl mb-10" style={{color: colors.neutral.grayDark}}>{slide.subtitle}</p>
            <div className="grid grid-cols-3 gap-5">
              {slide.dimensions.map((dim, idx) => (
                <div key={idx} className="bg-white p-6 rounded-xl shadow-sm text-center" style={{borderTop: `4px solid ${colors.primary.green}`}}>
                  <div className="text-xl font-bold" style={{color: colors.primary.green}}>{dim}</div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'concept':
        return (
          <div className="p-12 h-full text-white flex flex-col justify-center" style={{background: `linear-gradient(135deg, ${colors.primary.green} 0%, ${colors.secondary.blue} 100%)`}}>
            <h1 className="text-4xl font-bold mb-10" style={{color: colors.primary.yellow, fontFamily: 'Arial, sans-serif'}}>{slide.title}</h1>
            <div className="p-8 rounded-xl mb-6" style={{backgroundColor: 'rgba(255,255,255,0.2)', border: `2px solid ${colors.primary.yellow}`}}>
              <div className="text-3xl font-bold mb-5" style={{color: colors.primary.yellow}}>{slide.concept}</div>
              <p className="text-xl leading-relaxed">{slide.definition}</p>
            </div>
            <div className="text-lg italic opacity-80">— {slide.author}</div>
          </div>
        );

      case 'challenges':
        return (
          <div className="p-12 bg-white h-full">
            <h1 className="text-4xl font-bold mb-10" style={{color: colors.primary.red, fontFamily: 'Arial, sans-serif'}}>{slide.title}</h1>
            <div className="space-y-4">
              {slide.challenges.map((challenge, idx) => (
                <div key={idx} className="flex items-center space-x-4 p-5 rounded-lg" style={{backgroundColor: '#fef2f2', borderLeft: `4px solid ${colors.primary.red}`}}>
                  <div className="text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg flex-shrink-0" style={{backgroundColor: colors.primary.red}}>
                    !
                  </div>
                  <div className="text-base" style={{color: colors.neutral.grayDark}}>{challenge}</div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'infrastructure':
        return (
          <div className="p-12 h-full" style={{backgroundColor: '#f8f9fa'}}>
            <h1 className="text-4xl font-bold mb-4" style={{color: colors.primary.red, fontFamily: 'Arial, sans-serif'}}>{slide.title}</h1>
            <p className="text-xl mb-10" style={{color: colors.neutral.grayDark}}>{slide.subtitle}</p>
            <div className="grid grid-cols-2 gap-5">
              {slide.items.map((item, idx) => (
                <div key={idx} className="bg-white p-5 rounded-lg shadow-sm flex items-center space-x-3">
                  <div className="text-2xl" style={{color: colors.primary.green}}>✓</div>
                  <div className="text-base" style={{color: colors.neutral.grayDark}}>{item}</div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'research':
        return (
          <div className="p-12 bg-white h-full">
            <h1 className="text-4xl font-bold mb-10" style={{color: colors.primary.red, fontFamily: 'Arial, sans-serif'}}>{slide.title}</h1>
            <div className="mb-10">
              <h2 className="text-2xl font-semibold mb-5" style={{color: colors.primary.green}}>Grupos de Investigación</h2>
              <div className="grid grid-cols-2 gap-5">
                {slide.groups.map((group, idx) => (
                  <div key={idx} className="p-5 rounded-xl text-white" style={{backgroundColor: colors.secondary.blue}}>
                    <div className="text-xl font-bold mb-2">{group.name}</div>
                    <div className="text-base opacity-90">Categoría {group.category}</div>
                    <div className="text-sm opacity-80">{group.area}</div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-5" style={{color: colors.primary.green}}>Logros Recientes</h2>
              <div className="grid grid-cols-2 gap-3">
                {slide.achievements.map((achievement, idx) => (
                  <div key={idx} className="p-4 rounded-lg" style={{backgroundColor: '#f8f9fa', borderLeft: `4px solid ${colors.primary.green}`}}>
                    <div className="text-sm" style={{color: colors.neutral.grayDark}}>✓ {achievement}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'ods':
        return (
          <div className="p-12 h-full text-white" style={{background: `linear-gradient(135deg, ${colors.secondary.blue} 0%, ${colors.primary.green} 100%)`}}>
            <h1 className="text-4xl font-bold mb-10" style={{fontFamily: 'Arial, sans-serif'}}>{slide.title}</h1>
            <div className="grid grid-cols-5 gap-5">
              {slide.objectives.map((obj, idx) => (
                <div key={idx} className="p-6 rounded-xl text-center" style={{backgroundColor: 'rgba(255,255,255,0.2)', border: '2px solid white'}}>
                  <div className="text-5xl font-bold mb-3" style={{color: colors.primary.yellow}}>{obj.number}</div>
                  <div className="text-sm">{obj.name}</div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'requirements':
        return (
          <div className="p-12 bg-white h-full">
            <h1 className="text-4xl font-bold mb-4" style={{color: colors.primary.red, fontFamily: 'Arial, sans-serif'}}>{slide.title}</h1>
            <p className="text-xl mb-10" style={{color: colors.neutral.grayDark}}>{slide.subtitle}</p>
            <div className="space-y-4">
              {slide.requirements.map((req, idx) => (
                <div key={idx} className="flex items-center justify-between p-5 rounded-lg shadow-sm" style={{backgroundColor: '#f8f9fa'}}>
                  <div className="text-lg" style={{color: colors.neutral.grayDark}}>{req.item}</div>
                  <div className="text-lg font-bold" style={{color: colors.primary.green}}>{req.status}</div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'structure':
        return (
          <div className="p-12 h-full" style={{backgroundColor: '#f8f9fa'}}>
            <h1 className="text-4xl font-bold mb-10" style={{color: colors.primary.red, fontFamily: 'Arial, sans-serif'}}>{slide.title}</h1>
            <div className="space-y-3">
              {slide.levels.map((level, idx) => (
                <div key={idx} className="bg-white p-5 rounded-lg shadow-sm" style={{borderLeft: `4px solid ${colors.primary.green}`, marginLeft: `${idx * 20}px`}}>
                  <div className="text-base font-semibold" style={{color: colors.neutral.grayDark}}>{level}</div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'faculties':
        return (
          <div className="p-12 bg-white h-full">
            <h1 className="text-4xl font-bold mb-10" style={{color: colors.primary.red, fontFamily: 'Arial, sans-serif'}}>{slide.title}</h1>
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-semibold mb-5" style={{color: colors.primary.green}}>Facultades Actuales</h2>
                <div className="space-y-3">
                  {slide.current.map((faculty, idx) => (
                    <div key={idx} className="text-white p-5 rounded-lg text-xl font-semibold" style={{backgroundColor: colors.primary.green}}>
                      {faculty}
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-semibold mb-5" style={{color: colors.secondary.blue}}>Facultades Proyectadas</h2>
                <div className="space-y-3">
                  {slide.projected.map((faculty, idx) => (
                    <div key={idx} className="text-white p-5 rounded-lg text-xl font-semibold" style={{backgroundColor: colors.secondary.blue}}>
                      {faculty}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );

      case 'expansion':
        return (
          <div className="p-12 h-full" style={{backgroundColor: '#f8f9fa'}}>
            <h1 className="text-4xl font-bold mb-4" style={{color: colors.primary.red, fontFamily: 'Arial, sans-serif'}}>{slide.title}</h1>
            <p className="text-xl mb-8" style={{color: colors.neutral.grayDark}}>{slide.subtitle}</p>
            <div className="mb-8">
              <div className="space-y-3">
                {slide.programs.map((program, idx) => (
                  <div key={idx} className="text-white p-5 rounded-lg text-lg font-semibold" style={{backgroundColor: colors.secondary.blue}}>
                    • {program}
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-5" style={{color: colors.primary.green}}>Áreas de Expansión</h2>
              <div className="grid grid-cols-3 gap-4">
                {slide.areas.map((area, idx) => (
                  <div key={idx} className="p-5 rounded-lg text-center" style={{backgroundColor: 'white', border: `2px solid ${colors.primary.green}`}}>
                    <div className="text-base font-semibold" style={{color: colors.primary.green}}>{area}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'system':
        return (
          <div className="p-12 h-full text-white" style={{background: `linear-gradient(135deg, ${colors.secondary.blue} 0%, #3d6cb3 100%)`}}>
            <h1 className="text-4xl font-bold mb-4" style={{fontFamily: 'Arial, sans-serif'}}>{slide.title}</h1>
            <p className="text-xl mb-10 opacity-80">{slide.subtitle}</p>
            <div className="grid grid-cols-2 gap-5">
              {slide.lines.map((line, idx) => (
                <div key={idx} className="p-5 rounded-xl" style={{backgroundColor: 'rgba(255,255,255,0.2)', border: '2px solid white'}}>
                  <div className="flex items-start space-x-3">
                    <div className="text-xl">🔬</div>
                    <div className="text-base">{line}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'extension':
        return (
          <div className="p-12 bg-white h-full">
            <h1 className="text-4xl font-bold mb-10" style={{color: colors.primary.red, fontFamily: 'Arial, sans-serif'}}>{slide.title}</h1>
            <div className="space-y-4">
              {slide.modalities.map((mod, idx) => (
                <div key={idx} className="p-5 rounded-lg shadow-sm" style={{backgroundColor: '#f8f9fa', borderLeft: `4px solid ${colors.primary.green}`}}>
                  <div className="flex items-center justify-between">
                    <div className="text-xl font-bold" style={{color: colors.primary.green}}>{mod.type}</div>
                    <div className="text-base" style={{color: colors.neutral.grayDark}}>{mod.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'nexo':
        return (
          <div className="p-12 h-full text-white" style={{background: `linear-gradient(135deg, ${colors.secondary.blue} 0%, ${colors.primary.green} 100%)`}}>
            <h1 className="text-4xl font-bold mb-4" style={{fontFamily: 'Arial, sans-serif'}}>{slide.title}</h1>
            <p className="text-xl mb-10 opacity-80">{slide.subtitle}</p>
            <div className="space-y-4">
              {slide.functions.map((func, idx) => (
                <div key={idx} className="p-5 rounded-xl" style={{backgroundColor: 'rgba(255,255,255,0.2)', border: '2px solid white'}}>
                  <div className="flex items-center space-x-4">
                    <div className="rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg" style={{backgroundColor: colors.primary.yellow, color: colors.neutral.black}}>
                      {idx + 1}
                    </div>
                    <div className="text-base">{func}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'profile':
        return (
          <div className="p-12 h-full" style={{backgroundColor: '#f8f9fa'}}>
            <h1 className="text-4xl font-bold mb-10" style={{color: colors.primary.red, fontFamily: 'Arial, sans-serif'}}>{slide.title}</h1>
            <div className="grid grid-cols-2 gap-5">
              {slide.competencies.map((comp, idx) => (
                <div key={idx} className="bg-white p-5 rounded-lg shadow-sm" style={{borderLeft: `4px solid ${colors.primary.green}`}}>
                  <div className="flex items-center space-x-3">
                    <div className="text-2xl" style={{color: colors.primary.green}}>✓</div>
                    <div className="text-base font-semibold" style={{color: colors.neutral.grayDark}}>{comp}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'wellness':
        return (
          <div className="p-12 bg-white h-full">
            <h1 className="text-4xl font-bold mb-10" style={{color: colors.primary.red, fontFamily: 'Arial, sans-serif'}}>{slide.title}</h1>
            <div className="grid grid-cols-2 gap-5">
              {slide.components.map((comp, idx) => (
                <div key={idx} className="p-5 rounded-lg shadow-sm" style={{backgroundColor: '#f8f9fa', borderTop: `4px solid ${colors.primary.green}`}}>
                  <div className="text-base font-semibold" style={{color: colors.neutral.grayDark}}>{comp}</div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'international':
        return (
          <div className="p-12 h-full text-white" style={{background: `linear-gradient(135deg, ${colors.secondary.blue} 0%, #3d6cb3 100%)`}}>
            <h1 className="text-4xl font-bold mb-10" style={{fontFamily: 'Arial, sans-serif'}}>{slide.title}</h1>
            <div className="grid grid-cols-2 gap-5">
              {slide.dimensions.map((dim, idx) => (
                <div key={idx} className="p-5 rounded-xl" style={{backgroundColor: 'rgba(255,255,255,0.2)', border: '2px solid white'}}>
                  <div className="flex items-start space-x-3">
                    <div className="text-2xl">🌍</div>
                    <div className="text-base">{dim}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'management':
        return (
          <div className="p-12 bg-white h-full">
            <h1 className="text-4xl font-bold mb-10" style={{color: colors.primary.red, fontFamily: 'Arial, sans-serif'}}>{slide.title}</h1>
            <div className="grid grid-cols-2 gap-5">
              {slide.principles.map((principle, idx) => (
                <div key={idx} className="p-5 rounded-xl text-white shadow-lg" style={{backgroundColor: colors.primary.green}}>
                  <div className="flex items-center space-x-4">
                    <div className="text-2xl">⚙️</div>
                    <div className="text-base font-semibold">{principle}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'commitments':
        return (
          <div className="p-12 h-full text-white" style={{background: `linear-gradient(135deg, ${colors.primary.green} 0%, #147a6a 100%)`}}>
            <h1 className="text-4xl font-bold mb-10" style={{color: colors.primary.yellow, fontFamily: 'Arial, sans-serif'}}>{slide.title}</h1>
            <div className="space-y-4">
              {slide.items.map((item, idx) => (
                <div key={idx} className="p-5 rounded-xl" style={{backgroundColor: 'rgba(255,255,255,0.15)', border: `2px solid ${colors.primary.yellow}`}}>
                  <div className="flex items-center space-x-4">
                    <div className="rounded-full w-10 h-10 flex items-center justify-center font-bold" style={{backgroundColor: colors.primary.yellow, color: colors.primary.green}}>
                      ✓
                    </div>
                    <div className="text-lg">{item}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'vision2034':
        return (
          <div className="p-12 h-full text-white" style={{background: `linear-gradient(135deg, ${colors.secondary.blue} 0%, ${colors.primary.green} 100%)`}}>
            <h1 className="text-5xl font-bold mb-4" style={{color: colors.primary.yellow, fontFamily: 'Arial, sans-serif'}}>{slide.title}</h1>
            <p className="text-2xl mb-10 opacity-90">{slide.subtitle}</p>
            <div className="grid grid-cols-2 gap-5">
              {slide.goals.map((goal, idx) => (
                <div key={idx} className="p-5 rounded-xl" style={{backgroundColor: 'rgba(255,255,255,0.2)', border: `2px solid ${colors.primary.yellow}`}}>
                  <div className="flex items-start space-x-3">
                    <div className="text-2xl">🎯</div>
                    <div className="text-base">{goal}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'closing':
        return (
          <div className="flex flex-col items-center justify-center h-full text-white p-12" style={{background: `linear-gradient(135deg, ${colors.primary.green} 0%, #0f5c50 100%)`}}>
            <div className="text-center space-y-6">
              <div className="text-5xl font-bold mb-4" style={{color: colors.primary.yellow, fontFamily: 'Arial, sans-serif'}}>{slide.title}</div>
              <div className="text-2xl font-light mb-6">{slide.subtitle}</div>
              <div className="p-6 rounded-xl max-w-3xl" style={{backgroundColor: 'rgba(255,255,255,0.15)', border: `2px solid ${colors.primary.yellow}`}}>
                <p className="text-lg italic leading-relaxed">{slide.quote}</p>
              </div>
              <div className="text-xl mt-8 opacity-80">{slide.footer}</div>
              <div className="text-sm mt-4 opacity-60">vigilado Mineducación</div>
              <div className="text-3xl mt-4">🌱</div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  const goToSlide = (index) => setCurrentSlide(index);

  return (
    <div className="w-full h-screen flex flex-col" style={{backgroundColor: colors.neutral.grayDark}}>
      {/* Franja superior con colores corporativos */}
      <div className="flex h-1">
        <div className="flex-1" style={{backgroundColor: colors.primary.green}}></div>
        <div className="flex-1" style={{backgroundColor: colors.primary.yellow}}></div>
        <div className="flex-1" style={{backgroundColor: colors.primary.red}}></div>
      </div>
      
      <div className="flex-1 relative">
        <SlideContent slide={slides[currentSlide]} />
        
        <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
          <button onClick={prevSlide} className="bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all" disabled={currentSlide === 0}>
            <ChevronLeft size={28} style={{color: currentSlide === 0 ? colors.neutral.grayMedium : colors.primary.green}} />
          </button>
          
          <div className="bg-white/90 px-5 py-2 rounded-full shadow-lg">
            <span className="text-base font-semibold" style={{color: colors.neutral.grayDark}}>
              {currentSlide + 1} / {slides.length}
            </span>
          </div>
          
          <button onClick={nextSlide} className="bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all" disabled={currentSlide === slides.length - 1}>
            <ChevronRight size={28} style={{color: currentSlide === slides.length - 1 ? colors.neutral.grayMedium : colors.primary.green}} />
          </button>
        </div>
      </div>
      
      {/* Barra de navegación inferior */}
      <div className="p-3 flex items-center justify-center space-x-2 overflow-x-auto" style={{backgroundColor: colors.neutral.black}}>
        <button onClick={() => goToSlide(0)} className="p-2 rounded-lg transition-all" style={{backgroundColor: colors.neutral.grayDark}}>
          <Home size={18} className="text-white" />
        </button>
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className="rounded-full transition-all"
            style={{
              width: index === currentSlide ? '28px' : '10px',
              height: '10px',
              backgroundColor: index === currentSlide ? colors.primary.green : colors.neutral.grayDark
            }}
          />
        ))}
      </div>
      
      {/* Franja inferior con colores corporativos */}
      <div className="flex h-1">
        <div className="flex-1" style={{backgroundColor: colors.primary.green}}></div>
        <div className="flex-1" style={{backgroundColor: colors.primary.yellow}}></div>
        <div className="flex-1" style={{backgroundColor: colors.primary.red}}></div>
      </div>
    </div>
  );
};

export default Presentation;