<template>
  <div>
    <the-header></the-header>
    <!-- <badge-list></badge-list>
    <user-info
      :full-name="activeUser.name"
      :info-text="activeUser.description"
      :role="activeUser.role"
    ></user-info>
    <course-goals>
      <template #default="slotProps">
        <h2> {{ slotProps.item }}</h2>
        <p>{{ slotProps.anotherProp }}</p>
      </template>
    </course-goals> -->
    <button @click="setSelectedTab('ActiveGoal')">Active Goals</button>
    <button @click="setSelectedTab('ManageGoal')">Manage Goals</button>
    <keep-alive>
    <component :is="selectedTab">
    </component>
  </keep-alive>
    <!-- <ActiveGoal/>
    <ManageGoal/> -->
  </div>
</template>

<script>
import TheHeader from './components/TheHeader.vue';
// import BadgeList from './components/BadgeList.vue';
// import UserInfo from './components/UserInfo.vue';
// import CourseGoals from './components/CourseGoals.vue';
import ActiveGoal from './components/ActiveGoal.vue';
import ManageGoal from './components/ManageGoal.vue';

export default {
  components:{
    'the-header': TheHeader,
    // 'badge-list': BadgeList,
    // 'user-info': UserInfo,
    // 'course-goals': CourseGoals
    ActiveGoal,
    ManageGoal
  },
  data() {
    return {
      selectedTab : '',
      activeUser: {
        name: 'Maximilian Schwarzmüller',
        description: 'Site owner and admin',
        role: 'admin',
      },
    };
  },
  methods :{
    setSelectedTab(cmp){
      this.selectedTab = cmp;
    }
  }
};
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
button {
  display: inline-block;
  padding: 0.5rem 1rem;
  border-radius: 10px;
  background-color: #ccc;
  color: #2e2e2e;
  font-size: 1rem;
}
</style>