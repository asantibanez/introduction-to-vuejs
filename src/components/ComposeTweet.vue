<template>
    <div class="bg-blue-lightest shadow-md p-6 rounded">
        <div class="flex flex-col">
            <textarea v-model="message" class="w-full border border-blue-light rounded p-4 text-sm" placeholder="¿Qué está pasando?" rows="4" style="resize: none;"></textarea>
            <div class="flex justify-between items-center mt-4">
                <span class="text-sm flex-1" :class="charactersCountClass">{{ charactersCount }} caracteres</span>
                <div class="flex-1 flex items-center justify-end">
                    <button @click="resetForm" class="text-grey-dark px-6 py-2" v-if="!messageEmpty">Descartar</button>
                    <button @click="sendTweet" class="text-white rounded-full px-6 py-2" :class="tweetButtonClass">Twittear</button>
                    <img class="ml-4" width="30" src="../../progress.gif" v-show="isWorking"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        name: 'ComposeTweet',

        data() {
            return {
                message: '',
                isWorking: false
            }
        },

        computed: {
            charactersCount() {
                return this.message.length;
            },

            messageEmpty() {
                return this.charactersCount === 0
            },

            tweetButtonClass() {
                return {
                    'bg-blue-lighter': this.messageEmpty,
                    'bg-blue-light': !this.messageEmpty
                }
            },

            messageLimitExceeded() {
                return this.charactersCount > 150
            },

            charactersCountClass() {
                return {
                    'text-grey-darker': !this.messageLimitExceeded,
                    'text-red': this.messageLimitExceeded,
                }
            }
        },

        methods: {
            resetForm() {
                this.message = ''
                this.isWorking = false
            },

            sendTweet() {
                if (this.messageEmpty || this.messageLimitExceeded) {
                    return
                }

                this.isWorking = true
                setTimeout(() => {
                    alert("¡Tweet enviado!")
                    this.resetForm()
                }, 2000)
            }
        }
    }
</script>

<style scoped>

</style>