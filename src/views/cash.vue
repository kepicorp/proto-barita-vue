<template>
    <div class="row">
        <div class="col s12 m12">
            <h4>Cash</h4>
            <div class="card">
              <table class="bordered highlight">
                <thead>
                  <tr>
                    <th class="left-align">Account Number</th>
                    <th class="right-align">Interest Rate</th>
                    <th class="right-align">Balance</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="item in trades.callNotices"
                      v-bind:key="item.accountNumber">
                    <td class="left-align">{{ item.accountNumber }}</td>
                    <td class="right-align">{{ item.interestRate }}</td>
                    <td class="right-align">{{item.currentBalance}} {{item.currency}}</td>
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
  name: 'Cash',
  data () {
    return data;
  }
}
</script>

<style scoped>
</style>