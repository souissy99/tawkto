<template>
    <v-card class="d-flex align-center px-10" outlined>
        <v-icon size="36px">$note</v-icon>
        <v-card-text>
            <v-card-title class="text-h6">{{ article.title }}</v-card-title>
            <v-card-subtitle class="text-caption">
            Updated {{ timeSinceUpdate(article.updatedOn) }}
            </v-card-subtitle>
        </v-card-text>
        <v-spacer></v-spacer>
        <v-icon >$next</v-icon>
    </v-card>
</template>

<script>

import { timeSinceUpdate } from "../utils/utils";

export default {
    props: {
        article: {
            type: Object,
            required: true
        }
    },

    methods: {
        timeSinceUpdate
    }
}

</script>