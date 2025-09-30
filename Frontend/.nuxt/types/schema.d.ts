import { NuxtModule, RuntimeConfig } from '@nuxt/schema'
declare module '@nuxt/schema' {
  interface NuxtOptions {
    /**
     * Configuration for `@nuxt/image`
     */
    ["image"]: typeof import("@nuxt/image").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@nuxtjs/i18n`
     */
    ["i18n"]: typeof import("@nuxtjs/i18n").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@nuxt/icon`
     */
    ["icon"]: typeof import("@nuxt/icon").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@nuxtjs/color-mode`
     */
    ["colorMode"]: typeof import("@nuxtjs/color-mode").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@nuxtjs/tailwindcss`
     */
    ["tailwindcss"]: typeof import("@nuxtjs/tailwindcss").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@nuxt/ui`
     */
    ["ui"]: typeof import("@nuxt/ui").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@nuxtjs/google-fonts`
     */
    ["googleFonts"]: typeof import("@nuxtjs/google-fonts").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@pinia/nuxt`
     */
    ["pinia"]: typeof import("@pinia/nuxt").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `pinia-plugin-persistedstate/nuxt`
     */
    ["piniaPluginPersistedstate"]: typeof import("pinia-plugin-persistedstate/nuxt").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `C:/Users/kacpe/Desktop/Rescue Drone/Frontend_with_panel/node_modules/nuxt-site-config/dist/module`
     */
    ["site"]: typeof import("C:/Users/kacpe/Desktop/Rescue Drone/Frontend_with_panel/node_modules/nuxt-site-config/dist/module").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `C:/Users/kacpe/Desktop/Rescue Drone/Frontend_with_panel/node_modules/@nuxtjs/robots/dist/module`
     */
    ["robots"]: typeof import("C:/Users/kacpe/Desktop/Rescue Drone/Frontend_with_panel/node_modules/@nuxtjs/robots/dist/module").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `C:/Users/kacpe/Desktop/Rescue Drone/Frontend_with_panel/node_modules/@nuxtjs/sitemap/dist/module`
     */
    ["sitemap"]: typeof import("C:/Users/kacpe/Desktop/Rescue Drone/Frontend_with_panel/node_modules/@nuxtjs/sitemap/dist/module").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `C:/Users/kacpe/Desktop/Rescue Drone/Frontend_with_panel/node_modules/nuxt-og-image/dist/module`
     */
    ["ogImage"]: typeof import("C:/Users/kacpe/Desktop/Rescue Drone/Frontend_with_panel/node_modules/nuxt-og-image/dist/module").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `C:/Users/kacpe/Desktop/Rescue Drone/Frontend_with_panel/node_modules/nuxt-schema-org/dist/module`
     */
    ["schemaOrg"]: typeof import("C:/Users/kacpe/Desktop/Rescue Drone/Frontend_with_panel/node_modules/nuxt-schema-org/dist/module").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `C:/Users/kacpe/Desktop/Rescue Drone/Frontend_with_panel/node_modules/nuxt-seo-experiments/dist/module`
     */
    ["seoExperiments"]: typeof import("C:/Users/kacpe/Desktop/Rescue Drone/Frontend_with_panel/node_modules/nuxt-seo-experiments/dist/module").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `C:/Users/kacpe/Desktop/Rescue Drone/Frontend_with_panel/node_modules/nuxt-link-checker/dist/module`
     */
    ["linkChecker"]: typeof import("C:/Users/kacpe/Desktop/Rescue Drone/Frontend_with_panel/node_modules/nuxt-link-checker/dist/module").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@nuxtjs/seo`
     */
    ["seo"]: typeof import("@nuxtjs/seo").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@nuxt/telemetry`
     */
    ["telemetry"]: typeof import("@nuxt/telemetry").default extends NuxtModule<infer O> ? O : Record<string, any>
  }
  interface NuxtConfig {
    /**
     * Configuration for `@nuxt/image`
     */
    ["image"]?: typeof import("@nuxt/image").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxtjs/i18n`
     */
    ["i18n"]?: typeof import("@nuxtjs/i18n").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxt/icon`
     */
    ["icon"]?: typeof import("@nuxt/icon").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxtjs/color-mode`
     */
    ["colorMode"]?: typeof import("@nuxtjs/color-mode").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxtjs/tailwindcss`
     */
    ["tailwindcss"]?: typeof import("@nuxtjs/tailwindcss").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxt/ui`
     */
    ["ui"]?: typeof import("@nuxt/ui").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxtjs/google-fonts`
     */
    ["googleFonts"]?: typeof import("@nuxtjs/google-fonts").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@pinia/nuxt`
     */
    ["pinia"]?: typeof import("@pinia/nuxt").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `pinia-plugin-persistedstate/nuxt`
     */
    ["piniaPluginPersistedstate"]?: typeof import("pinia-plugin-persistedstate/nuxt").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `C:/Users/kacpe/Desktop/Rescue Drone/Frontend_with_panel/node_modules/nuxt-site-config/dist/module`
     */
    ["site"]?: typeof import("C:/Users/kacpe/Desktop/Rescue Drone/Frontend_with_panel/node_modules/nuxt-site-config/dist/module").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `C:/Users/kacpe/Desktop/Rescue Drone/Frontend_with_panel/node_modules/@nuxtjs/robots/dist/module`
     */
    ["robots"]?: typeof import("C:/Users/kacpe/Desktop/Rescue Drone/Frontend_with_panel/node_modules/@nuxtjs/robots/dist/module").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `C:/Users/kacpe/Desktop/Rescue Drone/Frontend_with_panel/node_modules/@nuxtjs/sitemap/dist/module`
     */
    ["sitemap"]?: typeof import("C:/Users/kacpe/Desktop/Rescue Drone/Frontend_with_panel/node_modules/@nuxtjs/sitemap/dist/module").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `C:/Users/kacpe/Desktop/Rescue Drone/Frontend_with_panel/node_modules/nuxt-og-image/dist/module`
     */
    ["ogImage"]?: typeof import("C:/Users/kacpe/Desktop/Rescue Drone/Frontend_with_panel/node_modules/nuxt-og-image/dist/module").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `C:/Users/kacpe/Desktop/Rescue Drone/Frontend_with_panel/node_modules/nuxt-schema-org/dist/module`
     */
    ["schemaOrg"]?: typeof import("C:/Users/kacpe/Desktop/Rescue Drone/Frontend_with_panel/node_modules/nuxt-schema-org/dist/module").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `C:/Users/kacpe/Desktop/Rescue Drone/Frontend_with_panel/node_modules/nuxt-seo-experiments/dist/module`
     */
    ["seoExperiments"]?: typeof import("C:/Users/kacpe/Desktop/Rescue Drone/Frontend_with_panel/node_modules/nuxt-seo-experiments/dist/module").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `C:/Users/kacpe/Desktop/Rescue Drone/Frontend_with_panel/node_modules/nuxt-link-checker/dist/module`
     */
    ["linkChecker"]?: typeof import("C:/Users/kacpe/Desktop/Rescue Drone/Frontend_with_panel/node_modules/nuxt-link-checker/dist/module").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxtjs/seo`
     */
    ["seo"]?: typeof import("@nuxtjs/seo").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxt/telemetry`
     */
    ["telemetry"]?: typeof import("@nuxt/telemetry").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    modules?: (undefined | null | false | NuxtModule<any> | string | [NuxtModule | string, Record<string, any>] | ["@nuxt/image", Exclude<NuxtConfig["image"], boolean>] | ["@nuxtjs/i18n", Exclude<NuxtConfig["i18n"], boolean>] | ["@nuxt/icon", Exclude<NuxtConfig["icon"], boolean>] | ["@nuxtjs/color-mode", Exclude<NuxtConfig["colorMode"], boolean>] | ["@nuxtjs/tailwindcss", Exclude<NuxtConfig["tailwindcss"], boolean>] | ["@nuxt/ui", Exclude<NuxtConfig["ui"], boolean>] | ["@nuxtjs/google-fonts", Exclude<NuxtConfig["googleFonts"], boolean>] | ["@pinia/nuxt", Exclude<NuxtConfig["pinia"], boolean>] | ["pinia-plugin-persistedstate/nuxt", Exclude<NuxtConfig["piniaPluginPersistedstate"], boolean>] | ["C:/Users/kacpe/Desktop/Rescue Drone/Frontend_with_panel/node_modules/nuxt-site-config/dist/module", Exclude<NuxtConfig["site"], boolean>] | ["C:/Users/kacpe/Desktop/Rescue Drone/Frontend_with_panel/node_modules/@nuxtjs/robots/dist/module", Exclude<NuxtConfig["robots"], boolean>] | ["C:/Users/kacpe/Desktop/Rescue Drone/Frontend_with_panel/node_modules/@nuxtjs/sitemap/dist/module", Exclude<NuxtConfig["sitemap"], boolean>] | ["C:/Users/kacpe/Desktop/Rescue Drone/Frontend_with_panel/node_modules/nuxt-og-image/dist/module", Exclude<NuxtConfig["ogImage"], boolean>] | ["C:/Users/kacpe/Desktop/Rescue Drone/Frontend_with_panel/node_modules/nuxt-schema-org/dist/module", Exclude<NuxtConfig["schemaOrg"], boolean>] | ["C:/Users/kacpe/Desktop/Rescue Drone/Frontend_with_panel/node_modules/nuxt-seo-experiments/dist/module", Exclude<NuxtConfig["seoExperiments"], boolean>] | ["C:/Users/kacpe/Desktop/Rescue Drone/Frontend_with_panel/node_modules/nuxt-link-checker/dist/module", Exclude<NuxtConfig["linkChecker"], boolean>] | ["@nuxtjs/seo", Exclude<NuxtConfig["seo"], boolean>] | ["@nuxt/telemetry", Exclude<NuxtConfig["telemetry"], boolean>])[],
  }
}
declare module 'nuxt/schema' {
  interface NuxtOptions {
    /**
     * Configuration for `@nuxt/image`
     * @see https://www.npmjs.com/package/@nuxt/image
     */
    ["image"]: typeof import("@nuxt/image").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@nuxtjs/i18n`
     * @see https://www.npmjs.com/package/@nuxtjs/i18n
     */
    ["i18n"]: typeof import("@nuxtjs/i18n").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@nuxt/icon`
     * @see https://www.npmjs.com/package/@nuxt/icon
     */
    ["icon"]: typeof import("@nuxt/icon").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@nuxtjs/color-mode`
     * @see https://www.npmjs.com/package/@nuxtjs/color-mode
     */
    ["colorMode"]: typeof import("@nuxtjs/color-mode").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@nuxtjs/tailwindcss`
     * @see https://www.npmjs.com/package/@nuxtjs/tailwindcss
     */
    ["tailwindcss"]: typeof import("@nuxtjs/tailwindcss").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@nuxt/ui`
     * @see https://www.npmjs.com/package/@nuxt/ui
     */
    ["ui"]: typeof import("@nuxt/ui").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@nuxtjs/google-fonts`
     * @see https://www.npmjs.com/package/@nuxtjs/google-fonts
     */
    ["googleFonts"]: typeof import("@nuxtjs/google-fonts").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@pinia/nuxt`
     * @see https://www.npmjs.com/package/@pinia/nuxt
     */
    ["pinia"]: typeof import("@pinia/nuxt").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `pinia-plugin-persistedstate/nuxt`
     * @see https://www.npmjs.com/package/pinia-plugin-persistedstate/nuxt
     */
    ["piniaPluginPersistedstate"]: typeof import("pinia-plugin-persistedstate/nuxt").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `C:/Users/kacpe/Desktop/Rescue Drone/Frontend_with_panel/node_modules/nuxt-site-config/dist/module`
     * @see https://www.npmjs.com/package/C:/Users/kacpe/Desktop/Rescue Drone/Frontend_with_panel/node_modules/nuxt-site-config/dist/module
     */
    ["site"]: typeof import("C:/Users/kacpe/Desktop/Rescue Drone/Frontend_with_panel/node_modules/nuxt-site-config/dist/module").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `C:/Users/kacpe/Desktop/Rescue Drone/Frontend_with_panel/node_modules/@nuxtjs/robots/dist/module`
     * @see https://www.npmjs.com/package/C:/Users/kacpe/Desktop/Rescue Drone/Frontend_with_panel/node_modules/@nuxtjs/robots/dist/module
     */
    ["robots"]: typeof import("C:/Users/kacpe/Desktop/Rescue Drone/Frontend_with_panel/node_modules/@nuxtjs/robots/dist/module").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `C:/Users/kacpe/Desktop/Rescue Drone/Frontend_with_panel/node_modules/@nuxtjs/sitemap/dist/module`
     * @see https://www.npmjs.com/package/C:/Users/kacpe/Desktop/Rescue Drone/Frontend_with_panel/node_modules/@nuxtjs/sitemap/dist/module
     */
    ["sitemap"]: typeof import("C:/Users/kacpe/Desktop/Rescue Drone/Frontend_with_panel/node_modules/@nuxtjs/sitemap/dist/module").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `C:/Users/kacpe/Desktop/Rescue Drone/Frontend_with_panel/node_modules/nuxt-og-image/dist/module`
     * @see https://www.npmjs.com/package/C:/Users/kacpe/Desktop/Rescue Drone/Frontend_with_panel/node_modules/nuxt-og-image/dist/module
     */
    ["ogImage"]: typeof import("C:/Users/kacpe/Desktop/Rescue Drone/Frontend_with_panel/node_modules/nuxt-og-image/dist/module").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `C:/Users/kacpe/Desktop/Rescue Drone/Frontend_with_panel/node_modules/nuxt-schema-org/dist/module`
     * @see https://www.npmjs.com/package/C:/Users/kacpe/Desktop/Rescue Drone/Frontend_with_panel/node_modules/nuxt-schema-org/dist/module
     */
    ["schemaOrg"]: typeof import("C:/Users/kacpe/Desktop/Rescue Drone/Frontend_with_panel/node_modules/nuxt-schema-org/dist/module").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `C:/Users/kacpe/Desktop/Rescue Drone/Frontend_with_panel/node_modules/nuxt-seo-experiments/dist/module`
     * @see https://www.npmjs.com/package/C:/Users/kacpe/Desktop/Rescue Drone/Frontend_with_panel/node_modules/nuxt-seo-experiments/dist/module
     */
    ["seoExperiments"]: typeof import("C:/Users/kacpe/Desktop/Rescue Drone/Frontend_with_panel/node_modules/nuxt-seo-experiments/dist/module").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `C:/Users/kacpe/Desktop/Rescue Drone/Frontend_with_panel/node_modules/nuxt-link-checker/dist/module`
     * @see https://www.npmjs.com/package/C:/Users/kacpe/Desktop/Rescue Drone/Frontend_with_panel/node_modules/nuxt-link-checker/dist/module
     */
    ["linkChecker"]: typeof import("C:/Users/kacpe/Desktop/Rescue Drone/Frontend_with_panel/node_modules/nuxt-link-checker/dist/module").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@nuxtjs/seo`
     * @see https://www.npmjs.com/package/@nuxtjs/seo
     */
    ["seo"]: typeof import("@nuxtjs/seo").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@nuxt/telemetry`
     * @see https://www.npmjs.com/package/@nuxt/telemetry
     */
    ["telemetry"]: typeof import("@nuxt/telemetry").default extends NuxtModule<infer O> ? O : Record<string, any>
  }
  interface NuxtConfig {
    /**
     * Configuration for `@nuxt/image`
     * @see https://www.npmjs.com/package/@nuxt/image
     */
    ["image"]?: typeof import("@nuxt/image").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxtjs/i18n`
     * @see https://www.npmjs.com/package/@nuxtjs/i18n
     */
    ["i18n"]?: typeof import("@nuxtjs/i18n").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxt/icon`
     * @see https://www.npmjs.com/package/@nuxt/icon
     */
    ["icon"]?: typeof import("@nuxt/icon").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxtjs/color-mode`
     * @see https://www.npmjs.com/package/@nuxtjs/color-mode
     */
    ["colorMode"]?: typeof import("@nuxtjs/color-mode").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxtjs/tailwindcss`
     * @see https://www.npmjs.com/package/@nuxtjs/tailwindcss
     */
    ["tailwindcss"]?: typeof import("@nuxtjs/tailwindcss").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxt/ui`
     * @see https://www.npmjs.com/package/@nuxt/ui
     */
    ["ui"]?: typeof import("@nuxt/ui").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxtjs/google-fonts`
     * @see https://www.npmjs.com/package/@nuxtjs/google-fonts
     */
    ["googleFonts"]?: typeof import("@nuxtjs/google-fonts").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@pinia/nuxt`
     * @see https://www.npmjs.com/package/@pinia/nuxt
     */
    ["pinia"]?: typeof import("@pinia/nuxt").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `pinia-plugin-persistedstate/nuxt`
     * @see https://www.npmjs.com/package/pinia-plugin-persistedstate/nuxt
     */
    ["piniaPluginPersistedstate"]?: typeof import("pinia-plugin-persistedstate/nuxt").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `C:/Users/kacpe/Desktop/Rescue Drone/Frontend_with_panel/node_modules/nuxt-site-config/dist/module`
     * @see https://www.npmjs.com/package/C:/Users/kacpe/Desktop/Rescue Drone/Frontend_with_panel/node_modules/nuxt-site-config/dist/module
     */
    ["site"]?: typeof import("C:/Users/kacpe/Desktop/Rescue Drone/Frontend_with_panel/node_modules/nuxt-site-config/dist/module").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `C:/Users/kacpe/Desktop/Rescue Drone/Frontend_with_panel/node_modules/@nuxtjs/robots/dist/module`
     * @see https://www.npmjs.com/package/C:/Users/kacpe/Desktop/Rescue Drone/Frontend_with_panel/node_modules/@nuxtjs/robots/dist/module
     */
    ["robots"]?: typeof import("C:/Users/kacpe/Desktop/Rescue Drone/Frontend_with_panel/node_modules/@nuxtjs/robots/dist/module").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `C:/Users/kacpe/Desktop/Rescue Drone/Frontend_with_panel/node_modules/@nuxtjs/sitemap/dist/module`
     * @see https://www.npmjs.com/package/C:/Users/kacpe/Desktop/Rescue Drone/Frontend_with_panel/node_modules/@nuxtjs/sitemap/dist/module
     */
    ["sitemap"]?: typeof import("C:/Users/kacpe/Desktop/Rescue Drone/Frontend_with_panel/node_modules/@nuxtjs/sitemap/dist/module").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `C:/Users/kacpe/Desktop/Rescue Drone/Frontend_with_panel/node_modules/nuxt-og-image/dist/module`
     * @see https://www.npmjs.com/package/C:/Users/kacpe/Desktop/Rescue Drone/Frontend_with_panel/node_modules/nuxt-og-image/dist/module
     */
    ["ogImage"]?: typeof import("C:/Users/kacpe/Desktop/Rescue Drone/Frontend_with_panel/node_modules/nuxt-og-image/dist/module").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `C:/Users/kacpe/Desktop/Rescue Drone/Frontend_with_panel/node_modules/nuxt-schema-org/dist/module`
     * @see https://www.npmjs.com/package/C:/Users/kacpe/Desktop/Rescue Drone/Frontend_with_panel/node_modules/nuxt-schema-org/dist/module
     */
    ["schemaOrg"]?: typeof import("C:/Users/kacpe/Desktop/Rescue Drone/Frontend_with_panel/node_modules/nuxt-schema-org/dist/module").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `C:/Users/kacpe/Desktop/Rescue Drone/Frontend_with_panel/node_modules/nuxt-seo-experiments/dist/module`
     * @see https://www.npmjs.com/package/C:/Users/kacpe/Desktop/Rescue Drone/Frontend_with_panel/node_modules/nuxt-seo-experiments/dist/module
     */
    ["seoExperiments"]?: typeof import("C:/Users/kacpe/Desktop/Rescue Drone/Frontend_with_panel/node_modules/nuxt-seo-experiments/dist/module").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `C:/Users/kacpe/Desktop/Rescue Drone/Frontend_with_panel/node_modules/nuxt-link-checker/dist/module`
     * @see https://www.npmjs.com/package/C:/Users/kacpe/Desktop/Rescue Drone/Frontend_with_panel/node_modules/nuxt-link-checker/dist/module
     */
    ["linkChecker"]?: typeof import("C:/Users/kacpe/Desktop/Rescue Drone/Frontend_with_panel/node_modules/nuxt-link-checker/dist/module").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxtjs/seo`
     * @see https://www.npmjs.com/package/@nuxtjs/seo
     */
    ["seo"]?: typeof import("@nuxtjs/seo").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxt/telemetry`
     * @see https://www.npmjs.com/package/@nuxt/telemetry
     */
    ["telemetry"]?: typeof import("@nuxt/telemetry").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    modules?: (undefined | null | false | NuxtModule<any> | string | [NuxtModule | string, Record<string, any>] | ["@nuxt/image", Exclude<NuxtConfig["image"], boolean>] | ["@nuxtjs/i18n", Exclude<NuxtConfig["i18n"], boolean>] | ["@nuxt/icon", Exclude<NuxtConfig["icon"], boolean>] | ["@nuxtjs/color-mode", Exclude<NuxtConfig["colorMode"], boolean>] | ["@nuxtjs/tailwindcss", Exclude<NuxtConfig["tailwindcss"], boolean>] | ["@nuxt/ui", Exclude<NuxtConfig["ui"], boolean>] | ["@nuxtjs/google-fonts", Exclude<NuxtConfig["googleFonts"], boolean>] | ["@pinia/nuxt", Exclude<NuxtConfig["pinia"], boolean>] | ["pinia-plugin-persistedstate/nuxt", Exclude<NuxtConfig["piniaPluginPersistedstate"], boolean>] | ["C:/Users/kacpe/Desktop/Rescue Drone/Frontend_with_panel/node_modules/nuxt-site-config/dist/module", Exclude<NuxtConfig["site"], boolean>] | ["C:/Users/kacpe/Desktop/Rescue Drone/Frontend_with_panel/node_modules/@nuxtjs/robots/dist/module", Exclude<NuxtConfig["robots"], boolean>] | ["C:/Users/kacpe/Desktop/Rescue Drone/Frontend_with_panel/node_modules/@nuxtjs/sitemap/dist/module", Exclude<NuxtConfig["sitemap"], boolean>] | ["C:/Users/kacpe/Desktop/Rescue Drone/Frontend_with_panel/node_modules/nuxt-og-image/dist/module", Exclude<NuxtConfig["ogImage"], boolean>] | ["C:/Users/kacpe/Desktop/Rescue Drone/Frontend_with_panel/node_modules/nuxt-schema-org/dist/module", Exclude<NuxtConfig["schemaOrg"], boolean>] | ["C:/Users/kacpe/Desktop/Rescue Drone/Frontend_with_panel/node_modules/nuxt-seo-experiments/dist/module", Exclude<NuxtConfig["seoExperiments"], boolean>] | ["C:/Users/kacpe/Desktop/Rescue Drone/Frontend_with_panel/node_modules/nuxt-link-checker/dist/module", Exclude<NuxtConfig["linkChecker"], boolean>] | ["@nuxtjs/seo", Exclude<NuxtConfig["seo"], boolean>] | ["@nuxt/telemetry", Exclude<NuxtConfig["telemetry"], boolean>])[],
  }
  interface RuntimeConfig {
   app: {
      buildId: string,

      baseURL: string,

      buildAssetsDir: string,

      cdnURL: string,
   },

