<template>

  <div class="main-content">
		<div class="cta mt-5 py-5 mx-5">
			<div class="text-center px-md-5 mx-md-5 dark-grey-text">
				<h3 class="font-weight-bold mb-4">Call to action</h3>
				<div class="text-div">
					<p class="text text-center">Lorem ipsum dolor sit amet consectetur
						adipisicing elit. Quibusdam vitae, fuga similique quos aperiam
						tenetur quo ut rerum debitis eum nemo exercitationemasperiores
						soluta blanditiis velit, dolores optio cumque facilis! Lorem
						ipsum dolor sit amet consectetur adipisicing elit. </p>
					</div>
					<button @click=(printToConsole()) class="btn btn-dark btn-md btn-rounded">Action</button>
			</div>
				</div>
	</div>

</template>

<script>
export default {
	methods: {
		printToConsole() {
			console.log("You clicked the button!")
		}
	}

}
</script>

<style>
	.cta {
		display: flex;
		align-items: center;
		background-color: white;
		border-radius: 1rem;
		max-width: 600px;
	}

.text-div {
	display: flex;
	justify-content: center;
}

	.text {
		text-align: center;
		width: 70%;
	}

	.main-content {
		display: flex;
		justify-content: center;
	}
</style>