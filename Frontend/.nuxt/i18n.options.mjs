
// @ts-nocheck
import locale_C_58_C_58_Users_kacpe_Desktop_Rescue_32Drone_Frontend_with_panel_i18n_pl_PL_js from "../i18n/pl-PL.js";
import locale_C_58_C_58_Users_kacpe_Desktop_Rescue_32Drone_Frontend_with_panel_i18n_en_EN_js from "../i18n/en-EN.js";
import locale_C_58_C_58_Users_kacpe_Desktop_Rescue_32Drone_Frontend_with_panel_i18n_fr_FR_js from "../i18n/fr-FR.js";
import locale_C_58_C_58_Users_kacpe_Desktop_Rescue_32Drone_Frontend_with_panel_i18n_es_ESP_js from "../i18n/es-ESP.js";
import locale_C_58_C_58_Users_kacpe_Desktop_Rescue_32Drone_Frontend_with_panel_i18n_zh_CH_js from "../i18n/zh-CH.js";


export const localeCodes =  [
  "pl",
  "en",
  "fr",
  "es",
  "zh"
]

export const localeLoaders = {
  "pl": [{ key: "../i18n/pl-PL.js", load: () => Promise.resolve(locale_C_58_C_58_Users_kacpe_Desktop_Rescue_32Drone_Frontend_with_panel_i18n_pl_PL_js), cache: true }],
  "en": [{ key: "../i18n/en-EN.js", load: () => Promise.resolve(locale_C_58_C_58_Users_kacpe_Desktop_Rescue_32Drone_Frontend_with_panel_i18n_en_EN_js), cache: true }],
  "fr": [{ key: "../i18n/fr-FR.js", load: () => Promise.resolve(locale_C_58_C_58_Users_kacpe_Desktop_Rescue_32Drone_Frontend_with_panel_i18n_fr_FR_js), cache: true }],
  "es": [{ key: "../i18n/es-ESP.js", load: () => Promise.resolve(locale_C_58_C_58_Users_kacpe_Desktop_Rescue_32Drone_Frontend_with_panel_i18n_es_ESP_js), cache: true }],
  "zh": [{ key: "../i18n/zh-CH.js", load: () => Promise.resolve(locale_C_58_C_58_Users_kacpe_Desktop_Rescue_32Drone_Frontend_with_panel_i18n_zh_CH_js), cache: true }]
}

export const vueI18nConfigs = [
  
]

