<template>

  <router-link to="/dashboard">
    <p class="btn-back"> Back</p>
  </router-link>

  <div class="row">

    <div class="card"
      v-for="usuario in todo" 
      v-bind:key="usuario.id"
    >
        <h4>{{usuario.title}}</h4>
        <p class='completed'>
          {{usuario.completed ? 'Completed' : 'Unfinished'}}
      </p>
            
    </div>
  </div>

</template>

<script>
export default {
  data(){
    return {
      todo: []
    }
  },
  mounted() {
    this.getUsers();
  },
  methods: {
    async getUsers(){

      const id = this.$route.params.id;
      this.usuarios = 'Cargando...'
       
      const data = await fetch(`https://jsonplaceholder.typicode.com/todos?userId=${id}`)
                                .then( r => r.json())
                                .then( d =>{
                                  this.todo = d; 
                                });
      console.log(typeof this.todo);
    }
  }
}
</script>

<style scoped>

  .card{
    background-color: #fff;
    color: rgb(34, 32, 32);
    box-shadow: 1px 1px 15px rgb(45, 48, 45);
    width: 200px;
    height: 150px;
    border-radius: 10px;
    padding: 20px;
    margin: 10px;
  }

  .card:hover {
    background-color: rgba(255, 230, 0, 0.7) ;
    backdrop-filter: blur(10px);
    box-shadow: 10px 10px 10px rgba(177, 167, 167, 0.9);
  }

  .completed{
    color: rgb(34, 32, 32);
    font-weight: 700;
    font-size: 15px;
    height: 35px;
    border-radius: 10px;
    box-shadow: 1px 1px 15px rgb(110, 104, 101);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .btn-back{
    width: 20%;
    background-color: cadetblue;
    height: 40px;
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .btn-back a{
    color: black;
  }

</style>