<script>
	import projectData from '../data/projectData';
</script>

<section>
	<div class="conatiner">
		<h1>Our Work</h1>
		<div class="grid-col-2" />
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
					<button>View Project</button>
				</div>
			</div>
		{/each}
	</div>
</section>

<style>
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
