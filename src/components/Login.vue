<script setup>

</script>

<template>
  <div>
    <form>
      <div class="form-group">
        <label for="exampleInputEmail1">Correo</label>
        <input
          type="email"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Enter email"
        />
        <small id="emailHelp" class="form-text text-muted"></small>
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Contraseña</label>
        <input
          type="password"
          class="form-control"
          id="exampleInputPassword1"
          placeholder="Password"
        />
      </div>
      <button type="submit" class="btn btn-primary custom-button">Entar</button>
    </form>
  </div>
</template>

<style lang="scss" scoped>
$primary-color: #2E4052;


.custom-button {
  background-color: $primary-color;
  border-color: $primary-color;
  color: white;
}
</style>