   apiSecret: string,

   nitro: {
      envPrefix: string,
   },

   icon: {
      serverKnownCssClasses: Array<any>,
   },

   sitemap: {
      isI18nMapped: boolean,

      sitemapName: string,

      isMultiSitemap: boolean,

      excludeAppSources: Array<string>,

      cacheMaxAgeSeconds: number,

      autoLastmod: boolean,

      defaultSitemapsChunkSize: number,

      minify: boolean,

      sortEntries: boolean,

      debug: boolean,

      discoverImages: boolean,

      discoverVideos: boolean,

      sitemapsPathPrefix: string,

      isNuxtContentDocumentDriven: boolean,

      xsl: string,

      xslTips: boolean,

      xslColumns: Array<{

      }>,

      credits: boolean,

      version: string,

      sitemaps: {
         index: {
            sitemapName: string,

            _route: string,

            sitemaps: Array<any>,

            include: Array<any>,

            exclude: Array<any>,
         },

         "pl-PL": {
            include: Array<any>,

            exclude: Array<string>,

            includeAppSources: boolean,

            sitemapName: string,

            _route: string,

            _hasSourceChunk: boolean,
         },

         "en-US": {
            include: Array<any>,

            exclude: Array<string>,

            includeAppSources: boolean,

            sitemapName: string,

            _route: string,

            _hasSourceChunk: boolean,
         },

         "fr-FR": {
            include: Array<any>,

            exclude: Array<string>,

            includeAppSources: boolean,

            sitemapName: string,

            _route: string,

            _hasSourceChunk: boolean,
         },

         "es-ESP": {
            include: Array<any>,

            exclude: Array<string>,

            includeAppSources: boolean,

            sitemapName: string,

            _route: string,

            _hasSourceChunk: boolean,
         },

         "zh-ZH": {
            include: Array<any>,

            exclude: Array<string>,

            includeAppSources: boolean,

            sitemapName: string,

            _route: string,

            _hasSourceChunk: boolean,
         },
      },

      autoI18n: {
         differentDomains: boolean,

         defaultLocale: string,

         locales: Array<{

         }>,

         strategy: string,
      },
   },

