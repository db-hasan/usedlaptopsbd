<template>
  <header>
    <div class="header py-2 bg-dark text-light sticky-top">
      <div class="content">
        <div class="d-flex justify-content-between">
          <div class="header_logo p-2" style="width: 25%">
            <RouterLink to="">SoftxOne</RouterLink>
          </div>
          <div class="header_search p-2" style="width: 50%">
            <div class="search">
              <div class="input-group" style="width: 100%">
                <input
                  type="text"
                  class="form-control"
                  aria-label="Text input with 2 dropdown buttons"
                />
                <button class="btn btn-light search_btn px-3" type="button">
                  <RouterLink class="" to=""
                    ><i class="fa-solid fa-magnifying-glass"></i
                  ></RouterLink>
                </button>
              </div>
            </div>
          </div>
          <div class="shop p-2" style="width: 25%">
            <div class="d-flex justify-content-end">
              <button type="button" class="btn text-light position-relative" id="cartButton">
                <i class="fa-solid fa-cart-arrow-down fa-xl"></i>
                <span
                  class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                  >0</span
                >
              </button>
              <button type="button" class="btn text-light position-relative">
                <i class="fa-solid fa-heart fa-xl"></i>
                <span
                  class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                  >0</span
                >
              </button>
              <button type="button" class="btn text-light position-relative">
                <i class="fa-solid fa-circle-user fa-xl"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="content bg-light">
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid text-center">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item"><a class="nav-link" href="#">Apple</a></li>
              <li class="nav-item"><a class="nav-link" href="#">Microsoft</a></li>
              <li class="nav-item"><a class="nav-link" href="#">HP</a></li>
              <li class="nav-item"><a class="nav-link" href="#">Lenovo</a></li>
              <li class="nav-item"><a class="nav-link" href="#">Acer</a></li>
              <li class="nav-item"><a class="nav-link" href="#">Asus</a></li>
              <li class="nav-item"><a class="nav-link" href="#">Dell</a></li>
              <li class="nav-item"><a class="nav-link" href="#">Walton</a></li>
              <li class="nav-item"><a class="nav-link" href="#">Gigabyte</a></li>
              <li class="nav-item"><a class="nav-link" href="#">Huawei</a></li>
              <li class="nav-item"><a class="nav-link" href="#">MSI</a></li>
              <li class="nav-item"><a class="nav-link" href="#">Xiaomi</a></li>
              <li class="nav-item"><a class="nav-link" href="#">Realme</a></li>
            </ul>
          </div>
        </div>
      </nav>
    </div>

    <!-- Cart template start -->
    <div class="cart-container" id="cartContainer">
      <div class="d-flex justify-content-between mb-3">
        <RouterLink to="#" class="btn">
          <i class="fa-solid fa-cart-arrow-down fa-xl"></i> Cart (1)
        </RouterLink>
        <button class="btn" id="closeCart">
          <i class="fa-solid fa-xmark fa-xl" style="color: #f3124a"></i>
        </button>
      </div>

      <div class="row d-flex justify-content-between align-items-center">
        <div class="col-3">
          <img
            src="https://www.ryanscomputers.com/storage/products/small/asus-vp247hae-236-inch-fhd-hdmi-vga-eye-care-11663820310.webp"
            class="img-fluid rounded-3"
            alt="Cotton T-shirt"
          />
        </div>
        <div class="col-7">
          <p class="">Monitor</p>
          <p>Size: 22"</p>
        </div>
        <div class="col-1 text-end">
          <RouterLink to="#" class="text-danger remove-item">
            <i class="fas fa-trash fa-lg"></i>
          </RouterLink>
        </div>
      </div>
      <hr />
      <div class="row d-flex justify-content-between align-items-center">
        <div class="col-3">
          <img
            src="https://www.ryanscomputers.com/storage/products/small/asus-vp247hae-236-inch-fhd-hdmi-vga-eye-care-11663820310.webp"
            class="img-fluid rounded-3"
            alt="Cotton T-shirt"
          />
        </div>
        <div class="col-7">
          <p class="">Monitor</p>
          <p>Size: 22"</p>
        </div>
        <div class="col-1 text-end">
          <RouterLink to="#!" class="text-danger remove-item">
            <i class="fas fa-trash fa-lg"></i>
          </RouterLink>
        </div>
      </div>
      <hr />
      <button type="button" class="btn btn-outline-success w-100 mb-2">View Cart</button>
    </div>
    <!-- Cart template end -->

    <div class="home">
      <div class="banner">
        <div id="myCarousel" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-indicators">
            <button
              type="button"
              data-bs-target="#myCarousel"
              data-bs-slide-to="0"
              class="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#myCarousel"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#myCarousel"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src="../../../assets/images/banner.webp" class="d-block w-100" alt="Image 1" />
              <div class="carousel-caption d-none d-md-block">
                <h5>First slide label</h5>
                <p>Some representative placeholder content for the first slide.</p>
              </div>
            </div>
            <div class="carousel-item">
              <img src="../../../assets/images/banner1.webp" class="d-block w-100" alt="Image 2" />
              <div class="carousel-caption d-none d-md-block">
                <h5>First slide label</h5>
                <p>Some representative placeholder content for the first slide.</p>
              </div>
            </div>
            <!-- <div class="carousel-item">
              <img src="" class="d-block w-100" alt="Image 2" />
              <div class="carousel-caption d-none d-md-block">
                <h5>First slide label</h5>
                <p>Some representative placeholder content for the first slide.</p>
              </div>
            </div> -->
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  </header>
</template>
