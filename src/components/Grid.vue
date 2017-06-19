<template>
    <div>
        <results></results>
        <table class="grid">
            <tr>
                <td><cell name="1"></cell></td>
                <td><cell name="2"></cell></td>
                <td><cell name="3"></cell></td>
                <td><cell name="4"></cell></td>
                <td><cell name="5"></cell></td>
            </tr>
        </table>
    </div>
</template>

<script>
    import Cell from './Cell.vue';
    import Results from './Results.vue';
    import { heroes } from '../../db/heroes';
    export default {
        components: { Cell, Results },
        data () {
            return {
                selected: [],
                cells: {
                    1: 'no hero', 2: 'no hero', 3: 'no hero',
                    4: 'no hero', 5: 'no hero'
                }
            }
        },
        methods: {
          getSelectedHeroes() {
              this.selected = [];
              for (let i = 1; i<6; i++)
                  if(this.cells[i] !== 'no hero')
                      this.selected.push(heroes[this.cells[i]].name);
          }
        },
        created () {
            Event.$on('selectHero', (cellNumber) => {
                this.cells[cellNumber] = this.selectedHero;
                this.getSelectedHeroes();
                Event.$emit('heroSelected', this.cells[cellNumber])
            })
        }
    }
</script>

<style>
    .grid {
        background-color: #34495e;
        color: #fff;
        width: 100%;
    }
</style>