<template>
    <div class="row">
        <div class="col-md-6 offset-md-3">
            <div>
                <div>
                    <h3>A ResetLink has been sent to your Email</h3>
                    <hr />
                </div>
                <div>
                    <form>                            
                        <div>  
                            <router-link :to="{ name:'LoginPage'}" class="btn btn-primary  " > Login here </router-link>
                        </div>  
                        
                    </form>
                    
                </div>
    </div>
        </div>
    </div>
    
</template>
<Script>
 export default {};
</Script>