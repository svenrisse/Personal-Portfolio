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
        <h2>
            {{ jobTitle }} @ <span class="work-company">{{ company }}</span>
        </h2>
        <span class="work-dates"> {{ startDate }} - {{ endDate }} </span>
        <p>{{ workDescriptionOne }}</p>
        <p>{{ workDescriptionTwo }}</p>
        <p>{{ workDescriptionThree }}</p>
    </div>
</template>

<style lang="scss">
.work-example {
    height: 35vh;
    margin-left: 5vw;
    -webkit-animation: fadein 2s; /* Safari, Chrome and Opera > 12.1 */
    -moz-animation: fadein 2s; /* Firefox < 16 */
    -ms-animation: fadein 2s; /* Internet Explorer */
    -o-animation: fadein 2s; /* Opera < 12.1 */
    animation: fadein 2s;
    h2 {
        font-size: 3.5rem;
        width: 50vw;
        margin-bottom: 2vh;
        margin-top: 0;
    }

    .work-company {
        color: var(--vue-green);
        font-family: var(--font-mono);
    }
    .work-dates {
        font-size: 2rem;
        margin-left: 1vw;
    }
    
    p {
        font-size: 1.5rem;
        max-width: 40vw;
    }
}
</style>
