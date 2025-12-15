const PptxGenJS = require('pptxgenjs');

// Colores corporativos ISER (sin #)
const colors = {
  primary: {
    green: '1B9E88',
    yellow: 'FCBD05',
    red: 'EB4335',
    white: 'FFFFFF'
  },
  secondary: {
    orange: 'E27C32',
    lime: 'CFDA4B',
    blue: '5894EF',
    magenta: 'C82260'
  },
  neutral: {
    grayLight: 'CFCFCF',
    grayMedium: '9C9C9B',
    grayDark: '646363',
    black: '000000'
  }
};

// Crear presentación
const pptx = new PptxGenJS();

// Configuración general
pptx.author = 'ISER - UniRural';
pptx.title = 'Proyecto Educativo Institucional - PEI';
pptx.subject = 'Cambio de Carácter Académico - Horizonte 2034';
pptx.company = 'Institución Universitaria de Educación Rural';
pptx.layout = 'LAYOUT_16x9';

// Definir master slides
pptx.defineSlideMaster({
  title: 'ISER_TITLE',
  background: { color: colors.primary.green },
  objects: [
    { rect: { x: 0, y: 0, w: '100%', h: 0.1, fill: { color: colors.primary.green } } },
    { rect: { x: 0, y: 0.1, w: '33.33%', h: 0.05, fill: { color: colors.primary.green } } },
    { rect: { x: '33.33%', y: 0.1, w: '33.34%', h: 0.05, fill: { color: colors.primary.yellow } } },
    { rect: { x: '66.67%', y: 0.1, w: '33.33%', h: 0.05, fill: { color: colors.primary.red } } }
  ]
});

pptx.defineSlideMaster({
  title: 'ISER_CONTENT',
  background: { color: colors.primary.white },
  objects: [
    { rect: { x: 0, y: 0, w: '33.33%', h: 0.05, fill: { color: colors.primary.green } } },
    { rect: { x: '33.33%', y: 0, w: '33.34%', h: 0.05, fill: { color: colors.primary.yellow } } },
    { rect: { x: '66.67%', y: 0, w: '33.33%', h: 0.05, fill: { color: colors.primary.red } } },
    { rect: { x: 0, y: '98%', w: '33.33%', h: 0.05, fill: { color: colors.primary.green } } },
    { rect: { x: '33.33%', y: '98%', w: '33.34%', h: 0.05, fill: { color: colors.primary.yellow } } },
    { rect: { x: '66.67%', y: '98%', w: '33.33%', h: 0.05, fill: { color: colors.primary.red } } }
  ]
});

// ==================== SLIDE 1: PORTADA ====================
let slide = pptx.addSlide({ masterName: 'ISER_TITLE' });
slide.background = { color: colors.primary.green };

slide.addText('Proyecto Educativo Institucional', {
  x: 0.5, y: 1.8, w: '90%', h: 1,
  fontSize: 44, fontFace: 'Arial', bold: true, color: colors.primary.white,
  align: 'center'
});

slide.addText('Institución Universitaria de Educación Rural - UniRural', {
  x: 0.5, y: 2.9, w: '90%', h: 0.6,
  fontSize: 24, fontFace: 'Arial', color: colors.primary.white,
  align: 'center'
});

slide.addShape(pptx.shapes.RECTANGLE, {
  x: 3.5, y: 3.7, w: 3, h: 0.05, fill: { color: colors.primary.yellow }
});

slide.addText('Cambio de Carácter Académico', {
  x: 0.5, y: 3.9, w: '90%', h: 0.5,
  fontSize: 20, fontFace: 'Arial', color: colors.primary.white,
  align: 'center'
});

slide.addText('Horizonte 2034', {
  x: 0.5, y: 4.5, w: '90%', h: 0.5,
  fontSize: 18, fontFace: 'Arial', color: colors.primary.yellow,
  align: 'center', bold: true
});

slide.addText('vigilado Mineducación', {
  x: 0.5, y: 5.1, w: '90%', h: 0.3,
  fontSize: 12, fontFace: 'Arial', color: colors.primary.white,
  align: 'center', italic: true
});

// ==================== SLIDE 2: AGENDA ====================
slide = pptx.addSlide({ masterName: 'ISER_CONTENT' });

slide.addText('Agenda de Presentación', {
  x: 0.5, y: 0.3, w: '90%', h: 0.8,
  fontSize: 36, fontFace: 'Arial', bold: true, color: colors.primary.red
});

const agendaItems = [
  'Identidad Institucional',
  'Fundamentos y Lineamientos',
  'Justificación del Cambio de Carácter',
  'Estructura Académica',
  'Comunidad Académica',
  'Modelo de Gestión'
];

agendaItems.forEach((item, idx) => {
  const row = Math.floor(idx / 2);
  const col = idx % 2;
  const x = col === 0 ? 0.5 : 5.2;
  const y = 1.3 + row * 1.3;

  slide.addShape(pptx.shapes.RECTANGLE, {
    x: x, y: y, w: 4.5, h: 1,
    fill: { color: 'F5F5F5' },
    line: { color: colors.primary.green, width: 0, pt: 0 }
  });

  slide.addShape(pptx.shapes.RECTANGLE, {
    x: x, y: y, w: 0.08, h: 1,
    fill: { color: colors.primary.green }
  });

  slide.addText((idx + 1).toString(), {
    x: x + 0.2, y: y + 0.25, w: 0.5, h: 0.5,
    fontSize: 24, fontFace: 'Arial', bold: true, color: colors.primary.green
  });

  slide.addText(item, {
    x: x + 0.7, y: y + 0.3, w: 3.5, h: 0.5,
    fontSize: 16, fontFace: 'Arial', color: colors.neutral.grayDark
  });
});

// ==================== SLIDE 3: TIMELINE ====================
slide = pptx.addSlide({ masterName: 'ISER_CONTENT' });
slide.background = { color: 'F8F9FA' };

slide.addText('Nuestra Trayectoria Histórica', {
  x: 0.5, y: 0.3, w: '90%', h: 0.7,
  fontSize: 36, fontFace: 'Arial', bold: true, color: colors.primary.red
});

slide.addText('69 años formando el campo colombiano', {
  x: 0.5, y: 0.95, w: '90%', h: 0.4,
  fontSize: 18, fontFace: 'Arial', color: colors.neutral.grayDark
});

const timelineEvents = [
  { year: '1956', text: 'Creación mediante Decreto 2365' },
  { year: '1963', text: 'Reconocimiento como IES' },
  { year: '1988', text: 'Instituto Tecnológico' },
  { year: '2009', text: 'Vinculación Departamental' },
  { year: '2025', text: 'Cambio de Carácter' }
];

timelineEvents.forEach((event, idx) => {
  const y = 1.5 + idx * 0.85;

  slide.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
    x: 0.5, y: y, w: 1.3, h: 0.6,
    fill: { color: colors.primary.green },
    line: { color: colors.primary.green }
  });

  slide.addText(event.year, {
    x: 0.5, y: y + 0.12, w: 1.3, h: 0.4,
    fontSize: 16, fontFace: 'Arial', bold: true, color: colors.primary.white,
    align: 'center'
  });

  slide.addShape(pptx.shapes.RECTANGLE, {
    x: 2, y: y, w: 7.5, h: 0.6,
    fill: { color: colors.primary.white },
    shadow: { type: 'outer', blur: 3, offset: 1, angle: 45, opacity: 0.2 }
  });

  slide.addText(event.text, {
    x: 2.2, y: y + 0.12, w: 7, h: 0.4,
    fontSize: 14, fontFace: 'Arial', color: colors.neutral.grayDark
  });
});

// ==================== SLIDE 4: NATURALEZA JURÍDICA ====================
slide = pptx.addSlide({ masterName: 'ISER_CONTENT' });

slide.addText('Naturaleza Jurídica', {
  x: 0.5, y: 0.3, w: '90%', h: 0.8,
  fontSize: 36, fontFace: 'Arial', bold: true, color: colors.primary.red
});

const juridicaItems = [
  { label: 'Origen', text: 'Decreto Ley 2365 de 1956 - Plantel Piloto Nacional' },
  { label: 'Actual', text: 'Establecimiento público departamental adscrito a Norte de Santander' },
  { label: 'Proceso', text: 'Cambio de carácter conforme al Decreto 2038 de 2023' }
];

