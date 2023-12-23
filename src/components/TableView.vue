
<template>
  <div>
    <div class="">
      <div class="container p-3">
        <div class="d-flex justify-content-end">
          <h3></h3>
          <button type="button" class="btn btn-outline-secondary">Secondary</button>
        </div>
        <table class="table table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col" class="text-end pe-3">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td class="">
                <div class="d-flex justify-content-end">
                  <button type="button" class="btn btn-outline-primary btn-sm">View</button>
                  <button type="button" class="btn btn-outline-primary btn-sm">Edit</button>
                  <button type="button" class="btn btn-outline-primary btn-sm">Delete</button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
