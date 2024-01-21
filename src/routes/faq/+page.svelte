<script>
	import faqData from '../data/faqData';
</script>

<section>
	<div class="conatiner">
		<h1>FAQs</h1>
		<div class="grid-col-2" />
		{#each faqData as faqs}
			<div class="grid-col-2">
				<div>
					<h2>{faqs.question}</h2>
					<p>{faqs.answer}</p>
				</div>
			</div>
		{/each}
	</div>
</section>
