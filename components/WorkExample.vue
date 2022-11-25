<script setup lang="ts">
const props = defineProps<{
    jobTitle: String;
    company: String;
    startDate: String;
    endDate: String;
    workDescriptionOne: String;
    workDescriptionTwo?: String;
    workDescriptionThree?: String;
}>();
</script>

<template>
    <div class="work-example">
        <h2>{{ jobTitle }} @ {{ company }}</h2>
        <span> {{ startDate }} - {{ endDate }} </span>
        <p>{{ workDescriptionOne }}</p>
        <p>{{ workDescriptionTwo }}</p>
        <p>{{ workDescriptionThree }}</p>
    </div>
</template>
