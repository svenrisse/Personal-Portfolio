<script setup lang="ts">
const props = defineProps<{
    jobTitle: string;
    company: string;
    companyLink: string;
    startDate: string;
    endDate: string;
    workDescriptionOne: string;
    workDescriptionTwo?: string;
    workDescriptionThree?: string;
}>();
</script>

<template>
    <div class="work-example">
        <h2>
            <span>{{ jobTitle }} @ </span> <span class="work-company"><a :href="companyLink">{{ company }}</a></span>
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
    margin-left: 6vw;
    -webkit-animation: fadein 2s; /* Safari, Chrome and Opera > 12.1 */
    -moz-animation: fadein 2s; /* Firefox < 16 */
    -ms-animation: fadein 2s; /* Internet Explorer */
    -o-animation: fadein 2s; /* Opera < 12.1 */
    animation: fadein 2s;
    h2 {
        display: flex;
        flex-direction: column;
        font-size: 1.4rem;
        max-width: 50vw;
        margin-bottom: 2vh;
        margin-top: 0;
    }

    .work-company {
        color: var(--vue-green);
        font-family: var(--font-mono);
        a {
            color: var(--vue-green);
        }
    }
    .work-dates {
        font-size: 0.8em;
    }
    
    p {
        font-size: 1rem;
        max-width: 60vw;
    }

    @media screen and (min-width: 640px) {
        margin-left: 3vw;
        h2 {
            flex-direction: row;
            gap: 1vw;
            font-size: 1.5rem;
            max-width: max-content;
        }
        .work-dates {
            font-size: 1rem;
        }

        p {
            font-size: 1.25rem;
        }
    }
    @media screen and (min-width: 1000px) {
        .work-dates {
            font-size: 1.25rem;
        }

        p {
            font-size: 1.5rem;
        }
    }
    @media screen and (min-width: 1500px) {
        h2 {
            font-size: 2.5rem;
            gap: 0.5vw;
        }
        .work-dates {
            font-size: 1.75rem;
        }

        p {
            font-size: 2rem;
        }
    }
}
</style>
