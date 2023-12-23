
<template>
  <div class="">
    <div class="text-end">
      <RouterLink to="" class="btn btn-sm btn-dark"><i class="fas fa-plus-circle"></i> View Data</RouterLink>
    </div>
    <hr>

    <form method="post" action="" class="row g-3 p-3">

      <div class="col-md-6 pb-3">
        <label for="brand_name" class="form-label">Brand Name<span class="text-danger">*</span></label>
        <input type="text" class="form-control" id="brand_name" name="brand_name" value="">
      </div>

      <div class="col-12">
        <button type="submit" class="btn btn-primary">Submit</button>
      </div>
    </form>

  </div>
</template>