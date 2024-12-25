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
		client: {"start":"_app/immutable/entry/start.CeBSk93w.js","app":"_app/immutable/entry/app.CfcBWz5L.js","imports":["_app/immutable/entry/start.CeBSk93w.js","_app/immutable/chunks/entry.C2d3fhIe.js","_app/immutable/chunks/runtime.D5jDPlfy.js","_app/immutable/chunks/utils.Bcj1CX31.js","_app/immutable/chunks/control.CYgJF_JY.js","_app/immutable/chunks/index-client.FsD-bo5e.js","_app/immutable/entry/app.CfcBWz5L.js","_app/immutable/chunks/i18n.DlRC5--w.js","_app/immutable/chunks/legacy.B20OX0cs.js","_app/immutable/chunks/runtime.D5jDPlfy.js","_app/immutable/chunks/entry.C2d3fhIe.js","_app/immutable/chunks/utils.Bcj1CX31.js","_app/immutable/chunks/control.CYgJF_JY.js","_app/immutable/chunks/index-client.FsD-bo5e.js","_app/immutable/chunks/render.Cq-8yCv4.js","_app/immutable/chunks/svelte-head.BlQ91ENv.js","_app/immutable/chunks/if.a0tm15lE.js","_app/immutable/chunks/props.B9KiVsxf.js","_app/immutable/chunks/store.DhLjkDfp.js","_app/immutable/chunks/this.BfTuroc0.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js')),
			__memo(() => import('./nodes/6.js')),
			__memo(() => import('./nodes/7.js')),
			__memo(() => import('./nodes/8.js'))
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
