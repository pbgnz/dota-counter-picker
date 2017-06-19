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
                1: '', // array Index in heroes
                2: '',
                3: '',
                4: '',
                5: '',
                cells: {
                    1: '', 2: '', 3: '',
                    4: '', 5: ''
                }
            }
        },
        created () {
            Event.$on('selectHero', (cellNumber) => {
                this.cells[cellNumber] = this.selectedHero;
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