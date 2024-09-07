<template>
	<v-container class="mt-5 main-container" fluid>
    <v-row justify="center">
      <v-col
        cols="12"
        sm="4" 
        v-for="(section, index) in categories.filter(category => category.enabled).sort((a, b) => a.order - b.order)"
        :key="index"
        >
		<CategoryCard :category=section />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

import CategoryCard from "../components/CategoryCard.vue";

export default {
  name: "Home",

  components: {
	CategoryCard
  },

	data() {
		return {
			categories : []
		};
	},

	mounted() {
		this.fetchCategories();
	},

	methods: {
		async fetchCategories() {
		try {
			const response = await this.$http.get("categories");
			this.categories = await response.data;
		} catch (error) {
			console.error("Something wrong append", error);
		}
		},
	},

};

</script>