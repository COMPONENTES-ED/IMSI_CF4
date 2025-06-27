export default {
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Implementación del Cableado Estructurado',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Definición y componentes',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Planificación y diseño',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Selección de los componentes',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Instalación de pruebas',
            hash: 't_1_4',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Gestión de riesgos en el cableado estructurado',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Identificación de riesgos',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Análisis de impacto',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Evaluación de riesgos',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Mitigación de riesgos y plan de contingencia',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Seguridad en instalaciones',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Normativa de seguridad',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Directrices sobre el uso de equipos',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Seguridad eléctrica',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Protección contra incendios',
            hash: 't_3_4',
          },
          {
            numero: '3.5',
            titulo: 'Organizaciones y estándares',
            hash: 't_3_5',
          },
          {
            numero: '3.6',
            titulo: 'Cumplimiento y auditorías',
            hash: 't_3_6',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Control ambiental',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Gestión de residuos',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Impacto ambiental',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Certificaciones ambientales',
            hash: 't_4_3',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Documentación y control',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Registros de seguridad',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Auditorías y mejora continua',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo: 'Conclusiones',
            hash: 't_5_3',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/228142_CF04_DU_V2.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  global: {
    Name: 'Cableado estructurado: implementación y gestión de riesgos',
    Description:
      'Este componente presenta una variedad de tópicos acerca del cableado estructurado desde su definición, implementación, particularidades de sus componentes hasta las certificaciones ambientales. Examina diferentes tipos de cables haciendo una explicación de las características y calidad, asimismo generalidades de otros componentes junto con la importancia de una adecuada implementación y mitigación de riesgos a la luz de varias organizaciones internacionales.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/2.png'),
      },
    ],
  },
}
