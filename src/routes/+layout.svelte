<script>
	import Navbar from './Navbar.svelte';
	import Footer from './Footer.svelte';
	import './styles.css';
</script>

<Navbar />
<!-- <Header /> -->

<main>
	<slot />
</main>

<Footer />
