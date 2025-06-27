<template>
  <div class="curso-main-container pb-3">
    <BannerInterno icono="fas fa-sitemap" titulo="Síntesis"></BannerInterno>
    <div class="container tarjeta tarjeta--blanca p-4 p-md-5">
      <p class="mb-4">
        El siguiente diagrama proporciona una visión general sintetizada de los
        principales temas abordados en este componente sobre el cableado
        estructurado, su implementación y la gestión del riesgo. Está diseñado
        para facilitar al lector a visualizar los elementos más importantes, los
        beneficios y la relación entre ellos.
      </p>
      <p class="mb-4">
        Este esquema representa de manera visual la disposición y conexión de
        los cables, paneles y equipos en una red, facilitando la comprensión de
        cómo se organiza la infraestructura de comunicación. Al estudiar este
        diagrama, el aprendiz puede identificar la relevancia de los elementos,
        entender el flujo del rendimiento de la red y asegurar una instalación
        eficiente y ordenada. Además, sirve como una guía valiosa para la
        solución de problemas y el mantenimiento de la red, promoviendo un
        enfoque planificado en el trabajo con tecnologías de la información.
      </p>
      <p class="mb-4">
        También permite identificar los elementos destacados sobre la gestión de
        riesgos en la implementación de sistemas de cableado estructurado para
        asegurar el éxito del proyecto. La identificación de riesgos es el
        primer paso, donde se detectan posibles amenazas como fallos en el
        equipo, errores humanos y condiciones ambientales adversas. Una vez
        identificados, se realiza un análisis de impacto para evaluar la
        probabilidad y el grado de afectación de cada riesgo en términos de
        costos, tiempo, calidad y seguridad.
      </p>
      <p class="mb-4">
        Finalmente, se implementan estrategias de mitigación, como la
        redundancia en el sistema, la capacitación del personal y la adquisición
        de seguros, para reducir la probabilidad de que ocurran los riesgos o
        minimizar su impacto
      </p>
      <div class="row justify-content-center">
        <div class="col-lg-10 mb-5 bgs p-4 brad">
          <figure>
            <img
              src="@/assets/curso/sintesis.svg"
              alt="La imagen muestra la «Síntesis temática del componente», allí se mencionan los principales temas tratados sobre el cableado estructurado como sus características, normatividad, como garantizar el rendimiento de la red y los elementos más importantes de la gestión de riesgos."
            />
          </figure>
          <figcaption class="mt-4"><b>Fuente</b>: OIT, 2024.</figcaption>
        </div>
        <div class="col-auto">
          <a
            class="anexo mb-5"
            :href="obtenerLink('/downloads/Sintesis.pdf')"
            target="_blank"
          >
            <div class="anexo__icono">
              <img src="@/assets/bullets/icono-pdf.svg" />
            </div>
            <div class="anexo__texto">
              <p>Anexo. Síntesis</p>
            </div></a
          >
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Sintesis',
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
