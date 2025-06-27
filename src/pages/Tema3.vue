<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Seguridad en instalaciones
    
    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="fade")
      h2 3.1 Normativa de seguridad
    
    .row
      .col-lg-8(data-aos="fade-right")
        .fondo-color-sistema-k.p-4.h-100.align-content-center
          p.mb-0 La normativa de seguridad establece los estándares y regulaciones que deben seguirse durante la instalación de un sistema de cableado estructurado. Estas normativas son indispensables para garantizar la seguridad del personal, la integridad del sistema y el cumplimiento de las leyes y regulaciones locales e internacionales. A continuación, se despliegan los aspectos clave de la normativa de seguridad.

      .col-lg-4(data-aos="fade-left")
        figure.mb-4.mb-lg-0
          img.mx-auto(src="@/assets/curso/temas/24.png",style="max-width: 400px;")

    Separador

    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.2 Directrices sobre el uso de equipos
    
    p.mb-4(data-aos="fade-right") Las directrices sobre el uso de equipos son fundamentales para asegurar que los dispositivos y herramientas utilizados en la instalación de cableado estructurado sean seguros y adecuados. Estas directrices incluyen:

    p.mb-4(data-aos="fade-right") #[b Certificación de equipos]: Los equipos deben estar certificados por organismos reconocidos para garantizar que cumplen con los estándares de seguridad.

    .row.align-items-center.mb-1
      .col-lg-4(data-aos="fade-right")
        figure.mb-4.mb-lg-0
          img.mx-auto(src="@/assets/curso/temas/25.png",style="max-width: 400px;")
      .col-lg-8(data-aos="fade-left")
        .d-flex.borde-p-1.mb-3
          div.me-2
            span.fondo-color-acento-contenido.d-inline-flex.fw-bold.text-white.p-2.py-0 1
          p.mb-3 #[b Mantenimiento regular]: Los equipos deben ser inspeccionados y mantenidos regularmente para asegurar su correcto funcionamiento y prevenir fallos.
        .d-flex.borde-p-1.mb-3
          div.me-2
            span.fondo-color-acento-contenido.d-inline-flex.fw-bold.text-white.p-2.py-0 2
          p.mb-3 #[b Uso adecuado]: El personal debe estar capacitado en el uso correcto de los equipos para evitar accidentes y daños.
        .d-flex
          div.me-2
            span.fondo-color-acento-contenido.d-inline-flex.fw-bold.text-white.p-2.py-0 2
          p.mb-0 #[b Protección contra sobrecargas]: Los equipos deben estar protegidos contra sobrecargas eléctricas mediante el uso de fusibles y disyuntores adecuados.
    
    Separador

    #t_3_3.titulo-segundo.color-acento-contenido(data-aos="fade-up")
      h2 3.3 Seguridad eléctrica
    
    p.mb-4(data-aos="fade-up") La seguridad eléctrica es un aspecto crítico en la instalación de sistemas de cableado estructurado. Las normativas de seguridad eléctrica incluyen:

    .row
      .col-lg-6.mb-4(data-aos="fade-right")
        .fondo-color-sistema-l.p-4.borde-10.h-100.align-content-center
          p.mb-0 #[b Aislamiento eléctrico]: los cables y equipos deben estar adecuadamente aislados para prevenir choques eléctricos.
      .col-lg-6.mb-4(data-aos="fade-up")
        .fondo-color-sistema-i.p-4.borde-10.h-100.align-content-center
          p.mb-0 #[b Puesta a tierra]: los sistemas deben estar correctamente puestos a tierra para proteger contra descargas eléctricas y para disipar la electricidad estática.
      .col-lg-6.mb-4(data-aos="fade-down")
        .fondo-color-sistema-i.p-4.borde-10.h-100.align-content-center
          p.mb-0 #[b Protección contra descargas eléctricas]: los trabajadores deben usar equipos de protección personal (EPP) adecuados, como guantes aislantes y calzado de seguridad.
      .col-lg-6.mb-4(data-aos="fade-left")
        .fondo-color-sistema-l.p-4.borde-10.h-100.align-content-center
          p.mb-0 #[b Marcado y señalización]: los cables y equipos deben estar claramente marcados y señalizados para identificar posibles riesgos eléctricos.
    
    Separador.pt-4

    #t_3_4.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 3.4 Protección contra incendios
    
    p.mb-5(data-aos="fade-left") La protección contra incendios se debe tener presente para garantizar la seguridad en las instalaciones de cableado estructurado. Las normativas en este ámbito incluyen:

    .row.mb-1
      .col-md-6.col-xl.mb-4.mb-xl-0(data-aos="fade-right")
        .tarjeta-numerada.color-primario.p-3.ps-5.h-100
          .tarjeta-numerada__numero
            .h2 1
          h4.mb-1 Materiales ignífugos
          p.mb-0 Los cables y otros materiales deben ser ignífugos para reducir el riesgo de propagación de incendios.
      .col-md-6.col-xl.mb-4.mb-xl-0(data-aos="fade-up")
        .tarjeta-numerada.color-secundario.p-3.ps-5.h-100
          .tarjeta-numerada__numero
            .h2 2
          h4.mb-1 Sistemas de detección y extinción de incendios
          p.mb-0 Las instalaciones deben estar equipadas con sistemas de detección y extinción de incendios, como detectores de humo y extintores.
      .col-md-6.col-xl.mb-4.mb-xl-0(data-aos="fade-down")
        .tarjeta-numerada.color-acento-contenido.p-3.ps-5.h-100
          .tarjeta-numerada__numero
            .h2 3
          h4.mb-1 Plan de evacuación
          p.mb-0 Debe haber un plan de evacuación claro y bien comunicado en caso de incendio, y el personal debe estar capacitado en los procedimientos de evacuación.
      .col-md-6.col-xl.mb-4.mb-xl-0(data-aos="fade-left")
        .tarjeta-numerada.color-acento-botones.p-3.ps-5.h-100
          .tarjeta-numerada__numero
            .h2 4
          h4.mb-1 Mantenimiento de sistemas de protección
          p.mb-0 Los sistemas de detección y extinción de incendios deben ser inspeccionados y mantenidos regularmente para asegurar su funcionamiento correcto.
    
    Separador

    #t_3_5.titulo-segundo.color-acento-contenido(data-aos="fade-up")
      h2 3.5 Organizaciones y estándares
    
    p.mb-4(data-aos="fade-down") Varias organizaciones y estándares proporcionan normativas que ayudan a garantizar la seguridad en las instalaciones de cableado estructurado:

    TabsC.color-acento-contenido.tabs-c-p-1.mb-1(data-aos="flip-up")
      .row.justify-content-center.py-5.px-4.px-lg-0(titulo="ISO")
        .col-lg-5.mb-4.mb-lg-0
          p.fw-bold.mb-4 ISO #[em (International Organization for Standardization)]
          p.mb-0 La ISO proporciona estándares internacionales que cubren diversos aspectos de la seguridad y la calidad en la instalación de sistemas de cableado estructurado. Por ejemplo, la norma ISO/IEC 11801 establece los requisitos generales para la instalación de cableado en edificios. 
        .col-lg-5
          figure
            img.mx-auto(src="@/assets/curso/temas/26.png",style="max-width: 505px;")
      .row.justify-content-center.py-5.px-4.px-lg-0(titulo="NFPA")
        .col-lg-5.mb-4.mb-lg-0
          p.fw-bold.mb-4 NFPA #[em (National Fire Protection Association)]
          p.mb-0 La NFPA proporciona normativas relacionadas con la protección contra incendios. El NFPA 70, también conocido como el Código Eléctrico Nacional (NEC), establece los requisitos para la instalación segura de sistemas eléctricos.
        .col-lg-5
          figure
            img.mx-auto(src="@/assets/curso/temas/27.png",style="max-width: 505px;")
      .row.justify-content-center.py-5.px-4.px-lg-0(titulo="TIA/EIA")
        .col-lg-5.mb-4.mb-lg-0
          p.fw-bold.mb-4 TIA/EIA #[em (Telecommunications Industry Association/Electronic Industries Alliance)]
          p.mb-0 La TIA/EIA proporciona estándares específicos para la industria de las telecomunicaciones,  incluyendo la norma TIA/EIA-568, que establece los requisitos para la instalación de cableado estructurado.
        .col-lg-5
          figure
            img.mx-auto(src="@/assets/curso/temas/28.png",style="max-width: 505px;")

    Separador

    #t_3_6.titulo-segundo.color-acento-contenido(data-aos="fade")
      h2 3.6 Cumplimiento y auditorías 

    p.mb-4(data-aos="fade") El cumplimiento de las normativas de seguridad es primordial para garantizar la seguridad en las instalaciones de cableado estructurado. Las auditorías regulares son una herramienta clave para asegurar el cumplimiento de estas normativas. Las auditorías incluyen:

    
    .fondo-personalizado-1.size-full.med.f2
      .fondo-personalizado-1__contenido.pb-5
        .row.justify-content-center.pb-5
          .col-lg-10
            AccordionRED.acordion-personalizado-1.mt-4.mb-5.pb-5(tipo="a" clase-tarjeta="tarjeta" data-aos="zoom-in-out")
              .div(titulo="Inspecciones de seguridad")
                .ps-md-5.ms-md-3
                  p.mb-4 Inspecciones periódicas para verificar que los equipos y sistemas cumplen con los estándares de seguridad.
              .div(titulo="Revisión de procedimientos")
                .ps-md-5.ms-md-3
                  p.mb-4 Revisión de los procedimientos de seguridad para asegurar que están actualizados y se siguen correctamente.
              .div(titulo="Capacitación del personal")
                .ps-md-5.ms-md-3
                  p.mb-4 Capacitación continua del personal en las normativas de seguridad y en los procedimientos de emergencia.
              .div(titulo="Documentación")
                .ps-md-5.ms-md-3
                  p.mb-4 Mantenimiento de registros detallados de todas las actividades relacionadas con la seguridad, incluyendo inspecciones, capacitaciones e incidentes.


  
</template>

<script>
export default {
  name: 'Tema3',
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
