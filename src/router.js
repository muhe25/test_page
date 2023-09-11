import { createRouter,createWebHistory } from "vue-router";
import LoginPage from './pages/LoginPage.vue'
import SignUp from './pages/SignUp.vue'
import ResetPass from './pages/ResetPass.vue'
import ResetVerify from './pages/ResetVerify.vue'
import Home from './components/Home.vue'
import AddContact from './components/AddContact.vue'
import ContactList from './components/ContactList.vue'
import EditContact from './components/EditContact.vue'

const routes = [
 { path: '/',name:'Home',component:Home },
 { path: '/',name:'LoginPage',component:LoginPage },
 { path: '/login',name:'LoginPage',component:LoginPage },
 { path: '/signup',name:'SignUp',component:SignUp },
 { path: '/reset',name:'ResetPass',component:ResetPass },
 { path: '/verify',name:'ResetVerify',component:ResetVerify },
 { path: '/add-contact',name:'AddContact',component:AddContact },
 { path: '/contact-list',name:'ContactList',component:ContactList },
 { path: '/contact-edit/:id?',name:'EditContact',component:EditContact },
]

const router = createRouter({
    history:createWebHistory(),
    routes,
});

export default router;