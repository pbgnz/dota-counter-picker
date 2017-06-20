<template>
    <div>
        <search></search>
        <table class="grid">
            <cell></cell>
        </table>
        <results></results>
    </div>
</template>

<script>
    import Search from './Search.vue';
    import Cell from './Cell.vue';
    import Results from './Results.vue';
    import { heroes } from '../../db/heroes';
    export default {
        components: { Search, Cell, Results },
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
    .grid {
        // background-color: #34495e;
        color: #fff;
        width: 100%;
    }
</style>