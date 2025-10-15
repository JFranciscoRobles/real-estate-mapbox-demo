
export interface Property {
  id: string
  title: string
  location: string
  price: number
  beds: number
  baths: number
  sqft: number
  type: string
  division: string
  slug: string

  status: "For Sale" | "For Rent" | "Sold"
  image: string
  coordinates: {
    lat: number
    lng: number
  }
}

export const properties: Property[] = [
  {
    "id": "1",
    "title": "Casa en Renta en Vistas del Sol – 3 Recámaras, Family Room y Jardín con Asador",
    "location": "Residencial Agua Caliente, Tijuana",
    "slug": "casa-renta-vistas-del-sol-3recamaras-family-room-jardin",
    "type": "casas",
    "division": "residencial",
    "price": 2800,
    "beds": 3,
    "baths": 3.5,
    "sqft": 310,
    "status": "For Rent",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBRAIZAS01_1.jpg",
    "coordinates": {
      "lat": 32.486683585,
      "lng": -116.989732009
    }
  },
  {
    "id": "2",
    "title": "Departamento Loft en Renta en Montebello – Vista Panorámica y Balcón",
    "location": "Monte Bello, Tijuana",
    "slug": "departamento-renta-montebello-tijuana-2-recamaras-vista-ciudad",
    "type": "departamentos",
    "division": "residencial",
    "price": 900,
    "beds": 1,
    "baths": 1,
    "sqft": 46.65,
    "status": "For Rent",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBRGAIDLEZ01_1.jpg",
    "coordinates": {
      "lat": 32.492949722,
      "lng": -116.981834375
    }
  },
  {
    "id": "3",
    "title": "Casa en Renta en La Presa – Privada con Seguridad y Paneles Solares",
    "location": "Terrazas de la Presa, Tijuana",
    "slug": "casa-renta-la-presa-privada-paneles-solares",
    "type": "casas",
    "division": "residencial",
    "price": 15000,
    "beds": 3,
    "baths": 2.5,
    "sqft": 0,
    "status": "For Rent",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBRPUALAS01_1.jpg",
    "coordinates": {
      "lat": 32.443576111,
      "lng": -116.923561617
    }
  },
  {
    "id": "4",
    "title": "Departamento de Lujo en Venta en New City Residencial – Torre Rubí",
    "location": "Zona Urbana Rio, Tijuana",
    "slug": "departamento-lujo-venta-new-city-residencial-torre-rubi-piso-15",
    "type": "departamentos",
    "division": "residencial",
    "price": 520000,
    "beds": 2,
    "baths": 2,
    "sqft": 140,
    "status": "For Sale",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBVTUCCIS01_1.jpg",
    "coordinates": {
      "lat": 32.537450722,
      "lng": -117.022502156
    }
  },
  {
    "id": "5",
    "title": "Departamento en Renta en La Cacho – Exclusividad y Confort",
    "location": "Cacho, Tijuana",
    "slug": "departamento-renta-cacho-exclusivo-tijuana",
    "type": "departamentos",
    "division": "residencial",
    "price": 2400,
    "beds": 2,
    "baths": 3,
    "sqft": 0,
    "status": "For Rent",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBRARIHER01_01.jpg",
    "coordinates": {
      "lat": 32.513161347,
      "lng": -117.024482817
    }
  },
  {
    "id": "6",
    "title": "Departamento en Renta en Las Ventanas, Rosarito – Amueblado, Cerca del Mar",
    "location": "Playas de Rosarito, Rosarito",
    "slug": "departamento-renta-las-ventanas-rosarito-amueblado",
    "type": "departamentos",
    "division": "residencial",
    "price": 2200,
    "beds": 3,
    "baths": 2,
    "sqft": 386.5,
    "status": "For Rent",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBRNENDA01_3.jpg",
    "coordinates": {
      "lat": 32.360691724,
      "lng": -117.050142678
    }
  },
  {
    "id": "7",
    "title": "Casa en Renta en Vistas de Santa Fe – 3 Recámaras y 3 Baños Completos",
    "location": "Santa fe, Tijuana",
    "slug": "casa-renta-vistas-santa-fe-3recamaras-3banos-2niveles",
    "type": "casas",
    "division": "residencial",
    "price": 20000,
    "beds": 3,
    "baths": 3,
    "sqft": 115.57,
    "status": "For Rent",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBRBLARAN01_11.jpg",
    "coordinates": {
      "lat": 32.450051898,
      "lng": -117.037992892
    }
  },
  {
    "id": "8",
    "title": "Terreno en Venta en Colonia Cacho – 245 m² Ideal para Residencia o Torre de Departamentos",
    "location": "Cacho, Tijuana",
    "slug": "terreno-venta-colonia-cacho-tijuana-245m2-inversion",
    "type": "terrenos-residenciales",
    "division": "residencial",
    "price": 800,
    "beds": 0,
    "baths": 0,
    "sqft": 0,
    "status": "For Sale",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBVREZDEZN01_1.jpg",
    "coordinates": {
      "lat": 32.519976377,
      "lng": -117.028066788
    }
  },
  {
    "id": "9",
    "title": "Casa Nueva en Venta en Residencial San Marino – 3 Recámaras y Terraza con Vista al Mar",
    "location": "San Marino, Tijuana",
    "slug": "casa-venta-residencial-san-marino-3recamaras-terraza-vista-mar",
    "type": "casas",
    "division": "residencial",
    "price": 479000,
    "beds": 3,
    "baths": 2.5,
    "sqft": 322,
    "status": "For Sale",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBVLADEZH01_18.jpg",
    "coordinates": {
      "lat": 32.413789073,
      "lng": -117.091430162
    }
  },
  {
    "id": "10",
    "title": "Condominio de Lujo en Renta en Playas de Tijuana Indigo – Frente al Mar con Amenidades Exclusivas",
    "location": "Playas de Tijuana, Tijuana",
    "slug": "condominio-lujo-renta-playas-tijuana-frente-mar-3recamaras-amenidades",
    "type": "departamentos",
    "division": "residencial",
    "price": 2800,
    "beds": 3,
    "baths": 2.5,
    "sqft": 200,
    "status": "For Rent",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBRCYHERL01_20.jpg",
    "coordinates": {
      "lat": 32.514200992,
      "lng": -117.123466157
    }
  },
  {
    "id": "11",
    "title": "Casa en Venta en Playas de Tijuana – 3 Recámaras y 3 Estacionamientos",
    "location": "Playas de Tijuana, Tijuana",
    "slug": "casa-venta-playas-tijuana-3recamaras-3estacionamientos",
    "type": "casas",
    "division": "residencial",
    "price": 260000,
    "beds": 3,
    "baths": 1.5,
    "sqft": 110,
    "status": "For Sale",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBRELANEZ01_1.jpg",
    "coordinates": {
      "lat": 32.521376792,
      "lng": -117.117716639
    }
  },
  {
    "id": "12",
    "title": "Terreno en Venta en Residencial Punta Piedra – 464 m² a 2 Cuadras del Océano",
    "location": "Punta Piedra, Ensenada",
    "slug": "terreno-venta-residencial-punta-piedra-baja-california-464m2",
    "type": "terrenos-residenciales",
    "division": "residencial",
    "price": 290000,
    "beds": 0,
    "baths": 0,
    "sqft": 0,
    "status": "For Sale",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBVVILLLES01_1.jpg",
    "coordinates": {
      "lat": 32.08440636,
      "lng": -116.883616382
    }
  },
  {
    "id": "13",
    "title": "Departamento Amueblado en Renta en Garden Homes – 1 Recámara con Vista al Mar y Amenidades",
    "location": "Condominio GardenHomes, Tijuana",
    "slug": "departamento-renta-garden-homes-tijuana-1recamara-amueblado-vista-mar",
    "type": "departamentos",
    "division": "residencial",
    "price": 860,
    "beds": 1,
    "baths": 1,
    "sqft": 53.03,
    "status": "For Rent",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBRLLENRES01_1.jpg",
    "coordinates": {
      "lat": 32.428092288,
      "lng": -117.093640308
    }
  },
  {
    "id": "14",
    "title": "Casa en Renta en Colonia Cacho – Estilo Toscano con 3 Recámaras y Cochera Techada",
    "location": "Cacho, Tijuana",
    "slug": "casa-renta-colonia-cacho-toscano-3recamaras-cochera-techada",
    "type": "casas",
    "division": "residencial",
    "price": 3000,
    "beds": 3,
    "baths": 2.5,
    "sqft": 0,
    "status": "For Rent",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBRGONLBA01_1.jpg",
    "coordinates": {
      "lat": 32.516884905,
      "lng": -117.030087995
    }
  },
  {
    "id": "15",
    "title": "Departamento en Renta en Lomas Doctores – 2 Recámaras, 2 Baños y Estacionamiento Doble",
    "location": "Lomas Doctores, Tijuana",
    "slug": "departamento-renta-lomas-doctores-chula-vista-2recamaras-2banos-estacionamiento",
    "type": "departamentos",
    "division": "residencial",
    "price": 1200,
    "beds": 2,
    "baths": 2,
    "sqft": 78,
    "status": "For Rent",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBRCHERFAI0117.jpg",
    "coordinates": {
      "lat": 32.50769293,
      "lng": -117.018880231
    }
  },
  {
    "id": "16",
    "title": "Departamentos en Venta Vivet en Colonia Gabilondo – Amplios Espacios de 3 Recámaras con Terraza Panorámica",
    "location": "Gabilondo, Tijuana",
    "slug": "departamentos-en-venta-colonia-gabilondo-tijuana-3-recamaras-amplios-espacios-terraza-panoramica",
    "type": "departamentos",
    "division": "residencial",
    "price": 7707800,
    "beds": 3,
    "baths": 2,
    "sqft": 144.71,
    "status": "For Sale",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBVFELDRON02_1.jpg",
    "coordinates": {
      "lat": 32.514615712,
      "lng": -117.020066388
    }
  },
  {
    "id": "17",
    "title": "Departamentos en Venta en Residencial Cuadra – Últimas Unidades con Vista Panorámica y Roof Top",
    "location": "Defensores de Baja California, Tijuana",
    "slug": "departamentos-en-venta-residencial-cuadra-tijuana-ultimas-unidades-vista-panoramica-rooftop-2-recamaras-2-banos",
    "type": "departamentos",
    "division": "residencial",
    "price": 4200000,
    "beds": 2,
    "baths": 2,
    "sqft": 91.33,
    "status": "For Sale",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBVFELDRON01_1-1.jpg",
    "coordinates": {
      "lat": 32.526634371,
      "lng": -117.003941858
    }
  },
  {
    "id": "18",
    "title": "Departamento en Renta en Kyo Hipódromo – Excelente Ubicación y Amenidades",
    "location": "Geronimo Meza, Tijuana",
    "slug": "departamento-en-renta-kyo-hipodromo-tijuana-accesos-controlados-seguridad-amenidades-cerca-de-garita",
    "type": "departamentos",
    "division": "residencial",
    "price": 1400,
    "beds": 3,
    "baths": 2,
    "sqft": 90.33,
    "status": "For Rent",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBRMENRA01as_6.jpg",
    "coordinates": {
      "lat": 32.499052435,
      "lng": -116.98185011
    }
  },
  {
    "id": "19",
    "title": "Departamento en Venta Amueblado en Life by Cosmopolitan – Frente al Club Campestre",
    "location": "Blvd. Agua Caliente, Tijuana",
    "slug": "departamento-en-venta-life-by-cosmopolitan-amueblado-frente-al-club-campestre-1-recmara-amenidades-tijuana",
    "type": "departamentos",
    "division": "residencial",
    "price": 250000,
    "beds": 1,
    "baths": 1.5,
    "sqft": 52.57,
    "status": "For Sale",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBVRUPHRE01_1.jpg",
    "coordinates": {
      "lat": 32.51285278,
      "lng": -117.002567032
    }
  },
  {
    "id": "20",
    "title": "Departamento en Venta en Torre del Ego – Exclusividad, Vistas Panorámicas y Terraza Amplia",
    "location": "9 Seccion, Tijuana",
    "slug": "departamento-en-venta-torre-del-ego-exclusivo-9-unidades-vista-panoramica-terraza-gimnasio-ubicacion-privilegiada",
    "type": "departamentos",
    "division": "residencial",
    "price": 570000,
    "beds": 3,
    "baths": 2,
    "sqft": 156.67,
    "status": "For Sale",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBVALLRIO01_1.jpg",
    "coordinates": {
      "lat": 32.502299097,
      "lng": -117.005456587
    }
  },
  {
    "id": "21",
    "title": "Casa en Renta / Venta en Laderas de Monterrey – 3 Niveles, Elevador y Amplio Patio con Vista",
    "location": "Laderas de Monterrey, Tijuana",
    "slug": "casa-renta-laderas-monterrey-3niveles-elevador-patio-vista",
    "type": "casas",
    "division": "residencial",
    "price": 3500,
    "beds": 3,
    "baths": 7,
    "sqft": 0,
    "status": "For Rent",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBRLIRADRIN01a_1.jpg",
    "coordinates": {
      "lat": 32.507408134,
      "lng": -117.025477862
    }
  },
  {
    "id": "22",
    "title": "Casas en Venta en Pino Real – 3 Recámaras, 2 Niveles y Excelente Ubicación",
    "location": "Campos, Tijuana",
    "slug": "casas-nuevas-venta-pino-real-tijuana-3recamaras-2niveles-patio",
    "type": "casas",
    "division": "residencial",
    "price": 4000000,
    "beds": 3,
    "baths": 2.5,
    "sqft": 0,
    "status": "For Sale",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBVQUEZTES01_1.jpg",
    "coordinates": {
      "lat": 32.470342119,
      "lng": -116.938632617
    }
  },
  {
    "id": "23",
    "title": "Casa en Renta en Colonia Sonora – En privada con Excelente Ubicación",
    "location": "Colonia Sonora, Tijuana",
    "slug": "casa-renta-colonia-sonora-tijuana-privada-segura-excelente-ubicacion",
    "type": "casas",
    "division": "residencial",
    "price": 1550,
    "beds": 3,
    "baths": 2.5,
    "sqft": 120,
    "status": "For Rent",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBRDROQUEZ01_18.jpg",
    "coordinates": {
      "lat": 32.496965057,
      "lng": -116.978257481
    }
  },
  {
    "id": "24",
    "title": "Locales Comerciales en Renta o Venta en Playas de Tijuana The Wesley – Frente a Plaza Monumental con Vistas al Mar",
    "location": "Playas de Tijuana, Tijuana",
    "slug": "locales-comerciales-renta-venta-playas-tijuana-plaza-monumental-vistas-mar",
    "type": "locales",
    "division": "comercial",
    "price": 25,
    "beds": 0,
    "baths": 0,
    "sqft": 1650,
    "status": "For Rent",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBVGOPREP01_1.jpg",
    "coordinates": {
      "lat": 32.532293647,
      "lng": -117.118394317
    }
  },
  {
    "id": "25",
    "title": "Terreno en Esquina en Venta en Colonia Ciudad Jardín – 264 m² con Gran Potencial",
    "location": "Ciudad Jardin, Tijuana",
    "slug": "terreno-en-venta-esquina-colonia-ciudad-jardin-tijuana-264m2",
    "type": "terrenos-comerciales",
    "division": "comercial",
    "price": 120000,
    "beds": 0,
    "baths": 0,
    "sqft": 0,
    "status": "For Sale",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBVALEZUEL01_cs_1.jpg",
    "coordinates": {
      "lat": 32.515958345,
      "lng": -117.064937306
    }
  },
  {
    "id": "26",
    "title": "Casa en Renta en Valle de Guadalupe – 2 Recámaras, Amueblada y con Patio",
    "location": "Valle de Guadalupe, Ensenada",
    "slug": "casa-en-renta-valle-de-guadalupe-3-recamaras-amueblada-patio-asador",
    "type": "casas",
    "division": "residencial",
    "price": 18000,
    "beds": 2,
    "baths": 2,
    "sqft": 0,
    "status": "For Rent",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBRDALUTZ01_1.jpg",
    "coordinates": {
      "lat": 31.967779672,
      "lng": -116.656370421
    }
  },
  {
    "id": "27",
    "title": "Departamento en Renta en Residencial Chula Vista, Lomas Doctores – 2 Recámaras y Estacionamiento",
    "location": "Lomas Doctores, Tijuana",
    "slug": "departamento-en-renta-residencial-chula-vista-lomas-doctores-tijuana-2-recamaras",
    "type": "departamentos",
    "division": "residencial",
    "price": 1050,
    "beds": 2,
    "baths": 2,
    "sqft": 78,
    "status": "For Rent",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBRRAORS01_1.jpg",
    "coordinates": {
      "lat": 32.509163408,
      "lng": -117.018947563
    }
  },
  {
    "id": "28",
    "title": "Departamento Flex en Venta Ruelle - En Zona Centro",
    "location": "Zona Centro, Tijuana",
    "slug": "departamento-flex-en-venta-ruelle-en-zona-centro",
    "type": "departamentos",
    "division": "residencial",
    "price": 289000,
    "beds": 1,
    "baths": 2,
    "sqft": 92,
    "status": "For Sale",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBVOZCCO01_3.jpg",
    "coordinates": {
      "lat": 32.529670109,
      "lng": -117.035593904
    }
  },
  {
    "id": "29",
    "title": "Oficina en Renta Coworking 59.44 m² - En Plaza Alameda Otay",
    "location": "Otay, Tijuana",
    "slug": "oficina-en-renta-coworking-5944-en-plaza-alameda-otay",
    "type": "oficinas",
    "division": "comercial",
    "price": 42000,
    "beds": 0,
    "baths": 2,
    "sqft": 59.44,
    "status": "For Rent",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBRFAOPER04_1.jpg",
    "coordinates": {
      "lat": 32.530707954,
      "lng": -116.950725817
    }
  },
  {
    "id": "30",
    "title": "Oficina en Renta Coworking 121.92 m² - En Plaza Alameda Otay",
    "location": "Otay, Tijuana",
    "slug": "oficina-en-renta-coworking-121-en-plaza-alameda-otay",
    "type": "oficinas",
    "division": "comercial",
    "price": 84000,
    "beds": 0,
    "baths": 2,
    "sqft": 121.92,
    "status": "For Rent",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBRFAOPER03_1.jpg",
    "coordinates": {
      "lat": 32.530707954,
      "lng": -116.950725817
    }
  },
  {
    "id": "31",
    "title": "Casa en Venta en Residencial Madeiras, Cuesta Blanca – Roof Garden y Acabados de Lujo",
    "location": "Cuesta Blanca, Tijuana",
    "slug": "casa-en-venta-residencial-madeiras-cuesta-blanca-roof-garden-3-recamaras",
    "type": "casas",
    "division": "residencial",
    "price": 4999999,
    "beds": 4,
    "baths": 3,
    "sqft": 197,
    "status": "For Sale",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBVRRACIO01_18.jpg",
    "coordinates": {
      "lat": 32.419151217,
      "lng": -117.029611219
    }
  },
  {
    "id": "32",
    "title": "Casa en Renta en Verona Residencial, Tijuana – 3 Recámaras y Amenidades",
    "location": "Santa fe, Tijuana",
    "slug": "casa-en-renta-verona-residencial-tijuana-3-recamaras-amenidades",
    "type": "casas",
    "division": "residencial",
    "price": 900,
    "beds": 3,
    "baths": 1.5,
    "sqft": 144.33,
    "status": "For Rent",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBRLEZRORA01_1.jpg",
    "coordinates": {
      "lat": 32.454587865,
      "lng": -117.035539778
    }
  },
  {
    "id": "33",
    "title": "Traspaso de Clínica Estética y Spa en Zona Dorada de Tijuana – Plaza Domino",
    "location": "Blvd. Agua Caliente, Tijuana",
    "slug": "traspaso-clinica-estetica-spa-zona-dorada-tijuana-plaza-domino",
    "type": "locales",
    "division": "comercial",
    "price": 0,
    "beds": 0,
    "baths": 0,
    "sqft": 110,
    "status": "For Sale",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBVLEONMAR01_1.jpg",
    "coordinates": {
      "lat": 32.51386624,
      "lng": -117.004507975
    }
  },
  {
    "id": "34",
    "title": "Casa en Renta en Hacienda Agua Caliente, Tijuana – Jardín y Terraza Techada",
    "location": "Hacienda Agua Caliente, Tijuana",
    "slug": "casa-en-renta-hacienda-agua-caliente-tijuana-jardin-terraza",
    "type": "casas",
    "division": "residencial",
    "price": 3500,
    "beds": 3,
    "baths": 4.5,
    "sqft": 358,
    "status": "For Rent",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBRROMEN01_1.jpg",
    "coordinates": {
      "lat": 32.488845472,
      "lng": -117.001408594
    }
  },
  {
    "id": "35",
    "title": "Residencia de Lujo en Cumbres de Juárez – Privada con Casa Club",
    "location": "Cumbres de Juarez, Tijuana",
    "slug": "residencia-lujo-cumbres-de-juarez-tijuana-casa-club-alberca-paneles-solares",
    "type": "casas",
    "division": "residencial",
    "price": 1350000,
    "beds": 3,
    "baths": 4.5,
    "sqft": 475,
    "status": "For Sale",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/cumbresdejuarez.jpg",
    "coordinates": {
      "lat": 32.507359487,
      "lng": -117.034485519
    }
  },
  {
    "id": "36",
    "title": "Departamento en Renta en Las Huertas 2da Sección – Moderno y Bien Ubicado",
    "location": "Las Huertas 2da Seccion, Tijuana",
    "slug": "departamento-en-renta-las-huertas-2da-seccion-tijuana-moderno-ubicacion",
    "type": "departamentos",
    "division": "residencial",
    "price": 900,
    "beds": 2,
    "baths": 1,
    "sqft": 0,
    "status": "For Rent",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBRRREROQUEZ01_1.jpg",
    "coordinates": {
      "lat": 32.487602623,
      "lng": -116.951775936
    }
  },
  {
    "id": "37",
    "title": "Edificio en Venta en Zona Centro de Tijuana – 8 Consultorios, Estacionamiento y Penthouse",
    "location": "Zona centro, Tijuana",
    "slug": "edificio-en-venta-zona-centro-tijuana-8-consultorios-estacionamiento-penthouse",
    "type": "edificios",
    "division": "comercial",
    "price": 1300000,
    "beds": 0,
    "baths": 9,
    "sqft": 869.5,
    "status": "For Sale",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBVNDGADO01_n_1.jpg",
    "coordinates": {
      "lat": 32.533529641,
      "lng": -117.044094802
    }
  },
  {
    "id": "38",
    "title": "Traspaso de Cycling Studio en Paseo Chapultepec, Tijuana – 7 Años de Éxito Operativo",
    "location": "Blvd. Agua Caliente, Tijuana",
    "slug": "traspaso-cycling-studio-paseo-chapultepec-tijuana-equipo-clientes-operando",
    "type": "locales",
    "division": "comercial",
    "price": 0,
    "beds": 0,
    "baths": 1,
    "sqft": 121.3,
    "status": "For Sale",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBVOPRENK01_1.jpg",
    "coordinates": {
      "lat": 32.514403436,
      "lng": -117.0122048
    }
  },
  {
    "id": "39",
    "title": "Local Comercial en Renta sobre Paseo Playas de Tijuana – Alta Visibilidad y 1,200 m²",
    "location": "Playas de Tijuana, Tijuana",
    "slug": "local-comercial-venta-paseo-playas-tijuana-alta-visibilidad-1200m2",
    "type": "locales",
    "division": "comercial",
    "price": 16200,
    "beds": 0,
    "baths": 2,
    "sqft": 1200,
    "status": "For Rent",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBRUNAROL01_1.jpg",
    "coordinates": {
      "lat": 32.526651452,
      "lng": -117.120279249
    }
  },
  {
    "id": "40",
    "title": "Departamento en Venta en Privada Magnolia, Hipódromo Dos – Amplios Espacios y Dos Terrazas",
    "location": "Hipodromo Dos, Tijuana",
    "slug": "departamento-en-venta-privada-magnolia-hipodromo-amplios-espacios-dos-terrazas",
    "type": "departamentos",
    "division": "residencial",
    "price": 5250000,
    "beds": 3,
    "baths": 2,
    "sqft": 154.39,
    "status": "For Sale",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBVALELES01_1.jpg",
    "coordinates": {
      "lat": 32.498094637,
      "lng": -116.982975446
    }
  },
  {
    "id": "41",
    "title": "Casa en Venta en Boulevard Las Américas | Amplios Espacios para Remodelar a tu Gusto",
    "location": "Lomas de Agua Caliente, Tijuana",
    "slug": "casa-en-venta-boulevard-las-americas-amplios-espacios-para-remodelar-tijuana",
    "type": "casas",
    "division": "residencial",
    "price": 16500000,
    "beds": 5,
    "baths": 5,
    "sqft": 455.07,
    "status": "For Sale",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBVJARREZNO01_1.jpg",
    "coordinates": {
      "lat": 32.502003274,
      "lng": -116.990013821
    }
  },
  {
    "id": "42",
    "title": "Townhouse en Renta en Privada Espacio Chapultepec – Con Vista Panorámica",
    "location": "Chapultepec Doctores, Tijuana",
    "slug": "townhouse-en-renta-en-espacio-chapultepec-tijuana-con-vista-a-la-ciudad-y-amenidades-de-lujo",
    "type": "casas",
    "division": "residencial",
    "price": 1600,
    "beds": 2,
    "baths": 2.5,
    "sqft": 144,
    "status": "For Rent",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBDJB01_1.jpg",
    "coordinates": {
      "lat": 32.509988231,
      "lng": -117.019348487
    }
  },
  {
    "id": "43",
    "title": "Industrial Warehouse Bonanza, Granjas Familiares del Matamoros, 22203 Tijuana, B.C.",
    "location": "Granjas Familiares del Matamoros, Tijuana",
    "slug": "industrial-warehouse-for-lease-in-bonanza-tijuana-27146-to-54292-sf-with-36-ft-clear-height-and-loading-docks",
    "type": "naves-y-bodegas",
    "division": "comercial",
    "price": 0,
    "beds": 0,
    "baths": 0,
    "sqft": 2521,
    "status": "For Rent",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBRCATTANS01_1.jpg",
    "coordinates": {
      "lat": 32.52253879,
      "lng": -116.883568332
    }
  },
  {
    "id": "44",
    "title": "Oficina en Renta en Otay – Ideal para Empresas Binacionales, Logísticas o Aduanales",
    "location": "Otay, Tijuana",
    "slug": "oficina-en-renta-en-otay-tijuana-para-empresas-binacionales-logisticas-y-agencias-aduanales",
    "type": "oficinas",
    "division": "comercial",
    "price": 1200,
    "beds": 0,
    "baths": 1,
    "sqft": 100,
    "status": "For Rent",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBRSSONTHO01_5.jpg",
    "coordinates": {
      "lat": 32.544281474,
      "lng": -116.930869946
    }
  },
  {
    "id": "45",
    "title": "Departamento en Renta en The Park Toreo – Equipado en Blvd. Agua Caliente",
    "location": "Central Toreo, Tijuana",
    "slug": "departamento-en-renta-the-park-toreo-equipado-una-recmara-amenidades-vista-espectacular-59m2",
    "type": "departamentos",
    "division": "residencial",
    "price": 1500,
    "beds": 1,
    "baths": 1,
    "sqft": 59,
    "status": "For Rent",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBVPEZLLESV01_2.jpg",
    "coordinates": {
      "lat": 32.517528637,
      "lng": -117.018640619
    }
  },
  {
    "id": "46",
    "title": "Departamento en Venta en The Park Toreo – Equipado, Piso 11 y Amenidades de Lujo",
    "location": "Central Toreo, Tijuana",
    "slug": "departamento-en-venta-the-park-toreo-equipado-una-recmara-piso-11-amenidades-vista-espectacular-59m2",
    "type": "departamentos",
    "division": "residencial",
    "price": 240000,
    "beds": 1,
    "baths": 1,
    "sqft": 59,
    "status": "For Sale",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBVPEZLLESV01_1.jpg",
    "coordinates": {
      "lat": 32.517528637,
      "lng": -117.018640619
    }
  },
  {
    "id": "47",
    "title": "Departamentos en Renta en Balcón de las Huertas – 2 Recámaras, 2 Estacionamientos y Excelente Ubicación",
    "location": "Balcon de las Huertas, Tijuana",
    "slug": "departamentos-en-renta-balcon-de-las-huertas-tijuana-70m2-dos-recamaras-dos-banos-estacionamiento-cerca-de-todo",
    "type": "departamentos",
    "division": "residencial",
    "price": 850,
    "beds": 2,
    "baths": 2,
    "sqft": 70,
    "status": "For Rent",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBRYAGEZSS01_1.jpg",
    "coordinates": {
      "lat": 32.482495854,
      "lng": -116.956377467
    }
  },
  {
    "id": "48",
    "title": "Departamento Nuevo en Renta Vistas Residencial -  Col. Buena vista",
    "location": "Buena Vista, Tijuana",
    "slug": "departamento-nuevo-en-renta-colonia-buena-vista-tijuana-piso-10-2-recamaras",
    "type": "departamentos",
    "division": "residencial",
    "price": 1400,
    "beds": 2,
    "baths": 2,
    "sqft": 82,
    "status": "For Rent",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBRANASTRO01New_8.jpg",
    "coordinates": {
      "lat": 32.534755911,
      "lng": -116.988379157
    }
  },
  {
    "id": "49",
    "title": "Departamento tipo estudio en renta en Torre Ruelle – Ideal para profesionistas",
    "location": "Zona Centro, Tijuana",
    "slug": "departamento-estudio-renta-torre-ruelle-tijuana",
    "type": "departamentos",
    "division": "residencial",
    "price": 900,
    "beds": 1,
    "baths": 1,
    "sqft": 0,
    "status": "For Rent",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBRFPSCIOS01_1.jpg",
    "coordinates": {
      "lat": 32.529633499,
      "lng": -117.035765353
    }
  },
  {
    "id": "50",
    "title": "Local Comercial en Renta – Zona Río, Sobre Av. Internacional con Alto Flujo Vehicular",
    "location": "Zona Urbana Rio, Tijuana",
    "slug": "local-comercial-en-renta-zona-rio-tijuana-av-internacional-via-rapida-ideal-oficinas-farmacia-agencia-imprenta",
    "type": "locales",
    "division": "comercial",
    "price": 1200,
    "beds": 0,
    "baths": 1,
    "sqft": 113.09,
    "status": "For Rent",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBRESTOROYN01_1.jpg",
    "coordinates": {
      "lat": 32.536838113,
      "lng": -117.032213059
    }
  },
  {
    "id": "51",
    "title": "Local Comercial en Renta en El Foro – Zona Centro Tijuana, 980 m² en el Icónico Palacio Jai Alai",
    "location": "Zona Centro, Tijuana",
    "slug": "local-comercial-en-renta-zona-centro-tijuana-el-foro-palacio-jai-alai-980m2-restaurante-gym-oficinas",
    "type": "locales",
    "division": "comercial",
    "price": 18,
    "beds": 2,
    "baths": 0,
    "sqft": 980,
    "status": "For Rent",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBREDOESC01_1.jpg",
    "coordinates": {
      "lat": 32.529167809,
      "lng": -117.036162615
    }
  },
  {
    "id": "52",
    "title": "Casa en Renta en Las Palmas – Estilo Contemporáneo, 2 Pisos y Excelente Ubicación",
    "location": "Las Palmas, Tijuana",
    "slug": "casa-en-renta-las-palmas-tijuana-dos-recamaras-estancia-cuarto-de-servicio-patio-cerca-de-colegios",
    "type": "casas",
    "division": "residencial",
    "price": 2000,
    "beds": 3,
    "baths": 3.5,
    "sqft": 162,
    "status": "For Rent",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBRRODOR01_1.jpg",
    "coordinates": {
      "lat": 32.500330711,
      "lng": -116.987078923
    }
  },
  {
    "id": "53",
    "title": "Amplio Departamento en Venta en Colonia Hipódromo – 249 m², Roof Deck y Oficina Privada",
    "location": "Hipodromo, Tijuana",
    "slug": "departamento-en-venta-colonia-hipodromo-tijuana-249m2-3-recamaras-oficina-roof-deck-cerca-estadio-caliente",
    "type": "departamentos",
    "division": "residencial",
    "price": 450000,
    "beds": 3,
    "baths": 0,
    "sqft": 249,
    "status": "For Sale",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBVUIRAMOS01_3.jpg",
    "coordinates": {
      "lat": 32.509106826,
      "lng": -116.999360601
    }
  },
  {
    "id": "54",
    "title": "Casa en Venta en Costa San Remo – Espacios Amplios, Seguridad y Comodidad en Zona Privada",
    "location": "Costa Coronado Residencial, Tijuana",
    "slug": "casa-en-venta-costa-san-remo-doble-acceso-controlado-cuatro-recamaras-patio-techado-area-asador",
    "type": "casas",
    "division": "residencial",
    "price": 11000000,
    "beds": 4,
    "baths": 4.5,
    "sqft": 269.29,
    "status": "For Sale",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBVIRAACIO01_1.jpg",
    "coordinates": {
      "lat": 32.512877565,
      "lng": -117.107641744
    }
  },
  {
    "id": "55",
    "title": "Bodega en Renta de 5,557 m² – Parque Industrial Cibac con Muelle para 4 Remolques",
    "location": "Lindavista, Tijuana",
    "slug": "bodega-en-renta-parque-industrial-cibac-5557m2-oficinas-almacen-subestacion-muelle-cuatro-remolques",
    "type": "naves-y-bodegas",
    "division": "comercial",
    "price": 0.7,
    "beds": 0,
    "baths": 0,
    "sqft": 5557,
    "status": "For Rent",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBRGIOMUDIO04_1.jpg",
    "coordinates": {
      "lat": 32.529957692,
      "lng": -117.05972578
    }
  },
  {
    "id": "56",
    "title": "Bodega de 1,923 m² en Renta – Parque Industrial Cibac con Oficinas y Muelle",
    "location": "Lindavista, Tijuana",
    "slug": "bodega-en-renta-en-parque-industrial-cibac-de-1923m2-con-oficinas-y-muelle",
    "type": "naves-y-bodegas",
    "division": "comercial",
    "price": 0.7,
    "beds": 0,
    "baths": 0,
    "sqft": 1923,
    "status": "For Rent",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBRGIOMUDIO03_3.jpg",
    "coordinates": {
      "lat": 32.529957692,
      "lng": -117.05972578
    }
  },
  {
    "id": "57",
    "title": "Bodega en Renta en Parque Industrial Cibac – 1,181 m², Ideal para tu Empresa",
    "location": "Lindavista, Tijuana",
    "slug": "bodega-en-renta-en-parque-industrial-cibac-de-1181m2-con-oficinas-y-muelle",
    "type": "naves-y-bodegas",
    "division": "comercial",
    "price": 0.7,
    "beds": 0,
    "baths": 0,
    "sqft": 1181.17,
    "status": "For Rent",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBRGIOMUDIO02_2.jpg",
    "coordinates": {
      "lat": 32.529957692,
      "lng": -117.05972578
    }
  },
  {
    "id": "58",
    "title": "Bodega en Renta en Parque Industrial Cibac – 573.54 m², Ideal para tu Empresa",
    "location": "Lindavista, Tijuana",
    "slug": "bodega-en-renta-en-parque-industrial-cibac-de-573m2-con-oficinas-y-muelle",
    "type": "naves-y-bodegas",
    "division": "comercial",
    "price": 0.7,
    "beds": 0,
    "baths": 0,
    "sqft": 573.54,
    "status": "For Rent",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBRGIOMUDIO01_17.png",
    "coordinates": {
      "lat": 32.529957692,
      "lng": -117.05972578
    }
  },
  {
    "id": "59",
    "title": "Townhouse en Renta en Caborca Chapultepec– ¡Espacios amplios y vista espectacular!",
    "location": "Chapultepec, Tijuana",
    "slug": "townhouse-en-renta-en-caborca-con-terraza-y-dos-recamaras-cerca-de-blvd-agua-caliente",
    "type": "casas",
    "division": "residencial",
    "price": 1800,
    "beds": 2,
    "baths": 2.5,
    "sqft": 169.4,
    "status": "For Rent",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBRRIEGASCO01_2.jpg",
    "coordinates": {
      "lat": 32.509100952,
      "lng": -117.011786543
    }
  },
  {
    "id": "60",
    "title": "Departamento en Venta en Magnitud Otay - Cerca de Garita y Aeropuerto",
    "location": "Otay, Tijuana",
    "slug": "departamento-en-venta-en-magnitud-otay-con-acceso-a-alameda-cerca-de-garita-y-aeropuerto",
    "type": "departamentos",
    "division": "residencial",
    "price": 250000,
    "beds": 2,
    "baths": 0,
    "sqft": 85.26,
    "status": "For Sale",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBVLEANALCY01_1.jpg",
    "coordinates": {
      "lat": 32.529564,
      "lng": -116.950429
    }
  },
  {
    "id": "61",
    "title": "Casa en Venta en La Rioja Residencial – Privada con Alberca, Gimnasio y Excelente Ubicación",
    "location": "La Rioja, Tijuana",
    "slug": "casa-en-venta-en-la-rioja-residencial-con-patio-y-amenidades-en-privada",
    "type": "casas",
    "division": "residencial",
    "price": 4450000,
    "beds": 2,
    "baths": 2.5,
    "sqft": 87.83,
    "status": "For Sale",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBVUILARVILA01_1.jpg",
    "coordinates": {
      "lat": 32.4700411,
      "lng": -116.9992296
    }
  },
  {
    "id": "62",
    "title": "Departamento en Renta en La Cacho – 70 m² en Edificio Nuevo",
    "location": "Cacho, Tijuana",
    "slug": "departamento-en-renta-en-la-cacho-70m-edificio-nuevo",
    "type": "departamentos",
    "division": "residencial",
    "price": 1250,
    "beds": 1,
    "baths": 1,
    "sqft": 70,
    "status": "For Rent",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBRREZDITH01_1.jpg",
    "coordinates": {
      "lat": 32.520774382,
      "lng": -117.028074901
    }
  },
  {
    "id": "63",
    "title": "Local Comercial en Renta en La Cacho – 145 m² en Edificio Nuevo con Valet Parking",
    "location": "Cacho, Tijuana",
    "slug": "local-comercial-en-renta-en-la-cacho-con-valet-parking-en-edificio-nuevo",
    "type": "locales",
    "division": "comercial",
    "price": 2200,
    "beds": 0,
    "baths": 0,
    "sqft": 145,
    "status": "For Rent",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBRNDREPENZ01_1.jpg",
    "coordinates": {
      "lat": 32.520774382,
      "lng": -117.028074901
    }
  },
  {
    "id": "64",
    "title": "Departamento Amueblado en Renta en THE PARK – 1 Recámara con Amenidades Premium",
    "location": "Blvd. Agua Caliente, Tijuana",
    "slug": "departamento-amueblado-en-renta-en-the-park-con-amenidades-premmium",
    "type": "departamentos",
    "division": "residencial",
    "price": 25500,
    "beds": 1,
    "baths": 1,
    "sqft": 0,
    "status": "For Rent",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBRERARRAGAN011.jpg",
    "coordinates": {
      "lat": 32.51739829,
      "lng": -117.018659002
    }
  },
  {
    "id": "65",
    "title": "Oficina Penthouse en Renta en Zona Río – Torre MOL con Terraza y Vista Panorámica",
    "location": "Zona Urbana Rio, Tijuana",
    "slug": "oficina-en-renta-en-zona-rio-torre-mol-penthouse-con-terraza-y-vista-panoramica-en-tijuana",
    "type": "oficinas",
    "division": "comercial",
    "price": 2850,
    "beds": 0,
    "baths": 1,
    "sqft": 150,
    "status": "For Rent",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBRINEZRCIA01_1.jpg",
    "coordinates": {
      "lat": 32.530469304,
      "lng": -117.024869832
    }
  },
  {
    "id": "66",
    "title": "Casa en Venta en Las Palmas – Amplia, Remodelada y con Paneles Solares",
    "location": "Las Palmas, Tijuana",
    "slug": "casa-en-venta-en-fraccionamiento-las-palmas-en-tijuana-con-paneles-solares-y-espacios-amplios",
    "type": "casas",
    "division": "residencial",
    "price": 1250000,
    "beds": 5,
    "baths": 6,
    "sqft": 450,
    "status": "For Sale",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBVADORREZF01_1.jpg",
    "coordinates": {
      "lat": 32.502757346,
      "lng": -116.985211698
    }
  },
  {
    "id": "67",
    "title": "Departamento en Venta en Levant Campestre – 3 Recámaras, Vista al Estadio y Amenidades de Lujo",
    "location": "Chapultepec Este, Tijuana",
    "slug": "departamento-en-venta-en-levant-campestre-con-vista-al-estadio-3-recamaras-y-amenidades-de-lujo",
    "type": "departamentos",
    "division": "residencial",
    "price": 8450000,
    "beds": 3,
    "baths": 2.5,
    "sqft": 133,
    "status": "For Sale",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBRONAUIS01_4-1.jpg",
    "coordinates": {
      "lat": 32.507838416,
      "lng": -117.000212987
    }
  },
  {
    "id": "68",
    "title": "Departamento Nuevo en Renta High Point La Cacho – Diseño Moderno y Equipado",
    "location": "La Cacho, Tijuana",
    "slug": "departamento-nuevo-en-renta-con-dos-recamaras-high-point-en-la-cacho-estacionamiento-en-nivel-8",
    "type": "departamentos",
    "division": "residencial",
    "price": 1900,
    "beds": 2,
    "baths": 2,
    "sqft": 107,
    "status": "For Rent",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBRMARIG01_1.jpg",
    "coordinates": {
      "lat": 32.516970836,
      "lng": -117.029602373
    }
  },
  {
    "id": "69",
    "title": "Departamento en Renta en Torre Virginia – 3 Recámaras en Colonia Juárez, Cerca de la Línea",
    "location": "Juarez, Tijuana",
    "slug": "departamento-en-renta-torre-virginia-colonia-juarez-con-3-recamaras-cerca-de-la-linea-y-cacho",
    "type": "departamentos",
    "division": "residencial",
    "price": 1300,
    "beds": 3,
    "baths": 2,
    "sqft": 97,
    "status": "For Rent",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBRTRAVILA01_1.jpg",
    "coordinates": {
      "lat": 32.516900436,
      "lng": -117.032785373
    }
  },
  {
    "id": "70",
    "title": "Penthouse Amueblado en Renta con Vista al Campo de Golf en Chapultepec Este – Diseño y Confort de Lujo",
    "location": "Chapultepec Este, Tijuana",
    "slug": "penthouse--en-renta-amueblado-en-horizonte-chapultepec-este-con-vista-al-campo-de-golf-y-roof-deck",
    "type": "departamentos",
    "division": "residencial",
    "price": 5250,
    "beds": 3,
    "baths": 4,
    "sqft": 340,
    "status": "For Rent",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBRGMM01_ba_1.jpg",
    "coordinates": {
      "lat": 32.509345088,
      "lng": -116.999212829
    }
  },
  {
    "id": "71",
    "title": "Terreno Residencial en Venta San Marino – Exclusiva Ubicación en Fraccionamiento Privado",
    "location": "San Marino, Tijuana",
    "slug": "terreno-residencial-en-san-marino-venta-cerca-del-mar-en-fraccionamiento-privado-con-alta-plusvalia",
    "type": "terrenos-residenciales",
    "division": "residencial",
    "price": 90000,
    "beds": 0,
    "baths": 0,
    "sqft": 0,
    "status": "For Sale",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBVHERVELG01_1.jpg",
    "coordinates": {
      "lat": 32.412738692,
      "lng": -117.089959589
    }
  },
  {
    "id": "72",
    "title": "Casa en Renta en Costa de Oro en Playas de Tijuana",
    "location": "Playas de Tijuana, Tijuana",
    "slug": "casa-en-renta-en-costa-de-oro-playas-de-tijuana-a-dos-cuadras",
    "type": "casas",
    "division": "residencial",
    "price": 1050,
    "beds": 3,
    "baths": 2,
    "sqft": 80,
    "status": "For Rent",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBRDETLEZ02_bv_1.jpg",
    "coordinates": {
      "lat": 32.511081338,
      "lng": -117.121563499
    }
  },
  {
    "id": "73",
    "title": "Casa en Renta en Playas de Tijuana Sección El Dorado con Paneles Solares y 4 Recámaras",
    "location": "Playas de Tijuana, Tijuana",
    "slug": "casa-en-renta-en-playas-de-tijuana-seccion-coronado-con-paneles-solares-y-cuatro-recamaras",
    "type": "casas",
    "division": "residencial",
    "price": 1850,
    "beds": 4,
    "baths": 2.5,
    "sqft": 0,
    "status": "For Rent",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBRMAYTROS01_1.jpg",
    "coordinates": {
      "lat": 32.518778295,
      "lng": -117.109826329
    }
  },
  {
    "id": "74",
    "title": "Casa en Renta con Vista al Campo de Golf en Chapultepec – Vive con Estilo en Tijuana",
    "location": "Chapultepec, Tijuana",
    "slug": "casa-en-renta-en-colonia-chapultepec-con-vista-al-campo-de-golf-y-oficina-en-tijuana",
    "type": "casas",
    "division": "residencial",
    "price": 3300,
    "beds": 3,
    "baths": 4,
    "sqft": 0,
    "status": "For Rent",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBRSPANRIOS01_1.jpg",
    "coordinates": {
      "lat": 32.506898766,
      "lng": -117.004831901
    }
  },
  {
    "id": "75",
    "title": "Terreno Estratégico en Venta en Colonia Juárez – Ideal para Desarrollo Habitacional",
    "location": "Colonia Juarez, Tijuana",
    "slug": "terreno-en-venta-colonia-juarez-ideal-para-desarrollo-de-departamentos-y-casas",
    "type": "terrenos-residenciales",
    "division": "residencial",
    "price": 945000,
    "beds": 0,
    "baths": 0,
    "sqft": 0,
    "status": "For Sale",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBVLESMAD01_7.jpg",
    "coordinates": {
      "lat": 32.517970461,
      "lng": -117.033663475
    }
  },
  {
    "id": "76",
    "title": "Departamento Amueblado en Renta en La Rioja – 3 Recámaras y Amenidades Completas",
    "location": "La Rioja, Tijuana",
    "slug": "departamento-amueblado-en-renta-en-la-rioja-tres-recamaras-con-amenidades-completas-y-dos-estacionamientos",
    "type": "departamentos",
    "division": "residencial",
    "price": 18500,
    "beds": 3,
    "baths": 2,
    "sqft": 96,
    "status": "For Rent",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBRDUZGIOS01_1.jpg",
    "coordinates": {
      "lat": 32.4700411,
      "lng": -116.9992296
    }
  },
  {
    "id": "77",
    "title": "Departamento Remodelado en Venta – 3 Recámaras en Torre Insurgente Colonia Libramiento",
    "location": "Libramiento, Tijuana",
    "slug": "departamento-en-venta-en-torre-insurgente-colonia-libramiento-tres-recamaras-dos-banos-remodelado-segundo-piso",
    "type": "departamentos",
    "division": "residencial",
    "price": 2600000,
    "beds": 3,
    "baths": 2,
    "sqft": 84,
    "status": "For Sale",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBVNESGELP01_9.jpg",
    "coordinates": {
      "lat": 32.470836374,
      "lng": -116.916039169
    }
  },
  {
    "id": "78",
    "title": "Departamento en Green View en Renta - Blvd. Agua Caliente",
    "location": "Blvd. Agua Caliente, Tijuana",
    "slug": "departamento-green-view-en-renta-en-zona-dorada-tijuana-piso-15-vista-campo-de-golf-y-amenidades-exclusivas",
    "type": "departamentos",
    "division": "residencial",
    "price": 3600,
    "beds": 3,
    "baths": 3,
    "sqft": 283,
    "status": "For Rent",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBRCUECRT01_1.jpg",
    "coordinates": {
      "lat": 32.513528107,
      "lng": -117.009627942
    }
  },
  {
    "id": "79",
    "title": "Casa en venta con Vista al Mar en Villamar – 4 Recámaras, Terraza y Patio con Pérgola",
    "location": "Villamar, Tijuana",
    "slug": "casa-en-venta-en-villamar-con-vista-al-mar-cuatro-recamaras-terraza-y-patio-con-pergola",
    "type": "casas",
    "division": "residencial",
    "price": 399000,
    "beds": 4,
    "baths": 3.5,
    "sqft": 290,
    "status": "For Sale",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBVGUZUELM01_3.jpg",
    "coordinates": {
      "lat": 32.516775013,
      "lng": -117.100913402
    }
  },
  {
    "id": "80",
    "title": "Terreno Industrial de 41 Hectáreas en Boulevard 2000 – Ideal para Parque o Naves Logísticas",
    "location": "El Refugio - Blvd. 2000, Tijuana",
    "slug": "terreno-industrial-en-venta-41-hectareas-en-boulevard-2000-tijuana-ideal-para-parque-logistico",
    "type": "terrenos-comerciales",
    "division": "comercial",
    "price": 58,
    "beds": 0,
    "baths": 0,
    "sqft": 0,
    "status": "For Sale",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBVELLALEY01_1.jpg",
    "coordinates": {
      "lat": 32.432689327,
      "lng": -116.838854291
    }
  },
  {
    "id": "81",
    "title": "Departamento Amueblado en Renta - City Point 3ra Etapa Río con Balcón y Walk-in Closet",
    "location": "3ra Etapa Río, Tijuana",
    "slug": "departamento-amueblado-en-city-point-3ra-etapa-con-balcon-y-walk-in-closet",
    "type": "departamentos",
    "division": "residencial",
    "price": 1350,
    "beds": 1,
    "baths": 0,
    "sqft": 76.47,
    "status": "For Rent",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBRGOKA01n_1.jpg",
    "coordinates": {
      "lat": 32.481024295,
      "lng": -116.92768926
    }
  },
  {
    "id": "82",
    "title": "Departamentos Nuevos en Renta en Las Palmas – Edificio La Escondida",
    "location": "Las Palmas, Tijuana",
    "slug": "departamentos-renta-colonia-las-palmas-la-escondida-tijuana",
    "type": "departamentos",
    "division": "residencial",
    "price": 1350,
    "beds": 2,
    "baths": 2,
    "sqft": 120,
    "status": "For Rent",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/Edificio la Escondida-1.jpg",
    "coordinates": {
      "lat": 32.503161918,
      "lng": -116.980456878
    }
  },
  {
    "id": "83",
    "title": "Hermosa Casa en Venta en Puerta de Hierro – Amplia, Iluminada y con Acabados de Lujo",
    "location": "Puerta de Hierro, Tijuana",
    "slug": "venta-casa-puerta-de-hierro-amplia-lujosa-3-recamaras-tijuana",
    "type": "casas",
    "division": "residencial",
    "price": 1480000,
    "beds": 3,
    "baths": 6,
    "sqft": 503,
    "status": "For Sale",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBVALVRIM01da_1.jpg",
    "coordinates": {
      "lat": 32.499187821,
      "lng": -116.999461149
    }
  },
  {
    "id": "84",
    "title": "Terreno en Venta en Valle de las Palmas, Tecate – A Pie de Carretera con Potencial Industrial y Habitacional",
    "location": "Valle Las Palmas, Tecate",
    "slug": "terreno-en-venta-valle-las-palmas-tecate-potencial-urbano",
    "type": "terrenos-comerciales",
    "division": "comercial",
    "price": 39,
    "beds": 0,
    "baths": 0,
    "sqft": 0,
    "status": "For Sale",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBVPETDRA01_1.jpg",
    "coordinates": {
      "lat": 32.376397276,
      "lng": -116.614409243
    }
  },
  {
    "id": "85",
    "title": "Departamento en Venta en Torre Jalisco La Cacho – Tranquilidad y Ubicación Ideal",
    "location": "La Cacho, Tijuana",
    "slug": "departamento-en-venta-colonia-emblematica-vista-ciudad-torre-jalisco",
    "type": "departamentos",
    "division": "residencial",
    "price": 475000,
    "beds": 2,
    "baths": 2,
    "sqft": 137.2,
    "status": "For Sale",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBRGODCHAD01_1.jpg",
    "coordinates": {
      "lat": 32.512573514,
      "lng": -117.023561519
    }
  },
  {
    "id": "86",
    "title": "Corredor 2000 Rosarito -Tijuana, 22250 Tijuana, B.C., Mexico ",
    "location": "Corredor 2000 Rosarito -Tijuana, Tijuana",
    "slug": "corredor-2000-rosarito-tijuana-22250-mexico",
    "type": "naves-y-bodegas",
    "division": "industrial",
    "price": 0,
    "beds": 0,
    "baths": 0,
    "sqft": 891.0331,
    "status": "For Rent",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBRIBECUR01_1.jpg",
    "coordinates": {
      "lat": 32.433781925,
      "lng": -116.873112564
    }
  },
  {
    "id": "87",
    "title": "Terreno en Renta con Oficinas y Área de Verificación en Blvd. Casa Blanca – 1,133 m²",
    "location": "Blvd. Casa Blanca, Tijuana",
    "slug": "terreno-en-renta-blvd-casa-blanca-verificacion-oficinas",
    "type": "terrenos-comerciales",
    "division": "comercial",
    "price": 7,
    "beds": 0,
    "baths": 0,
    "sqft": 0,
    "status": "For Rent",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBRCASRMEN01_a.jpg",
    "coordinates": {
      "lat": 32.499830822,
      "lng": -116.909177714
    }
  },
  {
    "id": "88",
    "title": "Moderna Casa en Renta en Rosarito – 3 Niveles, Terraza y Amplio Patio",
    "location": "Rosarito, Rosarito",
    "slug": "moderna-casa-en-renta-rosarito-3-niveles-terraza",
    "type": "casas",
    "division": "residencial",
    "price": 1600,
    "beds": 3,
    "baths": 3,
    "sqft": 0,
    "status": "For Rent",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBRCASIRRE01_1.jpg",
    "coordinates": {
      "lat": 32.397656129,
      "lng": -117.049219491
    }
  },
  {
    "id": "89",
    "title": "Terreno en Venta en Rancho Santa Verónica – 3,357 m² de Naturaleza y Tranquilidad",
    "location": "Hacienda Santa Verónica, Tecate",
    "slug": "terreno-venta-rancho-santa-veronica-3357m",
    "type": "vida-en-el-campo",
    "division": "residencial",
    "price": 150000,
    "beds": 0,
    "baths": 0,
    "sqft": 0,
    "status": "For Sale",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBVIRANIOM01_1.jpg",
    "coordinates": {
      "lat": 32.453715558,
      "lng": -116.363648311
    }
  },
  {
    "id": "90",
    "title": "Hermosa Residencia en Venta en Playas de Tijuana – 940 m² de Construcción",
    "location": "Playas de Tijuana, Tijuana",
    "slug": "hermosa-venta-residencia-lujo-venta-playas-tijuana-940m2",
    "type": "casas",
    "division": "residencial",
    "price": 1200000,
    "beds": 4,
    "baths": 5,
    "sqft": 940,
    "status": "For Sale",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBVSANUEZ01_1.jpg",
    "coordinates": {
      "lat": 32.532967388,
      "lng": -117.118524548
    }
  },
  {
    "id": "91",
    "title": "Casa en Renta en Playas de Tijuana – 5 Recámaras, Chimenea y Área de Asado",
    "location": "Playas de Tijuana, Tijuana",
    "slug": "casa-renta-playas-de-tijuana-5-recamaras-chimenea",
    "type": "casas",
    "division": "residencial",
    "price": 1500,
    "beds": 5,
    "baths": 2,
    "sqft": 0,
    "status": "For Rent",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBRCAMALEZ01_1.jpg",
    "coordinates": {
      "lat": 32.508049274,
      "lng": -117.116045306
    }
  },
  {
    "id": "92",
    "title": "Terreno en Esquina en renta con Alta Exposición Comercial en La Mesa – Ideal para Drive Thru",
    "location": "La Mesa, Tijuana",
    "slug": "terreno-renta-esquina-comercial-la-mesa-drive-thru",
    "type": "terrenos-comerciales",
    "division": "comercial",
    "price": 0,
    "beds": 0,
    "baths": 0,
    "sqft": 0,
    "status": "For Rent",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBRRANBIO01_1.jpg",
    "coordinates": {
      "lat": 32.484512865,
      "lng": -116.943670296
    }
  },
  {
    "id": "93",
    "title": "Terreno con Construcción en Venta – Privada en Colonia Chula Vista",
    "location": "Chula Vista, Tijuana",
    "slug": "terreno-construccion-colonia-chula-vista-tijuana",
    "type": "terrenos-residenciales",
    "division": "residencial",
    "price": 364000,
    "beds": 0,
    "baths": 0,
    "sqft": 0,
    "status": "For Sale",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBVSMIERVA01_1.jpg",
    "coordinates": {
      "lat": 32.511146519,
      "lng": -117.0209242
    }
  },
  {
    "id": "94",
    "title": "Terreno con edificio Corporativo en Venta – Vía Rápida, Zona Río 3ra Etapa",
    "location": "Zona Rio 3ra etapa Vía rapida, Tijuana",
    "slug": "terreno-edificio-corporativo-venta-via-rapida-zona-rio-3ra-etapa",
    "type": "edificios",
    "division": "comercial",
    "price": 7000000,
    "beds": 0,
    "baths": 12,
    "sqft": 700,
    "status": "For Sale",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBVSANVATS01_1.jpg",
    "coordinates": {
      "lat": 32.50051433,
      "lng": -116.952362158
    }
  },
  {
    "id": "95",
    "title": "En Renta Departamento - Torre Luzia Plaza Peninsula",
    "location": "Alamar, Tijuana",
    "slug": "en-venta-departamento-en-torre-luzia-plaza-peninsula",
    "type": "departamentos",
    "division": "residencial",
    "price": 1400,
    "beds": 1,
    "baths": 0,
    "sqft": 83,
    "status": "For Rent",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBVDROURI01_1.jpg",
    "coordinates": {
      "lat": 32.513813146,
      "lng": -116.965665548
    }
  },
  {
    "id": "96",
    "title": "Bodega en Venta – Sobre Vía Rápida Poniente",
    "location": "Via rápida poniente, Tijuana",
    "slug": "bodega-en-venta-sobre-via-rapida-poniente",
    "type": "naves-y-bodegas",
    "division": "comercial",
    "price": 450000,
    "beds": 0,
    "baths": 0,
    "sqft": 496,
    "status": "For Sale",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBVUGOENEZ01sa_1.jpg",
    "coordinates": {
      "lat": 32.504398813,
      "lng": -116.958283384
    }
  },
  {
    "id": "97",
    "title": "Departamento Nuevo en Venta / Renta en High Point – La Cacho",
    "location": "Cacho, Tijuana",
    "slug": "departamento-venta-high-point-la-cacho",
    "type": "departamentos",
    "division": "residencial",
    "price": 1900,
    "beds": 2,
    "baths": 2,
    "sqft": 98,
    "status": "For Rent",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBVORTSTRO01_ns_1.jpg",
    "coordinates": {
      "lat": 32.516935818,
      "lng": -117.029622594
    }
  },
  {
    "id": "98",
    "title": "Casa de Lujo en Venta en San Marino – Vista al Mar, Elevador y Acabados Premium",
    "location": "San Marino, Tijuana",
    "slug": "casa-lujo-en-venta-san-marino-vista-mar-elevador",
    "type": "casas",
    "division": "residencial",
    "price": 695000,
    "beds": 4,
    "baths": 2.5,
    "sqft": 286,
    "status": "For Sale",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBVTREOVAL01_new_1.jpg",
    "coordinates": {
      "lat": 32.416421126,
      "lng": -117.091306354
    }
  },
  {
    "id": "99",
    "title": "Terreno de 1,600 m² en Venta en Zona Turística de Rosarito – ¡Ideal para Inversión!",
    "location": "Playas de Rosarito, Rosarito",
    "slug": "terreno-1600m2-venta-zona-turistica-rosarito-inversion",
    "type": "terrenos-comerciales",
    "division": "comercial",
    "price": 1300000,
    "beds": 0,
    "baths": 0,
    "sqft": 0,
    "status": "For Sale",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBVREZUNDO01_1.jpg",
    "coordinates": {
      "lat": 32.335623648,
      "lng": -117.052339646
    }
  },
  {
    "id": "100",
    "title": "Departamento en Renta Merida Hipodromo",
    "location": "Hipodromo, Tijuana",
    "slug": "departamento-en-renta-merida-hipodromo-a",
    "type": "departamentos",
    "division": "residencial",
    "price": 1200,
    "beds": 1,
    "baths": 1.5,
    "sqft": 62,
    "status": "For Rent",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBRJIMCE01b_1.jpg",
    "coordinates": {
      "lat": 32.506644097,
      "lng": -117.001996179
    }
  },
  {
    "id": "101",
    "title": "Terreno en Venta en Colonia Juárez – Ideal para Torre de Departamentos",
    "location": "Juarez, Tijuana",
    "slug": "terreno-venta-colonia-juarez-579m2-departamentos",
    "type": "terrenos-residenciales",
    "division": "residencial",
    "price": 450000,
    "beds": 0,
    "baths": 0,
    "sqft": 0,
    "status": "For Sale",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBVSTRENNE01_1.jpg",
    "coordinates": {
      "lat": 32.513910956,
      "lng": -117.033270786
    }
  },
  {
    "id": "102",
    "title": "Local Comercial en Renta en Avenida Revolución – ¡Ubicación Estratégica!",
    "location": "Zona Centro, Tijuana",
    "slug": "renta-local-comercial-avenida-revolucion-312m2-ubicacion-estrategica",
    "type": "locales",
    "division": "comercial",
    "price": 22,
    "beds": 0,
    "baths": 2,
    "sqft": 350,
    "status": "For Rent",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBRMEZEROA01_1.jpg",
    "coordinates": {
      "lat": 32.530597192,
      "lng": -117.036571627
    }
  },
  {
    "id": "103",
    "title": "Casas en Venta en Hacienda Agua Caliente – Zona Dorada de Tijuana 3 Niveles",
    "location": "Hacienda Agua Caliente, Tijuana",
    "slug": "venta-casas-hacienda-agua-caliente-zona-dorada-tijuana-3-niveles",
    "type": "casas",
    "division": "residencial",
    "price": 699000,
    "beds": 4,
    "baths": 4.5,
    "sqft": 298.33,
    "status": "For Sale",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBVAZARMARC02_1.jpg",
    "coordinates": {
      "lat": 32.491664753,
      "lng": -117.007986627
    }
  },
  {
    "id": "104",
    "title": "Casas en Venta en Hacienda Agua Caliente – Zona Dorada de Tijuana",
    "location": "Hacienda Agua Caliente, Tijuana",
    "slug": "venta-casas-hacienda-agua-caliente-zona-dorada-tijuana",
    "type": "casas",
    "division": "residencial",
    "price": 599000,
    "beds": 3,
    "baths": 3.5,
    "sqft": 258.85,
    "status": "For Sale",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBVAZARMARC01_1.jpg",
    "coordinates": {
      "lat": 32.491664753,
      "lng": -117.007986627
    }
  },
  {
    "id": "105",
    "title": "Casa en Renta en Fracc. El Lago – Privada Segura con Parque y Excelente Ubicación",
    "location": "Jardines del Lago, Tijuana",
    "slug": "casa-en-renta-fracc-el-lago-tijuana-zona-segura-cercana-a-universidades-parque-morelos-y-plaza",
    "type": "casas",
    "division": "residencial",
    "price": 1500,
    "beds": 3,
    "baths": 1.5,
    "sqft": 140,
    "status": "For Rent",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/Priv Fresno-1.jpg",
    "coordinates": {
      "lat": 32.499805133,
      "lng": -116.931644519
    }
  },
  {
    "id": "106",
    "title": "Edificio / Casa en Venta en Guaycura – Ideal para Vivienda o Fundación",
    "location": "Guaycura, Tijuana",
    "slug": "venta-casa-guaycura-zona-vivienda-tijuana",
    "type": "edificios",
    "division": "comercial",
    "price": 450000,
    "beds": 3,
    "baths": 2.5,
    "sqft": 380,
    "status": "For Sale",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBVISSAMEZE01_t_1.jpg",
    "coordinates": {
      "lat": 32.490841877,
      "lng": -116.92214743
    }
  },
  {
    "id": "107",
    "title": "Casas en Renta en Privada Victoria – 3ra Etapa",
    "location": "3ra etapa, Tijuana",
    "slug": "renta-casas-privada-victoria-tijuana-3ra-etapa",
    "type": "casas",
    "division": "residencial",
    "price": 1300,
    "beds": 3,
    "baths": 2.5,
    "sqft": 110,
    "status": "For Rent",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBRGOSSAI01_F1.jpg",
    "coordinates": {
      "lat": 32.494593682,
      "lng": -116.943390417
    }
  },
  {
    "id": "108",
    "title": "Terreno en Venta en Privada - Colonia Cumbres de Juárez – 556 m² con Vista Panorámica",
    "location": "Cumbres de Juárez, Tijuana",
    "slug": "terreno-en-venta-cumbres-de-juarez-privada-exclusiva",
    "type": "terrenos-residenciales",
    "division": "residencial",
    "price": 1050,
    "beds": 0,
    "baths": 0,
    "sqft": 0,
    "status": "For Sale",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBVCOSNIT01_1.jpg",
    "coordinates": {
      "lat": 32.506493929,
      "lng": -117.031432993
    }
  },
  {
    "id": "109",
    "title": "Terreno en Venta – Oportunidad para Desarrollo en Hacienda Burócratas",
    "location": "Hacienda Burócratas, Tijuana",
    "slug": "terreno-en-venta-burocratas-hipodromo-tijuana-desarrollo",
    "type": "terrenos-residenciales",
    "division": "residencial",
    "price": 790,
    "beds": 0,
    "baths": 0,
    "sqft": 0,
    "status": "For Sale",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBVONIOSTRO01_ne_1.jpg",
    "coordinates": {
      "lat": 32.489337313,
      "lng": -116.997592794
    }
  },
  {
    "id": "110",
    "title": "Local Comercial en Renta – Excelente Ubicación en Plaza Domino",
    "location": "Blvd. Agua caliente, Tijuana",
    "slug": "-local-comercial-en-renta-excelente-plaza-domino",
    "type": "locales",
    "division": "comercial",
    "price": 4900,
    "beds": 0,
    "baths": 2,
    "sqft": 150,
    "status": "For Rent",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/pde2.jpg",
    "coordinates": {
      "lat": 32.51354054,
      "lng": -117.00464745
    }
  },
  {
    "id": "111",
    "title": "Townhouses de Lujo en Preventa – Colonia Los Olivos, Zona Dorada",
    "location": "Los Olivos, Tijuana",
    "slug": "townhouses-en-preventa-los-olivos-tijuana",
    "type": "casas",
    "division": "residencial",
    "price": 485000,
    "beds": 5,
    "baths": 3.5,
    "sqft": 403,
    "status": "For Sale",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBVCRANUEL01_7.jpg",
    "coordinates": {
      "lat": 32.491949055,
      "lng": -116.992257815
    }
  },
  {
    "id": "112",
    "title": "Departamento en Renta en Batopilas – Colonia Cacho",
    "location": "Cacho, Tijuana",
    "slug": "departamento-en-renta-batopilas-cacho",
    "type": "departamentos",
    "division": "residencial",
    "price": 1350,
    "beds": 2,
    "baths": 2,
    "sqft": 90,
    "status": "For Rent",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBRHERRUGA01_9.jpg",
    "coordinates": {
      "lat": 32.515715291,
      "lng": -117.027221675
    }
  },
  {
    "id": "113",
    "title": "Casa en Venta con Vista al Mar en Playas de Tijuana",
    "location": "Playas de Tijuana, Tijuana",
    "slug": "casa-en-venta-vista-mar-playas-de-tijuana",
    "type": "casas",
    "division": "residencial",
    "price": 240000,
    "beds": 3,
    "baths": 2.5,
    "sqft": 150,
    "status": "For Sale",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBVSERRALGR01_1.jpg",
    "coordinates": {
      "lat": 32.504852429,
      "lng": -117.122359161
    }
  },
  {
    "id": "114",
    "title": "Traspaso de Café en Plaza Rincón Gabilondo – Totalmente Equipado y en Operación",
    "location": "Gabilondo, Tijuana",
    "slug": "traspaso-cafe-rincon-gabilondo-oportunidad-negocio",
    "type": "locales",
    "division": "comercial",
    "price": 40000,
    "beds": 0,
    "baths": 1,
    "sqft": 46,
    "status": "For Sale",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBVANANUEL01_1.jpg",
    "coordinates": {
      "lat": 32.516028252,
      "lng": -117.020176668
    }
  },
  {
    "id": "115",
    "title": "SEARENITY Townhouses en Playas de Tijuana – Exclusividad, Confort y Rooftop con Vista al Mar",
    "location": "Playas de Tijuana, Tijuana",
    "slug": "searenity-townhouses-playas-de-tijuana-rooftop-vista-mar",
    "type": "casas",
    "division": "residencial",
    "price": 375000,
    "beds": 3,
    "baths": 4,
    "sqft": 195,
    "status": "For Sale",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/Searenity Townhouses-1.jpg",
    "coordinates": {
      "lat": 32.516349833,
      "lng": -117.119170234
    }
  },
  {
    "id": "116",
    "title": "Bodega y Oficinas en Renta – Garita de Otay, Esquina con Alto Flujo Vehicular",
    "location": "Otay, Tijuana",
    "slug": "bodega-oficinas-en-renta-garita-de-otay-esquina-tijuana",
    "type": "naves-y-bodegas",
    "division": "comercial",
    "price": 9000,
    "beds": 0,
    "baths": 4,
    "sqft": 1300,
    "status": "For Rent",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBRACMB01_1.jpg",
    "coordinates": {
      "lat": 32.546929884,
      "lng": -116.945994588
    }
  },
  {
    "id": "117",
    "title": "Departamento en Renta en Zona Centro Calle Segunda N3",
    "location": "Zona centro, Tijuana",
    "slug": "renta-departamento-tijuana-2recamaras-n3-800dlls",
    "type": "departamentos",
    "division": "residencial",
    "price": 800,
    "beds": 2,
    "baths": 1,
    "sqft": 73,
    "status": "For Rent",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBRREBAN04_1.jpg",
    "coordinates": {
      "lat": 32.534935525,
      "lng": -117.044413385
    }
  },
  {
    "id": "118",
    "title": "Terreno en Venta en Esquina – Real del Mar, Gran Plusvalía y Ubicación Estratégica",
    "location": "Real del Mar, Tijuana",
    "slug": "terreno-en-venta-esquina-real-del-mar-plusvalia",
    "type": "terrenos-residenciales",
    "division": "residencial",
    "price": 269900,
    "beds": 0,
    "baths": 0,
    "sqft": 0,
    "status": "For Sale",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBVMENARGU01_1.jpg",
    "coordinates": {
      "lat": 32.449022216,
      "lng": -117.093399919
    }
  },
  {
    "id": "119",
    "title": "Casa Inteligente en Venta en Hacienda Agua Caliente – Privada Don Juan Eficiencia Energética y Domótica Total",
    "location": "Hacienda Agua Caliente, Tijuana",
    "slug": "casa-en-venta-hacienda-agua-caliente-domotica-eficiencia-energetica",
    "type": "casas",
    "division": "residencial",
    "price": 1200000,
    "beds": 3,
    "baths": 3.5,
    "sqft": 310.38,
    "status": "For Sale",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBVGARTONGE01_3.jpg",
    "coordinates": {
      "lat": 32.494059452,
      "lng": -117.007261421
    }
  },
  {
    "id": "120",
    "title": "Rancho El Ronco en Venta – 3 Hectáreas a 30 Min de Ensenada, Ideal para Viñedo",
    "location": "Delegación El real del Castillo, Ensenada",
    "slug": "rancho-en-venta-el-ronco-ensenada-30000m2-vinedo",
    "type": "terrenos-residenciales",
    "division": "residencial",
    "price": 950000,
    "beds": 0,
    "baths": 0,
    "sqft": 0,
    "status": "For Sale",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBVCAROYOT01_1.jpg",
    "coordinates": {
      "lat": 31.910153289,
      "lng": -116.501111886
    }
  },
  {
    "id": "121",
    "title": "Casas en Venta en Las Plazas Privada AGATA – 4 Niveles, Terraza y Espacios Amplios",
    "location": "Las Plazas, Tijuana",
    "slug": "casas-en-venta-las-plazas-privada-agata-3-recamaras-terraza-fraccionamiento-boutique",
    "type": "casas",
    "division": "residencial",
    "price": 6853000,
    "beds": 3,
    "baths": 3,
    "sqft": 190,
    "status": "For Sale",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBVLIOHERN01_4.jpg",
    "coordinates": {
      "lat": 32.484467998,
      "lng": -117.001094731
    }
  },
  {
    "id": "122",
    "title": "Departamento en Renta en Guadalupe Victoria – 3 Recámaras, Terraza y Patio Privado",
    "location": " Guadalupe Victoria, Tijuana",
    "slug": "departamento-en-renta-guadalupe-victoria-3-recamaras-terraza-patio",
    "type": "departamentos",
    "division": "residencial",
    "price": 1700,
    "beds": 3,
    "baths": 2,
    "sqft": 113,
    "status": "For Rent",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBRBEJRRAT01_1.jpg",
    "coordinates": {
      "lat": 32.51776616,
      "lng": -116.975769398
    }
  },
  {
    "id": "123",
    "title": "Traspaso de Negocio Mixto en Zona Río – Beer Garden, Food Court y Foro de Eventos",
    "location": "Zona Rio, Tijuana",
    "slug": "traspaso-negocio-mixto-zona-rio-beer-garden-food-court-eventos",
    "type": "locales",
    "division": "comercial",
    "price": 80000,
    "beds": 0,
    "baths": 0,
    "sqft": 0,
    "status": "For Sale",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBVMONRAZ011.jpg",
    "coordinates": {
      "lat": 32.534140467,
      "lng": -117.021877519
    }
  },
  {
    "id": "124",
    "title": "Departamento en Venta en Veranda 15 – 2 Recámaras, Roof Top y Gimnasio",
    "location": "Cubillas Sur, Tijuana",
    "slug": "departamento-en-venta-veranda-15-caletilla-madero-2-recamaras",
    "type": "departamentos",
    "division": "residencial",
    "price": 300000,
    "beds": 2,
    "baths": 2,
    "sqft": 111.5,
    "status": "For Sale",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBRCUILU01_1.jpg",
    "coordinates": {
      "lat": 32.509805169,
      "lng": -117.017585104
    }
  },
  {
    "id": "125",
    "title": "Casa en Venta en Privada Rioja, Colinas de California – 3 Niveles con Terrazas y Amenidades",
    "location": "Colinas de California, Tijuana",
    "slug": "casa-en-venta-privada-rioja-colinas-california-3-niveles",
    "type": "casas",
    "division": "residencial",
    "price": 4500000,
    "beds": 3,
    "baths": 2.5,
    "sqft": 129.38,
    "status": "For Sale",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBVENARDOS01_14.jpg",
    "coordinates": {
      "lat": 32.470172351,
      "lng": -117.001494597
    }
  },
  {
    "id": "126",
    "title": "Renta de Clínica Equipada en Zona Río – Penthouse de 220 m²",
    "location": "Zona Rio, Tijuana",
    "slug": "renta-clinica-equipada-zona-rio-penthouse-220",
    "type": "oficinas",
    "division": "comercial",
    "price": 8000,
    "beds": 0,
    "baths": 4,
    "sqft": 220,
    "status": "For Rent",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBRPOSIMER01_1.jpg",
    "coordinates": {
      "lat": 32.524406058,
      "lng": -117.013221938
    }
  },
  {
    "id": "127",
    "title": "Hermoso Townhouse Renta / Venta Amueblado en The Park at Malibú con Vista al Mar",
    "location": "The Park At Malibu, Tijuana",
    "slug": "townhouse-amueblado-the-park-malibu-vista-mar",
    "type": "casas",
    "division": "residencial",
    "price": 1700,
    "beds": 2,
    "baths": 2.5,
    "sqft": 162.99,
    "status": "For Rent",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/park at malibu-03.jpg",
    "coordinates": {
      "lat": 32.423623667,
      "lng": -117.094191233
    }
  },
  {
    "id": "128",
    "title": "Casa Colonial en Venta en Playas de Rosarito – 460 m² de Terreno ",
    "location": "Playas de Rosarito, Tijuana",
    "slug": "casa-colonial-venta-playas-rosarito-460m2",
    "type": "casas",
    "division": "residencial",
    "price": 525000,
    "beds": 3,
    "baths": 2.5,
    "sqft": 360,
    "status": "For Sale",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBVZHIELQUE01_1.jpg",
    "coordinates": {
      "lat": 32.406695363,
      "lng": -117.06089191
    }
  },
  {
    "id": "129",
    "title": "Departamento en Renta en Icon La Cacho – Amueblado y con Vista Panorámica",
    "location": "La Cacho, Tijuana",
    "slug": "departamento-en-renta-icon-la-cacho-amueblado-vista-panoramica-amenidades-seguridad",
    "type": "departamentos",
    "division": "residencial",
    "price": 2000,
    "beds": 2,
    "baths": 2,
    "sqft": 84,
    "status": "For Rent",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBRANCONEZ01_1.jpg",
    "coordinates": {
      "lat": 32.514029249,
      "lng": -117.023204204
    }
  },
  {
    "id": "130",
    "title": "Departamento en Renta – Exclusividad en Colinas de California Bonaterra",
    "location": "Colinas de California, Tijuana",
    "slug": "departamento-en-renta-exclusiva-colinas-california-bonaterra",
    "type": "departamentos",
    "division": "residencial",
    "price": 15000,
    "beds": 2,
    "baths": 2,
    "sqft": 55,
    "status": "For Rent",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBREFLR01_1.jpg",
    "coordinates": {
      "lat": 32.464864948,
      "lng": -117.006473941
    }
  },
  {
    "id": "131",
    "title": "Departamento de Lujo en Renta en Acceso Uno - Totalmente Amueblado con Vista Panorámica",
    "location": "Sonora Acceso Uno, Tijuana",
    "slug": "renta-departamento-amueblado-acceso-uno-alberca-vista-tijuana",
    "type": "departamentos",
    "division": "residencial",
    "price": 1450,
    "beds": 3,
    "baths": 2,
    "sqft": 91.77,
    "status": "For Rent",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBRANADMEZ01_1.jpg",
    "coordinates": {
      "lat": 32.495067335,
      "lng": -116.975554187
    }
  },
  {
    "id": "132",
    "title": "Casa en Venta en Privada Coto Uno - Con Amenidades Exclusivas",
    "location": "Privada Coto 1, Tijuana",
    "slug": "venta-casa-exclusiva-privada-coto-uno-alberca-jacuzzi-seguridad-24-7",
    "type": "casas",
    "division": "residencial",
    "price": 5900000,
    "beds": 3,
    "baths": 2.5,
    "sqft": 114,
    "status": "For Sale",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBVEGAZPE01_1.jpg",
    "coordinates": {
      "lat": 32.50554011,
      "lng": -117.015322534
    }
  },
  {
    "id": "133",
    "title": "Terreno en Venta en Libramiento Sur - 1.1 ha con Potencial Residencial y Comercial",
    "location": "Libramiento Sur, Tijuana",
    "slug": "venta-terreno-1-1-hectareas-libramiento-sur-rosas-magallon-residencial-comercial",
    "type": "terrenos-comerciales",
    "division": "residencial",
    "price": 430,
    "beds": 0,
    "baths": 0,
    "sqft": 0,
    "status": "For Sale",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PRVABX03_15.jpg",
    "coordinates": {
      "lat": 32.493340466,
      "lng": -116.97371639
    }
  },
  {
    "id": "134",
    "title": "Departamento en Venta en Luzia Plaza Peninsula - 2 Recámaras + Flex, Terraza y Amenidades de Lujo",
    "location": "Plaza Peninsula, Tijuana",
    "slug": "venta-departamento-luzia-plaza-peninsula-2-recmaras-flex-terraza-estacionamiento-amenidades",
    "type": "departamentos",
    "division": "residencial",
    "price": 7200000,
    "beds": 3,
    "baths": 2,
    "sqft": 106,
    "status": "For Sale",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBRIZARET01_1.jpg",
    "coordinates": {
      "lat": 32.51360506,
      "lng": -116.965665548
    }
  },
  {
    "id": "135",
    "title": "Local Comercial en Renta en Zona Centro - 214 m²",
    "location": "Zona Centro, Tijuana",
    "slug": "renta-local-comercial-zona-centro-calle-segunda-214m2",
    "type": "locales",
    "division": "comercial",
    "price": 2800,
    "beds": 0,
    "baths": 0,
    "sqft": 214,
    "status": "For Rent",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBRGONAND01_n_1.jpg",
    "coordinates": {
      "lat": 32.535018919,
      "lng": -117.033816977
    }
  },
  {
    "id": "136",
    "title": "Departamento en Venta en Veranda 15 - Espectacular Vista, Amplios Espacios y Excelente Ubicación",
    "location": "Cubillas Sur, Tijuana",
    "slug": "venta-departamento-veranda-15-vista-panoramica-cocina-cuarto-lavado-minisplit-bodega",
    "type": "departamentos",
    "division": "residencial",
    "price": 335000,
    "beds": 3,
    "baths": 2,
    "sqft": 155.642,
    "status": "For Sale",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBVEAACI01_1.jpg",
    "coordinates": {
      "lat": 32.509809078,
      "lng": -117.017605531
    }
  },
  {
    "id": "137",
    "title": "Proyecto de Casa en Venta con Vista al Océano - Sueños del Mar 285.41 m² de Construcción ",
    "location": "Sueños del Mar , Tijuana",
    "slug": "venta-proyecto-casa-vista-al-oceano-3-recamaras-estacionamiento-4-autos-patio-asador",
    "type": "casas",
    "division": "residencial",
    "price": 450000,
    "beds": 4,
    "baths": 3,
    "sqft": 285,
    "status": "For Sale",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/Casa-Carmen-1.jpg",
    "coordinates": {
      "lat": 32.417685879,
      "lng": -117.089793719
    }
  },
  {
    "id": "138",
    "title": "Consultorio en Renta en Torre Médica Otay - Ideal para Turismo Médico C5",
    "location": "Torre Medica Otay, Tijuana",
    "slug": "renta-consultorio-torre-medica-otay-ideal-turismo-c5",
    "type": "medica",
    "division": "comercial",
    "price": 800,
    "beds": 0,
    "baths": 0,
    "sqft": 10,
    "status": "For Rent",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBRLERAMAN05_1.jpg",
    "coordinates": {
      "lat": 32.530615136,
      "lng": -116.951514068
    }
  },
  {
    "id": "139",
    "title": "Consultorio en Renta en Torre Médica Otay - Ideal para Turismo Médico C4",
    "location": "Torre Medica Otay, Tijuana",
    "slug": "renta-consultorio-torre-medica-otay-ideal-turismo-c4",
    "type": "medica",
    "division": "comercial",
    "price": 800,
    "beds": 0,
    "baths": 0,
    "sqft": 10,
    "status": "For Rent",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBRLERAMAN04_1.jpg",
    "coordinates": {
      "lat": 32.530615136,
      "lng": -116.951514068
    }
  },
  {
    "id": "140",
    "title": "Consultorio en Renta en Torre Médica Otay - Ideal para Turismo Médico C3",
    "location": "Torre Medica Otay, Tijuana",
    "slug": "renta-consultorio-torre-medica-otay-ideal-turismo-c3",
    "type": "medica",
    "division": "comercial",
    "price": 850,
    "beds": 0,
    "baths": 0,
    "sqft": 13,
    "status": "For Rent",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBRLERAMAN03_1.jpg",
    "coordinates": {
      "lat": 32.530615136,
      "lng": -116.951514068
    }
  },
  {
    "id": "141",
    "title": "Consultorio en Renta en Torre Médica Otay - Ideal para Turismo Médico C2",
    "location": "Torre Medica Otay, Tijuana",
    "slug": "renta-consultorio-torre-medica-otay-ideal-turismo-c2",
    "type": "medica",
    "division": "comercial",
    "price": 850,
    "beds": 0,
    "baths": 0,
    "sqft": 13,
    "status": "For Rent",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBRLERAMAN02_1.jpg",
    "coordinates": {
      "lat": 32.530615136,
      "lng": -116.951514068
    }
  },
  {
    "id": "142",
    "title": "Casa en Venta - Fraccionamiento El Paraiso Colonia Las Palmas",
    "location": "Las Palmas, Tijuana",
    "slug": "venta-casa-zona-paraiso-las-palmas-tijuana-4-recamaras-patio-asador-chimenea-parque",
    "type": "casas",
    "division": "residencial",
    "price": 825000,
    "beds": 4,
    "baths": 4.5,
    "sqft": 350,
    "status": "For Sale",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/MPVCSN01_1.jpg",
    "coordinates": {
      "lat": 32.501894292,
      "lng": -116.989343682
    }
  },
  {
    "id": "143",
    "title": "Terreno en Venta / Aportación en El Florido - 2.5 Hectáreas para Uso Industrial o Desarrollo Residencial",
    "location": "El Florido, Tijuana",
    "slug": "venta-terreno-el-florido-2-5-hectareas-industrial-residencial",
    "type": "terrenos-comerciales",
    "division": "comercial",
    "price": 200,
    "beds": 0,
    "baths": 0,
    "sqft": 0,
    "status": "For Sale",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBVCONTINI01_1.jpg",
    "coordinates": {
      "lat": 32.463321747,
      "lng": -116.863064842
    }
  },
  {
    "id": "144",
    "title": "Terrenos en Venta en Fraccionamiento Lomas de Cantamar, Playas de Rosarito - Vista al Mar",
    "location": "Playas de Rosarito, Rosarito",
    "slug": "venta-terrenos-lomas-de-cantamar-playas-de-rosarito-vista-al-mar",
    "type": "terrenos-residenciales",
    "division": "residencial",
    "price": 55000,
    "beds": 0,
    "baths": 0,
    "sqft": 0,
    "status": "For Sale",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBVACHOYO01_1.jpg",
    "coordinates": {
      "lat": 32.244192528,
      "lng": -116.917627743
    }
  },
  {
    "id": "145",
    "title": "Oficina en Renta en Zona Río - Ubicación Estratégica cerca de Paseo de los Héroes",
    "location": "Zona Río, Tijuana",
    "slug": "renta-oficina-local-comercial-zona-rio-paseo-de-los-heroes-vista-ciudad-estacionamiento",
    "type": "locales",
    "division": "comercial",
    "price": 2830,
    "beds": 0,
    "baths": 2,
    "sqft": 166.49,
    "status": "For Rent",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBRBALROES01_1.jpg",
    "coordinates": {
      "lat": 32.5215248,
      "lng": -117.013609247
    }
  },
  {
    "id": "146",
    "title": "Consultorio en Renta en Torre Médica Otay - Ideal para Turismo Médico",
    "location": "Torre Medica Otay, Tijuana",
    "slug": "renta-consultorio-torre-medica-otay-ideal-turismo",
    "type": "medica",
    "division": "comercial",
    "price": 850,
    "beds": 0,
    "baths": 0,
    "sqft": 13,
    "status": "For Rent",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBRLERAMAN01_Consult_1.jpg",
    "coordinates": {
      "lat": 32.530615136,
      "lng": -116.951514068
    }
  },
  {
    "id": "147",
    "title": "Oficina en Renta en Zona Urbana Río - Espacio Amplio y Bien Ubicado",
    "location": "Zona Urbana Rio, Tijuana",
    "slug": "renta-oficina-zona-urbana-rio-amplio-ubicado",
    "type": "oficinas",
    "division": "comercial",
    "price": 875,
    "beds": 0,
    "baths": 1,
    "sqft": 50,
    "status": "For Rent",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBRGULRIAS01_1.jpg",
    "coordinates": {
      "lat": 32.533635692,
      "lng": -117.017059066
    }
  },
  {
    "id": "148",
    "title": "Terreno en Venta en el Valle de Guadalupe - Ideal para Desarrolladores",
    "location": "Valle de Guadalupe, Ensenada",
    "slug": "venta-terreno-valle-de-guadalupe-ideal-desarrolladores",
    "type": "terrenos-comerciales",
    "division": "comercial",
    "price": 27,
    "beds": 0,
    "baths": 0,
    "sqft": 0,
    "status": "For Sale",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PRVTSM01_1.jpg",
    "coordinates": {
      "lat": 32.006866658,
      "lng": -116.633869429
    }
  },
  {
    "id": "149",
    "title": "Terreno en Venta en Cumbres de Juárez - Vista Panorámica y Ubicación Privilegiada",
    "location": "Cumbres de Juarez, Tijuana",
    "slug": "venta-terreno-cumbres-de-juarez-vista-panoramica",
    "type": "terrenos-residenciales",
    "division": "residencial",
    "price": 706200,
    "beds": 0,
    "baths": 0,
    "sqft": 0,
    "status": "For Sale",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBVRISAHI01_5.jpg",
    "coordinates": {
      "lat": 32.508868797,
      "lng": -117.027290377
    }
  },
  {
    "id": "150",
    "title": "Casa en Venta en Real del Mar - Propiedad de Ensueño cerca del Mar",
    "location": "Real del Mar, Tijuana",
    "slug": "venta-casa-real-del-mar-propiedad-de-ensueno",
    "type": "casas",
    "division": "residencial",
    "price": 680000,
    "beds": 4,
    "baths": 4,
    "sqft": 400,
    "status": "For Sale",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBVEONWIN01_1.jpg",
    "coordinates": {
      "lat": 32.449277887,
      "lng": -117.092877686
    }
  },
  {
    "id": "151",
    "title": "Traspaso de Restaurante en Del Prado Medical Tower - Listo para Operar",
    "location": "El Prado, Tijuana",
    "slug": "traspaso-restaurante-del-prado-medical-tower",
    "type": "locales",
    "division": "comercial",
    "price": 3000,
    "beds": 0,
    "baths": 0,
    "sqft": 115,
    "status": "For Rent",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBTUELKYR01_1.jpg",
    "coordinates": {
      "lat": 32.509659636,
      "lng": -116.990465961
    }
  },
  {
    "id": "152",
    "title": "Locales en Renta - Excelente Ubicación en Colonia Hipódromo",
    "location": "Hipodromo, Tijuana",
    "slug": "renta-locales-colonia-hipodromo",
    "type": "locales",
    "division": "comercial",
    "price": 750,
    "beds": 0,
    "baths": 0,
    "sqft": 20,
    "status": "For Rent",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBRALMBINIS01_1.jpg",
    "coordinates": {
      "lat": 32.497501595,
      "lng": -116.988214015
    }
  },
  {
    "id": "153",
    "title": "Departamento en Venta - Avento En Plaza Alameda Otay",
    "location": "Otay, Tijuana",
    "slug": "venta-departamento-otay-avento-amueblado-amenidades",
    "type": "departamentos",
    "division": "residencial",
    "price": 385000,
    "beds": 3,
    "baths": 2,
    "sqft": 132.15,
    "status": "For Sale",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBVRESNEZT01_1.jpg",
    "coordinates": {
      "lat": 32.530702247,
      "lng": -116.952108919
    }
  },
  {
    "id": "154",
    "title": "Departamento en Renta en Chapultepec - Vistas Espectaculares y Amenidades de Lujo",
    "location": "Chapultepec, Tijuana",
    "slug": "renta-departamento-chapultepec-vistas-amenidades",
    "type": "departamentos",
    "division": "residencial",
    "price": 2700,
    "beds": 2,
    "baths": 2.5,
    "sqft": 152,
    "status": "For Rent",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBRALBBAR01_1.jpg",
    "coordinates": {
      "lat": 32.508207666,
      "lng": -117.005443309
    }
  },
  {
    "id": "155",
    "title": "Oficina o Local Comercial En Venta / Renta en Zona Estratégica - 151 m² de Oportunidad",
    "location": "Las Palmas, Tijuana",
    "slug": "oficina-local-comercial-zona-centrica-151m2",
    "type": "locales",
    "division": "comercial",
    "price": 1600,
    "beds": 0,
    "baths": 0,
    "sqft": 73,
    "status": "For Rent",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBRTACASES01_1.jpg",
    "coordinates": {
      "lat": 32.503923226,
      "lng": -116.981526075
    }
  },
  {
    "id": "156",
    "title": "Departamento Nuevo en Venta / Renta en THE LANDMARK - Estilo de Vida Cosmopolita",
    "location": "Blvd. Agua Caliente, Tijuana",
    "slug": "venta-departamento-the-landmark-tijuana",
    "type": "departamentos",
    "division": "residencial",
    "price": 2450,
    "beds": 2,
    "baths": 2,
    "sqft": 107,
    "status": "For Rent",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBVMARALAM01_amen_13.jpg",
    "coordinates": {
      "lat": 32.516551241,
      "lng": -117.014599504
    }
  },
  {
    "id": "157",
    "title": "Venta de Casas en VILLALOMAS Residencial - 325 m² de Construcción, 4 Niveles",
    "location": "Hacienda Las Palomas, Tijuana",
    "slug": "venta-casas-villalomas-residencial-4-niveles",
    "type": "casas",
    "division": "residencial",
    "price": 555000,
    "beds": 3,
    "baths": 2.5,
    "sqft": 325,
    "status": "For Sale",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBVGUEZDRO01_1.jpg",
    "coordinates": {
      "lat": 32.493750511,
      "lng": -117.000384463
    }
  },
  {
    "id": "158",
    "title": "Departamento en Renta en KYO Hipódromo 72m²",
    "location": "Hipodromo, Tijuana",
    "slug": "renta-departamento-kyo-hipodromo-2-recamaras-amenidades",
    "type": "departamentos",
    "division": "residencial",
    "price": 1100,
    "beds": 2,
    "baths": 2,
    "sqft": 72,
    "status": "For Rent",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBRABAB01des_1.jpg",
    "coordinates": {
      "lat": 32.499750687,
      "lng": -116.981286242
    }
  },
  {
    "id": "159",
    "title": "Renta de Terreno Comercial en Esquina de 927.37 m² Sobre Blvd. Cuauhtémoc Sur",
    "location": "Marrón, Tijuana",
    "slug": "renta-local-comercial-esquina-927m2-blvd-cuauhtemoc-tijuana",
    "type": "terrenos-comerciales",
    "division": "comercial",
    "price": 14.5,
    "beds": 0,
    "baths": 0,
    "sqft": 0,
    "status": "For Rent",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBRCEROZW01_1.jpg",
    "coordinates": {
      "lat": 32.522193556,
      "lng": -117.020061367
    }
  },
  {
    "id": "160",
    "title": "Locales en Renta - La Vía Plaza en las Ferias",
    "location": "De las Ferias, Tijuana",
    "slug": "plaza-comercial-techada-dos-pisos-18-locales",
    "type": "locales",
    "division": "comercial",
    "price": 1400,
    "beds": 0,
    "baths": 0,
    "sqft": 33.8,
    "status": "For Rent",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBRGUERNTE01_1.jpg",
    "coordinates": {
      "lat": 32.49816052,
      "lng": -116.988905204
    }
  },
  {
    "id": "161",
    "title": "Departamento Amueblado en ADAMANT – En Renta",
    "location": "Blvd. Agua Caliente, Tijuana",
    "slug": "departamento-amueblado-adamant-plaza-galerias-xolos",
    "type": "departamentos",
    "division": "residencial",
    "price": 1500,
    "beds": 1,
    "baths": 1,
    "sqft": 51,
    "status": "For Rent",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBRYVGA01_5.jpg",
    "coordinates": {
      "lat": 32.509822412,
      "lng": -116.992781617
    }
  },
  {
    "id": "162",
    "title": "Exclusiva Casa de Lujo en Venta en Colonia Cacho",
    "location": "Cacho, Tijuana",
    "slug": "casa-lujo-venta-colonia-cacho",
    "type": "casas",
    "division": "residencial",
    "price": 1150000,
    "beds": 4,
    "baths": 4.5,
    "sqft": 421.72,
    "status": "For Sale",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBVAELDEI01_n_2.jpg",
    "coordinates": {
      "lat": 32.51881674,
      "lng": -117.024622219
    }
  },
  {
    "id": "163",
    "title": "Bodega nueva en renta con ubicación estratégica",
    "location": "Libertad, Tijuana",
    "slug": "bodega-nueva-estrategica-tijuana",
    "type": "naves-y-bodegas",
    "division": "comercial",
    "price": 3000,
    "beds": 0,
    "baths": 1,
    "sqft": 290,
    "status": "For Rent",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBRCAMPER06_1.jpg",
    "coordinates": {
      "lat": 32.541271107,
      "lng": -116.998785934
    }
  },
  {
    "id": "164",
    "title": "Moderna Casa en Valparaíso Residencial ",
    "location": "Valparaiso, Tijuana",
    "slug": "moderna-casa-valparaiso-residencial-amenidades",
    "type": "casas",
    "division": "residencial",
    "price": 1380,
    "beds": 3,
    "baths": 1,
    "sqft": 159,
    "status": "For Rent",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBRAXHESA01_1.jpg",
    "coordinates": {
      "lat": 32.447891915,
      "lng": -117.030177842
    }
  },
  {
    "id": "165",
    "title": "Departamento en Renta en Zona Centro Calle Segunda",
    "location": "Zona centro, Tijuana",
    "slug": "renta-departamento-tijuana-2recamaras-850dls",
    "type": "departamentos",
    "division": "residencial",
    "price": 800,
    "beds": 2,
    "baths": 1,
    "sqft": 71.3,
    "status": "For Rent",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBRREBAN06_1.jpg",
    "coordinates": {
      "lat": 32.534935525,
      "lng": -117.044413385
    }
  },
  {
    "id": "166",
    "title": "Terreno en Venta - 1000m² en El Encinal Ideal para casa de Campo",
    "location": "Ejido El Encinal, Tecate",
    "slug": "terreno-1000m2-casa-campo-el-encinal",
    "type": "vida-en-el-campo",
    "division": "residencial",
    "price": 55000,
    "beds": 0,
    "baths": 0,
    "sqft": 0,
    "status": "For Sale",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBVAROCAB01_1.jpg",
    "coordinates": {
      "lat": 32.53617646,
      "lng": -116.408819531
    }
  },
  {
    "id": "167",
    "title": "Terreno Comercial de 4,500 m² en Venta sobre Blvd. Cuauhtémoc",
    "location": "Lomas del Rio, Tijuana",
    "slug": "terreno-comercial-4500m2-blvd-cuauhtemoc",
    "type": "terrenos-comerciales",
    "division": "comercial",
    "price": 275,
    "beds": 0,
    "baths": 0,
    "sqft": 0,
    "status": "For Sale",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBVCLNARTO01_7.jpg",
    "coordinates": {
      "lat": 32.487813759,
      "lng": -117.01349484
    }
  },
  {
    "id": "168",
    "title": "Renta de Terreno Comercial 4,000 m² en Calle Segunda, entre Playas de Tijuana y Col. Laureles",
    "location": "Anexa Los Laureles & Playas de Tijuana, Tijuana",
    "slug": "renta-terreno-comercial-4000m2-calle-segunda-playas-tijuana-laureles",
    "type": "terrenos-comerciales",
    "division": "comercial",
    "price": 10,
    "beds": 0,
    "baths": 0,
    "sqft": 0,
    "status": "For Rent",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBRMINELI01_1.webp",
    "coordinates": {
      "lat": 32.535929582,
      "lng": -117.097307905
    }
  },
  {
    "id": "169",
    "title": "Casa en Venta en Las Huertas",
    "location": "Las Huertas, Tijuana",
    "slug": "casa-en-venta-las-huertas",
    "type": "casas",
    "division": "residencial",
    "price": 250000,
    "beds": 4,
    "baths": 3,
    "sqft": 220,
    "status": "For Sale",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBVIDARERAS01_1.webp",
    "coordinates": {
      "lat": 32.492324288,
      "lng": -116.959935119
    }
  },
  {
    "id": "170",
    "title": "Penthouse en Venta / Renta - En Nivel Diez",
    "location": "Jardines de Chapultepec, Tijuana",
    "slug": "penthouse-en-venta-en-nivel-diez",
    "type": "departamentos",
    "division": "residencial",
    "price": 5300,
    "beds": 3,
    "baths": 4.5,
    "sqft": 330,
    "status": "For Rent",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBVUNARICK0201.webp",
    "coordinates": {
      "lat": 32.508130517,
      "lng": -117.018045833
    }
  },
  {
    "id": "171",
    "title": "Casas en Venta - Residencial Chapultepec",
    "location": "Chapultepec Doctores, Tijuana",
    "slug": "casas-en-venta-residencial-chapultepec",
    "type": "casas",
    "division": "residencial",
    "price": 12125000,
    "beds": 3,
    "baths": 3.5,
    "sqft": 312,
    "status": "For Sale",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBVUNACK01_1.jpg",
    "coordinates": {
      "lat": 32.508130517,
      "lng": -117.018045833
    }
  },
  {
    "id": "172",
    "title": "Casa en Venta en Hacienda Aguacaliente",
    "location": "Hacienda Agua Caliente, Tijuana",
    "slug": "casa-en-venta-en-hacienda-aguascalientes",
    "type": "casas",
    "division": "residencial",
    "price": 1545000,
    "beds": 4,
    "baths": 5.5,
    "sqft": 1273.49,
    "status": "For Sale",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBVDEZBEDO0101.webp",
    "coordinates": {
      "lat": 32.486049074,
      "lng": -116.998479419
    }
  },
  {
    "id": "173",
    "title": "Oficina/Local en Renta en Colonia Aviacion",
    "location": "Aviación, Tijuana",
    "slug": "oficina-local-en-renta-en-colonia-aviacion",
    "type": "locales",
    "division": "comercial",
    "price": 1850,
    "beds": 0,
    "baths": 2,
    "sqft": 120,
    "status": "For Rent",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBRMSE0101.jpg",
    "coordinates": {
      "lat": 32.514162709,
      "lng": -117.006617142
    }
  },
  {
    "id": "174",
    "title": "Departamento en Venta - Gerónimo Meza",
    "location": "Gerónimo Meza, Tijuana",
    "slug": "departamento-en-venta-geronimo-meza",
    "type": "departamentos",
    "division": "residencial",
    "price": 4900000,
    "beds": 2,
    "baths": 2,
    "sqft": 87.84,
    "status": "For Sale",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBVCASERRA0101.webp",
    "coordinates": {
      "lat": 32.501978603,
      "lng": -116.982939734
    }
  },
  {
    "id": "175",
    "title": "Preventa de Casas Azaleas Residencial - La Mesa",
    "location": "La Mesa, Tijuana",
    "slug": "preventa-de-casas-azaleas-residencial-la-mesa",
    "type": "casas",
    "division": "residencial",
    "price": 365500,
    "beds": 3,
    "baths": 2.5,
    "sqft": 215,
    "status": "For Sale",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBVZAFI01_1.jpg",
    "coordinates": {
      "lat": 32.493923187,
      "lng": -116.96282196
    }
  },
  {
    "id": "176",
    "title": "Terrenos en Venta Natal - Valle de Guadalupe",
    "location": "Valle de Guadalupe, Ensenada",
    "slug": "terrenos-en-venta-natal-valle-de-guadalupe",
    "type": "terrenos-comerciales",
    "division": "comercial",
    "price": 50,
    "beds": 0,
    "baths": 0,
    "sqft": 0,
    "status": "For Sale",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBVYIEL011.jpg",
    "coordinates": {
      "lat": 31.985205806,
      "lng": -116.723406914
    }
  },
  {
    "id": "177",
    "title": "Local en Renta Plaza Playas Express - Playas de Tijuana",
    "location": "Playas de Tijuana, Tijuana",
    "slug": "local-en-renta-plaza-playas-express-playas-de-tijuana",
    "type": "locales",
    "division": "comercial",
    "price": 1616,
    "beds": 0,
    "baths": 2,
    "sqft": 101,
    "status": "For Rent",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBRIANTMA0101.webp",
    "coordinates": {
      "lat": 32.533119419,
      "lng": -117.116009927
    }
  },
  {
    "id": "178",
    "title": "Casa en Venta  - Blvd Casa Blanca",
    "location": "Casa Blanca, Tijuana",
    "slug": "casa-en-venta-renta-blvd-casa-blanca",
    "type": "casas",
    "division": "residencial",
    "price": 4490000,
    "beds": 3,
    "baths": 2.5,
    "sqft": 102,
    "status": "For Sale",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBVLOLOP0101.webp",
    "coordinates": {
      "lat": 32.501538965,
      "lng": -116.896026504
    }
  },
  {
    "id": "179",
    "title": "Casas nuevas en Renta - Colonia 20 de Noviembre",
    "location": "20 de Noviembre, Tijuana",
    "slug": "casas-nuevas-en-venta-colonia-20-de-noviembre",
    "type": "casas",
    "division": "residencial",
    "price": 1450,
    "beds": 3,
    "baths": 2.5,
    "sqft": 151,
    "status": "For Rent",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBVSARIGUI01_1-2.jpg",
    "coordinates": {
      "lat": 32.511308116,
      "lng": -116.982677404
    }
  },
  {
    "id": "180",
    "title": "En Venta / Renta Departamento - Torre Luzia Plaza Peninsula",
    "location": "Alamar, Tijuana",
    "slug": "en-renta-departamento-torre-luzia-plaza-peninsula",
    "type": "departamentos",
    "division": "residencial",
    "price": 1800,
    "beds": 3,
    "baths": 2,
    "sqft": 107,
    "status": "For Rent",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBRRAMOVALDO0101.webp",
    "coordinates": {
      "lat": 32.513813146,
      "lng": -116.965665548
    }
  },
  {
    "id": "181",
    "title": "Bodega en renta - Entre Vía rápida y Blvd. Benítez Uno",
    "location": "Blvrd Federico Benítez López, Tijuana",
    "slug": "bodega-en-renta-entre-via-rapida-y-blvd-benitez",
    "type": "naves-y-bodegas",
    "division": "comercial",
    "price": 11000,
    "beds": 0,
    "baths": 0.5,
    "sqft": 1366.58,
    "status": "For Rent",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBRBABRAMS011.jpg",
    "coordinates": {
      "lat": 32.494714483,
      "lng": -116.94337938
    }
  },
  {
    "id": "182",
    "title": "Bodega en renta -  Vía rápida y Blvd. Benítez Dos",
    "location": "Blvrd Federico Benítez López, Tijuana",
    "slug": "bodega-en-renta-via-rapida-y-blvd-benitez",
    "type": "naves-y-bodegas",
    "division": "comercial",
    "price": 11000,
    "beds": 0,
    "baths": 0.5,
    "sqft": 1366.58,
    "status": "For Rent",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBRBABRAMS0201.jpg",
    "coordinates": {
      "lat": 32.494714483,
      "lng": -116.94337938
    }
  },
  {
    "id": "183",
    "title": "Local Comercial en Renta - Blvd. Agua Caliente",
    "location": "Agua Caliente, Tijuana",
    "slug": "local-comercial-en-renta-blvd-agua-caliente",
    "type": "locales",
    "division": "comercial",
    "price": 8000,
    "beds": 0,
    "baths": 2,
    "sqft": 446.48,
    "status": "For Rent",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBRCONCA011.webp",
    "coordinates": {
      "lat": 32.517710094,
      "lng": -117.015149831
    }
  },
  {
    "id": "184",
    "title": "Departamento en Venta en Blvd Fundadores",
    "location": "Blvd. Fundadores- El Rubi, Tijuana",
    "slug": "departamento-en-venta-en-blvd-fundadores",
    "type": "departamentos",
    "division": "residencial",
    "price": 3500000,
    "beds": 2,
    "baths": 2,
    "sqft": 113,
    "status": "For Sale",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBVALVMEN0101.jpg",
    "coordinates": {
      "lat": 32.479625248,
      "lng": -117.036235588
    }
  },
  {
    "id": "185",
    "title": "Departamento en Renta - City Point Zona Rio 3ra etapa",
    "location": "Zona Rio 3ra Etapa, Tijuana",
    "slug": "departamento-en-renta-city-point-zona-rio-3ra-etapa-1",
    "type": "departamentos",
    "division": "residencial",
    "price": 1600,
    "beds": 2,
    "baths": 2,
    "sqft": 91,
    "status": "For Rent",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBRVIRECAR01_7.jpg",
    "coordinates": {
      "lat": 32.481817676,
      "lng": -116.9273058
    }
  },
  {
    "id": "186",
    "title": " Nave Industrial en Renta - Rosarito Lucio Blanco",
    "location": "Rosarito, Rosarito",
    "slug": "nave-industrial-en-renta-rosarito-lucio-blanco",
    "type": "naves-y-bodegas",
    "division": "industrial",
    "price": 7,
    "beds": 0,
    "baths": 0,
    "sqft": 7897,
    "status": "For Rent",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBRRURIAS021.webp",
    "coordinates": {
      "lat": 32.383267435,
      "lng": -117.042730109
    }
  },
  {
    "id": "187",
    "title": "Nave Industrial en Renta - Industrial Pacifico",
    "location": "Industrial Pacifico, Tijuana",
    "slug": "nave-industrial-en-renta-industrial-pacifico",
    "type": "naves-y-bodegas",
    "division": "industrial",
    "price": 7.32,
    "beds": 0,
    "baths": 0,
    "sqft": 8647,
    "status": "For Rent",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBRRURIAS013.webp",
    "coordinates": {
      "lat": 32.454689167,
      "lng": -116.97659045
    }
  },
  {
    "id": "188",
    "title": "Casa en Venta en Santa Fe Urbiquinta ",
    "location": "Santa Fe, Tijuana",
    "slug": "casa-en-venta-en-santa-fe-urbiquinta",
    "type": "casas",
    "division": "residencial",
    "price": 189000,
    "beds": 5,
    "baths": 2.5,
    "sqft": 180,
    "status": "For Sale",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBRGONIANA0101.webp",
    "coordinates": {
      "lat": 32.431147723,
      "lng": -117.06862377
    }
  },
  {
    "id": "189",
    "title": "Hermosa casa en renta en Privada Del Fraccionamiento Laderas de Monterrey",
    "location": "Laderas de Monterrey, Tijuana",
    "slug": "hermosa-casa-en-renta-en-privada-del-fraccionamiento-laderas-de-monterrey",
    "type": "casas",
    "division": "residencial",
    "price": 2600,
    "beds": 5,
    "baths": 5,
    "sqft": 534,
    "status": "For Rent",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBRMANRO0101.jpg",
    "coordinates": {
      "lat": 32.505913624,
      "lng": -117.024999254
    }
  },
  {
    "id": "190",
    "title": "Consultorio médico en renta - Plaza Toreo City Complex Blvd. Agua Caliente",
    "location": "Agua Caliente, Tijuana",
    "slug": "consultorio-medico-en-renta-plaza-toreo-city-complex-blvd-agua-caliente",
    "type": "edificios",
    "division": "comercial",
    "price": 1000,
    "beds": 0,
    "baths": 0,
    "sqft": 0,
    "status": "For Rent",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBRLOPSASA0101.webp",
    "coordinates": {
      "lat": 32.518056561,
      "lng": -117.018666573
    }
  },
  {
    "id": "191",
    "title": "Gran Casa en Venta en Hacienda Agua Caliente",
    "location": "Hacienda Agua Caliente, Tijuana",
    "slug": "gran-casa-en-venta-en-hacienda-agua-caliente",
    "type": "casas",
    "division": "residencial",
    "price": 2200000,
    "beds": 6,
    "baths": 7,
    "sqft": 770,
    "status": "For Sale",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBVCARBLES0101.webp",
    "coordinates": {
      "lat": 32.490126824,
      "lng": -117.004148477
    }
  },
  {
    "id": "192",
    "title": "Casa en Venta - Chapultepec Doctores",
    "location": "Chapultepec Doctores, Tijuana",
    "slug": "casa-en-venta-chapultepec-doctores",
    "type": "casas",
    "division": "residencial",
    "price": 719999,
    "beds": 4,
    "baths": 5,
    "sqft": 329,
    "status": "For Sale",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBVTEHU0101.webp",
    "coordinates": {
      "lat": 32.505717901,
      "lng": -117.018987734
    }
  },
  {
    "id": "193",
    "title": "Departamento en Venta - Las Plazas",
    "location": "Las Plazas, Tijuana",
    "slug": "departamento-en-venta-las-plazas",
    "type": "departamentos",
    "division": "residencial",
    "price": 4400000,
    "beds": 3,
    "baths": 2,
    "sqft": 129,
    "status": "For Sale",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBVMIMHI0101.webp",
    "coordinates": {
      "lat": 32.48361146,
      "lng": -116.997392103
    }
  },
  {
    "id": "194",
    "title": "Terreno Comercial en Venta - En Pedregal de Santa Julia",
    "location": "Pedregal de Santa Julia, Tijuana",
    "slug": "terreno-comercial-en-venta-en-pedregal-de-santa-julia",
    "type": "terrenos-comerciales",
    "division": "comercial",
    "price": 150000,
    "beds": 0,
    "baths": 0,
    "sqft": 0,
    "status": "For Sale",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBVEUZVIZ011.webp",
    "coordinates": {
      "lat": 32.494206599,
      "lng": -117.059905465
    }
  },
  {
    "id": "195",
    "title": "Local en Renta - En la Mesa",
    "location": "Colonia Lopez Lucio, Tijuana",
    "slug": "local-en-renta-en-la-mesa",
    "type": "locales",
    "division": "comercial",
    "price": 1500,
    "beds": 0,
    "baths": 0,
    "sqft": 0,
    "status": "For Rent",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBRNANAFG0101.jpg",
    "coordinates": {
      "lat": 32.504474488,
      "lng": -116.979724711
    }
  },
  {
    "id": "196",
    "title": "Terreno Comercial con local en renta - Alba roja",
    "location": "Alba Roja, Tijuana",
    "slug": "terreno-comercial-con-local-en-renta-alba-roja",
    "type": "locales",
    "division": "comercial",
    "price": 7000,
    "beds": 0,
    "baths": 0,
    "sqft": 120,
    "status": "For Rent",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBRESVELA0401.webp",
    "coordinates": {
      "lat": 32.495769319,
      "lng": -116.972095846
    }
  },
  {
    "id": "197",
    "title": "Traspaso de Local Comercial - Plaza Jalisco Cacho",
    "location": "Cacho, Tijuana",
    "slug": "traspaso-de-local-comercial-plaza-jalisco-cacho",
    "type": "locales",
    "division": "comercial",
    "price": 40000,
    "beds": 0,
    "baths": 0,
    "sqft": 38,
    "status": "For Sale",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBVUELCIA011.webp",
    "coordinates": {
      "lat": 32.516887533,
      "lng": -117.023857335
    }
  },
  {
    "id": "198",
    "title": " Bodega, Local y/o Oficina en Renta - En el Soler",
    "location": "Soler, Tijuana",
    "slug": "bodega-en-renta-en-el-soler",
    "type": "locales",
    "division": "comercial",
    "price": 8700,
    "beds": 0,
    "baths": 0,
    "sqft": 950,
    "status": "For Rent",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBRVICANA0501.webp",
    "coordinates": {
      "lat": 32.531875111,
      "lng": -117.073433646
    }
  },
  {
    "id": "199",
    "title": "Departamento Penthouse en Renta - Altalia III",
    "location": "Juarez, Tijuana",
    "slug": "departamento-penthouse-en-renta-altalia-iii",
    "type": "departamentos",
    "division": "residencial",
    "price": 1999,
    "beds": 2,
    "baths": 2.5,
    "sqft": 258,
    "status": "For Rent",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBRCASTAPIA0101.webp",
    "coordinates": {
      "lat": 32.514455927,
      "lng": -117.033297377
    }
  },
  {
    "id": "200",
    "title": "Local Comercial en Renta  - Otay",
    "location": "Otay, Tijuana",
    "slug": "local-comercial-en-renta-otay",
    "type": "locales",
    "division": "comercial",
    "price": 15,
    "beds": 0,
    "baths": 0,
    "sqft": 136,
    "status": "For Rent",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBRTURACO011.webp",
    "coordinates": {
      "lat": 32.532579747,
      "lng": -116.946117235
    }
  },
  {
    "id": "201",
    "title": "Terreno en venta 5.2 ha - Chapultepec California",
    "location": "La Mesa, Tijuana",
    "slug": "terreno-en-venta-5-2-ha-chapultepec-california",
    "type": "terrenos-comerciales",
    "division": "comercial",
    "price": 120,
    "beds": 0,
    "baths": 0,
    "sqft": 0,
    "status": "For Sale",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBVYANSCON011.webp",
    "coordinates": {
      "lat": 32.492341557,
      "lng": -116.96497786
    }
  },
  {
    "id": "202",
    "title": "Edificio acondicionado como hospital en Venta - Zona Rio",
    "location": "Zona Rio, Tijuana",
    "slug": "edificio-acondicionado-como-hospital-en-venta-zona-rio",
    "type": "edificios",
    "division": "comercial",
    "price": 2500000,
    "beds": 0,
    "baths": 0,
    "sqft": 700,
    "status": "For Sale",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBVCARKIRI0101.webp",
    "coordinates": {
      "lat": 32.522440696,
      "lng": -117.01592239
    }
  },
  {
    "id": "203",
    "title": "Consultorios en Venta - Zona Urbana Rio BreakWall",
    "location": "Zona Rio, Tijuana",
    "slug": "consultorios-en-venta-zona-urbana-rio-break-wall",
    "type": "oficinas",
    "division": "comercial",
    "price": 3500,
    "beds": 0,
    "baths": 0,
    "sqft": 0,
    "status": "For Sale",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBVLADEZ0101.webp",
    "coordinates": {
      "lat": 32.533237226,
      "lng": -117.016731278
    }
  },
  {
    "id": "204",
    "title": "Bodega en Venta - En Valle de las Palmas",
    "location": "Valle de las Palmas, Tecate",
    "slug": "bodega-en-venta-en-valle-de-las-palmas",
    "type": "naves-y-bodegas",
    "division": "comercial",
    "price": 60622000,
    "beds": 0,
    "baths": 26,
    "sqft": 3985,
    "status": "For Sale",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBVDEZLOP0101.webp",
    "coordinates": {
      "lat": 32.377628773,
      "lng": -116.6273116
    }
  },
  {
    "id": "205",
    "title": "DEPARTAMENTO EN VENTA EN ASCENSO CHAPULTEPEC",
    "location": "Agua Caliente, Tijuana",
    "slug": "departamento-en-venta-en-ascenso-chapultepec",
    "type": "departamentos",
    "division": "residencial",
    "price": 13000000,
    "beds": 3,
    "baths": 2.5,
    "sqft": 219,
    "status": "For Sale",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBVJO03-1n_1.jpg",
    "coordinates": {
      "lat": 32.500527,
      "lng": -117.00193
    }
  },
  {
    "id": "206",
    "title": "Local en Renta - Plaza Coral Playas de Tijuana Planta Baja",
    "location": "Playas de Tijuana, Tijuana",
    "slug": "local-en-renta-plaza-coral-playas-de-tijuana-planta-baja",
    "type": "locales",
    "division": "comercial",
    "price": 1800,
    "beds": 0,
    "baths": 1,
    "sqft": 88,
    "status": "For Rent",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBRASHFEL0101.jpg",
    "coordinates": {
      "lat": 32.521981642,
      "lng": -117.115856746
    }
  },
  {
    "id": "207",
    "title": "Nave industrial en Renta con conectividad hacia Libramiento Sur",
    "location": "La Gloria , Tijuana",
    "slug": "nave-industrial-con-conectividad-hacia-libramiento-sur",
    "type": "naves-y-bodegas",
    "division": "industrial",
    "price": 8,
    "beds": 0,
    "baths": 2,
    "sqft": 2356,
    "status": "For Rent",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBILAGAL0101.jpg",
    "coordinates": {
      "lat": 32.442441343,
      "lng": -117.014173302
    }
  },
  {
    "id": "208",
    "title": "Centro Comercial en Venta - Hacienda Las Delicias",
    "location": "Hacienda Las Delicias, Tijuana",
    "slug": "centro-comercial-en-venta-hacienda-las-delicias",
    "type": "plazas-comerciales",
    "division": "comercial",
    "price": 1500000,
    "beds": 0,
    "baths": 0,
    "sqft": 0,
    "status": "For Sale",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBVILAGALIC021.jpg",
    "coordinates": {
      "lat": 32.404762141,
      "lng": -116.94332831
    }
  },
  {
    "id": "209",
    "title": "Locales en Renta en Plaza Puerta del Sol",
    "location": "Soler, Tijuana",
    "slug": "locales-en-renta-en-plaza-puerta-del-sol",
    "type": "locales",
    "division": "comercial",
    "price": 20,
    "beds": 0,
    "baths": 0,
    "sqft": 72,
    "status": "For Rent",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBRLOPMOR0101.webp",
    "coordinates": {
      "lat": 32.530146428,
      "lng": -117.073970069
    }
  },
  {
    "id": "210",
    "title": "Departamentos en Preventa - Burócratas II",
    "location": "Burocratas Hipodromo, Tijuana",
    "slug": "departamentos-en-preventa-burocratas-ii",
    "type": "departamentos",
    "division": "residencial",
    "price": 4500000,
    "beds": 2,
    "baths": 1,
    "sqft": 77,
    "status": "For Sale",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBVEDUARO011.webp",
    "coordinates": {
      "lat": 32.493373476,
      "lng": -116.998044785
    }
  },
  {
    "id": "211",
    "title": "Centro comercial en Venta - Villas del Campo",
    "location": "Villas del campo, Tijuana",
    "slug": "centro-comercial-en-venta-villas-del-campo",
    "type": "plazas-comerciales",
    "division": "comercial",
    "price": 1500000,
    "beds": 0,
    "baths": 0,
    "sqft": 0,
    "status": "For Sale",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBVILAGALIC011.jpg",
    "coordinates": {
      "lat": 32.50731603,
      "lng": -116.740885776
    }
  },
  {
    "id": "212",
    "title": "Vinicola en Venta - Valle de Guadalupe",
    "location": "Valle de Guadalupe, Ensenada",
    "slug": "vinicola-en-venta-valle-de-guadalupe",
    "type": "terrenos-comerciales",
    "division": "comercial",
    "price": 3200000,
    "beds": 0,
    "baths": 0,
    "sqft": 900,
    "status": "For Sale",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBVALVPARR0101.webp",
    "coordinates": {
      "lat": 32.002191507,
      "lng": -116.670278329
    }
  },
  {
    "id": "213",
    "title": "Elvira Residences PH 2 - Departamentos en Venta",
    "location": "Cacho, Tijuana",
    "slug": "departamentos-en-venta-elvira-residences-ph-2",
    "type": "departamentos",
    "division": "residencial",
    "price": 780422.28,
    "beds": 3,
    "baths": 4,
    "sqft": 189,
    "status": "For Sale",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBVSALVNA01_701.jpg",
    "coordinates": {
      "lat": 32.513674904,
      "lng": -117.023440686
    }
  },
  {
    "id": "214",
    "title": "Elvira Residences Modelo 2 - Departamentos en Venta",
    "location": "Cacho, Tijuana",
    "slug": "departamentos-en-venta-elvira-residences-modelo-2",
    "type": "departamentos",
    "division": "residencial",
    "price": 424605.62,
    "beds": 2,
    "baths": 2,
    "sqft": 114.9,
    "status": "For Sale",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBVSALVNA0201.jpg",
    "coordinates": {
      "lat": 32.513674904,
      "lng": -117.023440686
    }
  },
  {
    "id": "215",
    "title": "Elvira Residences Modelo 3 - Departamentos en Venta",
    "location": "Cacho, Tijuana",
    "slug": "departamentos-en-venta-elvira-residences-modelo-3",
    "type": "departamentos",
    "division": "residencial",
    "price": 306517.96,
    "beds": 1,
    "baths": 1.5,
    "sqft": 78,
    "status": "For Sale",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBVSALVNA01_301.jpg",
    "coordinates": {
      "lat": 32.513674904,
      "lng": -117.023440686
    }
  },
  {
    "id": "216",
    "title": "Terreno Residencial  Venta - Rancho Tecate",
    "location": "Tecate, Tecate",
    "slug": "terreno-residencial-venta-rancho-tecate",
    "type": "terrenos-residenciales",
    "division": "residencial",
    "price": 65000,
    "beds": 0,
    "baths": 0,
    "sqft": 0,
    "status": "For Sale",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBVLAA0101-1.webp",
    "coordinates": {
      "lat": 32.50369,
      "lng": -116.603766
    }
  },
  {
    "id": "217",
    "title": "Centro comercial en Venta - Versalles",
    "location": "La Gloria , Tijuana",
    "slug": "centro-comercial-en-venta-versalles",
    "type": "plazas-comerciales",
    "division": "comercial",
    "price": 1500000,
    "beds": 0,
    "baths": 0,
    "sqft": 0,
    "status": "For Sale",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBVGAVILAW011.jpg",
    "coordinates": {
      "lat": 32.434485512,
      "lng": -117.020761377
    }
  },
  {
    "id": "218",
    "title": "Elvira Residences Modelo 4 - Departamentos en Venta",
    "location": "Cacho, Tijuana",
    "slug": "departamentos-en-venta-elvira-residences-modelo-4",
    "type": "departamentos",
    "division": "residencial",
    "price": 439202.6,
    "beds": 2,
    "baths": 2,
    "sqft": 118,
    "status": "For Sale",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBVSALVNA01_401.jpg",
    "coordinates": {
      "lat": 32.513674904,
      "lng": -117.023440686
    }
  },
  {
    "id": "219",
    "title": "Departamento en Venta - Ermita Sur",
    "location": "Ermita Sur, Tijuana",
    "slug": "departamento-en-venta-ermita-sur",
    "type": "departamentos",
    "division": "residencial",
    "price": 275000,
    "beds": 3,
    "baths": 2,
    "sqft": 186,
    "status": "For Sale",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBVRUMSOL0101.jpg",
    "coordinates": {
      "lat": 32.493042547,
      "lng": -116.98499934
    }
  },
  {
    "id": "220",
    "title": "Elvira Residences PH 1 - Departamentos en Venta ",
    "location": "Cacho, Tijuana",
    "slug": "departamentos-en-venta-elvira-residences-ph-1",
    "type": "departamentos",
    "division": "residencial",
    "price": 1205666,
    "beds": 4,
    "baths": 5,
    "sqft": 308,
    "status": "For Sale",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBVSALVNA01_601.jpg",
    "coordinates": {
      "lat": 32.513674904,
      "lng": -117.023440686
    }
  },
  {
    "id": "221",
    "title": "Terreno en venta en Blvd. Benitez",
    "location": "Los españoles, Tijuana",
    "slug": "terreno-en-venta-en-blvd-benitez",
    "type": "terrenos-comerciales",
    "division": "comercial",
    "price": 690,
    "beds": 0,
    "baths": 0,
    "sqft": 0,
    "status": "For Sale",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBVBERNAN011.jpg",
    "coordinates": {
      "lat": 32.510151598,
      "lng": -116.977069662
    }
  },
  {
    "id": "222",
    "title": "Terreno en Venta en Puerto Nuevo",
    "location": "Vista Marina, Ensenada",
    "slug": "terreno-en-venta-en-puerto-nuevo",
    "type": "terrenos-residenciales",
    "division": "residencial",
    "price": 35000,
    "beds": 0,
    "baths": 0,
    "sqft": 0,
    "status": "For Sale",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBVCURIRU011.jpg",
    "coordinates": {
      "lat": 32.25164129,
      "lng": -116.93771806
    }
  },
  {
    "id": "223",
    "title": "Bodegas en Renta el Florido 1255 m2",
    "location": "El Florido, Tijuana",
    "slug": "bodegas-en-renta-el-florido-1255-m2",
    "type": "naves-y-bodegas",
    "division": "comercial",
    "price": 11,
    "beds": 4,
    "baths": 0,
    "sqft": 1255,
    "status": "For Rent",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBRWILLVEZ0101.jpg",
    "coordinates": {
      "lat": 32.467814563,
      "lng": -116.802972657
    }
  },
  {
    "id": "224",
    "title": "Departamentos en venta Torre Vistas Residencial - Buena vista",
    "location": "Buena Vista, Tijuana",
    "slug": "departamentos-en-venta-torre-vistas-residencial-buena-vista",
    "type": "departamentos",
    "division": "residencial",
    "price": 291096,
    "beds": 3,
    "baths": 2,
    "sqft": 104,
    "status": "For Sale",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBVGALF0101.webp",
    "coordinates": {
      "lat": 32.518405293,
      "lng": -116.987431404
    }
  },
  {
    "id": "225",
    "title": "OFICINAS EN RENTA COLONIA 20 DE NOVIEMBRE",
    "location": "20 de Noviembre, Tijuana",
    "slug": "oficinas-en-renta-colonia-20-de-noviembre",
    "type": "oficinas",
    "division": "comercial",
    "price": 15,
    "beds": 0,
    "baths": 0,
    "sqft": 0,
    "status": "For Rent",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBRDURM01_21.jpg",
    "coordinates": {
      "lat": 32.514563883,
      "lng": -116.976869466
    }
  },
  {
    "id": "226",
    "title": "Departamento en Renta - Levant Campestre Hipodromo Av. Tapachula",
    "location": "Chapultepec Este, Tijuana",
    "slug": "departamento-en-renta-levant-campestre-hipodromo-av-tapachula",
    "type": "departamentos",
    "division": "residencial",
    "price": 2300,
    "beds": 3,
    "baths": 2.5,
    "sqft": 120.45,
    "status": "For Rent",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBRALVSOR0101.jpg",
    "coordinates": {
      "lat": 32.507615778,
      "lng": -117.000290262
    }
  },
  {
    "id": "227",
    "title": "Departamento en Venta - Quinta Astoria Av. Los Olivos",
    "location": "Los olivos, Tijuana",
    "slug": "departamento-en-venta-quinta-astoria-av-los-olivos",
    "type": "departamentos",
    "division": "residencial",
    "price": 310000,
    "beds": 2,
    "baths": 2,
    "sqft": 97.23,
    "status": "For Sale",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBRBARF0101.webp",
    "coordinates": {
      "lat": 32.511785158,
      "lng": -117.015008613
    }
  },
  {
    "id": "228",
    "title": "Terreno Comercial en Venta - Rosarito Centro",
    "location": "Rosarito, Rosarito",
    "slug": "terreno-comercial-en-venta-rosarito-centro",
    "type": "terrenos-comerciales",
    "division": "comercial",
    "price": 395,
    "beds": 0,
    "baths": 0,
    "sqft": 0,
    "status": "For Sale",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBVBERDEZA011.webp",
    "coordinates": {
      "lat": 32.392274506,
      "lng": -117.04928226
    }
  },
  {
    "id": "229",
    "title": "Terreno en Venta - Blvd Cuauhtémoc",
    "location": "Blvd. Cuauhtemoc Sur, Tijuana",
    "slug": "terreno-en-venta-blvd-cuauhtemoc",
    "type": "terrenos-comerciales",
    "division": "comercial",
    "price": 210,
    "beds": 0,
    "baths": 0,
    "sqft": 0,
    "status": "For Sale",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBVVERCAS011.jpg",
    "coordinates": {
      "lat": 32.48819295,
      "lng": -117.01234229
    }
  },
  {
    "id": "230",
    "title": "Elvira Residences Modelo 5 - Departamentos en Venta",
    "location": "Cacho, Tijuana",
    "slug": "departamentos-en-venta-elvira-residences-modelo-5",
    "type": "departamentos",
    "division": "residencial",
    "price": 450612.74,
    "beds": 2,
    "baths": 2,
    "sqft": 121,
    "status": "For Sale",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBVSALVNA01_501.jpg",
    "coordinates": {
      "lat": 32.513674904,
      "lng": -117.023440686
    }
  },
  {
    "id": "231",
    "title": "Departamentos en Renta - HiTJ  Zona Centro",
    "location": "Zona Centro, Tijuana",
    "slug": "departamentos-en-renta-hi-tj-zona-centro",
    "type": "departamentos",
    "division": "residencial",
    "price": 1150,
    "beds": 1,
    "baths": 1,
    "sqft": 42,
    "status": "For Rent",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBRFLOEDU011.jpg",
    "coordinates": {
      "lat": 32.532182338,
      "lng": -117.044294446
    }
  },
  {
    "id": "232",
    "title": "Terreno en Renta - En Zona Centro Av. Sirak Baloyan",
    "location": "Zona Centro, Tijuana",
    "slug": "terreno-en-renta-en-zona-centro-av-sirak-baloyan",
    "type": "terrenos-comerciales",
    "division": "comercial",
    "price": 1500,
    "beds": 0,
    "baths": 0,
    "sqft": 0,
    "status": "For Rent",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBRMIG0O02_1.webp",
    "coordinates": {
      "lat": 32.531178321,
      "lng": -117.029762816
    }
  },
  {
    "id": "233",
    "title": "Elvira Residences Modelo 1- Departamentos en Venta",
    "location": "Cacho, Tijuana",
    "slug": "departamentos-en-venta-elvira-residences-modelo-1-1",
    "type": "departamentos",
    "division": "residencial",
    "price": 384628.36,
    "beds": 2,
    "baths": 2,
    "sqft": 106,
    "status": "For Sale",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBVSALVNA0101.jpg",
    "coordinates": {
      "lat": 32.513674904,
      "lng": -117.023440686
    }
  },
  {
    "id": "234",
    "title": "Departamento en Renta - En las Palmas",
    "location": "Las Palmas, Tijuana",
    "slug": "departamento-en-renta-en-las-palmas",
    "type": "departamentos",
    "division": "residencial",
    "price": 13500,
    "beds": 2,
    "baths": 1,
    "sqft": 75,
    "status": "For Rent",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBRAJANSE0101.jpg",
    "coordinates": {
      "lat": 32.503364277,
      "lng": -116.983555302
    }
  },
  {
    "id": "235",
    "title": "Oficinas en Renta - En Zona Centro",
    "location": "Zona Centro, Tijuana",
    "slug": "oficinas-en-renta-en-zona-centro",
    "type": "oficinas",
    "division": "comercial",
    "price": 25,
    "beds": 0,
    "baths": 0,
    "sqft": 98,
    "status": "For Rent",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBRFP0101.webp",
    "coordinates": {
      "lat": 32.525720223,
      "lng": -117.033304483
    }
  },
  {
    "id": "236",
    "title": "Departamento en Renta - Sie7e Zona Centro",
    "location": "Zona Centro, Tijuana",
    "slug": "departamento-en-renta-sie7e-zona-centro",
    "type": "departamentos",
    "division": "residencial",
    "price": 2000,
    "beds": 1,
    "baths": 1.5,
    "sqft": 0,
    "status": "For Rent",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBRPERBEH0301.jpg",
    "coordinates": {
      "lat": 32.529779726,
      "lng": -117.03578663
    }
  },
  {
    "id": "237",
    "title": "Casa en Venta - En Lomas Conjunto Residencial La Mesa",
    "location": "La Mesa, Tijuana",
    "slug": "casa-en-venta-en-lomas-conjunto-residencial",
    "type": "casas",
    "division": "residencial",
    "price": 6890000,
    "beds": 4,
    "baths": 3.5,
    "sqft": 171,
    "status": "For Sale",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBRPUENDB0101.jpg",
    "coordinates": {
      "lat": 32.482301577,
      "lng": -116.958588375
    }
  },
  {
    "id": "238",
    "title": "Oficinas en Zona Rio - En Renta",
    "location": "Zona Rio, Tijuana",
    "slug": "oficinas-en-zona-rio-en-renta",
    "type": "oficinas",
    "division": "comercial",
    "price": 250,
    "beds": 0,
    "baths": 0,
    "sqft": 0,
    "status": "For Rent",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBRHDZ0101.jpg",
    "coordinates": {
      "lat": 32.521371433,
      "lng": -117.008847252
    }
  },
  {
    "id": "239",
    "title": "Terreno de Desarrollo en venta-Escénica Tijuana - Ensenada",
    "location": "Playas de Rosarito, Rosarito",
    "slug": "terreno-de-desarrollo-en-venta-escenica-tijuana-ensenada",
    "type": "terrenos-comerciales",
    "division": "comercial",
    "price": 240,
    "beds": 0,
    "baths": 0,
    "sqft": 0,
    "status": "For Sale",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBVLENA011.jpg",
    "coordinates": {
      "lat": 32.221395112,
      "lng": -116.915094189
    }
  },
  {
    "id": "240",
    "title": "Local Comercial - En Renta en Blvd. Fundadores",
    "location": "Blvd. Fundadores- El Rubi, Tijuana",
    "slug": "local-comercial-en-renta-en-blvd-fundadores",
    "type": "locales",
    "division": "comercial",
    "price": 4950,
    "beds": 0,
    "baths": 4,
    "sqft": 0,
    "status": "For Rent",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBRBABRAMS0301.jpg",
    "coordinates": {
      "lat": 32.484275973,
      "lng": -117.035376604
    }
  },
  {
    "id": "241",
    "title": "Bodega/Nave industrial en renta - Villa Fontana Mexicali",
    "location": "Villa Fontana, Mexicali",
    "slug": "bodega-nave-industrial-en-renta-villa-fontana-mexicali",
    "type": "naves-y-bodegas",
    "division": "comercial",
    "price": 100000,
    "beds": 0,
    "baths": 0,
    "sqft": 8365,
    "status": "For Rent",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBRMAB0101.webp",
    "coordinates": {
      "lat": 32.628377473,
      "lng": -115.504935805
    }
  },
  {
    "id": "242",
    "title": "Departamentos en Venta - Comopolitan By The Sea",
    "location": "El Sauzal, Ensenada",
    "slug": "departamentos-en-venta-comopolitan-by-the-sea",
    "type": "departamentos",
    "division": "residencial",
    "price": 340000,
    "beds": 0,
    "baths": 0,
    "sqft": 0,
    "status": "For Sale",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBVCOSMOSEA0101.webp",
    "coordinates": {
      "lat": 31.875639821,
      "lng": -116.680830904
    }
  },
  {
    "id": "243",
    "title": "Departamentos en Venta - Vitta Tower",
    "location": "Buena Vista, Tijuana",
    "slug": "departamentos-en-venta-vitta-tower",
    "type": "departamentos",
    "division": "residencial",
    "price": 4350000,
    "beds": 1,
    "baths": 1,
    "sqft": 70,
    "status": "For Sale",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBVVITA0101.jpg",
    "coordinates": {
      "lat": 32.51759594,
      "lng": -116.985912118
    }
  },
  {
    "id": "244",
    "title": "Departamento en Renta - Playas de Tijuana #5",
    "location": "Playas de Tijuana, Tijuana",
    "slug": "departamento-en-renta-playas-de-tijuana-5",
    "type": "departamentos",
    "division": "residencial",
    "price": 750,
    "beds": 1,
    "baths": 1,
    "sqft": 75,
    "status": "For Rent",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBRJORTEP021.jpg",
    "coordinates": {
      "lat": 32.527772737,
      "lng": -117.121439614
    }
  },
  {
    "id": "245",
    "title": "Terreno en Venta - En Hacienda Agua Caliente",
    "location": "Hacienda Agua Caliente, Tijuana",
    "slug": "terreno-en-venta-en-hacienda-agua-caliente",
    "type": "terrenos-residenciales",
    "division": "residencial",
    "price": 611187.5,
    "beds": 0,
    "baths": 0,
    "sqft": 0,
    "status": "For Sale",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBVBELYENN011.jpg",
    "coordinates": {
      "lat": 32.491602702,
      "lng": -117.0030556
    }
  },
  {
    "id": "246",
    "title": "Terreno lotificado frente a la playa - Ensenada",
    "location": "Carlos Pacheco, Ensenada",
    "slug": "terreno-notificado-frente-a-la-playa-ensenada",
    "type": "terrenos-comerciales",
    "division": "comercial",
    "price": 245,
    "beds": 0,
    "baths": 0,
    "sqft": 0,
    "status": "For Sale",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PRVTHG111.jpg",
    "coordinates": {
      "lat": 31.827026043,
      "lng": -116.607702461
    }
  },
  {
    "id": "247",
    "title": "Casas en Venta Cloud 9 - Colonia Chula Vista",
    "location": "Chula Vista, Tijuana",
    "slug": "casas-en-venta-cloud-9-colonia-chula-vista",
    "type": "casas",
    "division": "residencial",
    "price": 7350000,
    "beds": 3,
    "baths": 2.5,
    "sqft": 253,
    "status": "For Sale",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBVGAOR011.jpg",
    "coordinates": {
      "lat": 32.509229658,
      "lng": -117.020985315
    }
  },
  {
    "id": "248",
    "title": "Bodega en Renta en Via Rápida Zona Rio 3ra etapa",
    "location": "Zona Rio 3ra Etapa, Tijuana",
    "slug": "bodega-en-renta-en-via-rapida-zona-rio-3ra-etapa",
    "type": "naves-y-bodegas",
    "division": "comercial",
    "price": 32000,
    "beds": 0,
    "baths": 0,
    "sqft": 2462,
    "status": "For Rent",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBRNACOV0101.jpg",
    "coordinates": {
      "lat": 32.48350061,
      "lng": -116.933440916
    }
  },
  {
    "id": "249",
    "title": "TALLER MECANICO EN RENTA - COLONIA 20 DE NOVIEMBRE",
    "location": "20 de Noviembre, Tijuana",
    "slug": "taller-mecanico-en-renta-colonia-20-de-noviembre",
    "type": "locales",
    "division": "comercial",
    "price": 12,
    "beds": 0,
    "baths": 0,
    "sqft": 0,
    "status": "For Rent",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBRDURM01_31.jpg",
    "coordinates": {
      "lat": 32.514563883,
      "lng": -116.976869466
    }
  },
  {
    "id": "250",
    "title": "Terreno en Venta - El Mirador",
    "location": "El Mirador, Tijuana",
    "slug": "terreno-en-venta-el-mirador",
    "type": "terrenos-comerciales",
    "division": "residencial",
    "price": 495000,
    "beds": 0,
    "baths": 0,
    "sqft": 0,
    "status": "For Sale",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBVAGPA0101.jpg",
    "coordinates": {
      "lat": 32.53076044,
      "lng": -117.092680626
    }
  },
  {
    "id": "251",
    "title": "Terreno en Venta - Colonia Juarez",
    "location": "Juarez, Tijuana",
    "slug": "terreno-en-venta-colonia-juarez",
    "type": "terrenos-comerciales",
    "division": "comercial",
    "price": 5703750,
    "beds": 0,
    "baths": 0,
    "sqft": 0,
    "status": "For Sale",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBVLEOFE011.jpg",
    "coordinates": {
      "lat": 32.504911663,
      "lng": -117.039966542
    }
  },
  {
    "id": "252",
    "title": "Terreno en venta - Real del Mar Sección Brisas",
    "location": "Real Del Mar, Tijuana",
    "slug": "terreno-en-venta-real-del-mar-seccion-brisas",
    "type": "terrenos-residenciales",
    "division": "residencial",
    "price": 185000,
    "beds": 0,
    "baths": 0,
    "sqft": 0,
    "status": "For Sale",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBVMAELER011.jpg",
    "coordinates": {
      "lat": 32.44890371,
      "lng": -117.087518213
    }
  },
  {
    "id": "253",
    "title": "Departamentos en Venta Xavia - Xoan",
    "location": "Blvd. Cuauhtemoc Sur, Tijuana",
    "slug": "departamentos-en-venta-xavia-xoan",
    "type": "departamentos",
    "division": "residencial",
    "price": 294896,
    "beds": 2,
    "baths": 2,
    "sqft": 92,
    "status": "For Sale",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBVSALTA01_301.jpg",
    "coordinates": {
      "lat": 32.496136455,
      "lng": -117.020106706
    }
  },
  {
    "id": "254",
    "title": "Terreno en venta  en Colonia Hacienda Agua Caliente ",
    "location": "Hacienda Agua Caliente, Tijuana",
    "slug": "terreno-en-venta-en-colonia-hacienda-agua-caliente",
    "type": "terrenos-residenciales",
    "division": "residencial",
    "price": 12490000,
    "beds": 0,
    "baths": 0,
    "sqft": 0,
    "status": "For Sale",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBVCOEDRO011.webp",
    "coordinates": {
      "lat": 32.488887724,
      "lng": -117.000120162
    }
  },
  {
    "id": "255",
    "title": "Edificio de departamentos en Venta - Otay calzada tecnológico",
    "location": "Calzada Tecnológico, Tijuana",
    "slug": "edificio-de-departamentos-en-venta-otay-calzada-tecnologico",
    "type": "departamentos",
    "division": "comercial",
    "price": 240000,
    "beds": 0,
    "baths": 0,
    "sqft": 348,
    "status": "For Sale",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBVALMOT011.jpg",
    "coordinates": {
      "lat": 32.528534162,
      "lng": -116.935618616
    }
  },
  {
    "id": "256",
    "title": "Departamentos en Venta Xavia - Xiara",
    "location": "Blvd. Cuauhtemoc Sur, Tijuana",
    "slug": "departamentos-en-venta-xavia-xiara",
    "type": "departamentos",
    "division": "residencial",
    "price": 345220,
    "beds": 3,
    "baths": 2,
    "sqft": 113,
    "status": "For Sale",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBVSALTA01_501.jpg",
    "coordinates": {
      "lat": 32.496136455,
      "lng": -117.020106706
    }
  },
  {
    "id": "257",
    "title": "Casa en Venta - En Real Mediterraneo",
    "location": "Real Mediterraneo, Tijuana",
    "slug": "casa-en-venta-en-real-mediterraneo",
    "type": "casas",
    "division": "residencial",
    "price": 780000,
    "beds": 4,
    "baths": 5,
    "sqft": 454.17,
    "status": "For Sale",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBVANTMA0101.jpg",
    "coordinates": {
      "lat": 32.452797951,
      "lng": -117.111092621
    }
  },
  {
    "id": "258",
    "title": "Terreno Comercial en Renta - Libramiento Calle España",
    "location": "Libramiento, Tijuana",
    "slug": "terreno-comercial-en-renta-libramiento-calle-espana",
    "type": "terrenos-comerciales",
    "division": "comercial",
    "price": 4,
    "beds": 0,
    "baths": 0,
    "sqft": 0,
    "status": "For Rent",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBRMERCSA011.jpg",
    "coordinates": {
      "lat": 32.472742046,
      "lng": -116.921290205
    }
  },
  {
    "id": "259",
    "title": "Departamento en Renta - Zona Centro Av. Revolución",
    "location": "Zona Centro, Tijuana",
    "slug": "departamento-en-renta-zona-centro-av-revolucion",
    "type": "departamentos",
    "division": "residencial",
    "price": 1399,
    "beds": 2,
    "baths": 2,
    "sqft": 86,
    "status": "For Rent",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBRLCGE0101.jpg",
    "coordinates": {
      "lat": 32.526318592,
      "lng": -117.036108598
    }
  },
  {
    "id": "260",
    "title": "Edificio en venta en Zona Centro(Nuevo Precio)",
    "location": "Zona Centro, Tijuana",
    "slug": "edificio-en-venta-en-zona-centro",
    "type": "edificios",
    "division": "residencial",
    "price": 45000000,
    "beds": 0,
    "baths": 0,
    "sqft": 2589,
    "status": "For Sale",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/TerrenoJesuitas-4.jpg",
    "coordinates": {
      "lat": 32.53,
      "lng": -117.031203613
    }
  },
  {
    "id": "261",
    "title": "Departamento en Renta en MAR Y SOL - Rosarito",
    "location": "Rosarito, Rosarito",
    "slug": "departamento-en-renta-en-mar-y-sol-rosarito",
    "type": "departamentos",
    "division": "residencial",
    "price": 2500,
    "beds": 3,
    "baths": 2.5,
    "sqft": 169,
    "status": "For Rent",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBRLOVIS0101.jpg",
    "coordinates": {
      "lat": 32.392854126,
      "lng": -117.081191838
    }
  },
  {
    "id": "262",
    "title": "Oficinas en Venta - Torre Eugenia Blvd. Agua Caliente",
    "location": "Agua Caliente, Tijuana",
    "slug": "oficinas-en-venta-torre-eugenia-blvd-agua-caliente",
    "type": "edificios",
    "division": "comercial",
    "price": 4125,
    "beds": 0,
    "baths": 0,
    "sqft": 62,
    "status": "For Sale",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBVEDUGL0101.jpg",
    "coordinates": {
      "lat": 32.518815561,
      "lng": -117.018673173
    }
  },
  {
    "id": "263",
    "title": "Casas en Venta en Playas de Tijuana",
    "location": "Playas de Tijuana, Tijuana",
    "slug": "casas-en-venta-en-playas-de-tijuana",
    "type": "casas",
    "division": "residencial",
    "price": 269000,
    "beds": 4,
    "baths": 3.5,
    "sqft": 225,
    "status": "For Sale",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBVRIOFE0101.webp",
    "coordinates": {
      "lat": 32.517933675,
      "lng": -117.109876697
    }
  },
  {
    "id": "264",
    "title": "EDIFICIO EN VENTA- RIO VISTA",
    "location": "La Presa, Tijuana",
    "slug": "edificio-en-venta-rio-vista",
    "type": "edificios",
    "division": "comercial",
    "price": 4500000,
    "beds": 0,
    "baths": 0,
    "sqft": 4370,
    "status": "For Sale",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBVGEME011.jpg",
    "coordinates": {
      "lat": 32.457759,
      "lng": -116.916283
    }
  },
  {
    "id": "265",
    "title": "Departamento en Venta- En Torre Mar y Sol Rosarito",
    "location": "Playas de Rosarito, Rosarito",
    "slug": "departamento-en-venta-en-torre-mar-y-sol-rosarito",
    "type": "departamentos",
    "division": "residencial",
    "price": 440000,
    "beds": 3,
    "baths": 2,
    "sqft": 180,
    "status": "For Sale",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBRUNAGU0101.webp",
    "coordinates": {
      "lat": 32.394121692,
      "lng": -117.087167495
    }
  },
  {
    "id": "266",
    "title": "Bodegas en Renta - La Gloria",
    "location": "La Gloria , Tijuana",
    "slug": "bodegas-en-renta-la-gloria",
    "type": "naves-y-bodegas",
    "division": "comercial",
    "price": 10.57,
    "beds": 0,
    "baths": 0,
    "sqft": 1300,
    "status": "For Rent",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBRMARALE0101.webp",
    "coordinates": {
      "lat": 32.43985008,
      "lng": -117.007461326
    }
  },
  {
    "id": "267",
    "title": "Penthouse en Renta - Zona Centro ",
    "location": "Zona Centro, Tijuana",
    "slug": "penthouse-en-renta-zona-centro",
    "type": "departamentos",
    "division": "residencial",
    "price": 25,
    "beds": 3,
    "baths": 2,
    "sqft": 200,
    "status": "For Rent",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBRFELBU011.jpg",
    "coordinates": {
      "lat": 32.529538425,
      "lng": -117.035559128
    }
  },
  {
    "id": "268",
    "title": "Bodegas en Renta - En Zona Centro",
    "location": "Zona Centro, Tijuana",
    "slug": "bodegas-en-renta-en-zona-centro",
    "type": "naves-y-bodegas",
    "division": "comercial",
    "price": 14,
    "beds": 0,
    "baths": 0,
    "sqft": 1500,
    "status": "For Rent",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBRCARAL011.jpg",
    "coordinates": {
      "lat": 32.52,
      "lng": -117.033332115
    }
  },
  {
    "id": "269",
    "title": "Terreno en venta - Zona Centro sobre Av. Negrete",
    "location": "Zona Centro, Tijuana",
    "slug": "terreno-en-venta-zona-centro-sobre-av-negrete",
    "type": "terrenos-comerciales",
    "division": "comercial",
    "price": 520000,
    "beds": 0,
    "baths": 0,
    "sqft": 0,
    "status": "For Sale",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBVQIMLI011.jpg",
    "coordinates": {
      "lat": 32.525367524,
      "lng": -117.033094171
    }
  },
  {
    "id": "270",
    "title": "Terreno Industrial en Venta en El Sauzal de Rodriguez",
    "location": "El Sauzal, Ensenada",
    "slug": "terreno-con-bodega-en-venta-en-el-sauzal",
    "type": "naves-y-bodegas",
    "division": "comercial",
    "price": 325,
    "beds": 0,
    "baths": 0,
    "sqft": 0,
    "status": "For Sale",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBVAVIQU011.webp",
    "coordinates": {
      "lat": 31.902739256,
      "lng": -116.702824701
    }
  },
  {
    "id": "271",
    "title": "Consultorios en Renta - Colonia Independencia",
    "location": "Colonia Independencia, Tijuana",
    "slug": "consultorios-en-renta-colonia-independencia",
    "type": "medica",
    "division": "comercial",
    "price": 10000,
    "beds": 0,
    "baths": 0,
    "sqft": 30,
    "status": "For Rent",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBRVILLME0101.webp",
    "coordinates": {
      "lat": 32.522996689,
      "lng": -117.047270608
    }
  },
  {
    "id": "272",
    "title": "Viñedo Avilas en Venta - Ensenada",
    "location": "Viñedos, Ensenada",
    "slug": "vinedo-avilas-en-venta-ensenada",
    "type": "terrenos-comerciales",
    "division": "comercial",
    "price": 800000,
    "beds": 0,
    "baths": 0,
    "sqft": 1000,
    "status": "For Sale",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBVQUIAV01_1.webp",
    "coordinates": {
      "lat": 31.63037416,
      "lng": -116.461674664
    }
  },
  {
    "id": "273",
    "title": "Oficina en Renta - Business Center en Zona Rio Planta Alta",
    "location": "Zona Rio, Tijuana",
    "slug": "oficina-en-renta-business-center-en-zona-rio-planta-alta",
    "type": "oficinas",
    "division": "comercial",
    "price": 4800,
    "beds": 0,
    "baths": 0,
    "sqft": 240,
    "status": "For Rent",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBRILIGCOT0101.jpg",
    "coordinates": {
      "lat": 32.52259925,
      "lng": -117.015397637
    }
  },
  {
    "id": "274",
    "title": "Departamentos en Venta - Uptown",
    "location": "Villa Colonial, Tijuana",
    "slug": "departamentos-en-venta-uptown",
    "type": "departamentos",
    "division": "residencial",
    "price": 4450000,
    "beds": 3,
    "baths": 2,
    "sqft": 93,
    "status": "For Sale",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBVALJI01-11.webp",
    "coordinates": {
      "lat": 32.489105176,
      "lng": -116.986190956
    }
  },
  {
    "id": "275",
    "title": "Casas en Venta - Entrenubes",
    "location": "Blvd. Cuauhtemoc Sur, Tijuana",
    "slug": "casas-en-venta-entrenubes",
    "type": "casas",
    "division": "residencial",
    "price": 6115000,
    "beds": 3,
    "baths": 2.5,
    "sqft": 147,
    "status": "For Sale",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBVENINO021.webp",
    "coordinates": {
      "lat": 32.486043784,
      "lng": -117.010528903
    }
  },
  {
    "id": "276",
    "title": "Nave industrial en Renta - Corredor 2000 Deer Park",
    "location": "Blvd. 2000, Tijuana",
    "slug": "nave-industrial-en-renta-corredor-2000-deer-park",
    "type": "naves-y-bodegas",
    "division": "industrial",
    "price": 9.25,
    "beds": 0,
    "baths": 0,
    "sqft": 0,
    "status": "For Rent",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBREDFLO011.webp",
    "coordinates": {
      "lat": 32.409928767,
      "lng": -116.916490398
    }
  },
  {
    "id": "277",
    "title": "Terreno en Venta - Frente al mar en Playas de Rosarito ",
    "location": "Playas de Rosarito, Rosarito",
    "slug": "terreno-en-venta-frente-al-mar-en-playas-de-rosarito",
    "type": "terrenos-comerciales",
    "division": "comercial",
    "price": 2700000,
    "beds": 0,
    "baths": 0,
    "sqft": 0,
    "status": "For Sale",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBVCLETCALM0101.jpg",
    "coordinates": {
      "lat": 32.355720895,
      "lng": -117.058060587
    }
  },
  {
    "id": "278",
    "title": "Departamentos en venta - Cosmopolitan City Center",
    "location": "Zona Rio, Tijuana",
    "slug": "departamentos-en-venta-cosmopolitan-city-center",
    "type": "departamentos",
    "division": "residencial",
    "price": 4999500,
    "beds": 1,
    "baths": 1,
    "sqft": 56.46,
    "status": "For Sale",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBVGC011.webp",
    "coordinates": {
      "lat": 32.52997,
      "lng": -117.028137
    }
  },
  {
    "id": "279",
    "title": "TOWNHOUSES EN VENTA - UPTOWN",
    "location": "Villa Colonial, Tijuana",
    "slug": "townhouses-en-venta-uptown",
    "type": "casas",
    "division": "residencial",
    "price": 7500000,
    "beds": 3,
    "baths": 3.5,
    "sqft": 218.4,
    "status": "For Sale",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBVALJI0101.jpg",
    "coordinates": {
      "lat": 32.489105176,
      "lng": -116.986190956
    }
  },
  {
    "id": "280",
    "title": "Local en Renta - En Plaza Alameda Otay",
    "location": "Otay, Tijuana",
    "slug": "local-en-renta-en-plaza-alameda-otay",
    "type": "locales",
    "division": "comercial",
    "price": 92000,
    "beds": 0,
    "baths": 2,
    "sqft": 131.83,
    "status": "For Rent",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBRFAOPER0201.jpg",
    "coordinates": {
      "lat": 32.530707954,
      "lng": -116.950725817
    }
  },
  {
    "id": "281",
    "title": "Local en Renta - Dentro de Plaza Alameda Otay",
    "location": "Otay, Tijuana",
    "slug": "local-en-renta-dentro-de-plaza-alameda-otay",
    "type": "locales",
    "division": "comercial",
    "price": 142400,
    "beds": 0,
    "baths": 0,
    "sqft": 356,
    "status": "For Rent",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBRFAOPER011.jpg",
    "coordinates": {
      "lat": 32.530707954,
      "lng": -116.950725817
    }
  },
  {
    "id": "282",
    "title": "Local comercial de dos niveles en Renta - En Zona Rio",
    "location": "Zona Rio, Tijuana",
    "slug": "local-comercial-de-dos-niveles-en-renta-en-zona-rio",
    "type": "locales",
    "division": "comercial",
    "price": 5500,
    "beds": 0,
    "baths": 0,
    "sqft": 323,
    "status": "For Rent",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBRMARDALLA0101.jpg",
    "coordinates": {
      "lat": 32.520176,
      "lng": -117.015162004
    }
  },
  {
    "id": "283",
    "title": "Casa en Venta en Urbi Quinta Del Cedro",
    "location": "Urbi Quinta Del Cedro, Tijuana",
    "slug": "casa-en-venta-en-urbi-quinta-del-cedro",
    "type": "casas",
    "division": "residencial",
    "price": 2750000,
    "beds": 3,
    "baths": 1.5,
    "sqft": 80.37,
    "status": "For Sale",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBVARROVI0101.jpg",
    "coordinates": {
      "lat": 32.433773652,
      "lng": -117.068255245
    }
  },
  {
    "id": "284",
    "title": "LOCALES EN RENTA - PLAZA PALMEYRAS PLAYAS DE TIJUANA",
    "location": "Playas de Tijuana, Tijuana",
    "slug": "locales-en-renta-plaza-palmeyras-playas-de-tijuana",
    "type": "locales",
    "division": "comercial",
    "price": 549.97,
    "beds": 3,
    "baths": 2,
    "sqft": 420,
    "status": "For Rent",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBRITUMO011.jpg",
    "coordinates": {
      "lat": 32.533377571,
      "lng": -117.117121394
    }
  },
  {
    "id": "285",
    "title": "Terreno en Venta - Cuauhtémoc Norte",
    "location": "Cañon de la Pedrera, Tijuana",
    "slug": "terreno-en-venta-cuauhtemoc-norte",
    "type": "terrenos-comerciales",
    "division": "comercial",
    "price": 420,
    "beds": 0,
    "baths": 0,
    "sqft": 0,
    "status": "For Sale",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBRCRE011.webp",
    "coordinates": {
      "lat": 32.504136771,
      "lng": -117.020920821
    }
  },
  {
    "id": "286",
    "title": "Terreno en venta - 100 Hectareas Pacifico",
    "location": "Industrial Pacifico, Tijuana",
    "slug": "terreno-en-venta-100-hectareas-pacifico",
    "type": "terrenos-comerciales",
    "division": "comercial",
    "price": 55,
    "beds": 0,
    "baths": 0,
    "sqft": 0,
    "status": "For Sale",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBVARLUZ011.jpg",
    "coordinates": {
      "lat": 32.445082736,
      "lng": -116.965241805
    }
  },
  {
    "id": "287",
    "title": "Oficina en Renta - En Plaza Financiera Zona Rio",
    "location": "Zona Rio, Tijuana",
    "slug": "oficina-en-renta-en-plaza-financiera-zona-rio",
    "type": "oficinas",
    "division": "comercial",
    "price": 18000,
    "beds": 0,
    "baths": 0,
    "sqft": 67,
    "status": "For Rent",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBRESPIEC0101.jpg",
    "coordinates": {
      "lat": 32.525315385,
      "lng": -117.021608601
    }
  },
  {
    "id": "288",
    "title": "Departamento en Venta - Kyo Altalia Colonia Juarez (Nuevo Precio)",
    "location": "Juarez, Tijuana",
    "slug": "departamento-en-venta-kyo-altalia-colonia-juarez",
    "type": "departamentos",
    "division": "residencial",
    "price": 3900000,
    "beds": 2,
    "baths": 2,
    "sqft": 86.96,
    "status": "For Sale",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBVBUSGO0101.jpg",
    "coordinates": {
      "lat": 32.50655018,
      "lng": -117.041059882
    }
  },
  {
    "id": "289",
    "title": "Casa en Venta en Costa Coronado Playas de Tijuana",
    "location": "Playas de Tijuana, Tijuana",
    "slug": "casa-en-venta-en-costa-coronado-playas-de-tijuana",
    "type": "casas",
    "division": "residencial",
    "price": 9000000,
    "beds": 3,
    "baths": 3,
    "sqft": 201,
    "status": "For Sale",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBVCARPES0101.jpg",
    "coordinates": {
      "lat": 32.512772733,
      "lng": -117.107474491
    }
  },
  {
    "id": "290",
    "title": "Terreno para Desarrollo en Venta - Zona centro",
    "location": "Zona Centro, Tijuana",
    "slug": "terreno-para-desarrollo-en-venta-zona-centro",
    "type": "terrenos-comerciales",
    "division": "comercial",
    "price": 1150,
    "beds": 0,
    "baths": 0,
    "sqft": 0,
    "status": "For Sale",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBVRUIZSA011.webp",
    "coordinates": {
      "lat": 32.533825657,
      "lng": -117.039972756
    }
  },
  {
    "id": "291",
    "title": "Local Comercial en Renta - El Mirador",
    "location": "El Mirador, Tijuana",
    "slug": "local-comercial-en-renta-el-mirador",
    "type": "locales",
    "division": "comercial",
    "price": 18,
    "beds": 0,
    "baths": 0,
    "sqft": 180,
    "status": "For Rent",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBRJEAG011.jpg",
    "coordinates": {
      "lat": 32.533062462,
      "lng": -117.090065188
    }
  },
  {
    "id": "292",
    "title": "TERRENO EN RENTA EN LA COLONIA 20 DE NOVIEMBRE",
    "location": "20 de Noviembre, Tijuana",
    "slug": "terreno-en-renta-colonia-20-de-noviembre",
    "type": "terrenos-comerciales",
    "division": "comercial",
    "price": 3.5,
    "beds": 0,
    "baths": 0,
    "sqft": 0,
    "status": "For Rent",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBRDURM0101.jpg",
    "coordinates": {
      "lat": 32.514563883,
      "lng": -116.976869466
    }
  },
  {
    "id": "293",
    "title": "Terreno Comercial En Renta- Mariano Matamoros",
    "location": "Mariano Matamoros, Tijuana",
    "slug": "terreno-comercial-en-renta-mariano-matamoros",
    "type": "terrenos-comerciales",
    "division": "comercial",
    "price": 5200,
    "beds": 0,
    "baths": 0,
    "sqft": 0,
    "status": "For Rent",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBRIA011.jpg",
    "coordinates": {
      "lat": 32.509633,
      "lng": -116.846131
    }
  },
  {
    "id": "294",
    "title": "Espectacular Terreno en Venta en Playas de Tijuana",
    "location": "Playas de Tijuana, Tijuana",
    "slug": "espectacular-terreno-en-venta-en-playas-de-tijuana",
    "type": "terrenos-comerciales",
    "division": "residencial",
    "price": 1280000,
    "beds": 0,
    "baths": 0,
    "sqft": 0,
    "status": "For Sale",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/Adriana Gonzalez Terreno Venta Playas Tj-2.jpg",
    "coordinates": {
      "lat": 32.531223856,
      "lng": -117.119151606
    }
  },
  {
    "id": "295",
    "title": "Consultorios en Venta en Otay",
    "location": "Otay, Tijuana",
    "slug": "consultorios-en-venta-en-otay",
    "type": "edificios",
    "division": "comercial",
    "price": 3004000,
    "beds": 0,
    "baths": 0,
    "sqft": 49,
    "status": "For Sale",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBTMO011.webp",
    "coordinates": {
      "lat": 32.530916,
      "lng": -116.950745
    }
  },
  {
    "id": "296",
    "title": "Terreno en Venta en Cumbres de Juarez",
    "location": "Cumbres de Juarez, Tijuana",
    "slug": "terreno-en-venta-en-cumbres-de-juarez",
    "type": "terrenos-residenciales",
    "division": "residencial",
    "price": 2199900,
    "beds": 0,
    "baths": 0,
    "sqft": 0,
    "status": "For Sale",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBVESTALD0101.webp",
    "coordinates": {
      "lat": 32.506436935,
      "lng": -117.031463527
    }
  },
  {
    "id": "297",
    "title": "Bodega en Venta - En la Gloria",
    "location": "La Gloria , Tijuana",
    "slug": "bodega-en-venta-en-la-gloria",
    "type": "naves-y-bodegas",
    "division": "comercial",
    "price": 1900000,
    "beds": 0,
    "baths": 0,
    "sqft": 1000,
    "status": "For Sale",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBVESCCAI0101.jpg",
    "coordinates": {
      "lat": 32.43924922,
      "lng": -117.007013557
    }
  },
  {
    "id": "298",
    "title": "Terreno en Venta - Residencial Punta Azul",
    "location": "Punta Azul, Rosarito",
    "slug": "terreno-en-venta-residencial-punta-azul",
    "type": "terrenos-residenciales",
    "division": "residencial",
    "price": 70000,
    "beds": 0,
    "baths": 0,
    "sqft": 0,
    "status": "For Sale",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBVANTVALE011.png",
    "coordinates": {
      "lat": 32.323902751,
      "lng": -117.045704561
    }
  },
  {
    "id": "299",
    "title": "Terreno Comercial en Venta - Paseo del Mar Playas de Tijuana",
    "location": "Playas de Tijuana, Tijuana",
    "slug": "terreno-comercial-en-venta-paseo-del-mar-playas-de-tijuana",
    "type": "terrenos-comerciales",
    "division": "comercial",
    "price": 725,
    "beds": 0,
    "baths": 0,
    "sqft": 0,
    "status": "For Sale",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBVLAUCH011.jpg",
    "coordinates": {
      "lat": 32.517225892,
      "lng": -117.120133609
    }
  },
  {
    "id": "300",
    "title": "Departamentos - Venta Xavia",
    "location": "Blvd. Cuauhtemoc Sur, Tijuana",
    "slug": "departamentos-venta-xavia",
    "type": "departamentos",
    "division": "residencial",
    "price": 289780.99,
    "beds": 2,
    "baths": 2,
    "sqft": 91,
    "status": "For Sale",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBVSALTA01_701.jpg",
    "coordinates": {
      "lat": 32.496136455,
      "lng": -117.020106706
    }
  },
  {
    "id": "301",
    "title": "Terreno Residencial En Venta -  Privada Misión Viejo Rosarito",
    "location": "Rosarito, Rosarito",
    "slug": "terreno-residencial-en-venta-privada-mision-viejo-rosarito",
    "type": "terrenos-residenciales",
    "division": "residencial",
    "price": 110000,
    "beds": 0,
    "baths": 0,
    "sqft": 0,
    "status": "For Sale",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBVABELBE0101.webp",
    "coordinates": {
      "lat": 32.198621583,
      "lng": -116.911713229
    }
  },
  {
    "id": "302",
    "title": "Departamentos En Venta - Hipódromo Living",
    "location": "Libramiento, Tijuana",
    "slug": "departamentos-en-venta-hipodromo-living",
    "type": "departamentos",
    "division": "residencial",
    "price": 5660000,
    "beds": 2,
    "baths": 2,
    "sqft": 107,
    "status": "For Sale",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBVDANVI01_1.webp",
    "coordinates": {
      "lat": 32.5,
      "lng": -116.973986998
    }
  },
  {
    "id": "303",
    "title": "Departamento en Venta - Zona Centro Tijuana HITJ",
    "location": "Zona Centro, Tijuana",
    "slug": "departamento-en-venta-zona-centro-tijuana-hitj",
    "type": "departamentos",
    "division": "residencial",
    "price": 212000,
    "beds": 2,
    "baths": 2,
    "sqft": 59,
    "status": "For Sale",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/hitjvista.jpeg",
    "coordinates": {
      "lat": 32.532223042,
      "lng": -117.044321268
    }
  },
  {
    "id": "304",
    "title": "Local en Renta - En Colonia Playas de Tijuana",
    "location": "Playas de Tijuana, Tijuana",
    "slug": "local-en-renta-en-colonia-playas-de-tijuana",
    "type": "locales",
    "division": "comercial",
    "price": 2400,
    "beds": 0,
    "baths": 2,
    "sqft": 156,
    "status": "For Rent",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBRMARDIA0101.jpg",
    "coordinates": {
      "lat": 32.529241782,
      "lng": -117.119796248
    }
  },
  {
    "id": "305",
    "title": "Terreno en Venta en Baja Malibu Lomas",
    "location": "Baja Malibu , Tijuana",
    "slug": "terreno-en-venta-en-baja-malibu-lomas",
    "type": "terrenos-residenciales",
    "division": "residencial",
    "price": 54000,
    "beds": 0,
    "baths": 0,
    "sqft": 0,
    "status": "For Sale",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBVVILLA011.jpg",
    "coordinates": {
      "lat": 32.4,
      "lng": -117.085836973
    }
  },
  {
    "id": "306",
    "title": "Terreno en Venta - Via Rápida 3ra etapa",
    "location": "Zona Rio 3ra Etapa, Tijuana",
    "slug": "terreno-en-venta-via-rapida-3ra-etapa",
    "type": "terrenos-comerciales",
    "division": "comercial",
    "price": 11000,
    "beds": 0,
    "baths": 0,
    "sqft": 0,
    "status": "For Sale",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBVBETMOU011.jpg",
    "coordinates": {
      "lat": 32.501863454,
      "lng": -116.955967297
    }
  },
  {
    "id": "307",
    "title": "Departamentos totalmente amueblados en renta - Rosarito",
    "location": "Rosarito, Rosarito",
    "slug": "departamentos-totalmente-amueblados-en-renta-rosarito",
    "type": "departamentos",
    "division": "residencial",
    "price": 850,
    "beds": 2,
    "baths": 1,
    "sqft": 49,
    "status": "For Rent",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBRPEBEAAR0101.webp",
    "coordinates": {
      "lat": 32.370009474,
      "lng": -117.039310547
    }
  },
  {
    "id": "308",
    "title": "Terreno Comercial en Renta - Blvd. Insurgentes",
    "location": "Blvd. Insurgentes, Tijuana",
    "slug": "terreno-comercial-en-renta-blvd-insurgentes",
    "type": "terrenos-comerciales",
    "division": "comercial",
    "price": 8,
    "beds": 0,
    "baths": 0,
    "sqft": 0,
    "status": "For Rent",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBRGUSGRA01_new_1.jpg",
    "coordinates": {
      "lat": 32.488698686,
      "lng": -116.926290292
    }
  },
  {
    "id": "309",
    "title": "Oficina en Renta - Business Center en Zona Rio Planta Baja",
    "location": "Zona Rio, Tijuana",
    "slug": "oficina-en-renta-business-center-en-zona-rio-planta-baja",
    "type": "oficinas",
    "division": "comercial",
    "price": 3000,
    "beds": 0,
    "baths": 0,
    "sqft": 0,
    "status": "For Rent",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBRIALIBACA0101.jpg",
    "coordinates": {
      "lat": 32.52259925,
      "lng": -117.015397637
    }
  },
  {
    "id": "310",
    "title": "Terreno Comercial en Venta - Blvd Fundadores ",
    "location": "Blvd. Fundadores- El Rubi, Tijuana",
    "slug": "terreno-comercial-en-venta-blvd-fundadores",
    "type": "terrenos-comerciales",
    "division": "comercial",
    "price": 2900000,
    "beds": 0,
    "baths": 0,
    "sqft": 0,
    "status": "For Sale",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBVNERVADI011.jpg",
    "coordinates": {
      "lat": 32.51470149,
      "lng": -117.031661098
    }
  },
  {
    "id": "311",
    "title": "Terreno en Venta - Rosarito",
    "location": "Rosarito, Rosarito",
    "slug": "terreno-en-venta-rosarito",
    "type": "terrenos-residenciales",
    "division": "residencial",
    "price": 215000,
    "beds": 0,
    "baths": 0,
    "sqft": 0,
    "status": "For Sale",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBVALVOR011.png",
    "coordinates": {
      "lat": 32.251112039,
      "lng": -116.953997652
    }
  },
  {
    "id": "312",
    "title": "Bodega en Renta en Zona Rio Av Padre Kino",
    "location": "Zona Rio, Tijuana",
    "slug": "bodega-en-renta-en-zona-rio-av-padre-kino",
    "type": "naves-y-bodegas",
    "division": "comercial",
    "price": 5200,
    "beds": 0,
    "baths": 0,
    "sqft": 0,
    "status": "For Rent",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBREHR0101.jpg",
    "coordinates": {
      "lat": 32.537876408,
      "lng": -117.021277615
    }
  },
  {
    "id": "313",
    "title": "Edificio en Renta - Zona Urbana Rio",
    "location": "Zona Rio, Tijuana",
    "slug": "edificio-en-renta-zona-urbana-rio",
    "type": "edificios",
    "division": "comercial",
    "price": 5500,
    "beds": 0,
    "baths": 0,
    "sqft": 200,
    "status": "For Rent",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBRVAZLU0101.jpg",
    "coordinates": {
      "lat": 32.519328177,
      "lng": -117.01180596
    }
  },
  {
    "id": "314",
    "title": "Casa en Venta en Real Del Mar",
    "location": "Real Del Mar, Tijuana",
    "slug": "casa-en-venta-en-real-del-mar",
    "type": "casas",
    "division": "residencial",
    "price": 650000,
    "beds": 4,
    "baths": 5.5,
    "sqft": 344,
    "status": "For Sale",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBVRUISAN0201.jpg",
    "coordinates": {
      "lat": 32.449465408,
      "lng": -117.093588952
    }
  },
  {
    "id": "315",
    "title": "Terreno en Venta -  Bungalos de Agua Caliente",
    "location": "20 de Noviembre, Tijuana",
    "slug": "terreno-en-venta-bungalos-de-agua-caliente",
    "type": "terrenos-comerciales",
    "division": "residencial",
    "price": 500,
    "beds": 0,
    "baths": 0,
    "sqft": 0,
    "status": "For Sale",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBVVERDAC011.jpg",
    "coordinates": {
      "lat": 32.515089453,
      "lng": -117.00074988
    }
  },
  {
    "id": "316",
    "title": "Casa en Venta - Playas de Rosarito Hacienda Floresta del Mar",
    "location": "Playas de Rosarito, Rosarito",
    "slug": "casa-en-venta-playas-de-rosarito-hacienda-floresta-del-mar",
    "type": "casas",
    "division": "residencial",
    "price": 6000000,
    "beds": 3,
    "baths": 3,
    "sqft": 200,
    "status": "For Sale",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBVMARGL0101.jpg",
    "coordinates": {
      "lat": 32.364592924,
      "lng": -117.061209258
    }
  },
  {
    "id": "317",
    "title": "Nave industrial en Renta - Corredor 2000 El Realito",
    "location": "Blvd. 2000, Tijuana",
    "slug": "nave-industrial-en-renta-corredor-2000-el-realito",
    "type": "naves-y-bodegas",
    "division": "industrial",
    "price": 8,
    "beds": 0,
    "baths": 0,
    "sqft": 5216,
    "status": "For Rent",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBRGONULL011.webp",
    "coordinates": {
      "lat": 32.435629589,
      "lng": -116.863911172
    }
  },
  {
    "id": "318",
    "title": "OFICINAS EN RENTA – TORRE TORELA",
    "location": "Aviación, Tijuana",
    "slug": "oficinas-en-renta-torre-torela",
    "type": "oficinas",
    "division": "comercial",
    "price": 5051.99,
    "beds": 0,
    "baths": 0,
    "sqft": 13999,
    "status": "For Rent",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBRTURL011.webp",
    "coordinates": {
      "lat": 32.518810125,
      "lng": -117.018804098
    }
  },
  {
    "id": "319",
    "title": "Terreno en Venta - Blvd. Agua Caliente",
    "location": "Agua Caliente, Tijuana",
    "slug": "terreno-en-venta-blvd-agua-caliente",
    "type": "terrenos-comerciales",
    "division": "comercial",
    "price": 3032,
    "beds": 0,
    "baths": 0,
    "sqft": 0,
    "status": "For Sale",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBVJULRO0101.jpg",
    "coordinates": {
      "lat": 32.522874924,
      "lng": -117.027269274
    }
  },
  {
    "id": "320",
    "title": "Terreno en Venta - Otay Tecnologico",
    "location": "Otay, Tijuana",
    "slug": "terreno-en-venta-otay-tecnologico",
    "type": "terrenos-comerciales",
    "division": "residencial",
    "price": 425000,
    "beds": 0,
    "baths": 0,
    "sqft": 412,
    "status": "For Sale",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBVRiCIS011.jpg",
    "coordinates": {
      "lat": 32.530050001,
      "lng": -116.981713114
    }
  },
  {
    "id": "321",
    "title": "Departamentos en Venta - Entrenubes",
    "location": "Blvd. Cuauhtemoc Sur, Tijuana",
    "slug": "departamentos-en-venta-entrenubes",
    "type": "departamentos",
    "division": "residencial",
    "price": 4120000,
    "beds": 3,
    "baths": 2,
    "sqft": 95,
    "status": "For Sale",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBVENINO011.webp",
    "coordinates": {
      "lat": 32.486043784,
      "lng": -117.010528903
    }
  },
  {
    "id": "322",
    "title": "Oficinas en Venta - Central Toreo",
    "location": "Agua Caliente, Tijuana",
    "slug": "oficinas-en-venta-central-toreo",
    "type": "edificios",
    "division": "comercial",
    "price": 248100,
    "beds": 0,
    "baths": 0,
    "sqft": 61,
    "status": "For Sale",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBVCTUL011.png",
    "coordinates": {
      "lat": 32.51856978,
      "lng": -117.018245604
    }
  },
  {
    "id": "323",
    "title": "Terreno en Venta - Rancho Tecate",
    "location": "Tecate, Tecate",
    "slug": "terreno-en-venta-rancho-tecate",
    "type": "terrenos-residenciales",
    "division": "residencial",
    "price": 105600,
    "beds": 0,
    "baths": 0,
    "sqft": 0,
    "status": "For Sale",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBVROMAR011.jpg",
    "coordinates": {
      "lat": 32.549315231,
      "lng": -116.625260253
    }
  },
  {
    "id": "324",
    "title": "Terreno en venta en fraccionamiento Marbella Tecate",
    "location": "Tecate, Tecate",
    "slug": "terreno-en-venta-en-fraccionamiento-marbella-tecate",
    "type": "terrenos-residenciales",
    "division": "residencial",
    "price": 42000,
    "beds": 0,
    "baths": 0,
    "sqft": 0,
    "status": "For Sale",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBVSFAM0101.webp",
    "coordinates": {
      "lat": 32.542738727,
      "lng": -116.414444558
    }
  },
  {
    "id": "325",
    "title": "Terreno comercial en renta- Alamar",
    "location": "Alamar, Tijuana",
    "slug": "terreno-comercial-en-renta-alamar",
    "type": "terrenos-comerciales",
    "division": "comercial",
    "price": 5000,
    "beds": 0,
    "baths": 0,
    "sqft": 0,
    "status": "For Rent",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBRJUBA011.webp",
    "coordinates": {
      "lat": 32.521869659,
      "lng": -116.917472839
    }
  },
  {
    "id": "326",
    "title": "Departamento en venta / renta en Adamant",
    "location": "Agua Caliente, Tijuana",
    "slug": "departamento-en-venta-en-adamant",
    "type": "departamentos",
    "division": "residencial",
    "price": 1600,
    "beds": 2,
    "baths": 2,
    "sqft": 88,
    "status": "For Rent",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBRZETLU0101.jpg",
    "coordinates": {
      "lat": 32.50974101,
      "lng": -116.992781614
    }
  },
  {
    "id": "327",
    "title": "Escuela en Venta - 20 de Noviembre",
    "location": "20 de Noviembre, Tijuana",
    "slug": "escuela-en-venta-20-de-noviembre",
    "type": "edificios",
    "division": "comercial",
    "price": 995000,
    "beds": 0,
    "baths": 0,
    "sqft": 450,
    "status": "For Sale",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBVVAROR0101.webp",
    "coordinates": {
      "lat": 32.51791344,
      "lng": -117.004236375
    }
  },
  {
    "id": "328",
    "title": "Departamentos en Venta Xavia - Xentus",
    "location": "Blvd. Cuauhtemoc Sur, Tijuana",
    "slug": "departamentos-en-venta-xavia-xentus",
    "type": "departamentos",
    "division": "residencial",
    "price": 238410,
    "beds": 1,
    "baths": 1,
    "sqft": 72,
    "status": "For Sale",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBVSALTA01_201.jpg",
    "coordinates": {
      "lat": 32.496136455,
      "lng": -117.020106706
    }
  },
  {
    "id": "329",
    "title": "Terreno en Venta - Rancho Tecate 1850 m²",
    "location": "Tecate, Tecate",
    "slug": "terreno-en-venta-rancho-tecate-1850-m",
    "type": "terrenos-residenciales",
    "division": "residencial",
    "price": 162800,
    "beds": 0,
    "baths": 0,
    "sqft": 0,
    "status": "For Sale",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBVROMAR021.jpg",
    "coordinates": {
      "lat": 32.504382531,
      "lng": -116.598424364
    }
  },
  {
    "id": "330",
    "title": "Terreno Comercial en Venta - Baja Malibu",
    "location": "Baja Malibu , Tijuana",
    "slug": "terreno-comercial-en-venta-baja-malibu",
    "type": "terrenos-comerciales",
    "division": "comercial",
    "price": 1499900,
    "beds": 0,
    "baths": 0,
    "sqft": 0,
    "status": "For Sale",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBVMOC011.jpg",
    "coordinates": {
      "lat": 32.414101,
      "lng": -117.0932811
    }
  },
  {
    "id": "331",
    "title": "Locales en Venta - Plaza Cuauhtemoc",
    "location": "Blvd. Cuauhtemoc Sur, Tijuana",
    "slug": "locales-en-venta-plaza-cuauhtemoc",
    "type": "locales",
    "division": "comercial",
    "price": 3800,
    "beds": 0,
    "baths": 0,
    "sqft": 0,
    "status": "For Sale",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBVRECAR011.webp",
    "coordinates": {
      "lat": 32.509707334,
      "lng": -117.022783758
    }
  },
  {
    "id": "332",
    "title": "ALICO Departamentos en Venta - Zona Centro",
    "location": "Zona Centro, Tijuana",
    "slug": "alico-departamentos-en-venta-zona-centro",
    "type": "departamentos",
    "division": "residencial",
    "price": 245000,
    "beds": 2,
    "baths": 1.5,
    "sqft": 80,
    "status": "For Sale",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBVPEBU0101.jpg",
    "coordinates": {
      "lat": 32.529396168,
      "lng": -117.037930385
    }
  },
  {
    "id": "333",
    "title": "Local en Venta / Renta en Zona Rio - Plaza Fiesta",
    "location": "Zona Rio, Tijuana",
    "slug": "local-en-venta-renta-en-zona-rio-plaza-fiesta",
    "type": "locales",
    "division": "comercial",
    "price": 2300,
    "beds": 0,
    "baths": 0,
    "sqft": 72,
    "status": "For Rent",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBVESPORO0101.webp",
    "coordinates": {
      "lat": 32.527405017,
      "lng": -117.022483531
    }
  },
  {
    "id": "334",
    "title": "Departamento en Renta / Venta  - Horizonte Chapultepec",
    "location": "Chapultepec, Tijuana",
    "slug": "departamento-en-renta-venta-horizonte-chapultepec",
    "type": "departamentos",
    "division": "residencial",
    "price": 2200,
    "beds": 2,
    "baths": 2,
    "sqft": 118,
    "status": "For Rent",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBRHERCARLLO0101.jpg",
    "coordinates": {
      "lat": 32.509426557,
      "lng": -116.999169072
    }
  },
  {
    "id": "335",
    "title": "Departamento en Venta - Veranda 15 - 2D",
    "location": "Cubillas, Tijuana",
    "slug": "departamento-en-venta-veranda-15-2-d",
    "type": "departamentos",
    "division": "residencial",
    "price": 4670000,
    "beds": 2,
    "baths": 2,
    "sqft": 135,
    "status": "For Sale",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBRNAVPE01_201.jpg",
    "coordinates": {
      "lat": 32.509564575,
      "lng": -117.016732398
    }
  },
  {
    "id": "336",
    "title": "Oficina en Renta - Zona Centro Calle 6ta",
    "location": "Zona Centro, Tijuana",
    "slug": "oficina-en-renta-zona-centro-calle-6ta",
    "type": "edificios",
    "division": "comercial",
    "price": 1100,
    "beds": 0,
    "baths": 0,
    "sqft": 75,
    "status": "For Rent",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBRIRIJU011.webp",
    "coordinates": {
      "lat": 32.530836419,
      "lng": -117.03764492
    }
  },
  {
    "id": "337",
    "title": "Terreno para desarrollo en Venta - Valle de Guadalupe",
    "location": "Valle de Guadalupe, Ensenada",
    "slug": "terreno-para-desarrollo-en-venta-valle-de-guadalupe",
    "type": "terrenos-comerciales",
    "division": "comercial",
    "price": 0,
    "beds": 0,
    "baths": 0,
    "sqft": 0,
    "status": "For Rent",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBVFERFA0101.webp",
    "coordinates": {
      "lat": 32.10047746,
      "lng": -116.600841269
    }
  },
  {
    "id": "338",
    "title": "Venta de Townhouse- Hipodromo Burocratas",
    "location": "Hipodromo , Tijuana",
    "slug": "casas-en-preventa-hipodromo-burocratas",
    "type": "casas",
    "division": "residencial",
    "price": 7150000,
    "beds": 3,
    "baths": 2.5,
    "sqft": 215,
    "status": "For Sale",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBVRUEDR011.webp",
    "coordinates": {
      "lat": 32.494940162,
      "lng": -116.996749483
    }
  },
  {
    "id": "339",
    "title": "Terreno con Proyecto en Venta - En la Cacho",
    "location": "Cacho, Tijuana",
    "slug": "terreno-con-proyecto-en-venta-en-la-cacho",
    "type": "terrenos-residenciales",
    "division": "residencial",
    "price": 984000,
    "beds": 0,
    "baths": 0,
    "sqft": 0,
    "status": "For Sale",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBVALDCAS011.jpg",
    "coordinates": {
      "lat": 32.520145551,
      "lng": -117.028987578
    }
  },
  {
    "id": "340",
    "title": "Locales Comerciales en Renta - Torre G Distrito Financiero",
    "location": "Zona Rio, Tijuana",
    "slug": "locales-comerciales-en-renta-torre-g-distrito-financiero",
    "type": "locales",
    "division": "comercial",
    "price": 20,
    "beds": 0,
    "baths": 0,
    "sqft": 107,
    "status": "For Rent",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBRGALLG0101.jpg",
    "coordinates": {
      "lat": 32.525316653,
      "lng": -117.021719906
    }
  },
  {
    "id": "341",
    "title": "Terreno en Venta Renta - Pinos de Narez",
    "location": "Los Pinos, Tijuana",
    "slug": "terreno-en-venta-renta-pinos-de-narez",
    "type": "terrenos-comerciales",
    "division": "comercial",
    "price": 3386.4,
    "beds": 0,
    "baths": 0,
    "sqft": 0,
    "status": "For Rent",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBRFGM0101.webp",
    "coordinates": {
      "lat": 32.469491,
      "lng": -116.934881
    }
  },
  {
    "id": "342",
    "title": "Departamentos en venta El Encinal - Col. Buena Vista Segundo Piso 3ra Planta",
    "location": "Buena Vista, Tijuana",
    "slug": "departamentos-en-venta-el-encinal-col-buena-vista-segundo-piso-3ra-planta",
    "type": "departamentos",
    "division": "residencial",
    "price": 225000,
    "beds": 2,
    "baths": 2,
    "sqft": 86,
    "status": "For Sale",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBVROIRL031.jpg",
    "coordinates": {
      "lat": 32.520886453,
      "lng": -116.980651677
    }
  },
  {
    "id": "343",
    "title": "Terreno para desarrollo en Venta - En Col. Francisco I Madero Sur",
    "location": "Madero Sur, Tijuana",
    "slug": "terreno-para-desarrollo-en-venta-en-col-francisco-i-madero-sur",
    "type": "terrenos-residenciales",
    "division": "residencial",
    "price": 250000,
    "beds": 0,
    "baths": 0,
    "sqft": 0,
    "status": "For Sale",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBVOLEACA01_1.webp",
    "coordinates": {
      "lat": 32.509479978,
      "lng": -117.023310834
    }
  },
  {
    "id": "344",
    "title": "Departamentos en Venta Índigo Resort Living - Playas de Tijuana",
    "location": "Playas de Tijuana, Tijuana",
    "slug": "departamentos-en-venta-indigo-resort-living-playas-de-tijuana",
    "type": "departamentos",
    "division": "residencial",
    "price": 421000,
    "beds": 3,
    "baths": 2.5,
    "sqft": 200,
    "status": "For Sale",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBVSITL01_1.webp",
    "coordinates": {
      "lat": 32.511510012,
      "lng": -117.123073918
    }
  },
  {
    "id": "345",
    "title": "Casa en Venta - En Campestre Murua",
    "location": "Campestre Murua, Tijuana",
    "slug": "casa-en-venta-en-campestre-murua",
    "type": "casas",
    "division": "residencial",
    "price": 845000,
    "beds": 4,
    "baths": 4.5,
    "sqft": 600,
    "status": "For Sale",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBRSIFROS0201.jpg",
    "coordinates": {
      "lat": 32.524278969,
      "lng": -116.926854785
    }
  },
  {
    "id": "346",
    "title": "Departamentos en Venta Xavia - Xen",
    "location": "Blvd. Cuauhtemoc Sur, Tijuana",
    "slug": "departamentos-en-venta-xavia-xen",
    "type": "departamentos",
    "division": "residencial",
    "price": 352526,
    "beds": 3,
    "baths": 2,
    "sqft": 110,
    "status": "For Sale",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBVSALTA01_401.jpg",
    "coordinates": {
      "lat": 32.496136455,
      "lng": -117.020106706
    }
  },
  {
    "id": "347",
    "title": "Terreno Comercial en Venta - Rosarito Los Arenales",
    "location": "Rosarito, Rosarito",
    "slug": "terreno-comercial-en-venta-rosarito-los-arenales",
    "type": "terrenos-comerciales",
    "division": "comercial",
    "price": 969193.55,
    "beds": 0,
    "baths": 0,
    "sqft": 0,
    "status": "For Sale",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBVFOTDVA0101.jpg",
    "coordinates": {
      "lat": 32.201522157,
      "lng": -116.911702915
    }
  },
  {
    "id": "348",
    "title": "Terreno Comercial en Venta - 20 De Noviembre",
    "location": "20 de Noviembre, Tijuana",
    "slug": "terreno-comercial-en-venta-20-de-noviembre",
    "type": "edificios",
    "division": "comercial",
    "price": 1250,
    "beds": 0,
    "baths": 0,
    "sqft": 4049,
    "status": "For Sale",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBVFERHE0101.jpg",
    "coordinates": {
      "lat": 32.5149821,
      "lng": -116.978956651
    }
  },
  {
    "id": "349",
    "title": "Terreno comercial en Renta - Otay Aeropuerto",
    "location": "Otay Aeropuerto, Tijuana",
    "slug": "terreno-comercial-en-renta-otay-aeropuerto",
    "type": "terrenos-comerciales",
    "division": "comercial",
    "price": 3600,
    "beds": 0,
    "baths": 0,
    "sqft": 0,
    "status": "For Rent",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBRMR01a_1.jpg",
    "coordinates": {
      "lat": 32.541347575,
      "lng": -116.994760248
    }
  },
  {
    "id": "350",
    "title": "Casa en Venta - La Paloma Rosarito",
    "location": "Rosarito, Rosarito",
    "slug": "casa-en-venta-la-paloma-rosarito",
    "type": "casas",
    "division": "residencial",
    "price": 395000,
    "beds": 3,
    "baths": 2,
    "sqft": 130,
    "status": "For Sale",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBVCAQUI0101.webp",
    "coordinates": {
      "lat": 32.327132294,
      "lng": -117.051105976
    }
  },
  {
    "id": "351",
    "title": "Terreno Comercial en Venta en Rosarito",
    "location": "Playas de Rosarito, Rosarito",
    "slug": "terreno-comercial-en-venta-en-rosarito",
    "type": "terrenos-comerciales",
    "division": "comercial",
    "price": 160,
    "beds": 0,
    "baths": 0,
    "sqft": 0,
    "status": "For Sale",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBVHERLU011.jpg",
    "coordinates": {
      "lat": 32.2514647,
      "lng": -116.953841617
    }
  },
  {
    "id": "352",
    "title": "Departamentos en venta El Encinal - Col. Buena Vista Segundo Piso 2da Planta",
    "location": "Buena Vista, Tijuana",
    "slug": "departamentos-en-venta-el-encinal-col-buena-vista-segundo-piso-2da-planta",
    "type": "departamentos",
    "division": "residencial",
    "price": 200000,
    "beds": 2,
    "baths": 2,
    "sqft": 85,
    "status": "For Sale",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBVROIRL0201.jpg",
    "coordinates": {
      "lat": 32.520886453,
      "lng": -116.980651677
    }
  },
  {
    "id": "353",
    "title": "Casa en Venta - Rancho Grande",
    "location": "9 Sección, Tijuana",
    "slug": "casa-en-venta-rancho-grande",
    "type": "casas",
    "division": "residencial",
    "price": 900000,
    "beds": 4,
    "baths": 3.5,
    "sqft": 350,
    "status": "For Sale",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBRSANMARI0201.jpg",
    "coordinates": {
      "lat": 32.500904909,
      "lng": -117.007850561
    }
  },
  {
    "id": "354",
    "title": "Plaza comercial en renta- Col. Aeropuerto (Plaza Aeropuerto)",
    "location": "Aeropuerto, Tijuana",
    "slug": "plaza-comercial-en-renta-col-aeropuerto-plaza-aeropuerto",
    "type": "locales",
    "division": "comercial",
    "price": 0,
    "beds": 0,
    "baths": 0,
    "sqft": 2134.61,
    "status": "For Rent",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBREDC0101.webp",
    "coordinates": {
      "lat": 32.541324368,
      "lng": -116.996997384
    }
  },
  {
    "id": "355",
    "title": "Departamentos en Venta - Playas de Tijuana",
    "location": "Playas de Tijuana, Tijuana",
    "slug": "departamentos-en-venta-playas-de-tijuana",
    "type": "departamentos",
    "division": "residencial",
    "price": 275000,
    "beds": 3,
    "baths": 2,
    "sqft": 127,
    "status": "For Sale",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBVMORJO0101.jpg",
    "coordinates": {
      "lat": 32.518677621,
      "lng": -117.099580429
    }
  },
  {
    "id": "356",
    "title": "Preventa de Casas Privada Santa Paula",
    "location": "Lomas del Rio, Tijuana",
    "slug": "preventa-de-casas-privada-santa-paula",
    "type": "casas",
    "division": "residencial",
    "price": 8850000,
    "beds": 3,
    "baths": 2.5,
    "sqft": 220,
    "status": "For Sale",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBVRUEDR021.webp",
    "coordinates": {
      "lat": 32.486359153,
      "lng": -117.015229632
    }
  },
  {
    "id": "357",
    "title": "Edificio Comercial en Venta Zona Centro",
    "location": "Zona Centro, Tijuana",
    "slug": "edificio-comercial-en-venta-zona-centro",
    "type": "edificios",
    "division": "comercial",
    "price": 2300000,
    "beds": 0,
    "baths": 0,
    "sqft": 2036,
    "status": "For Sale",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBVCRLP01_1.webp",
    "coordinates": {
      "lat": 32.529956836,
      "lng": -117.042855524
    }
  },
  {
    "id": "358",
    "title": "Aportación de Terreno Industrial - Blvd. 2000",
    "location": "Hacienda Las Delicias, Tijuana",
    "slug": "aportacion-o-venta-de-terreno-industrial-blvd-2000",
    "type": "terrenos-comerciales",
    "division": "comercial",
    "price": 150,
    "beds": 0,
    "baths": 0,
    "sqft": 0,
    "status": "For Sale",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBRLOR0101-1.webp",
    "coordinates": {
      "lat": 32.399105007,
      "lng": -116.937645224
    }
  },
  {
    "id": "359",
    "title": "Departamento en Venta N - Juarez Residencial",
    "location": "Juarez, Tijuana",
    "slug": "departamento-en-venta-n-juarez-residencial",
    "type": "departamentos",
    "division": "residencial",
    "price": 330000,
    "beds": 3,
    "baths": 2.5,
    "sqft": 170,
    "status": "For Sale",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/5d48cc95-8d8a-4228-bd22-23b1dd8b3ffd.jpg",
    "coordinates": {
      "lat": 32.508915771,
      "lng": -117.039049535
    }
  },
  {
    "id": "360",
    "title": "Terreno en Venta - Misiones del Pedregal",
    "location": "Misiones del Pedregal, Tijuana",
    "slug": "terreno-en-venta-jardines-del-pedregal",
    "type": "terrenos-residenciales",
    "division": "residencial",
    "price": 180000,
    "beds": 0,
    "baths": 0,
    "sqft": 0,
    "status": "For Sale",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBVIBACA011.jpg",
    "coordinates": {
      "lat": 32.521419198,
      "lng": -116.977920666
    }
  },
  {
    "id": "361",
    "title": "Departamentos en venta El Encinal - Col. Buena Vista",
    "location": "Buena Vista, Tijuana",
    "slug": "departamentos-en-venta-el-encinal-col-buena-vista",
    "type": "departamentos",
    "division": "residencial",
    "price": 150000,
    "beds": 1,
    "baths": 1,
    "sqft": 67.25,
    "status": "For Sale",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBVROIRL011.jpg",
    "coordinates": {
      "lat": 32.520886453,
      "lng": -116.980651677
    }
  },
  {
    "id": "362",
    "title": "Terreno en Renta - Ojo de agua",
    "location": "Ojo de Agua, Tijuana",
    "slug": "terreno-en-renta-ojo-de-agua",
    "type": "terrenos-comerciales",
    "division": "comercial",
    "price": 1.5,
    "beds": 0,
    "baths": 0,
    "sqft": 0,
    "status": "For Rent",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBREEAP0101.jpg",
    "coordinates": {
      "lat": 32.48,
      "lng": -116.791037206
    }
  },
  {
    "id": "363",
    "title": "Departamentos en Venta - Buena Vista",
    "location": "Buena Vista, Tijuana",
    "slug": "departamentos-en-venta-buena-vista",
    "type": "departamentos",
    "division": "residencial",
    "price": 198928.52,
    "beds": 1,
    "baths": 1,
    "sqft": 105,
    "status": "For Sale",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBVGARSA0101.png",
    "coordinates": {
      "lat": 32.521117814,
      "lng": -116.982869036
    }
  },
  {
    "id": "364",
    "title": "Terreno Residencial en Venta - Real del Mar",
    "location": "Real Del Mar, Tijuana",
    "slug": "terreno-residencial-en-venta-real-del-mar",
    "type": "terrenos-residenciales",
    "division": "residencial",
    "price": 294038.4,
    "beds": 0,
    "baths": 0,
    "sqft": 0,
    "status": "For Sale",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBVOSUMAR011.jpg",
    "coordinates": {
      "lat": 32.447190736,
      "lng": -117.09746843
    }
  },
  {
    "id": "365",
    "title": "Bodega en renta - Rosas Magallon",
    "location": "Libramiento Rosas Magallón, Tijuana",
    "slug": "bodega-en-renta-rosas-magallon",
    "type": "naves-y-bodegas",
    "division": "comercial",
    "price": 8.5,
    "beds": 0,
    "baths": 0,
    "sqft": 5503,
    "status": "For Rent",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBRESES011.webp",
    "coordinates": {
      "lat": 32.507490184,
      "lng": -116.970035396
    }
  },
  {
    "id": "366",
    "title": "Locales en Renta - Centro Constitución",
    "location": "Zona Centro, Tijuana",
    "slug": "locales-en-renta-centro-constitucion",
    "type": "locales",
    "division": "comercial",
    "price": 10,
    "beds": 0,
    "baths": 0,
    "sqft": 35,
    "status": "For Rent",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBRKYRBU0101.jpg",
    "coordinates": {
      "lat": 32.52,
      "lng": -117.038629599
    }
  },
  {
    "id": "367",
    "title": "Casa en Venta en Costa Hermosa - Playas de Tijuana",
    "location": "Playas de Tijuana, Tijuana",
    "slug": "casa-en-venta-en-costa-hermosa-playas-de-tijuana",
    "type": "casas",
    "division": "residencial",
    "price": 390000,
    "beds": 6,
    "baths": 3.5,
    "sqft": 232.95,
    "status": "For Sale",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBVALBA01_1-1.webp",
    "coordinates": {
      "lat": 32.510938159,
      "lng": -117.114917285
    }
  },
  {
    "id": "368",
    "title": "Local Comercial en Renta - En Zona Rio",
    "location": "Zona Rio, Tijuana",
    "slug": "local-comercial-en-renta-en-zona-rio-1",
    "type": "locales",
    "division": "comercial",
    "price": 3600,
    "beds": 0,
    "baths": 2,
    "sqft": 226,
    "status": "For Rent",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBRGAJISA0301.jpg",
    "coordinates": {
      "lat": 32.523955081,
      "lng": -117.015904571
    }
  },
  {
    "id": "369",
    "title": "Departamentos en Venta Xavia - Xiva",
    "location": "Blvd. Cuauhtemoc Sur, Tijuana",
    "slug": "departamentos-en-venta-xavia-xiva",
    "type": "departamentos",
    "division": "residencial",
    "price": 219210,
    "beds": 1,
    "baths": 1,
    "sqft": 72,
    "status": "For Sale",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBVSALTA0101.jpg",
    "coordinates": {
      "lat": 32.496136455,
      "lng": -117.020106706
    }
  },
  {
    "id": "370",
    "title": "Tienda departamental en Venta / Renta - Ensenada",
    "location": "Ensenada, Ensenada",
    "slug": "tienda-departamental-en-venta-renta-ensenada",
    "type": "locales",
    "division": "comercial",
    "price": 11250,
    "beds": 0,
    "baths": 0,
    "sqft": 1196,
    "status": "For Rent",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBVNASAYUB0101.jpg",
    "coordinates": {
      "lat": 31.865798626,
      "lng": -116.627730261
    }
  },
  {
    "id": "371",
    "title": "Plaza comercial en renta- Col. Aeropuerto  (Plaza Libertad) ",
    "location": "Aeropuerto, Tijuana",
    "slug": "plaza-comercial-en-renta-col-aeropuerto-plaza-libertad",
    "type": "locales",
    "division": "comercial",
    "price": 1100,
    "beds": 0,
    "baths": 0,
    "sqft": 75,
    "status": "For Rent",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBREDC031.webp",
    "coordinates": {
      "lat": 32.541904014,
      "lng": -116.99678376
    }
  },
  {
    "id": "372",
    "title": "Local en renta - Blvd Insurgentes",
    "location": "Libramiento, Tijuana",
    "slug": "local-en-renta-blvd-insurgentes",
    "type": "locales",
    "division": "comercial",
    "price": 1300,
    "beds": 0,
    "baths": 0,
    "sqft": 75,
    "status": "For Rent",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBREDCA011.webp",
    "coordinates": {
      "lat": 32.477482703,
      "lng": -116.920304818
    }
  },
  {
    "id": "373",
    "title": "Terreno Industrial en Renta / Venta - Valle de las Palmas Tecate",
    "location": "Tecate, Tecate",
    "slug": "terreno-industrial-en-renta-venta-valle-de-las-palmas-tecate",
    "type": "terrenos-comerciales",
    "division": "comercial",
    "price": 0.45,
    "beds": 0,
    "baths": 0,
    "sqft": 0,
    "status": "For Rent",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBRMORSLA011.jpg",
    "coordinates": {
      "lat": 32.474924158,
      "lng": -116.71312879
    }
  },
  {
    "id": "374",
    "title": "Terreno en Venta - San Antonio de las Minas",
    "location": "San Antonio de las minas, Ensenada",
    "slug": "terreno-en-venta-san-antonio-de-las-minas",
    "type": "terrenos-comerciales",
    "division": "comercial",
    "price": 96000,
    "beds": 0,
    "baths": 0,
    "sqft": 0,
    "status": "For Sale",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBVEVELAN0101.jpg",
    "coordinates": {
      "lat": 31.963409638,
      "lng": -116.636557855
    }
  },
  {
    "id": "375",
    "title": "Departamento en Renta - Mar y Sol Rosarito",
    "location": "Playas de Rosarito, Rosarito",
    "slug": "departamento-en-renta-mar-y-sol-rosarito",
    "type": "departamentos",
    "division": "residencial",
    "price": 2200,
    "beds": 3,
    "baths": 2,
    "sqft": 168,
    "status": "For Rent",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBRCAROP0101.webp",
    "coordinates": {
      "lat": 32.394121692,
      "lng": -117.087167495
    }
  },
  {
    "id": "376",
    "title": "Terreno Comercial en Venta y Renta  - Playas de Tijuana",
    "location": "Playas de Tijuana, Tijuana",
    "slug": "terreno-comercial-en-venta-playas-de-tijuana",
    "type": "terrenos-comerciales",
    "division": "comercial",
    "price": 6000,
    "beds": 0,
    "baths": 0,
    "sqft": 0,
    "status": "For Rent",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBVESALA01_1.jpg",
    "coordinates": {
      "lat": 32.522205285,
      "lng": -117.12312119
    }
  },
  {
    "id": "377",
    "title": "Terreno Residencial en Venta - Rancho Tecate",
    "location": "Tecate, Tecate",
    "slug": "terreno-residencial-en-venta-rancho-tecate",
    "type": "terrenos-residenciales",
    "division": "residencial",
    "price": 150000,
    "beds": 0,
    "baths": 0,
    "sqft": 0,
    "status": "For Sale",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBVCSP011.webp",
    "coordinates": {
      "lat": 32.503138,
      "lng": -116.605569
    }
  },
  {
    "id": "378",
    "title": "Edificio en Venta / Renta en Paseo Playas de Tijuana",
    "location": "Playas de Tijuana, Tijuana",
    "slug": "edificio-en-venta-renta-en-paseo-playas-de-tijuana",
    "type": "edificios",
    "division": "comercial",
    "price": 13,
    "beds": 0,
    "baths": 0,
    "sqft": 0,
    "status": "For Rent",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBVILAGALIC031.jpg",
    "coordinates": {
      "lat": 32.533463673,
      "lng": -117.117593719
    }
  },
  {
    "id": "379",
    "title": "Terreno en Venta - Centro Industrial Pacifico",
    "location": "Industrial Pacifico, Tijuana",
    "slug": "terreno-en-venta-centro-industrial-pacifico",
    "type": "terrenos-comerciales",
    "division": "comercial",
    "price": 220,
    "beds": 0,
    "baths": 0,
    "sqft": 0,
    "status": "For Sale",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBVVLADLO0101.jpg",
    "coordinates": {
      "lat": 32.441035375,
      "lng": -116.982661273
    }
  },
  {
    "id": "380",
    "title": "Departamento en venta - La Cacho La Vid",
    "location": "Cacho, Tijuana",
    "slug": "departamento-en-venta-la-cacho-la-vid",
    "type": "departamentos",
    "division": "residencial",
    "price": 598000,
    "beds": 3,
    "baths": 2.5,
    "sqft": 250,
    "status": "For Sale",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBVCAMPSANC01_New_1.jpg",
    "coordinates": {
      "lat": 32.513719121,
      "lng": -117.02434459
    }
  },
  {
    "id": "381",
    "title": "Venta de Terreno Comercial - Valle de Guadalupe",
    "location": "Valle de Guadalupe, Ensenada",
    "slug": "venta-de-terreno-comercial-valle-de-guadalupe",
    "type": "terrenos-comerciales",
    "division": "comercial",
    "price": 14,
    "beds": 0,
    "baths": 0,
    "sqft": 0,
    "status": "For Sale",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBVFDNA011.webp",
    "coordinates": {
      "lat": 32.098328714,
      "lng": -116.571774758
    }
  },
  {
    "id": "382",
    "title": "Próximamente - En Renta Plaza Comercial sobre vía rápida oriente",
    "location": "Zona Rio 3ra Etapa, Tijuana",
    "slug": "proximamente-en-renta-plaza-comercial-sobre-via-rapida-oriente",
    "type": "locales",
    "division": "comercial",
    "price": 0,
    "beds": 0,
    "baths": 0,
    "sqft": 3939,
    "status": "For Rent",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBRFGM021.jpg",
    "coordinates": {
      "lat": 32.47487,
      "lng": -116.926761
    }
  },
  {
    "id": "383",
    "title": "Casa en Venta - Privada San Marino",
    "location": "San Marino, Rosarito",
    "slug": "casa-en-venta-privada-san-marino",
    "type": "casas",
    "division": "residencial",
    "price": 385000,
    "beds": 4,
    "baths": 4,
    "sqft": 241,
    "status": "For Sale",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBVRMR0101.jpg",
    "coordinates": {
      "lat": 32.416839281,
      "lng": -117.089661143
    }
  },
  {
    "id": "384",
    "title": "Terreno en Venta - Blvd. Fundadores El Rubi",
    "location": "Blvd. Fundadores- El Rubi, Tijuana",
    "slug": "terreno-en-venta-blvd-fundadores-el-rubi",
    "type": "terrenos-comerciales",
    "division": "comercial",
    "price": 350,
    "beds": 0,
    "baths": 0,
    "sqft": 0,
    "status": "For Sale",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBVARVARV021.jpg",
    "coordinates": {
      "lat": 32.491628338,
      "lng": -117.031572373
    }
  },
  {
    "id": "385",
    "title": "Terreno en Venta - En  Punta Azul",
    "location": "Punta Azul, Rosarito",
    "slug": "terreno-en-venta-en-punta-azul",
    "type": "terrenos-residenciales",
    "division": "residencial",
    "price": 99000,
    "beds": 0,
    "baths": 0,
    "sqft": 0,
    "status": "For Sale",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBVGUZGIL011.jpg",
    "coordinates": {
      "lat": 32.317862202,
      "lng": -117.045978291
    }
  },
  {
    "id": "386",
    "title": "Terreno en venta - El Rubi",
    "location": "Blvd. Fundadores- El Rubi, Tijuana",
    "slug": "terreno-en-venta-el-rubi",
    "type": "terrenos-comerciales",
    "division": "comercial",
    "price": 350,
    "beds": 0,
    "baths": 0,
    "sqft": 0,
    "status": "For Sale",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBVARVARV011.jpg",
    "coordinates": {
      "lat": 32.476832958,
      "lng": -117.031964036
    }
  },
  {
    "id": "387",
    "title": "Plaza Parque Insurgentes",
    "location": "Blvd. Insurgentes, Tijuana",
    "slug": "plaza-parque-insurgentes",
    "type": "locales",
    "division": "comercial",
    "price": 0,
    "beds": 0,
    "baths": 0,
    "sqft": 0,
    "status": "For Rent",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBRBALES011.jpg",
    "coordinates": {
      "lat": 32.467918526,
      "lng": -116.914831531
    }
  },
  {
    "id": "388",
    "title": "Oficina en Renta - Central Toreo ",
    "location": "Agua Caliente, Tijuana",
    "slug": "oficina-en-renta-central-toreo",
    "type": "oficinas",
    "division": "comercial",
    "price": 1350,
    "beds": 0,
    "baths": 0,
    "sqft": 63,
    "status": "For Rent",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBRCENCH011.png",
    "coordinates": {
      "lat": 32.51879043,
      "lng": -117.01873377
    }
  },
  {
    "id": "389",
    "title": "Terreno en Venta en Cañon del Sainz",
    "location": "Cañon Del Sainz, Tijuana",
    "slug": "terreno-en-venta-en-canon-del-sainz",
    "type": "terrenos-comerciales",
    "division": "comercial",
    "price": 145000,
    "beds": 0,
    "baths": 0,
    "sqft": 0,
    "status": "For Sale",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBVJAVBR011.jpg",
    "coordinates": {
      "lat": 32.450256814,
      "lng": -116.934277985
    }
  },
  {
    "id": "390",
    "title": "Terreno Residencial en Venta en Burocrata Hipodromo",
    "location": "Burocratas Hipodromo, Tijuana",
    "slug": "terreno-residencial-en-venta-en-burocrata-hipodromo",
    "type": "terrenos-residenciales",
    "division": "residencial",
    "price": 215000,
    "beds": 0,
    "baths": 0,
    "sqft": 0,
    "status": "For Sale",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBVFERMA011.webp",
    "coordinates": {
      "lat": 32.493108127,
      "lng": -116.997734289
    }
  },
  {
    "id": "391",
    "title": "Departamento en Renta - Las Palmas Rosarito",
    "location": "Rosarito, Rosarito",
    "slug": "departamento-en-renta-las-palmas-rosarito",
    "type": "departamentos",
    "division": "residencial",
    "price": 1500,
    "beds": 3,
    "baths": 2.5,
    "sqft": 140,
    "status": "For Rent",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBRLIZPA011.jpg",
    "coordinates": {
      "lat": 32.352715465,
      "lng": -117.042765629
    }
  },
  {
    "id": "392",
    "title": "Edificio / Terreno en Venta - Las Torres Otay",
    "location": "Otay, Tijuana",
    "slug": "edificio-terreno-en-venta-las-torres-otay",
    "type": "edificios",
    "division": "comercial",
    "price": 1475000,
    "beds": 0,
    "baths": 0,
    "sqft": 1100,
    "status": "For Sale",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBRSIFROS0101.jpg",
    "coordinates": {
      "lat": 32.54804145,
      "lng": -116.898919665
    }
  },
  {
    "id": "393",
    "title": "Casas / Departamentos en Renta - En el Mirador",
    "location": "El Mirador, Tijuana",
    "slug": "casas-departamentos-en-renta-en-el-mirador",
    "type": "casas",
    "division": "residencial",
    "price": 12500,
    "beds": 1,
    "baths": 1,
    "sqft": 70,
    "status": "For Rent",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBRSANTDA0101.webp",
    "coordinates": {
      "lat": 32.530314193,
      "lng": -117.087816033
    }
  },
  {
    "id": "394",
    "title": "Edificio en Renta Mind - Colonia Revolución",
    "location": "Zona Rio, Tijuana",
    "slug": "edificio-en-renta-mind-colona-revolucion",
    "type": "edificios",
    "division": "residencial",
    "price": 21,
    "beds": 0,
    "baths": 0,
    "sqft": 6000,
    "status": "For Rent",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBRJORARR011.jpg",
    "coordinates": {
      "lat": 32.522342097,
      "lng": -117.019017918
    }
  },
  {
    "id": "395",
    "title": "Oficina en Renta - Plaza Financiera",
    "location": "Zona Rio, Tijuana",
    "slug": "oficina-en-renta-plaza-financiera",
    "type": "oficinas",
    "division": "comercial",
    "price": 23,
    "beds": 0,
    "baths": 0,
    "sqft": 390,
    "status": "For Rent",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBRBUENR01_1.webp",
    "coordinates": {
      "lat": 32.525377567,
      "lng": -117.021925667
    }
  },
  {
    "id": "396",
    "title": "Terreno en Venta - El Sauzal",
    "location": "Ensenada, Ensenada",
    "slug": "terreno-en-venta-el-sauzal",
    "type": "terrenos-comerciales",
    "division": "comercial",
    "price": 1200000,
    "beds": 0,
    "baths": 0,
    "sqft": 0,
    "status": "For Sale",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBRLARP0121.jpg",
    "coordinates": {
      "lat": 31.902976056,
      "lng": -116.721767086
    }
  },
  {
    "id": "397",
    "title": "Terreno en Venta - Valle Redondo 8.3 Hectáreas",
    "location": "Valle Redondo, Tijuana",
    "slug": "terreno-en-venta-valle-redondo-8-3-hectareas",
    "type": "terrenos-comerciales",
    "division": "comercial",
    "price": 45,
    "beds": 0,
    "baths": 0,
    "sqft": 0,
    "status": "For Sale",
    "image": "https://pgrxirjxopnqrsqfmztd.supabase.co/storage/v1/object/public/CMSProbien/Portal/PBVRODBUA011.jpg",
    "coordinates": {
      "lat": 32.537640864,
      "lng": -116.748175436
    }
  }
]