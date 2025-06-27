<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Gestión de riesgos en el cableado estructurado
    
    .row.align-items-center.mb-1
      .col-lg-10(data-aos="fade-right")
        .fondo-color-sistema-k.p-4
          p.mb-0 La gestión de riesgos en el cableado estructurado es un componente para asegurar la integridad, el rendimiento y la continuidad de la infraestructura de telecomunicaciones. En un entorno donde la conectividad y la comunicación son importantes para el funcionamiento de cualquier organización, identificar, evaluar y mitigar los riesgos potenciales es fundamental para proteger la red contra fallos y amenazas. Este proceso implica reconocer los posibles riesgos, como fallos en los componentes, daños físicos, interferencias electromagnéticas, incendios, inundaciones y actividades de ciberseguridad, y desarrollar estrategias efectivas para minimizar su impacto. La gestión de riesgos no solo garantiza la disponibilidad y la seguridad de la red, sino que también contribuye a la eficiencia operativa y a la toma de decisiones informadas en la organización.
      .col-lg-2.order-first.order-lg-last(data-aos="fade-left")
        figure.mb-4.mb-lg-0
          img.mx-auto(src="@/assets/curso/temas/10.png",style="max-width: 190px;")
    
    Separador

    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.1 Identificación de riesgos
    
    p.mb-4(data-aos="fade-left") La identificación de riesgos es el primer paso en la gestión de riesgos del cableado estructurado. Este proceso implica reconocer y catalogar los posibles riesgos que pueden afectar la integridad y el rendimiento del sistema. A continuación, se describen algunos de los riesgos más comunes:

    .fondo-personalizado-1.f1
      .fondo-personalizado-1__contenido
        .row
          .col-lg-4(data-aos="fade-right")
            figure.mb-4.mb-lg-0
              img.mx-auto(src="@/assets/curso/temas/12.png",style="max-width: 295px;")
          .col-lg-8(data-aos="fade-left")
            CarouselCard.slider-personalizado-2(columnas="col-lg-6 py-4",data-aos="flip-up")
              .sombra-p-1.p-4.borde-14.h-100.bg-white
                figure.mb-3
                  img.mx-auto(src="@/assets/curso/temas/13.svg",style="max-width: 91px;")
                .fondo-color-sistema-l.mb-4.d-flex.align-items-center.justify-content-center.text-center
                  h4.mb-0.p-1 Fallos en los componentes
                p.text-center Los componentes del cableado estructurado, como cables, conectores y paneles de parcheo, pueden fallar debido a desgaste, defectos de fabricación o mal manejo. Estos fallos pueden interrumpir la transmisión de datos y afectar la disponibilidad de la red.
              .sombra-p-1.p-4.borde-14.h-100.bg-white
                figure.mb-3
                  img.mx-auto(src="@/assets/curso/temas/14.svg",style="max-width: 91px;")
                .fondo-color-sistema-l.mb-4.d-flex.align-items-center.justify-content-center.text-center
                  h4.mb-0.p-1 Daños físicos
                p.text-center Los cables y otros componentes pueden sufrir daños físicos debido a la manipulación inadecuada, accidentes o actividades de construcción. Estos daños pueden causar interrupciones en el servicio y requerir reparaciones costosas.
              .sombra-p-1.p-4.borde-14.h-100.bg-white
                figure.mb-3
                  img.mx-auto(src="@/assets/curso/temas/15.svg",style="max-width: 91px;")
                .fondo-color-sistema-l.mb-4.d-flex.align-items-center.justify-content-center.text-center
                  h4.mb-0.p-1 Interferencias electromagnéticas
                p.text-center Las interferencias electromagnéticas (EMI) pueden afectar la calidad de la señal en los cables de cobre. Fuentes de EMI incluyen equipos eléctricos, motores y otros dispositivos electrónicos.
              .sombra-p-1.p-4.borde-14.h-100.bg-white
                figure.mb-3
                  img.mx-auto(src="@/assets/curso/temas/16.svg",style="max-width: 91px;")
                .fondo-color-sistema-l.mb-4.d-flex.align-items-center.justify-content-center.text-center
                  h4.mb-0.p-1 Incendios
                p.text-center Los incendios pueden causar daños catastróficos a la infraestructura de cableado. Los cables y otros componentes pueden ser destruidos, lo que resulta en la pérdida total de la red. La protección contra incendios se debe tener presente para mitigar este riesgo.
              .sombra-p-1.p-4.borde-14.h-100.bg-white
                figure.mb-3
                  img.mx-auto(src="@/assets/curso/temas/17.svg",style="max-width: 91px;")
                .fondo-color-sistema-l.mb-4.d-flex.align-items-center.justify-content-center.text-center
                  h4.mb-0.p-1 Inundaciones
                p.text-center Las inundaciones pueden dañar los cables y otros componentes del sistema de cableado estructurado. El agua puede causar cortocircuitos y corrosión, lo que afecta la integridad y el rendimiento del sistema.
              .sombra-p-1.p-4.borde-14.h-100.bg-white
                figure.mb-3
                  img.mx-auto(src="@/assets/curso/temas/18.svg",style="max-width: 91px;")
                .fondo-color-sistema-l.mb-4.d-flex.align-items-center.justify-content-center.text-center
                  h4.mb-0.p-1 Actividades de ciberseguridad
                p.text-center Las amenazas de ciberseguridad, como el acceso no autorizado y los ataques de denegación de servicio (DoS), pueden comprometer la seguridad de la red. Es importante implementar medidas de seguridad para proteger la infraestructura de cableado contra estas amenazas.
    
    Separador.pt-4

    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.2 Análisis de impacto
    
    .fondo-color-sistema-k.p-4(data-aos="fade-up")
      p.mb-0 Una vez identificados los riesgos, es necesario analizar su impacto potencial. Este análisis evalúa la probabilidad de que ocurra un riesgo y el grado de afectación que podría tener en el proyecto. El impacto puede ser medido en términos de costos, tiempo, calidad y seguridad. Herramientas como el análisis de riesgos cualitativo y cuantitativo ayudan a determinar la prioridad de los riesgos y a tomar decisiones informadas sobre cómo abordarlos.

    Separador

    #t_2_3.titulo-segundo.color-acento-contenido(data-aos="fade-up")
      h2 2.3 Evaluación de riesgos
    
    p.mb-5(data-aos="fade-left") Una vez identificados, los riesgos deben ser evaluados para determinar su impacto potencial y probabilidad de ocurrencia. Esto incluye:

    .row
      .col-lg-4.mb-4(data-aos="fade-right")
        .fondo-personalizado-2.p-4.ps-md-0.h-100.align-content-center
          .row.align-items-center
            .col-md-auto
              figure.mb-4.mb-md-0
                img.mx-auto(src="@/assets/curso/temas/19.svg",style="max-width: 74px;")
            .col
              p.mb-0 #[b Análisis de impacto]: Evaluar el impacto de cada riesgo en la red.
      .col-lg-4.mb-4(data-aos="fade-down")
        .fondo-personalizado-2.p-4.ps-md-0.h-100.align-content-center
          .row.align-items-center
            .col-md-auto
              figure.mb-4.mb-md-0
                img.mx-auto(src="@/assets/curso/temas/20.svg",style="max-width: 74px;")
            .col
              p.mb-0 #[b Probabilidad de ocurrencia]: Determinar la probabilidad de que cada riesgo ocurra.
      .col-lg-4.mb-4(data-aos="fade-left")
        .fondo-personalizado-2.p-4.ps-md-0.h-100.align-content-center
          .row.align-items-center
            .col-md-auto
              figure.mb-4.mb-md-0
                img.mx-auto(src="@/assets/curso/temas/21.svg",style="max-width: 74px;")
            .col
              p.mb-0 #[b Priorización]: Priorizar los riesgos según su impacto y probabilidad.
    
    Separador.pt-4

    #t_2_4.titulo-segundo.color-acento-contenido(data-aos="fade")
      h2 2.4 Mitigación de riesgos y plan de contingencia
    
    .row.align-items-center.mb-4
      .col-lg-10(data-aos="fade-right")
        .fondo-color-sistema-k.p-4.py-3
          p.mb-0 Las estrategias de mitigación son acciones planificadas para reducir la probabilidad de que ocurra un riesgo o para minimizar su impacto. Estas estrategias pueden incluir la implementación de redundancias en el sistema, la capacitación del personal, la adquisición de seguros, y la planificación de contingencias. La mitigación de riesgos es un proceso continuo que debe ser revisado y actualizado a lo largo del proyecto. Mientras que el plan de contingencia se usa para manejar los riesgos que no pueden ser completamente mitigados.
      .col-lg-2.order-first.order-lg-last(data-aos="fade-left")
        figure.mb-4.mb-lg-0
          img.mx-auto(src="@/assets/curso/temas/22.png",style="max-width: 190px;")
  
    p.mb-4(data-aos="fade-right") La siguiente figura permite comparar los dos recursos:

    .row(data-aos="flip-up")
      .col-lg-2
      .col-lg-7
        .titulo-sexto.color-acento-contenido
          p.mb-0 #[b Figura 1.] Mitigación de riesgos y plan de contingencia
        
        figure.mb-4.mb-lg-0
          img.mx-auto(src="@/assets/curso/temas/23.svg",alt="La Figura 1 se denomina «Mitigación de riesgos y plan de contingencia» y presenta una comparación entre las características de pasos que se deben tener en cuenta durante el proceso que se desarrolla en la gestión de riesgos en cable estructurado.")
        figcaption.mt-4 #[b Fuente:] OIT, 2024.


</template>

<script>
export default {
  name: 'Tema2',
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
