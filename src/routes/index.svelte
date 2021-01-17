<script context="module">
	export function preload() {
		return this.fetch(`books.json`)
			.then((r) => r.json())
			.then((bookList) => {
				return { bookList };
			});
	}
</script>

<script lang="ts">
	import nglot2010 from "../../static/images/2010-08-04__1200.jpg";
	import nglotKostroma from "../../static/images/2010-08-14__1200.jpg";
	import nglotPaseka from "../../static/images/2014-09-23__1200.jpg";
</script>


<svelte:head>
	<title>Николай Глот</title>
</svelte:head>

<div class="content listify books">
	<div class="top">
		<div class="col__first">
			<h1>Николай Петрович Глот</h1>
			
		</div>
		<div class="col__second">
			<h2>Поэзия на русской равнине</h2>
			<h2 class="pl1 top__city">Зады</h2>
			<h2 class="pl2 top__city">Москва</h2>
			<h2 class="pl3 top__city">Ошурки</h2>
			<h2 class="pl4 top__city">Кострома</h2>
			<h2 class="pl5 top__city">Судиславль</h2>
		</div>
		
	</div>


	<div class="about">
		<div class="col__second">
			<figure>
				<img alt="2010 год" src={nglot2010} />
				<figcaption>2010</figcaption>
			</figure>

			<figure>
				<img alt="В Костроме" src={nglotKostroma} />
				<figcaption>в Костроме</figcaption>
			</figure>
		
			<figure>
				<img alt="деревня Зады. На пасеке" src={nglotPaseka} />
				<figcaption>деревня Зады. На пасеке</figcaption>
			</figure>
		</div>

		<div class="col__first">
			<h3>
				Предисловие из сборника
				<a href="/books/reader/Возвращение-к-Sолнцу#Чуткое-сердце">
					«Возвращение к Sолнцу»
				</a>
			</h3>
		
			<p>
				Николай Петрович Глот родился в деревне Ошурки бывшего Залужского
				сельсовета, то есть корни его сельские. И хотя он намеревался покинуть
				край родной, уезжал, даже пожил в Москве, но не мог окончательно порвать
				с отчей землёй, вернулся и теперь вдохновенно всматривается в дорогие
				ему лица земляков.
			</p>
		
			<p>
				Пусть читателя не смущает, не озадачивает эта необычная для наших мест
				фамилия Глот, которой, по его признанию, более 2 тысяч лет и ранее она
				звучала чуть иначе – Голота, принадлежала княжескому роду. Фамилия
				вообще не имеет никакого значения. Николай человек русский – не по крови
				сужу, не по генетической родословной – излюбленный приём нацистов – а по
				характеру, по душе, по взглядам на наши национальные и исторические
				культурные ценности.
			</p>
		
			<p>
				Не раз и не два я общался с Николаем за чашкой чая, вел беседу и о том,
				и о сём. Что же я уяснил для себя, насколько точно определил склонности
				и меру одарённости его натуры? Что им движет, в какие пределы он
				стремится?
			</p>
			<p>
				На первый раз и не поймёшь, словно засекречен человек, не раскрывается,
				сохраняет потаённое, сторожко защищаемое от посягательств чувство. Но
				это не так. Он сохраняет отчуждённость к собеседнику поверхностному,
				поглощённому самим собой, с равнодушием, свысока взирающему – такому
				собеседнику словно бы обязаны внимать да поддакивать. Но если Николай
				своим чутким сердцем угадывает, видит, что перед ним человек
				неординарный – добрый, внимательный, способный сочувствовать и
				сопереживать - в такой обстановке он словно оттаивает, открывается
				нараспашку и сразу становится понятна трогательность его по-детски
				незащищённого сердца.
			</p>
			<p>
				Такой человек лучше виден в общении с природой, где зорко и восхищённо
				созерцая которую, откликается, работает, разворачивается его душа.
				Вероятно, в связи с этим не случайно увлечение Николая пчёлами, явивших
				собою как бы квинтэссенцию нашей мудрой природы, её разума.
			</p>
			<p>
				И если всё это так, то вполне объяснима своеобразная поэзия Николая
				Глота, её философская замысловатость, склонность к обобщениям,
				логическим поворотам и неожиданным выводам.
			</p>
			<p>
				Пожелаем Николаю и дальше успешно идти своей тропинкой в направлении не
				заимствованных, самим собой определённых, соответствующих собственному
				разумению, ориентиров.
			</p>
		</div>

		
	</div>
	

	

	<section>
		<div
			class="box svelte-1377vhn"
			style="background: #ffebeb; grid-area: one / one / one / one;"
		>
		<a href="/book/reader/Возвращение-к-Sолнцу"
			><h2>Возвращение к Sолнцу</h2>
			<p>
				Первый сборник изданный в 2012 году. Самый маленький из всех.
			</p>
			<span class="learn-more">читать</span></a
		>
	</div>

	</section>
	
