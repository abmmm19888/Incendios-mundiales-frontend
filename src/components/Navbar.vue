<script setup>

</script>

<template>
   <nav class="navbar navbar-expand-lg fixed-top bg-body-tertiary"> 
    <div class="container-fluid">
      <a class="navbar-brand"> <img src="/src/assets/logos/fuego logo.svg" width="25px"></a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="/home">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/maps">Map</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/login">Login In</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style lang="scss">
$primary-color: #ff7a00;
$secondary-color: #2E4052;

nav {
  width: 100%;
  height: 20px;
  margin: 0;
  padding: 0;
}

.container-fluid {
  background-color: $primary-color;
 
}
.navbar-brand {
  padding-left: 25px;
}

#navbarNav {
  background-color: $primary-color;
  padding-top: 5px;
  font-size: 20px;
 
}

</style>
