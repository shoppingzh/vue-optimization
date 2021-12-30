<template>
  <div>
    <div ref="box" style="width: 300px; height: 300px; background-color: orange;"></div>
  </div>
</template>

<script>
import Moveable from 'moveable'
import { onMounted, ref } from '@vue/composition-api'

export default {
  setup() {
    const box = ref(null)

    onMounted(() => {
      new Moveable(document.body, {
        target: box.value,
        draggable: true
      })
    })

    return {
      box
    }
  }
}
</script>

<style>

</style>
