<template>
    <ul>
        <li v-for="hero in results">
            <div>{{ hero }}</div>
        </li>
    </ul>
</template>

<script>
    import { union } from 'lodash';
    import { heroes } from '../../db/heroes';
    export default {
        data () {
            return {
                pick: [],
                avoid: [],
                results: []
            }
        },
        methods: {
            updateResults (pick, avoid) {
                this.results = union(this.results, pick);
            }
        },
        created () {
            Event.$on('heroSelected', (heroArrayId) => {
                this.pick = heroes[heroArrayId].bad_against;
                this.avoid = heroes[heroArrayId].good_against;
                this.updateResults(this.pick, this.avoid);
            })
        }
    }
</script>

<style>

</style>