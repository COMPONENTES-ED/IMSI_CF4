<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 4
      h1 Monitoreo y gestión
    
    #t_4_1.titulo-segundo.color-acento-contenido
      h2 4.1 Gestión de residuos
    
    .row.align-items-center.mb-1
      .col-lg-10(data-aos="fade-right")
        .fondo-color-sistema-k.p-4
          p.mb-0 La gestión de residuos en la implementación de un sistema de cableado estructurado implica la correcta disposición de materiales sobrantes y desechos generados durante el proyecto. Esto incluye la clasificación de residuos, el reciclaje de materiales reutilizables, y la disposición segura de residuos peligrosos. La gestión de residuos ayuda a minimizar el impacto ambiental y a cumplir con las regulaciones locales y nacionales.
      .col-lg-2.order-first.order-lg-last(data-aos="fade-left")
        figure.mb-4.mb-lg-0
          img.mx-auto(src="@/assets/curso/temas/30.png",style="max-width: 190px;")
    
    Separador

    #t_4_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 4.2 Impacto ambiental
    
    .row.mb-1
      .col-lg-8(data-aos="fade-right")
        p.mb-0 El impacto ambiental de la implementación de un sistema de cableado estructurado debe ser evaluado y gestionado adecuadamente. Esto incluye la consideración de factores como el uso de energía, la emisión de gases de efecto invernadero, y la contaminación del suelo y el agua. La implementación de prácticas sostenibles y el uso de materiales ecológicos pueden ayudar a reducir el impacto ambiental del proyecto.
      .col-lg-4.order-first.order-lg-last(data-aos="fade-left")
        figure.mb-4.mb-lg-0
          img.mx-auto(src="@/assets/curso/temas/31.png",style="max-width: 400px;")
    
    Separador

    #t_4_3.titulo-segundo.color-acento-contenido(data-aos="fade-up")
      h2 4.3 Certificaciones ambientales
    
    p.mb-5(data-aos="fade-up") Las certificaciones ambientales son reconocimientos que indican que un proyecto cumple con ciertos estándares de sostenibilidad y responsabilidad ambiental. Estas certificaciones son otorgadas por organizaciones internacionales y nacionales que evalúan diversos aspectos del proyecto, incluyendo el uso eficiente de recursos, la reducción de emisiones, y la gestión de residuos. Obtener estas certificaciones no solo mejora la reputación del proyecto, también demuestra un compromiso genuino con la sostenibilidad y la protección del medio ambiente. A continuación, se profundiza en algunas de las certificaciones ambientales más reconocidas y sus criterios de evaluación.

    .rounded-pill.p-2.d-inline-block.px-3(style="background-color: #692cb7 ").mb-4
      h3.text-white(data-aos="fade-left").mb-0.mx-3 LEED (#[em Leadership in Energy and Environmental Design])

    p.mb-4(data-aos="fade-down") LEED es una certificación desarrollada por el U.S. #[em Green Building Council] (USGBC) que evalúa el diseño, construcción, operación y mantenimiento de edificios ecológicos. Los criterios de evaluación de LEED incluyen:

    .row.align-items-center.mb-5
      .col-lg-3(data-aos="fade-right")
        figure.mb-4.mb-lg-0
          img.mx-auto(src="@/assets/curso/temas/32.png",style="max-width: 295px;")
      .col-lg-9(data-aos="fade-left")
        AccordionRED.acordion-personalizado-1(tipo="a" clase-tarjeta="tarjeta" data-aos="zoom-in-out")
          .div(titulo="Uso eficiente de recursos")
            .ps-md-5.ms-md-3
              p.mb-4 Evalúa el uso eficiente de energía, agua y otros recursos naturales. Esto incluye la implementación de tecnologías de energía renovable, sistemas de iluminación eficientes y estrategias de conservación de agua.
          .div(titulo="Reducción de emisiones")
            .ps-md-5.ms-md-3
              p.mb-4 Considera las medidas tomadas para reducir las emisiones de gases de efecto invernadero, como la implementación de sistemas de transporte sostenible y la reducción de la dependencia de combustibles fósiles.
          .div(titulo="Gestión de residuos")
            .ps-md-5.ms-md-3
              p.mb-4 Evalúa las prácticas de gestión de residuos, incluyendo la reducción, reutilización y reciclaje de materiales de construcción y residuos operativos.
          .div(titulo="Calidad del aire interior")
            .ps-md-5.ms-md-3
              p.mb-4 Considera la calidad del aire interior mediante la implementación de sistemas de ventilación adecuados y el uso de materiales de construcción con bajas emisiones de compuestos orgánicos volátiles (COV).
          .div(titulo="Sostenibilidad del sitio")
            .ps-md-5.ms-md-3
              p.mb-4 Evalúa la selección del sitio de construcción, considerando factores como la protección de áreas naturales, la reducción del impacto en el entorno y la promoción de la biodiversidad.
    .rounded-pill.p-2.d-inline-block.px-3(style="background-color: #692cb7 ").mb-4
      h3.text-white(data-aos="fade-left").mb-0.mx-3 BREEAM (#[em Building Research Establishment Environmental Assessment Method])

    p.mb-4 BREEAM es una certificación desarrollada por el #[em Building Research Establishment] (BRE) en el Reino Unido que evalúa la sostenibilidad de los edificios en todas sus etapas, desde el diseño hasta la operación. Los criterios de evaluación de BREEAM incluyen:

    .fondo-personalizado-1.f3.mb-5(data-aos="fade-up")
      .fondo-personalizado-1__contenido.py-5
        .bg-white.p-4.borde-20
          CarouselRED.slider-personalizado-1.pt-lg-3(tipo="b")
            .row.justify-content-center.pt-2
              .col-lg-6.mb-4.mb-lg-0
                h4.mb-4 Gestión
                p.mb-0 Evalúa la gestión del proyecto, incluyendo la planificación, la implementación de políticas ambientales y la capacitación del personal.
              .col-lg-5
                figure
                  img.mx-auto(src="@/assets/curso/temas/33.png",style="max-width: 400px;")
            .row.justify-content-center.pt-2
              .col-lg-6.mb-4.mb-lg-0
                h4.mb-4 Salud y bienestar
                p.mb-0 Considera el impacto del edificio en la salud y el bienestar de sus ocupantes, incluyendo la calidad del aire interior, la iluminación natural y el confort térmico.
              .col-lg-5
                figure
                  img.mx-auto(src="@/assets/curso/temas/35.png",style="max-width: 400px;")
            .row.justify-content-center.pt-2
              .col-lg-6.mb-4.mb-lg-0
                h4.mb-4 Energía
                p.mb-0 Evalúa el uso eficiente de energía mediante la implementación de tecnologías de energía renovable, sistemas de iluminación eficientes y estrategias de conservación de energía.
              .col-lg-5
                figure
                  img.mx-auto(src="@/assets/curso/temas/36.png",style="max-width: 400px;")
            .row.justify-content-center.pt-2
              .col-lg-6.mb-4.mb-lg-0
                h4.mb-4 Transporte
                p.mb-0 Considera las medidas tomadas para promover el transporte sostenible, incluyendo la accesibilidad a transporte público, la infraestructura para bicicletas y la reducción de la dependencia de vehículos privados.
              .col-lg-5
                figure
                  img.mx-auto(src="@/assets/curso/temas/37.png",style="max-width: 400px;")
            .row.justify-content-center.pt-2
              .col-lg-6.mb-4.mb-lg-0
                h4.mb-4 Agua
                p.mb-0 Evalúa el uso eficiente del agua mediante la implementación de sistemas de conservación de agua y la gestión de aguas pluviales.
              .col-lg-5
                figure
                  img.mx-auto(src="@/assets/curso/temas/38.png",style="max-width: 400px;")
            .row.justify-content-center.pt-2
              .col-lg-6.mb-4.mb-lg-0
                h4.mb-4 Materiales
                p.mb-0 Considera el uso de materiales sostenibles y la gestión de residuos de construcción.
              .col-lg-5
                figure
                  img.mx-auto(src="@/assets/curso/temas/39.png",style="max-width: 400px;")
            .row.justify-content-center.pt-2
              .col-lg-6.mb-4.mb-lg-0
                h4.mb-4 Residuos
                p.mb-0 Evalúa las prácticas de gestión de residuos, incluyendo la reducción, reutilización y reciclaje de materiales de construcción y residuos operativos.
              .col-lg-5
                figure
                  img.mx-auto(src="@/assets/curso/temas/40.png",style="max-width: 400px;")
            .row.justify-content-center.pt-2
              .col-lg-6.mb-4.mb-lg-0
                h4.mb-4 Uso del suelo y ecología
                p.mb-0 Considera el impacto del edificio en el entorno natural, incluyendo la protección de áreas naturales y la promoción de la biodiversidad.
              .col-lg-5
                figure
                  img.mx-auto(src="@/assets/curso/temas/41.png",style="max-width: 400px;")
            .row.justify-content-center.pt-2
              .col-lg-6.mb-4.mb-lg-0
                h4.mb-4 Contaminación
                p.mb-0 Evalúa las medidas tomadas para reducir la contaminación, incluyendo la gestión de emisiones y la prevención de la contaminación del suelo y el agua.
              .col-lg-5
                figure
                  img.mx-auto(src="@/assets/curso/temas/42.png",style="max-width: 400px;")
    
    .rounded-pill.p-2.d-inline-block.px-3(style="background-color: #692cb7 ").mb-4
      h3.text-white(data-aos="fade-left").mb-0.mx-3 Otras certificaciones ambientales

    p.mb-4(data-aos="fade-left") Además de LEED y BREEAM, existen otras certificaciones ambientales que evalúan la sostenibilidad de los proyectos de construcción y cableado estructurado:

    .row.justify-content-center.mb-1(data-aos="flip-up")
      .col-lg-4.col-md-6.mb-4
        .borde-22.overflow-hidden
          .crd_hover_txt(@mouseover="mostrarIndicador = false")
            .crd_hover_txt--img
              figure
                img(src="@/assets/curso/temas/43.png")
            .indicador--click(v-if="mostrarIndicador")
            .crd_hover_txt--body
              h4.mb-4.text-center #[em Green Star]
              p.mb-0.text-center Desarrollada por el #[em Green Building Council of Australia (GBCA), Green Star] evalúa la sostenibilidad de los edificios en Australia y Nueva Zelanda. Los criterios de evaluación incluyen el uso eficiente de recursos, la reducción de emisiones y la gestión de residuos.
      .col-lg-4.col-md-6.mb-4
        .borde-22.overflow-hidden
          .crd_hover_txt
            .crd_hover_txt--img
              figure
                img(src="@/assets/curso/temas/44.png")
            .crd_hover_txt--body
              h4.mb-4.text-center DGNB #[em (Deutsche Gesellschaft für Nachhaltiges Bauen)]
              p.mb-0.text-center Desarrollada en Alemania, DGNB evalúa la sostenibilidad de los edificios en todas sus etapas, desde el diseño hasta la operación. Los criterios de evaluación incluyen la gestión del proyecto, la calidad del aire interior, el uso eficiente de energía y la gestión de residuos.
      .col-lg-4.col-md-6.mb-4
        .borde-22.overflow-hidden
          .crd_hover_txt
            .crd_hover_txt--img
              figure
                img(src="@/assets/curso/temas/45.png")
            .crd_hover_txt--body
              h4.mb-4.text-center #[em WELL Building Standard]
              p.mb-0.text-center Desarrollada por el #[em International WELL Building Institute] (IWBI), #[em WELL Building Standard] se centra en la salud y el bienestar de los ocupantes de los edificios. Los criterios de evaluación incluyen la calidad del aire interior, la iluminación natural, el confort térmico y la promoción de estilos de vida saludables.

    .rounded-pill.p-2.d-inline-block.px-3(style="background-color: #692cb7 ").mb-4
      h3.text-white(data-aos="fade-left").mb-0.mx-3 Beneficios de las certificaciones ambientales

    p.mb-4(data-aos="fade-left") Obtener certificaciones ambientales como LEED, BREEAM y otras ofrece numerosos beneficios, incluyendo:
    
    .fondo-personalizado-1.f1.p-5
      

      .fondo-personalizado-1__contenido.pb-5
        .row.align-items-center.pb-5
          .col-lg-9
            .fondo-slyde.p-lg-5.p-1
              .bg-white.p-5.icon-slyder
                CarouselCard(columnas="col-11",data-aos="flip-up").mneg
                  .row.align-items-center.px-5.justify-content-center
                    .col-lg-5.mb-lg-0.mb-3.col-8
                      figure.mb-4.mb-lg-0
                        img.mx-auto(src="@/assets/curso/temas/47.svg",style="max-width: 295px;")
                    .col-lg-7
                      h5.mb-4 Mejora de la reputación
                      p.mb-0 Las certificaciones ambientales demuestran un compromiso con la sostenibilidad y la responsabilidad ambiental, mejorando la reputación del proyecto y de la organización.
                  .row.align-items-center.justify-content-center
                    .col-lg-5.mb-lg-0.mb-3.col-8
                      figure.mb-4.mb-lg-0
                        img.mx-auto(src="@/assets/curso/temas/47.svg",style="max-width: 295px;")
                    .col-lg-7
                      h5.mb-4 Ahorro de costos
                      p.mb-0 La implementación de prácticas sostenibles puede resultar en ahorros significativos en costos operativos, incluyendo la reducción de facturas de energía y agua.
                  .row.align-items-center.justify-content-center
                    .col-lg-5.mb-lg-0.mb-3.col-8
                      figure.mb-4.mb-lg-0
                        img.mx-auto(src="@/assets/curso/temas/47.svg",style="max-width: 295px;")
                    .col-lg-7
                      h5.mb-4 Aumento del valor del edificio
                      p.mb-0 Los edificios certificados suelen tener un mayor valor de mercado y son más atractivos para inquilinos y compradores.
                  .row.align-items-center.justify-content-center
                    .col-lg-5.mb-lg-0.mb-3.col-8
                      figure.mb-4.mb-lg-0
                        img.mx-auto(src="@/assets/curso/temas/47.svg",style="max-width: 295px;")
                    .col-lg-5.mb-lg-0.mb-3.col-8
                      h5.mb-4 Cumplimiento de regulaciones
                      p.mb-0 Las certificaciones ambientales ayudan a cumplir con las regulaciones locales e internacionales sobre sostenibilidad y protección del medio ambiente.
                  .row.align-items-center.justify-content-center
                    .col-lg-5.mb-lg-0.mb-3.col-8
                      figure.mb-4.mb-lg-0
                        img.mx-auto(src="@/assets/curso/temas/47.svg",style="max-width: 295px;")
                    .col-lg-7
                      h5.mb-4 Promoción de la salud y el bienestar
                      p.mb-0 Las certificaciones que se centran en la salud y el bienestar de los ocupantes, como #[em WELL Building Standard], pueden mejorar la productividad y la satisfacción de los empleados.

          .col-lg-3.order-first.order-lg-last(data-aos="fade-left")
            figure.mb-4.mb-lg-0
              img.mx-auto(src="@/assets/curso/temas/46.png",style="max-width: 295px;")


</template>

<script>
export default {
  name: 'Tema4',
  data: () => ({
    mostrarIndicador: true,
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
