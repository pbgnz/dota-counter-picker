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
            <tr v-for="hero in results">
                <td>
                    {{ hero }}
                </td>
                <td>
                    <span class="badge badge-default">+{{ points[hero] }}</span>
                </td>
            </tr>
            </tbody>
        </table>
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
                results: [],
                points: {}
            }
        },
        methods: {
            updateResults (pick, avoid, selected) {
                this.results = union(this.results, pick);
                this.results = difference(this.results, avoid);
                this.results = difference(this.results, selected);
                this.optimizeResults()
            },
            updatePoints (pick) {
                // create a dictionary and add +1 to all counters of the enemy hero
                if(!this.points) this.points = {};
                pick.forEach((hero) => Number.isInteger(this.points[hero]) ? this.points[hero]++
                    : this.points[hero] = 1);
            },
            optimizeResults () {
                // sort the points dictionary in decreasing order of points
                let unsorted = Object.keys(this.points).map((key) => {
                    return [key, this.points[key]];
                }).sort((first, second) => {
                    return second[1] - first[1];
                });
                // returns a sorted array in the form of [['hero name', points], ...]

                // create an array containing only the names of sorted results
                let optimized = [];
                unsorted.forEach((hero) => optimized.push(hero[0]));

                // remove the selected enemy heroes from the recommendations
                this.results = difference(optimized, this.selected).slice(0,8);
            }
        },
        created () {
            Event.$on('heroSelected', (heroArrayId) => {
                this.selected = this.$parent.selected;
                this.pick = heroes[heroArrayId].bad_against;
                this.updatePoints(this.pick);
                this.avoid = heroes[heroArrayId].good_against;
                this.updateResults(this.pick, this.avoid, this.selected);
            })
        }
    }
</script>

<style>
    .badge-default {
        background-color: #0074D9;
    }
</style>