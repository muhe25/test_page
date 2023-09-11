<template>
    <div class="row">
        <div class="col-md-6 offset-md-3">
            <div>
                <div>
                    <router-link :to="{ name:'ContactList'}" class="btn btn-primary pull-right "  > Back To ContactList </router-link>
                   <br>
                </div>
                <div>
                   <div class="alert alert-danger"  mt-4 v-if="errors.length">
                     <ul class="mb-0" >
                        <li v-for="(error,index) in errors" :key="index">
                         {{ error }}
                        </li>
                     </ul>
                   </div>
                    <form @submit.prevent="updateContact" novalidate>
                        
                        <div class = "form-group"> 
                            <label>Name</label>
                            <input type = "text" v-model="contact.name" placeholder="Enter Name" class="form-control"/>
                        </div>
                       <br> <br>
                        <div class = "form-group"> 
                            <label>Email</label>
                            <input type = "text" v-model="contact.email" class="form-control"/>
                        </div>
                        <br> <br>
                        <div class = "form-group"> 
                            <label>Designation</label>
                            <input type = "text" v-model="contact.designation" class="form-control"/>
                        </div>
                        <br> <br>
                        <div class = "form-group"> 
                            <label>Contact Number</label>
                            <input type = "text" v-model="contact.contact_no" class="form-control"/>
                        </div>
                      
                        <div class = "form-group"> 
                            <button class="btn btn-primary btn-block">Save</button>
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
    name:'EditContact',
    data(){
        return{
         contact:{},
         name: '',
         email: '',
         designation: '',
         contact_no: '',
         errors: {},
        }
    },
   
    created(){
      this.getContactById();
    },
    methods: {
        async getContactById(){
        let url = `http://127.0.0.1:8000/api/contacts/${this.$route.params.id}/edit`;
         await axios.get(url).then(response =>{
           console.log(response);
            this.contact = response.data;
         });
    
      } ,
      
      async updateContact(){
       this.errors = [];
       if(!this.contact.name){
        this.errors.push("Please, Enter Name")
       }
       if(!this.contact.email){
        this.errors.push("Enter Email")
       }
       if(!this.contact.designation){
        this.errors.push("Enter Designation")
       }
       if(!this.contact.contact_no){
        this.errors.push(" Enter Contact Number")
       }
       if(!this.errors.length){
         let formData = new FormData();
         formData.append('name' , this.contact.name);
         formData.append('email' , this.contact.email);
         formData.append('designation' , this.contact.designation);
         formData.append('contact_no' , this.contact.contact_no);
         let url = `http://127.0.0.1:8000/api/contacts/${this.$route.params.id}/update` ;
         await axios.post(url,formData).then((response) =>{
            console.log(response);
            if(response.status == 200){
                
                alert(response.data.message);               
                this.contact.name = '';
                this.contact.email = '';
                this.contact.designation = '';
                this.contact.contact_no = '';
                              
            }
            else{
                console.log('error')
            }
           
         }).catch(error => {
            this.errors.push(error.response);
         });
       }
        }
      
    },
    mounted: function()
     {
        console.log('Edit Component Loaded...');
     }
 }
</script>














