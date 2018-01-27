<template>
  <div>
    <div class="page-header">
      <h1>All Alerts</h1>
    </div>
    <div class="row">
      <div v-for="alert in alerts" :key="alert.id" :alert="alert">
        <button class="btn btn-danger btn-sm" @click="removeAlert(alert)">x</button> <router-link :to="{ name: 'Alert', params: { id: alert.id } }">{{ alert.nickname }}</router-link> Train: {{ alert.train_id }}, Time: {{ alert.alert_time }}
      </div>
    </div>
  </div>
</template>

<script>
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
    },
    removeAlert (alert) {
      this.$http.delete(`/alerts/${alert.id}`)
        .then(request => this.updateAlertList(alert))
        .catch(() => { alert('Something happened while deleting the alert') })
    },
    updateAlertList (alert) {
      const alertIndex = this.alerts.indexOf(alert)
      this.alerts.splice(alertIndex, 1)
    }
  }
}
</script>
