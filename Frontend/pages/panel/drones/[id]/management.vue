<script setup>
    import { useDrones } from '~/pages/store/drones.js';
    import { updateDroneName, updateDroneComment, updateDronePicture } from '~/controllerAPI/API';
    import Map from '~/components/panel/Map.vue';

    const { t } = useI18n();
    const route = useRoute();
    const toast = useToast();

    definePageMeta({
        layout: 'panel' 
    });


    const dronesStore = useDrones();

    const droneId = route.params.id;
    const drone = ref(dronesStore.drones[droneId - 1])


    const changeComment = async (event) => {

        const res = await updateDroneComment(droneId, event.target.value);
        
        if(res.ok){
            toast.add({id: 'Updated drone comment', title: t('panel.drones.succesfullyUpdatedDroneComment'),icon: 'tabler:alert-circle-filled',color: 'green'})
        }else{
            toast.add({id: 'Failed update drone comment', title: t('panel.drones.failedUpdateDroneComment'),icon: 'tabler:alert-circle-filled',color: 'red'})
            event.target.value = drone.comment;
        }

    }



</script>

<template>
<Title v-if="drone">{{ t('panel.primary.management') + ' | ' + drone.name + ' | Rescue Drone' }}</Title>

<main v-if="drone" class="p-4 md:ml-64 h-auto pt-20">
    
	<div class="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 mb-4">

        <div class="w-full pl-10 mb-10 mt-10 flex justify-center">
            <h1 class="w-2/3 pl-10 text-2xl font-semibold text-gray-900">{{ t('panel.primary.management') }}</h1>
        </div>
        

        <div class="w-full flex flex-row gap-8 justify-center items-center p-10">
            <NuxtImg :src="drone.pictureURL" class="w-48"></NuxtImg>

            <h2 class="text-2xl">{{ drone.name }}</h2>
        </div>
         

        <div class="p-10 m-12 flex flex-col gap-8 justify-center border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600">
            <p class="text-lg">{{ t('panel.drones.location') }}</p>

            <Map v-if="drone.location && drone.location.split(',').length === 2 && drone.location.split(',').every(coord => !isNaN(parseFloat(coord)))" :location="drone.location"></Map>

            <div v-else class="w-full flex justify-center">
                <div class="w-2/3 p-20 bg-zinc-400/30">
                    <p class="text-xl text-red-600">{{ t('panel.drones.unknownLastLocation') }}</p>
                </div>
            </div>
        </div>
	</div>

	
</main>
</template>