<template>
  <header>
      <div class="wrapper">
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
          <div class="container-fluid">
            <RouterLink class="navbar-brand" to="#">Navbar</RouterLink>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <RouterLink class="nav-link" to="/">Home</RouterLink>
                </li>
                <li class="nav-item"> 
                  <RouterLink class="nav-link" to="#">Features</RouterLink>
                </li>
                <li class="nav-item">
                  <RouterLink class="nav-link" to="#">Pricing</RouterLink>
                </li>
                <li class="nav-item">
                  <RouterLink class="nav-link" to="#">Disabled</RouterLink>
                </li>
                <li class="nav-item">
                  <RouterLink class="nav-link" to="/about">About</RouterLink>
                </li>
                <li class="nav-item">
                  <RouterLink class="nav-link" to="/contact">Contact</RouterLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
</template>
