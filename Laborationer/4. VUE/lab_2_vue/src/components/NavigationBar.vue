<template>
<nav class="navigation-bar">
	<i class="logo fa-solid fa-bug"></i>
	<div v-if="!isLoggedIn" class="login-text">
		<h4>Vänligen logga in</h4>
	</div>
	<div v-else class="login-text">
		<h4> Inloggad som: {{ user.name }} </h4>
	<button @click="logOut" type="button" class="logoutButton">Logga ut</button>
	</div>

</nav>
</template>

<script>
export default {
	props: ["isLoggedIn", "user", "show"],
	methods: {
    logOut() {
      this.$emit("logOutApp");
    }
	}
}
</script>

<style>
	.navigation-bar {
		position: relative;
		display: flex;
		background-color: rgb(245, 230, 211);
		padding: 1em 0 0.7em 0;
		border: 3px groove rgb(245, 230, 211);
	}

	.logoutButton {
		position: absolute;
		margin-right: 3rem;
		background-color: rgb(233, 122, 122);
		right: 0;
	}
	
	.login-text {
		display: flex;
		margin-left: auto;
		margin-right: auto;
	}

	.logo {
		position: absolute;
		margin-left: 2rem;
		font-size: 150%;
	}
</style>