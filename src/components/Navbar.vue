

<script setup>
</script>

<template>
<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/maps">Map</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/login">Login In</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" aria-disabled="true">Disabled</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
</template>

<styles lang="scss">
  * {
  margin:0;
  padding:0;
}

nav {
  width: 100%;
  height: 25px;
  margin-top: 0;
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
</styles>