<section>
	<div class="container">
		<div class="section-kicker">Contact Us</div>
		<h2>How can we help?</h2>
		<p>We're here to answer any questions you may have. Contact us today!</p>
		<div class="grid-col-2">
			<form
				name="netlify-form-example"
				method="POST"
				netlify-honeypot="bot-field"
				data-netlify="true"
			>
				<input type="hidden" name="form-name" value="netlify-form-example" />
				<label for="name">Name</label>
				<input name="name" id="name" required placeholder="Name" type="text" />
				<label for="email">Email</label>
				<input name="email" id="email" required placeholder="Email" type="email" />
				<label for="message">Message</label>
				<input name="message" id="message" required placeholder="Message" type="text" />
				<input type="submit" value="Submit" />
			</form>

			<div class="grid-col-2 contact-grid">
				<div class="contact-grid-item">
					<img class="contact-icon" src="/images/email.svg" alt="envelope" />
					<div class="contact-sub-text">Email</div>
					<a href="mailto:info@dovedesign.io" class="link">info@dovedesign.io</a>
				</div>
				<div class="contact-grid-item">
					<img class="contact-icon" src="/images/phone.svg" alt="phone" />
					<div class="contact-sub-text">Phone</div>
					<a href="tel:07540599633" class="link">07540599633</a>
				</div>
				<div class="contact-grid-item">
					<img class="contact-icon" src="/images/linkedin.svg" alt="LinkedIn" />
					<div class="contact-sub-text">LinkedIn</div>
					<a href="https://www.linkedin.com/company/dovedesignweb/" target="_blank" class="link"
						>@dovedesignweb</a
					>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	section {
		background-color: var(--black-blue);
		color: var(--white);
	}

	form {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		margin-top: 3rem;
	}

	form div {
		display: flex;
		flex-direction: column;
	}

	form label {
		margin-bottom: 0.5rem;
	}

	form input,
	textarea {
		background-color: var(--black-blue);
		color: var(--black-blue);
		border: 1px var(--light-grey) solid;
		border-radius: 5px;
		padding: 1rem 2rem 1rem 0.5rem;
		font-size: 1rem;
		color: var(--white);
	}

	form input::placeholder,
	textarea::placeholder {
		color: var(--light-grey);
	}

	form button {
		font-size: 1rem;
		font-weight: 800;
	}

	.contact-grid {
		align-content: start;
	}

	.contact-grid-item {
		margin-bottom: 3rem;
	}

	.contact-icon {
		width: 32px;
		height: 32px;
	}

	.contact-sub-text {
		font-size: 1.125rem;
		font-weight: 700;
		margin: 1rem 0;
	}

	.link {
		color: var(--white);
	}
</style>
