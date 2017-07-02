<template>
    <div id="app" class="container">
        <h2>Dota 2 counter picker</h2>
        <div class="row">
            <div class="col-md-3">
                <search></search>
            </div>
            <div class="col-md-9">
                <selected></selected>
                <results></results>
            </div>
        </div>
    </div>
</template>

<script>
    import Search from './components/Search.vue';
    import Selected from './components/Selected.vue';
    import Results from './components/Results.vue';
    import { heroes } from '../db/heroes';
    export default {
        name: 'app',
        components: { Search, Selected, Results },
        data () {
            return {
                selected: [],
                cells: {
                    1: 'no hero',
                    2: 'no hero',
                    3: 'no hero',
                    4: 'no hero',
                    5: 'no hero'
                }
            }
        },
        methods: {
          getSelectedHeroes() {
              this.selected = [];
              for (let i = 1; i<6; i++)
                  if(this.cells[i] !== 'no hero')
                      this.selected.push(this.cells[i].name);
          }
        },
        created () {
            Event.$on('selectHero', (heroObject, cellNumber) => {
                this.cells[cellNumber] = heroObject;
                this.getSelectedHeroes();
                Event.$emit('heroSelected', this.cells[cellNumber].id - 1)
            })
        }
    }
</script>

<style>
    #app {
        font-family: Arial;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #2c3e50;
        max-width: 980px;
        padding: 15px;
    }

    h2, h4 {
        font-weight: normal;
    }
</style>