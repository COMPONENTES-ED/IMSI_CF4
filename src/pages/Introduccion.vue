<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row.align-items-center.mb-4
      .col-lg-8
        p.mb-4(data-aos="fade-up") El cableado estructurado es una infraestructura de telecomunicaciones que permite la conexión de diversos dispositivos y sistemas dentro de un edificio o campus. Este sistema organizado y estandarizado facilita la transmisión de datos, voz y video de manera eficiente y segura. En la era digital actual, donde la conectividad y la comunicación son indispensables para el funcionamiento de cualquier organización, el cableado estructurado se ha convertido en un componente crítico de la infraestructura tecnológica.
        .fondo-color-sistema-i.p-4(data-aos="fade-right")
          p.mb-0 La evolución de las tecnologías de la información y la comunicación ha llevado a un aumento significativo en la demanda de redes de alta velocidad y capacidad. Las organizaciones necesitan redes que puedan soportar una gran cantidad de datos y que sean capaces de adaptarse a las cambiantes necesidades del negocio. El cableado estructurado proporciona una solución flexible y escalable que puede satisfacer estas demandas. Además, la estandarización del cableado estructurado permite una mayor compatibilidad entre diferentes sistemas y dispositivos, lo que facilita la integración de nuevas tecnologías y la expansión de la red.
      .col-lg-4.order-first.order-lg-last(data-aos="fade-left")
        figure.mb-4.mb-lg-0
          img.mx-auto(src="@/assets/curso/temas/1.png",style="max-width: 400px;")
    
    p.mb-4(data-aos="fade") La implementación de un cableado estructurado es un proceso complejo que requiere una planificación detallada y una ejecución precisa. Desde la selección de los componentes adecuados hasta la instalación y las pruebas, cada paso es necesario para asegurar el rendimiento óptimo del sistema. Además, la gestión de riesgos es un componente para garantizar la integridad y la continuidad del cableado estructurado. La identificación, evaluación y mitigación de riesgos son prácticas fundamentales para proteger la infraestructura de telecomunicaciones contra fallos y amenazas.

    .row.mb-4
      .col-lg-2(data-aos="fade-right")
        figure.mb-4.mb-lg-0
          img.mx-auto(src="@/assets/curso/temas/2.png",style="max-width: 190px;")
      .col-lg-10(data-aos="fade-left")
        .fondo-color-sistema-j.p-4.h-100.align-content-center
          p.mb-0 En este contexto, este componente se centra en dos aspectos clave del cableado estructurado: la implementación y la gestión de riesgos. A través de un análisis detallado de estos temas, se busca proporcionar una comprensión profunda de los desafíos y las mejores prácticas asociadas con la implementación de un cableado estructurado, así como las estrategias efectivas para la gestión de riesgos abarcando los elementos que engloban su identificación, la normatividad, el control ambiental y los documentos de control.
    
    figure(data-aos="zoom-in-out")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/EeQOFMBN0Bc?si=DcO9ZYenGPYE03TD" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)


   
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
