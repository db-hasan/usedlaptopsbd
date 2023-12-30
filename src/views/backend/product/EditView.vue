<template>
  <div class="">
    <div class="text-end">
      <RouterLink to="/index" class="btn btn-sm btn-dark"
        ><i class="fas fa-plus-circle"></i> View Data</RouterLink
      >
    </div>
    <hr />

    <form method="post" action="" class="row g-3 p-3">
      <div class="col-md-6 pb-3">
        <label for="product_name" class="form-label">Name<span class="text-danger">*</span></label>
        <input type="text" class="form-control" id="product_name" name="product_name" value="" />
      </div>
      <div class="col-md-6 pb-3">
        <label for="product_sku" class="form-label">SKU<span class="text-danger">*</span></label>
        <input type="text" class="form-control" id="product_sku" name="product_sku" value="" />
      </div>
      <div class="col-md-6 pb-3">
        <label for="mfg_cost" class="form-label">Cost<span class="text-danger">*</span></label>
        <input type="text" class="form-control" id="mfg_cost" name="mfg_cost" value="" />
      </div>
      <div class="col-md-6 pb-3">
        <label for="sales_price" class="form-label">Price<span class="text-danger">*</span></label>
        <input type="text" class="form-control" id="sales_price" name="sales_price" value="" />
      </div>
      <div class="col-md-6 pb-3">
        <label for="product_qty" class="form-label"
          >Quantity<span class="text-danger">*</span></label
        >
        <input type="text" class="form-control" id="product_qty" name="product_qty" value="" />
      </div>
      <div class="col-md-6 pb-3">
        <label for="product_des" class="form-label"
          >Description<span class="text-danger">*</span></label
        >
        <input type="text" class="form-control" id="product_des" name="product_des" value="" />
      </div>
      <div class="col-md-6 pb-3">
        <label for="product_img" class="form-label">Images<span class="text-danger">*</span></label>
        <input type="file" class="form-control" id="product_img" name="product_img" value="" />
      </div>

      <div class="col-12">
        <button type="submit" class="btn btn-primary">Submit</button>
      </div>
    </form>
  </div>
</template>
