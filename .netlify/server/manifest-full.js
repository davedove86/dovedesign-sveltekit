export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["android-chrome-192x192.png","android-chrome-256x256.png","apple-touch-icon.png","browserconfig.xml","favicon-16x16.png","favicon-32x32.png","favicon.ico","favicon.png","images/cpm-logo.png","images/cta-banner.jpg","images/design.svg","images/email.svg","images/flowga-portfolio.png","images/footer-logo.svg","images/home-hero.png","images/hosting.svg","images/linkedin-footer.svg","images/linkedin.svg","images/medal.svg","images/nav/logo-only.svg","images/pcc-logo.png","images/phone.svg","images/responsive.svg","images/section-image.webp","images/star.svg","images/tick.svg","images/work/cpm-portfolio.png","images/work/flowga-portfolio.png","images/work/jandb-portfolio.png","images/work/pcc-portfolio.png","images/work/vcas-portfolio.png","mstile-150x150.png","safari-pinned-tab.svg","site.webmanifest"]),
	mimeTypes: {".png":"image/png",".xml":"application/xml",".jpg":"image/jpeg",".svg":"image/svg+xml",".webp":"image/webp",".webmanifest":"application/manifest+json"},
	_: {
		client: {"start":"_app/immutable/entry/start.2281c434.js","app":"_app/immutable/entry/app.dcd261f1.js","imports":["_app/immutable/entry/start.2281c434.js","_app/immutable/chunks/scheduler.63274e7e.js","_app/immutable/chunks/singletons.a2b8b251.js","_app/immutable/entry/app.dcd261f1.js","_app/immutable/chunks/scheduler.63274e7e.js","_app/immutable/chunks/index.a2cc6748.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js')),
			__memo(() => import('./nodes/6.js')),
			__memo(() => import('./nodes/7.js')),
			__memo(() => import('./nodes/8.js')),
			__memo(() => import('./nodes/9.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/contact",
				pattern: /^\/contact\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/faq",
				pattern: /^\/faq\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/work",
				pattern: /^\/work\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/work/community-peer-mentors",
				pattern: /^\/work\/community-peer-mentors\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/work/durham-pcc",
				pattern: /^\/work\/durham-pcc\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/work/jet-and-ben",
				pattern: /^\/work\/jet-and-ben\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/work/victim-care-and-advice-service",
				pattern: /^\/work\/victim-care-and-advice-service\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 9 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
