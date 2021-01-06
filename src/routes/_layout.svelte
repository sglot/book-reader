<script>
	import { stores } from '@sapper/app';
	import Nav from '../components/Nav.svelte';
	import NavItem from '../components/NavItem.svelte';
	import Icons from '../components/Icons.svelte';
	import Icon from '../components/Icon.svelte';

	export let segment;
	const { page } = stores();
</script>

<style>
	/* main {
		position: relative;
		max-width: 56em;
		background-color: white;
		padding: 2em;
		padding-top: calc(var(--nav-h));
		margin: 0 auto;
		box-sizing: border-box;
		min-height: 82vh;
	}  */

	footer {
		/* background: linear-gradient(90deg, rgb(255, 252, 252), rgb(222 204 204 / 95%), rgb(255 241 241 / 95%)); */
		display: flex;
		justify-content: space-around;
		align-items: center;
		font-size: 0.8em;
		min-height: 10vh;
		border-top: 1px solid #bdbdbd;
		padding: 1em 0;
	}

	.footer-col {
		display: flex;
		flex-flow: column;
		padding: 1em;
	}
</style>

<Icons />

<!-- <Nav {segment}/> -->

<Nav {segment} {page} logo="sapper-logo-horizontal.svg">
	<NavItem segment="books">Книги</NavItem>
	<NavItem segment="about">Об авторе</NavItem>
</Nav>

<main>
	<slot></slot>
</main>

<footer id="footer-main">
	<div class="footer-col">
		<div>&copy; Н.П. Глот</div>
	</div>
	<div class="footer-col">
		<div>Возвращение к Sолнцу</div>
		<div>Отладочный сборник</div>
	</div>
	<div class="footer-col">
		<div>
			Кострома
		</div>
		<div>
			Судиславль
		</div>
	</div>
	
	
</footer>