export const nuxtI18nOptions = {
  "restructureDir": "i18n",
  "experimental": {
    "localeDetector": "localeDetector.ts",
    "switchLocalePathLinkSSR": false,
    "autoImportTranslationFunctions": false,
    "typedPages": true,
    "typedOptionsAndMessages": false
  },
  "bundle": {
    "compositionOnly": true,
    "runtimeOnly": false,
    "fullInstall": true,
    "dropMessageCompiler": false
  },
  "compilation": {
    "jit": true,
    "strictMessage": true,
    "escapeHtml": false
  },
  "customBlocks": {
    "defaultSFCLang": "json",
    "globalSFCScope": false
  },
  "vueI18n": "",
  "locales": [
    {
      "code": "pl",
      "iso": "pl-PL",
      "files": [
        "C:/Users/kacpe/Desktop/Rescue Drone/Frontend_with_panel/i18n/pl-PL.js"
      ]
    },
    {
      "code": "en",
      "iso": "en-US",
      "files": [
        "C:/Users/kacpe/Desktop/Rescue Drone/Frontend_with_panel/i18n/en-EN.js"
      ]
    },
    {
      "code": "fr",
      "iso": "fr-FR",
      "files": [
        "C:/Users/kacpe/Desktop/Rescue Drone/Frontend_with_panel/i18n/fr-FR.js"
      ]
    },
    {
      "code": "es",
      "iso": "es-ESP",
      "files": [
        "C:/Users/kacpe/Desktop/Rescue Drone/Frontend_with_panel/i18n/es-ESP.js"
      ]
    },
    {
      "code": "zh",
      "iso": "zh-ZH",
      "files": [
        "C:/Users/kacpe/Desktop/Rescue Drone/Frontend_with_panel/i18n/zh-CH.js"
      ]
    }
  ],
  "defaultLocale": "pl",
  "defaultDirection": "ltr",
  "routesNameSeparator": "___",
  "trailingSlash": false,
  "defaultLocaleRouteNameSuffix": "default",
  "strategy": "prefix_and_default",
  "lazy": false,
  "langDir": "./",
  "detectBrowserLanguage": {
    "alwaysRedirect": false,
    "cookieCrossOrigin": false,
    "cookieDomain": null,
    "cookieKey": "i18n_redirected",
    "cookieSecure": false,
    "fallbackLocale": "",
    "redirectOn": "root",
    "useCookie": true
  },
  "differentDomains": false,
  "baseUrl": "",
  "customRoutes": "config",
  "pages": {
    "about": {
      "en": "/about",
      "pl": "/o-projekcie",
      "fr": "/a-propos-du-projet",
      "es": "/proyecto",
      "zh": "/关于"
    },
    "service": {
      "en": "/service",
      "pl": "/usluga",
      "fr": "/service",
      "es": "/servicio",
      "zh": "/服务"
    },
    "login": {
      "en": "/login",
      "pl": "/zaloguj",
      "fr": "/login",
      "es": "/acceso",
      "zh": "/登录"
    },
    "panel": {
      "en": "/panel",
      "pl": "/panel",
      "fr": "/panneau",
      "es": "/panel",
      "zh": "/控制板"
    },
    "panel-drones": {
      "en": "/panel/drones",
      "pl": "/panel/drony"
    },
    "panel-drones-id-details": {
      "en": "/panel/drones/[id]/details",
      "pl": "/panel/drony/[id]/szczegoly"
    },
    "panel-drones-id-management": {
      "en": "/panel/drones/[id]/management",
      "pl": "/panel/drony/[id]/zarzadzanie"
    },
    "panel-drones-id-pilot": {
      "en": "/panel/drones/[id]/pilot",
      "pl": "/panel/drony/[id]/sterowanie"
    },
    "panel-logout": {
      "en": "/panel/logout",
      "pl": "/panel/wyloguj"
    }
  },
  "skipSettingLocaleOnNavigate": false,
  "types": "composition",
  "debug": false,
  "parallelPlugin": false,
  "multiDomainLocales": false,
  "i18nModules": []
}

export const normalizedLocales = [
  {
    "code": "pl",
    "iso": "pl-PL",
    "files": [
      {
        "path": "C:/Users/kacpe/Desktop/Rescue Drone/Frontend_with_panel/i18n/pl-PL.js"
      }
    ]
  },
  {
    "code": "en",
    "iso": "en-US",
    "files": [
      {
        "path": "C:/Users/kacpe/Desktop/Rescue Drone/Frontend_with_panel/i18n/en-EN.js"
      }
    ]
  },
  {
    "code": "fr",
    "iso": "fr-FR",
    "files": [
      {
        "path": "C:/Users/kacpe/Desktop/Rescue Drone/Frontend_with_panel/i18n/fr-FR.js"
      }
    ]
  },
  {
    "code": "es",
    "iso": "es-ESP",
    "files": [
      {
        "path": "C:/Users/kacpe/Desktop/Rescue Drone/Frontend_with_panel/i18n/es-ESP.js"
      }
    ]
  },
  {
    "code": "zh",
    "iso": "zh-ZH",
    "files": [
      {
        "path": "C:/Users/kacpe/Desktop/Rescue Drone/Frontend_with_panel/i18n/zh-CH.js"
      }
    ]
  }
]

export const NUXT_I18N_MODULE_ID = "@nuxtjs/i18n"
export const parallelPlugin = false
export const isSSG = false

export const DEFAULT_DYNAMIC_PARAMS_KEY = "nuxtI18nInternal"
export const DEFAULT_COOKIE_KEY = "i18n_redirected"
export const SWITCH_LOCALE_PATH_LINK_IDENTIFIER = "nuxt-i18n-slp"
