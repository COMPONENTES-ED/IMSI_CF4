<template>
  <div class="curso-main-container glosario">
    <BannerInterno icono="fas fa-atlas" titulo="Glosario"></BannerInterno>
    <div class="container tarjeta tarjeta--blanca p-4 p-md-5 mb-5">
      <div
        v-for="letra in orderedData"
        :key="'letra-' + letra.letra"
        class="glosario__letra-item mb-2"
      >
        <div class="glosario__letra-item__letra me-4">
          <div class="glosario__letra-item__letra__icono">
            <span>{{ letra.letra }}</span>
          </div>
        </div>
        <div class="glosario__letra-item__texto">
          <p
            v-for="termino in letra.terminos"
            :key="termino.termino"
            class="mb-3"
          >
            <strong><i class="lista-ul__vineta"></i></strong
            ><strong v-html="termino.terminoHtml || termino.termino"> </strong
            ><strong>: </strong><span v-html="termino.significado"></span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import plantillaMixins from '@/js/plantillaMixins'
export default {
  name: 'Glosario',
  mixins: [plantillaMixins],
  data() {
    return {
      glosarioData: [
        {
          termino: 'Atenuación',
          significado:
            'Pérdida de potencia de una señal a medida que se propaga a lo largo de un cable. Se mide en decibelios (dB).',
        },
        {
          termino: 'Cableado estructurado',
          significado:
            'Sistema de cableado organizado y sistemático que facilita la gestión y el mantenimiento de la red. Proporciona una base sólida para la conectividad y la comunicación en redes modernas.',
        },
        {
          termino: 'Conector',
          significado:
            'Dispositivo utilizado para conectar cables y equipos de red. Los conectores más comunes en el cableado estructurado son RJ-45 para cables de par trenzado y LC, SC, ST para cables de fibra óptica.',
        },
        {
          termino: 'Diafonía',
          significado:
            'Interferencia que ocurre cuando una señal en un par de cables induce una señal no deseada en otro par de cables adyacente. Se mide en decibelios (dB).',
        },
        {
          termino: 'Gestión de riesgos',
          significado:
            'Proceso de identificar, evaluar y mitigar posibles riesgos que puedan afectar la integridad y el rendimiento de la red.',
        },
        {
          termino: 'Impedancia',
          significado:
            'Parámetro fundamental que afecta la calidad de la señal y la eficiencia de la transmisión de datos.',
        },
        {
          termino: 'Par trenzado',
          significado:
            'Tipo de cable que contiene pares de cables trenzados entre sí para reducir la interferencia electromagnética. Los cables de par trenzado son ampliamente utilizados en redes de datos.',
        },
        {
          termino: '<em>Patch Panel</em>',
          significado:
            'Panel de conexión utilizado para organizar y gestionar las conexiones de cableado en una red. Facilita la administración y el mantenimiento del cableado estructurado.',
        },
        {
          termino: 'Planificación del cableado',
          significado:
            'Proceso de diseñar y organizar la infraestructura de cableado de manera eficiente y escalable. Incluye la selección de materiales, la topología de la red y la ubicación de los equipos de red.',
        },
        {
          termino: 'Pruebas de cableado',
          significado:
            'Proceso de evaluar el rendimiento y la calidad del cableado mediante la medición de parámetros como la atenuación, la pérdida de retorno y la diafonía.',
        },
        {
          termino: 'Pérdida de retorno',
          significado:
            'Medida de la cantidad de señal que se refleja de vuelta hacia la fuente debido a desajustes de impedancia en el cable. Se mide en decibelios (dB).',
        },
        {
          termino: '<em>Rack</em>',
          significado:
            'Estructura metálica utilizada para montar y organizar equipos de red y <em>patch panels</em>. Facilita la gestión y el mantenimiento del cableado estructurado.',
        },
        {
          termino: 'TIA/EIA-568',
          significado:
            'Estándar de cableado estructurado que define las especificaciones y prácticas recomendadas para la instalación de cables de red.',
        },
        {
          termino: 'Topología de la red',
          significado:
            'Arquitectura de una red que describe cómo están conectados los dispositivos y los cables.',
        },
        {
          termino: '<em>UTP (Unshielded Twisted Pair)</em>',
          significado:
            'Tipo de cable de par trenzado sin apantallamiento. Es el tipo de cable más comúnmente utilizado en redes de datos debido a su bajo costo y facilidad de instalación.',
        },
      ],
    }
  },
  computed: {
    orderedData() {
      const newGlosarioData = [...this.glosarioData]
      newGlosarioData.forEach(element => {
        element.significado =
          element.significado.charAt(0).toLowerCase() +
          element.significado.slice(1)
      })

      const sortedData = [...newGlosarioData].reduce((r, e) => {
        const letra = this.quitarAcentos(e.termino.toLowerCase())[0]
        if (!r[letra]) r[letra] = { letra, terminos: [e] }
        else r[letra].terminos.push(e)
        return r
      }, {})

      const soloLetras = Object.keys(sortedData).sort()
      const newSortedData = []

      soloLetras.forEach(element => {
        const letraObj = sortedData[element]
        let terminos = letraObj.terminos

        if (terminos.length > 1) {
          const terminosOrdenados = []
          const soloTerminos = letraObj.terminos
            .map(termObj => termObj.termino)
            .sort((a, b) => {
              const an = this.quitarAcentos(a).toLowerCase()
              const bn = this.quitarAcentos(b).toLowerCase()
              if (an < bn) return -1
              if (bn < an) return 1
              return 0
            })
          soloTerminos.forEach(term => {
            terminosOrdenados.push(
              terminos.find(termino => termino.termino === term),
            )
          })
          terminos = terminosOrdenados
        }
        newSortedData.push({
          letra: letraObj.letra.toUpperCase(),
          terminos: terminos,
        })
      })
      return newSortedData
    },
  },
}
</script>

<style lang="sass">
.glosario
  &__letra-item
    display: flex
    &__texto
      padding-top: 5px
    &__letra
      &__icono
        width: 32px
        height: 32px
        position: relative
        line-height: 1em
        border-radius: 50%
        background-color: $color-sistema-d

        span
          position: absolute
          left: 50%
          top: 50%
          transform: translate(-50%,-50%)
          font-size: 1.1em
          font-weight: $base-black-font-weight
</style>
