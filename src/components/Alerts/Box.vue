<template>
  <div class="col alert text-center">
    <router-link :to="{ name: 'Alert', params: { id: alert.id } }">
      <img :src="image" />
      <p>{{ alert.nickname }}</p>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'Box',
  props: ['alert'],
  data () {
    return {
      image: `http://via.placeholder.com/200x200?text=${encodeURIComponent(this.alert.id)}`
    }
  }
}
</script>

<style lang="scss" scoped>
.alert {
  min-width: 260px;

  img {
    object-fit: cover;
    width: 100%;
    height: 260px;
  }
}
</style>
