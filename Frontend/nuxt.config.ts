// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,

  modules: [
    '@nuxt/image', 
    '@nuxtjs/i18n',
    '@nuxt/ui', 
    '@nuxtjs/google-fonts', 
    '@pinia/nuxt', 
    'pinia-plugin-persistedstate/nuxt', 
    "@nuxtjs/seo",
    '@nuxtjs/tailwindcss',
    'nuxt-build-cache'
  ],

  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },

  app:{
    rootTag: "RescueDrone",
    head: {
      titleTemplate: '%pageTitle',

      meta: [
        {
          "name": "viewport",
          "content": "initial-scale=1.0 , minimum-scale=1.0 , maximum-scale=5.0"
        },
        {
          "charset": "utf-8"
        },
        {
          "name": "title",
          "content": "Rescue Drone"
        },
        {
          "name": "handheldFriendly",
          "content": "true"
        },
        {
          "name": "robots",
          "content": "all"
        },
        {
          "name": "googlebot",
          "content": "all"
        },
        {
          "name": "author",
          "content": "Kacper Drobik"
        },
        {
          "name": "apple-mobile-web-app-capable",
          "content": "true"
        },
        {
          "name": "theme-color",
          "content": "#4cf15f"
        },
        {
          "name": "og:type",
          "content": "website"
        },
        {
          "property": "image",
          "content": "https://rescuedrone.pl/images/meta/rescuedrone.png"
        },
        {
          "property": "og:image",
          "content": "https://rescuedrone.pl/images/meta/rescuedrone.png"
        },
        {
          "property": "og:image:url",
          "content": "https://rescuedrone.pl/images/meta/rescuedrone.png"
        },
        {
          "property": "og:image:secure_url",
          "content": "https://rescuedrone.pl/images/meta/rescuedrone.png"
        },
        {
          "property": "og:image:type",
          "content": "image/png"
        },
        {
          "name": "sitemap",
          "content": "https://rescuedrone.pl/sitemap.xml"
        },
        ,
        {
          "property": "og:site_name",
          "content": "Rescue Drone"
        },
        {
          "property": "og:url",
          "content": "https://rescuedrone.pl"
        },
        {
          "name": "copyright",
          "content": "© 2025 Kacper Drobik"
        }
      ],
      link: [
        {
          "rel": "icon",
          "type": "image/ico",
          "href": "https://rescuedrone/images/meta/logo.ico"
        },
        {
          "rel": "apple-touch-icon",
          "type": "image/svg",
          "href": "https://rescuedrone.pl/images/meta/apple-touch-icon.png"
        },
        {
          "rel": "icon",
          "type": "image/png",
          "sizes": "32x32",
          "href": "https://rescuedrone.pl/images/meta/favicon-32x32.png"
        },
        {
          "rel": "icon",
          "type": "image/png",
          "sizes": "16x16",
          "href": "https://rescuedrone.pl/images/meta/favicon-16x16.png"
        },
        {
          "rel": "manifest",
          "href": "https://rescuedrone.pl/images/meta/site.webmanifest"
        },
      ],
      noscript: [
        { children: 'JavaScript is required!' }
      ]

    }
  },

  runtimeConfig: {
    apiSecret: '123',
    public:{
      //serverURL: 'https://drobify-backend.drobik.site',
      serverURL: 'http://localhost:4000'
    }
  },


  image: {
    inject: true,
    quality: 70,
  },

  googleFonts: {
    families:{
      'Lilita+One': true,
      'Lato': true,
    },
    display: 'swap',
    download: true,
  },

  seo: {
    automaticDefaults: true
  },
  ogImage: {
    enabled: true
  },
  site: {
    trailingSlash: false, 
    url: 'https://rescuedrone.pl', 
    name: 'Rescue Drone™' 
  },
  
  
  i18n: {
    langDir: './',
    strategy: 'prefix_and_default',
    defaultLocale: 'pl',
    //baseUrl: "https://drobik.site",
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root' 
    },
    experimental: {
      localeDetector: 'localeDetector.ts'
    },
    customRoutes: 'config',
    

    pages: {
      "about": {
        en: '/about',     
        pl: '/o-projekcie',
        fr: '/a-propos-du-projet',
        es: '/proyecto',
        zh: '/关于'
      },
      "service": {
        en: '/service',     
        pl: '/usluga',
        fr: '/service',
        es: '/servicio',
        zh: '/服务'
      },
      "login": {
        en: '/login',
        pl: '/zaloguj',
        fr: '/login',
        es: '/acceso',
        zh: '/登录'
      },
      "panel": {
        en: '/panel',     
        pl: '/panel',
        fr: '/panneau',
        es: '/panel',
        zh: '/控制板'
      },
      "panel-drones": {
        en: "/panel/drones",
        pl: "/panel/drony"
      },
      "panel-drones-id-details": {
        en: "/panel/drones/[id]/details",
        pl: "/panel/drony/[id]/szczegoly"
      },
      "panel-drones-id-management": {
        en: "/panel/drones/[id]/management",
        pl: "/panel/drony/[id]/zarzadzanie"
      },
      "panel-drones-id-pilot": {
        en: "/panel/drones/[id]/pilot",
        pl: "/panel/drony/[id]/sterowanie"
      },
      "panel-logout": {
        en: "/panel/logout",
        pl: "/panel/wyloguj"
      }
    },

    locales: [
      {
        code: 'pl',
        iso: 'pl-PL',
        file: 'pl-PL.js'
      },
      {
        code: 'en',
        iso: 'en-US',
        file: 'en-EN.js'
      },
      {
        code: 'fr',
        iso: 'fr-FR',
        file: 'fr-FR.js'
      },
      {
        code: 'es',
        iso: 'es-ESP',
        file: 'es-ESP.js'
      },
      {
        code: 'zh',
        iso: 'zh-ZH',
        file: 'zh-CH.js'
      }
    ]
  },



  schemaOrg: {
    identity: {
      type: 'Organization',
      name: 'Rescue Drone',
      legalName: 'Rescue Drone™',
      url: 'https://rescuedrone.pl',
      logo: 'https://rescuedrone.pl/images/meta/rescuedrone.png',
      slogan: 'Your Music, Your Way, Anytime.',
      sameAs: [
        'https://rescuedrone.pl/o-projekcie',
        'https://rescuedrone.pl/usluga',
      ],
      contactPoint: {
        '@type': 'ContactPoint',
        email: 'support@rescuedrone.pl',
        contactType: 'Customer Support',
        url: 'https://rescuedrone.pl/',
        availableLanguage: ['English', 'Polish', 'French', 'Espanol', 'Chinesse']
      },
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'PL',
        addressLocality: 'Warsaw',
        postalCode: '00-000'
      },
      foundingDate: '2024-11-20',
      founder: {
        '@type': 'Person',
        name: 'Kacper Drobik',
        jobTitle: 'Founder & Developer',
        sameAs: ['https://drobik.site/', 'https://www.linkedin.com/in/kacper-drobik/', 'https://www.instagram.com/__kacperrr___']
      },
      memberOf: {
        '@type': 'Organization',
        name: 'Kacper Drobik',
        url: 'https://drobik.site'
      },
      description: 'Rescue Drone to innowacyjny projekt drona ratunkowego, który dzięki AI i zaawansowanej nawigacji pomaga w sytuacjach kryzysowych, takich jak powodzie. Szybka dostawa apteczek, żywności i AED w trudno dostępne miejsca.',
      potentialAction: {
        '@type': 'ViewAction',
        target: 'https://rescuedrone.pl/panel',
        name: 'Panel'
      },
    }
  },

})
