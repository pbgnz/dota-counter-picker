<template>
    <div id="app">
        <div id="card" class="container">
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
    </div>
</template>

<script>
    import Search from './components/Search.vue';
    import Selected from './components/Selected.vue';
    import Results from './components/Results.vue';
    import heroes from '../db/heroes';
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
    h2, h4 {
        font-weight: normal;
    }

    a {
        text-decoration: none;
        color: black;
        font-size: 11px;
        font-family: 'Gochi Hand', sans-serif !important;
    }

    @-webkit-keyframes pulse {
        0% {background-color: #215788;}
        25% {background-color: #104270;}
        50% {background-color: #2A77BC;}
        75% {background-color: #09243D;}
        100% {background-color: #001f3f;}
    }

    body {
        -webkit-animation: pulse 300s infinite alternate;
    }

    #card {
        font-family: Arial;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        max-width: 980px;
        padding: 15px;
        background-color: #FFFFFF !important;
        border-radius: 4px;
        margin-top: 5%;
    }

</style>
