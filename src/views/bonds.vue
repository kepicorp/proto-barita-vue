<template>
    <div class="row">
        <div class="col s2 m2">
            <h4>Bonds</h4>
        </div>
        <div class="col s10 m10">
            <button v-if="!newdata" v-on:click="updateSource()" class="btn waves-effect waves-light">Load from FFDC
            </button>
            <button v-if="newdata" class="btn waves-effect waves-light" disabled>Loaded</button>
        </div>
        <div class="col s12 m12">
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
                  <tr v-for="item in data.trades.bonds"
                    v-bind:key="item">
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
import { data2 } from '../opics.js'

export default {
  name: 'Bonds',
  data () {
    return {
      newdata: false,
    }
  },
  computed: {
    data() {
      if (!this.newdata) {
        return data;
      } else {
        return data2;
      }
    }
  },
  methods: {
    async updateSource() {
      setTimeout( () => {
          //this.$router.push('/bonds');
          this.newdata = true;
        }, 1500);  
    }
  }
}
</script>

<style scoped>

</style>