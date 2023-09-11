<template>
  <div class="row">
      <div class="col-md-6 offset-md-3">
          <div>
             <h1> SignUp</h1> <hr />
              <div>
                 <div class="alert alert-danger"  mt-4 v-if="errors.length">
                   <ul class="mb-0" >
                      <li v-for="(error,index) in errors" :key="index">
                       {{ error }}
                      </li>
                   </ul>
                 </div>
                  <form @submit.prevent="saveData" novalidate>
                      
                      <div class = "form-group"> 
                          <label >Name</label>
                          <input type = "text" v-model="user.name" placeholder="Enter Name" class="form-control"/>
                      </div>
                     <br> 
                      <div class = "form-group"> 
                          <label >Email</label>
                          <input type = "text" v-model="user.email" class="form-control"/>
                      </div>
                      <br> 
                      <div class = "form-group"> 
                          <label >Password</label>
                          <input type = "password" v-model="user.password" class="form-control"/>
                      </div>
                      <div class = "form-group"> 
                          <label >Confirm Password</label>
                          <input type = "password" v-model="user.password" class="form-control"/>
                      </div>
                      <br>
                   
                      <div class = "form-group"> 
                          <button class="btn btn-primary btn-block">SignUp</button>
                      </div>
                      <div>
                        <router-link :to="{ name:'LoginPage'}" class="btn btn-primary pull-right "  >Login here</router-link>
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
        name:'SignUp',
        data(){
            return{
            user:{},
            name: '',
            email: '',
            password: '',
            errors: {},
            }
        },
        methods: {
    
        async saveData(){
          this.errors = [];
          if(!this.user.name){
            this.errors.push("Please, Enter Name")
          }
          if(!this.user.email){
            this.errors.push("Enter Email")
          }
          if(!this.user.password){
            this.errors.push("Enter Password")
          }
          if(!this.errors.length){
            let formData = new FormData();
            formData.append('name' , this.user.name);
            formData.append('email' , this.user.email);
            formData.append('password' , this.user.password);
            // formData.append('image', this.user.image);
            
            let url = "http://127.0.0.1:8000/api/register" ;
            await axios.post(url,formData).then((response) =>{
                console.log(response);
                if(response.status == 200){
                    this.user.name = '';
                    this.user.email = '';
                    this.user.password = '';
                    alert(response.data.message);
                    this.$router.push({ name: 'userList' })
                }
                else{
                  alert(response.data.message);
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
       
         
    