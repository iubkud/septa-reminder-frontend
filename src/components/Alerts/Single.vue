<template>
  <div class="row">
    <div class="col-12 col-md-6">
      {{ alert.nickname }} is set to go at {{ alert.alert_time }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'Single',
  data () {
    return {
      alert: {}
    }
  },
  created () {
    this.$http.get(`/alerts/${this.$route.params.id}`)
      .then(request => { this.alert = request.data })
      .catch(() => { alert('Something went wrong!') })
  }
}
</script>
