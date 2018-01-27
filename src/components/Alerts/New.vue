<template>
  <div>
    <div class="page-header">
      <h1>Create New Alert</h1>
    </div>
    <div class="row">
      <div class="col-12 col-md-6">
        <form @submit.prevent="createAlert">
          Alert Time:
          <input v-model="alertTime" type="time" id="alertTime" class="form-control" required>

          RR Line:
          <select v-model="trainId" id="trainId" class="form-control" required>
            <option v-for="train in trains" :key="train.trainno" value="train.trainno">{{ train.line }} ({{ train.trainno }})</option>
          </select>

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
      error: false,
      trains: []
    }
  },
  created () {
    this.$http({
      method: 'get',
      url: 'http://www.isseptafucked.com/api/rr/raw_data',
      transformRequest: [(data, headers) => {
        delete headers.Authorization
        return data
      }]
    })
      .then(request => { this.trains = request.data.data })
      .catch(() => { alert('SEPTA API is broken') })
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
