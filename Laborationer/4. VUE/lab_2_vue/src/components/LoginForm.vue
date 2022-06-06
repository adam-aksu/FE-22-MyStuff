<template>
	<div v-if="show" class="main-container">
		<!-- <p id="log-in-cont" hidden class="mt-3 text-danger ">Du är redan inloggad!</p> -->
		<div class="login-container">
				<form @submit.prevent = "logIn">
					<div class="user_pwd">
						<input v-model="user.name" type="text" placeholder="Namn" required>
						<input v-model="user.password" type="password" placeholder="Lösenord" required>
					</div>
				<button class="loginButton" type="submit">Logga in</button>
			</form>
		</div>
	</div>
</template>

<script>
export default {
	props: ["isLoggedIn", "show"],
	data() {
		return {
			user: {
				name: "",
				password: ""
			}
		}
	},

	methods: {
		logIn() {
			console.log(this.isLoggedIn)
			if(this.isLoggedIn) {
				// this.showLocal = false;
				
				console.log(this.user.name)
				return
			}
			this.$emit("logInApp", {...this.user});
			this.user = { name: "", password: "" };
		}
	}
}
</script>

<style>
.user_pwd {
	display: flex;
	box-sizing: border-box;
	padding: 2rem;
}
.loginButton {
	margin-bottom: 2rem;
}
.main-container {
	position: relative;
	display: flex;
	justify-content: space-evenly;
}
	.login-container {
		z-index: -1;
		margin: 0;
		/* position: absolute; */
		border: 1px solid black;
		/* height: 50vh;
		width: 50vh; */
		text-align: center;
		position: fixed;
		top: 50%;
		-ms-transform: translateY(-50%);
		transform: translateY(-50%);
	}
</style>