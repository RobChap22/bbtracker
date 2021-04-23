import colors from 'vuetify/es5/util/colors'

export default {
    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        titleTemplate: '%s - bbtracker',
        title: 'bbtracker',
        htmlAttrs: {
            lang: 'en'
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ]
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
        // https://go.nuxtjs.dev/typescript
        '@nuxt/typescript-build',
        // https://go.nuxtjs.dev/vuetify
        '@nuxtjs/vuetify'
    ],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        // https://go.nuxtjs.dev/axios
        '@nuxtjs/axios',
        '@nuxtjs/firebase'
    ],

    // Axios module configuration: https://go.nuxtjs.dev/config-axios
    axios: {},

    // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
    vuetify: {
        customVariables: ['~/assets/variables.scss'],
    },

    firebase: {
        config: {
            apiKey: "",
            authDomain: "nuffle.firebaseapp.com",
            projectId: "nuffle",
            storageBucket: "nuffle.appspot.com",
            messagingSenderId: "",
            appId: "",
            measurementId: ""
        },
        services: {
            auth: true,
            firestore: true,
            functions: true,
            storage: true,
            database: true,
            messaging: true,
            performance: true,
            analytics: true,
            remoteConfig: true
        }
    },

    auth: {
        persistence: 'local', // default
        initialize: {
            onAuthStateChangedMutation: 'ON_AUTH_STATE_CHANGED_MUTATION',
            onAuthStateChangedAction: 'onAuthStateChangedAction',
            subscribeManually: false
        },
        ssr: false, // default
        emulatorPort: 9099,
        emulatorHost: 'http://localhost',
    },

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {}
}