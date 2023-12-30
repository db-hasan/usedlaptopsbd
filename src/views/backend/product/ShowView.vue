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
          <div class="card-body px-2">
            <div class="row">
              <div class="col-md-6 g-4">
                <label>ID:</label>
                <div>0172554</div>
              </div>
              <div class="col-md-4 g-4">
                <label>SKU:</label>
                <div>QDF34WQS</div>
              </div>
            </div>
            <hr />
            <div class="row">
              <div class="col-md-12">
                <label>Name:</label>
                <div>Hp Laptpos</div>
              </div>
            </div>
            <hr />
            <div class="row">
              <div class="col-md-4">
                <label>Cost:</label>
                <div>50000</div>
              </div>
              <div class="col-md-4">
                <label>Price:</label>
                <div>70000</div>
              </div>
              <div class="col-md-4">
                <label>Quantity:</label>
                <div>10</div>
              </div>
            </div>
            <hr />
            <div class="row">
              <div class="col-md-12">
                <label>Description:</label>
                <div>Acer Aspire i3 8Gen</div>
              </div>
            </div>
            <hr />
            <div class="row">
              <div class="col-md-12 d-flex">
                <div class="pe-5">
                  <h6>Image.png</h6>
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
