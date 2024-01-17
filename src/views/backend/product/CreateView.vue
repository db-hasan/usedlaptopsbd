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
      <!-- <div class="col-md-6 pb-3">
        <label for="thumbnail_img" class="form-label"
          >Thumbnail<span class="text-danger">*</span></label
        >
        <input
          type="file"
          class="form-control"
          id="thumbnail_img"
          ref="thumbnailFile"
          @change="handleFileObject()"
        />
      </div> -->
      <div class="col-md-6 pb-3">
        <label for="product_img" class="form-label">Images<span class="text-danger">*</span></label>
        <input
          type="file"
          class="form-control"
          id="product_img"
          ref="productFile"
          multiple
          @change="handleFileObject()"
        />
      </div>

      <div class="col-12">
        <button type="button" class="btn btn-primary" @click="saveProducts">Submit</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      errorList: '',
      model: {
        products: {
          product_name: '',
          product_sku: '',
          mfg_cost: '',
          sales_price: '',
          product_qty: '',
          product_des: '',
          // thumbnail_img: '', // Corrected the name
          product_img: [] // Corrected the name
        }
      }
    }
  },
  methods: {
    // handleFileObject() {
    //   const fileInput = this.$refs.file
    //   const file = fileInput.files[0]
    //   this.model.products.thumbnail_img = file // Corrected the name
    // },
    handleFileObject() {
      const fileInput = this.$refs.productFile
      const files = fileInput.files

      // Map the files to an array of objects with a name property
      this.model.products.product_img = Array.from(files).map((file) => ({ name: file.name, file }))
    },
    saveProducts() {
      const formData = new FormData()
      formData.append('product_name', this.model.products.product_name)
      formData.append('product_sku', this.model.products.product_sku)
      formData.append('mfg_cost', this.model.products.mfg_cost)
      formData.append('sales_price', this.model.products.sales_price)
      formData.append('product_qty', this.model.products.product_qty)
      formData.append('product_des', this.model.products.product_des)

      // formData.append('thumbnail_img', this.model.products.thumbnail_img) // Corrected the name
      // formData.append('product_img', this.model.products.product_img) // Corrected the name

      // Append multiple image files
      this.model.products.product_img.forEach((fileObj, index) => {
        formData.append(`product_img[${index}]`, fileObj.file)
      })

      axios
        .post('http://192.168.80.124/api/product', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        })
        .then((res) => {
          console.log(res)
          alert(res.data.message)
          this.model.products = {
            product_name: '',
            product_sku: '',
            mfg_cost: '',
            sales_price: '',
            product_qty: '',
            product_des: '',
            // thumbnail_img: '',
            product_img: []
          }
          this.errorList = ''
        })
        .catch((error) => {
          if (error.response) {
            if (error.response.status == 422) {
              this.errorList = error.response.data.errors
            }
          } else if (error.request) {
            console.log(error.request)
          } else {
            console.log('Error', error.message)
          }
        })
    }
  }
}
</script>

<!-- <script>
import axios from 'axios'

export default {
  data() {
    return {
      errorList: '',
      model: {
        products: {
          product_name: '',
          product_sku: '',
          mfg_cost: '',
          sales_price: '',
          product_qty: '',
          product_des: '',
          thumbnail_img: '' // Corrected the name
        }
      }
    }
  },
  methods: {
    handleFileObject() {
      const fileInput = this.$refs.file
      const file = fileInput.files[0]
      this.model.products.thumbnail_img = file // Corrected the name
    },
    saveProducts() {
      const formData = new FormData()
      formData.append('product_name', this.model.products.product_name)
      formData.append('product_sku', this.model.products.product_sku)
      formData.append('mfg_cost', this.model.products.mfg_cost)
      formData.append('sales_price', this.model.products.sales_price)
      formData.append('product_qty', this.model.products.product_qty)
      formData.append('product_des', this.model.products.product_des)
      formData.append('thumbnail_img', this.model.products.thumbnail_img) // Corrected the name

      axios
        .post('http://127.0.0.1:8000/api/product', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        })
        .then((res) => {
          console.log(res)
          alert(res.data.message)
          this.model.products = {
            product_name: '',
            product_sku: '',
            mfg_cost: '',
            sales_price: '',
            product_qty: '',
            product_des: '',
            thumbnail_img: ''
          }
          this.errorList = ''
        })
        .catch((error) => {
          if (error.response) {
            if (error.response.status == 422) {
              this.errorList = error.response.data.errors
            }
          } else if (error.request) {
            console.log(error.request)
          } else {
            console.log('Error', error.message)
          }
        })
    }
  }
}
</script> -->

<!-- <script>
import axios from 'axios'

export default {
  data() {
    return {
      errorList: '',
      model: {
        products: {
          product_name: '',
          product_sku: '',
          mfg_cost: '',
          sales_price: '',
          product_qty: '',
          product_des: '',
          thumbnail_img: '',
          product_img: ''
        }
      }
    }
  },
  methods: {
    saveProducts() {
      var mythis = this
      axios
        .post('http://127.0.0.1:8000/api/product', this.model.products)
        .then((res) => {
          console.log(res)
          alert(res.data.message)
          this.model.products = {
            product_name: '',
            product_sku: '',
            mfg_cost: '',
            sales_price: '',
            product_qty: '',
            product_des: '',
            thumbnail_img: '',
            product_img: ''
          }
          this.errorList = ''
        })
        .catch(function (error) {
          if (error.response) {
            if (error.response.status == 422) {
              mythis.errorList = error.response.data.errors
            }
          } else if (error.request) {
            console.log(error.request)
          } else {
            console.log('Error', error.message)
          }
        })
    }
  }
}
</script> -->
