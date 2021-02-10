<template>
    <div class="row">
        <div class="col s12 m12">
            <h4>Equity</h4>
            <div class="card">
              <table class="bordered highlight">
                <thead>
                  <tr>
                    <th class="left-align">Instrument</th>
                    <th class="left-align">Counterparty</th>
                    <th class="right-align">Notional</th>
                    <th class="right-align">Market Value</th>
                    <th class="right-align">Currency</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="item in trades.equityPositions"
                    v-bind:key="item.markToMarketYear">
                    <td class="left-align">{{ item.instrumentId }}</td>
                    <td class="left-align">{{ item.counterpartySector }}</td>
                    <td class="right-align">{{item.notionalValue}}</td>
                    <td class="right-align">
                      {{ item.marketValue }}
                    </td>
                    <td class="right-align">
                      {{ item.currency }}
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
  name: 'Equity',
  data () {
    return data;
  }
}
</script>

<style scoped>
</style>