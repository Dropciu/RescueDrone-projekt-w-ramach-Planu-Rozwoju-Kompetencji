<script setup>
    import { useDrones } from '~/pages/store/drones.js';

    const { t } = useI18n();
    const route = useRoute();

    definePageMeta({
        layout: 'panel' 
    });


    const dronesStore = useDrones();

    const droneId = route.params.id;
    const drone = ref(dronesStore.drones[droneId - 1])


</script>

<template>
<Title v-if="drone">{{ drone.name + ' | Rescue Drone' }}</Title>

<main v-if="drone" class="p-4 md:ml-64 h-auto pt-20">
    
	<div class="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 mb-4">

        <div class="w-full pl-10 mt-10 mb-10 flex justify-center">
            <h1 class="w-2/3 pl-10 text-2xl font-semibold text-gray-900">{{ drone.name }}</h1>
        </div>
        

        <div class="w-full flex justify-center items-center pl-10">
            <NuxtImg :src="drone.pictureURL" class="w-64"></NuxtImg>
        </div>

        <div class="w-full p-10 flex justify-center">

            <table class="w-2/3 border-2 border-gray-200 p-10">
                <tbody>
                    <tr>
                        <td class="p-4">{{ t('panel.drones.name') }}</td>
                        <td class="p-4">{{ drone.name }}</td>
                    </tr>

                    <tr>
                        <td class="p-4">{{ t('panel.drones.model') }}</td>
                        <td class="p-4">{{ drone.model }}</td>
                    </tr>

                    <tr>
                        <td class="p-4">{{ t('panel.drones.serialNumber') }}</td>
                        <td class="p-4">{{ drone.serialNumber }}</td>
                    </tr>

                    <tr>
                        <td class="p-4">{{ t('panel.drones.status') }}</td>
                        <td class="p-4">{{ drone.status }}</td>
                    </tr>

                    <tr>
                        <td class="p-4">{{ t('panel.drones.batteryLevel') }}</td>
                        <td class="p-4">{{ drone.batteryLevel }}</td>
                    </tr>

                    <tr>
                        <td class="p-4">{{ t('panel.drones.flightTimeRemaining') }}</td>
                        <td class="p-4">{{ drone.flightTimeRemaining }}</td>
                    </tr>

                    <tr>
                        <td class="p-4">{{ t('panel.drones.location') }}</td>
                        <td class="p-4">{{ drone.location }}</td>
                    </tr>

                    <tr>
                        <td class="p-4">{{ t('panel.drones.payloadCapacity') }}</td>
                        <td class="p-4">{{ drone.payloadCapacity }}</td>
                    </tr>

                    <tr>
                        <td class="p-4">{{ t('panel.drones.maxRange') }}</td>
                        <td class="p-4">{{ drone.maxRange }}</td>
                    </tr>

                    <tr>
                        <td class="p-4">{{ t('panel.drones.lastMaintenanceDate') }}</td>
                        <td class="p-4">{{ drone.lastMaintenanceDate }}</td>
                    </tr>

                    <tr>
                        <td class="p-4">{{ t('panel.drones.cameraResolution') }}</td>
                        <td class="p-4">{{ drone.cameraResolution }}</td>
                    </tr>

                    <tr>
                        <td class="p-4">{{ t('panel.drones.connectionStatus') }}</td>
                        <td class="p-4">{{ drone.connectionStatus }}</td>
                    </tr>
                    

                    <tr>
                        <td class="p-4">{{ t('panel.drones.flightHours') }}</td>
                        <td class="p-4">{{ drone.flightHours }}</td>
                    </tr>

                    <tr>
                        <td class="p-4">{{ t('panel.drones.missionCount') }}</td>
                        <td class="p-4">{{ drone.missionCount }}</td>
                    </tr>

                    <tr>
                        <td class="p-4">{{ t('panel.drones.signalStrength') }}</td>
                        <td class="p-4">{{ drone.signalStrength }}</td>
                    </tr>

                    <tr>
                        <td class="p-4">{{ t('panel.drones.comment') }}</td>
                        <td class="p-4">{{ drone.comment }}</td>
                    </tr>

                   
                </tbody>
                
            </table>
        </div>
	</div>



	<div class="grid grid-cols-2 gap-4 mb-4">
		<div class="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-48 md:h-72">
		</div>
		<div class="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-48 md:h-72">
		</div>
		<div class="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-48 md:h-72">
		</div>
		<div class="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-48 md:h-72">
		</div>
	</div>
	<div class="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-96 mb-4">
	</div>
	<div class="grid grid-cols-2 gap-4">
		<div class="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-48 md:h-72">
		</div>
		<div class="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-48 md:h-72">
		</div>
		<div class="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-48 md:h-72">
		</div>
		<div class="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-48 md:h-72">
		</div>
	</div>

	
</main>
</template>