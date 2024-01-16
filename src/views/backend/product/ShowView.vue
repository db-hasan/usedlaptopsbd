<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="card mt-5">
          <div class="card-header">
            <div class="d-flex justify-content-between">
              <h4>All Data</h4>
              <div class="text-end">
                <RouterLink to="/index" class="btn btn-sm btn-dark"
                  ><i class="fas fa-plus-circle"></i> View Data</RouterLink
                >
              </div>
            </div>
          </div>

          <div>
            <div>
              <h1></h1>
            </div>
          </div>

          <div class="card-body px-2">
            <div class="row">
              <div class="col-md-6 g-4">
                <label>ID:</label>
                <div>{{ product ? product.id : 'Loading...' }}</div>
              </div>
              <div class="col-md-4 g-4">
                <label>SKU:</label>
                <div>{{ product ? product.product_sku : 'Loading...' }}</div>
              </div>
            </div>
            <hr />
            <div class="row">
              <div class="col-md-12">
                <label>Name:</label>
                <div>{{ product ? product.product_name : 'Loading...' }}</div>
              </div>
            </div>
            <hr />
            <div class="row">
              <div class="col-md-4">
                <label>Cost:</label>
                <div>{{ product ? product.mfg_cost : 'Loading...' }}</div>
              </div>
              <div class="col-md-4">
                <label>Price:</label>
                <div>{{ product ? product.sales_price : 'Loading...' }}</div>
              </div>
              <div class="col-md-4">
                <label>Quantity:</label>
                <div>{{ product ? product.product_qty : 'Loading...' }}</div>
              </div>
            </div>
            <hr />
            <div class="row">
              <div class="col-md-12">
                <label>Description:</label>
                <div>{{ product ? product.product_des : 'Loading...' }}</div>
              </div>
            </div>
            <hr />
            <div class="row">
              <div class="col-md-12 d-flex">
                <div class="pe-5">
                  <h6></h6>
                </div>
                <div class="ps-2">
                  <img
                    src=""
                    alt="Image not found"
                    style="height: 100px; width: 100px"
                    class="rounded"
                  />
                </div>
              </div>
            </div>
            <hr />
          </div>
          <div class="card-footer">
            <div class="text-end">
              <RouterLink to="" class="btn btn-sm btn-dark">Close</RouterLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      product: null,
      productId: ''
    }
  },
  mounted() {
    this.productId = this.$route.params.id
    this.getProductData()
  },

  methods: {
    getProductData() {
      axios
        .get(`http://127.0.0.1:8000/api/product/${this.productId}/show`)
        .then((res) => {
          console.log(res.data.index)
          this.product = res.data.index
        })
        .catch((error) => {
          console.error('Error fetching product data:', error)
        })
    }
  }
}
</script>