juridicaItems.forEach((item, idx) => {
  const y = 1.3 + idx * 1.4;

  slide.addShape(pptx.shapes.RECTANGLE, {
    x: 0.5, y: y, w: 0.08, h: 1.1,
    fill: { color: colors.primary.green }
  });

  slide.addText(item.label, {
    x: 0.7, y: y, w: 8.5, h: 0.5,
    fontSize: 20, fontFace: 'Arial', bold: true, color: colors.primary.green
  });

  slide.addText(item.text, {
    x: 0.7, y: y + 0.5, w: 8.5, h: 0.5,
    fontSize: 16, fontFace: 'Arial', color: colors.neutral.grayDark
  });
});

// ==================== SLIDE 5: BANDERA ====================
slide = pptx.addSlide({ masterName: 'ISER_CONTENT' });

slide.addText('Símbolos Institucionales', {
  x: 0.5, y: 0.3, w: '90%', h: 0.6,
  fontSize: 36, fontFace: 'Arial', bold: true, color: colors.primary.red
});

slide.addText('Nuestra Bandera', {
  x: 0.5, y: 0.85, w: '90%', h: 0.4,
  fontSize: 20, fontFace: 'Arial', color: colors.neutral.grayDark
});

const stripes = [
  { color: 'F5F5F5', name: 'Blanco', meaning: 'Cúspide de los sueños y metas, igualdad, responsabilidad y paz', textColor: colors.neutral.black },
  { color: colors.primary.green, name: 'Verde', meaning: 'Frescor de la naturaleza y desarrollo humano, símbolo de vida', textColor: colors.primary.white },
  { color: colors.primary.yellow, name: 'Amarillo', meaning: 'Inteligencia, creatividad y riqueza de espíritu', textColor: colors.neutral.black },
  { color: colors.primary.red, name: 'Rojo', meaning: 'Justicia e igualdad social, ardor juvenil y entusiasmo', textColor: colors.primary.white }
];

stripes.forEach((stripe, idx) => {
  const y = 1.4 + idx * 1.05;

  slide.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
    x: 0.5, y: y, w: 9, h: 0.9,
    fill: { color: stripe.color }
  });

  slide.addText(`${stripe.name}: ${stripe.meaning}`, {
    x: 0.8, y: y + 0.25, w: 8.5, h: 0.5,
    fontSize: 14, fontFace: 'Arial', bold: false, color: stripe.textColor
  });
});

// ==================== SLIDE 6: ESCUDO ====================
slide = pptx.addSlide({ masterName: 'ISER_CONTENT' });
slide.background = { color: 'F8F9FA' };

slide.addText('Nuestro Escudo', {
  x: 0.5, y: 0.3, w: '90%', h: 0.8,
  fontSize: 36, fontFace: 'Arial', bold: true, color: colors.primary.red
});

const shieldElements = [
  { name: 'El círculo', meaning: 'Perfección, globalización y dinamismo' },
  { name: 'Hombre en el átomo', meaning: 'El ser humano como ser pensante, activo y central en el saber' },
  { name: 'Semicírculo con espigas', meaning: 'Compromiso histórico con la educación rural' },
  { name: 'Semicírculo superior', meaning: 'Contexto y ámbito de acción territorial' }
];

shieldElements.forEach((el, idx) => {
  const row = Math.floor(idx / 2);
  const col = idx % 2;
  const x = col === 0 ? 0.5 : 5;
  const y = 1.2 + row * 2;

  slide.addShape(pptx.shapes.RECTANGLE, {
    x: x, y: y, w: 4.3, h: 1.7,
    fill: { color: colors.primary.white },
    shadow: { type: 'outer', blur: 3, offset: 1, angle: 45, opacity: 0.2 }
  });

  slide.addShape(pptx.shapes.RECTANGLE, {
    x: x, y: y, w: 4.3, h: 0.08,
    fill: { color: colors.primary.green }
  });

  slide.addText(el.name, {
    x: x + 0.2, y: y + 0.2, w: 4, h: 0.5,
    fontSize: 16, fontFace: 'Arial', bold: true, color: colors.primary.green
  });

  slide.addText(el.meaning, {
    x: x + 0.2, y: y + 0.7, w: 4, h: 0.8,
    fontSize: 13, fontFace: 'Arial', color: colors.neutral.grayDark
  });
});

// ==================== SLIDE 7: MISIÓN ====================
slide = pptx.addSlide({ masterName: 'ISER_TITLE' });
slide.background = { color: colors.primary.green };

slide.addText('Nuestra Misión', {
  x: 0.5, y: 0.8, w: '90%', h: 0.8,
  fontSize: 40, fontFace: 'Arial', bold: true, color: colors.primary.yellow
});

slide.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
  x: 0.5, y: 1.8, w: 9, h: 3,
  fill: { color: '2AAF98', transparency: 70 },
  line: { color: colors.primary.yellow, width: 2 }
});

slide.addText('Formar Personas Integrales, competentes y socialmente responsables, con capacidad de generar y adaptar conocimientos, conservar y reinterpretar la cultura y participar activamente en el desarrollo armónico de la comunidad, privilegiando el sector rural y las poblaciones vulnerables, orientados desde la docencia, la investigación, la extensión y el bienestar institucional.', {
  x: 0.8, y: 2, w: 8.4, h: 2.6,
  fontSize: 18, fontFace: 'Arial', color: colors.primary.white,
  align: 'justify', valign: 'middle'
});

// ==================== SLIDE 8: VISIÓN ====================
slide = pptx.addSlide({ masterName: 'ISER_TITLE' });
slide.background = { color: colors.primary.green };

slide.addText('Nuestra Visión 2034', {
  x: 0.5, y: 0.8, w: '90%', h: 0.8,
  fontSize: 40, fontFace: 'Arial', bold: true, color: colors.primary.yellow
});

slide.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
  x: 0.5, y: 1.8, w: 9, h: 2.8,
  fill: { color: '2AAF98', transparency: 70 },
  line: { color: colors.primary.yellow, width: 2 }
});

slide.addText('En el año 2034, La Institución Universitaria de Educación Rural - UniRural será reconocida en el oriente colombiano como una institución acreditada, incluyente y líder en la formación técnica, tecnológica y profesional, con un enfoque del desarrollo humano que apuesta por la ruralidad.', {
  x: 0.8, y: 2, w: 8.4, h: 2.4,
  fontSize: 18, fontFace: 'Arial', color: colors.primary.white,
  align: 'justify', valign: 'middle'
});

// ==================== SLIDE 9: PRINCIPIOS ====================
slide = pptx.addSlide({ masterName: 'ISER_CONTENT' });

slide.addText('Principios Institucionales', {
  x: 0.5, y: 0.3, w: '90%', h: 0.8,
  fontSize: 36, fontFace: 'Arial', bold: true, color: colors.primary.red
});

const principios = [
  { name: 'Autonomía', icon: '🎓' },
  { name: 'Integridad', icon: '⚖️' },
  { name: 'Pertinencia', icon: '🎯' },
  { name: 'Inclusión', icon: '🤝' },
  { name: 'Equidad', icon: '⚖️' },
  { name: 'Sostenibilidad', icon: '🌱' },
  { name: 'Libertad Académica', icon: '📚' },
  { name: 'Calidad', icon: '⭐' }
];

principios.forEach((item, idx) => {
  const row = Math.floor(idx / 4);
  const col = idx % 4;
  const x = 0.5 + col * 2.35;
  const y = 1.3 + row * 2;

  slide.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
    x: x, y: y, w: 2.1, h: 1.6,
    fill: { color: 'F8F9FA' },
    line: { color: colors.primary.green, width: 2 }
  });

  slide.addText(item.icon, {
    x: x, y: y + 0.3, w: 2.1, h: 0.6,
    fontSize: 28, align: 'center'
  });

  slide.addText(item.name, {
    x: x, y: y + 1, w: 2.1, h: 0.4,
    fontSize: 12, fontFace: 'Arial', bold: true, color: colors.primary.green,
    align: 'center'
  });
});

// ==================== SLIDE 10: IDENTIDAD RURAL ====================
slide = pptx.addSlide({ masterName: 'ISER_CONTENT' });
slide.background = { color: 'F8F9FA' };

slide.addText('Nuestra Identidad Rural', {
  x: 0.5, y: 0.3, w: '90%', h: 0.6,
  fontSize: 36, fontFace: 'Arial', bold: true, color: colors.primary.red
});

slide.addText('El Sello Diferenciador', {
  x: 0.5, y: 0.85, w: '90%', h: 0.4,
  fontSize: 18, fontFace: 'Arial', color: colors.primary.green, bold: true
});

const identidadPoints = [
  'Comunidades rurales como expresiones de vida, cultura y desarrollo',
  'Desarrollo humano como fundamento conceptual',
  'El territorio-naturaleza como sujeto activo',
  'Prácticas de convivencia democrática y participativa',
  'Criterios de equidad, justicia, género y sustentabilidad'
];

