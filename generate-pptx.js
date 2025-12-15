const PptxGenJS = require('pptxgenjs');

// ============================================================================
// COLORES CORPORATIVOS ISER - Exactos del Manual de Identidad Visual
// ============================================================================
const colors = {
  primary: {
    green: '1B9E88',      // R:27 G:158 B:136
    yellow: 'FCBD05',     // R:252 G:189 B:7
    red: 'EB4335',        // R:235 G:67 B:53
    white: 'FFFFFF'
  },
  secondary: {
    orange: 'E27C32',     // R:226 G:124 B:50
    lime: 'CFDA4B',       // R:207 G:218 B:75
    blue: '5894EF',       // R:88 G:148 B:239
    magenta: 'C82260'     // R:200 G:34 B:96
  },
  neutral: {
    grayLight: 'CFCFCF',  // R:207 G:207 B:207
    grayMedium: '9C9C9B', // R:156 G:156 B:155
    grayDark: '646363',   // R:100 G:100 B:99
    black: '000000'
  },
  backgrounds: {
    light: 'F8F9FA',
    lightAlt: 'F5F5F5',
    redLight: 'FEF2F2'
  }
};

// ============================================================================
// DATOS EXACTOS DE LAS 39 DIAPOSITIVAS - Extraídos del TSX
// ============================================================================
const slidesData = [
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

  // Slide 5 - Símbolos Institucionales - Bandera
  {
    type: 'symbols',
    title: 'Símbolos Institucionales',
    subtitle: 'Nuestra Bandera',
    stripes: [
      { color: 'white', name: 'Blanco', meaning: 'Cúspide de los sueños y metas, igualdad, responsabilidad y paz' },
      { color: 'green', name: 'Verde', meaning: 'Frescor de la naturaleza y desarrollo humano, símbolo de vida' },
      { color: 'yellow', name: 'Amarillo', meaning: 'Inteligencia, creatividad y riqueza de espíritu' },
      { color: 'red', name: 'Rojo', meaning: 'Justicia e igualdad social, ardor juvenil y entusiasmo' }
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
    subtitle: null,
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

// ============================================================================
// CREAR PRESENTACIÓN PPTX
// ============================================================================
const pptx = new PptxGenJS();

// Metadatos
pptx.author = 'ISER - UniRural';
pptx.title = 'Proyecto Educativo Institucional - PEI';
pptx.subject = 'Cambio de Carácter Académico - Horizonte 2034';
pptx.company = 'Institución Universitaria de Educación Rural';
pptx.layout = 'LAYOUT_16x9';

// ============================================================================
// FUNCIONES AUXILIARES PARA CREAR DIAPOSITIVAS
// ============================================================================

// Agregar franja tricolor superior/inferior
function addColorStripe(slide, yPos) {
  slide.addShape(pptx.shapes.RECTANGLE, { x: 0, y: yPos, w: 3.33, h: 0.08, fill: { color: colors.primary.green } });
  slide.addShape(pptx.shapes.RECTANGLE, { x: 3.33, y: yPos, w: 3.34, h: 0.08, fill: { color: colors.primary.yellow } });
  slide.addShape(pptx.shapes.RECTANGLE, { x: 6.67, y: yPos, w: 3.33, h: 0.08, fill: { color: colors.primary.red } });
}

// ============================================================================
// GENERAR CADA DIAPOSITIVA SEGÚN SU TIPO
// ============================================================================

slidesData.forEach((data, index) => {
  let slide = pptx.addSlide();

  switch(data.type) {
    // ==================== SLIDE TYPE: TITLE (Portada) ====================
    case 'title':
      slide.background = { color: colors.primary.green };

      slide.addText(data.title, {
        x: 0.5, y: 1.6, w: 9, h: 1,
        fontSize: 44, fontFace: 'Arial', bold: true, color: colors.primary.white,
        align: 'center'
      });

      slide.addText(data.subtitle, {
        x: 0.5, y: 2.7, w: 9, h: 0.6,
        fontSize: 22, fontFace: 'Arial', color: colors.primary.white,
        align: 'center'
      });

      // Línea amarilla decorativa
      slide.addShape(pptx.shapes.RECTANGLE, {
        x: 3.5, y: 3.5, w: 3, h: 0.06, fill: { color: colors.primary.yellow }
      });

      slide.addText(data.detail, {
        x: 0.5, y: 3.7, w: 9, h: 0.5,
        fontSize: 20, fontFace: 'Arial', color: colors.primary.white,
        align: 'center'
      });

      slide.addText(data.year, {
        x: 0.5, y: 4.3, w: 9, h: 0.5,
        fontSize: 18, fontFace: 'Arial', bold: true, color: colors.primary.yellow,
        align: 'center'
      });

      slide.addText('vigilado Mineducación', {
        x: 0.5, y: 4.9, w: 9, h: 0.3,
        fontSize: 11, fontFace: 'Arial', color: colors.primary.white,
        align: 'center'
      });
      break;

    // ==================== SLIDE TYPE: AGENDA ====================
    case 'agenda':
      slide.background = { color: colors.primary.white };
      addColorStripe(slide, 0);
      addColorStripe(slide, 5.55);

      slide.addText(data.title, {
        x: 0.5, y: 0.3, w: 9, h: 0.8,
        fontSize: 36, fontFace: 'Arial', bold: true, color: colors.primary.red
      });

      data.items.forEach((item, idx) => {
        const row = Math.floor(idx / 2);
        const col = idx % 2;
        const x = col === 0 ? 0.5 : 5;
        const y = 1.3 + row * 1.3;

        // Fondo gris
        slide.addShape(pptx.shapes.RECTANGLE, {
          x: x, y: y, w: 4.3, h: 1, fill: { color: colors.backgrounds.lightAlt }
        });

        // Barra verde izquierda
        slide.addShape(pptx.shapes.RECTANGLE, {
          x: x, y: y, w: 0.08, h: 1, fill: { color: colors.primary.green }
        });

        // Número
        slide.addText((idx + 1).toString(), {
          x: x + 0.2, y: y + 0.25, w: 0.5, h: 0.5,
          fontSize: 24, fontFace: 'Arial', bold: true, color: colors.primary.green
        });

        // Texto
        slide.addText(item, {
          x: x + 0.7, y: y + 0.3, w: 3.4, h: 0.5,
          fontSize: 16, fontFace: 'Arial', color: colors.neutral.grayDark
        });
      });
      break;

    // ==================== SLIDE TYPE: TIMELINE ====================
    case 'timeline':
      slide.background = { color: colors.backgrounds.light };
      addColorStripe(slide, 0);
      addColorStripe(slide, 5.55);

      slide.addText(data.title, {
        x: 0.5, y: 0.3, w: 9, h: 0.6,
        fontSize: 36, fontFace: 'Arial', bold: true, color: colors.primary.red
      });

      slide.addText(data.subtitle, {
        x: 0.5, y: 0.9, w: 9, h: 0.4,
        fontSize: 18, fontFace: 'Arial', color: colors.neutral.grayDark
      });

      data.events.forEach((event, idx) => {
        const y = 1.5 + idx * 0.8;

        // Caja año verde
        slide.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
          x: 0.5, y: y, w: 1.4, h: 0.6, fill: { color: colors.primary.green }
        });

        slide.addText(event.year, {
          x: 0.5, y: y + 0.12, w: 1.4, h: 0.4,
          fontSize: 16, fontFace: 'Arial', bold: true, color: colors.primary.white,
          align: 'center'
        });

        // Caja texto blanca
        slide.addShape(pptx.shapes.RECTANGLE, {
          x: 2.1, y: y, w: 7.3, h: 0.6, fill: { color: colors.primary.white },
          shadow: { type: 'outer', blur: 3, offset: 1, angle: 45, opacity: 0.15 }
        });

        slide.addText(event.text, {
          x: 2.3, y: y + 0.15, w: 7, h: 0.35,
          fontSize: 14, fontFace: 'Arial', color: colors.neutral.grayDark
        });
      });
      break;

    // ==================== SLIDE TYPE: CONTENT ====================
    case 'content':
      slide.background = { color: colors.primary.white };
      addColorStripe(slide, 0);
      addColorStripe(slide, 5.55);

      slide.addText(data.title, {
        x: 0.5, y: 0.3, w: 9, h: 0.8,
        fontSize: 36, fontFace: 'Arial', bold: true, color: colors.primary.red
      });

      data.items.forEach((item, idx) => {
        const y = 1.3 + idx * 1.4;

        // Barra verde izquierda
        slide.addShape(pptx.shapes.RECTANGLE, {
          x: 0.5, y: y, w: 0.08, h: 1.1, fill: { color: colors.primary.green }
        });

        // Label
        slide.addText(item.label, {
          x: 0.7, y: y, w: 8.5, h: 0.5,
          fontSize: 20, fontFace: 'Arial', bold: true, color: colors.primary.green
        });

        // Texto
        slide.addText(item.text, {
          x: 0.7, y: y + 0.5, w: 8.5, h: 0.5,
          fontSize: 16, fontFace: 'Arial', color: colors.neutral.grayDark
        });
      });
      break;

    // ==================== SLIDE TYPE: SYMBOLS (Bandera) ====================
    case 'symbols':
      slide.background = { color: colors.primary.white };
      addColorStripe(slide, 0);
      addColorStripe(slide, 5.55);

      slide.addText(data.title, {
        x: 0.5, y: 0.3, w: 9, h: 0.55,
        fontSize: 36, fontFace: 'Arial', bold: true, color: colors.primary.red
      });

      slide.addText(data.subtitle, {
        x: 0.5, y: 0.85, w: 9, h: 0.35,
        fontSize: 18, fontFace: 'Arial', color: colors.neutral.grayDark
      });

      data.stripes.forEach((stripe, idx) => {
        const y = 1.35 + idx * 1;
        let bgColor, textColor;

        switch(stripe.color) {
          case 'white': bgColor = colors.backgrounds.lightAlt; textColor = colors.neutral.black; break;
          case 'green': bgColor = colors.primary.green; textColor = colors.primary.white; break;
          case 'yellow': bgColor = colors.primary.yellow; textColor = colors.neutral.black; break;
          case 'red': bgColor = colors.primary.red; textColor = colors.primary.white; break;
        }

        slide.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
          x: 0.5, y: y, w: 9, h: 0.85, fill: { color: bgColor }
        });

        slide.addText(`${stripe.name}: ${stripe.meaning}`, {
          x: 0.8, y: y + 0.22, w: 8.5, h: 0.45,
          fontSize: 14, fontFace: 'Arial', bold: false, color: textColor
        });
      });
      break;

    // ==================== SLIDE TYPE: SHIELD (Escudo) ====================
    case 'shield':
      slide.background = { color: colors.backgrounds.light };
      addColorStripe(slide, 0);
      addColorStripe(slide, 5.55);

      slide.addText(data.title, {
        x: 0.5, y: 0.3, w: 9, h: 0.7,
        fontSize: 36, fontFace: 'Arial', bold: true, color: colors.primary.red
      });

      data.elements.forEach((el, idx) => {
        const row = Math.floor(idx / 2);
        const col = idx % 2;
        const x = col === 0 ? 0.5 : 5;
        const y = 1.2 + row * 2.1;

        // Caja blanca con sombra
        slide.addShape(pptx.shapes.RECTANGLE, {
          x: x, y: y, w: 4.3, h: 1.8, fill: { color: colors.primary.white },
          shadow: { type: 'outer', blur: 3, offset: 1, angle: 45, opacity: 0.15 }
        });

        // Barra verde superior
        slide.addShape(pptx.shapes.RECTANGLE, {
          x: x, y: y, w: 4.3, h: 0.08, fill: { color: colors.primary.green }
        });

        // Nombre
        slide.addText(el.name, {
          x: x + 0.2, y: y + 0.2, w: 4, h: 0.5,
          fontSize: 16, fontFace: 'Arial', bold: true, color: colors.primary.green
        });

        // Significado
        slide.addText(el.meaning, {
          x: x + 0.2, y: y + 0.75, w: 4, h: 0.9,
          fontSize: 13, fontFace: 'Arial', color: colors.neutral.grayDark
        });
      });
      break;

    // ==================== SLIDE TYPE: MISSION ====================
    case 'mission':
      slide.background = { color: colors.primary.green };

      slide.addText(data.title, {
        x: 0.5, y: 0.8, w: 9, h: 0.7,
        fontSize: 40, fontFace: 'Arial', bold: true, color: colors.primary.yellow
      });

      // Caja semi-transparente
      slide.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
        x: 0.5, y: 1.7, w: 9, h: 3.2,
        fill: { color: colors.primary.green, transparency: 50 },
        line: { color: colors.primary.yellow, width: 2 }
      });

      slide.addText(data.text, {
        x: 0.8, y: 1.9, w: 8.4, h: 2.8,
        fontSize: 17, fontFace: 'Arial', color: colors.primary.white,
        align: 'justify', valign: 'middle'
      });
      break;

    // ==================== SLIDE TYPE: VISION ====================
    case 'vision':
      slide.background = { color: colors.primary.green };

      slide.addText(data.title, {
        x: 0.5, y: 0.8, w: 9, h: 0.7,
        fontSize: 40, fontFace: 'Arial', bold: true, color: colors.primary.yellow
      });

      slide.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
        x: 0.5, y: 1.7, w: 9, h: 3,
        fill: { color: colors.primary.green, transparency: 50 },
        line: { color: colors.primary.yellow, width: 2 }
      });

      slide.addText(data.text, {
        x: 0.8, y: 1.9, w: 8.4, h: 2.6,
        fontSize: 17, fontFace: 'Arial', color: colors.primary.white,
        align: 'justify', valign: 'middle'
      });
      break;

    // ==================== SLIDE TYPE: GRID (Principios) ====================
    case 'grid':
      slide.background = { color: colors.primary.white };
      addColorStripe(slide, 0);
      addColorStripe(slide, 5.55);

      slide.addText(data.title, {
        x: 0.5, y: 0.3, w: 9, h: 0.7,
        fontSize: 36, fontFace: 'Arial', bold: true, color: colors.primary.red
      });

      data.items.forEach((item, idx) => {
        const row = Math.floor(idx / 4);
        const col = idx % 4;
        const x = 0.5 + col * 2.35;
        const y = 1.2 + row * 2.1;

        slide.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
          x: x, y: y, w: 2.1, h: 1.8,
          fill: { color: colors.backgrounds.light },
          line: { color: colors.primary.green, width: 2 }
        });

        slide.addText(item.icon, {
          x: x, y: y + 0.3, w: 2.1, h: 0.7,
          fontSize: 32, align: 'center'
        });

        slide.addText(item.name, {
          x: x, y: y + 1.15, w: 2.1, h: 0.5,
          fontSize: 13, fontFace: 'Arial', bold: true, color: colors.primary.green,
          align: 'center'
        });
      });
      break;

    // ==================== SLIDE TYPE: HIGHLIGHT ====================
    case 'highlight':
      slide.background = { color: colors.backgrounds.light };
      addColorStripe(slide, 0);
      addColorStripe(slide, 5.55);

      slide.addText(data.title, {
        x: 0.5, y: 0.3, w: 9, h: 0.6,
        fontSize: 36, fontFace: 'Arial', bold: true, color: colors.primary.red
      });

      if (data.subtitle) {
        slide.addText(data.subtitle, {
          x: 0.5, y: 0.9, w: 9, h: 0.35,
          fontSize: 18, fontFace: 'Arial', bold: true, color: colors.primary.green
        });
      }

      const startY = data.subtitle ? 1.4 : 1.1;

      data.points.forEach((point, idx) => {
        const y = startY + idx * 0.85;

        // Caja blanca
        slide.addShape(pptx.shapes.RECTANGLE, {
          x: 0.5, y: y, w: 9, h: 0.7,
          fill: { color: colors.primary.white },
          shadow: { type: 'outer', blur: 2, offset: 1, angle: 45, opacity: 0.12 }
        });

        // Círculo verde con número
        slide.addShape(pptx.shapes.OVAL, {
          x: 0.65, y: y + 0.12, w: 0.46, h: 0.46,
          fill: { color: colors.primary.green }
        });

        slide.addText((idx + 1).toString(), {
          x: 0.65, y: y + 0.15, w: 0.46, h: 0.4,
          fontSize: 13, fontFace: 'Arial', bold: true, color: colors.primary.white,
          align: 'center'
        });

        // Texto
        slide.addText(point, {
          x: 1.25, y: y + 0.18, w: 8, h: 0.4,
          fontSize: 15, fontFace: 'Arial', color: colors.neutral.grayDark
        });
      });
      break;

    // ==================== SLIDE TYPE: MAP ====================
    case 'map':
      slide.background = { color: colors.primary.white };
      addColorStripe(slide, 0);
      addColorStripe(slide, 5.55);

      slide.addText(data.title, {
        x: 0.5, y: 0.3, w: 9, h: 0.55,
        fontSize: 36, fontFace: 'Arial', bold: true, color: colors.primary.red
      });

      slide.addText(data.subtitle, {
        x: 0.5, y: 0.85, w: 9, h: 0.35,
        fontSize: 16, fontFace: 'Arial', color: colors.neutral.grayDark
      });

      data.regions.forEach((region, idx) => {
        const row = Math.floor(idx / 3);
        const col = idx % 3;
        const x = 0.5 + col * 3.1;
        const y = 1.4 + row * 2.05;

        slide.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
          x: x, y: y, w: 2.9, h: 1.8,
          fill: { color: colors.primary.green },
          shadow: { type: 'outer', blur: 4, offset: 2, angle: 45, opacity: 0.25 }
        });

        slide.addText(region.name, {
          x: x, y: y + 0.2, w: 2.9, h: 0.45,
          fontSize: 13, fontFace: 'Arial', bold: true, color: colors.primary.white,
          align: 'center'
        });

        slide.addText(region.centers.toString(), {
          x: x, y: y + 0.65, w: 2.9, h: 0.65,
          fontSize: 38, fontFace: 'Arial', bold: true, color: colors.primary.yellow,
          align: 'center'
        });

        slide.addText('Centros de Atención', {
          x: x, y: y + 1.35, w: 2.9, h: 0.3,
          fontSize: 10, fontFace: 'Arial', color: colors.primary.white,
          align: 'center'
        });
      });
      break;

    // ==================== SLIDE TYPE: CONCEPT ====================
    case 'concept':
      slide.background = { color: colors.primary.green };

      slide.addText(data.title, {
        x: 0.5, y: 0.5, w: 9, h: 0.6,
        fontSize: 36, fontFace: 'Arial', bold: true, color: colors.primary.yellow
      });

      slide.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
        x: 0.5, y: 1.3, w: 9, h: 3.2,
        fill: { color: colors.primary.green, transparency: 50 },
        line: { color: colors.primary.yellow, width: 2 }
      });

      slide.addText(data.concept, {
        x: 0.8, y: 1.5, w: 8.4, h: 0.6,
        fontSize: 28, fontFace: 'Arial', bold: true, color: colors.primary.yellow
      });

      slide.addText(data.definition, {
        x: 0.8, y: 2.2, w: 8.4, h: 1.5,
        fontSize: 16, fontFace: 'Arial', color: colors.primary.white,
        align: 'justify'
      });

      slide.addText(`— ${data.author}`, {
        x: 0.8, y: 3.9, w: 8.4, h: 0.4,
        fontSize: 14, fontFace: 'Arial', italic: true, color: colors.primary.white
      });
      break;

    // ==================== SLIDE TYPE: DIMENSIONS ====================
    case 'dimensions':
      slide.background = { color: colors.backgrounds.light };
      addColorStripe(slide, 0);
      addColorStripe(slide, 5.55);

      slide.addText(data.title, {
        x: 0.5, y: 0.3, w: 9, h: 0.55,
        fontSize: 36, fontFace: 'Arial', bold: true, color: colors.primary.red
      });

      slide.addText(data.subtitle, {
        x: 0.5, y: 0.85, w: 9, h: 0.35,
        fontSize: 16, fontFace: 'Arial', color: colors.neutral.grayDark
      });

      data.dimensions.forEach((dim, idx) => {
        const row = Math.floor(idx / 3);
        const col = idx % 3;
        const x = 0.5 + col * 3.1;
        const y = 1.4 + row * 1.9;

        slide.addShape(pptx.shapes.RECTANGLE, {
          x: x, y: y, w: 2.9, h: 1.5,
          fill: { color: colors.primary.white },
          shadow: { type: 'outer', blur: 2, offset: 1, angle: 45, opacity: 0.12 }
        });

        slide.addShape(pptx.shapes.RECTANGLE, {
          x: x, y: y, w: 2.9, h: 0.08, fill: { color: colors.primary.green }
        });

        slide.addText(dim, {
          x: x, y: y + 0.45, w: 2.9, h: 0.6,
          fontSize: 18, fontFace: 'Arial', bold: true, color: colors.primary.green,
          align: 'center', valign: 'middle'
        });
      });
      break;

    // ==================== SLIDE TYPE: COMPETENCIES ====================
    case 'competencies':
      slide.background = { color: colors.primary.white };
      addColorStripe(slide, 0);
      addColorStripe(slide, 5.55);

      slide.addText(data.title, {
        x: 0.5, y: 0.3, w: 9, h: 0.7,
        fontSize: 36, fontFace: 'Arial', bold: true, color: colors.primary.red
      });

      data.areas.forEach((area, idx) => {
        const row = Math.floor(idx / 2);
        const col = idx % 2;
        const x = col === 0 ? 0.5 : 5;
        const y = 1.2 + row * 2.1;

        slide.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
          x: x, y: y, w: 4.3, h: 1.7,
          fill: { color: colors.primary.green },
          shadow: { type: 'outer', blur: 3, offset: 2, angle: 45, opacity: 0.2 }
        });

        slide.addText(area.name, {
          x: x, y: y + 0.35, w: 4.3, h: 0.6,
          fontSize: 22, fontFace: 'Arial', bold: true, color: colors.primary.white,
          align: 'center'
        });

        slide.addText(area.desc, {
          x: x, y: y + 1, w: 4.3, h: 0.45,
          fontSize: 14, fontFace: 'Arial', color: colors.primary.white,
          align: 'center'
        });
      });
      break;

    // ==================== SLIDE TYPE: MODALITIES ====================
    case 'modalities':
      slide.background = { color: colors.backgrounds.light };
      addColorStripe(slide, 0);
      addColorStripe(slide, 5.55);

      slide.addText(data.title, {
        x: 0.5, y: 0.3, w: 9, h: 0.7,
        fontSize: 36, fontFace: 'Arial', bold: true, color: colors.primary.red
      });

      data.modalities.forEach((mod, idx) => {
        const y = 1.1 + idx * 0.88;

        // Caja blanca
        slide.addShape(pptx.shapes.RECTANGLE, {
          x: 0.5, y: y, w: 9, h: 0.72,
          fill: { color: colors.primary.white },
          shadow: { type: 'outer', blur: 2, offset: 1, angle: 45, opacity: 0.12 }
        });

        // Barra verde izquierda
        slide.addShape(pptx.shapes.RECTANGLE, {
          x: 0.5, y: y, w: 0.08, h: 0.72, fill: { color: colors.primary.green }
        });

        // Caja verde con nombre
        slide.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
          x: 0.7, y: y + 0.11, w: 1.9, h: 0.5, fill: { color: colors.primary.green }
        });

        slide.addText(mod.name, {
          x: 0.7, y: y + 0.16, w: 1.9, h: 0.4,
          fontSize: 13, fontFace: 'Arial', bold: true, color: colors.primary.white,
          align: 'center'
        });

        slide.addText(mod.desc, {
          x: 2.8, y: y + 0.2, w: 6.5, h: 0.4,
          fontSize: 14, fontFace: 'Arial', color: colors.neutral.grayDark
        });
      });
      break;

    // ==================== SLIDE TYPE: STATS ====================
    case 'stats':
      slide.background = { color: colors.primary.green };

      slide.addText(data.title, {
        x: 0.5, y: 0.4, w: 9, h: 0.55,
        fontSize: 36, fontFace: 'Arial', bold: true, color: colors.primary.white
      });

      slide.addText(data.subtitle, {
        x: 0.5, y: 0.95, w: 9, h: 0.35,
        fontSize: 16, fontFace: 'Arial', color: colors.primary.white
      });

      data.stats.forEach((stat, idx) => {
        const row = Math.floor(idx / 2);
        const col = idx % 2;
        const x = col === 0 ? 0.5 : 5;
        const y = 1.5 + row * 1.95;

        slide.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
          x: x, y: y, w: 4.3, h: 1.65,
          fill: { color: colors.primary.green, transparency: 50 },
          line: { color: colors.primary.yellow, width: 2 }
        });

        slide.addText(stat.value, {
          x: x, y: y + 0.2, w: 4.3, h: 0.75,
          fontSize: 44, fontFace: 'Arial', bold: true, color: colors.primary.yellow,
          align: 'center'
        });

        slide.addText(stat.label, {
          x: x, y: y + 1.05, w: 4.3, h: 0.4,
          fontSize: 15, fontFace: 'Arial', color: colors.primary.white,
          align: 'center'
        });
      });
      break;

    // ==================== SLIDE TYPE: CHALLENGES ====================
    case 'challenges':
      slide.background = { color: colors.primary.white };
      addColorStripe(slide, 0);
      addColorStripe(slide, 5.55);

      slide.addText(data.title, {
        x: 0.5, y: 0.3, w: 9, h: 0.7,
        fontSize: 36, fontFace: 'Arial', bold: true, color: colors.primary.red
      });

      data.challenges.forEach((challenge, idx) => {
        const y = 1.1 + idx * 0.8;

        // Fondo rosa claro
        slide.addShape(pptx.shapes.RECTANGLE, {
          x: 0.5, y: y, w: 9, h: 0.65, fill: { color: colors.backgrounds.redLight }
        });

        // Barra roja izquierda
        slide.addShape(pptx.shapes.RECTANGLE, {
          x: 0.5, y: y, w: 0.08, h: 0.65, fill: { color: colors.primary.red }
        });

        // Círculo rojo con !
        slide.addShape(pptx.shapes.OVAL, {
          x: 0.7, y: y + 0.1, w: 0.45, h: 0.45, fill: { color: colors.primary.red }
        });

        slide.addText('!', {
          x: 0.7, y: y + 0.1, w: 0.45, h: 0.45,
          fontSize: 18, fontFace: 'Arial', bold: true, color: colors.primary.white,
          align: 'center', valign: 'middle'
        });

        slide.addText(challenge, {
          x: 1.3, y: y + 0.17, w: 8, h: 0.35,
          fontSize: 14, fontFace: 'Arial', color: colors.neutral.grayDark
        });
      });
      break;

    // ==================== SLIDE TYPE: INFRASTRUCTURE ====================
    case 'infrastructure':
      slide.background = { color: colors.backgrounds.light };
      addColorStripe(slide, 0);
      addColorStripe(slide, 5.55);

      slide.addText(data.title, {
        x: 0.5, y: 0.3, w: 9, h: 0.55,
        fontSize: 36, fontFace: 'Arial', bold: true, color: colors.primary.red
      });

      slide.addText(data.subtitle, {
        x: 0.5, y: 0.85, w: 9, h: 0.35,
        fontSize: 16, fontFace: 'Arial', color: colors.neutral.grayDark
      });

      data.items.forEach((item, idx) => {
        const row = Math.floor(idx / 2);
        const col = idx % 2;
        const x = col === 0 ? 0.5 : 5;
        const y = 1.35 + row * 1.35;

        slide.addShape(pptx.shapes.RECTANGLE, {
          x: x, y: y, w: 4.3, h: 1.05,
          fill: { color: colors.primary.white },
          shadow: { type: 'outer', blur: 2, offset: 1, angle: 45, opacity: 0.12 }
        });

        slide.addText('✓', {
          x: x + 0.15, y: y + 0.28, w: 0.4, h: 0.5,
          fontSize: 22, fontFace: 'Arial', bold: true, color: colors.primary.green
        });

        slide.addText(item, {
          x: x + 0.55, y: y + 0.33, w: 3.6, h: 0.45,
          fontSize: 12, fontFace: 'Arial', color: colors.neutral.grayDark
        });
      });
      break;

    // ==================== SLIDE TYPE: PROGRAMS ====================
    case 'programs':
      slide.background = { color: colors.primary.white };
      addColorStripe(slide, 0);
      addColorStripe(slide, 5.55);

      slide.addText(data.title, {
        x: 0.5, y: 0.3, w: 9, h: 0.55,
        fontSize: 36, fontFace: 'Arial', bold: true, color: colors.primary.red
      });

      slide.addText(data.subtitle, {
        x: 0.5, y: 0.85, w: 9, h: 0.35,
        fontSize: 16, fontFace: 'Arial', color: colors.neutral.grayDark
      });

      data.faculties.forEach((faculty, idx) => {
        const y = 1.35 + idx * 2.05;

        // Fondo gris
        slide.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
          x: 0.5, y: y, w: 9, h: 1.85, fill: { color: colors.backgrounds.light }
        });

        // Nombre facultad
        slide.addText(faculty.name, {
          x: 0.7, y: y + 0.15, w: 5, h: 0.45,
          fontSize: 18, fontFace: 'Arial', bold: true, color: colors.primary.green
        });

        // Badge con cantidad
        slide.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
          x: 7, y: y + 0.12, w: 2.2, h: 0.5, fill: { color: colors.primary.green }
        });

        slide.addText(`${faculty.count} Programas`, {
          x: 7, y: y + 0.17, w: 2.2, h: 0.4,
          fontSize: 12, fontFace: 'Arial', bold: true, color: colors.primary.white,
          align: 'center'
        });

        // Programas individuales
        faculty.programs.forEach((program, pidx) => {
          const px = 0.7 + pidx * 2.15;

          slide.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
            x: px, y: y + 0.8, w: 2, h: 0.85,
            fill: { color: colors.primary.white },
            shadow: { type: 'outer', blur: 2, offset: 1, angle: 45, opacity: 0.1 }
          });

          slide.addText(program, {
            x: px, y: y + 1.02, w: 2, h: 0.45,
            fontSize: 10, fontFace: 'Arial', color: colors.neutral.grayDark,
            align: 'center'
          });
        });
      });
      break;

    // ==================== SLIDE TYPE: RESEARCH ====================
    case 'research':
      slide.background = { color: colors.primary.white };
      addColorStripe(slide, 0);
      addColorStripe(slide, 5.55);

      slide.addText(data.title, {
        x: 0.5, y: 0.3, w: 9, h: 0.6,
        fontSize: 36, fontFace: 'Arial', bold: true, color: colors.primary.red
      });

      slide.addText('Grupos de Investigación', {
        x: 0.5, y: 0.95, w: 9, h: 0.35,
        fontSize: 18, fontFace: 'Arial', bold: true, color: colors.primary.green
      });

      data.groups.forEach((group, idx) => {
        const x = 0.5 + idx * 4.5;

        slide.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
          x: x, y: 1.4, w: 4.2, h: 1.25, fill: { color: colors.secondary.blue }
        });

        slide.addText(group.name, {
          x: x, y: 1.5, w: 4.2, h: 0.4,
          fontSize: 18, fontFace: 'Arial', bold: true, color: colors.primary.white,
          align: 'center'
        });

        slide.addText(`Categoría ${group.category}`, {
          x: x, y: 1.92, w: 4.2, h: 0.3,
          fontSize: 12, fontFace: 'Arial', color: colors.primary.white,
          align: 'center'
        });

        slide.addText(group.area, {
          x: x, y: 2.22, w: 4.2, h: 0.25,
          fontSize: 10, fontFace: 'Arial', color: colors.primary.white,
          align: 'center'
        });
      });

      slide.addText('Logros Recientes', {
        x: 0.5, y: 2.85, w: 9, h: 0.35,
        fontSize: 18, fontFace: 'Arial', bold: true, color: colors.primary.green
      });

      data.achievements.forEach((ach, idx) => {
        const row = Math.floor(idx / 2);
        const col = idx % 2;
        const x = 0.5 + col * 4.5;
        const y = 3.3 + row * 0.75;

        slide.addShape(pptx.shapes.RECTANGLE, {
          x: x, y: y, w: 4.2, h: 0.6, fill: { color: colors.backgrounds.light }
        });

        slide.addShape(pptx.shapes.RECTANGLE, {
          x: x, y: y, w: 0.08, h: 0.6, fill: { color: colors.primary.green }
        });

        slide.addText(`✓ ${ach}`, {
          x: x + 0.15, y: y + 0.15, w: 4, h: 0.35,
          fontSize: 11, fontFace: 'Arial', color: colors.neutral.grayDark
        });
      });
      break;

    // ==================== SLIDE TYPE: ODS ====================
    case 'ods':
      slide.background = { color: colors.secondary.blue };

      slide.addText(data.title, {
        x: 0.5, y: 0.5, w: 9, h: 0.7,
        fontSize: 36, fontFace: 'Arial', bold: true, color: colors.primary.white
      });

      data.objectives.forEach((obj, idx) => {
        const x = 0.5 + idx * 1.88;

        slide.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
          x: x, y: 1.5, w: 1.7, h: 2.7,
          fill: { color: colors.secondary.blue, transparency: 40 },
          line: { color: colors.primary.white, width: 2 }
        });

        slide.addText(obj.number.toString(), {
          x: x, y: 1.7, w: 1.7, h: 1,
          fontSize: 48, fontFace: 'Arial', bold: true, color: colors.primary.yellow,
          align: 'center'
        });

        slide.addText(obj.name, {
          x: x, y: 2.95, w: 1.7, h: 1,
          fontSize: 11, fontFace: 'Arial', color: colors.primary.white,
          align: 'center'
        });
      });
      break;

    // ==================== SLIDE TYPE: REQUIREMENTS ====================
    case 'requirements':
      slide.background = { color: colors.primary.white };
      addColorStripe(slide, 0);
      addColorStripe(slide, 5.55);

      slide.addText(data.title, {
        x: 0.5, y: 0.3, w: 9, h: 0.55,
        fontSize: 34, fontFace: 'Arial', bold: true, color: colors.primary.red
      });

      slide.addText(data.subtitle, {
        x: 0.5, y: 0.85, w: 9, h: 0.35,
        fontSize: 16, fontFace: 'Arial', color: colors.neutral.grayDark
      });

      data.requirements.forEach((req, idx) => {
        const y = 1.35 + idx * 0.82;

        slide.addShape(pptx.shapes.RECTANGLE, {
          x: 0.5, y: y, w: 9, h: 0.68,
          fill: { color: colors.backgrounds.light },
          shadow: { type: 'outer', blur: 2, offset: 1, angle: 45, opacity: 0.08 }
        });

        slide.addText(req.item, {
          x: 0.7, y: y + 0.18, w: 6, h: 0.35,
          fontSize: 15, fontFace: 'Arial', color: colors.neutral.grayDark
        });

        slide.addText(req.status, {
          x: 6.7, y: y + 0.18, w: 2.6, h: 0.35,
          fontSize: 14, fontFace: 'Arial', bold: true, color: colors.primary.green,
          align: 'right'
        });
      });
      break;

    // ==================== SLIDE TYPE: STRUCTURE ====================
    case 'structure':
      slide.background = { color: colors.backgrounds.light };
      addColorStripe(slide, 0);
      addColorStripe(slide, 5.55);

      slide.addText(data.title, {
        x: 0.5, y: 0.3, w: 9, h: 0.7,
        fontSize: 34, fontFace: 'Arial', bold: true, color: colors.primary.red
      });

      data.levels.forEach((level, idx) => {
        const marginLeft = idx * 0.35;
        const y = 1.15 + idx * 0.72;

        slide.addShape(pptx.shapes.RECTANGLE, {
          x: 0.5 + marginLeft, y: y, w: 8.5 - marginLeft, h: 0.58,
          fill: { color: colors.primary.white },
          shadow: { type: 'outer', blur: 2, offset: 1, angle: 45, opacity: 0.12 }
        });

        slide.addShape(pptx.shapes.RECTANGLE, {
          x: 0.5 + marginLeft, y: y, w: 0.08, h: 0.58, fill: { color: colors.primary.green }
        });

        slide.addText(level, {
          x: 0.7 + marginLeft, y: y + 0.14, w: 8, h: 0.35,
          fontSize: 14, fontFace: 'Arial', bold: true, color: colors.neutral.grayDark
        });
      });
      break;

    // ==================== SLIDE TYPE: FACULTIES ====================
    case 'faculties':
      slide.background = { color: colors.primary.white };
      addColorStripe(slide, 0);
      addColorStripe(slide, 5.55);

      slide.addText(data.title, {
        x: 0.5, y: 0.3, w: 9, h: 0.7,
        fontSize: 34, fontFace: 'Arial', bold: true, color: colors.primary.red
      });

      slide.addText('Facultades Actuales', {
        x: 0.5, y: 1.05, w: 9, h: 0.35,
        fontSize: 18, fontFace: 'Arial', bold: true, color: colors.primary.green
      });

      data.current.forEach((faculty, idx) => {
        slide.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
          x: 0.5, y: 1.5 + idx * 0.72, w: 9, h: 0.58, fill: { color: colors.primary.green }
        });

        slide.addText(faculty, {
          x: 0.5, y: 1.58 + idx * 0.72, w: 9, h: 0.4,
          fontSize: 16, fontFace: 'Arial', bold: true, color: colors.primary.white,
          align: 'center'
        });
      });

      slide.addText('Facultades Proyectadas', {
        x: 0.5, y: 3.1, w: 9, h: 0.35,
        fontSize: 18, fontFace: 'Arial', bold: true, color: colors.secondary.blue
      });

      data.projected.forEach((faculty, idx) => {
        slide.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
          x: 0.5, y: 3.55 + idx * 0.72, w: 9, h: 0.58, fill: { color: colors.secondary.blue }
        });

        slide.addText(faculty, {
          x: 0.5, y: 3.63 + idx * 0.72, w: 9, h: 0.4,
          fontSize: 16, fontFace: 'Arial', bold: true, color: colors.primary.white,
          align: 'center'
        });
      });
      break;

    // ==================== SLIDE TYPE: EXPANSION ====================
    case 'expansion':
      slide.background = { color: colors.backgrounds.light };
      addColorStripe(slide, 0);
      addColorStripe(slide, 5.55);

      slide.addText(data.title, {
        x: 0.5, y: 0.3, w: 9, h: 0.55,
        fontSize: 34, fontFace: 'Arial', bold: true, color: colors.primary.red
      });

      slide.addText(data.subtitle, {
        x: 0.5, y: 0.85, w: 9, h: 0.35,
        fontSize: 16, fontFace: 'Arial', color: colors.neutral.grayDark
      });

      data.programs.forEach((program, idx) => {
        slide.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
          x: 0.5, y: 1.35 + idx * 0.72, w: 9, h: 0.58, fill: { color: colors.secondary.blue }
        });

        slide.addText(`• ${program}`, {
          x: 0.7, y: 1.43 + idx * 0.72, w: 8.5, h: 0.4,
          fontSize: 14, fontFace: 'Arial', bold: true, color: colors.primary.white
        });
      });

      slide.addText('Áreas de Expansión', {
        x: 0.5, y: 3.7, w: 9, h: 0.35,
        fontSize: 18, fontFace: 'Arial', bold: true, color: colors.primary.green
      });

      data.areas.forEach((area, idx) => {
        const x = 0.5 + idx * 3.1;

        slide.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
          x: x, y: 4.15, w: 2.9, h: 0.7,
          fill: { color: colors.primary.white },
          line: { color: colors.primary.green, width: 2 }
        });

        slide.addText(area, {
          x: x, y: 4.28, w: 2.9, h: 0.45,
          fontSize: 11, fontFace: 'Arial', bold: true, color: colors.primary.green,
          align: 'center'
        });
      });
      break;

    // ==================== SLIDE TYPE: SYSTEM ====================
    case 'system':
      slide.background = { color: colors.secondary.blue };

      slide.addText(data.title, {
        x: 0.5, y: 0.4, w: 9, h: 0.55,
        fontSize: 36, fontFace: 'Arial', bold: true, color: colors.primary.white
      });

      slide.addText(data.subtitle, {
        x: 0.5, y: 0.95, w: 9, h: 0.35,
        fontSize: 16, fontFace: 'Arial', color: colors.primary.white
      });

      data.lines.forEach((line, idx) => {
        const row = Math.floor(idx / 2);
        const col = idx % 2;
        const x = col === 0 ? 0.5 : 5;
        const y = 1.45 + row * 1.35;

        slide.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
          x: x, y: y, w: 4.3, h: 1.05,
          fill: { color: colors.secondary.blue, transparency: 40 },
          line: { color: colors.primary.white, width: 2 }
        });

        slide.addText(`🔬 ${line}`, {
          x: x + 0.2, y: y + 0.32, w: 4, h: 0.5,
          fontSize: 12, fontFace: 'Arial', color: colors.primary.white
        });
      });
      break;

    // ==================== SLIDE TYPE: EXTENSION ====================
    case 'extension':
      slide.background = { color: colors.primary.white };
      addColorStripe(slide, 0);
      addColorStripe(slide, 5.55);

      slide.addText(data.title, {
        x: 0.5, y: 0.3, w: 9, h: 0.7,
        fontSize: 36, fontFace: 'Arial', bold: true, color: colors.primary.red
      });

      data.modalities.forEach((mod, idx) => {
        const y = 1.1 + idx * 0.88;

        slide.addShape(pptx.shapes.RECTANGLE, {
          x: 0.5, y: y, w: 9, h: 0.72,
          fill: { color: colors.backgrounds.light },
          shadow: { type: 'outer', blur: 2, offset: 1, angle: 45, opacity: 0.1 }
        });

        slide.addShape(pptx.shapes.RECTANGLE, {
          x: 0.5, y: y, w: 0.08, h: 0.72, fill: { color: colors.primary.green }
        });

        slide.addText(mod.type, {
          x: 0.7, y: y + 0.18, w: 2.2, h: 0.4,
          fontSize: 16, fontFace: 'Arial', bold: true, color: colors.primary.green
        });

        slide.addText(mod.desc, {
          x: 3.2, y: y + 0.2, w: 6, h: 0.4,
          fontSize: 13, fontFace: 'Arial', color: colors.neutral.grayDark
        });
      });
      break;

    // ==================== SLIDE TYPE: NEXO ====================
    case 'nexo':
      slide.background = { color: colors.secondary.blue };

      slide.addText(data.title, {
        x: 0.5, y: 0.4, w: 9, h: 0.55,
        fontSize: 32, fontFace: 'Arial', bold: true, color: colors.primary.white
      });

      slide.addText(data.subtitle, {
        x: 0.5, y: 0.95, w: 9, h: 0.35,
        fontSize: 16, fontFace: 'Arial', color: colors.primary.white
      });

      data.functions.forEach((func, idx) => {
        const y = 1.45 + idx * 0.82;

        slide.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
          x: 0.5, y: y, w: 9, h: 0.68,
          fill: { color: colors.secondary.blue, transparency: 40 },
          line: { color: colors.primary.white, width: 2 }
        });

        // Círculo amarillo con número
        slide.addShape(pptx.shapes.OVAL, {
          x: 0.7, y: y + 0.12, w: 0.44, h: 0.44,
          fill: { color: colors.primary.yellow }
        });

        slide.addText((idx + 1).toString(), {
          x: 0.7, y: y + 0.14, w: 0.44, h: 0.4,
          fontSize: 13, fontFace: 'Arial', bold: true, color: colors.neutral.black,
          align: 'center'
        });

        slide.addText(func, {
          x: 1.3, y: y + 0.18, w: 8, h: 0.4,
          fontSize: 14, fontFace: 'Arial', color: colors.primary.white
        });
      });
      break;

    // ==================== SLIDE TYPE: PROFILE ====================
    case 'profile':
      slide.background = { color: colors.backgrounds.light };
      addColorStripe(slide, 0);
      addColorStripe(slide, 5.55);

      slide.addText(data.title, {
        x: 0.5, y: 0.3, w: 9, h: 0.7,
        fontSize: 36, fontFace: 'Arial', bold: true, color: colors.primary.red
      });

      data.competencies.forEach((comp, idx) => {
        const row = Math.floor(idx / 2);
        const col = idx % 2;
        let x, y;

        // Si es impar y es el último, centrarlo
        if (data.competencies.length % 2 === 1 && idx === data.competencies.length - 1) {
          x = 2.75;
          y = 1.15 + row * 1.1;
        } else {
          x = col === 0 ? 0.5 : 5;
          y = 1.15 + row * 1.1;
        }

        slide.addShape(pptx.shapes.RECTANGLE, {
          x: x, y: y, w: 4.3, h: 0.9,
          fill: { color: colors.primary.white },
          shadow: { type: 'outer', blur: 2, offset: 1, angle: 45, opacity: 0.12 }
        });

        slide.addShape(pptx.shapes.RECTANGLE, {
          x: x, y: y, w: 0.08, h: 0.9, fill: { color: colors.primary.green }
        });

        slide.addText(`✓ ${comp}`, {
          x: x + 0.2, y: y + 0.28, w: 4, h: 0.4,
          fontSize: 13, fontFace: 'Arial', bold: true, color: colors.neutral.grayDark
        });
      });
      break;

    // ==================== SLIDE TYPE: WELLNESS ====================
    case 'wellness':
      slide.background = { color: colors.primary.white };
      addColorStripe(slide, 0);
      addColorStripe(slide, 5.55);

      slide.addText(data.title, {
        x: 0.5, y: 0.3, w: 9, h: 0.7,
        fontSize: 34, fontFace: 'Arial', bold: true, color: colors.primary.red
      });

      data.components.forEach((comp, idx) => {
        const row = Math.floor(idx / 2);
        const col = idx % 2;
        let x, y;

        // Si es impar y es el último, centrarlo
        if (data.components.length % 2 === 1 && idx === data.components.length - 1) {
          x = 2.75;
          y = 1.1 + row * 1.1;
        } else {
          x = col === 0 ? 0.5 : 5;
          y = 1.1 + row * 1.1;
        }

        slide.addShape(pptx.shapes.RECTANGLE, {
          x: x, y: y, w: 4.3, h: 0.9, fill: { color: colors.backgrounds.light }
        });

        slide.addShape(pptx.shapes.RECTANGLE, {
          x: x, y: y, w: 4.3, h: 0.08, fill: { color: colors.primary.green }
        });

        slide.addText(comp, {
          x: x + 0.2, y: y + 0.32, w: 4, h: 0.4,
          fontSize: 13, fontFace: 'Arial', bold: true, color: colors.neutral.grayDark
        });
      });
      break;

    // ==================== SLIDE TYPE: INTERNATIONAL ====================
    case 'international':
      slide.background = { color: colors.secondary.blue };

      slide.addText(data.title, {
        x: 0.5, y: 0.4, w: 9, h: 0.7,
        fontSize: 40, fontFace: 'Arial', bold: true, color: colors.primary.white
      });

      data.dimensions.forEach((dim, idx) => {
        const row = Math.floor(idx / 2);
        const col = idx % 2;
        const x = col === 0 ? 0.5 : 5;
        const y = 1.3 + row * 1.4;

        slide.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
          x: x, y: y, w: 4.3, h: 1.15,
          fill: { color: colors.secondary.blue, transparency: 40 },
          line: { color: colors.primary.white, width: 2 }
        });

        slide.addText(`🌍 ${dim}`, {
          x: x + 0.2, y: y + 0.38, w: 4, h: 0.5,
          fontSize: 12, fontFace: 'Arial', color: colors.primary.white
        });
      });
      break;

    // ==================== SLIDE TYPE: MANAGEMENT ====================
    case 'management':
      slide.background = { color: colors.primary.white };
      addColorStripe(slide, 0);
      addColorStripe(slide, 5.55);

      slide.addText(data.title, {
        x: 0.5, y: 0.3, w: 9, h: 0.7,
        fontSize: 36, fontFace: 'Arial', bold: true, color: colors.primary.red
      });

      data.principles.forEach((principle, idx) => {
        const row = Math.floor(idx / 2);
        const col = idx % 2;
        const x = col === 0 ? 0.5 : 5;
        const y = 1.15 + row * 1.4;

        slide.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
          x: x, y: y, w: 4.3, h: 1.15,
          fill: { color: colors.primary.green },
          shadow: { type: 'outer', blur: 3, offset: 2, angle: 45, opacity: 0.2 }
        });

        slide.addText(`⚙️ ${principle}`, {
          x: x + 0.25, y: y + 0.38, w: 3.9, h: 0.5,
          fontSize: 13, fontFace: 'Arial', bold: true, color: colors.primary.white
        });
      });
      break;

    // ==================== SLIDE TYPE: COMMITMENTS ====================
    case 'commitments':
      slide.background = { color: colors.primary.green };

      slide.addText(data.title, {
        x: 0.5, y: 0.4, w: 9, h: 0.6,
        fontSize: 40, fontFace: 'Arial', bold: true, color: colors.primary.yellow
      });

      data.items.forEach((item, idx) => {
        const y = 1.15 + idx * 0.75;

        slide.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
          x: 0.5, y: y, w: 9, h: 0.62,
          fill: { color: colors.primary.green, transparency: 50 },
          line: { color: colors.primary.yellow, width: 2 }
        });

        // Círculo amarillo con check
        slide.addShape(pptx.shapes.OVAL, {
          x: 0.7, y: y + 0.1, w: 0.42, h: 0.42,
          fill: { color: colors.primary.yellow }
        });

        slide.addText('✓', {
          x: 0.7, y: y + 0.08, w: 0.42, h: 0.44,
          fontSize: 14, fontFace: 'Arial', bold: true, color: colors.primary.green,
          align: 'center', valign: 'middle'
        });

        slide.addText(item, {
          x: 1.25, y: y + 0.15, w: 8, h: 0.38,
          fontSize: 15, fontFace: 'Arial', color: colors.primary.white
        });
      });
      break;

    // ==================== SLIDE TYPE: VISION2034 ====================
    case 'vision2034':
      slide.background = { color: colors.secondary.blue };

      slide.addText(data.title, {
        x: 0.5, y: 0.3, w: 9, h: 0.65,
        fontSize: 44, fontFace: 'Arial', bold: true, color: colors.primary.yellow
      });

      slide.addText(data.subtitle, {
        x: 0.5, y: 0.95, w: 9, h: 0.38,
        fontSize: 18, fontFace: 'Arial', color: colors.primary.white
      });

      data.goals.forEach((goal, idx) => {
        const row = Math.floor(idx / 2);
        const col = idx % 2;
        const x = col === 0 ? 0.5 : 5;
        const y = 1.5 + row * 1.35;

        slide.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
          x: x, y: y, w: 4.3, h: 1.05,
          fill: { color: colors.secondary.blue, transparency: 40 },
          line: { color: colors.primary.yellow, width: 2 }
        });

        slide.addText(`🎯 ${goal}`, {
          x: x + 0.2, y: y + 0.32, w: 4, h: 0.5,
          fontSize: 11, fontFace: 'Arial', color: colors.primary.white
        });
      });
      break;

    // ==================== SLIDE TYPE: CLOSING ====================
    case 'closing':
      slide.background = { color: colors.primary.green };

      slide.addText(data.title, {
        x: 0.5, y: 0.9, w: 9, h: 0.75,
        fontSize: 40, fontFace: 'Arial', bold: true, color: colors.primary.yellow,
        align: 'center'
      });

      slide.addText(data.subtitle, {
        x: 0.5, y: 1.7, w: 9, h: 0.45,
        fontSize: 20, fontFace: 'Arial', color: colors.primary.white,
        align: 'center'
      });

      // Caja de cita
      slide.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
        x: 1, y: 2.35, w: 8, h: 1.5,
        fill: { color: colors.primary.green, transparency: 50 },
        line: { color: colors.primary.yellow, width: 2 }
      });

      slide.addText(data.quote, {
        x: 1.2, y: 2.5, w: 7.6, h: 1.2,
        fontSize: 13, fontFace: 'Arial', italic: true, color: colors.primary.white,
        align: 'center'
      });

      slide.addText(data.footer, {
        x: 0.5, y: 4.05, w: 9, h: 0.38,
        fontSize: 16, fontFace: 'Arial', color: colors.primary.white,
        align: 'center'
      });

      slide.addText('vigilado Mineducación', {
        x: 0.5, y: 4.45, w: 9, h: 0.28,
        fontSize: 11, fontFace: 'Arial', italic: true, color: colors.primary.white,
        align: 'center'
      });

      slide.addText('🌱', {
        x: 0.5, y: 4.8, w: 9, h: 0.45,
        fontSize: 30, align: 'center'
      });
      break;
  }
});

// ============================================================================
// GUARDAR ARCHIVO
// ============================================================================
const outputPath = '/home/user/ISER-PEI/PEI-UniRural-Presentacion.pptx';

pptx.writeFile({ fileName: outputPath })
  .then(fileName => {
    console.log(`✅ Presentación PPTX creada exitosamente!`);
    console.log(`📁 Archivo: ${fileName}`);
    console.log(`📊 Total de diapositivas: ${slidesData.length}`);
  })
  .catch(err => {
    console.error('❌ Error al crear la presentación:', err);
  });
