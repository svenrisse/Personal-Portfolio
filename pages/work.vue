<script setup lang="ts">
import { stat } from "fs";
import { ref } from "vue";

const state = ref([
    {
        status: false,
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
            <h1>My Career</h1>
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
                        Voluntary military service
                    </button>
                    <button
                        :class="{ active: state[2].status }"
                        @click="setState(2)"
                    >
                        Studies
                    </button>
                </div>
                <WorkExample v-if="state[0].status" jobTitle="Web Developer" company="Händlerbund" startDate="September 2022" endDate="Present" workDescriptionOne="" workDescriptionTwo="" workDescriptionThree=""/>
                <WorkExample v-if="state[1].status" jobTitle="Soldier" company="Bundeswehr" startDate="October 2020" endDate="July 2022" workDescriptionOne="" workDescriptionTwo="" workDescriptionThree=""/>
                <WorkExample v-if="state[2].status" jobTitle="Student" company="Martin Luther University" startDate="October 2018" endDate="September 2020" workDescriptionOne="" workDescriptionTwo="" workDescriptionThree=""/>
            </div>
        </div>
        <Socials />
        <Mail />
    </div>
</template>

<style lang="scss">
.work-buttons {
    display: flex;
    flex-direction: column;
    max-width: 10vw;
    button {
        height: 7vh;
        background-color: var(--navy);
        border: 0;
        color: var(--white);
        font-size: 20px;
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
</style>
