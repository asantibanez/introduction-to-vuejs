<template>
    <div>
        {{ today }}
    </div>
</template>

<script>
    export default {
        name: 'Names',

        data() {
            return {
                today: new Date()
            }
        }
    }
</script>

<style>
</style>