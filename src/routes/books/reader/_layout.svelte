<script>
	import Nav from "../../../components/Nav.svelte";

	// export let segment;
</script>

<style>
	.control__mobile {
		height: 2em;
		border-top: #233333;
		flex: 0 0 auto;
	}
 
</style>

	<slot />

<div class="control__mobile">
	<div>Назад</div>
	<div>Вперёд</div>
	<div>В избранное</div>
</div>


