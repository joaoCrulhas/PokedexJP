<template>
    <div>
        <p> Name: {{ returnProfileUser.name }}</p>
        <p> Email: {{ returnProfileUser.email }}</p>
        <p> Favourite Pokemon: {{ returnProfileUser.favouritePokemon }}</p>
        <p> Birth date: {{ returnProfileUser.birthDate }}</p>
    </div>
</template>

<script>
    export default {
        computed: {
            returnProfileUser() {
                return this.$store.state.user
            }
        },
    }
</script>

<style scoped>

</style>