identidadPoints.forEach((point, idx) => {
  const y = 1.4 + idx * 0.85;

  slide.addShape(pptx.shapes.RECTANGLE, {
    x: 0.5, y: y, w: 9, h: 0.7,
    fill: { color: colors.primary.white },
    shadow: { type: 'outer', blur: 2, offset: 1, angle: 45, opacity: 0.15 }
  });

  slide.addShape(pptx.shapes.OVAL, {
    x: 0.7, y: y + 0.12, w: 0.45, h: 0.45,
    fill: { color: colors.primary.green }
  });

  slide.addText((idx + 1).toString(), {
    x: 0.7, y: y + 0.15, w: 0.45, h: 0.4,
    fontSize: 12, fontFace: 'Arial', bold: true, color: colors.primary.white,
    align: 'center'
  });

  slide.addText(point, {
    x: 1.3, y: y + 0.18, w: 8, h: 0.4,
    fontSize: 14, fontFace: 'Arial', color: colors.neutral.grayDark
  });
});

// ==================== SLIDE 11: MAPA/COBERTURA ====================
slide = pptx.addSlide({ masterName: 'ISER_CONTENT' });

slide.addText('Presencia Territorial', {
  x: 0.5, y: 0.3, w: '90%', h: 0.6,
  fontSize: 36, fontFace: 'Arial', bold: true, color: colors.primary.red
});

slide.addText('16 Centros de Atención Tutorial en 6 departamentos', {
  x: 0.5, y: 0.85, w: '90%', h: 0.4,
  fontSize: 16, fontFace: 'Arial', color: colors.neutral.grayDark
});

const regions = [
  { name: 'Norte de Santander', centers: 8 },
  { name: 'Santander', centers: 3 },
  { name: 'Arauca', centers: 3 },
  { name: 'Bolívar', centers: 2 },
  { name: 'Cesar', centers: 6 },
  { name: 'Magdalena', centers: 2 }
];

regions.forEach((region, idx) => {
  const row = Math.floor(idx / 3);
  const col = idx % 3;
  const x = 0.5 + col * 3.15;
  const y = 1.4 + row * 2;

  slide.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
    x: x, y: y, w: 2.9, h: 1.7,
    fill: { color: colors.primary.green },
    shadow: { type: 'outer', blur: 4, offset: 2, angle: 45, opacity: 0.3 }
  });

  slide.addText(region.name, {
    x: x, y: y + 0.2, w: 2.9, h: 0.5,
    fontSize: 14, fontFace: 'Arial', bold: true, color: colors.primary.white,
    align: 'center'
  });

  slide.addText(region.centers.toString(), {
    x: x, y: y + 0.65, w: 2.9, h: 0.6,
    fontSize: 36, fontFace: 'Arial', bold: true, color: colors.primary.yellow,
    align: 'center'
  });

  slide.addText('Centros de Atención', {
    x: x, y: y + 1.25, w: 2.9, h: 0.3,
    fontSize: 10, fontFace: 'Arial', color: colors.primary.white,
    align: 'center'
  });
});

// ==================== SLIDE 12: FUNDAMENTO FILOSÓFICO ====================
slide = pptx.addSlide({ masterName: 'ISER_TITLE' });
slide.background = { color: colors.primary.green };

slide.addText('Fundamento Filosófico', {
  x: 0.5, y: 0.6, w: '90%', h: 0.7,
  fontSize: 36, fontFace: 'Arial', bold: true, color: colors.primary.yellow
});

slide.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
  x: 0.5, y: 1.5, w: 9, h: 3,
  fill: { color: '2AAF98', transparency: 70 },
  line: { color: colors.primary.yellow, width: 2 }
});

slide.addText('Desarrollo Humano', {
  x: 0.8, y: 1.7, w: 8.4, h: 0.6,
  fontSize: 28, fontFace: 'Arial', bold: true, color: colors.primary.yellow
});

slide.addText('Proceso de ampliación de las capacidades de las personas, ubicándolas en el centro del desarrollo con capacidad de agencia para transformarse y transformar su entorno.', {
  x: 0.8, y: 2.4, w: 8.4, h: 1.5,
  fontSize: 16, fontFace: 'Arial', color: colors.primary.white,
  align: 'justify'
});

slide.addText('— Basado en Amartya Sen y Martha Nussbaum', {
  x: 0.8, y: 4, w: 8.4, h: 0.4,
  fontSize: 14, fontFace: 'Arial', italic: true, color: colors.primary.white
});

// ==================== SLIDE 13: FORMACIÓN INTEGRAL ====================
slide = pptx.addSlide({ masterName: 'ISER_CONTENT' });
slide.background = { color: 'F8F9FA' };

slide.addText('Formación Integral', {
  x: 0.5, y: 0.3, w: '90%', h: 0.6,
  fontSize: 36, fontFace: 'Arial', bold: true, color: colors.primary.red
});

slide.addText('La persona como ser multidimensional', {
  x: 0.5, y: 0.85, w: '90%', h: 0.4,
  fontSize: 16, fontFace: 'Arial', color: colors.neutral.grayDark
});

const dimensions = ['Intelectual', 'Afectiva', 'Social', 'Ética', 'Política', 'Estética'];

dimensions.forEach((dim, idx) => {
  const row = Math.floor(idx / 3);
  const col = idx % 3;
  const x = 0.5 + col * 3.15;
  const y = 1.4 + row * 1.8;

  slide.addShape(pptx.shapes.RECTANGLE, {
    x: x, y: y, w: 2.9, h: 1.4,
    fill: { color: colors.primary.white },
    shadow: { type: 'outer', blur: 2, offset: 1, angle: 45, opacity: 0.15 }
  });

  slide.addShape(pptx.shapes.RECTANGLE, {
    x: x, y: y, w: 2.9, h: 0.08,
    fill: { color: colors.primary.green }
  });

  slide.addText(dim, {
    x: x, y: y + 0.4, w: 2.9, h: 0.6,
    fontSize: 18, fontFace: 'Arial', bold: true, color: colors.primary.green,
    align: 'center', valign: 'middle'
  });
});

// ==================== SLIDE 14: COMPETENCIAS ====================
slide = pptx.addSlide({ masterName: 'ISER_CONTENT' });

slide.addText('Enfoque por Competencias', {
  x: 0.5, y: 0.3, w: '90%', h: 0.8,
  fontSize: 36, fontFace: 'Arial', bold: true, color: colors.primary.red
});

const competencias = [
  { name: 'Saber Ser', desc: 'Dimensión ética y actitudinal' },
  { name: 'Saber Hacer', desc: 'Dimensión procedimental' },
  { name: 'Saber Conocer', desc: 'Dimensión cognitiva' },
  { name: 'Saber Estar', desc: 'Dimensión relacional' }
];

competencias.forEach((comp, idx) => {
  const row = Math.floor(idx / 2);
  const col = idx % 2;
  const x = col === 0 ? 0.5 : 5;
  const y = 1.3 + row * 2;

  slide.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
    x: x, y: y, w: 4.3, h: 1.6,
    fill: { color: colors.primary.green },
    shadow: { type: 'outer', blur: 3, offset: 2, angle: 45, opacity: 0.25 }
  });

  slide.addText(comp.name, {
    x: x, y: y + 0.3, w: 4.3, h: 0.6,
    fontSize: 22, fontFace: 'Arial', bold: true, color: colors.primary.white,
    align: 'center'
  });

  slide.addText(comp.desc, {
    x: x, y: y + 0.95, w: 4.3, h: 0.4,
    fontSize: 14, fontFace: 'Arial', color: colors.primary.white,
    align: 'center'
  });
});

// ==================== SLIDE 15: PENSAMIENTO PEDAGÓGICO ====================
slide = pptx.addSlide({ masterName: 'ISER_CONTENT' });
slide.background = { color: 'F8F9FA' };

slide.addText('Pensamiento Pedagógico Socio-Crítico', {
  x: 0.5, y: 0.3, w: '90%', h: 0.8,
  fontSize: 32, fontFace: 'Arial', bold: true, color: colors.primary.red
});

const pedagogicoPoints = [
  'Aplicación del conocimiento a problemáticas reales',
  'Generación de conciencia crítica y reflexiva',
  'Conducción autónoma del criterio propio',
  'Formación de personas libres y autónomas',
  'Trabajo cooperativo y colaborativo'
];

