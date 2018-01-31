<template>
    <div class="flex flex-col">
        <input v-model="filter" placeholder="Filter" type="text" class="flex-1 appearance-none my-4 rounded border px-4 py-3"/>
        <ul class="list-reset">
            <li v-for="character in filteredCharacters">
                <div class="flex flex-row items-center shadow bg-white mb-2">
                    <img :src="character.avatar" width="100" height="100"/>
                    <p class="ml-8">{{ character.name }}</p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    import Axios from 'axios'

    export default {
        name: 'StarWarsCharacters',

        data() {
            return {
                filter: '',
                characters: []
            }
        },

        mounted() {
            this.getCharacters()
        },

        computed: {
            filteredCharacters() {
                if (this.filter.length == 0)
                    return this.characters

                return this.characters.filter(it => it.name.includes(this.filter))
            }
        },

        methods: {
            getCharacters() {
                Axios.get('http://localhost:3004/characters')
                    .then(response => {
                        this.characters = response.data
                    })
                    .catch(err => console.error(err))
            }
        }
    }
</script>

<style scoped>

</style>