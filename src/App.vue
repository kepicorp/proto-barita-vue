<template>
  <div id="app">
    <div class="navbar-fixed">
      <nav>
        <div class="nav-wrapper indigo darken-4">
          <img src="https://cornerstone.com.jm/wp-content/uploads/2019/10/Barita_logo-1024x576.jpg" height="56px">
          <ul class="right hide-on-med-and-down">
            <li><router-link to="/">Dashboard</router-link></li>
            <li><router-link to="/bonds">Bonds</router-link></li>
            <li><router-link to="/equity">Equity</router-link></li>
            <li><router-link to="/cash">Cash</router-link></li>
            <li><router-link to="/fx">FX</router-link></li>
          </ul>
        </div>
      </nav>
    </div>
    <router-view/>
  </div>
</template>

<styles src='./css/materialize.min.css'>
</styles>
