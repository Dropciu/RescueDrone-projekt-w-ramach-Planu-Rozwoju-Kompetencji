<script setup>
    const { t } = useI18n();

    definePageMeta({
        layout: 'main' 
    });

</script>

<template>
    <Title>{{ t('mainPages.primary.service') + " | " + "Rescue Drone"  }}</Title>
    <Meta name="description" :content="t('mainPages.service.description')" />
    <Meta name="keywords" :content="t('mainPages.service.keywords')" />

    <div class="w-screen bg-[url('/images/droneAI.webp')] bg-fixed bg-cover bg-no-repeat bg-top">
        

        <div class="w-full h-screen flex flex-row justify-center items-center">

            <div class="bg-white mix-blend-screen p-6 md:px-14 md:py-10 mb-20">
                <h1 class="text-[10vw] md:text-[5vw] font-bold text-center">{{ t('mainPages.primary.service') }}</h1>
            </div>

        </div>

        <div class="flex flex-col gap-20">


            <div class="w-full flex flex-col items-center">

                <div class="w-11/12 md:w-2/3 lg:w-3/5 bg-white rounded-lg md:rounded-3xl p-10 md:p-20 flex flex-col justify-start items-center gap-12 tracking-wide">

                    <p class="text-lg">{{ t('mainPages.service.serviceParagraph') }}</p>
                    
                </div>

            </div>


            <div class="w-full flex flex-col md:flex-row justify-around items-center md:items-stretch gap-20">

                <div class="w-11/12 md:w-2/5 lg:w-1/3 bg-white rounded-3xl p-8 md:p-20 flex flex-col justify-start items-center gap-12 tracking-wide">
                    <h2 class="text-3xl font-bold">{{ t('mainPages.service.integrationOfAIAndNavigationSystems') }}</h2>

                    <p class="text-lg">{{ t('mainPages.service.integrationOfAIAndNavigationSystemsParagraph') }}</p>
                    
                </div>


                <div class="w-11/12 md:w-2/5 lg:w-1/3 bg-white rounded-3xl p-8 md:p-20 flex flex-col justify-start items-center gap-12 tracking-wide">
                    <h2 class="text-3xl font-bold">{{ t('mainPages.service.smartTechnologies') }}</h2>

                    <p class="text-lg">{{ t('mainPages.service.smartTechnologiesParagraph') }}</p>
                    
                </div>

            </div>


            <div class="w-full bg-black/60 text-white p-10 md:p-20 flex flex-col justify-start items-center gap-12 tracking-wide">
                <h2 class="text-3xl font-bold">{{ t('mainPages.service.theFutureOfRescue') }}</h2>

                <p class="text-lg">{{ t('mainPages.service.theFutureOfRescueParagraph') }}</p>

            </div>


        </div>

    </div>
</template>