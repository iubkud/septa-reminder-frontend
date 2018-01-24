<template>
  <div>
    <div class="page-header">
      <h1>All Alerts</h1>
    </div>
    <div class="row">
      <Box v-for="alert in alerts" :key="alert.id" :alert="alert" v.show="alert.nickname"></Box>
    </div>
  </div>
</template>

<script>
import Box from './Box'

export default {
  name: 'List',
  data () {
    return {
      search: '',
      alerts: []
    }
  },
  created () {
    this.$http.get('/alerts', { headers: {'Authorization': 'Bearer ' + localStorage.token} }) // set manually because Authorization was not updating on login
      .then(request => this.buildAlertList(request.data))
      .catch(() => { alert('Something went silly!') })
  },
  methods: {
    buildAlertList (data) {
      this.alerts = data
    }
  },
  components: {
    Box
  }
}
</script>
