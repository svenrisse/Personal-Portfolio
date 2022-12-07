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
            <span>{{ jobTitle }} @</span> <span class="work-company">{{ company }}</span>
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
    width: 60vw;
    margin-left: 5vw;
    -webkit-animation: fadein 2s; /* Safari, Chrome and Opera > 12.1 */
    -moz-animation: fadein 2s; /* Firefox < 16 */
    -ms-animation: fadein 2s; /* Internet Explorer */
    -o-animation: fadein 2s; /* Opera < 12.1 */
    animation: fadein 2s;
    h2 {
        display: flex;
        flex-direction: column;
        font-size: 1.25rem;
        max-width: 50vw;
        margin-bottom: 2vh;
        margin-top: 0;
    }

    .work-company {
        color: var(--vue-green);
        font-family: var(--font-mono);
    }
    .work-dates {
        font-size: 0.75rem;
        margin-left: 1vw;
    }
    
    p {
        font-size: 0.9rem;
        max-width: 60vw;
    }
}
</style>
