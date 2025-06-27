<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Implementación del cableado estructurado
    
    .row.mb-1
      .col-lg-9(data-aos="fade-right")
        .fondo-color-sistema-k.p-4.h-100.align-content-center
          p.mb-0 La implementación del cableado estructurado es un proceso meticuloso y sistemático que implica la planificación, diseño, instalación y prueba de una infraestructura de telecomunicaciones organizada y estandarizada. En este apartado se mencionarán aspectos de gran importancia sobre este proceso el cual comienza con una evaluación detallada de las necesidades actuales y futuras de la organización, seguida de la selección de componentes de alta calidad, como cables de cobre y fibra óptica, conectores, paneles de parcheo que garanticen la calidad y el cumplimiento de las normativas internacionales.
      .col-lg-3.order-first.order-lg-last(data-aos="fade-left")
        figure.mb-4.mb-lg-0
          img.mx-auto(src="@/assets/curso/temas/3.png",style="max-width: 295px;")
    
    Separador

    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-up")
      h2 1.1 Definición y componentes
    
    p.mb-4(data-aos="fade") El cableado estructurado es un sistema de cableado que proporciona una infraestructura de telecomunicaciones completa y estándar. Este sistema se compone de varios componentes clave:

    .row
      .col-lg-3.col-md-6.mb-4(data-aos="fade-right")
        .fondo-color-secundario.borde-10.p-3.h-100.align-content-center
          p.mb-0 #[b Puntos de Entrada de Servicio (ESP)]: donde los proveedores de servicios externos conectan sus cables a la infraestructura interna.
      .col-lg-3.col-md-6.mb-4(data-aos="fade-up")
        .fondo-color-secundario.borde-10.p-3.h-100.align-content-center
          p.mb-0 #[b Sala de Equipos (ER)]: donde se alojan los equipos de red principales, como #[em routers] y #[em switches].
      .col-lg-3.col-md-6.mb-4(data-aos="fade-down")
        .fondo-color-secundario.borde-10.p-3.h-100.align-content-center
          p.mb-0 #[b Sala de Telecomunicaciones (TR)]: donde se conectan los cables de los puntos de acceso a los equipos de red.
      .col-lg-3.col-md-6.mb-4(data-aos="fade-left")
        .fondo-color-secundario.borde-10.p-3.h-100.align-content-center
          p.mb-0 #[b Área de Trabajo (WA)]: donde los usuarios finales se conectan a la red
    
    Separador.pt-4

    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.2 Planificación y diseño
    
    .row.align-items-center.mb-1
      .col-lg-9(data-aos="fade-right")
        p.mb-0 La implementación de un cableado estructurado comienza con una planificación detallada y un diseño adecuado. Este proceso incluye la evaluación de las necesidades actuales y futuras de la organización, la selección de los materiales y componentes adecuados, y la definición de la topología de la red. Es fundamental contar con un diseño que cumpla con las normativas y estándares internacionales, como TIA/EIA-568 y ISO/IEC 11801, para garantizar la compatibilidad y el rendimiento óptimo del sistema.
      .col-lg-3.order-first.order-lg-last(data-aos="fade-left")
        figure.mb-4.mb-lg-0
          img.mx-auto(src="@/assets/curso/temas/4.png",style="max-width: 295px;")
    
    Separador

    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 1.3 Selección de los componentes
    
    .fondo-color-sistema-k.p-4.mb-5(data-aos="flip-up")
      p.mb-0 La selección de los componentes es un paso fundamental en la implementación del cableado estructurado. Los componentes incluyen cables de cobre (UTP, STP, FTP), cables de fibra óptica, conectores, paneles de parcheo, gabinetes de distribución y equipos de gestión de cables. La calidad de estos componentes es adecuada para asegurar la integridad de la señal y la durabilidad del sistema. Además, es importante considerar la capacidad de expansión y la compatibilidad con futuras tecnologías.
    
    p.mb-4.fw-bold.mb-5(data-aos="fade") A continuación, se amplía las características de los diversos componentes:

    .titulo-sexto.color-acento-contenido(data-aos="fade-right")
      p.mb-0 #[b Tabla 1.] Componentes del cable estructurado, cables de cobre
    
    .tabla-a.color-acento-botones.text-center.mb-5(data-aos="flip-up")
      table
        caption.mt-4 Fuente: OIT, 2024.
        thead
          tr
            th COMPONENTES DEL CABLEADO ESTRUCTURADO (COBRE)
            th CARACTERÍSITICAS
            th CALIDAD

        tbody
          tr
            td.fw-bold.fondo-color-sistema-k Cables UTP #[i (Unshielded Twisted Pair)]
            td
              p.text-start.mb-4 #[b Construcción]: compuestos por pares de cables trenzados sin apantallamiento.
              p.text-start.mb-4 #[b Categorías]: clasificados en categorías (Cat5e, Cat6, Cat6a, Cat7, Cat8) que determinan su rendimiento y capacidad de transmisión de datos.
              p.text-start.mb-0 #[b Aplicaciones]: utilizados en redes Ethernet y telefonía.
            td
              p.text-start.mb-4 #[b Impedancia]: debe ser de 100 ohmios.
              p.text-start.mb-4 #[b Atenuación]: debe cumplir con los límites establecidos por la categoría del cable.
              p.text-start.mb-0 #[b Interferencia]: baja susceptibilidad a interferencias electromagnéticas (EMI).
          tr
            td.fw-bold.fondo-color-sistema-k Cables STP #[i (Shielded Twisted Pair)]
            td
              p.text-start.mb-4 #[b Construcción]: pares de cables trenzados con una malla de apantallamiento.
              p.text-start.mb-0 #[b Aplicaciones]: utilizados en entornos con alta interferencia electromagnética.
            td
              p.text-start.mb-4 #[b Impedancia]: debe ser de 100 ohmios.
              p.text-start.mb-4 #[b Atenuación]: debe cumplir con los límites establecidos por la categoría del cable.
              p.text-start.mb-0 #[b Interferencia]: mayor protección contra EMI en comparación con UTP.
          tr
            td.fw-bold.fondo-color-sistema-k Cables FTP #[i (Foiled Twisted Pair)]
            td
              p.text-start.mb-4 #[b Construcción]: pares de cables trenzados con una lámina de aluminio como apantallamiento.
              p.text-start.mb-4 #[b Aplicaciones]: utilizados en entornos con alta interferencia electromagnética y donde se requiere una mayor protección contra EMI.
            td
              p.text-start.mb-4 #[b Impedancia]: debe ser de 100 ohmios.
              p.text-start.mb-4 #[b Atenuación]: debe cumplir con los límites establecidos por la categoría del cable.
              p.text-start.mb-0 #[b Interferencia]: mayor protección contra EMI en comparación con STP.
    
    p.mb-4(data-aos="fade") La siguiente tabla amplía las características importantes de los componentes del cableado de fibra óptica:

    .titulo-sexto.color-acento-contenido(data-aos="fade-left")
      p.mb-0 #[b Tabla 2.] Componentes del cableado de fibra óptica
    
    .tabla-a.color-acento-botones.text-center.mb-4(data-aos="zoom-in-out")
      table
        caption.mt-4 Fuente: OIT, 2024.
        thead
          tr
            th COMPONENTES DEL CABLEADO ESTRUCTURADO
            th CARACTERÍSITICAS
            th CALIDAD

        tbody
          tr
            td.fw-bold.fondo-color-sistema-k CABLES DE FIBRA ÓPTICA
            td
              p.text-start.mb-4 #[b Construcción]: Compuestos por un núcleo de vidrio o plástico rodeado por una capa de revestimiento.
              p.text-start.mb-4 #[b Tipos]: Monomodo y multimodo.
              p.text-start.mb-0 #[b Aplicaciones]: Utilizados en redes de larga distancia y en entornos donde se requiere alta velocidad de transmisión de datos.
            td
              p.text-start.mb-4 #[b Atenuación]: Debe cumplir con los límites establecidos por el tipo de fibra.
              p.text-start.mb-4 #[b Dispersión modal]: Debe ser mínima para evitar la degradación de la señal.
              p.text-start.mb-0 #[b Resistencia]: Debe ser resistente a la tracción y a la flexión.
    
    p.mb-4(data-aos="fade-up") Así mismo, es importante conocer características específicas de otros componentes de cableado mencionados en este apartado como son:

    .row.justify-content-center(data-aos="fade-right")
      .col-lg-5.col-md-6.mb-4
        .fondo-color-sistema-l.borde-20.p-4.h-100
          figure.mb-4.ms-3
            img(src="@/assets/curso/temas/5.svg",style="max-width: 85px;")
          h4.mb-4.ms-3 Conectores
          p.fw-bold.mb-0.ms-3 Características:
          ul
            li.d-flex
              i.fas.fa-circle.mt-2.me-2(style="font-size: 7px;")
              span Tipos: RJ-45, LC, SC, ST, entre otros.
            li.d-flex
              i.fas.fa-circle.mt-2.me-2(style="font-size: 7px;")
              span Aplicaciones: Utilizados para conectar cables a equipos de red y paneles de parcheo.
          
          p.fw-bold.mb-0.ms-3 Calidad:
          ul.mb-0.pb-0
            li.d-flex
              i.fas.fa-circle.mt-2.me-2(style="font-size: 7px;")
              span Durabilidad: Debe ser resistente a la corrosión y al desgaste.
            li.d-flex
              i.fas.fa-circle.mt-2.me-2(style="font-size: 7px;")
              span Compatibilidad: Debe ser compatible con los estándares de la industria.
            li.d-flex
              i.fas.fa-circle.mt-2.me-2(style="font-size: 7px;")
              span Rendimiento: Debe proporcionar una conexión segura y de alta calidad.
      .col-lg-5.col-md-6.mb-4
        .fondo-color-sistema-m.borde-20.p-4.h-100
          figure.mb-4.ms-3
            img(src="@/assets/curso/temas/6.svg",style="max-width: 85px;")
          h4.mb-4.ms-3 Paneles de Parcheo
          p.fw-bold.mb-0.ms-3 Características:
          ul
            li.d-flex
              i.fas.fa-circle.mt-2.me-2(style="font-size: 7px;")
              span Construcción: Compuestos por módulos de conexión que permiten la interconexión de cables.

            li.d-flex
              i.fas.fa-circle.mt-2.me-2(style="font-size: 7px;")
              span Aplicaciones: Utilizados en salas de telecomunicaciones para gestionar y organizar la conexión de cables.
          
          p.fw-bold.mb-0.ms-3 Calidad:
          ul.mb-0.pb-0
            li.d-flex
              i.fas.fa-circle.mt-2.me-2(style="font-size: 7px;")
              span Capacidad: Debe soportar un número adecuado de conexiones.
            li.d-flex
              i.fas.fa-circle.mt-2.me-2(style="font-size: 7px;")
              span Durabilidad: Debe ser resistente al desgaste y a la corrosión.
            li.d-flex
              i.fas.fa-circle.mt-2.me-2(style="font-size: 7px;")
              span Facilidad de Uso: Debe permitir una fácil instalación y reconfiguración.
      
      .col-lg-5.col-md-6.mb-4
        .fondo-color-sistema-m.borde-20.p-4.h-100
          figure.mb-4.ms-3
            img(src="@/assets/curso/temas/7.svg",style="max-width: 85px;")
          h4.mb-4.ms-3 Gabinetes de Distribución
          p.fw-bold.mb-0.ms-3 Características:
          ul
            li.d-flex
              i.fas.fa-circle.mt-2.me-2(style="font-size: 7px;")
              span Construcción: Compuestos por estructuras metálicas que alojan equipos de red y paneles de parcheo.

            li.d-flex
              i.fas.fa-circle.mt-2.me-2(style="font-size: 7px;")
              span Aplicaciones: Utilizados en salas de telecomunicaciones para organizar y proteger los equipos de red.
          
          p.fw-bold.mb-0.ms-3 Calidad:
          ul.mb-0.pb-0
            li.d-flex
              i.fas.fa-circle.mt-2.me-2(style="font-size: 7px;")
              span Capacidad: Debe soportar un número adecuado de equipos y conexiones.
            li.d-flex
              i.fas.fa-circle.mt-2.me-2(style="font-size: 7px;")
              span Ventilación: Debe proporcionar una adecuada ventilación para evitar el sobrecalentamiento.
            li.d-flex
              i.fas.fa-circle.mt-2.me-2(style="font-size: 7px;")
              span Seguridad: Debe incluir medidas de seguridad para proteger los equipos.

      .col-lg-5.col-md-6.mb-4
        .fondo-color-sistema-l.borde-20.p-4.h-100
          figure.mb-4.ms-3
            img(src="@/assets/curso/temas/8.svg",style="max-width: 85px;")
          h4.mb-4.ms-3 Equipos de Gestión de Cables
          p.fw-bold.mb-0.ms-3 Características:
          ul
            li.d-flex
              i.fas.fa-circle.mt-2.me-2(style="font-size: 7px;")
              span Tipos: Canalizaciones, bandejas de cable, guías de cable, entre otros.

            li.d-flex
              i.fas.fa-circle.mt-2.me-2(style="font-size: 7px;")
              span Aplicaciones: Utilizados para organizar y proteger los cables en la infraestructura de red.
          
          p.fw-bold.mb-0.ms-3 Calidad:
          ul.mb-0.pb-0
            li.d-flex
              i.fas.fa-circle.mt-2.me-2(style="font-size: 7px;")
              span Durabilidad: Debe ser resistente al desgaste y a la corrosión.
            li.d-flex
              i.fas.fa-circle.mt-2.me-2(style="font-size: 7px;")
              span Flexibilidad: Debe permitir una fácil instalación y reconfiguración.
            li.d-flex
              i.fas.fa-circle.mt-2.me-2(style="font-size: 7px;")
              span Protección: Debe proporcionar una adecuada protección contra daños físicos y electromagnéticos.
    
    Separador.pt-5

    #t_1_4.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 1.4 Instalación de pruebas
    
    .fondo-color-sistema-n.p-4.borde-10.mb-4(data-aos="fade-left")
      p.mb-0 La instalación del cableado estructurado debe ser realizada por profesionales certificados para garantizar la calidad y el cumplimiento de las normativas. Este proceso incluye la colocación de los cables, la instalación de los conectores y paneles de parcheo, la configuración de los gabinetes de distribución. Una vez instalado, es fundamental realizar pruebas exhaustivas para verificar la integridad y el rendimiento del sistema.
    
    p.fw-bold.mb-4(data-aos="fade") Estas pruebas incluyen:

    .row
      .col-lg-3(data-aos="fade-right")
        figure.mb-4.mb-lg-0
          img.mx-auto(src="@/assets/curso/temas/9.png",style="max-width: 295px;")
      .col-lg-9(data-aos="fade-left")
        AccordionRED.acordion-personalizado-1.mb-0(tipo="a" clase-tarjeta="tarjeta")
          .div(titulo="Medición de la atenuación")
            .ps-md-5.ms-md-3
              p.mb-4 #[b Definición:] La atenuación es la pérdida de potencia de una señal a medida que se propaga a lo largo de un cable. Se mide en decibelios (dB) y es una medida de cuánto se debilita la señal.
              p.mb-4 #[b Importancia:] La atenuación es clave porque una señal demasiado débil puede resultar en una pérdida de datos o en una transmisión ineficaz. En redes de comunicación, es fundamental mantener la atenuación dentro de límites aceptables para asegurar la integridad de la señal.
              p #[b Método de medición:] Se utiliza un analizador de cable o un medidor de atenuación. La prueba se realiza enviando una señal de prueba a través del cable y midiendo la potencia de la señal en el extremo receptor. La diferencia entre la potencia enviada y la potencia recibida es la atenuación.
          .div(titulo="Pérdida de retorno")
            .ps-md-5.ms-md-3
              p.mb-4 #[b Definición:] La pérdida de retorno es una medida de la cantidad de señal que se refleja de vuelta hacia la fuente debido a desajustes de impedancia en el cable. Se mide en decibelios (dB).
              p.mb-4 #[b Importancia:] Una alta pérdida de retorno puede indicar problemas en el cableado, como conexiones defectuosas, daños en el cable o terminaciones incorrectas. Esto puede afectar negativamente el rendimiento de la red.
              p #[b Método de medición:] Se utiliza un analizador de cable o un medidor de pérdida de retorno. La prueba se realiza enviando una señal a través del cable y midiendo la cantidad de señal que se refleja de vuelta. Una pérdida de retorno alta indica que hay problemas en el cableado.
          .div(titulo="Diafonía")
            .ps-md-5.ms-md-3
              p.mb-4 #[b Definición:] La diafonía es la interferencia que ocurre cuando una señal en un par de cables induce una señal no deseada en otro par de cables adyacente. Se mide en decibelios (dB).
              p.mb-4 #[b Importancia:] La diafonía puede causar interferencias y reducir la calidad de la señal, especialmente en redes de alta velocidad. Es importantel minimizar la diafonía para asegurar una transmisión de datos eficiente y sin errores.
              p #[b Método de medición:] Se utiliza un analizador de cable o un medidor de diafonía. La prueba se realiza enviando una señal a través de un par de cables y midiendo la señal inducida en otro par de cables adyacente. Una alta diafonía indica que hay problemas en el cableado.
          .div(titulo="Longitud de los cables")
            .ps-md-5.ms-md-3
              p.mb-4 #[b Definición:] La longitud de los cables es simplemente la medida de la distancia física entre los extremos del cable.
              p.mb-4 #[b Importancia:] La longitud del cable es un factor crítico en el diseño y la implementación de redes. Cables demasiado largos pueden introducir atenuación excesiva y otros problemas de rendimiento. Además, conocer la longitud del cable es necesario para la planificación y la gestión de la infraestructura de la red.
              p #[b Método de medición:] Se utiliza un medidor de longitud de cable o un analizador de cable. La prueba se realiza enviando una señal a través del cable y midiendo el tiempo que tarda en reflejarse de vuelta. La longitud del cable se calcula a partir de este tiempo.
      
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
