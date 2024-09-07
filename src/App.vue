<template>
  <v-app>
    <tawk-header></tawk-header> 
    <router-view></router-view> 
  </v-app>
</template>

<script>
import Header from './components/Header.vue'

export default {
	components:{
		'tawk-header': Header
	},
}
</script>

<style lang="scss" scoped>
	@import 'scss/main.scss';
</style>