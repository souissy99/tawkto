<template>
	<div id="header-wrapper">
		<div id="header-text">
			<h1>Knowledge base doesn't have to be boring</h1>
			<h3>Everything you need to manage your messaging</h3>
		</div>
		<v-container class="search-container" fluid>
			<v-row align="center" justify="center">
			<v-col cols="12" md="6">
				<v-row>
					<v-text-field
						label="Search for answers"
						outlined
						class="search-input"
					></v-text-field>
					<v-btn
						tile
						class="search-button"
						elevation="0"
					>
					<v-icon left>
						fa-search
					</v-icon>
					</v-btn>
				</v-row>
			</v-col>
			</v-row>
		</v-container>
	</div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
	@import '../scss/_variables.scss';

	#header-text{
		text-align: center;
		font-family: $font-family;
		color: $text-black;
		padding: 20px;

		h1{
			font-style: normal;
			font-weight: bold;
			font-size: 34px;
			line-height: 41px;
		}

		h3{
			font-style: normal;
			font-weight: normal;
			font-size: 20px;
			line-height: 24px;
		}
	}

	.search-container {
		padding-top: 20px;
		text-align: center;
	}

	@media (max-width: 600px) {
		.search-container {
			padding: 10px;
		}
	}

	.search-button {
		background-color: #03A84E !important;
		height: 56px !important;
		color: white;
		justify-content: end
	}

	.search-input {
		border-top-right-radius: 0 !important;
		border-bottom-right-radius: 0 !important;
	}
</style>