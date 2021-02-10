<template>
    <div class="row">
        <div class="col s12 m12">
            <h4>FX</h4>
            <div class="card">
              <table class="bordered highlight">
                <thead>
                  <tr>
                    <th class="left-align">Instrument</th>
                    <th class="left-align">Value Date</th>
                    <th class="right-align">Currency Amount</th>
                    <th class="right-align">Counter Currency Amount</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="item in trades.fxPositions"
                    v-bind:key="item.counterCurrencyAmount">
                    <td class="left-align">{{ item.instrumentId }}</td>
                    <td class="left-align">{{ item.valueDate }}</td>
                    <td class="right-align" v-bind:class="{'red lighten-2': item.currencyAmount <= 0, 'green lighten-2': item.currencyAmount > 0}">{{item.currencyAmount}}</td>
                    <td class="right-align" v-bind:class="{'red lighten-2': item.counterCurrencyAmount <= 0, 'green lighten-2': item.counterCurrencyAmount > 0}">
                      {{ item.counterCurrencyAmount }}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
        </div>
    </div>
</template>

<script>
import { data } from '../kondor.js'
export default {
  name: 'FX',
  data () {
    return data;
  }
}
</script>

<style scoped>
</style>