<template>
    <div class="row">
        <div class="col s12 m12">
            <h4>Bonds</h4>
            <div class="card">
              <table class="bordered highlight">
                <thead>
                  <tr>
                    <th class="left-align">Security</th>
                    <th class="left-align">Portfolio</th>
                    <th class="left-align">Side</th>
                    <th class="right-align">Coupon Rate</th>
                    <th class="right-align">Price</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="item in trades.bonds"
                    v-bind:key="item.dealNumber">
                    <td class="left-align">{{ item.securityId }}</td>
                    <td class="left-align">{{ item.portfolio }}</td>
                    <td class="left-align" v-bind:class="{'red lighten-2': item.purchaseSell === 'P', 'green lighten-2': item.purchaseSell === 'S'}">{{ item.purchaseSell }}</td>
                    <td class="right-align">{{item.couponRate}}</td>
                    <td class="right-align">
                      {{ item.price }}
                      {{ item.tradeCurrency }}
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
  name: 'Bonds',
  data () {
    return data;
  }
}
</script>

<style scoped>
</style>