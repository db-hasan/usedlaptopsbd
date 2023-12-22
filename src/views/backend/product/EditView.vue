<template>
<div class="">
    <div class="text-end">
        <RouterLink to="" class="btn btn-sm btn-dark"><i class="fas fa-plus-circle"></i> View Data</RouterLink>
    </div>
    <hr>
    
   <form method="post" action="" class="row g-3 p-3">
      <div class="col-md-4 ">
        <label for="brand_name" class="form-label">Bundle Name<span class="text-danger">*</span></label>
        <input type="text" class="form-control" id="brand_name" name="brand_name" value="">
      </div>

      <div class="col-md-2">
        <label for="inputPassword4" class="form-label">Status</label>
        <select class="form-select" aria-label="Default select example" name="status">
          <option value="">1</option>
        </select>
      </div>

      <div class="col-12 text-end">
        <button type="submit" class="btn btn-primary">Submit</button>
      </div>
    </form>
</div>

</template>