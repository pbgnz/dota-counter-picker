<template>
    <div v-if="picks.length !=0">
        <h4>Enemy Heroes</h4>
        <ul class="cell row">
            <li v-for="hero in picks" class="col-xs-5ths col-sm-5ths col-md-5ths col-lg-5ths">
                <img :src="hero.img" />
                <p>{{ hero.name }}</p>
            </li>
        </ul>
    </div>
</template>

<script>
    import heroes from '../../db/heroes';
    export default {
        props: ['name'],
        data () {
            return {
                picks: [],
                heroes
            }
        },
        created () {
            Event.$on('heroSelected', (heroArrayId) => {
                this.picks.push(heroes[heroArrayId]);
            })
        }
    }
</script>

<style>
    ul {
        list-style-type: none;
    }

    p {
        text-align: center;
        font-family: 'Gochi Hand', sans-serif;
    }

    img {
        border-radius: 4px;
    }

    .col-xs-5ths,
    .col-sm-5ths,
    .col-md-5ths,
    .col-lg-5ths {
        position: relative;
        min-height: 1px;
        padding-right: 15px;
        padding-left: 10px;
    }

    .col-xs-5ths {
        width: 20%;
        float: left;
    }

    @media (min-width: 768px) {
        .col-sm-5ths {
            width: 20%;
            float: left;
        }
    }

    @media (min-width: 992px) {
        .col-md-5ths {
            width: 20%;
            float: left;
        }
    }

    @media (min-width: 1200px) {
        .col-lg-5ths {
            width: 20%;
            float: left;
        }
    }
</style>