<template>
<div class="container-fluid">
    <div class="row">
        <div class="col s12 l4"
            v-for="item in cards"
            v-bind:key="item.id">
            <div class="card white-text" v-bind:class="[item.color]">
                <div class="card-content valign-wrapper">
                    <div class="col s6 l6">
                        <div class="card-text">
                            <h4>{{item.title}}</h4>                    
                            <p>{{item.content}}</p>
                        </div>
                    </div>
                    <div class="col s6 l6">
                        <div class="card-icon">
                            <img v-bind:src="item.icon" height="80px">
                        </div> 
                    </div>
                </div>
                <div class="card-action">
                    <router-link v-bind:to="item.url">
                        <button class="btn waves-effect waves-light">{{item.title}} details</button>
                    </router-link>
                </div>
                    
            </div>
        </div>
    </div>
</div>

</template>

<script>
const cards = [
           { id: 1, title: 'Bonds PnL', color: 'blue', content: '$20.000', url: '/bonds', icon: 'https://cdn3.iconfinder.com/data/icons/business-ultimate-blue-series/64/blue-23-512.png'},
           { id: 2, title: 'Equity PnL', color: 'green', content: '$75.000', url: '/equity', icon: 'https://www.pngmart.com/files/7/Equity-PNG-Photos.png'},
           { id: 3, title: 'Cash PnL', color: 'orange', content: '$500.000', url: '/cash', icon: 'https://www.flaticon.es/premium-icon/icons/svg/939/939804.svg'},
           { id: 4, title: 'FX PnL', color: 'brown', content: '$60.000', url: '/fx', icon: 'https://cdn4.iconfinder.com/data/icons/finance-and-politics/128/currency_convert_money_exchange-512.png'},

            ];
export default {
    name: 'dashboard',
    data() {
        return {
            cards
        }
    }
}
</script>

<style scoped>
.card-icon {
    text-align: right
}
</style>