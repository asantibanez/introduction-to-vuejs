<template>
    <div class="w-1/2 mx-auto mt-6">
        <today></today>
        <compose-tweet class="mt-8"></compose-tweet>
        <star-wars-characters class="mt-8"></star-wars-characters>
    </div>
</template>

<script>
    import Today from './Today.vue'

    export default {
        name: 'app',
        data () {
            return {
                msg: 'Welcome to Your Vue.js App'
            }
        },

        components: {
            Today
        }
    }
</script>

<style>
</style>
