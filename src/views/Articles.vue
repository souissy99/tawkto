<template>
  <v-container class="mt-5 pt-0 main-container" fluid>
    <v-row>
      <v-col cols="12" md="4">
        <v-breadcrumbs :items="items">
        <template v-slot:divider>
            <v-icon>fa-chevron-right</v-icon>
        </template>
        </v-breadcrumbs>
        <v-card class="text-center" outlined>
          <v-container class="top-right-icon">
            <v-icon size="24px" color="green">$note</v-icon>
            <span>{{ category.totalArticle }}</span>
          </v-container>
          <v-icon class="mt-10" size="58px" color="green">${{ category.icon }}</v-icon>
          <v-card-title class="text-h5 font-weight-bold justify-center">{{ category.title }}</v-card-title>
          <v-card-subtitle>Updated {{ timeSinceUpdate(category.updatedOn) }}</v-card-subtitle>
          
          <v-divider class="my-4"></v-divider>

        <v-container class="pa-4">
          <v-icon color="green">$info</v-icon>
          <v-card-text>{{ category.description }}</v-card-text>
        </v-container>
        </v-card>
      </v-col>

    <v-col cols="12" md="8" class="mt-14">
        <v-row>
            <v-col
                cols="12"
                v-for="(article, index) in articles.filter(article => article.status === 'published')"
                :key="index"
                class="mb-2"
            >
            <ArticleCard :article=article />
            </v-col>
        </v-row>
    </v-col>
    </v-row>
  </v-container>
</template>

<script>

import ArticleCard from "../components/ArticleCard.vue";
import { timeSinceUpdate } from "../utils/utils";

export default {
  name: "Articles",

    components: {
        ArticleCard,
    },

    data() {
        return {
            category: JSON.parse(localStorage.getItem('category')) || {},
            articles: [],
            items: [
            {
            text: 'All categories',
            disabled: false,
            href: '/',
            },
            {
            text: '',
            disabled: true,
            }
        ],
        };
    },

    mounted() {
        this.fetchArticles();
        this.items[1].text = this.category.title;
    },
    
    methods: {
        timeSinceUpdate,
        async fetchArticles() {
            try {
                const response = await this.$http.get(`category/${this.category.id}`);
                this.articles = await response.data;
            } catch (error) {
                console.error("Something wrong append", error);
            }
        },
    }
};
</script>

<style lang="scss">

    .top-right-icon {
        display: flex;
        justify-content: flex-end;
    }
</style>
