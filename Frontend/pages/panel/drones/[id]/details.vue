<script setup>
    import { useDrones } from '~/pages/store/drones.js';
    import { updateDroneName, updateDroneComment, updateDronePicture } from '~/controllerAPI/API';

    const { t } = useI18n();
    const route = useRoute();
    const toast = useToast();

    definePageMeta({
        layout: 'panel' 
    });


    const dronesStore = useDrones();

    const droneId = route.params.id;
    const drone = ref(dronesStore.drones[droneId - 1])

    const changeName = async (event) => {
        if(event.target.value.length > 0){
            const res = await updateDroneName(droneId, event.target.value);
            
            if(res.ok){
                toast.add({id: 'Updated drone name', title: t('panel.drones.succesfullyUpdatedDroneName'),icon: 'tabler:alert-circle-filled',color: 'green'})
            }else{
                toast.add({id: 'Failed update drone name', title: t('panel.drones.failedUpdateDroneName'),icon: 'tabler:alert-circle-filled',color: 'red'})
                event.target.value = drone.name;
            }
        }
        else{
            toast.add({id: 'Invalid drone new name', title: t('panel.drones.droneName1character'),icon: 'tabler:alert-circle-filled',color: 'red'})
            event.target.value = drone.name;
        }
    }



    const changeComment = async (event) => {

        const res = await updateDroneComment(droneId, event.target.value);
        
        if(res.ok){
            toast.add({id: 'Updated drone comment', title: t('panel.drones.succesfullyUpdatedDroneComment'),icon: 'tabler:alert-circle-filled',color: 'green'})
        }else{
            toast.add({id: 'Failed update drone comment', title: t('panel.drones.failedUpdateDroneComment'),icon: 'tabler:alert-circle-filled',color: 'red'})
            event.target.value = drone.comment;
        }

    }


    const changePicture = async (event) => {
        const file = event.target.files[0];
        
        if(file.size > 4294967295){
            toast.add({id: 'Too big file', title: t('panel.drones.tooBigFile'),icon: 'tabler:alert-circle-filled',color: 'red'})
        }
        else{
            const res = await updateDronePicture(droneId, file);

            if(res.ok){
                toast.add({id: 'Updated drone comment', title: t('panel.drones.succesfullyUpdatedDroneComment'),icon: 'tabler:alert-circle-filled',color: 'green'})
            }else{
                toast.add({id: 'Failed update drone comment', title: t('panel.drones.failedUpdateDroneComment'),icon: 'tabler:alert-circle-filled',color: 'red'})
                event.target.value = drone.comment;
            }
        }

    }

</script>

<template>
<Title v-if="drone">{{ t('panel.primary.details') + ' | ' + drone.name + ' | Rescue Drone' }}</Title>

<main v-if="drone" class="p-4 md:ml-64 h-auto pt-20">
    
	<div class="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 mb-4">

        <div class="w-full pl-10 mb-10 mt-10 flex justify-center">
            <h1 class="w-2/3 pl-10 text-2xl font-semibold text-gray-900">{{ t('panel.primary.details') }}</h1>
        </div>
        

        <label for="pictureFile"class="w-full flex justify-center items-center pl-10 group cursor-pointer" :title="t('panel.drones.changeDronePicture')">
            <NuxtImg :src="drone.pictureURL" class="w-64"></NuxtImg>

            <NuxtImg src="/images/icon/imageIcon.png" class="absolute w-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"></NuxtImg>

        </label>
        <input id="pictureFile" type="file" accept="image/*" class="opacity-0 hidden" @change="changePicture"> 

        

        <div class="w-full p-10 flex justify-center">

            <table class="w-2/3 border-2 border-gray-200 p-10">
                <tbody>
                    <tr>
                        <td class="p-4">{{ t('panel.drones.name') }}</td>
                        <td class="p-4">
                            <input type="text" :value="drone.name" @change="changeName">
                        </td>
                    </tr>

                    <tr>
                        <td class="p-4">{{ t('panel.drones.comment') }}</td>
                        <td class="p-4">
                            <textarea :value="drone.comment" @change="changeComment"></textarea>
                        </td>
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


                   
                </tbody>
                
            </table>
        </div>
	</div>

	
</main>
</template>