<template>
    <div class="cell">
        <h3>{{ hero }}</h3>
        <input placeholder="Enter hero" v-model="filterInput" />
        <ul>
            <li v-for="hero in filterBy(heroes, filterInput)">
                <div @click="selectHero(hero.id-1)">{{ hero.name }}</div>
            </li>
        </ul>
    </div>
</template>

<script>
    import { heroes } from '../../db/heroes';
    export default {
        props: ['name'],
        data () {
            return {
                hero: '', // printed
                heroes,
                filterInput: '',
                frozen: false, // can't re-pick cell
            }
        },
        methods: {
            filterBy (list, value) {
                value = value.charAt(0).toUpperCase() + value.slice(1);
                return list.filter(function(hero) {
                    return hero.name.indexOf(value) > -1;
                });
            },
            selectHero (heroPicked) {
                if (! this.frozen) {
                    this.hero = heroes[heroPicked].name;
                    this.frozen = true;
                    this.$parent.selectedHero = heroPicked;
                    Event.$emit('selectHero', this.name)
                }
            },
            created () {
                Event.$on('freeze', () => this.frozen = true)
            }
        }
    }
</script>

<style>
    .cell {
        font-family: 'Gochi Hand', sans-serif;
    }
</style>