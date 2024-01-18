<template>
  <div class="">
    <div class="text-end">
      <RouterLink to="/index" class="btn btn-sm btn-dark"
        ><i class="fas fa-plus-circle"></i> View Data</RouterLink
      >
    </div>
    <hr />

    <div class="row g-3 p-3">
      <ul class="alert alert-warning" v-if="Object.keys(this.errorList).length > 0">
        <li class="mb-0 ms-3" v-for="(error, index) in this.errorList" :key="index">
          {{ error[0] }}
        </li>
      </ul>
      <div class="col-md-6 pb-3">
        <label for="product_name" class="form-label">Name<span class="text-danger">*</span></label>
        <input
          type="text"
          class="form-control"
          id="product_name"
          v-model="model.products.product_name"
        />
      </div>
      <div class="col-md-6 pb-3">
        <label for="product_sku" class="form-label">SKU<span class="text-danger">*</span></label>
        <input
          type="text"
          class="form-control"
          id="product_sku"
          v-model="model.products.product_sku"
        />
      </div>
      <div class="col-md-6 pb-3">
        <label for="mfg_cost" class="form-label">Cost<span class="text-danger">*</span></label>
        <input type="text" class="form-control" id="mfg_cost" v-model="model.products.mfg_cost" />
      </div>
      <div class="col-md-6 pb-3">
        <label for="sales_price" class="form-label">Price<span class="text-danger">*</span></label>
        <input
          type="text"
          class="form-control"
          id="sales_price"
          v-model="model.products.sales_price"
        />
      </div>
      <div class="col-md-6 pb-3">
        <label for="product_qty" class="form-label"
          >Quantity<span class="text-danger">*</span></label
        >
        <input
          type="text"
          class="form-control"
          id="product_qty"
          v-model="model.products.product_qty"
        />
      </div>
      <div class="col-md-6 pb-3">
        <label for="product_des" class="form-label"
          >Description<span class="text-danger">*</span></label
        >
        <input
          type="text"
          class="form-control"
          id="product_des"
          v-model="model.products.product_des"
        />
      </div>

      <div class="col-md-12">
        <div class="pb-2" v-if="model.products && model.products.product_img && model.products.product_img.length > 0">
          <div
              v-for="(image, imageIndex) in JSON.parse(model.products.product_img)"
              :key="imageIndex"
            >
            <div class="d-flex">
              <div class="pe-2">
                <input
                  type="file"
                  class="form-control"
                  id="product_img"
                  ref="productFile"
                  @change="handleFileObject()"
                /> 
              </div>
              <div class="">
                <img
                  :src="'http://192.168.80.103/images/' + image"
                  class="card-img-top w-25"
                  alt="Not Found"
                />
              </div>
            </div>
          </div>
        </div>
        <div v-else>Loading...</div>
      </div>

      
      <div class="col-12">
        <button type="button" class="btn btn-primary" @click="updateProducts">Update</button>
      </div>
    </div>
  </div>
</template>

<!-- <label for="product_img" class="form-label">Images<span class="text-danger">*</span></label>
        <input
          type="file"
          class="form-control"
          id="product_img"
          ref="productFile"
          multiple
          @change="handleFileObject()"
        /> -->

<script>
import axios from 'axios'

export default {
  data() {
    return {
      productId: '',
      errorList: '',
      model: {
        products: {
          product_name: '',
          product_sku: '',
          mfg_cost: '',
          sales_price: '',
          product_qty: '',
          product_des: '',
          product_img: []
        }
      }
    }
  },
  mounted() {
    this.productId = this.$route.params.id;
    this.getProductData(this.$route.params.id);
  },
  methods: {
    getProductData(productId) {
      axios
        .get(`http://192.168.80.103/api/product/${productId}/edit`)
        .then((res) => {
          console.log(res.data.index)
          this.model.products = res.data.index
          
        })
        .catch(function (error) {
          if (error.response) {
            if (error.response.status == 404) {
              alert(error.response.data.message)
            }
          }
        })
    },
    updateProducts() {
      var mythis = this
      axios
        .put(`http://192.168.80.103/api/product/${this.productId}/edit`, this.model.products)
        .then((res) => {
          console.log(res.data)
          alert(res.data.message)
          this.errorList = ''
        })
        .catch(function (error) {
          if (error.response) {
            if (error.response.status == 422) {
              mythis.errorList = error.response.data.errors
            }
            if (error.response.status == 404) {
              alert(error.response.data.message)
            }
          }
        })
    }
  }
}
</script>
