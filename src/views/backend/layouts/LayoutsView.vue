<template>
  <div class="">
    <div class="sidebar">
      <ul>
        <div class="custom-scrollbar-sidebar py-2">
          <li class="mt-3">
            <RouterLink to="/dashboard">
              <span class="icon">
                <i class="fa-solid fa-house fa-lg"></i>
              </span>
              <span class="title">Dashboard</span>
            </RouterLink>
          </li>
          <li class="">
            <RouterLink to="">
              <span class="icon">
                <i class="fa-regular fa-folder-open fa-lg"></i>
              </span>
              <span class="title">Product</span>
            </RouterLink>
          </li>
          <li class="">
            <RouterLink to="/index">
              <span class="icon">
                <i class="fa-solid fa-cart-arrow-down fa-lg"></i>
              </span>
              <span class="title">Sales</span>
            </RouterLink>
          </li>
          <li class="">
            <RouterLink to="#">
              <span class="icon">
                <i class="fa-regular fa-credit-card fa-lg"></i>
              </span>
              <span class="title">Payment</span>
            </RouterLink>
          </li>
          <li class="">
            <RouterLink to="#">
              <span class="icon">
                <i class="fa-solid fa-chart-column fa-lg"></i>
              </span>
              <span class="title">Report</span>
            </RouterLink>
          </li>
          <li class="">
            <RouterLink to="#">
              <span class="icon">
                <i class="fa-solid fa-house-circle-check fa-lg"></i>
              </span>
              <span class="title">Home</span>
            </RouterLink>
          </li>
          <li class="">
            <RouterLink to="#">
              <span class="icon">
                <i class="fa-solid fa-layer-group fa-lg"></i>
              </span>
              <span class="title">Service</span>
            </RouterLink>
          </li>
          <li class="">
            <RouterLink to="#">
              <span class="icon">
                <i class="fa-solid fa-hand-holding-medical fa-lg"></i>
              </span>
              <span class="title">Facilities</span>
            </RouterLink>
          </li>
          <li class="">
            <RouterLink to="#">
              <span class="icon">
                <i class="fa-solid fa-building-columns fa-lg"></i>
              </span>
              <span class="title">About Us</span>
            </RouterLink>
          </li>
          <li class="">
            <RouterLink to="">
              <span class="icon">
                <i class="fa-solid fa-address-card fa-lg"></i>
              </span>
              <span class="title">Contact Us</span>
            </RouterLink>
          </li>
          <li class="">
            <RouterLink to="#">
              <span class="icon">
                <i class="fa-solid fa-users fa-lg"></i>
              </span>
              <span class="title">Users</span>
            </RouterLink>
          </li>
          <li class="">
            <RouterLink to="#">
              <span class="icon">
                <i class="fa-solid fa-right-from-bracket fa-lg"></i>
              </span>
              <span class="title">Logout</span>
            </RouterLink>
          </li>
        </div>
      </ul>
    </div>

    <!-------------------- Main -------------------->
    <div class="main">
      <div class="header d-flex fixed-top">
        <div class="logo text-center">
          <h3>
            <RouterLink to="#">SoftxOne</RouterLink>
          </h3>
        </div>
        <div class="toggle">
          <i class="fa-solid fa-bars"></i>
        </div>
        <!-------------------- Design -------------------->
        <div class="header_right" style="width: 70%"></div>
        <!-------------------- Design -------------------->

        <div class="text-end">
          <div class="user">
            <button class="btn user_btn" type="button" id="search-button">
              <div class="user_icon">
                <i class="fa-solid fa-magnifying-glass fa-xl"></i>
              </div>
            </button>
          </div>
        </div>
        <input type="text" class="form-control" placeholder="Search" id="search-input" />

        <div class="text-end">
          <div class="user">
            <button class="btn user_btn" type="button">
              <div class="user_icon">
                <i class="fa-solid fa-circle-plus fa-xl"></i>
              </div>
            </button>
          </div>
        </div>

        <div class="text-end">
          <div class="user">
            <button class="btn user_btn" type="button">
              <div class="user_icon">
                <i class="fa-solid fa-cart-plus fa-xl"></i>
              </div>
            </button>
          </div>
        </div>

        <div class="text-end">
          <div class="dropdown user">
            <button
              class="btn user_btn"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <div class="user_icon">
                <i class="fa-regular fa-comments fa-xl"></i>
              </div>
            </button>
            <ul class="dropdown-menu" style="width: 250px">
              <li class="dropdown-item text-end">
                <RouterLink class="dropdown-link" to="#">15 Notifications</RouterLink>
              </li>
              <li class="dropdown-item">
                <div class="d-flex justify-content-between">
                  <RouterLink class="dropdown-link" to="#"
                    ><i class="fa-solid fa-chart-column"></i> Stock Report
                  </RouterLink>
                  <small>3 mins</small>
                </div>
              </li>
              <li class="dropdown-item">
                <div class="d-flex justify-content-between">
                  <RouterLink class="dropdown-link" to="#"
                    ><i class="fa-solid fa-heart-circle-minus"></i>
                    User message
                  </RouterLink>
                  <small>3 mins</small>
                </div>
              </li>
              <li class="dropdown-item">
                <div class="d-flex justify-content-between">
                  <RouterLink class="dropdown-link" to="#"
                    ><i class="fa-solid fa-cart-plus"></i> Sales Report
                  </RouterLink>
                  <small>3 mins</small>
                </div>
              </li>
              <li class="dropdown-item text-center">
                <RouterLink class="dropdown-link" to="#">See All Notifications</RouterLink>
              </li>
            </ul>
          </div>
        </div>

        <div class="text-end">
          <div class="dropdown user">
            <button
              class="btn user_btn"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <div class="user_icon">
                <i class="fa-regular fa-bell fa-xl"></i>
              </div>
            </button>
            <ul class="dropdown-menu" style="width: 250px">
              <li class="dropdown-item text-end">
                <RouterLink class="dropdown-link" to="#">15 Notifications</RouterLink>
              </li>
              <li class="dropdown-item">
                <div class="d-flex justify-content-between">
                  <RouterLink class="dropdown-link" to="#"
                    ><i class="fa-solid fa-chart-column"></i> Stock Report
                  </RouterLink>
                  <small>3 mins</small>
                </div>
              </li>
              <li class="dropdown-item">
                <div class="d-flex justify-content-between">
                  <RouterLink class="dropdown-link" to="#"
                    ><i class="fa-solid fa-heart-circle-minus"></i>
                    User message
                  </RouterLink>
                  <small>3 mins</small>
                </div>
              </li>
              <li class="dropdown-item">
                <div class="d-flex justify-content-between">
                  <RouterLink class="dropdown-link" to="#"
                    ><i class="fa-solid fa-cart-plus"></i> Sales Report
                  </RouterLink>
                  <small>3 mins</small>
                </div>
              </li>
              <li class="dropdown-item text-center">
                <RouterLink class="dropdown-link" to="#">See All Notifications</RouterLink>
              </li>
            </ul>
          </div>
        </div>

        <div class="text-end pe-5">
          <div class="dropdown user">
            <button
              class="btn dropdown-toggle user_btn"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <img src="" class="img-fluid" />
              <span> Ross C. Lopez</span>
            </button>
            <ul class="dropdown-menu">
              <li class="dropdown-item">
                <RouterLink class="dropdown-link" to="#"
                  ><i class="fas fa-cog"></i> Manage Account
                </RouterLink>
              </li>
              <li class="dropdown-item">
                <RouterLink class="dropdown-link" to="#"
                  ><i class="fas fa-user-tie"></i> My Profile
                </RouterLink>
              </li>
              <li class="dropdown-item">
                <RouterLink class="dropdown-link" to="#"
                  ><i class="fas fa-sign-out-alt"></i> Logout
                </RouterLink>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="px-4" style="margin-top: 80px">
        <!-- --------------design part start------------------ -->
        <RouterView />
        <!-- --------------design part end------------------ -->
      </div>

      <!--------------- Foooter --------------->
    </div>
  </div>
</template>
