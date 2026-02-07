import type { Project } from '$lib/types';

export const projects: Project[] = [
	{
		id: 'haus-der-kunst',
		name: 'Haus der Kunst München',
		url: 'https://www.hausderkunst.de',
		description: 'Digital platform for the museum Haus der Kunst in Munich',
		year: 2021,
		type: 'Museum',
		work: 'Website Development',
		client: 'Haus der Kunst',
		credits: {
			agency: ['Fork Unstable Media GmbH'],
			personal: ['Robert Burtzik']
		},
		copy: {
			intro:
				'The Haus der Kunst is a public museum without a permanent collection and a leading center for contemporary art. Its program showcases the global and diverse nature of contemporary art, breaking down geographical and cultural boundaries.',
			sections: [
				{
					title: 'Dynamic Fragments',
					content:
						'The website redesign reflects the museum’s vision by emphasizing simplicity and allowing the content to take center stage. Modular fragments were developed as building blocks of the site, enabling dynamic combinations and reinterpretations. This fosters openness, movement, and coexistence of diverse narratives.',
					bulletPoints: [
						'Fragments allow dynamic content combinations.',
						'Encourages reinterpretation and connection of ideas.'
					]
				},
				{
					title: 'Variable Font Development',
					content:
						'As the designer, I conceived and developed a variable font that responds to user scroll interactions. This innovation extends the dynamic concept to typography, creating a vibrant, living reflection of artistic expression.',
					bulletPoints: [
						'Scroll-responsive variable font enhances user interaction.',
						'Adds vibrancy and transforms the digital experience.'
					]
				}
			],
			conclusion:
				'The dynamic fragments and variable font bring the museum’s artistic essence to the digital realm, offering a flexible and engaging platform for storytelling and exploration.'
		},
		media: [
			{
				type: 'video',
				projectId: 'haus-der-kunst',
				hasMobile: true,
				filename: 'hdk.mp4',
				mobileFilename: 'hdk_mobile.mp4',
				alt: 'Variable font demonstration for Haus der Kunst'
			},
			{
				type: 'image',
				projectId: 'haus-der-kunst',
				filename: 'HDK1.avif',
				hasMobile: true,
				alt: 'Haus der Kunst website interface showcasing dynamic fragments'
			},
			{
				type: 'image',
				projectId: 'haus-der-kunst',
				filename: 'HDK2.avif',
				hasMobile: true,
				alt: 'Haus der Kunst website interface showcasing dynamic fragments'
			},
			{
				type: 'image',
				projectId: 'haus-der-kunst',
				hasMobile: false,
				filename: 'HDK3.avif',
				alt: 'Haus der Kunst website interface showcasing dynamic fragments'
			},
			{
				type: 'image',
				projectId: 'haus-der-kunst',
				filename: 'HDK4.avif',
				hasMobile: false,
				alt: 'Haus der Kunst website interface showcasing dynamic fragments'
			}
		]
	},
	{
		id: 'hilti',
		name: 'Hilti Product Configurators',
		url: 'https://www.hilti.com',
		description:
			"Digital product configurators for Hilti's professional construction tools and systems",
		year: 2016,
		type: 'E-commerce',
		work: 'User Interface Design',
		client: 'Hilti',
		credits: {
			agency: ['Fork Unstable Media GmbH'],
			personal: ['Robert Burtzik']
		},
		copy: {
			intro:
				'Hilti is a global leader in professional construction tools and solutions. As part of their digital transformation, we developed intuitive product configurators to help professionals find and customize the right tools for their specific needs.',
			sections: [
				{
					title: 'User-Centered Configuration',
					content:
						"Working within a larger team at Fork Unstable Media, I led the UI design of various product configurators for Hilti's webshop. The focus was on creating an intuitive interface that guides professionals through complex product decisions while maintaining technical accuracy and precision.",
					bulletPoints: [
						'Developed and tested multiple configurator prototypes with real users',
						'Simplified complex technical choices through intuitive interface design'
					]
				},
				{
					title: 'Collaborative Design Process',
					content:
						'The project involved close collaboration with product experts, developers, and end-users to ensure both technical accuracy and usability. Through iterative testing and refinement, we created configurators that balance professional requirements with user-friendly interaction patterns.',
					bulletPoints: [
						'Iterative design process with continuous user feedback',
						'Integration of technical specifications with intuitive user flows'
					]
				}
			],
			conclusion:
				'The resulting configurators streamline the product selection process for construction professionals, combining technical precision with intuitive user experience design.'
		},

		media: [
			{
				type: 'image',
				projectId: 'hilti',
				filename: 'HILTI1.avif',
				hasMobile: true,
				alt: 'config'
			},
			{
				type: 'image',
				projectId: 'hilti',
				filename: 'HILTI2.avif',
				hasMobile: true,
				alt: 'config'
			}
		]
	},
	{
		id: 'shoah-memorial-frankfurt',
		name: 'Shoah Memorial Frankfurt',
		url: 'https://www.shoah-memorial-frankfurt.de/',
		description: 'Digital memorial platform for Jewish victims of the Holocaust in Frankfurt',
		year: 2022,
		type: 'Memorial Platform',
		work: 'Interface Design',
		client: 'Jewish Museum Frankfurt',
		credits: {
			agency: ['Fork Unstable Media GmbH'],
			personal: ['Robert Burtzik']
		},
		copy: {
			intro:
				'The Shoah Memorial Frankfurt is a digital monument honoring the Jewish community of Frankfurt who were victims of the Holocaust. This platform serves as both a historical documentation and a living memorial where families can share memories and pay tribute to their loved ones.',
			sections: [
				{
					title: 'Visual Documentation',
					content:
						"Using Three.js, we created a visual representation that conveys the scale of loss while maintaining individual dignity. The interactive canvas transforms statistical data into a powerful visual narrative, helping visitors comprehend the devastating impact on Frankfurt's Jewish community.",
					bulletPoints: [
						'Interactive 3D visualization representing individual lives and collective loss',
						'Responsive design that adapts to different viewing contexts and devices'
					]
				},
				{
					title: 'Digital Commemoration',
					content:
						'The platform serves as a living memorial where family members and the public can contribute memories, documents, and personal histories. This collaborative approach creates a growing archive that preserves individual stories while building a collective memory.',
					bulletPoints: [
						'User-contributed content system for sharing memories and documents',
						'Thoughtfully designed interaction patterns that respect the solemnity of the memorial'
					]
				}
			],
			conclusion:
				'The memorial platform bridges historical documentation with contemporary remembrance, creating a space where past and present connect through shared memories and ongoing commemoration.'
		},
		media: [
			{
				type: 'video',
				projectId: 'shoah-memorial-frankfurt',
				hasMobile: true,
				filename: 'shoah.mp4',
				mobileFilename: 'shoah_mobile.mp4',
				alt: 'interaction on shoah memorial interface'
			},
			{
				type: 'image',
				projectId: 'shoah-memorial-frankfurt',
				hasMobile: true,
				filename: 'shoah1.avif',
				alt: 'shoah memormial interface design'
			},
			{
				type: 'image',
				projectId: 'shoah-memorial-frankfurt',
				hasMobile: true,
				filename: 'shoah2.avif',
				alt: 'shoah memormial interface design'
			},
			{
				type: 'image',
				projectId: 'shoah-memorial-frankfurt',
				hasMobile: true,
				filename: 'shoah3.avif',
				alt: 'shoah memormial interface design'
			},
			{
				type: 'image',
				projectId: 'shoah-memorial-frankfurt',
				hasMobile: true,
				filename: 'shoah4.avif',
				alt: 'shoah memormial interface design'
			},
			{
				type: 'image',
				projectId: 'shoah-memorial-frankfurt',
				hasMobile: true,
				filename: 'shoah5.avif',
				alt: 'shoah memormial interface design'
			}
		]
	},
	{
		id: 'internet-changed-my-life',
		name: 'Internet Changed My Life',
		url: 'https://www.internetchangedmy.life/',
		description: 'Custom Winamp-inspired music player and website for album release',
		year: 2024,
		type: 'Music Platform',
		work: 'Interface Design & Development',
		client: 'Simon Apfl',
		credits: {
			agency: ['Simon Apfl'],
			personal: ['Robert Burtzik']
		},
		copy: {
			intro:
				"Internet Changed My Life is a nostalgic yet contemporary digital platform that reimagines the iconic Winamp player for the modern web, created as a release hub for musician Simon Apfl's album.",
			sections: [
				{
					title: 'Retro-Future Interface',
					content:
						"The project features a custom-designed Winamp player skin that pays homage to the golden era of digital music players while incorporating modern web capabilities. This fusion of nostalgia and contemporary design creates a unique listening experience that reflects the album's themes.",
					bulletPoints: [
						'Custom-built Winamp-inspired interface with modern functionality',
						'Responsive design that maintains the nostalgic aesthetic across devices'
					]
				},
				{
					title: 'Album Experience Hub',
					content:
						"Beyond just a player, the platform serves as a comprehensive hub for the album release, integrating visual identity elements inspired by the album's title. The design creates an immersive digital environment that complements the musical experience.",
					bulletPoints: [
						"Integrated visual identity reflecting the album's themes",
						'Interactive elements that enhance the music listening experience'
					]
				}
			],
			conclusion:
				"The project merges nostalgic digital aesthetics with modern web technology, creating an engaging platform that enhances the album's narrative about digital transformation."
		},
		media: [
			{
				type: 'video',
				projectId: 'internet-changed-my-life',
				filename: 'icml-video.mp4',
				hasMobile: true,
				mobileFilename: 'icml-video_mobile.mp4',
				alt: 'interaction on winamp player interface'
			},
			{
				type: 'image',
				projectId: 'internet-changed-my-life',
				filename: 'icml1.avif',
				hasMobile: true,
				alt: 'winamp player interface design'
			},
			{
				type: 'image',
				projectId: 'internet-changed-my-life',
				filename: 'icml2.avif',
				hasMobile: true,
				alt: 'winamp player interface design'
			},
			{
				type: 'image',
				projectId: 'internet-changed-my-life',
				filename: 'icml3.avif',
				hasMobile: true,
				alt: 'winamp player interface design'
			}
		]
	},
	{
		id: 'kampnagel',
		name: 'Kampnagel',
		url: 'https://www.kampnagel.de',
		description:
			"Digital platform for Hamburg's international center for contemporary performing arts",
		year: 2021,
		type: 'Cultural Institution',
		work: 'User Interface Design',
		client: 'Kampnagel',
		credits: {
			agency: ['Fork Unstable Media GmbH'],
			personal: ['Robert Burtzik']
		},
		copy: {
			intro:
				"Kampnagel, Hamburg's largest independent production venue for performing arts, required a digital platform that could match its dynamic and avant-garde programming while serving diverse audience needs.",
			sections: [
				{
					title: 'Contemporary Cultural Interface',
					content:
						"The redesign focused on creating a flexible system that could showcase Kampnagel's diverse range of events and content while maintaining clear navigation and accessibility. The interface balances artistic expression with functional user experience.",
					bulletPoints: [
						'Flexible content presentation system for diverse event types',
						'Intuitive navigation through complex programming schedules'
					]
				},
				{
					title: 'Digital Stage',
					content:
						"The website serves as an extension of Kampnagel's physical space, offering a digital platform that reflects its role as a center for contemporary arts and cultural discourse. The design supports both practical functionality and artistic expression.",
					bulletPoints: [
						'Integration of ticketing and event information systems',
						'Responsive design supporting mobile-first content access'
					]
				}
			],
			conclusion:
				"The new digital presence captures Kampnagel's innovative spirit while providing an accessible platform for its diverse audience and programming."
		},
		media: [
			{
				type: 'video',
				projectId: 'kampnagel',
				filename: 'Kampnagel.mp4',
				hasMobile: true,
				mobileFilename: 'Kamnagel_mobile.mp4',
				alt: 'Theater Kampnagel website interface showcasing dynamic event listings'
			},
			{
				type: 'image',
				projectId: 'kampnagel',
				filename: 'kampnagel1.avif',
				hasMobile: true,
				alt: 'Theater Kampnagel website interface showcasing dynamic event listings'
			},
			{
				type: 'image',
				projectId: 'kampnagel',
				filename: 'kampnagel2.avif',
				hasMobile: true,
				alt: 'Theater Kampnagel website interface showcasing dynamic event listings'
			},
			{
				type: 'image',
				projectId: 'kampnagel',
				filename: 'kampnagel3.avif',
				hasMobile: true,
				alt: 'Theater Kampnagel website interface showcasing dynamic event listings'
			},
			{
				type: 'image',
				projectId: 'kampnagel',
				filename: 'kampnagel4.avif',
				hasMobile: true,
				alt: 'Theater Kampnagel website interface showcasing dynamic event listings'
			}
		]
	},
	{
		id: 'magenta-musik',
		name: 'Magenta Musik Video Player',
		url: 'https://www.magentamusik.de/',
		description: 'Advanced video player platform with multi-feature streaming capabilities',
		year: 2023,
		type: 'Streaming Platform',
		work: 'Video Player Development',
		client: 'Magenta Musik',
		credits: {
			agency: ['Fork Unstable Media GmbH'],
			personal: ['Robert Burtzik']
		},
		copy: {
			intro:
				'For Magenta Musik, I led the development of a comprehensive video player that pushes the boundaries of online video consumption, integrating advanced features like co-streaming, picture-in-picture, watch parties, and live streaming capabilities.',
			sections: [
				{
					title: 'Advanced Streaming Technology',
					content:
						'The video player was designed to handle multiple streaming formats and viewing scenarios, from traditional video playback to interactive watch parties. The system maintains high performance while managing complex streaming operations.',
					bulletPoints: [
						'Integrated support for multiple streaming formats and scenarios',
						'Optimized performance for seamless viewing experiences'
					]
				},
				{
					title: 'Social Viewing Features',
					content:
						'The player incorporates social features like watch parties and co-streaming, enabling users to share viewing experiences in real-time. These features required careful consideration of synchronization and user interaction patterns.',
					bulletPoints: [
						'Real-time synchronization for shared viewing experiences',
						'Intuitive controls for managing complex streaming scenarios'
					]
				}
			],
			conclusion:
				'The resulting video player represents a significant advancement in online video consumption, offering users a comprehensive platform for both individual and social viewing experiences.'
		},
		media: [
			{
				type: 'image',
				projectId: 'magenta-musik',
				filename: 'magenta-musik1.avif',
				hasMobile: true,
				alt: 'video player interface design'
			},
			{
				type: 'image',
				projectId: 'magenta-musik',
				filename: 'magenta-musik2.avif',
				hasMobile: true,
				alt: 'video player interface design'
			},
			{
				type: 'image',
				projectId: 'magenta-musik',
				filename: 'magenta-musik3.avif',
				hasMobile: false,
				alt: 'video player interface design'
			},
			{
				type: 'image',
				projectId: 'magenta-musik',
				filename: 'magenta-musik4.avif',
				hasMobile: false,
				alt: 'video player interface design'
			}
		]
	},
	{
		id: 'design-hfbk',
		name: 'Design HFBK',
		url: 'https://design.hfbk-hamburg.de/',
		description: "One-page hub for HFBK Hamburg's Design Department",
		year: 2019,
		type: 'Educational Platform',
		work: 'Concept & Development',
		client: 'HFBK Hamburg',
		credits: {
			agency: ['HFBK Hamburg'],
			personal: ['Robert Burtzik']
		},
		copy: {
			intro:
				"During my Master's studies at HFBK Hamburg, I reconceptualized the Design Department's web presence as a single-page platform, creating an accessible hub for current and prospective students.",
			sections: [
				{
					title: 'Academic Information Architecture',
					content:
						'The one-page concept streamlines access to essential information, making it easier for students and prospective applicants to find relevant content about the design program. The simplified structure supports quick navigation while maintaining comprehensive content coverage.',
					bulletPoints: [
						'Intuitive single-page navigation system',
						'Optimized content structure for academic information'
					]
				},
				{
					title: 'Student-Centered Design',
					content:
						'The platform was developed with a focus on student needs, providing easy access to course information, resources, and department updates. The design emphasizes clarity and efficiency while reflecting the creative nature of the design department.',
					bulletPoints: [
						'User-focused content organization',
						'Integration of departmental updates and resources'
					]
				}
			],
			conclusion:
				'The redesigned platform serves as a central information hub for the Design Department, improving accessibility and user experience for the HFBK community.'
		},
		media: [
			{
				type: 'video',
				projectId: 'design-hfbk',
				filename: 'hfbk-video.mp4',
				hasMobile: false,
				alt: 'Redesigned HFBK Hamburg Design Department website'
			},
			{
				type: 'image',
				projectId: 'design-hfbk',
				filename: 'hfbk1.avif',
				hasMobile: true,
				alt: 'Redesigned HFBK Hamburg Design Department website'
			},
			{
				type: 'image',
				projectId: 'design-hfbk',
				filename: 'hfbk2.avif',
				hasMobile: true,
				alt: 'Redesigned HFBK Hamburg Design Department website'
			},
			{
				type: 'image',
				projectId: 'design-hfbk',
				filename: 'hfbk3.avif',
				hasMobile: false,
				alt: 'Redesigned HFBK Hamburg Design Department website'
			}
		]
	},
	{
		id: 'scamming-interfaces',
		name: 'Scamming Interfaces',
		url: 'https://www--scam.me',
		description: "Master's thesis on the evolution and mechanisms of digital scams",
		year: 2017, // Please provide the year
		type: 'Academic Research',
		work: "Master's Thesis",
		client: 'HFBK Hamburg',
		credits: {
			agency: ['me'],
			personal: ['Robert Burtzik']
		},
		copy: {
			intro:
				'Scamming Interfaces is a comprehensive research thesis examining the historical development, current strategies, and future trajectories of digital scams and deception. The work analyzes how scammers exploit contemporary social, political, and economic contexts to create credible narratives.',
			sections: [
				{
					title: 'Digital Deception Analysis',
					content:
						'The research investigates how scammers leverage political instability and cultural stereotypes to craft compelling narratives. It examines the intersection of comedy, magical realism, and digital communication in modern scamming techniques, particularly focusing on email-based fraud schemes.',
					bulletPoints: [
						'Analysis of scam narrative structures and psychological tactics',
						'Investigation of cultural and colonial influences in digital fraud'
					]
				},
				{
					title: 'Alternative Reality Construction',
					content:
						'The thesis explores how scammers create alternative realities by exploiting Eurocentric perspectives and colonial histories. It examines the construction of solidarity and promise in scam narratives, revealing how these elements contribute to the effectiveness of digital deception.',
					bulletPoints: [
						'Examination of reality construction in digital scams',
						'Analysis of cultural and historical exploitation in fraud narratives'
					]
				}
			],
			conclusion:
				'This research provides crucial insights into the mechanisms of digital deception, highlighting how scammers adapt to and exploit contemporary social and technological contexts to create convincing fraudulent narratives.'
		},
		media: [
			{
				type: 'video',
				projectId: 'scamming-interfaces',
				filename: 'scamming-interfaces.mp4',
				hasMobile: false,
				alt: 'Variable font demonstration for Haus der Kunst'
			},
			{
				type: 'image',
				projectId: 'scamming-interfaces',
				filename: 'scamming-interfaces1.avif',
				hasMobile: true,
				alt: 'Haus der Kunst website interface showcasing dynamic fragments'
			},
			{
				type: 'image',
				projectId: 'scamming-interfaces',
				filename: 'scamming-interfaces2.avif',
				hasMobile: true,
				alt: 'Haus der Kunst website interface showcasing dynamic fragments'
			},
			{
				type: 'image',
				projectId: 'scamming-interfaces',
				filename: 'scamming-interfaces3.avif',
				hasMobile: true,
				alt: 'Haus der Kunst website interface showcasing dynamic fragments'
			},
			{
				type: 'image',
				projectId: 'scamming-interfaces',
				filename: 'scamming-interfaces4.avif',
				hasMobile: false,
				alt: 'Haus der Kunst website interface showcasing dynamic fragments'
			},
			{
				type: 'image',
				projectId: 'scamming-interfaces',
				filename: 'scamming-interfaces5.avif',
				hasMobile: false,
				alt: 'Haus der Kunst website interface showcasing dynamic fragments'
			}
		]
	}
];
