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
		client: {"start":"_app/immutable/entry/start.Di1-X1bm.js","app":"_app/immutable/entry/app.IebZWrlS.js","imports":["_app/immutable/entry/start.Di1-X1bm.js","_app/immutable/chunks/entry.DM4uZxnJ.js","_app/immutable/chunks/runtime.Bf7gSquH.js","_app/immutable/chunks/index-client.BFjiRGoS.js","_app/immutable/entry/app.IebZWrlS.js","_app/immutable/chunks/i18n.CfxJmgU2.js","_app/immutable/chunks/legacy.CNCX3zJT.js","_app/immutable/chunks/runtime.Bf7gSquH.js","_app/immutable/chunks/entry.DM4uZxnJ.js","_app/immutable/chunks/index-client.BFjiRGoS.js","_app/immutable/chunks/render.CNhWQkix.js","_app/immutable/chunks/svelte-head.BpJpdfBE.js","_app/immutable/chunks/if.DstTksvS.js","_app/immutable/chunks/props.B6yDadDT.js","_app/immutable/chunks/store.B0kon1Po.js","_app/immutable/chunks/this.C9CH7m4h.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
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
