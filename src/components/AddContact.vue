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
                    <form @submit.prevent="saveContact" novalidate>
                        
                        <div class = "form-group"> 
                            <label >Name</label>
                            <input type = "text" v-model="contact.name" placeholder="Enter Name" class="form-control"/>
                        </div>
                       <br> <br>
                        <div class = "form-group"> 
                            <label >Email</label>
                            <input type = "text" v-model="contact.email" class="form-control"/>
                        </div>
                        <br> <br>
                        <div class = "form-group"> 
                            <label >Designation</label>
                            <input type = "text" v-model="contact.designation" class="form-control"/>
                        </div>
                        <br> <br>
                        <div class = "form-group"> 
                            <label >Contact Number</label>
                            <input type = "text" v-model="contact.contact_no" class="form-control"/>
                        </div>
                      <!--  <div class = "form-group"> 
                            <input type="file" name="image" class="form-control" @change="uploadImage">
                            <img src="" alt="" width="100%" height="50%" >
                        </div> -->
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
    name:'AddContact',
    data(){
        return{
         contact:{},
         name: '',
         email: '',
         designation: '',
         contact_no: '',
         //image: '',
         errors: {},
        }
    },
    methods: {

     async saveContact(){
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
        // formData.append('image', this.contact.image);
        
         let url = "http://127.0.0.1:8000/api/contacts/save" ;
         await axios.post(url,formData).then((response) =>{
            console.log(response);
            if(response.status == 200){
                this.contact.name = '';
                this.contact.email = '';
                this.contact.designation = '';
                this.contact.contact_no = '';
                this.contact.image = '';
                alert(response.data.message);
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

//18:56













