!<template>

  <div class="dashboard">

    <div class="row">

      <div class="col-1">
        <aside class="">
          <p>user</p>
        </aside>

      </div>
      <div class="col-2">
        <div class="header">
          header
        </div>
      </div>

        <button class="btn-submit">+ Add new user</button>

        <div class="col-2">
          <table class="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Username</th>
                <th>Email</th>
                <th>Address</th>
                <th>Company</th>
                <th>Options</th>
              </tr>
            </thead>
            <tbody>
              <tr
                 v-for="usuario in usuarios" 
                 v-bind:key="usuario.id"
              >
                <td>{{usuario.name}}</td>
                <td>{{usuario.username}}</td>
                <td>{{usuario.email}}</td>
                <td>
                     {{usuario.address.street ? usuario.address.street : 'No tiene'}}                 
                </td>
                <td>{{usuario.company.name}}</td>
                <td>
                  <router-link :to="{ path: '/Users/'+usuario.id+'/todos'}">
                     <p class=""> Options </p>
                  </router-link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
    </div>
  </div>
</template>

<script>

export default {

  data(){
    return {
      usuarios: []
    }
  },
  mounted() {
    this.getUsers();
  },
  methods: {
    async getUsers(){
      this.usuarios = 'Cargando...'
       
      const data = await fetch('https://jsonplaceholder.typicode.com/users')
                                .then( r => r.json())
                                .then( d =>{
                                  this.usuarios = d; 
                                });
      // this.usuarios = data;
      console.log(typeof this.usuarios);
    }
  }
}
</script>

<style>

.dashboard{
  display: flex;
  /* background: #F5F6FA; */
}
.row{
  display: flex;
  flex-wrap: wrap;
  width: 100%;
}
.col{
  flex-direction: column;
}

.col-1{
  width: 245px;
  height: 716px;
  left: -3px;
  top: 0px;
  background: #FFFFFF;
  box-shadow: 4px 0px 4px rgba(43, 45, 55, 0.01);
  /* display: flex; */
  border: 1px solid;
position: absolute;
}
.col-2{
  width: 80%;
  background: yellow;
  display: flex;
  margin: 0px 300px;
}

.header{
  position: absolute;
  width: 835px;
  height: 74px;
  left: 277px;
  top: 0px;

  background: #FFFFFF;
  box-shadow: 0px 4px 4px rgba(43, 45, 55, 0.0105441);
  background: blueviolet;
}

.table {
  /* border: 1px solid red; */
  background-color: #FFFFFF;
  width: 100%;
}

th, td {
   /* width: 25%; */
   height: 75px;
   border: none;
}

tr:hover {
  background-color: #F5F6FA;
  border: 1px solid;
}
.btn-primary{
  position: absolute;
  width: 195px !important;
  height: 48px;
  border-radius: 8px;
  /* height: 16px;
  left: 31.79%;
  right: 24.1%;
  top: calc(50% - 16px/2 - 1px); */

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;

  color: #FFFFFF;
}
</style>