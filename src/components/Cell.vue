<template>
    <ul class="cell">
        <li v-for="hero in picks">
            <h3>{{ hero.name }}</h3>
            <h3>{{ hero.primary_attr }}</h3>
            <h3>{{ hero.attack_type }}</h3>
        </li>
    </ul>
</template>

<script>
    import { heroes } from '../../db/heroes';
    export default {
        props: ['name'],
        data () {
            return {
                picks: [],
                heroes
            }
        },
        created () {
            Event.$on('heroSelected', (heroArrayId) => {
                this.picks.push(heroes[heroArrayId]);
            })
        }
    }
</script>

<style>
    .cell {
        font-family: 'Gochi Hand', sans-serif;
        color: black;
    }
</style>