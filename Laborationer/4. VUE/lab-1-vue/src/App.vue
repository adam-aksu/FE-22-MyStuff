<template>
  <div id="app">
		<NavBar />
		<HeroSection />
		<TheFooter />
	</div>
</template>

<script>
import NavBar from './components/NavBar.vue'
import HeroSection from './components/HeroSection.vue'
import TheFooter from './components/TheFooter.vue'
export default {
	components: { NavBar, HeroSection, TheFooter },
}

</script>
	
<style>
body{
	/* background-color: black; */
	overflow: hidden;
	height: 100vh;
	background: black;
}
</style>