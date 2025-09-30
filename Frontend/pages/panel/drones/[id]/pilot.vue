<script setup>
    import { useDrones } from '~/pages/store/drones.js';
    import { updateDroneName, updateDroneComment, updateDronePicture } from '~/controllerAPI/API';
    import Map from '~/components/panel/Map.vue';

    const { t } = useI18n();
    const route = useRoute();
    const toast = useToast();

    definePageMeta({
    layout: 'panel',
    });

    const dronesStore = useDrones();

    const droneId = route.params.id;
    const drone = ref(dronesStore.drones[droneId - 1]);

    // Fullscreen toggle
    const isFullscreen = ref(false);
    const fullscreenTarget = ref(null);

    const toggleFullscreen = () => {
        if (isFullscreen.value) {
            document.exitFullscreen();
        } else {
            fullscreenTarget.value.requestFullscreen();
        }
        isFullscreen.value = !isFullscreen.value;
    };

    // Telemetry data
    const telemetry = ref({
    battery: '75%',
    gps: '52.2297° N, 21.0122° E',
    altitude: '150m',
    speed: '30km/h',
    });

    // Joystick data
    const joystickPosition = ref({ x: 0, y: 0 });
    const joystickValues = ref({ x: 0, y: 0, z: 0 }); // To store x, y, z values
    const moving = ref(false);
    const maxDistance = 50; // Max distance for joystick movement

    // Move joystick
    const moveJoystick = (event) => {
    if (!moving.value) return;

    const joystick = event.currentTarget.getBoundingClientRect();
    const centerX = joystick.left + joystick.width / 2;
    const centerY = joystick.top + joystick.height / 2;

    let x = event.clientX - centerX;
    let y = event.clientY - centerY;

    const distance = Math.sqrt(x ** 2 + y ** 2);

    if (distance > maxDistance) {
        const ratio = maxDistance / distance;
        x *= ratio;
        y *= ratio;
    }

    joystickPosition.value = { x, y };

    // Update joystick values (for movement control)
    joystickValues.value.x = x;
    joystickValues.value.y = y;
    
    // For Z-axis (altitude), we could adjust it based on the distance from center or another input
    joystickValues.value.z = telemetry.value.altitude.includes('m') ? parseInt(telemetry.value.altitude) : 0;
    };

    // Start joystick movement
    const startMoving = () => {
    moving.value = true;
    };

    // Stop joystick movement
    const stopMoving = () => {
    moving.value = false;
    joystickPosition.value = { x: 0, y: 0 };
    };

    // Vertical control
    const adjustAltitude = (direction) => {
    const altitudeChange = direction === 'up' ? 10 : -10;
    telemetry.value.altitude = `${parseInt(telemetry.value.altitude) + altitudeChange}m`;
    };


    onMounted(()=>{
        setInterval(()=>{
            console.log(joystickValues.value)
        }, 1000)
    })
</script>

<template>
  <Title v-if="drone">{{ t('panel.primary.pilot') + ' | ' + drone.name + ' | Rescue Drone' }}</Title>

  <main v-if="drone" class="p-4 md:ml-64 h-auto pt-20">

    <div class="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 mb-4">
      <div class="w-full pl-10 mb-10 mt-10 flex justify-center">
        <h1 class="w-2/3 pl-10 text-2xl font-semibold text-gray-900">{{ t('panel.primary.pilot') }}: <span class="font-serif"> {{ drone.name }}</span></h1>
      </div>

      <div class="float-left bg-slate-100 p-2 m-4">
        <p>{{ t('panel.drones.connectionStatus') }}: <span class="font-bold" :class="drone.connectionStatus == 1 ? 'text-green-500' : 'text-red-500'"> {{ drone.connectionStatus == 1 ? t('panel.pilot.connect') : t('panel.pilot.disconnect') }} </span> </p>

        <p>{{ t('panel.drones.status') }}: <span class="font-bold">{{ drone.status }}</span></p>
      </div>


      <div ref="fullscreenTarget" class="relative w-full p-10 flex justify-center bg-black">

        <video v-if="drone.connectionStatus == 1" class="xl:max-w-[80vw] xl:max-h-[80vh] w-auto h-auto" autoplay muted loop>
          <source src="/video/drone.mp4" type="video/mp4" />
        </video>
        <div v-else class="xl:max-w-[80vw] xl:max-h-[80vh] min-w-[40vw] min-h-[50vh] flex justify-center items-center">
            <p class="text-2xl font-semibold text-white">{{ t('panel.pilot.noConnection') }}</p>
        </div>


        <div class="absolute top-4 left-4 bg-black bg-opacity-60 text-white p-4 rounded">
          <p class="text-xs md:text-sm">{{ t('panel.pilot.battery') }}: {{ telemetry.battery }}</p>
          <p class="text-xs md:text-sm">GPS: {{ telemetry.gps }}</p>
          <p class="text-xs md:text-sm">{{ t('panel.pilot.altitude') }}: {{ telemetry.altitude }}</p>
          <p class="text-xs md:text-sm">{{ t('panel.pilot.speed') }}: {{ telemetry.speed }}</p>
        </div>

        <!-- Joystick -->
        <div class="absolute bottom-16 left-10 w-32 h-32 bg-gray-800 bg-gradient-to-b from-gray-700 to-gray-900 rounded-full flex items-center justify-center shadow-xl ring-4 ring-gray-600" @mousedown="startMoving" @mousemove="moveJoystick" @mouseup="stopMoving" @mouseleave="stopMoving" :title="t('panel.pilot.joystick')">

          <div class="w-12 h-12 bg-blue-500 rounded-full transform shadow-lg ring-4 ring-blue-400 transition-transform duration-200 ease-out" :style="{ transform: `translate(${joystickPosition.x}px, ${joystickPosition.y}px)` }" >
            <div class="w-full h-full rounded-full bg-gradient-to-br from-blue-400 to-blue-600"></div>
          </div>

        </div>

        <!-- Vertical control buttons -->
        <div class="absolute bottom-20 right-10 w-1/5 md:w-1/6 flex flex-col justify-center items-center">
            <NuxtImg src="/images/icon/arrow.svg" class="w-16 rotate-180 cursor-pointer" @click="adjustAltitude('up')" :title="t('panel.pilot.up')"></NuxtImg>
          
            <NuxtImg src="/images/icon/arrow.svg" class="w-16 cursor-pointer" @click="adjustAltitude('down')" :title="t('panel.pilot.down')"></NuxtImg>
        </div>

        <!-- Fullscreen button -->
        <button class="absolute top-4 right-4 bg-opacity-80 text-white flex items-center justify-center opacity-90 hover:opacity-100 p-1" @click="toggleFullscreen">
            <NuxtImg v-if="!isFullscreen" src="/images/icon/fullscreen.svg" class="w-6"></NuxtImg>

            <NuxtImg v-else src="/images/icon/fullscreen-exit.svg" class="w-6"></NuxtImg>
        </button>

      </div>
    </div>
  </main>
</template>