</div>

<style>
	p {
		text-indent: var(--bigtext);
	}

	h1 {
		font-size: var(--bigtext);
		border-top: solid #3333331c;
	}

	h2 {
		font-size: 1.3em;
	}

	.top {
		margin-top: 4em;
		margin-bottom: 4em;
		display: flex;
		flex-direction: row;
		--bigtext: 2em;
		/* flex-flow: row-reverse; */
	}

	.about {
		display: flex;
		flex-direction: row;
		--opacity: 0.5;
		--trin: 0.2s;
		--trout: 0.5s;
		--brad: 0.4em;
		
	}

	.col__first {
		max-width: 60%;
		padding: 0 2em;
		opacity: 1;
		transition: opacity var(--trout) ease-in-out;
	}

	.col__second {
		padding: 0 2em;
	}

	.top__city {
		font-size: 1.3em;
	}
	@media (max-width: 1080px) { 
		.col__second {
			max-width: 100%;
			padding: 0;
		}
	}

	@media (max-width: 820px) { 
		.about {
			flex-direction: column;
			flex-flow: column-reverse;
		}

		.col__first, .col__second {
			max-width: 100%;
			padding: 0;
		}

		h1 {
			font-size: 1.5em;
			padding: 0 0 1.5em 0;
		}

		.top__city {
			font-size: 1.2em;
		}
	}

	@media (max-width: 320px) { 
		h3 {
			font-size: 1.3em;
		}

		.top {
			margin-top: 3em;
			margin-bottom: 3em;
			flex-direction: column;
		}

		img {
			width: 100%;
			/* max-width: 200px; */
			margin: 0 0 1em 0;
		}

		figcaption {
			top: 70%;
		}
	}

	@media (max-width: 640px) {
		img {
			width: 100%;
			max-width: 600px;
			margin: 0 0 1em 0;
		}
	}
	

	figure {
		margin: 0 0 3em 0;
		text-align: center;
		position: relative;
	}

	

	figcaption {
		position: absolute;
		top: 80%;
		left: 0;
		color: var(--text);
		background: hsla(0, 0%, 100%, 0.84);
		line-height: 1.5em;
		height: 1.5em;
		padding: 0 1em;
		border-radius: 0 var(--brad) var(--brad) 0;
	}

	img {
		width: 100%;
		max-width: 800px;
		/* margin: 0 0 1em 0; */
		opacity: var(--opacity);
		border-radius: var(--brad);
		transition: opacity var(--trout) ease-in-out;
	}

	img:hover {
		opacity: 1;
		transition: opacity var(--trin) ease-in-out;
	}

	:global(.col__second):hover ~ :global(.col__first) {
		opacity: var(--opacity);
		transition: opacity var(--trin) ease-in-out;
	}

	.content {
		width: 100%;
		margin: 0;
		padding: var(--top-offset) var(--side-nav);
		tab-size: 2;
		-moz-tab-size: 2;
	}

	.content :global(h3) {
		margin: 2em 0 1em 0;
	}

	/* .content h2 {
		margin-top: 8rem;
		padding: 2rem 1.6rem 4rem 0.2rem;
		border-top: var(--border-w) solid #6767785b; 
		color: var(--text);
		line-height: 1;
		font-size: var(--h3);
		letter-spacing: .05em;
		text-transform: uppercase;
	} */

	.books {
		grid-template-columns: 1fr 1fr;
		grid-gap: 1em;
		min-height: calc(100vh - var(--nav-h));
		padding: var(--top-offset) var(--side-nav) 6rem var(--side-nav);
		/* max-width: var(--main-width); */
		margin: 0 auto;
	}

	.pl1 {
		color: #7f7596;
	}

	.pl2 {
		color: #7f7596;
	}

	.pl3 {
		color: #7f7596;
	}

	.pl4 {
		color: #7f7596;
	}

	.pl5 {
		color: #7f7596;
	}

	
</style>
