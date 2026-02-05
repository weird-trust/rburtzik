
// this file is generated — do not edit it


declare module "svelte/elements" {
	export interface HTMLAttributes<T> {
		'data-sveltekit-keepfocus'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-noscroll'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-preload-code'?:
			| true
			| ''
			| 'eager'
			| 'viewport'
			| 'hover'
			| 'tap'
			| 'off'
			| undefined
			| null;
		'data-sveltekit-preload-data'?: true | '' | 'hover' | 'tap' | 'off' | undefined | null;
		'data-sveltekit-reload'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-replacestate'?: true | '' | 'off' | undefined | null;
	}
}

export {};


declare module "$app/types" {
	export interface AppTypes {
		RouteId(): "/" | "/about" | "/demo" | "/demo/paraglide" | "/photo" | "/projects" | "/projects/[projectId]";
		RouteParams(): {
			"/projects/[projectId]": { projectId: string }
		};
		LayoutParams(): {
			"/": { projectId?: string };
			"/about": Record<string, never>;
			"/demo": Record<string, never>;
			"/demo/paraglide": Record<string, never>;
			"/photo": Record<string, never>;
			"/projects": { projectId?: string };
			"/projects/[projectId]": { projectId: string }
		};
		Pathname(): "/" | "/about" | "/about/" | "/demo" | "/demo/" | "/demo/paraglide" | "/demo/paraglide/" | "/photo" | "/photo/" | "/projects" | "/projects/" | `/projects/${string}` & {} | `/projects/${string}/` & {};
		ResolvedPathname(): `${"" | `/${string}`}${ReturnType<AppTypes['Pathname']>}`;
		Asset(): "/android-chrome-192x192.png" | "/android-chrome-512x512.png" | "/apple-touch-icon.png" | "/browserconfig.xml" | "/cursor.png" | "/favicon-16x16.png" | "/favicon-32x32.png" | "/favicon.ico" | "/fonts/CommitMono-400-Italic.woff2" | "/fonts/CommitMono-400-Regular.woff2" | "/fonts/CommitMono-700-Italic.woff2" | "/fonts/CommitMono-700-Regular.woff2" | "/fonts/nextpanmonothin.woff2" | "/images/design-hfbk/desktop/hfbk1.avif" | "/images/design-hfbk/desktop/hfbk2.avif" | "/images/design-hfbk/desktop/hfbk3.avif" | "/images/design-hfbk/hfbk-video.mp4" | "/images/design-hfbk/mobile/hfbk1.avif" | "/images/design-hfbk/mobile/hfbk2.avif" | "/images/futurium_audioplayer/desktop/futurium1.avif" | "/images/futurium_audioplayer/desktop/futurium2.avif" | "/images/futurium_audioplayer/desktop/futurium3.avif" | "/images/futurium_audioplayer/futurium-audioguide.mp4" | "/images/futurium_audioplayer/mobile/futurium1.avif" | "/images/futurium_audioplayer/mobile/futurium2.avif" | "/images/futurium_audioplayer/mobile/futurium3.avif" | "/images/futurium_audioplayer/mobile/futurium4.avif" | "/images/haus-der-kunst/desktop/HDK1.avif" | "/images/haus-der-kunst/desktop/HDK2.avif" | "/images/haus-der-kunst/desktop/HDK3.avif" | "/images/haus-der-kunst/desktop/HDK4.avif" | "/images/haus-der-kunst/hdk.mp4" | "/images/haus-der-kunst/mobile/HDK1.avif" | "/images/haus-der-kunst/mobile/HDK2.avif" | "/images/hilti/desktop/HILTI1.avif" | "/images/hilti/desktop/HILTI2.avif" | "/images/hilti/mobile/HILTI1.avif" | "/images/hilti/mobile/HILTI2.avif" | "/images/internet-changed-my-life/desktop/icml1.avif" | "/images/internet-changed-my-life/desktop/icml2.avif" | "/images/internet-changed-my-life/desktop/icml3.avif" | "/images/internet-changed-my-life/icml-video.mp4" | "/images/internet-changed-my-life/mobile/icml1.avif" | "/images/internet-changed-my-life/mobile/icml2.avif" | "/images/internet-changed-my-life/mobile/icml3.avif" | "/images/kampnagel/Kampnagel.mp4" | "/images/kampnagel/desktop/kampnagel1.avif" | "/images/kampnagel/desktop/kampnagel2.avif" | "/images/kampnagel/desktop/kampnagel3.avif" | "/images/kampnagel/desktop/kampnagel4.avif" | "/images/kampnagel/mobile/kamnagel1.avif" | "/images/kampnagel/mobile/kamnagel2.avif" | "/images/kampnagel/mobile/kamnagel3.avif" | "/images/kampnagel/mobile/kamnagel4.avif" | "/images/magenta-musik/desktop/magenta-musik1.avif" | "/images/magenta-musik/desktop/magenta-musik2.avif" | "/images/magenta-musik/desktop/magenta-musik3.avif" | "/images/magenta-musik/desktop/magenta-musik4.avif" | "/images/magenta-musik/mobile/magenta-musik1.avif" | "/images/magenta-musik/mobile/magenta-musik2.avif" | "/images/scamming-interfaces/desktop/scamming-interfaces1.avif" | "/images/scamming-interfaces/desktop/scamming-interfaces2.avif" | "/images/scamming-interfaces/desktop/scamming-interfaces3.avif" | "/images/scamming-interfaces/desktop/scamming-interfaces4.avif" | "/images/scamming-interfaces/desktop/scamming-interfaces5.avif" | "/images/scamming-interfaces/mobile/scamming-interfaces1.avif" | "/images/scamming-interfaces/mobile/scamming-interfaces2.avif" | "/images/scamming-interfaces/mobile/scamming-interfaces3.avif" | "/images/scamming-interfaces/scamming-interfaces.mp4" | "/images/shoah-memorial-frankfurt/desktop/shoah1.avif" | "/images/shoah-memorial-frankfurt/desktop/shoah2.avif" | "/images/shoah-memorial-frankfurt/desktop/shoah3.avif" | "/images/shoah-memorial-frankfurt/desktop/shoah4.avif" | "/images/shoah-memorial-frankfurt/desktop/shoah5.avif" | "/images/shoah-memorial-frankfurt/mobile/shoah1.avif" | "/images/shoah-memorial-frankfurt/mobile/shoah2.avif" | "/images/shoah-memorial-frankfurt/mobile/shoah3.avif" | "/images/shoah-memorial-frankfurt/mobile/shoah4.avif" | "/images/shoah-memorial-frankfurt/shoah.mp4" | "/mstile-150x150.png" | "/preview-image.jpg" | "/robots.txt" | "/safari-pinned-tab.svg" | "/site.webmanifest" | string & {};
	}
}