   "nuxt-site-config": {
      stack: Array<{

      }>,

      version: string,

      debug: boolean,
   },

   "nuxt-robots": {
      version: string,

      usingNuxtContent: boolean,

      debug: boolean,

      credits: boolean,

      groups: Array<{

      }>,

      sitemap: Array<string>,

      header: boolean,

      robotsEnabledValue: string,

      robotsDisabledValue: string,

      cacheControl: string,
   },

   "nuxt-simple-robots": {
      version: string,

      usingNuxtContent: boolean,

      debug: boolean,

      credits: boolean,

      groups: Array<{

      }>,

      sitemap: Array<string>,

      header: boolean,

      robotsEnabledValue: string,

      robotsDisabledValue: string,

      cacheControl: string,
   },

   "nuxt-og-image": {
      version: string,

      satoriOptions: any,

      resvgOptions: any,

      sharpOptions: any,

      publicStoragePath: string,

      defaults: {
         emojis: string,

         renderer: string,

         component: string,

         extension: string,

         width: number,

         height: number,

         cacheMaxAgeSeconds: number,
      },

      debug: boolean,

      baseCacheKey: string,

      fonts: Array<{

      }>,

      hasNuxtIcon: boolean,

      colorPreference: string,

      isNuxtContentDocumentDriven: boolean,
   },
  }
  interface PublicRuntimeConfig {
   serverURL: string,

