<template>
    <div>
        <user-data @update-data="updateData"></user-data>
        <active-user :person="person"></active-user>
    </div>
</template>

<script>
export default {
    data(){
        return {
            person : {
              username : '',
              age : ''
            }
        }
    },
    methods : {
      updateData(inputPerson){
        this.person = inputPerson ;
      }
    }
}
</script>



<style>
@import url("https://fonts.googleapis.com/css2?family=Jost&display=swap");
* {
  box-sizing: border-box;
}

html {
  font-family: "Jost", sans-serif;
}

body {
  margin: 0;
}
#app ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

#app li, #app form {
  box-shadow: 0 2px 8px rgba(8, 4, 4, 0.26);
  margin: 1rem auto;
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}

#app button {
  font: inherit;
  cursor: pointer;
  border: 1px solid black;
  background-color: green;
  color: white;
  padding: 0.05rem 1rem;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.26);
}

#app input {
  font: inherit;
  padding: 0.15rem;
}
#app label {
  font-weight: bold;
  margin-right: 1rem;
  width: 7rem;
  display: inline-block;
}
#app form div {
  margin: 1rem 0;
}

</style>