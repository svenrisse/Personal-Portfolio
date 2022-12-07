<script setup lang="ts">
const workExample = ref([
    {
        status: true,
        jobTitle: "Web Developer",
        company: "Händlerbund",
        companyLink: "https://www.haendlerbund.de/en",
        startDate: "September 2022",
        endDate: "Present",
        workDescriptionOne:
            "Im currently in training to be a web developer at Händlerbund in cooperation with YAY! Digital.",
        workDescriptionTwo:
            "I've learned a remarkable amount so far including, JavaScript Frameworks, different ways to write CSS and how to better incorperating design in projects.",
        workDescriptionThree: "",
        buttonText: "Händlerbund",
    },
    {
        status: false,
        jobTitle: "Soldier",
        company: "Bundeswehr",
        companyLink: "https://www.bundeswehr.de/en/",
        startDate: "October 2020",
        endDate: "July 2022",
        workDescriptionOne:
            "After deciding to quit my studies, corona was starting to gain traction in europe and with the situation being unpredictable I decided to join the military for my voluntary service.",
        workDescriptionTwo:
            "I worked in the medical service in a doctor's office for soldiers. My main tasks where organizing and communicating with patients while also ensuring the doctors could work without any hinderance.",
        workDescriptionThree:
            "Of course I learned a huge amount and matured a lot like you would expect from 2 years serving in the military. This was also the time when I started coding for fun in my free time and found my passion for web development and decided to pursue a career in software development.",
        buttonText: "Military Service",
    },
    {
        status: false,
        jobTitle: "Student",
        company: "Martin Luther University",
        companyLink: "https://www.uni-halle.de/?lang=en",
        startDate: "October 2018",
        endDate: "September 2020",
        workDescriptionOne:
            "After completing my A-Levels in 2018, I decided to start studying to be a teacher for Math and English in Halle.",
        workDescriptionTwo:
            "I learned a lot while in university like organizing my work and being independent while also greatly increasing my communication and team skills. Of course my proficiency in english increased tremendously as well.",
        workDescriptionThree:
            "Unfortunatly I had to realize that teaching was not the path I intend to tread for life.",
        buttonText: "Studies",
    },
]);

function setworkExample(index: number) {
    workExample.value.forEach((item) => {
        item.status = false;
    });
    workExample.value[index].status = !workExample.value[index].status;
}
</script>

<template>
    <div class="app">
        <Logo />
        <Navbar />
        <div class="app-work">
            <h1 class="work-header">My Career</h1>
            <div class="work-main">
                <div class="work-buttons">
                    <button
                        v-for="example in workExample"
                        :class="{ active: example.status }"
                        @click="setworkExample(workExample.indexOf(example))"
                    >
                        {{ example.buttonText }}
                    </button>
                </div>

                <template v-for="example in workExample">
                    <div v-if="example.status" class="work-text">
                        <WorkExample
                            :jobTitle="(example.jobTitle as string)"
                            :company="(example.company as string)"
                            :companyLink="(example.companyLink)"
                            :startDate="(example.startDate as string)"
                            :endDate="(example.endDate as string)"
                            :workDescriptionOne="(example.workDescriptionOne as string)"
                            :workDescriptionTwo="(example.workDescriptionTwo as string)"
                            :workDescriptionThree="(example.workDescriptionThree as string)"
                        />
                    </div>
                </template>
            </div>
        </div>
        <Socials />
        <Mail />
    </div>
</template>

<style lang="scss">
.app-work {
    width: 50vw;
    margin-top: 20vh;
    display: flex;
    flex-direction: column;
}
.work-header {
    width: max-content;
    text-align: center;
    margin-bottom: 5vh;
    font-size: 2.5rem;
    font-family: var(--font-mono);

    @media screen and (min-width: 640px) {
        align-self: center;
    }
}

.work-main {
    display: flex;
    height: fit-content;
    width: fit-content;
    .work-buttons {
        position: absolute;
        left: 4vw;
        top: 35vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        min-width: 5vw;
        margin-right: 10vw;
        border-right: 0.1rem solid var(--vue-green);
        padding-right: 3vw;
        button {
            height: 7vh;
            background-color: var(--navy);
            border: 0;
            color: var(--white);
            font-size: 0.75rem;
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
        @media screen and (min-width: 640px) {
            left: 5vw;
            top: 35vh;
            button {
                font-size: 1.25rem;
            }
        }
        @media screen and (min-width: 1000px) {
            left: 12.5vw;
            top: 35vh;
            button {
                font-size: 1.5rem;
                height: 10vh;
            }
        }
        @media screen and (min-width: 1500px) {
            left: 15vw;
            top: 35vh;
            button {
                font-size: 2rem;
                height: 10vh;
            }
        }
    }
    .work-text {
        margin-left: 5vw;
    }
}
</style>
