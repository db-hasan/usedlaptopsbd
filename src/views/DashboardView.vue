<template>
  <div class="">
    <div class="col-12">
      <div class="row pt-2">
        <div class="col-md-3 p-2">
          <div class="card p-3 text-light bg-info bg-gradient">
            <p><strong>Sales Order</strong></p>
            <p><i class="fa-solid fa-cart-shopping fa-2xl"></i> 1011001</p>
            <span>Sales Price</span>
          </div>
        </div>
        <div class="col-md-3 p-2">
          <div class="card p-3 text-light bg-success bg-opacity-75">
            <p><strong>Profit</strong></p>
            <p><i class="fa-solid fa-money-check-dollar fa-2xl"></i> 1011001</p>
            <span>Profit Amount</span>
          </div>
        </div>
        <div class="col-md-3 p-2">
          <div class="card p-3 text-light bg-warning bg-opacity-75">
            <p><strong>Expenses</strong></p>
            <p><i class="fa-solid fa-cart-flatbed-suitcase fa-2xl"></i> 1011001</p>
            <span>Expenses Cost</span>
          </div>
        </div>
        <div class="col-md-3 p-2">
          <div class="card p-3 text-light bg-danger bg-opacity-75">
            <p><strong>Gross Profit</strong></p>
            <p><i class="fa-solid fa-industry fa-2xl"></i> 1011001</p>
            <span>Profit Balance</span>
          </div>
        </div>
      </div>
    </div>

    <div class="my-3">
      <div class="row">
        <div class="col-md-8">
          <canvas id="myBarChart"></canvas>
        </div>
        <div class="col-md-4 container">
          <canvas id="myPieChart" width="400" height="400"></canvas>
        </div>
      </div>
    </div>
  </div>
</template>
