<template>
    <v-card class="text-center pa-5" outlined @click="navigateToArticles">
        <v-icon
        size="60"
        class="mt-5"
        >
        ${{category.icon}}
        </v-icon>
        <v-card-title class="pa-7 pt-2 justify-center font-weight-bold">{{ category.title }}</v-card-title>
        <v-card-subtitle class="count font-weight-bold">{{ category.totalArticle }} articles</v-card-subtitle>
        <v-card-subtitle class="text-caption">Last update {{ timeSinceUpdate(category.updatedOn) }}</v-card-subtitle>
    </v-card>
</template>

<script>

import { timeSinceUpdate } from "../utils/utils";

export default {
    props: {
        category: {
            type: Object,
            required: true
        }
    },

    methods: {
        timeSinceUpdate,
        navigateToArticles() {
            localStorage.setItem('category', JSON.stringify(this.category));
            this.$router.push({ 
                name: 'articles', 
            });
        },
    }
}

</script>

<style lang="scss" scoped>
    @import '../scss/_variables.scss';

    .v-icon {
        margin-bottom: 16px;
    }

    .count {
        color: #03A84E !important;
        font-size: 13px;
        padding: 0;
    }

    .text-caption {
        padding-top: 0;
        padding-bottom: 5%;
    }

</style>
