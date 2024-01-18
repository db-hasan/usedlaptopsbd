<script setup></script>

<template>
  <div class="content py-3 background">
    <div class="row">
      <div class="col-4">
        <div class="vcolor px-3">
          <!-- Main Image Click Show -->
          <div class="col-12">
            <div
              class="border xzoom-thumbs"
              v-if="product && product.product_img"
              ref="xzoomThumbs"
            >
              <img
                v-if="JSON.parse(product.product_img).length > 0"
                :src="'http://127.0.0.1:8000/images/' + selectedImage"
                class="card-img-top"
                alt="Not Found"
              />
              <div v-else>No images found</div>
            </div>
            <div v-else>Loading...</div>
          </div>
          <!-- Gallery Image Click able -->
          <div class="row">
            <div class="">
              <div class="pb-2 d-flex" v-if="product && product.product_img">
                <div
                  class="border xzoom-gallery"
                  v-for="(image, imageIndex) in JSON.parse(product.product_img)"
                  :key="imageIndex"
                  @click="selectImage(image)"
                >
                  <img
                    :src="'http://127.0.0.1:8000/images/' + image"
                    class="card-img-top"
                    alt="Not Found"
                  />
                </div>
              </div>
              <div v-else>Loading...</div>
            </div>
          </div>

          <!-- Main Image -->
          <!-- <div class="col-12">
            <div class="pb-2" v-if="product && product.product_img">
              <img
                v-if="JSON.parse(product.product_img).length > 0"
                :src="'http://127.0.0.1:8000/images/' + JSON.parse(product.product_img)[0]"
                class="card-img-top"
                alt="Not Found"
              />
              <div v-else>No images found</div>
            </div>
            <div v-else>Loading...</div>
          </div> -->

          <!-- Thumbnail Image -->
          <!-- <div class="col-10">
            <div class="d-flex align-items-center">
              <img
                :src="
                  'http://127.0.0.1:8000/images/' + (product ? product.thumbnail_img : 'Loading...')
                "
                class="card-img-top"
                alt="..."
              />
            </div>
          </div> -->

          <!-- Gallery Image -->
          <!-- <div class="row">
            <div class="col-12">
              <div class="pb-2 d-flex" v-if="product && product.product_img">
                <div
                  v-for="(image, imageIndex) in JSON.parse(product.product_img)"
                  :key="imageIndex"
                >
                  <img
                    :src="'http://127.0.0.1:8000/images/' + image"
                    class="card-img-top"
                    alt="Not Found"
                  />
                </div>
              </div>
              <div v-else>Loading...</div>
            </div>
          </div> -->
        </div>
      </div>
      <div class="col-6 vcolor">
        <div class="py-3">
          <p>
            {{ product ? product.product_name : 'Loading...' }}.{{
              product ? product.product_des : 'Loading...'
            }}
          </p>
        </div>
        <div class="d-flex">
          <a href=""><i class="fa-solid fa-star" style="color: #e79b18"></i></a>
          <a href=""><i class="fa-solid fa-star" style="color: #e79b18"></i></a>
          <a href=""><i class="fa-solid fa-star" style="color: #e79b18"></i></a>
          <a href=""><i class="fa-solid fa-star-half-stroke" style="color: #e79b18"></i></a>
          <a href=""><i class="fa-solid fa-star-half-stroke" style="color: #e79b18"></i></a>
          <small class="p-1"> 10 reviews</small>
        </div>
        <ul class="amenities">
          <li>Regular Price Tk {{ product ? product.sales_price : 'Loading...' }}</li>
          <li>Available QTY : {{ product ? product.product_qty : 'Loading...' }}</li>
        </ul>

        <button type="button" class="btn-sm btn_color mb-2 py-1 px-2">Add to Cart</button>

        <div class="details">
          <p>Quick Overview</p>
          <ul>
            <li><span>✓</span> Display Size (Inch) - 27</li>
            <li><span>✓</span> Touch Screen - No</li>
            <li><span>✓</span> Display Resolution - 1920x1080</li>
            <li><span>✓</span> HDMI Port - 1</li>
            <li><span>✓</span> Thunderbolt - No</li>
            <li><span>✓</span> Rotatable - No</li>
          </ul>
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
      productId: '',
      selectedImage: '' // Add a data property to store the selected image
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
          if (
            this.product &&
            this.product.product_img &&
            JSON.parse(this.product.product_img).length > 0
          ) {
            this.selectedImage = JSON.parse(this.product.product_img)[0] // Set the initial selected image
          }
        })
        .catch((error) => {
          console.error('Error fetching product data:', error)
        })
    },
    selectImage(image) {
      this.selectedImage = image // Set the selected image when an xzoom-gallery image is clicked
    }
  }
}
</script>

<!-- <script>
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
</script> -->
