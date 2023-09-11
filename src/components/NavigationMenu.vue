<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">{{ title }}</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <ul class="navbar-nav">
        <li class="nav-item">
           <router-link class="nav-link" to="/">Home</router-link>
        </li>
       <!-- 
       <li class="nav-item">
           <router-link class="nav-link" to="/add-contact">AddContact</router-link>
        </li>
      -->
       <!--  <li class="nav-item">
           <router-link class="nav-link" to="/signup">Signup</router-link>
        </li>
        --> 
      </ul>

    </div>
  </div>
  <div>
  <router-link :to="{ name:'LoginPage'}" class="btn btn-primary pull-right "  > Login </router-link>
  <button @click="logout" :disabled="logoutLoading">Logout</button>
  <br>
</div>
  <div class="btn btn-alert">
    <div v-if="logoutError" class="error">{{ logoutError }}</div>

  </div>
</nav>
 
</template>

<script>
    import axios from 'axios';
    export default {
        name:'NavigationMenu',
        data(){
            return{
            user:{},
            logoutLoading: false,
            logoutError: null,
            }
        },
        methods: {
    
        async logout() {
        state.logoutLoading = true;
        state.logoutError = null;

          // Make an API request to the logout endpoint
          axios.post('/api/logout')
          .then(() => {
            // Successful logout
            // Perform any necessary client-side cleanup or redirection
          })
          .catch((error) => {
            // Logout failed
            state.logoutError = error.message;
          })
          .finally(() => {
            state.logoutLoading = false;
          });
          }
        }
    };
</script>
       
      