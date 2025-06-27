<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 5
      h1 Documentación y control

    #t_5_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 5.1 Registros de seguridad
    
    .row.align-items-center.mb-1
      .col-lg-9(data-aos="fade-right")
        .fondo-color-sistema-i.p-4
          p.mb-0 Los registros de seguridad son documentos que registran todas las actividades relacionadas con la seguridad durante la implementación de un sistema de cableado estructurado. Estos registros incluyen informes de incidentes, inspecciones de seguridad, y capacitaciones del personal. Mantener registros precisos y actualizados son necesarios para la gestión de riesgos y para cumplir con las normativas de seguridad.
      .col-lg-3.order-first.order-lg-last(data-aos="fade-left")
        figure.mb-4.mb-lg-0
          img.mx-auto(src="@/assets/curso/temas/48.png",style="max-width: 295px;")
    
    Separador

    #t_5_2.titulo-segundo.color-acento-contenido(data-aos="fade-up")
      h2 5.2 Auditorías y mejora continua
    
    .row.align-items-center.mb-1
      .col-lg-4(data-aos="fade-right")
        figure.mb-4.mb-lg-0
          img.mx-auto(src="@/assets/curso/temas/49.png",style="max-width: 400px;")
      .col-lg-8(data-aos="fade-left")
        p.mb-0 Las auditorías son evaluaciones periódicas que se realizan para verificar el cumplimiento de las normativas de seguridad y los procedimientos establecidos. Las auditorías pueden identificar áreas de mejora y proporcionar recomendaciones para mejorar la seguridad y la eficiencia del proyecto. La mejora continua es un proceso iterativo que implica la implementación de cambios basados en los resultados de las auditorías y en el #[em feedback] del personal. Este enfoque ayuda a mantener altos estándares de seguridad y calidad en la implementación de sistemas de cableado estructurado.
    
    Separador
    
    #t_5_3.titulo-segundo.color-acento-contenido(data-aos="fade-down")
      h2 5.3 Conclusiones
    
    .row.align-items-center.mb-4
      .col-lg-8(data-aos="fade-right")
        p.mb-4 El cableado estructurado es fundamental para la creación de una infraestructura de red robusta y escalable. Un diseño adecuado del cableado estructurado asegura la flexibilidad, la facilidad de gestión y la capacidad de adaptarse a futuras necesidades tecnológicas.
        p.mb-0 Las pruebas de cableado permiten identificar y corregir problemas antes de que afecten el rendimiento de la red. La atenuación, la pérdida de retorno y la diafonía son indicadores clave de la calidad del cableado y pueden afectar significativamente la transmisión de datos.
      .col-lg-4.order-first.order-lg-last(data-aos="fade-left")
        figure.mb-4.mb-lg-0
          img.mx-auto(src="@/assets/curso/temas/50.png",style="max-width: 400px;")
    
    .row.align-items-center.mb-4
      .col-lg-2(data-aos="fade-right")
        figure.mb-4.mb-lg-0
          img.mx-auto(src="@/assets/curso/temas/51.png",style="max-width: 190px;")
      .col-lg-10(data-aos="fade-left")
        .fondo-color-sistema-k.p-4
          p.mb-0 La implementación de cableado estructurado conlleva varios riesgos, como daños físicos al cable, conexiones defectuosas y problemas de compatibilidad. Una gestión de riesgos efectiva implica identificar estos riesgos y desarrollar estrategias para mitigarlos. Esto incluye la selección de materiales de alta calidad, la realización de pruebas exhaustivas y la implementación de procedimientos de mantenimiento regulares. Además, la documentación adecuada del cableado y la creación de planes de contingencia son para la gestión de riesgos y la resolución de problemas.
    
    .row(data-aos="flip-up")
      .col-lg-4.mb-4.mb-lg-0
        p.mb-0 La planificación y el diseño adecuado del cableado estructurado implican considerar factores como la topología de la red, la ubicación de los equipos de red y las necesidades futuras de expansión. Un diseño bien planificado mejora la organización y la trazabilidad de los cables, facilitando la gestión y el mantenimiento. Además, la planificación adecuada asegura la optimización de recursos, evitando la sobreutilización o el desperdicio de materiales. La implementación de estándares de cableado estructurado y la adopción de mejores prácticas de diseño  para garantizar la eficiencia operativa y la escalabilidad de la red.
      .col-lg-3
        figure.mb-4.mb-lg-0
          img.mx-auto(src="@/assets/curso/temas/52.svg",style="max-width: 295px;")
      .col-lg-5
        p.mb-0 La normativa de seguridad es un componente primordial en la instalación de sistemas de cableado estructurado, ya que establece los estándares y regulaciones necesarios para garantizar la seguridad del personal, la integridad del sistema y el cumplimiento de las leyes y regulaciones locales e internacionales. Las directrices sobre el uso de equipos, la seguridad eléctrica y la protección contra incendios son fundamentales para prevenir accidentes y minimizar riesgos. Organizaciones como la ISO y la NFPA desempeñan un papel fundamental al proporcionar normativas detalladas que guían a los profesionales en la implementación segura y estandarizada de sistemas de cableado estructurado, asegurando así la protección tanto de la infraestructura como de las personas que interactúan con ella.

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
