<script setup>
    import Language from './Language.vue';

    const { t } = useI18n();

    const navbarActive = ref(false);

    const toggleNavbarActive = () => {
        navbarActive.value = !navbarActive.value;
    }

</script>


<template>
    

    <nav class="bg-white border-gray-200 dark:bg-gray-900">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            
            <NuxtLinkLocale to="/" class="flex items-center space-x-3 rtl:space-x-reverse">

                <NuxtImg src="images/logo.png" class="h-9 md:h-10 lg:h-12" alt="Rescue Drone Logo"></NuxtImg>

                <span class="hidden md:block self-center text-lg md:text-2xl font-semibold whitespace-nowrap dark:text-white">Rescue Drone&trade;</span>

            </NuxtLinkLocale>


            <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                <NuxtLinkLocale to="login">
                    <button type="button" class="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-base px-4 py-2 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">{{ t('mainPages.primary.panel') }}</button>
                </NuxtLinkLocale>

                <button @click="toggleNavbarActive" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                    <span class="sr-only">{{ t('mainPages.primary.openMainMenu') }}</span>
                    <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
                    </svg>
                </button>

                <div class="pl-8">
                    <Language></Language>
                </div>
            </div>

            
            <div :class="navbarActive ? '' : 'hidden md:flex'" class="items-center justify-between w-full md:flex md:w-auto md:order-1">

                <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                
                <li>
                    <NuxtLinkLocale to="/" class="block py-2 px-3 md:p-0 text-white bg-green-700 rounded md:bg-transparent md:text-green-700 md:dark:text-green-500" aria-current="page">{{ t('mainPages.primary.home') }}</NuxtLinkLocale>
                </li>
                <li>
                    <NuxtLinkLocale to="about" class="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green-700 md:dark:hover:text-green-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">{{ t('mainPages.primary.about') }}</NuxtLinkLocale>
                </li>
                <li>
                    <NuxtLinkLocale to="service" class="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green-700 md:dark:hover:text-green-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">{{ t('mainPages.primary.service') }}</NuxtLinkLocale>
                </li>
                </ul>
            </div>
        </div>
    </nav>

</template>