pedagogicoPoints.forEach((point, idx) => {
  const y = 1.2 + idx * 0.9;

  slide.addShape(pptx.shapes.RECTANGLE, {
    x: 0.5, y: y, w: 9, h: 0.75,
    fill: { color: colors.primary.white },
    shadow: { type: 'outer', blur: 2, offset: 1, angle: 45, opacity: 0.15 }
  });

  slide.addShape(pptx.shapes.OVAL, {
    x: 0.7, y: y + 0.15, w: 0.45, h: 0.45,
    fill: { color: colors.primary.green }
  });

  slide.addText((idx + 1).toString(), {
    x: 0.7, y: y + 0.18, w: 0.45, h: 0.4,
    fontSize: 12, fontFace: 'Arial', bold: true, color: colors.primary.white,
    align: 'center'
  });

  slide.addText(point, {
    x: 1.3, y: y + 0.2, w: 8, h: 0.4,
    fontSize: 15, fontFace: 'Arial', color: colors.neutral.grayDark
  });
});

// ==================== SLIDE 16: MODALIDADES ====================
slide = pptx.addSlide({ masterName: 'ISER_CONTENT' });
slide.background = { color: 'F8F9FA' };

slide.addText('Modalidades de Formación', {
  x: 0.5, y: 0.3, w: '90%', h: 0.8,
  fontSize: 36, fontFace: 'Arial', bold: true, color: colors.primary.red
});

const modalidades = [
  { name: 'Presencial', desc: 'Interacción directa en espacios físicos' },
  { name: 'Virtual', desc: 'Totalmente en entornos digitales' },
  { name: 'A Distancia', desc: 'Mediada con encuentros periódicos' },
  { name: 'Dual', desc: 'Alterna academia y práctica empresarial' },
  { name: 'Híbrida', desc: 'Combinación flexible de modalidades' }
];

modalidades.forEach((mod, idx) => {
  const y = 1.1 + idx * 0.85;

  slide.addShape(pptx.shapes.RECTANGLE, {
    x: 0.5, y: y, w: 9, h: 0.7,
    fill: { color: colors.primary.white },
    shadow: { type: 'outer', blur: 2, offset: 1, angle: 45, opacity: 0.15 }
  });

  slide.addShape(pptx.shapes.RECTANGLE, {
    x: 0.5, y: y, w: 0.08, h: 0.7,
    fill: { color: colors.primary.green }
  });

  slide.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
    x: 0.7, y: y + 0.1, w: 1.8, h: 0.5,
    fill: { color: colors.primary.green }
  });

  slide.addText(mod.name, {
    x: 0.7, y: y + 0.15, w: 1.8, h: 0.4,
    fontSize: 12, fontFace: 'Arial', bold: true, color: colors.primary.white,
    align: 'center'
  });

  slide.addText(mod.desc, {
    x: 2.7, y: y + 0.18, w: 6.5, h: 0.4,
    fontSize: 13, fontFace: 'Arial', color: colors.neutral.grayDark
  });
});

// ==================== SLIDE 17: CONTEXTO REGIONAL ====================
slide = pptx.addSlide({ masterName: 'ISER_TITLE' });
slide.background = { color: colors.primary.green };

slide.addText('Contexto Regional', {
  x: 0.5, y: 0.5, w: '90%', h: 0.6,
  fontSize: 36, fontFace: 'Arial', bold: true, color: colors.primary.white
});

slide.addText('Norte de Santander y zona de influencia', {
  x: 0.5, y: 1.05, w: '90%', h: 0.4,
  fontSize: 16, fontFace: 'Arial', color: colors.primary.white
});

const stats = [
  { label: 'Municipios PDET', value: '8+' },
  { label: 'Población Rural', value: '45%' },
  { label: 'Cobertura ES Rural', value: '<20%' },
  { label: 'Departamentos', value: '6' }
];

stats.forEach((stat, idx) => {
  const row = Math.floor(idx / 2);
  const col = idx % 2;
  const x = col === 0 ? 0.5 : 5;
  const y = 1.7 + row * 1.8;

  slide.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
    x: x, y: y, w: 4.3, h: 1.5,
    fill: { color: '2AAF98', transparency: 70 },
    line: { color: colors.primary.yellow, width: 2 }
  });

  slide.addText(stat.value, {
    x: x, y: y + 0.2, w: 4.3, h: 0.7,
    fontSize: 40, fontFace: 'Arial', bold: true, color: colors.primary.yellow,
    align: 'center'
  });

  slide.addText(stat.label, {
    x: x, y: y + 0.95, w: 4.3, h: 0.4,
    fontSize: 14, fontFace: 'Arial', color: colors.primary.white,
    align: 'center'
  });
});

// ==================== SLIDE 18: BRECHAS EDUCATIVAS ====================
slide = pptx.addSlide({ masterName: 'ISER_CONTENT' });

slide.addText('Brechas en Educación Superior', {
  x: 0.5, y: 0.3, w: '90%', h: 0.8,
  fontSize: 36, fontFace: 'Arial', bold: true, color: colors.primary.red
});

const brechas = [
  'Baja cobertura en zonas rurales dispersas',
  'Oferta concentrada en ciudades capitales',
  'Necesidad de trayectorias educativas completas',
  'Falta de programas profesionales en territorios',
  'Dificultades de acceso y permanencia'
];

brechas.forEach((brecha, idx) => {
  const y = 1.2 + idx * 0.9;

  slide.addShape(pptx.shapes.RECTANGLE, {
    x: 0.5, y: y, w: 9, h: 0.75,
    fill: { color: 'FEF2F2' }
  });

  slide.addShape(pptx.shapes.RECTANGLE, {
    x: 0.5, y: y, w: 0.08, h: 0.75,
    fill: { color: colors.primary.red }
  });

  slide.addShape(pptx.shapes.OVAL, {
    x: 0.7, y: y + 0.15, w: 0.45, h: 0.45,
    fill: { color: colors.primary.red }
  });

  slide.addText('!', {
    x: 0.7, y: y + 0.15, w: 0.45, h: 0.45,
    fontSize: 16, fontFace: 'Arial', bold: true, color: colors.primary.white,
    align: 'center', valign: 'middle'
  });

  slide.addText(brecha, {
    x: 1.3, y: y + 0.2, w: 8, h: 0.4,
    fontSize: 14, fontFace: 'Arial', color: colors.neutral.grayDark
  });
});

// ==================== SLIDE 19: INFRAESTRUCTURA ====================
slide = pptx.addSlide({ masterName: 'ISER_CONTENT' });
slide.background = { color: 'F8F9FA' };

slide.addText('Capacidades Institucionales', {
  x: 0.5, y: 0.3, w: '90%', h: 0.6,
  fontSize: 36, fontFace: 'Arial', bold: true, color: colors.primary.red
});

slide.addText('Infraestructura Física', {
  x: 0.5, y: 0.85, w: '90%', h: 0.4,
  fontSize: 16, fontFace: 'Arial', color: colors.neutral.grayDark
});

const infraItems = [
  '190 cupos en residencias estudiantiles',
  '140 capacidad en comedor institucional',
  'Laboratorios especializados modernos',
  'Granja La Rinconada y Hacienda La Caldera',
  'Energía solar en instalaciones',
  'Sistema de Gestión ISO 9001:2015'
];

infraItems.forEach((item, idx) => {
  const row = Math.floor(idx / 2);
  const col = idx % 2;
  const x = col === 0 ? 0.5 : 5;
  const y = 1.4 + row * 1.3;

  slide.addShape(pptx.shapes.RECTANGLE, {
    x: x, y: y, w: 4.3, h: 1,
    fill: { color: colors.primary.white },
    shadow: { type: 'outer', blur: 2, offset: 1, angle: 45, opacity: 0.15 }
  });

  slide.addText('✓', {
    x: x + 0.2, y: y + 0.25, w: 0.4, h: 0.5,
    fontSize: 20, fontFace: 'Arial', bold: true, color: colors.primary.green
  });

  slide.addText(item, {
    x: x + 0.6, y: y + 0.3, w: 3.5, h: 0.5,
    fontSize: 12, fontFace: 'Arial', color: colors.neutral.grayDark
  });
});

// ==================== SLIDE 20: OFERTA ACADÉMICA ====================
slide = pptx.addSlide({ masterName: 'ISER_CONTENT' });

slide.addText('Oferta Académica Vigente', {
  x: 0.5, y: 0.3, w: '90%', h: 0.6,
  fontSize: 36, fontFace: 'Arial', bold: true, color: colors.primary.red
});

slide.addText('11 programas activos con Registro Calificado', {
  x: 0.5, y: 0.85, w: '90%', h: 0.4,
  fontSize: 16, fontFace: 'Arial', color: colors.neutral.grayDark
});

const faculties = [
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
];

