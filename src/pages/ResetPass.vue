<template>
    <div class="row">
        <div class="col-md-6 offset-md-3">
            <div>
                <div>
                    <h3>Reset Your Password</h3>
                    <hr />
                </div>
                <div class="alert alert-danger"  mt-4 v-if="errors.length">
                   <ul class="mb-0" >
                      <li v-for="(error,index) in errors" :key="index">
                       {{ error }}
                      </li>
                   </ul>
                 </div>
                <div>

                    <form  @submit.prevent="check" novalidate>
                        <div class = "form-group"> 
                            <label>Enter Your Email Here</label>
                            <input type = "email" v-model="user.email" required placeholder="email" class="form-control"/>
                        </div>                      
                        <div class = "form-group"> 
                          <button class="btn btn-primary btn-block">Reset</button>
                      </div>
                    </form>
                     <hr/>
                    <div>
                        <router-link :to="{ name:'LoginPage'}" class="btn btn-info  "  > Login here</router-link>
                        <router-link :to="{ name:'SignUp'}" class="btn btn-danger pull-right "  > SignUp here</router-link>
                      <br>
                  </div>
             </div>
         </div>
       </div>
    </div>
    
</template>
<script>
    export default {
        name:'ResetPass',
        data(){
            return{
            user:{},
            email: '',
            
            errors: {},
            }
        },
        methods: {
    
        async check(){
          this.errors = [];        
          if(!this.user.email){
            this.errors.push("Enter Email")
          }
          
          if(!this.errors.length){
                    this.$router.push({ name: 'ResetVerify' })
                
               
          }
            }
        }
    };
</script>