   i18n: {
      baseUrl: string,

      defaultLocale: string,

      defaultDirection: string,

      strategy: string,

      lazy: boolean,

      rootRedirect: any,

      routesNameSeparator: string,

      defaultLocaleRouteNameSuffix: string,

      skipSettingLocaleOnNavigate: boolean,

      differentDomains: boolean,

      trailingSlash: boolean,

      locales: Array<{

      }>,

      detectBrowserLanguage: {
         alwaysRedirect: boolean,

         cookieCrossOrigin: boolean,

         cookieDomain: any,

         cookieKey: string,

         cookieSecure: boolean,

         fallbackLocale: string,

         redirectOn: string,

         useCookie: boolean,
      },

      experimental: {
         localeDetector: string,

         switchLocalePathLinkSSR: boolean,

         autoImportTranslationFunctions: boolean,

         typedPages: boolean,

         typedOptionsAndMessages: boolean,
      },

      multiDomainLocales: boolean,
   },

   piniaPluginPersistedstate: any,

   "nuxt-schema-org": {
      reactive: boolean,

      minify: boolean,

      scriptAttributes: {
         id: string,
      },

      identity: {
         type: string,

         name: string,

         legalName: string,

         url: string,

         logo: string,

         slogan: string,

         sameAs: Array<string>,

         contactPoint: {
            "@type": string,

            email: string,

            contactType: string,

            url: string,

            availableLanguage: Array<string>,
         },

         address: {
            "@type": string,

            addressCountry: string,

            addressLocality: string,

            postalCode: string,
         },

         foundingDate: string,

         founder: {
            "@type": string,

            name: string,

            jobTitle: string,

            sameAs: Array<string>,
         },

         memberOf: {
            "@type": string,

            name: string,

            url: string,
         },

         description: string,

         potentialAction: {
            "@type": string,

            target: string,

            name: string,
         },
      },

      version: string,
   },

   "nuxt-seo": {
      canonicalQueryWhitelist: Array<string>,
   },
  }
}
declare module 'vue' {
        interface ComponentCustomProperties {
          $config: RuntimeConfig
        }
      }