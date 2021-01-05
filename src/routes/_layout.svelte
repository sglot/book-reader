<script>

	import Nav from '../components/Nav.svelte';
	import Icons from '../components/Icons.svelte';

	export let segment;
</script>

<style>
	main {
		position: relative;
		max-width: 56em;
		background-color: white;
		padding: 2em;
		margin: 0 auto;
		box-sizing: border-box;
		min-height: 82vh;
	} 

	footer {
		background: linear-gradient(90deg, #fffcfc, #efeded);
		display: flex;
		justify-content: space-around;
		align-items: center;
		font-size: 1em;
		min-height: 10vh;
	}
</style>
<Icons />
<Nav {segment}/>

<main>
	<slot></slot>
</main>

<footer>
	<div>&copy; Н.П. Глот</div>
	<div>Кострома, Судиславль</div>
</footer>