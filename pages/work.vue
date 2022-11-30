<script setup lang="ts">
import { stat } from "fs";
import { ref } from "vue";

const state = ref([
    {
        status: true,
    },
    {
        status: false,
    },
    {
        status: false,
    },
]);

function setState(index: number) {
    state.value.forEach((item) => {
        item.status = false;
    });
    state.value[index].status = !state.value[index].status;
}
</script>

<template>
    <div class="app">
        <Logo />
        <Navbar />
        <div class="app-main">
            <h1 class="work-header">My Career</h1>
            <div class="work-main">
                <div class="work-buttons">
                    <button
                        :class="{ active: state[0].status }"
                        @click="setState(0)"
                    >
                        Händlerbund
                    </button>
                    <button
                        :class="{ active: state[1].status }"
                        @click="setState(1)"
                    >
                        Military service
                    </button>
                    <button
                        :class="{ active: state[2].status }"
                        @click="setState(2)"
                    >
                        Studies
                    </button>
                </div>

                <WorkExample
                    v-if="state[0].status"
                    jobTitle="Web Developer"
                    company="Händlerbund"
                    startDate="September 2022"
                    endDate="Present"
                    workDescriptionOne="Im currently in training to be a web developer at Händlerbund in cooperation with YAY! Digital."
                    workDescriptionTwo="What I learned so far includes: Shopify, Vue, Nuxt"
                    workDescriptionThree=""
                />

                <WorkExample
                    v-if="state[1].status"
                    jobTitle="Soldier"
                    company="Bundeswehr"
                    startDate="October 2020"
                    endDate="July 2022"
                    workDescriptionOne="After deciding to quit my studies, corona was starting to gain traction in europe and with the situation being unpredictable I decided to join the military for my voluntary service."
                    workDescriptionTwo="I worked in the medical service in a doctor's office for soldiers. My main tasks where organizing and communicating with patients while also ensuring the doctors could work without any hinderance."
                    workDescriptionThree="Of course I learned a huge amount and matured a lot like you would expect from 2 years serving in the military. This was also the time when I started coding for fun in my free time and found my passion for web development and decided to pursue a career in software development."
                />

                <WorkExample
                    v-if="state[2].status"
                    jobTitle="Student"
                    company="Martin Luther University"
                    startDate="October 2018"
                    endDate="September 2020"
                    workDescriptionOne="After completing my Abitur in 2018, I decided to start studying to be a teacher for Math and English in Halle."
                    workDescriptionTwo="I learned a lot while in university like organizing my work and being independent while also greatly increasing my communication and team skills."
                    workDescriptionThree="Unfortunatly I had to realize that teaching was not the path I intend to tread for life."
                />
            </div>
        </div>
        <Socials />
        <Mail />
    </div>
</template>

<style lang="scss">
.work-header {
    text-align: center;
    margin-bottom: 5vh;
    font-size: 2.5rem;
    font-family: var(--font-mono);
}

.work-main {
    display: flex;

    .work-buttons {
        display: flex;
        flex-direction: column;
        justify-content: center;
        min-width: 10vw;
        button {
            height: 7vh;
            background-color: var(--navy);
            border: 0;
            color: var(--white);
            font-size: 1.5rem;
            cursor: pointer;
            border-radius: 10px;
            &:hover {
                color: var(--vue-green);
                background-color: var(--vue-dark);
            }
        }
        .active {
            color: var(--vue-green);
        }
    }
}
</style>
