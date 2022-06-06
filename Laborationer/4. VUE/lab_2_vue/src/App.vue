<template>
	<div>
		<NavigationBar  :isLoggedIn="isLoggedIn" :user="user" @logOutApp="logOut"/>
		<LoginForm  :isLoggedIn="isLoggedIn" :show="show" @logInApp="logIn"/>
	</div>
</template>

<script>
import LoginForm from './components/LoginForm.vue'
import NavigationBar from './components/NavigationBar.vue'

export default {
  name: 'App',
  components: {
    NavigationBar,
    LoginForm
    
  },
	data() {
		return {
		show: true,
		isLoggedIn: false,
		user: {}
		};
	},
	methods: {
		logIn(user) {
			this.user = user;
			this.isLoggedIn = true;
			this.show = false;
			// console.log('inne i app-logIn')
			// console.log(this.user.name)
		},
		logOut() {
			this.user = {};
			this.isLoggedIn = false;		
			this.show = true;
	
		}
	}
}

</script>

<style>

</style>
