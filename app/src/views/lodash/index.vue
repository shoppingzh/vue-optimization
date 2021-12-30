<template>
  <div>
    <p>{{ count }}</p>
    <button @click="addCount">加1（节流）</button>
  </div>
</template>

<script>
import { ref } from '@vue/composition-api'
import { throttle } from 'lodash'

export default {
  setup() {
    const count = ref(0)
    const addCount = throttle(() => {
      count.value++
    }, 500)
    return {
      count,
      addCount
    }
  }
}
</script>

<style>

</style>
