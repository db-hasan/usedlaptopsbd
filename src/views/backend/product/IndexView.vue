<template>
  <div class="">
    <div class="text-end">
      <RouterLink to="/create" class="btn btn-sm btn-dark"
        ><i class="fas fa-plus-circle"></i> Add Data</RouterLink
      >
    </div>
    <hr />
    <div class="custom-scrollbar-table">
      <table id="myTable" class="table">
        <thead>
          <tr>
            <th><span class="">ID</span></th>
            <th><span class="">Name</span></th>
            <th><span class="">SKU</span></th>
            <th><span class="">Cost </span></th>
            <th><span class="">Price </span></th>
            <th><span class="">Quantity </span></th>
            <th><span class="">Description </span></th>
            <th><span class="">Thumbnail </span></th>
            <th class="ps-5">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(product, index) in this.products" :key="index">
            <td>{{ product.id }}</td>
            <td>{{ product.product_name }}</td>
            <td>{{ product.product_sku }}</td>
            <td>{{ product.mfg_cost }}</td>
            <td>{{ product.sales_price }}</td>
            <td>{{ product.product_qty }}</td>
            <td>{{ product.product_des }}</td>
            <td>
              <div class="pb-2" v-if="product && product.product_img">
                <img
                  v-if="JSON.parse(product.product_img).length > 0"
                  :src="'http://127.0.0.1:8000/images/' + JSON.parse(product.product_img)[0]"
                  class="card-img-top w-25"
                  alt="Not Found"
                />
                <div v-else>No images found</div>
              </div>
              <div v-else>Loading...</div>
            </td>
            <td class="icons">
              <RouterLink :to="'/product/' + product.id + '/show'" type="button" class="btn view"
                ><i class="fa-solid fa-eye"></i
              ></RouterLink>
              <RouterLink :to="'/product/' + product.id + '/edit'" type="button" class="btn edit"
                ><i class="fa-solid fa-pen"></i
              ></RouterLink>
              <button
                :to="'/product/' + product.id + '/delete'"
                type="button"
                class="btn delete"
                @click="deleteProducts(product.id)"
              >
                <i class="fa-solid fa-trash"></i>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      products: []
    }
  },
  mounted() {
    this.getproducts()
  },
  methods: {
    getproducts() {
      axios.get('http://127.0.0.1:8000/api/product').then((res) => {
        this.products = res.data.index
      })
    },

    // delete start
    deleteProducts(productId) {
      console.log(productId)
      if (confirm('Are you sure you want to delete this record?')) {
        axios
          .delete(`http://127.0.0.1:8000/api/product/${productId}/delete`)
          .then((res) => {
            alert(res.data.message)
            this.getproducts()
          })
          .catch(function (error) {
            if (error.response) {
              if (error.response.status == 404) {
                alert(error.response.data.message)
              }
            }
          })
      }
    }
  }
}
</script>
