<template>
  <div>
    <p>Welcome to the forum</p>
    <thread-list :threads="threads" />
  </div>
</template>

<script>
import ThreadList from '@/components/ThreadList'
import sourceData from '@/data.json'

export default {
  components: {
    ThreadList
  },
  data: () => ({
    threads: sourceData.threads,
  })
}

</script>
