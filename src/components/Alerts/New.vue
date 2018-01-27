<template>
  <div>
    <div class="row">
      <div class="col-12 col-md-6">
        <h2>Create New Alert</h2>
        <div class="alert alert-danger" v-if="error">{{ error }}</div>
      </div>
    </div>
    <div class="row">
      <div class="col-12 col-md-6">
        <form @submit.prevent="createAlert">
          Alert Time:
          <input v-model="alertTime" type="time" id="alertTime" class="form-control" required>

          Train ID:
          <input v-model="trainId" type="number" id="trainId" class="form-control" required>

          Nickname:
          <input v-model="nickname" type="text" id="nickname" class="form-control" required>

          <button class="btn btn-lg btn-primary btn-block" type="submit">Create Alert</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'New',
  data () {
    return {
      alertTime: '',
      trainId: '',
      nickname: '',
      error: false
    }
  },
  methods: {
    createAlert () {
      this.$http.post('/alerts', { alert_time: this.alertTime, train_id: this.trainId, nickname: this.nickname })
        .then(request => this.alertSuccessful(request))
        .catch(() => this.alertFailed())
    },
    alertSuccessful (req) {
      this.error = false
      this.$router.replace('/alerts')
    },
    alertFailed () {
      this.error = 'Something went wrong!'
    }
  }
}
</script>