faculties.forEach((faculty, idx) => {
  const y = 1.4 + idx * 2.1;

  slide.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
    x: 0.5, y: y, w: 9, h: 1.9,
    fill: { color: 'F8F9FA' }
  });

  slide.addText(faculty.name, {
    x: 0.7, y: y + 0.15, w: 5, h: 0.5,
    fontSize: 20, fontFace: 'Arial', bold: true, color: colors.primary.green
  });

  slide.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
    x: 7, y: y + 0.15, w: 2.2, h: 0.5,
    fill: { color: colors.primary.green }
  });

  slide.addText(`${faculty.count} Programas`, {
    x: 7, y: y + 0.2, w: 2.2, h: 0.4,
    fontSize: 12, fontFace: 'Arial', bold: true, color: colors.primary.white,
    align: 'center'
  });

  faculty.programs.forEach((program, pidx) => {
    const px = 0.8 + pidx * 2.2;

    slide.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
      x: px, y: y + 0.85, w: 2, h: 0.8,
      fill: { color: colors.primary.white },
      shadow: { type: 'outer', blur: 2, offset: 1, angle: 45, opacity: 0.15 }
    });

    slide.addText(program, {
      x: px, y: y + 1.05, w: 2, h: 0.4,
      fontSize: 10, fontFace: 'Arial', color: colors.neutral.grayDark,
      align: 'center'
    });
  });
});

// ==================== SLIDE 21: INVESTIGACIÓN ====================
slide = pptx.addSlide({ masterName: 'ISER_CONTENT' });

slide.addText('Trayectoria en Investigación', {
  x: 0.5, y: 0.3, w: '90%', h: 0.7,
  fontSize: 36, fontFace: 'Arial', bold: true, color: colors.primary.red
});

slide.addText('Grupos de Investigación', {
  x: 0.5, y: 1, w: '90%', h: 0.4,
  fontSize: 18, fontFace: 'Arial', bold: true, color: colors.primary.green
});

const groups = [
  { name: 'GICTIN', category: 'C', area: 'Ingenierías' },
  { name: 'GIESD', category: 'Reconocido', area: 'Ciencias Admin.' }
];

groups.forEach((group, idx) => {
  const x = 0.5 + idx * 4.5;

  slide.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
    x: x, y: 1.5, w: 4.2, h: 1.2,
    fill: { color: colors.secondary.blue }
  });

  slide.addText(group.name, {
    x: x, y: 1.6, w: 4.2, h: 0.4,
    fontSize: 18, fontFace: 'Arial', bold: true, color: colors.primary.white,
    align: 'center'
  });

  slide.addText(`Categoría ${group.category}`, {
    x: x, y: 2.05, w: 4.2, h: 0.3,
    fontSize: 12, fontFace: 'Arial', color: colors.primary.white,
    align: 'center'
  });

  slide.addText(group.area, {
    x: x, y: 2.35, w: 4.2, h: 0.25,
    fontSize: 10, fontFace: 'Arial', color: colors.primary.white,
    align: 'center'
  });
});

slide.addText('Logros Recientes', {
  x: 0.5, y: 2.9, w: '90%', h: 0.4,
  fontSize: 18, fontFace: 'Arial', bold: true, color: colors.primary.green
});

const achievements = [
  '6 profesores clasificados MinCiencias 2024',
  'Proyecto SGR implementado',
  'Semilleros activos de investigación',
  'Eventos académicos nacionales'
];

achievements.forEach((ach, idx) => {
  const row = Math.floor(idx / 2);
  const col = idx % 2;
  const x = 0.5 + col * 4.5;
  const y = 3.4 + row * 0.75;

  slide.addShape(pptx.shapes.RECTANGLE, {
    x: x, y: y, w: 4.2, h: 0.6,
    fill: { color: 'F8F9FA' }
  });

  slide.addShape(pptx.shapes.RECTANGLE, {
    x: x, y: y, w: 0.08, h: 0.6,
    fill: { color: colors.primary.green }
  });

  slide.addText(`✓ ${ach}`, {
    x: x + 0.15, y: y + 0.15, w: 4, h: 0.35,
    fontSize: 11, fontFace: 'Arial', color: colors.neutral.grayDark
  });
});

// ==================== SLIDE 22: EPSEA ====================
slide = pptx.addSlide({ masterName: 'ISER_CONTENT' });
slide.background = { color: 'F8F9FA' };

slide.addText('Extensión y Proyección Social', {
  x: 0.5, y: 0.3, w: '90%', h: 0.6,
  fontSize: 34, fontFace: 'Arial', bold: true, color: colors.primary.red
});

slide.addText('Entidad Prestadora de Servicios de Extensión Agropecuaria', {
  x: 0.5, y: 0.85, w: '90%', h: 0.4,
  fontSize: 16, fontFace: 'Arial', color: colors.primary.green, bold: true
});

const epseaPoints = [
  'Habilitación EPSEA vigente',
  'Asistencia técnica a productores',
  'Consultoría y asesoría empresarial',
  'Convenios con sector productivo',
  'Articulación con SNIA'
];

epseaPoints.forEach((point, idx) => {
  const y = 1.4 + idx * 0.85;

  slide.addShape(pptx.shapes.RECTANGLE, {
    x: 0.5, y: y, w: 9, h: 0.7,
    fill: { color: colors.primary.white },
    shadow: { type: 'outer', blur: 2, offset: 1, angle: 45, opacity: 0.15 }
  });

  slide.addShape(pptx.shapes.OVAL, {
    x: 0.7, y: y + 0.12, w: 0.45, h: 0.45,
    fill: { color: colors.primary.green }
  });

  slide.addText((idx + 1).toString(), {
    x: 0.7, y: y + 0.15, w: 0.45, h: 0.4,
    fontSize: 12, fontFace: 'Arial', bold: true, color: colors.primary.white,
    align: 'center'
  });

  slide.addText(point, {
    x: 1.3, y: y + 0.18, w: 8, h: 0.4,
    fontSize: 15, fontFace: 'Arial', color: colors.neutral.grayDark
  });
});

// ==================== SLIDE 23: ODS ====================
slide = pptx.addSlide({ masterName: 'ISER_TITLE' });
slide.background = { color: colors.secondary.blue };

slide.addText('Articulación con ODS 2030', {
  x: 0.5, y: 0.5, w: '90%', h: 0.8,
  fontSize: 36, fontFace: 'Arial', bold: true, color: colors.primary.white
});

const ods = [
  { number: 4, name: 'Educación de Calidad' },
  { number: 8, name: 'Trabajo Decente' },
  { number: 10, name: 'Reducción de Desigualdades' },
  { number: 11, name: 'Ciudades Sostenibles' },
  { number: 12, name: 'Producción Responsable' }
];

ods.forEach((obj, idx) => {
  const x = 0.5 + idx * 1.9;

  slide.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
    x: x, y: 1.5, w: 1.7, h: 2.5,
    fill: { color: '6FA8F5', transparency: 50 },
    line: { color: colors.primary.white, width: 2 }
  });

  slide.addText(obj.number.toString(), {
    x: x, y: 1.7, w: 1.7, h: 1,
    fontSize: 44, fontFace: 'Arial', bold: true, color: colors.primary.yellow,
    align: 'center'
  });

  slide.addText(obj.name, {
    x: x, y: 2.9, w: 1.7, h: 0.9,
    fontSize: 10, fontFace: 'Arial', color: colors.primary.white,
    align: 'center'
  });
});

// ==================== SLIDE 24: DECRETO 2038 ====================
slide = pptx.addSlide({ masterName: 'ISER_CONTENT' });

slide.addText('Cumplimiento Decreto 2038/2023', {
  x: 0.5, y: 0.3, w: '90%', h: 0.6,
  fontSize: 34, fontFace: 'Arial', bold: true, color: colors.primary.red
});

slide.addText('Requisitos para Cambio de Carácter', {
  x: 0.5, y: 0.85, w: '90%', h: 0.4,
  fontSize: 16, fontFace: 'Arial', color: colors.neutral.grayDark
});

const requirements = [
  { item: 'Reglamentos actualizados', status: '✓ Cumple' },
  { item: 'Políticas de interacción', status: '✓ Cumple' },
  { item: 'Plan de Desarrollo vigente', status: '✓ Cumple' },
  { item: 'Condiciones verificadas', status: '✓ Cumple' },
  { item: 'Programas con RC', status: '✓ 11 activos' }
];

