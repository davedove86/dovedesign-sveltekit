<script>
	import projectData from '../data/projectData';
</script>

<h1>Our Work</h1>

{#each projectData as projects}
	<h2>{projects.name}</h2>
	<p>{projects.kicker}</p>
	<p>{projects.tags}</p>
	<p>{projects.overview}</p>
{/each}
