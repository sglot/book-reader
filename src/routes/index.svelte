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
	import nglot2010 from "../../static/images/2010-08-04__820.jpg";
	import nglot2010Webp from "../../static/images/2010-08-04__820.webp";
	import nglotKostroma from "../../static/images/2010-08-14__820.jpg";
	import nglotKostromaWebp from "../../static/images/2010-08-14__820.webp";
	import nglotPaseka from "../../static/images/2014-09-23__820.jpg";
	import nglotPasekaWebp from "../../static/images/2014-09-23__820.webp";
</script>

<svelte:head>
	<title>Николай Глот</title>
	<meta 
		name="keywords" 
		content="Николай Глот стихи поэзия автор Судиславль Кострома Зады Москва Ошурки 
				возвращение к солнцу фото Травкин статья">
	<meta 
		name="description" 
		content="Николай Глот автор сборников стихотворений «Возвращение к Sолнцу», «Поклонение Роду». 
				Родом из деревни Ошурки.
				Издавался в Судиславле, Костроме, Москве">

</svelte:head>

<div class="content listify books">
	<div class="top">
		<div class="col__first">
			<h1>Николай Петрович Глот</h1>
		</div>
		<div class="col__second" >
			<div >
				<h2 class="poesy top__city">Поэзия на русской равнине</h2>
				<h2 class="pl1 top__city">Зады</h2>
				<h2 class="pl2 top__city">Москва</h2>
				<h2 class="pl3 top__city">Ошурки</h2>
				<h2 class="pl4 top__city">Кострома</h2>
				<h2 class="pl5 top__city">Судиславль</h2>
			</div>
			<div class="phrase">
				<h2 class="phrase1 top__city">«Глаголом жги</h2>
				<h2 class="phrase2  top__city" style="margin-left:2em;">сердца людей»</h2>
			</div>
			
		</div>
	</div>

	<div class="about">
		<div class="col__second">
			<figure>
				<picture>
					<source type="image/jpg" srcset="{nglot2010Webp}"/>
					<img alt="2010 год" src={nglot2010} />
				</picture>
				<figcaption>2010</figcaption>
			</figure>

			<figure>
				<picture>
					<source type="image/webp" srcset="{nglotKostromaWebp}">
					<img alt="В Костроме" src={nglotKostroma} />
				</picture>
				<figcaption>в Костроме</figcaption>
			</figure>

			<figure>
				<picture>
					<source type="image/webp" srcset="{nglotPasekaWebp}">
					<img alt="деревня Зады. На пасеке" src={nglotPaseka} />
				</picture>
				<figcaption>деревня Зады. На пасеке</figcaption>
			</figure>
		</div>

		<div class="col__first">
			<h3>
				Предисловие из сборника
				<a href="/books/reader/Возвращение-к-Sолнцу#Чуткое-сердце"
					style="text-decoration: underline;">
					«Возвращение к Sолнцу»
				</a>
			</h3>

			<p>
				Николай Петрович Глот родился в деревне Ошурки бывшего
				Залужского сельсовета, то есть корни его сельские. И хотя он
				намеревался покинуть край родной, уезжал, даже пожил в Москве,
				но не мог окончательно порвать с отчей землёй, вернулся и теперь
				вдохновенно всматривается в дорогие ему лица земляков.
			</p>

			<p>
				Пусть читателя не смущает, не озадачивает эта необычная для
				наших мест фамилия Глот, которой, по его признанию, более 2
				тысяч лет и ранее она звучала чуть иначе – Голота, принадлежала
				княжескому роду. Фамилия вообще не имеет никакого значения.
				Николай человек русский – не по крови сужу, не по генетической
				родословной – излюбленный приём нацистов – а по характеру, по
				душе, по взглядам на наши национальные и исторические культурные
				ценности.
			</p>

			<p>
				Не раз и не два я общался с Николаем за чашкой чая, вел беседу и
				о том, и о сём. Что же я уяснил для себя, насколько точно
				определил склонности и меру одарённости его натуры? Что им
				движет, в какие пределы он стремится?
			</p>
			<p>
				На первый раз и не поймёшь, словно засекречен человек, не
				раскрывается, сохраняет потаённое, сторожко защищаемое от
				посягательств чувство. Но это не так. Он сохраняет отчуждённость
				к собеседнику поверхностному, поглощённому самим собой, с
				равнодушием, свысока взирающему – такому собеседнику словно бы
				обязаны внимать да поддакивать. Но если Николай своим чутким
				сердцем угадывает, видит, что перед ним человек неординарный –
				добрый, внимательный, способный сочувствовать и сопереживать - в
				такой обстановке он словно оттаивает, открывается нараспашку и
				сразу становится понятна трогательность его по-детски
				незащищённого сердца.
			</p>
			<p>
				Такой человек лучше виден в общении с природой, где зорко и
				восхищённо созерцая которую, откликается, работает,
				разворачивается его душа. Вероятно, в связи с этим не случайно
				увлечение Николая пчёлами, явивших собою как бы квинтэссенцию
				нашей мудрой природы, её разума.
			</p>
			<p>
				И если всё это так, то вполне объяснима своеобразная поэзия
				Николая Глота, её философская замысловатость, склонность к
				обобщениям, логическим поворотам и неожиданным выводам.
			</p>
			<p>
				Пожелаем Николаю и дальше успешно идти своей тропинкой в
				направлении не заимствованных, самим собой определённых,
				соответствующих собственному разумению, ориентиров.
			</p>

			<p class="signature">Василий Травкин, <br> член Союза писателей РФ</p>
		</div>
	</div>

	<section class="blurb" style="margin: 3em 0;">
		<div class="box" 
		style="
			background: var(--prime); 
			grid-area: one; 
		">
			<a rel="prefetch" href="books/reader/Возвращение-к-Sолнцу"
				><h2>Возвращение к Sолнцу</h2>
				<p>
					Первый сборник изданный в 2012 году. Самый маленький из
					всех.
				</p>
				<span class="learn-more">читать</span>
			</a
			>
		</div>

		<div class="box" style="background: var(--flash); grid-area: two;">
			<a rel="prefetch" href="books/reader/Возвращение-к-Sолнцу"
				><h2>Отладочный сборник</h2>
				<p>
					Отладочный c
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
		border-top: solid var(--home-border);
		color: var(--text);
	}

	h2 {
		font-size: 1.3em;
	}

	.top {
		margin-top: 4em;
		margin-bottom: 4em;
		display: flex;
		flex-direction: row;
	}

	.top .col__first {
		margin-right: 1em;
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

	.top .col__second {
		display: flex;
	}

	.top__city {
		font-size: 1.3em;
		overflow: hidden;
		border-right: 0.15em solid transparent; 
		white-space: nowrap;
		width: 0;
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
		box-shadow: 0px 0px 2px 1px #fff, 0px 0px 20px 3px #b9b1b1a3;
		border-radius: var(--brad);
		transition: all var(--trout) ease-in-out;
	}

	img:hover {
		-webkit-filter: grayscale(0) saturate(1.5);
		-moz-filter: grayscale(0) saturate(1.5);
		-ms-filter: grayscale(0) saturate(1.5);
		-o-filter: grayscale(0) saturate(1.5);
		filter: grayscale(0) saturate(1.5);

		transition: all var(--trin) ease-in-out;
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

		--bigtext: 2em;
		--gray: grayscale(100%) saturate(1);
		--saturate: saturate(1.5);

		grid-template-columns: 1fr 1fr;
		grid-gap: 1em;
		min-height: calc(100vh - var(--nav-h));
		padding: var(--top-offset) var(--side-nav) 6rem var(--side-nav);
		margin: 0 auto;
	}

	.content :global(h3) {
		margin: 2em 0 1em 0;
	}

	.signature {
		text-align: right;
		margin-bottom: 2em auto;
		font-style: italic;
		width: var(--secwidth);
	}
	
	.poesy {
		color: #726a86;
		animation: typing 2s steps(30, end), blink-caret 0.5s step-end 4;
		animation-fill-mode: both;
		animation-delay: 0.2s;
	}

	.pl1 {
		color: #7f7596;
		animation: typing 2.5s steps(30, end), blink-caret 0.3s step-end 2;
		animation-fill-mode: both;
		animation-delay: 2.5s;
	}

	.pl2 {
		color: #7f7596ea;
		animation: typing 3s steps(30, end), blink-caret 0.5s step-end 2;
		animation-fill-mode: both;
		animation-delay: 3s;
	}

	.pl3 {
		color: #7f7596cb;
		animation: typing 3s steps(30, end), blink-caret 0.5s step-end 2;
		animation-fill-mode: both;
		animation-delay: 4.2s;
	}

	.pl4 {
		color: #7f75969a;
		animation: typing 3s steps(30, end), blink-caret 0.5s step-end 2;
		animation-fill-mode: both;
		animation-delay: 5.5s;
	}

	.pl5 {
		color: #7f75967c;
		animation: typing 3s steps(30, end), blink-caret 0.5s step-end 2;
		animation-fill-mode: both;
		animation-delay: 6.5s;
	}

	.phrase {
		align-self: center;
	}

	.phrase1 {
		color: #7f75967c;
		animation: typing 3s steps(30, end), blink-caret 0.5s step-end 5;
		animation-fill-mode: both;
		animation-delay: 8s;
	}

	.phrase2 {
		color: #7f75967c;
		animation: typing 3s steps(30, end), blink-caret 0.5s step-end 5;
		animation-fill-mode: both;
		animation-delay: 10.5s;
		margin-left: 2em;
	}

	/* The typing effect */
	@keyframes typing {
		from { width: 0; }
		to { width: 100%; }
	}

	/* The cursor effect */
	@keyframes blink-caret {
		from,
		to { border-color: transparent; }
		50% { border-color: var(--home-border) }
	}

	.blurb {
		display: grid;
		grid-row-gap: 1em;
		grid-template-areas:
			"one"
			"two";
	}
	.box {
		padding: 1em;
		display: flex;
		flex-direction: column;
		border-bottom: none;
	}
	.box :global(a) {
		color: white;
		padding: 0;
		border: none;
		/* background-color: rgba(0, 0, 0, 0.5);
		box-shadow: -10px 0 0 rgba(0, 0, 0, 0.5), 10px 0 0 rgba(0, 0, 0, 0.5); */
		/* background: linear-gradient(135deg, rgb(37, 219, 237) 0%,rgb(9, 1, 11) 100%); */
		background: linear-gradient(135deg, rgb(237, 234, 37) 0%,rgb(9, 1, 11) 100%);
		mix-blend-mode: lighten;
		padding: 3em;
	}

	.box :global(h2) {
		padding: 0;
		margin: 0 0 0.5em 0;
		font-size: var(--h2);
		color: white;
		text-align: left;
	}
	.blurb :global(p) {
		text-indent: unset;
		font-size: var(--h5);
	}
	.box :global(.learn-more) {
		display: block;
		position: relative;
		text-align: right;
		margin-top: auto;
		padding: 0 1.2em 0 0;
	}
	.box:hover :global(.learn-more) {
		color: white;
		text-decoration: underline;
	}
	.box :global(.learn-more)::after, .box :global(.cta) :global(a)::after {
		content: '';
		position: absolute;
		display: block;
		right: 0;
		top: 0.3em;
		width: 1em;
		height: 1em;
		background: url(/icons/arrow-right.svg);
		background-size: 100% 100%;
	}

	@media (min-width: 900px) {
		.blurb {
			grid-column-gap: 1em;
			grid-row-gap: 1em;
			grid-template-columns: repeat(2, 1fr);
			grid-template-areas:
				"one two";
		}
		.box {
			padding: 2em;
		}
		.box :global(.cta) {
			text-align: right;
		}
	}

	@media (min-width: 1200px) {
		.blurb{
			grid-column-gap: 5em;
			grid-row-gap: 5em;
			grid-template-columns: repeat(2, 1fr);
			grid-template-areas:
				"one two";
		}

		.box :global(.cta) {
			text-align: left;
		}
	}

	@media (max-width: 1080px) {
		.col__second {
			max-width: 100%;
			padding: 0;
			flex-flow: column;
		}
	}

	@media (max-width: 820px) {
		.about {
			flex-direction: column;
			flex-flow: column-reverse;
		}

		.about .col__first {
			margin-bottom: 5em;
		}

		.col__first,
		.col__second {
			max-width: 100%;
			padding: 0;
		}

		.phrase {
			display: none;
		}

		h1 {
			font-size: 1.5em;
			padding: 0 0 1.5em 0;
		}

		.top__city {
			font-size: 1.2em;

		}
	}

	@media (max-width: 640px) {
		img {
			width: 100%;
			max-width: 600px;
			margin: 0 0 1em 0;
		}
	}
	
	@media (max-width: 480px) {
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

		figure {
			margin: 0 0 1em 0;
		}

		figure figcaption {
			top: 70%;
			font-size: 0.8em
		}

		.box a h2 {
			font-size: 1.5em;
		}
	}
</style>
