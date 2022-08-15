<template>

  <div class="container">
    <div class="myForm">
      <h2>Log in</h2>
        <div class="error" v-if="err_msg">
            <p>{{err_msg}}</p>
        </div>
      <form v-on:submit.prevent="validate">
        <label>Email</label>
        <input 
          type="email"
          placeholder="example@email.com"
          class="email"
          v-model="user"
        />
        <p class="text_err" v-if="err_email">
          {{err_email}}
        </p>
        <label>Password</label>
        <input 
          type="password"  
          placeholder="* * * * * * " 
          class="email"
          v-model="pass"
        />
        <p class="text_err" v-if="err_pass">
          {{err_pass}}
        </p>
       
        <button class="btn-submit">Log in</button>
      </form>
    </div>
  </div>

</template>

<script>
export default {

  data(){
    return {
      user: '',
      pass: '',
      err_email: '',
      err_pass: '',
      err_msg: ''
    }
  },
  methods:{

    validate(){
      if (!this.user) {
        this.err_email = 'it is necessary to enter the email.';
      }
      if (!this.pass) {
        this.err_pass = 'it is necessary to type the password.';
      }
      if(this.user && this.pass){
        this.err_email = ''
        this.err_pass = ''
        this.handleSubmit()
      }
    },
    handleSubmit(){
      if(this.user === 'a@a.com' && this.pass === '123'){
        const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6InllZmVyc29uIGRldiIsImlhdCI6MTUxNjIzOTAyMn0.z3pM96VaZ8k2khPcjeBpMcSe_Rn4PanPn3o5xSaxKS0";
        localStorage.setItem("token", token )
        this.$router.push('/dashboard')
      }else{
        console.log("err");
        this.err_msg = "User or password incorrect"
      }
    }
  }
}
</script>

<style>

label{
  font-weight: 300;
}

.email{
  height: 30px;
  width: 300px;
  border-radius: 10px;
  padding: 10px;
  border: 1px solid #00000057;
  margin: 3px;
}

.email:hover{
  border: 1px solid  hwb(220 18% 4%);
  box-shadow: 0 0 8px  hwb(220 18% 4%);

}

.myForm{
  height: 300px;
  width: 320px;
  box-shadow: 0 0 15px rgb(51 51 51 / 10%);
  border-radius: 5px;
  padding: 50px;
}

.container{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}

.btn-submit{
  height: 50px;
  width: 100%;
  background-color: hwb(220 18% 4%);
  color: black;
  border: none;
  border-radius: 10px;
  margin: 10px 0px 0px 0px;
}

.btn-submit:hover{
  background-color: #0054FE;
  font-weight: 600;
  color: #fff;
}

.text_err{
  margin: 2px;
  color:rgb(204, 57, 57);
}
.error{
  display: flex;
  align-items: center;
  background-color: rgb(204, 57, 57);
  color: #fff;
  height: 34px;
  width: 100%;
  justify-content: center;
  border-radius: 5px;
  margin-bottom: 14px;
}

</style>