requirements.forEach((req, idx) => {
  const y = 1.4 + idx * 0.85;

  slide.addShape(pptx.shapes.RECTANGLE, {
    x: 0.5, y: y, w: 9, h: 0.7,
    fill: { color: 'F8F9FA' },
    shadow: { type: 'outer', blur: 2, offset: 1, angle: 45, opacity: 0.1 }
  });

  slide.addText(req.item, {
    x: 0.7, y: y + 0.18, w: 6, h: 0.4,
    fontSize: 15, fontFace: 'Arial', color: colors.neutral.grayDark
  });

  slide.addText(req.status, {
    x: 7, y: y + 0.18, w: 2.3, h: 0.4,
    fontSize: 14, fontFace: 'Arial', bold: true, color: colors.primary.green,
    align: 'right'
  });
});

// ==================== SLIDE 25: ESTRUCTURA GOBIERNO ====================
slide = pptx.addSlide({ masterName: 'ISER_CONTENT' });
slide.background = { color: 'F8F9FA' };

slide.addText('Estructura de Gobierno Académico', {
  x: 0.5, y: 0.3, w: '90%', h: 0.8,
  fontSize: 34, fontFace: 'Arial', bold: true, color: colors.primary.red
});

const niveles = [
  'Consejo Directivo - Máxima autoridad',
  'Consejo Académico - Autoridad académica',
  'Rectoría - Dirección ejecutiva',
  'Vicerrectorías - Gestión misional',
  'Facultades - Unidades académicas',
  'Programas - Gestión operativa'
];

niveles.forEach((nivel, idx) => {
  const marginLeft = idx * 0.3;

  slide.addShape(pptx.shapes.RECTANGLE, {
    x: 0.5 + marginLeft, y: 1.2 + idx * 0.75, w: 8.5 - marginLeft, h: 0.6,
    fill: { color: colors.primary.white },
    shadow: { type: 'outer', blur: 2, offset: 1, angle: 45, opacity: 0.15 }
  });

  slide.addShape(pptx.shapes.RECTANGLE, {
    x: 0.5 + marginLeft, y: 1.2 + idx * 0.75, w: 0.08, h: 0.6,
    fill: { color: colors.primary.green }
  });

  slide.addText(nivel, {
    x: 0.7 + marginLeft, y: 1.3 + idx * 0.75, w: 8, h: 0.4,
    fontSize: 14, fontFace: 'Arial', bold: true, color: colors.neutral.grayDark
  });
});

// ==================== SLIDE 26: FACULTADES ====================
slide = pptx.addSlide({ masterName: 'ISER_CONTENT' });

slide.addText('Facultades Actuales y Proyectadas', {
  x: 0.5, y: 0.3, w: '90%', h: 0.8,
  fontSize: 34, fontFace: 'Arial', bold: true, color: colors.primary.red
});

slide.addText('Facultades Actuales', {
  x: 0.5, y: 1.1, w: '90%', h: 0.4,
  fontSize: 18, fontFace: 'Arial', bold: true, color: colors.primary.green
});

const currentFaculties = [
  'Ciencias Administrativas y Sociales',
  'Ingenierías e Informática'
];

currentFaculties.forEach((faculty, idx) => {
  slide.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
    x: 0.5, y: 1.6 + idx * 0.75, w: 9, h: 0.6,
    fill: { color: colors.primary.green }
  });

  slide.addText(faculty, {
    x: 0.5, y: 1.7 + idx * 0.75, w: 9, h: 0.4,
    fontSize: 16, fontFace: 'Arial', bold: true, color: colors.primary.white,
    align: 'center'
  });
});

slide.addText('Facultades Proyectadas', {
  x: 0.5, y: 3.2, w: '90%', h: 0.4,
  fontSize: 18, fontFace: 'Arial', bold: true, color: colors.secondary.blue
});

slide.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
  x: 0.5, y: 3.7, w: 9, h: 0.6,
  fill: { color: colors.secondary.blue }
});

slide.addText('Ciencias Básicas y Educación (proyectada)', {
  x: 0.5, y: 3.8, w: 9, h: 0.4,
  fontSize: 16, fontFace: 'Arial', bold: true, color: colors.primary.white,
  align: 'center'
});

// ==================== SLIDE 27: NUEVOS PROGRAMAS ====================
slide = pptx.addSlide({ masterName: 'ISER_CONTENT' });
slide.background = { color: 'F8F9FA' };

slide.addText('Proyección de Oferta Académica', {
  x: 0.5, y: 0.3, w: '90%', h: 0.6,
  fontSize: 34, fontFace: 'Arial', bold: true, color: colors.primary.red
});

slide.addText('Programas en trámite de Registro Calificado', {
  x: 0.5, y: 0.85, w: '90%', h: 0.4,
  fontSize: 16, fontFace: 'Arial', color: colors.neutral.grayDark
});

const newPrograms = [
  'Ingeniería en Ciencia de Datos - Virtual',
  'Trabajo Social y Comunitario - Virtual',
  'Bioingeniería - Presencial'
];

newPrograms.forEach((program, idx) => {
  slide.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
    x: 0.5, y: 1.4 + idx * 0.75, w: 9, h: 0.6,
    fill: { color: colors.secondary.blue }
  });

  slide.addText(`• ${program}`, {
    x: 0.7, y: 1.5 + idx * 0.75, w: 8.5, h: 0.4,
    fontSize: 15, fontFace: 'Arial', bold: true, color: colors.primary.white
  });
});

slide.addText('Áreas de Expansión', {
  x: 0.5, y: 3.8, w: '90%', h: 0.4,
  fontSize: 18, fontFace: 'Arial', bold: true, color: colors.primary.green
});

const areas = [
  'Programas Profesionales Universitarios',
  'Especializaciones',
  'Maestrías'
];

areas.forEach((area, idx) => {
  const x = 0.5 + idx * 3.15;

  slide.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
    x: x, y: 4.3, w: 2.9, h: 0.7,
    fill: { color: colors.primary.white },
    line: { color: colors.primary.green, width: 2 }
  });

  slide.addText(area, {
    x: x, y: 4.45, w: 2.9, h: 0.4,
    fontSize: 11, fontFace: 'Arial', bold: true, color: colors.primary.green,
    align: 'center'
  });
});

// ==================== SLIDE 28: SISTEMA INVESTIGACIÓN ====================
slide = pptx.addSlide({ masterName: 'ISER_TITLE' });
slide.background = { color: colors.secondary.blue };

slide.addText('Sistema de Investigación', {
  x: 0.5, y: 0.4, w: '90%', h: 0.6,
  fontSize: 36, fontFace: 'Arial', bold: true, color: colors.primary.white
});

slide.addText('Líneas de investigación', {
  x: 0.5, y: 0.95, w: '90%', h: 0.4,
  fontSize: 16, fontFace: 'Arial', color: colors.primary.white
});

const lineas = [
  'Bioeconomía y desarrollo sostenible',
  'Cadenas productivas agroindustriales',
  'Transición energética',
  'Digitalización y tecnologías emergentes',
  'Adaptación al cambio climático',
  'Desarrollo humano rural'
];

lineas.forEach((linea, idx) => {
  const row = Math.floor(idx / 2);
  const col = idx % 2;
  const x = col === 0 ? 0.5 : 5;
  const y = 1.5 + row * 1.3;

  slide.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
    x: x, y: y, w: 4.3, h: 1,
    fill: { color: '6FA8F5', transparency: 50 },
    line: { color: colors.primary.white, width: 2 }
  });

  slide.addText(`🔬 ${linea}`, {
    x: x + 0.2, y: y + 0.3, w: 4, h: 0.5,
    fontSize: 12, fontFace: 'Arial', color: colors.primary.white
  });
});

// ==================== SLIDE 29: EXTENSIÓN ====================
slide = pptx.addSlide({ masterName: 'ISER_CONTENT' });

slide.addText('Sistema de Extensión', {
  x: 0.5, y: 0.3, w: '90%', h: 0.8,
  fontSize: 36, fontFace: 'Arial', bold: true, color: colors.primary.red
});

const extension = [
  { type: 'Académica', desc: 'Educación continuada, diplomados' },
  { type: 'Social', desc: 'Proyectos solidarios, desarrollo comunitario' },
  { type: 'Económica', desc: 'Consultoría, asesoría, asistencia técnica' },
  { type: 'Graduados', desc: 'Seguimiento y vinculación' },
  { type: 'Internacional', desc: 'Movilidad, convenios' }
];

