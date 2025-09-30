<script setup>
    import { useRuntimeConfig } from '#app'

    const { t } = useI18n();
    const runtimeConfig = useRuntimeConfig()
    const toast = useToast();
    const router = useRouter()


    onMounted(()=>{
        logout();
        sessionStorage.clear();
        localStorage.clear();

        if ('caches' in window) {
            caches.keys().then(function(cacheNames) {
                cacheNames.forEach(function(cacheName) {
                    caches.delete(cacheName);
                });
            });
        }
    })
    
    const logout = async () => {
        try {
            const res = await fetch(`${runtimeConfig.public.serverURL}/auth/logout`, {
                method: 'POST',
                credentials: 'include',
            });

            if (res.ok) {
                router.push("/")
            }
        } catch (err) {}
    }

</script>
<template>
<div class="w-screen h-screen">
        <section class="bg-gray-50 dark:bg-gray-900">
            <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <div class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                    <NuxtImg class="h-8 mr-2" src="/images/logo.png" alt="Rescue Drone logo"></NuxtImg>
                    Rescue Drone    
                </div>
                <div class="w-full bg-white/10 rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700 cursor-progress">
                    <div class="p-24">
                        <p class="text-2xl font-bold">{{ t('panel.primary.logingOut') }}</p>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>