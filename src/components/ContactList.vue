<template>
   <div>
        <router-link :to="{ name:'AddContact'}" class="btn btn-primary pull-right "  > <sup>+</sup> Add Contact </router-link>
        <hr /> 
    </div> <br>
     <div class="container">
           <table class="table table-hover">
              <thead class="table table-primary">
                <tr>
                   <th scope="col">#</th>
                   <th scope="col">Name</th>
                   <th scope="col">Email</th>
                   <th scope="col">Designation</th>
                   <th scope="col">Contact Num.</th>
                   <!-- <th scope="col">Image</th> -->
                   <th scope="col">Edit</th>
                   <th scope="col">Delete</th>
                </tr>
              </thead>
              <tbody v-for="contact in contacts" :key="contact.id" >
                <tr >
                  <th scope="row">{{ contact.id }}</th>
                  <th scope="row">{{ contact.name }}</th>
                  <th scope="row">{{ contact.email }}</th>
                  <th scope="row">{{ contact.designation }}</th>
                  <th scope="row">{{ contact.contact_no }}</th>
                 <!--  <th scope="row">{{ contact.image }} </th> -->
                  <th scope="row"> 
                   <router-link :to="{ name:'EditContact', params: {id: contact.id} }" class="btn btn-primary btn-sm"  >
                   <i fas fa-pencil-alt>Edit</i>  </router-link>
                  </th>
                  <th scope="row"> 
                    <button class="btn btn-danger btn-sm" @click.prevent="deleteContact(contact.id)">
                      <i far fa-trash-alt>Delete</i></button>
                  </th>
                </tr>
              </tbody>
           </table>
     </div>
</template>

<script>
import axios from 'axios';
export default {
   name:'ContactList',
   data(){
    return{
      contacts:Array
    }
   },
   created(){
        this.getContacts();
   },

   methods: {
    async getContacts() {
        let url = 'http://127.0.0.1:8000/api/contacts';
        await axios.get(url).then(response => {
            this.contacts = response.data.contacts;
            console.log(this.contacts);
        }).catch(error => {
            console.log(error);
        });
    },
    async deleteContact(id){
      //alert(id);
      alert("Delete"); 
      let url = `http://127.0.0.1:8000/api/contacts/${id}/delete`;
      await axios.delete(url).then(response => {
        if(response.data.status == 200){
          alert(response.data.message);
          this.getContacts();
        }
        
      }).catch(error => {
        console.log(error)
      })
    }
   },
   mounted(){
    console.log('Contact List Component Mounted');
   }
}
</script>