extension.forEach((ext, idx) => {
  const y = 1.1 + idx * 0.85;

  slide.addShape(pptx.shapes.RECTANGLE, {
    x: 0.5, y: y, w: 9, h: 0.7,
    fill: { color: 'F8F9FA' }
  });

  slide.addShape(pptx.shapes.RECTANGLE, {
    x: 0.5, y: y, w: 0.08, h: 0.7,
    fill: { color: colors.primary.green }
  });

  slide.addText(ext.type, {
    x: 0.7, y: y + 0.18, w: 2, h: 0.4,
    fontSize: 16, fontFace: 'Arial', bold: true, color: colors.primary.green
  });

  slide.addText(ext.desc, {
    x: 3, y: y + 0.2, w: 6.3, h: 0.4,
    fontSize: 13, fontFace: 'Arial', color: colors.neutral.grayDark
  });
});

// ==================== SLIDE 30: NEXO ====================
slide = pptx.addSlide({ masterName: 'ISER_TITLE' });
slide.background = { color: colors.secondary.blue };

slide.addText('Núcleo de Experiencias y Organización', {
  x: 0.5, y: 0.4, w: '90%', h: 0.6,
  fontSize: 32, fontFace: 'Arial', bold: true, color: colors.primary.white
});

slide.addText('Coordinación de formación multimodal', {
  x: 0.5, y: 0.95, w: '90%', h: 0.4,
  fontSize: 16, fontFace: 'Arial', color: colors.primary.white
});

const nexoFunctions = [
  'Gestión tecnológica y contenidos digitales',
  'Acompañamiento pedagógico docente',
  'Soporte técnico-operativo',
  'Seguimiento a bienestar digital',
  'Monitoreo del ecosistema virtual'
];

nexoFunctions.forEach((func, idx) => {
  const y = 1.5 + idx * 0.85;

  slide.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
    x: 0.5, y: y, w: 9, h: 0.7,
    fill: { color: '6FA8F5', transparency: 50 },
    line: { color: colors.primary.white, width: 2 }
  });

  slide.addShape(pptx.shapes.OVAL, {
    x: 0.7, y: y + 0.12, w: 0.45, h: 0.45,
    fill: { color: colors.primary.yellow }
  });

  slide.addText((idx + 1).toString(), {
    x: 0.7, y: y + 0.15, w: 0.45, h: 0.4,
    fontSize: 12, fontFace: 'Arial', bold: true, color: colors.neutral.black,
    align: 'center'
  });

  slide.addText(func, {
    x: 1.3, y: y + 0.18, w: 8, h: 0.4,
    fontSize: 14, fontFace: 'Arial', color: colors.primary.white
  });
});

// ==================== SLIDE 31: PERFIL ESTUDIANTE ====================
slide = pptx.addSlide({ masterName: 'ISER_CONTENT' });
slide.background = { color: 'F8F9FA' };

slide.addText('Perfil del Estudiante Iserista', {
  x: 0.5, y: 0.3, w: '90%', h: 0.8,
  fontSize: 36, fontFace: 'Arial', bold: true, color: colors.primary.red
});

const studentComp = [
  'Responsabilidad y autoconfianza',
  'Resolución de problemas',
  'Habilidades comunicativas',
  'Uso competente de TIC',
  'Pensamiento crítico y flexible',
  'Trabajo en equipo',
  'Iniciativa y creatividad'
];

studentComp.forEach((comp, idx) => {
  const row = Math.floor(idx / 2);
  const col = idx % 2;
  const x = col === 0 ? 0.5 : 5;
  const y = 1.2 + row * 1.1;

  if (idx < 6 || idx === 6) {
    slide.addShape(pptx.shapes.RECTANGLE, {
      x: idx === 6 ? 2.75 : x, y: y, w: 4.3, h: 0.9,
      fill: { color: colors.primary.white },
      shadow: { type: 'outer', blur: 2, offset: 1, angle: 45, opacity: 0.15 }
    });

    slide.addShape(pptx.shapes.RECTANGLE, {
      x: idx === 6 ? 2.75 : x, y: y, w: 0.08, h: 0.9,
      fill: { color: colors.primary.green }
    });

    slide.addText(`✓ ${comp}`, {
      x: (idx === 6 ? 2.75 : x) + 0.2, y: y + 0.25, w: 4, h: 0.4,
      fontSize: 13, fontFace: 'Arial', bold: true, color: colors.neutral.grayDark
    });
  }
});

// ==================== SLIDE 32: PERFIL DOCENTE ====================
slide = pptx.addSlide({ masterName: 'ISER_CONTENT' });
slide.background = { color: 'F8F9FA' };

slide.addText('Perfil del Docente UniRural', {
  x: 0.5, y: 0.3, w: '90%', h: 0.8,
  fontSize: 36, fontFace: 'Arial', bold: true, color: colors.primary.red
});

const teacherComp = [
  'Facilitador del aprendizaje',
  'Diseñador curricular',
  'Acompañante y orientador',
  'Investigador y extensionista',
  'Actualización permanente',
  'Compromiso con el desarrollo rural'
];

teacherComp.forEach((comp, idx) => {
  const row = Math.floor(idx / 2);
  const col = idx % 2;
  const x = col === 0 ? 0.5 : 5;
  const y = 1.2 + row * 1.3;

  slide.addShape(pptx.shapes.RECTANGLE, {
    x: x, y: y, w: 4.3, h: 1,
    fill: { color: colors.primary.white },
    shadow: { type: 'outer', blur: 2, offset: 1, angle: 45, opacity: 0.15 }
  });

  slide.addShape(pptx.shapes.RECTANGLE, {
    x: x, y: y, w: 0.08, h: 1,
    fill: { color: colors.primary.green }
  });

  slide.addText(`✓ ${comp}`, {
    x: x + 0.2, y: y + 0.3, w: 4, h: 0.4,
    fontSize: 13, fontFace: 'Arial', bold: true, color: colors.neutral.grayDark
  });
});

// ==================== SLIDE 33: BIENESTAR ====================
slide = pptx.addSlide({ masterName: 'ISER_CONTENT' });

slide.addText('Sistema de Bienestar Institucional', {
  x: 0.5, y: 0.3, w: '90%', h: 0.8,
  fontSize: 34, fontFace: 'Arial', bold: true, color: colors.primary.red
});

const bienestarComp = [
  'Salud integral y hábitos saludables',
  'Orientación educativa y tutorías',
  'Competencias para la vida',
  'Permanencia e inclusión',
  'Promoción socioeconómica',
  'Artes y cultura',
  'Bienestar social laboral'
];

bienestarComp.forEach((comp, idx) => {
  const row = Math.floor(idx / 2);
  const col = idx % 2;
  const x = col === 0 ? 0.5 : 5;
  const y = 1.2 + row * 1.1;

  if (idx < 6) {
    slide.addShape(pptx.shapes.RECTANGLE, {
      x: x, y: y, w: 4.3, h: 0.9,
      fill: { color: 'F8F9FA' }
    });

    slide.addShape(pptx.shapes.RECTANGLE, {
      x: x, y: y, w: 4.3, h: 0.08,
      fill: { color: colors.primary.green }
    });

    slide.addText(comp, {
      x: x + 0.2, y: y + 0.3, w: 4, h: 0.4,
      fontSize: 13, fontFace: 'Arial', bold: true, color: colors.neutral.grayDark
    });
  }
});

// Last item centered
slide.addShape(pptx.shapes.RECTANGLE, {
  x: 2.75, y: 4.5, w: 4.3, h: 0.9,
  fill: { color: 'F8F9FA' }
});

slide.addShape(pptx.shapes.RECTANGLE, {
  x: 2.75, y: 4.5, w: 4.3, h: 0.08,
  fill: { color: colors.primary.green }
});

slide.addText(bienestarComp[6], {
  x: 2.95, y: 4.8, w: 4, h: 0.4,
  fontSize: 13, fontFace: 'Arial', bold: true, color: colors.neutral.grayDark
});

// ==================== SLIDE 34: INTERNACIONALIZACIÓN ====================
slide = pptx.addSlide({ masterName: 'ISER_TITLE' });
slide.background = { color: colors.secondary.blue };

slide.addText('Internacionalización', {
  x: 0.5, y: 0.4, w: '90%', h: 0.8,
  fontSize: 40, fontFace: 'Arial', bold: true, color: colors.primary.white
});

const intlDimensions = [
  'Alianzas con instituciones globales',
  'Movilidad académica entrante y saliente',
  'Contenidos multiculturales en currículo',
  'Redes académicas internacionales',
  'Diplomacia científica y cooperación',
  'Recursos multilingües'
];

intlDimensions.forEach((dim, idx) => {
  const row = Math.floor(idx / 2);
  const col = idx % 2;
  const x = col === 0 ? 0.5 : 5;
  const y = 1.4 + row * 1.4;

  slide.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
    x: x, y: y, w: 4.3, h: 1.1,
    fill: { color: '6FA8F5', transparency: 50 },
    line: { color: colors.primary.white, width: 2 }
  });

  slide.addText(`🌍 ${dim}`, {
    x: x + 0.2, y: y + 0.35, w: 4, h: 0.5,
    fontSize: 12, fontFace: 'Arial', color: colors.primary.white
  });
});

