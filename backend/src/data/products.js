let productos = [
  {
    nombre: "Aparador Uspallata",
    descripcion:
      "Aparador de seis puertas fabricado en nogal sostenible con tiradores metálicos en acabado latón. Su silueta minimalista realza el veteado natural de la madera, creando una pieza que combina funcionalidad y elegancia atemporal para espacios contemporáneos.",
    imagen: "/AparadorUspallata.png",
    id: 1001,
    precio: 200000,
    atributos: {
      medidas: "180 x 45 x 75 cm",
      materiales: "Nogal macizo FSC®, herrajes de latón",
      acabado: "Aceite natural ecológico",
      peso: "68 kg",
      capacidad: "6 compartimentos interiores",
    },
    categoria: "escritorio"
  },
  {
    nombre: "Biblioteca Recoleta",
    descripcion:
      "Sistema modular de estantes abierto que combina estructura de acero Sage Green y repisas en roble claro. Perfecta para colecciones y objetos de diseño, su diseño versátil se adapta a cualquier espacio contemporáneo con elegancia funcional.",
    imagen: "/BibliotecaRecoleta.png",
    id: 1002,
    precio: 120000,
    atributos: {
      medidas: "100 x 35 x 200 cm",
      materiales: "Estructura de acero, estantes de roble",
      acabado: "Laca mate ecológica",
      capacidad: "45 kg por estante",
      modulares: "5 estantes ajustables",
    },
    categoria: "biblioteca"
  },
  {
    nombre: "Butaca Mendoza",
    descripcion:
      "Butaca tapizada en bouclé Dusty Rose con base de madera de guatambú. El respaldo curvo abraza el cuerpo y ofrece máximo confort, mientras que su diseño orgánico aporta calidez y sofisticación a cualquier ambiente contemporáneo.",
    imagen: "/ButacaMendoza.png",
    id: 1003,
    precio: 150000,
    atributos: {
      medidas: "80 x 75 x 85 cm",
      materiales: "Guatambú macizo, tela bouclé",
      acabado: "Cera vegetal, tapizado premium",
      tapizado: "Repelente al agua y manchas",
      confort: "Espuma alta densidad",
    },
    categoria: "sillon"
  },
  {
    nombre: "Sillón Copacabana",
    descripcion:
      "Sillón lounge en cuero cognac con base giratoria en acero Burnt Sienna. Inspirado en la estética brasilera moderna de los 60, combina comodidad excepcional con un diseño icónico que trasciende tendencias y épocas.",
    imagen: "/SillonCopacabana.png",
    id: 1004,
    precio: 165000,
    atributos: {
      medidas: "90 x 85 x 95 cm",
      materiales: "Cuero curtido vegetal, acero pintado",
      acabado: "Cuero anilina premium",
      rotacion: "360° silenciosa y suave",
      garantia: "10 años en estructura",
    },
    categoria: "sillon"
  },
  {
    nombre: "Mesa de Centro Araucaria",
    descripcion:
      "Mesa de centro con sobre circular de mármol Patagonia y base de tres patas en madera de nogal. Su diseño minimalista se convierte en el punto focal perfecto para cualquier sala de estar contemporánea, combinando la frialdad del mármol con la calidez de la madera.",
    imagen: "/MesaDeCentroAraucaria.png",
    id: 1005,
    precio: 110000,
    atributos: {
      medidas: "90 x 90 x 45 cm",
      materiales: "Sobre de mármol Patagonia, patas de nogal",
      acabado: "Mármol pulido, aceite natural en madera",
      peso: "42 kg",
      carga_maxima: "25 kg distribuidos",
    },
    categoria: "mesa"
  },
  {
    nombre: "Mesa de Noche Aconcagua",
    descripcion:
      "Mesa de noche con cajón oculto y repisa inferior en roble certificado FSC®. Su diseño limpio y funcional permite convivir con diferentes estilos de dormitorio, ofreciendo almacenamiento discreto y elegante para objetos personales.",
    imagen: "/MesaDeNocheAconcagua.png",
    id: 1006,
    precio: 80000,
    atributos: {
      medidas: "45 x 35 x 60 cm",
      materiales: "Roble macizo FSC®, herrajes soft-close",
      acabado: "Barniz mate de poliuretano",
      almacenamiento: "1 cajón + repisa inferior",
      caracteristicas: "Cajón con cierre suave",
    },
    categoria: "mesa"
  },
  {
    nombre: "Cama Neuquén",
    descripcion:
      "Cama plataforma con cabecero flotante tapizado en lino natural y estructura de madera maciza. Su diseño minimalista y sofisticado crea un ambiente de serenidad y elegancia, perfecto para dormitorios contemporáneos que buscan paz y simplicidad.",
    imagen: "/CamaNeuquen.png",
    id: 1007,
    precio: 250000,
    atributos: {
      medidas: "160 x 200 x 90 cm",
      materiales: "Roble macizo FSC®, tapizado lino",
      acabado: "Aceite natural, tapizado premium",
      colchon: "Compatible con colchón 160x200",
      caracteristicas: "Cabecero flotante acolchado",
    },
    categoria: "cama"
  },
  {
    nombre: "Sofá Patagonia",
    descripcion:
      "Sofá de tres cuerpos tapizado en lino Warm Alabaster con patas cónicas de madera. Los cojines combinan espuma de alta resiliencia con plumón reciclado, ofreciendo comodidad duradera y sostenible para el hogar moderno.",
    imagen: "/SofaPatagonia.png",
    id: 1008,
    precio: 300000,
    atributos: {
      medidas: "220 x 90 x 80 cm",
      estructura: "Madera de eucalipto certificada FSC®",
      tapizado: "Lino 100% natural premium",
      relleno: "Espuma HR + plumón reciclado",
      sostenibilidad: "Materiales 100% reciclables",
    },
    categoria: "sillon"
  },
  {
    nombre: "Mesa Comedor Pampa",
    descripcion:
      "Mesa extensible de roble macizo con tablero biselado y sistema de apertura suave. Su diseño robusto y elegante se adapta perfectamente a reuniones íntimas o grandes celebraciones familiares, extendiéndose de 6 a 10 comensales.",
    imagen: "/MesaComedorPampa.png",
    id: 1009,
    precio: 270000,
    atributos: {
      medidas: "160-240 x 90 x 75 cm",
      materiales: "Roble macizo FSC®, mecanismo alemán",
      acabado: "Aceite-cera natural",
      capacidad: "6-10 comensales",
      extension: "Sistema de mariposa central",
    },
    categoria: "mesa"
  },
  {
    nombre: "Sillas Córdoba",
    descripcion:
      "Set de cuatro sillas apilables en contrachapado moldeado de nogal y estructura tubular pintada en Sage Green. Su diseño ergonómico y materiales de calidad garantizan comodidad y durabilidad en el uso diario, perfectas para comedores contemporáneos.",
    imagen: "/SillasCordoba.png",
    id: 1010,
    precio: 80000,
    atributos: {
      medidas: "45 x 52 x 80 cm (cada una)",
      materiales: "Contrachapado nogal, tubo de acero",
      acabado: "Laca mate, pintura epoxi",
      apilables: "Hasta 6 sillas",
      incluye: "Set de 4 sillas",
    },
    categoria: "silla"
  },
  {
    nombre: "Escritorio Costa",
    descripcion:
      "Escritorio compacto con cajón organizado y tapa pasacables integrada en bambú laminado. Ideal para espacios de trabajo en casa, combina funcionalidad moderna con estética minimalista y sostenible, perfecto para el trabajo remoto.",
    imagen: "/EscritorioCosta.png",
    id: 1011,
    precio: 140000,
    atributos: {
      medidas: "120 x 60 x 75 cm",
      materiales: "Bambú laminado, herrajes ocultos",
      acabado: "Laca mate resistente",
      almacenamiento: "1 cajón con organizador",
      cables: "Pasacables integrado",
    },
    categoria: "escritorio"
  },
  {
    nombre: "Silla de Trabajo Belgrano",
    descripcion:
      "Silla ergonómica regulable en altura con respaldo de malla transpirable y asiento tapizado en tejido reciclado. Diseñada para largas jornadas de trabajo con máximo confort y apoyo lumbar, ideal para oficinas en casa y espacios de coworking.",
    imagen: "/SillaDeTrabajoBelgrano.png",
    id: 1012,
    precio: 160000,
    atributos: {
      medidas: "60 x 60 x 90-100 cm",
      materiales: "Malla técnica, tejido reciclado",
      acabado: "Base cromada, tapizado premium",
      regulacion: "Altura + inclinación respaldo",
      certificacion: "Ergonomía europea EN 1335",
    },
    categoria: "silla"
  },
];

export default productos;