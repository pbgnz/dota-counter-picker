<template>
    <div class="search">
        <input placeholder="Enemy Heroes" v-model="filterInput" />
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
        data () {
            return {
                hero: {},
                number: 1,
                heroes,
                filterInput: ''
            }
        },
        methods: {
            filterBy (list, value) {
                value = value.charAt(0).toUpperCase() + value.slice(1);
                return list.filter(function(hero) {
                    return hero.name.indexOf(value) > -1;
                });
            },
            selectHero (heroArrayIndex) {
                this.hero = heroes[heroArrayIndex];
                this.$parent.selectedHero = heroArrayIndex;
                if(this.number < 6) {
                    Event.$emit('selectHero', this.hero, this.number);
                    this.number++;
                }
            }
        }
    }
</script>

<style>
    .search {
        font-family: 'Gochi Hand', sans-serif;
    }
</style>