// ==================== SLIDE 35: GESTIÓN ====================
slide = pptx.addSlide({ masterName: 'ISER_CONTENT' });

slide.addText('Modelo de Gestión y Calidad', {
  x: 0.5, y: 0.3, w: '90%', h: 0.8,
  fontSize: 36, fontFace: 'Arial', bold: true, color: colors.primary.red
});

const gestionPrinciples = [
  'Trabajo por procesos',
  'Ciclos de mejora continua (PHVA)',
  'Toma de decisiones basada en datos',
  'Gestión del conocimiento',
  'Sistema de calidad ISO 9001:2015',
  'Transparencia y rendición de cuentas'
];

gestionPrinciples.forEach((principle, idx) => {
  const row = Math.floor(idx / 2);
  const col = idx % 2;
  const x = col === 0 ? 0.5 : 5;
  const y = 1.2 + row * 1.4;

  slide.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
    x: x, y: y, w: 4.3, h: 1.1,
    fill: { color: colors.primary.green },
    shadow: { type: 'outer', blur: 3, offset: 2, angle: 45, opacity: 0.25 }
  });

  slide.addText(`⚙️ ${principle}`, {
    x: x + 0.3, y: y + 0.35, w: 3.8, h: 0.5,
    fontSize: 13, fontFace: 'Arial', bold: true, color: colors.primary.white
  });
});

// ==================== SLIDE 36: COMPROMISOS ====================
slide = pptx.addSlide({ masterName: 'ISER_TITLE' });
slide.background = { color: colors.primary.green };

slide.addText('Nuestros Compromisos', {
  x: 0.5, y: 0.4, w: '90%', h: 0.7,
  fontSize: 40, fontFace: 'Arial', bold: true, color: colors.primary.yellow
});

const compromisos = [
  'Acceso, permanencia y graduación con calidad',
  'Transparencia y rendición de cuentas',
  'Participación de toda la comunidad',
  'Equidad territorial y poblacional',
  'Sostenibilidad ambiental y financiera',
  'Formación integral para el desarrollo rural'
];

compromisos.forEach((comp, idx) => {
  const y = 1.2 + idx * 0.75;

  slide.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
    x: 0.5, y: y, w: 9, h: 0.6,
    fill: { color: '2AAF98', transparency: 70 },
    line: { color: colors.primary.yellow, width: 2 }
  });

  slide.addShape(pptx.shapes.OVAL, {
    x: 0.7, y: y + 0.08, w: 0.44, h: 0.44,
    fill: { color: colors.primary.yellow }
  });

  slide.addText('✓', {
    x: 0.7, y: y + 0.08, w: 0.44, h: 0.44,
    fontSize: 14, fontFace: 'Arial', bold: true, color: colors.primary.green,
    align: 'center', valign: 'middle'
  });

  slide.addText(comp, {
    x: 1.3, y: y + 0.13, w: 8, h: 0.4,
    fontSize: 15, fontFace: 'Arial', color: colors.primary.white
  });
});

// ==================== SLIDE 37: RETOS ====================
slide = pptx.addSlide({ masterName: 'ISER_CONTENT' });

slide.addText('Retos del Cambio de Carácter', {
  x: 0.5, y: 0.3, w: '90%', h: 0.8,
  fontSize: 36, fontFace: 'Arial', bold: true, color: colors.primary.red
});

const retos = [
  'Consolidar oferta de programas profesionales',
  'Fortalecer capacidades de investigación',
  'Ampliar cobertura territorial',
  'Avanzar hacia la acreditación de alta calidad',
  'Desarrollar programas de posgrado',
  'Fortalecer vinculación con egresados'
];

retos.forEach((reto, idx) => {
  const y = 1.1 + idx * 0.8;

  slide.addShape(pptx.shapes.RECTANGLE, {
    x: 0.5, y: y, w: 9, h: 0.65,
    fill: { color: 'FEF2F2' }
  });

  slide.addShape(pptx.shapes.RECTANGLE, {
    x: 0.5, y: y, w: 0.08, h: 0.65,
    fill: { color: colors.primary.red }
  });

  slide.addShape(pptx.shapes.OVAL, {
    x: 0.7, y: y + 0.1, w: 0.45, h: 0.45,
    fill: { color: colors.primary.red }
  });

  slide.addText('!', {
    x: 0.7, y: y + 0.1, w: 0.45, h: 0.45,
    fontSize: 16, fontFace: 'Arial', bold: true, color: colors.primary.white,
    align: 'center', valign: 'middle'
  });

  slide.addText(reto, {
    x: 1.3, y: y + 0.15, w: 8, h: 0.4,
    fontSize: 14, fontFace: 'Arial', color: colors.neutral.grayDark
  });
});

// ==================== SLIDE 38: HORIZONTE 2034 ====================
slide = pptx.addSlide({ masterName: 'ISER_TITLE' });
slide.background = { color: colors.secondary.blue };

slide.addText('Horizonte 2034', {
  x: 0.5, y: 0.3, w: '90%', h: 0.7,
  fontSize: 44, fontFace: 'Arial', bold: true, color: colors.primary.yellow
});

slide.addText('Una institución universitaria acreditada, incluyente y líder', {
  x: 0.5, y: 0.95, w: '90%', h: 0.4,
  fontSize: 18, fontFace: 'Arial', color: colors.primary.white
});

const goals = [
  'Acreditación institucional de alta calidad',
  'Oferta ampliada de programas profesionales y posgrados',
  'Presencia consolidada en 6+ departamentos',
  'Grupos de investigación categoría A',
  'Alianzas internacionales estratégicas',
  'Referente nacional en educación rural'
];

goals.forEach((goal, idx) => {
  const row = Math.floor(idx / 2);
  const col = idx % 2;
  const x = col === 0 ? 0.5 : 5;
  const y = 1.5 + row * 1.3;

  slide.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
    x: x, y: y, w: 4.3, h: 1,
    fill: { color: '6FA8F5', transparency: 50 },
    line: { color: colors.primary.yellow, width: 2 }
  });

  slide.addText(`🎯 ${goal}`, {
    x: x + 0.2, y: y + 0.3, w: 4, h: 0.5,
    fontSize: 11, fontFace: 'Arial', color: colors.primary.white
  });
});

// ==================== SLIDE 39: CIERRE ====================
slide = pptx.addSlide({ masterName: 'ISER_TITLE' });
slide.background = { color: colors.primary.green };

slide.addText('69 años formando el campo colombiano', {
  x: 0.5, y: 1, w: '90%', h: 0.8,
  fontSize: 40, fontFace: 'Arial', bold: true, color: colors.primary.yellow,
  align: 'center'
});

slide.addText('Hacia una institución universitaria de excelencia', {
  x: 0.5, y: 1.8, w: '90%', h: 0.5,
  fontSize: 20, fontFace: 'Arial', color: colors.primary.white,
  align: 'center'
});

slide.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
  x: 1, y: 2.5, w: 8, h: 1.5,
  fill: { color: '2AAF98', transparency: 70 },
  line: { color: colors.primary.yellow, width: 2 }
});

slide.addText('"El desarrollo humano es el proceso de ampliación de las capacidades de las personas, ubicándolas en el centro con capacidad de agencia para transformarse y transformar su entorno."', {
  x: 1.2, y: 2.7, w: 7.6, h: 1.1,
  fontSize: 13, fontFace: 'Arial', italic: true, color: colors.primary.white,
  align: 'center'
});

slide.addText('Instituto Superior de Educación Rural - UniRural', {
  x: 0.5, y: 4.2, w: '90%', h: 0.4,
  fontSize: 16, fontFace: 'Arial', color: colors.primary.white,
  align: 'center'
});

slide.addText('vigilado Mineducación', {
  x: 0.5, y: 4.6, w: '90%', h: 0.3,
  fontSize: 11, fontFace: 'Arial', italic: true, color: colors.primary.white,
  align: 'center'
});

slide.addText('🌱', {
  x: 0.5, y: 4.95, w: '90%', h: 0.4,
  fontSize: 28, align: 'center'
});

// Guardar el archivo
pptx.writeFile({ fileName: '/home/user/ISER-PEI/PEI-UniRural-Presentacion.pptx' })
  .then(fileName => {
    console.log(`Presentación creada exitosamente: ${fileName}`);
  })
  .catch(err => {
    console.error('Error al crear la presentación:', err);
  });
