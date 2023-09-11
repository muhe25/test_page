<template>
  <div class="row">
      <div class="col-md-6 offset-md-3">
          <div>
             <h1> Login</h1> <hr />
              <div>
                 <div class="alert alert-danger"  mt-4 v-if="errors.length">
                   <ul class="mb-0" >
                      <li v-for="(error,index) in errors" :key="index">
                       {{ error }}
                      </li>
                   </ul>
                 </div>
                 <div class="alert alert-danger"  mt-4 v-else-if="this.isLoggedin == 1 ">
                   <h1 class="btn btn-info"> Logged In</h1>
                 </div>
                 
                  <form @submit.prevent="Login" novalidate>
                      <div class = "form-group"> 
                          <label >Email</label>
                          <input type = "text" v-model="user.email" class="form-control"/>
                      </div>
                      <br> 
                      <div class = "form-group"> 
                          <label >Password</label>
                          <input type = "password" v-model="user.password" class="form-control"/>
                      </div>
                      <br>
                      <div class = "form-group"> 
                          <button class="btn btn-primary btn-block">Login</button>
                      </div>
                      <div>
                        <router-link :to="{ name:'SignUp'}" class="btn btn-primary  "  > SignUp here</router-link>
                        <router-link :to="{ name:'ResetPass'}" class="btn btn-danger pull-right "  > Forgot Pass</router-link>
                      <br>
                     </div> 
                  </form>
              </div>
  </div>
      </div>
  </div>
  
</template>
    
<script>
    import axios from 'axios';
    export default {
        name:'LoginPage',
        data(){
            return{
            user:{},
            email: '',
            password: '',
            errors: {},
            isLoggedin : 0,
            }
        },
        methods: {
    
        async Login(){
          this.errors = [];        
          if(!this.user.email){
            this.errors.push("Enter Email")
          }
          if(!this.user.password){
            this.errors.push("Enter password")
          }
          if(!this.errors.length){
            let formData = new FormData();
            formData.append('email' , this.user.email);
            formData.append('password' , this.user.password);
            // formData.append('image', this.user.image);
            axios.post("http://127.0.0.1:8000/api/login", this.user).
            then((response) =>{
                console.log(response);
                if(response.status == 200){
                   
                    this.isLoggedin = 1 ;
                    this.$router.push({ name: 'ContactList' })
                }
                else{
                    console.log('error')
                }
              
            }).catch(error => {
                this.errors.push(error.response);
            });
          }
            }
        }
    };
</script>
       
         
    