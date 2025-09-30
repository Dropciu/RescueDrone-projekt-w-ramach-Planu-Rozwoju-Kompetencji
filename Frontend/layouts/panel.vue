<script setup>
    import Navbar from '~/components/panel/Navbar.vue'
    import Sidebar from '~/components/panel/Sidebar.vue'
    import Footer from "~/components/panel/Footer.vue"
    import { useUser } from '~/pages/store/user.js';
    import { useDrones } from '~/pages/store/drones.js';
    import { getMe, getMyPicture, getDrones } from '~/controllerAPI/API';

    const router = useRouter()
    const localePath = useLocalePath()
    const user = useUser();
    const drones = useDrones();

    const initialRequest = async () => {
        const userData = await getMe();
        user.setUser(userData.name, userData.surname, userData.email)

        const myPicture = await getMyPicture();
        user.setPicture(myPicture.picture);

        const myDrones = await getDrones();
        drones.setDrones(myDrones);
    }

    onBeforeMount(() => {
        if (!document.cookie.split(';').some(cookie => cookie.trim().startsWith('loggedIn='))) {
            const localizedPath = localePath({ name: 'login' })
            router.push(localizedPath)
        }
        
        initialRequest();
    })
    
</script>

<template>
    <Navbar></Navbar>

    <Sidebar></Sidebar>

    <UNotifications :ui="{wrapper: 'z-[40]'}" />
    
    <slot />

    <Footer></Footer>
</template>




<style>
  ::-webkit-scrollbar {
    width: 10px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: #f1f1f1; 
  }
  
  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #888; 
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #555; 
  }

</style>