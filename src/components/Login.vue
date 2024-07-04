<script setup>

</script>

<template>
 < <div class="centered-form">
    <form class="form">
      <div class="form-group">
        <label for="exampleInputEmail1">Correo</label>
        <input
         v-model="username"
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
          v-model="password"
          type="password"
          class="form-control"
          id="exampleInputPassword1"
          placeholder="Password"
        />
      </div>
      <button @click="login" class="btn btn-primary custom-button">Entrar</button>
    </form>
  </div> 
</template>



<script>

export default {
  data() {
    return {
      username: '',
      password: ''
    };
  },
  methods: {
    async login() {
      const formData = new FormData()
      formData.append('username', this.username)
      formData.append('password', this.password)
      console.log(formData)
      const request = new Request("http://localhost:8000/token", {
        method: "post",
        body: formData
      });

      console.log(request)
      const response = await fetch(request)
      const token=(await response.json()).access_token
      console.log(token)
      localStorage.setItem('token', token);
          
    }
  }
};
</script>


<style lang="scss" scoped>
$primary-color: #2E4052;

.centered-form {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; 
}

.form {
  width: 300px; 
  padding: 20px; 
  background-color: #f0f0f0; 
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); 
}

.form-group {
  margin-bottom: 15px;
}

.custom-button {
  width: 100%; 
  margin-top: 15px; 
  background-color: $primary-color;
  border-color: $primary-color;
  color: white;
  justify-content: center; 
  align-items: center; 
}

.custom-button:focus,
.custom-button:active {
  background-color: darken($primary-color, 10%);
  border-color: darken($primary-color, 10%);
  color: white;
  box-shadow: none; 
  outline: none; 
}

</style>