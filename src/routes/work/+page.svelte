<script>
	import projectData from '../data/projectData';
	import Testimonials from '../Testimonials.svelte';
</script>

<section>
	<div class="container">
		<h1>Our Work</h1>
		<div class="work-wrapper" />
		{#each projectData as projects}
			<div class="grid-col-2">
				<div>
					<img class="portfolio-image" src={projects.image} alt="{projects.name} website" />
				</div>
				<div>
					<h2>{projects.name}</h2>
					<div class="tags-wrapper">
						{#each projects.tags as tag}
							<div class="tags">
								<p>{tag}</p>
							</div>
						{/each}
					</div>
					<p>{projects.kicker}</p>
					<a href={projects.link} rel="noopener noreferrer">
						<button>View Project</button>
					</a>
				</div>
			</div>
		{/each}
	</div>
</section>

<Testimonials />

<style>
	.work-wrapper {
		margin: 2rem 0;
	}

	.grid-col-2 {
		margin: 3rem 0;
		padding-bottom: 3rem;
		border-bottom: 0.5px solid var(--black-blue);
	}

	.portfolio-image {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.tags-wrapper {
		display: flex;
		flex-direction: row;
		margin: 1rem 0;
	}
	.tags {
		color: var(--accent-blue);
		background-color: var(--grey);
		padding: 4px 8px;
		margin-right: 0.5rem;
		font-weight: 800;
		border-radius: 4px;
	}

	button {
		margin: 2rem 0;
	}
</style>
