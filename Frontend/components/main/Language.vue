<script setup>
    const { locale, setLocale, t } = useI18n();

    var preventTooltip = ref(false);

    const changeLanguage = (lang) => {
        preventTooltip = true;

        if(lang){
            setLocale(lang);
        }
    }


    const items = [
    [{
        label: 'PL',
        avatar: {
        src: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 512 512'%3E%3Cmask id='circleFlagsPl0'%3E%3Ccircle cx='256' cy='256' r='256' fill='%23fff'/%3E%3C/mask%3E%3Cg mask='url(%23circleFlagsPl0)'%3E%3Cpath fill='%23d80027' d='m0 256l256.4-44.3L512 256v256H0z'/%3E%3Cpath fill='%23eee' d='M0 0h512v256H0z'/%3E%3C/g%3E%3C/svg%3E",
        alt: "Polish flag"
        },
        click: ()=>{changeLanguage('pl')},
    }],
    [{
        label: 'EN',
        avatar: {
        src: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 512 512'%3E%3Cmask id='circleFlagsUk0'%3E%3Ccircle cx='256' cy='256' r='256' fill='%23fff'/%3E%3C/mask%3E%3Cg mask='url(%23circleFlagsUk0)'%3E%3Cpath fill='%23eee' d='m0 0l8 22l-8 23v23l32 54l-32 54v32l32 48l-32 48v32l32 54l-32 54v68l22-8l23 8h23l54-32l54 32h32l48-32l48 32h32l54-32l54 32h68l-8-22l8-23v-23l-32-54l32-54v-32l-32-48l32-48v-32l-32-54l32-54V0l-22 8l-23-8h-23l-54 32l-54-32h-32l-48 32l-48-32h-32l-54 32L68 0z'/%3E%3Cpath fill='%230052b4' d='M336 0v108L444 0Zm176 68L404 176h108zM0 176h108L0 68ZM68 0l108 108V0Zm108 512V404L68 512ZM0 444l108-108H0Zm512-108H404l108 108Zm-68 176L336 404v108z'/%3E%3Cpath fill='%23d80027' d='M0 0v45l131 131h45zm208 0v208H0v96h208v208h96V304h208v-96H304V0zm259 0L336 131v45L512 0zM176 336L0 512h45l131-131zm160 0l176 176v-45L381 336z'/%3E%3C/g%3E%3C/svg%3E",
        alt: "UK flag"
        },
        click: ()=>{changeLanguage('en')},
    }],
    [{
        label: 'FR',
        avatar: {
        src: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' version='1.1' width='1em' height='1em' viewBox='0 0 256 256' xml:space='preserve'> <defs> </defs> <g style='stroke: none; stroke-width: 0; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: none; fill-rule: nonzero; opacity: 1;' transform='translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)' > <path d='M 59.999 2.571 l 0 84.859 c 17.466 -6.175 29.985 -22.818 30 -42.396 v -0.068 C 89.985 25.389 77.465 8.745 59.999 2.571 z' style='stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(243,24,48); fill-rule: nonzero; opacity: 1;' transform=' matrix(1 0 0 1 0 0) ' stroke-linecap='round' /> <path d='M 30 87.429 l 0 -84.858 C 12.524 8.75 0 25.408 0 45 S 12.524 81.25 30 87.429 z' style='stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,38,127); fill-rule: nonzero; opacity: 1;' transform=' matrix(1 0 0 1 0 0) ' stroke-linecap='round' /> <path d='M 30 87.429 C 34.693 89.088 39.739 90 45 90 c 5.261 0 10.307 -0.911 15 -2.571 l 0 -84.859 C 55.307 0.911 50.261 0 45 0 c -5.261 0 -10.307 0.912 -15 2.571 L 30 87.429 z' style='stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(243,244,245); fill-rule: nonzero; opacity: 1;' transform=' matrix(1 0 0 1 0 0) ' stroke-linecap='round' /> </g> </svg>",
        alt: "French flag"
        },
        click: ()=>{changeLanguage('fr')},
    }],
    [{
        label: 'ES',
        avatar: {
        src: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' version='1.1' width='1em' height='1em' viewBox='0 0 256 256' xml:space='preserve'> <defs> </defs> <g style='stroke: none; stroke-width: 0; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: none; fill-rule: nonzero; opacity: 1;' transform='translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)' > <path d='M 0 45 c 0 8.199 2.202 15.88 6.034 22.5 h 77.932 C 87.798 60.88 90 53.199 90 45 c 0 -8.199 -2.202 -15.88 -6.034 -22.5 H 6.034 C 2.202 29.12 0 36.801 0 45 z' style='stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,196,0); fill-rule: nonzero; opacity: 1;' transform=' matrix(1 0 0 1 0 0) ' stroke-linecap='round' /> <path d='M 83.966 22.5 c -0.269 -0.465 -0.546 -0.926 -0.831 -1.381 C 75.176 8.438 61.077 0 45 0 c -8.201 0 -15.881 2.205 -22.5 6.04 c -6.357 3.682 -11.736 8.867 -15.635 15.08 C 6.58 21.574 6.304 22.035 6.034 22.5 H 83.966 z' style='stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(198,11,30); fill-rule: nonzero; opacity: 1;' transform=' matrix(1 0 0 1 0 0) ' stroke-linecap='round' /> <path d='M 6.034 67.5 c 0.269 0.465 0.546 0.926 0.831 1.38 c 3.899 6.213 9.278 11.397 15.635 15.08 C 29.119 87.795 36.799 90 45 90 c 16.077 0 30.176 -8.438 38.135 -21.12 c 0.285 -0.455 0.562 -0.915 0.831 -1.38 H 6.034 z' style='stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(198,11,30); fill-rule: nonzero; opacity: 1;' transform=' matrix(1 0 0 1 0 0) ' stroke-linecap='round' /> </g> </svg>",
        alt: "Espanol flag"
        },
        click: ()=>{changeLanguage('es')},
    }],
    [{
        label: 'ZH',
        avatar: {
        src: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' version='1.1' width='1em' height='1em' viewBox='0 0 256 256' xml:space='preserve'> <defs> </defs> <g style='stroke: none; stroke-width: 0; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: none; fill-rule: nonzero; opacity: 1;' transform='translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)' > <circle cx='45' cy='45' r='45' style='stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(222,41,16); fill-rule: nonzero; opacity: 1;' transform='  matrix(1 0 0 1 0 0) '/> <polygon points='25.78,27.66 22.93,18.9 20.09,27.66 10.85,27.66 18.32,33.09 15.47,41.87 22.93,36.44 30.4,41.87 27.55,33.09 35.02,27.66 ' style='stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,222,0); fill-rule: nonzero; opacity: 1;' transform='  matrix(1 0 0 1 0 0) '/> <polygon points='43.5,20.39 45.09,23.03 45.36,19.96 48.36,19.27 45.53,18.07 45.8,15 43.78,17.32 40.95,16.12 42.53,18.76 40.51,21.07 ' style='stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,222,0); fill-rule: nonzero; opacity: 1;' transform='  matrix(1 0 0 1 0 0) '/> <polygon points='51.81,31.5 53.25,28.77 56.29,29.3 54.14,27.09 55.58,24.38 52.82,25.73 50.67,23.52 51.11,26.57 48.35,27.92 51.38,28.45 ' style='stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,222,0); fill-rule: nonzero; opacity: 1;' transform='  matrix(1 0 0 1 0 0) '/> <polygon points='54.1,40.5 56.52,38.6 53.45,38.71 52.39,35.82 51.54,38.78 48.48,38.89 51.02,40.6 50.17,43.56 52.6,41.67 55.15,43.39 ' style='stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,222,0); fill-rule: nonzero; opacity: 1;' transform='  matrix(1 0 0 1 0 0) '/> <polygon points='45.43,47.63 45.57,44.56 43.65,46.96 40.77,45.88 42.46,48.44 40.54,50.85 43.51,50.03 45.2,52.61 45.34,49.53 48.31,48.72 ' style='stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,222,0); fill-rule: nonzero; opacity: 1;' transform='  matrix(1 0 0 1 0 0) '/> </g> </svg>",
        alt: "Chinnese flag- zh language"
        },
        click: ()=>{changeLanguage('zh')},
    }]
    
    ]



    const open = ref(false)

    defineShortcuts({
    o: () => open.value = !open.value
    })


    const currentLanguage = () => {
    return items.flat().find(item => item.label.toLowerCase() === locale.value.toLowerCase());
    };
</script>

<template>
    <div class="flex flex-row justify-between items-center pr-1 text-white">

        <UTooltip :text="$t('mainPages.primary.changeLanguage')" :shortcuts="['l']" :popper="{ placement: 'left', gpuAcceleration: true }" :prevent="preventTooltip" class="text-white">

            <UDropdown v-model:open="open" :items="items" :popper="{ placement: 'bottom-start', gpuAcceleration: true }" :ui="{width: 'w-12 md:w-24', background: 'bg-white', borderColor: 'border-0', item: {active: 'font-semibold'}}">

                <UButton color="white" :label="currentLanguage()?.label" trailing-icon="i-heroicons-chevron-down-20-solid" :ui="{width: 'w-12 md:w-24', text: 'black', borderColor: 'white'}">

                <template #leading>
                    <UAvatar :src="currentLanguage()?.avatar.src" :alt="currentLanguage()?.avatar.alt" />
                </template>
                </UButton>
            </UDropdown>

        </UTooltip>

    </div>
</template>