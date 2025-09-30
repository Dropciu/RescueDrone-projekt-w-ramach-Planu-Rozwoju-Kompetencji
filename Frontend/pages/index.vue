<script setup>
    const { t } = useI18n();

    definePageMeta({
        layout: 'main' 
    });

</script>

<template>
    <Title>Rescue Drone</Title>
    <Meta name="description" :content="$t('mainPages.index.description')" />
    <Meta name="keywords" :content="$t('mainPages.index.keywords')" />

    <div class="w-screen bg-[url('/images/droneAI.webp')] bg-fixed bg-cover bg-no-repeat bg-top">
        

        <div class="w-full h-screen flex flex-row justify-center items-center">

            <div class="bg-white mix-blend-screen p-6 md:px-14 md:py-10 mb-20">
                <h1 class="text-[20vw] md:text-[10vw] font-bold text-center">Rescue Drone™</h1>
            </div>

        </div>

        <div class="flex flex-col gap-20">


            <div class="w-full flex flex-col items-center">

                <div class="w-11/12 md:w-2/3 lg:w-3/5 bg-white rounded-lg md:rounded-3xl p-10 md:p-20 flex flex-col justify-start items-center gap-12 tracking-wide">
                    <h2 class="text-3xl font-bold text-center">{{ t('mainPages.index.slogan') }}</h2>

                    <NuxtImg src="/images/logo.png" class="w-1/2" alt="Quadcopter"></NuxtImg>

                    <p class="text-lg">{{ t('mainPages.index.abstract') }}</p>
                    
                </div>

            </div>


            <div class="w-full flex flex-col md:flex-row justify-around items-center md:items-stretch gap-20">

                <div class="w-11/12 md:w-2/5 xl:w-1/3 bg-white rounded-3xl p-8 md:p-20 flex flex-col justify-start items-center gap-12 tracking-wide">
                    <h2 class="text-3xl font-bold">{{ t('mainPages.index.motivation') }}</h2>

                    <p class="text-lg">{{ t('mainPages.index.motivationParagraph') }}</p>
                    
                </div>


                <div class="w-11/12 md:w-2/5 lg:w-1/3 bg-white rounded-3xl p-8 md:p-20 flex flex-col justify-start items-center gap-12 tracking-wide">
                    <h2 class="text-3xl font-bold">{{ t('mainPages.index.descriptionOfResearch') }}</h2>

                    <p class="text-lg">{{ t('mainPages.index.descriptionOfResearchParagraph') }}</p>
                    
                </div>

            </div>


            <div class="w-full bg-black/60 text-white p-10 md:p-20 flex flex-col justify-start items-center gap-12 tracking-wide">
                <h2 class="text-3xl font-bold">{{ t('mainPages.index.conclusions') }}</h2>

                <p class="text-lg">{{ t('mainPages.index.conclusionsParagraph') }}</p>

                <NuxtImg src="/images/poster.png" width="1200" format="webp" quality="80" class="w-full md:w-11/12 lg:w-10/12" alt="Poster"></NuxtImg>
            </div>


        </div>

    </div>
</template>