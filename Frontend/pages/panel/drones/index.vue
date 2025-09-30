<script setup>
    import { useDrones } from '~/pages/store/drones.js';

    const { t } = useI18n();
    const route = useRoute();

    definePageMeta({
        layout: 'panel' 
    });


    const dronesStore = useDrones();

    const drones = ref(dronesStore.drones)

</script>

<template>
<main class="p-4 md:ml-64 h-auto pt-20">

    <h1 class="text-2xl font-semibold text-gray-900 mb-10">{{ t('panel.drones.myDrones') }}</h1>

	<div v-if="drones" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">

		<NuxtLink :to="`${route.path}/${drone.id}`" v-for="drone in drones" :key="drone.id" class="border-2 border-dashed border-gray-300 bg-gray-50 rounded-lg dark:border-gray-600 h-32 md:h-64 flex flex-col justify-evenly items-center">

            <NuxtImg :src="drone.pictureURL" class="h-2/5 transition duration-300 ease-in-out hover:scale-110"></NuxtImg>

            <p class="text-xl text-gray-900 hover:underline">{{ drone.name }}</p>
		</NuxtLink>

	</div>
	
</main>
</template>