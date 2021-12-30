<template>
  <div>
    <canvas ref="layer" />
  </div>
</template>

<script>
import * as PDFJS from 'pdfjs-dist'
import PDFJSWorker from 'pdfjs-dist/es5/build/pdf.worker.entry'
import { onMounted, ref } from '@vue/composition-api'
PDFJS.GlobalWorkerOptions.workerSrc = PDFJSWorker

export default {
  setup() {
    const layer = ref(null)
    const url = `${process.env.BASE_URL}1.pdf`
    const load = async() => {
      const pdfIns = await PDFJS.getDocument(url).promise
      const pageIns = await pdfIns.getPage(1)
      const vp = pageIns.getViewport({ scale: window.devicePixelRatio, rotation: 0 })
      const canvas = layer.value
      const ctx = canvas.getContext('2d')
      const w = vp.width
      const h = vp.height
      canvas.width = w
      canvas.height = h
      canvas.style.width = `${w}px`
      canvas.style.height = `${h}px`
      await pageIns.render({
        canvasContext: ctx,
        transform: null,
        viewport: vp
      }).promise
    }
    
    onMounted(() => {
      load()
    })

    return {
      layer
    }
  }
}
</script>

<style>

</style>
