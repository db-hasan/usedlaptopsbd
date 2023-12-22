
<template>
<div class="">
    <div class="text-end">
        <RouterLink to="" class="btn btn-sm btn-dark"><i class="fas fa-plus-circle"></i> Add Data</RouterLink>
    </div>
    <hr>
    <div class="custom-scrollbar-table">
        <table id="myTable" class="display">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Status</th>
                    <th class="ps-5">Action</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>f</td> 
                    <td>g</td> 
                    <td>h</td> 
                    <td class="icons">
                        <RouterLink to="" type="button"  class="btn view"><i class="fa-solid fa-eye"></i></RouterLink>
                        <RouterLink to="" type="button" class="btn edit"><i class="fa-solid fa-pen"></i></RouterLink>
                        <RouterLink to="" type="button"  class="btn delete" onclick="return confirm('Are you sure dalete')"><i class="fa-solid fa-trash"></i></RouterLink>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</div>

<!-- <script src="{{asset('backend/js/jquery-3.7.1.min.js') }} "></script>
<script src="{{asset('backend/js/dataTables.js') }} "></script> -->

</template>