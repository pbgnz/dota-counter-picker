<template>
    <div v-if="selected.length !=0">
        <h4>Recommended Heroes</h4>
        <table class="table table-condensed">
            <thead>
            <tr>
                <th>heroes</th>
                <th>score</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="hero in display">
                <td>
                    {{ hero }}
                </td>
                <td>
                    <span class="badge badge-default">{{ Math.round(points[hero]/selected.length * 100) }}</span>
                </td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    import { union, difference } from 'lodash';
    import  heroes  from '../../db/heroes';
    export default {
        data () {
            return {
                pick: [],
                avoid: [],
                selected: [],
                results: [],
                display: [],
                points: {}
            }
        },
        methods: {
            updateResults (pick, avoid, selected) {
                this.results = union(this.results, pick);
                this.results = difference(this.results, avoid);
                this.results = difference(this.results, selected);
                this.optimizeResults();
                this.display = this.results.slice(0,8);
            },
            updatePoints (pick) {
                if(!this.points) this.points = {};
                pick.forEach((hero) => Number.isInteger(this.points[hero]) ? this.points[hero]++
                    : this.points[hero] = 1);
            },
            optimizeResults () {
                let unsorted = Object.keys(this.points).map((key) => {
                    return [key, this.points[key]];
                }).sort((first, second) => {
                    return second[1] - first[1];
                });

                let optimized = [];
                unsorted.forEach((hero) => optimized.push(hero[0]));

                this.results = difference(optimized, this.selected);
            }
        },
        created () {
            Event.$on('heroSelected', (heroArrayId) => {
                this.selected = this.$parent.selected;
                this.pick = heroes[heroArrayId].bad_against;
                this.avoid = heroes[heroArrayId].good_against;
                this.updatePoints(this.pick);
                this.updateResults(this.pick, this.avoid, this.selected);
            })
        }
    }
</script>

<style>
    .badge-default {  background-color: #2A77BC;  }
</style>