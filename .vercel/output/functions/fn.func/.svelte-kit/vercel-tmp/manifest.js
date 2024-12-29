export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".DS_Store","android-chrome-192x192.png","android-chrome-256x256.png","apple-touch-icon.png","browserconfig.xml","favicon-16x16.png","favicon-32x32.png","favicon.ico","favicon.png","fonts/.DS_Store","fonts/CommitMono-400-Italic.woff2","fonts/CommitMono-400-Regular.woff2","fonts/CommitMono-700-Italic.woff2","fonts/CommitMono-700-Regular.woff2","mstile-150x150.png","safari-pinned-tab.svg","site.webmanifest"]),
	mimeTypes: {".png":"image/png",".xml":"text/xml",".woff2":"font/woff2",".svg":"image/svg+xml",".webmanifest":"application/manifest+json"},
	_: {
		client: {"start":"_app/immutable/entry/start.D_AXrCXW.js","app":"_app/immutable/entry/app.kAlSPV3q.js","imports":["_app/immutable/entry/start.D_AXrCXW.js","_app/immutable/chunks/entry.ccgflyxX.js","_app/immutable/chunks/runtime.CNqDqZH_.js","_app/immutable/chunks/utils.Bb3n8h1z.js","_app/immutable/chunks/control.CYgJF_JY.js","_app/immutable/chunks/index-client.Dqq7yuzS.js","_app/immutable/entry/app.kAlSPV3q.js","_app/immutable/chunks/i18n.o2NqX68e.js","_app/immutable/chunks/legacy.5YMitVpx.js","_app/immutable/chunks/runtime.CNqDqZH_.js","_app/immutable/chunks/entry.ccgflyxX.js","_app/immutable/chunks/utils.Bb3n8h1z.js","_app/immutable/chunks/control.CYgJF_JY.js","_app/immutable/chunks/index-client.Dqq7yuzS.js","_app/immutable/chunks/render.C5h9Bc4F.js","_app/immutable/chunks/svelte-head.Byx9516y.js","_app/immutable/chunks/if.BVymDcXa.js","_app/immutable/chunks/props.DWyCrFmv.js","_app/immutable/chunks/store.CgpizAPX.js","_app/immutable/chunks/this.C9n1s47c.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('../output/server/nodes/0.js')),
			__memo(() => import('../output/server/nodes/1.js')),
			__memo(() => import('../output/server/nodes/2.js')),
			__memo(() => import('../output/server/nodes/3.js')),
			__memo(() => import('../output/server/nodes/4.js')),
			__memo(() => import('../output/server/nodes/5.js')),
			__memo(() => import('../output/server/nodes/6.js')),
			__memo(() => import('../output/server/nodes/7.js')),
			__memo(() => import('../output/server/nodes/8.js'))
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
				id: "/about",
				pattern: /^\/about\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/demo",
				pattern: /^\/demo\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/demo/paraglide",
				pattern: /^\/demo\/paraglide\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/photo",
				pattern: /^\/photo\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/projects",
				pattern: /^\/projects\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/projects/[projectId]",
				pattern: /^\/projects\/([^/]+?)\/?$/,
				params: [{"name":"projectId","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 8 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
