<template>
    <div v-if="selected.length !=0">
        <h4>Recommended Heroes</h4>
        <ul class="list-group">
            <li class="list-group-item" v-for="hero in results">
                <div>{{ hero }}</div>
            </li>
        </ul>
    </div>
</template>

<script>
    import { union, difference } from 'lodash';
    import { heroes } from '../../db/heroes';
    export default {
        data () {
            return {
                pick: [],
                avoid: [],
                selected: [],
                results: []
            }
        },
        methods: {
            updateResults (pick, avoid, selected) {
                this.results = union(this.results, pick);
                this.results = difference(this.results, avoid);
                this.results = difference(this.results, selected);
            }
        },
        created () {
            Event.$on('heroSelected', (heroArrayId) => {
                this.selected = this.$parent.selected;
                this.pick = heroes[heroArrayId].bad_against;
                this.avoid = heroes[heroArrayId].good_against;
                this.updateResults(this.pick, this.avoid, this.selected);
            })
        }
    }
</script>

<style>

</style>