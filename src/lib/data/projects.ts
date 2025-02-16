import type { Project } from '$lib/types';

const CLOUDINARY_URL = 'https://res.cloudinary.com/dk2ozewvs/image/upload';
const CLOUDINARY_URL_VIDEO = 'https://res.cloudinary.com/dk2ozewvs/video/upload';

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
            intro: 'The Haus der Kunst is a public museum without a permanent collection and a leading center for contemporary art. Its program showcases the global and diverse nature of contemporary art, breaking down geographical and cultural boundaries.',
            sections: [
                {
                    title: 'Dynamic Fragments',
                    content: 'The website redesign reflects the museum’s vision by emphasizing simplicity and allowing the content to take center stage. Modular fragments were developed as building blocks of the site, enabling dynamic combinations and reinterpretations. This fosters openness, movement, and coexistence of diverse narratives.',
                    bulletPoints: [
                        'Fragments allow dynamic content combinations.',
                        'Encourages reinterpretation and connection of ideas.'
                    ]
                },
                {
                    title: 'Variable Font Development',
                    content: 'As the designer, I conceived and developed a variable font that responds to user scroll interactions. This innovation extends the dynamic concept to typography, creating a vibrant, living reflection of artistic expression.',
                    bulletPoints: [
                        'Scroll-responsive variable font enhances user interaction.',
                        'Adds vibrancy and transforms the digital experience.'
                    ]
                }
            ],
            conclusion: 'The dynamic fragments and variable font bring the museum’s artistic essence to the digital realm, offering a flexible and engaging platform for storytelling and exploration.'
        },

    media: [
        {
            type: 'image',
            publicId: 'haus-der-kunst/cksvo4wjhx3jxh0lhrkz',
            url: `${CLOUDINARY_URL}/f_auto,q_auto/haus-der-kunst/cksvo4wjhx3jxh0lhrkz`,
            alt: 'haus-der-kunst - Add description'
        },
        {
            type: 'image',
            publicId: 'haus-der-kunst/znexhlvaukyfub3lw8zf',
            url: `${CLOUDINARY_URL}/f_auto,q_auto/haus-der-kunst/znexhlvaukyfub3lw8zf`,
            alt: 'haus-der-kunst - Add description'
        },
        {
            type: 'video',
            publicId: 'haus-der-kunst/hakvnpefctgjd4dkzhda',
            url: `${CLOUDINARY_URL_VIDEO}/f_auto:video,q_auto/v1/haus-der-kunst/hakvnpefctgjd4dkzhda`
        },
    ],
    },    
    {
        "id": "hilti",
        "name": "Hilti Product Configurators",
        "url": "https://www.hilti.com",
        "description": "Digital product configurators for Hilti's professional construction tools and systems",
        "year": 2016,
        "type": "E-commerce",
        "work": "User Interface Design",
        "client": "Hilti",
        "credits": {
            "agency": ["Fork Unstable Media GmbH"],
            "personal": ["Robert Burtzik"]
        },
        "copy": {
            "intro": "Hilti is a global leader in professional construction tools and solutions. As part of their digital transformation, we developed intuitive product configurators to help professionals find and customize the right tools for their specific needs.",
            "sections": [
                {
                    "title": "User-Centered Configuration",
                    "content": "Working within a larger team at Fork Unstable Media, I led the UI design of various product configurators for Hilti's webshop. The focus was on creating an intuitive interface that guides professionals through complex product decisions while maintaining technical accuracy and precision.",
                    "bulletPoints": [
                        "Developed and tested multiple configurator prototypes with real users",
                        "Simplified complex technical choices through intuitive interface design"
                    ]
                },
                {
                    "title": "Collaborative Design Process",
                    "content": "The project involved close collaboration with product experts, developers, and end-users to ensure both technical accuracy and usability. Through iterative testing and refinement, we created configurators that balance professional requirements with user-friendly interaction patterns.",
                    "bulletPoints": [
                        "Iterative design process with continuous user feedback",
                        "Integration of technical specifications with intuitive user flows"
                    ]
                }
            ],
            "conclusion": "The resulting configurators streamline the product selection process for construction professionals, combining technical precision with intuitive user experience design."
        },
    
            media: [
                {
                    type: 'image',
                    publicId: 'hilti/xjqqlgwyfh1t0wkrscn0',
                    url: `${CLOUDINARY_URL}/f_auto,q_auto/hilti/xjqqlgwyfh1t0wkrscn0`,
                    alt: 'hilti - Add description'
                },
                {
                    type: 'image',
                    publicId: 'hilti/dmq1notqj5xu92eddkty',
                    url: `${CLOUDINARY_URL}/f_auto,q_auto/hilti/dmq1notqj5xu92eddkty`,
                    alt: 'hilti - Add description'
                },
                {
                    type: 'image',
                    publicId: 'hilti/gtwtycqovnrkkqjforrl',
                    url: `${CLOUDINARY_URL}/f_auto,q_auto/hilti/gtwtycqovnrkkqjforrl`,
                    alt: 'hilti - Add description'
                },
            ],
        },
        {

                "id": "shoah-memorial-frankfurt",
                "name": "Shoah Memorial Frankfurt",
                "url": "https://www.shoah-memorial-frankfurt.de/", 
                "description": "Digital memorial platform for Jewish victims of the Holocaust in Frankfurt",
                "year": 2022, 
                "type": "Memorial Platform",
                "work": "Interface Design",
                "client": "Jewish Museum Frankfurt",
                "credits": {
                    "agency": ["Fork Unstable Media GmbH"],
                    "personal": ["Robert Burtzik"]
                },
                "copy": {
                    "intro": "The Shoah Memorial Frankfurt is a digital monument honoring the Jewish community of Frankfurt who were victims of the Holocaust. This platform serves as both a historical documentation and a living memorial where families can share memories and pay tribute to their loved ones.",
                    "sections": [
                        {
                            "title": "Visual Documentation",
                            "content": "Using Three.js, we created a visual representation that conveys the scale of loss while maintaining individual dignity. The interactive canvas transforms statistical data into a powerful visual narrative, helping visitors comprehend the devastating impact on Frankfurt's Jewish community.",
                            "bulletPoints": [
                                "Interactive 3D visualization representing individual lives and collective loss",
                                "Responsive design that adapts to different viewing contexts and devices"
                            ]
                        },
                        {
                            "title": "Digital Commemoration",
                            "content": "The platform serves as a living memorial where family members and the public can contribute memories, documents, and personal histories. This collaborative approach creates a growing archive that preserves individual stories while building a collective memory.",
                            "bulletPoints": [
                                "User-contributed content system for sharing memories and documents",
                                "Thoughtfully designed interaction patterns that respect the solemnity of the memorial"
                            ]
                        }
                    ],
                    "conclusion": "The memorial platform bridges historical documentation with contemporary remembrance, creating a space where past and present connect through shared memories and ongoing commemoration."
                }
            ,
            media: [
                {
                    type: 'image',
                    publicId: 'shoah-memorial-frankfurt/jvr7ppql3tunyuknx4jg',
                    url: `${CLOUDINARY_URL}/f_auto,q_auto/shoah-memorial-frankfurt/jvr7ppql3tunyuknx4jg`,
                    alt: 'shoah-memorial-frankfurt - Add description'
                },
                {
                    type: 'image',
                    publicId: 'shoah-memorial-frankfurt/bxqwzbb9znaymrcwg95z',
                    url: `${CLOUDINARY_URL}/f_auto,q_auto/shoah-memorial-frankfurt/bxqwzbb9znaymrcwg95z`,
                    alt: 'shoah-memorial-frankfurt - Add description'
                },
                {
                    type: 'image',
                    publicId: 'shoah-memorial-frankfurt/fa3yk4hhdrsqiwhemsqb',
                    url: `${CLOUDINARY_URL}/f_auto,q_auto/shoah-memorial-frankfurt/fa3yk4hhdrsqiwhemsqb`,
                    alt: 'shoah-memorial-frankfurt - Add description'
                },
                {
                    type: 'image',
                    publicId: 'shoah-memorial-frankfurt/c2xpwixkea0dnig6capw',
                    url: `${CLOUDINARY_URL}/f_auto,q_auto/shoah-memorial-frankfurt/c2xpwixkea0dnig6capw`,
                    alt: 'shoah-memorial-frankfurt - Add description'
                },
                {
                    type: 'image',
                    publicId: 'shoah-memorial-frankfurt/w7twqrtjt4qnnxinju95',
                    url: `${CLOUDINARY_URL}/f_auto,q_auto/shoah-memorial-frankfurt/w7twqrtjt4qnnxinju95`,
                    alt: 'shoah-memorial-frankfurt - Add description'
                },
                {
                    type: 'image',
                    publicId: 'shoah-memorial-frankfurt/gak41rjnocoztgt1wyjh',
                    url: `${CLOUDINARY_URL}/f_auto,q_auto/shoah-memorial-frankfurt/gak41rjnocoztgt1wyjh`,
                    alt: 'shoah-memorial-frankfurt - Add description'
                },
                {
                    type: 'image',
                    publicId: 'shoah-memorial-frankfurt/aub9sfsli1oelktmjgpv',
                    url: `${CLOUDINARY_URL}/f_auto,q_auto/shoah-memorial-frankfurt/aub9sfsli1oelktmjgpv`,
                    alt: 'shoah-memorial-frankfurt - Add description'
                },
                {
                    type: 'image',
                    publicId: 'shoah-memorial-frankfurt/gprl6qnfas6jdvfu89dy',
                    url: `${CLOUDINARY_URL}/f_auto,q_auto/shoah-memorial-frankfurt/gprl6qnfas6jdvfu89dy`,
                    alt: 'shoah-memorial-frankfurt - Add description'
                },
                {
                    type: 'video',
                    publicId: 'shoah-memorial-frankfurt/hzj799aka8gomfgcwnkz',
                    url: `${CLOUDINARY_URL_VIDEO}/f_auto:video,q_auto/v1/shoah-memorial-frankfurt/hzj799aka8gomfgcwnkz`
            
                },
            ],
        },
        {
                "id": "internet-changed-my-life",
                "name": "Internet Changed My Life",
                "url": "https://www.internetchangedmy.life/",
                "description": "Custom Winamp-inspired music player and website for album release",
                "year": 2024,
                "type": "Music Platform",
                "work": "Interface Design & Development",
                "client": "Simon Apfl",
                "credits": {
                    "agency": ["Simon Apfl"],
                    "personal": ["Robert Burtzik"]
                },
                "copy": {
                    "intro": "Internet Changed My Life is a nostalgic yet contemporary digital platform that reimagines the iconic Winamp player for the modern web, created as a release hub for musician Simon Apfel's album.",
                    "sections": [
                        {
                            "title": "Retro-Future Interface",
                            "content": "The project features a custom-designed Winamp player skin that pays homage to the golden era of digital music players while incorporating modern web capabilities. This fusion of nostalgia and contemporary design creates a unique listening experience that reflects the album's themes.",
                            "bulletPoints": [
                                "Custom-built Winamp-inspired interface with modern functionality",
                                "Responsive design that maintains the nostalgic aesthetic across devices"
                            ]
                        },
                        {
                            "title": "Album Experience Hub",
                            "content": "Beyond just a player, the platform serves as a comprehensive hub for the album release, integrating visual identity elements inspired by the album's title. The design creates an immersive digital environment that complements the musical experience.",
                            "bulletPoints": [
                                "Integrated visual identity reflecting the album's themes",
                                "Interactive elements that enhance the music listening experience"
                            ]
                        }
                    ],
                    "conclusion": "The project successfully merges nostalgic digital aesthetics with modern web technology, creating an engaging platform that enhances the album's narrative about digital transformation."
                }
            ,
            media: [
                {
                    type: 'image',
                    publicId: 'internet-changed-my-life/sx0zzjtagqfdfzei2x9t',
                    url: `${CLOUDINARY_URL}/f_auto,q_auto/internet-changed-my-life/sx0zzjtagqfdfzei2x9t`,
                    alt: 'internet-changed-my-life - Add description'
                },
                {
                    type: 'image',
                    publicId: 'internet-changed-my-life/gn9nbk7ecbthcdic5xis',
                    url: `${CLOUDINARY_URL}/f_auto,q_auto/internet-changed-my-life/gn9nbk7ecbthcdic5xis`,
                    alt: 'internet-changed-my-life - Add description'
                },
                {
                    type: 'image',
                    publicId: 'internet-changed-my-life/wavyhoooeqdh8gb1dsmv',
                    url: `${CLOUDINARY_URL}/f_auto,q_auto/internet-changed-my-life/wavyhoooeqdh8gb1dsmv`,
                    alt: 'internet-changed-my-life - Add description'
                },
                {
                    type: 'video',
                    publicId: 'internet-changed-my-life/w3ptruezo0macwyok5le',
                    url: `${CLOUDINARY_URL_VIDEO}/f_auto:video,q_auto/v1/internet-changed-my-life/w3ptruezo0macwyok5le`
            
                },
            ],
        },
        {
            "id": "kampnagel",
            "name": "Kampnagel",
            "url": "https://www.kampnagel.de",
            "description": "Digital platform for Hamburg's international center for contemporary performing arts",
            "year": 2021,
            "type": "Cultural Institution",
            "work": "User Interface Design",
            "client": "Kampnagel",
            "credits": {
                "agency": ["Fork Unstable Media GmbH"],
                "personal": ["Robert Burtzik"]
            },
            "copy": {
                "intro": "Kampnagel, Hamburg's largest independent production venue for performing arts, required a digital platform that could match its dynamic and avant-garde programming while serving diverse audience needs.",
                "sections": [
                    {
                        "title": "Contemporary Cultural Interface",
                        "content": "The redesign focused on creating a flexible system that could showcase Kampnagel's diverse range of events and content while maintaining clear navigation and accessibility. The interface balances artistic expression with functional user experience.",
                        "bulletPoints": [
                            "Flexible content presentation system for diverse event types",
                            "Intuitive navigation through complex programming schedules"
                        ]
                    },
                    {
                        "title": "Digital Stage",
                        "content": "The website serves as an extension of Kampnagel's physical space, offering a digital platform that reflects its role as a center for contemporary arts and cultural discourse. The design supports both practical functionality and artistic expression.",
                        "bulletPoints": [
                            "Integration of ticketing and event information systems",
                            "Responsive design supporting mobile-first content access"
                        ]
                    }
                ],
                "conclusion": "The new digital presence successfully captures Kampnagel's innovative spirit while providing an accessible platform for its diverse audience and programming."
            },
            media: [
                {
                    type: 'image',
                    publicId: 'kampnagel/bfx2boknvzd6o8b5okl9',
                    url: `${CLOUDINARY_URL}/f_auto,q_auto/kampnagel/bfx2boknvzd6o8b5okl9`,
                    alt: 'kampnagel - Add description'
                },
                {
                    type: 'image',
                    publicId: 'kampnagel/kmmohhjcyfdbvysae6px',
                    url: `${CLOUDINARY_URL}/f_auto,q_auto/kampnagel/kmmohhjcyfdbvysae6px`,
                    alt: 'kampnagel - Add description'
                },
                {
                    type: 'image',
                    publicId: 'kampnagel/jmjbcrjmhfeog024plgx',
                    url: `${CLOUDINARY_URL}/f_auto,q_auto/kampnagel/jmjbcrjmhfeog024plgx`,
                    alt: 'kampnagel - Add description'
                },
                {
                    type: 'image',
                    publicId: 'kampnagel/pwy5vaxox3cpnv2lcx4y',
                    url: `${CLOUDINARY_URL}/f_auto,q_auto/kampnagel/pwy5vaxox3cpnv2lcx4y`,
                    alt: 'kampnagel - Add description'
                },
            ],
            
        },
        {
            "id": "magenta-musik",
            "name": "Magenta Musik Video Player",
            "url": "https://www.magentamusik.de/", 
            "description": "Advanced video player platform with multi-feature streaming capabilities",
            "year": 2023, 
            "type": "Streaming Platform",
            "work": "Video Player Development",
            "client": "Magenta Musik",
            "credits": {
                "agency": ["Fork Unstable Media GmbH"],
                "personal": ["Robert Burtzik"]
            },
            "copy": {
                "intro": "For Magenta Musik, I led the development of a comprehensive video player that pushes the boundaries of online video consumption, integrating advanced features like co-streaming, picture-in-picture, watch parties, and live streaming capabilities.",
                "sections": [
                    {
                        "title": "Advanced Streaming Technology",
                        "content": "The video player was designed to handle multiple streaming formats and viewing scenarios, from traditional video playback to interactive watch parties. The system maintains high performance while managing complex streaming operations.",
                        "bulletPoints": [
                            "Integrated support for multiple streaming formats and scenarios",
                            "Optimized performance for seamless viewing experiences"
                        ]
                    },
                    {
                        "title": "Social Viewing Features",
                        "content": "The player incorporates social features like watch parties and co-streaming, enabling users to share viewing experiences in real-time. These features required careful consideration of synchronization and user interaction patterns.",
                        "bulletPoints": [
                            "Real-time synchronization for shared viewing experiences",
                            "Intuitive controls for managing complex streaming scenarios"
                        ]
                    }
                ],
                "conclusion": "The resulting video player represents a significant advancement in online video consumption, offering users a comprehensive platform for both individual and social viewing experiences."
            }
        ,
            media: [
                {
                    type: 'image',
                    publicId: 'magenta-musik/lylbvo6piji6e8ubunt0',
                    url: `${CLOUDINARY_URL}/f_auto,q_auto/magenta-musik/lylbvo6piji6e8ubunt0`,
                    alt: 'magenta-musik - Add description'
                },
                {
                    type: 'image',
                    publicId: 'magenta-musik/r5cdwakavxrddjzfui5r',
                    url: `${CLOUDINARY_URL}/f_auto,q_auto/magenta-musik/r5cdwakavxrddjzfui5r`,
                    alt: 'magenta-musik - Add description'
                },
                {
                    type: 'image',
                    publicId: 'magenta-musik/vhj1s1x8gin4etzmzsiw',
                    url: `${CLOUDINARY_URL}/f_auto,q_auto/magenta-musik/vhj1s1x8gin4etzmzsiw`,
                    alt: 'magenta-musik - Add description'
                },
                {
                    type: 'image',
                    publicId: 'magenta-musik/vzbtrudbeaflbg5jbfut',
                    url: `${CLOUDINARY_URL}/f_auto,q_auto/magenta-musik/vzbtrudbeaflbg5jbfut`,
                    alt: 'magenta-musik - Add description'
                },
                {
                    type: 'video',
                    publicId: 'magenta-musik/nitgjvbovncnhjrhst1m',
                    url: `${CLOUDINARY_URL_VIDEO}/f_auto:video,q_auto/v1/magenta-musik/nitgjvbovncnhjrhst1m`
            
                },
            ],
        },
        {
            "id": "design-hfbk",
            "name": "Design HFBK",
            "url": "https://design.hfbk-hamburg.de/", 
            "description": "One-page hub for HFBK Hamburg's Design Department",
            "year": 2019,
            "type": "Educational Platform",
            "work": "Concept & Development",
            "client": "HFBK Hamburg",
            "credits": {
                "agency": ["HFBK Hamburg"],
                "personal": ["Robert Burtzik"]
            },
            "copy": {
                "intro": "During my Master's studies at HFBK Hamburg, I reconceptualized the Design Department's web presence as a single-page platform, creating an accessible hub for current and prospective students.",
                "sections": [
                    {
                        "title": "Academic Information Architecture",
                        "content": "The one-page concept streamlines access to essential information, making it easier for students and prospective applicants to find relevant content about the design program. The simplified structure supports quick navigation while maintaining comprehensive content coverage.",
                        "bulletPoints": [
                            "Intuitive single-page navigation system",
                            "Optimized content structure for academic information"
                        ]
                    },
                    {
                        "title": "Student-Centered Design",
                        "content": "The platform was developed with a focus on student needs, providing easy access to course information, resources, and department updates. The design emphasizes clarity and efficiency while reflecting the creative nature of the design department.",
                        "bulletPoints": [
                            "User-focused content organization",
                            "Integration of departmental updates and resources"
                        ]
                    }
                ],
                "conclusion": "The redesigned platform successfully serves as a central information hub for the Design Department, improving accessibility and user experience for the HFBK community."
            },
            media: [
                {
                    type: 'image',
                    publicId: 'design-hfbk/vxldea9na9rau278amvf',
                    url: `${CLOUDINARY_URL}/f_auto,q_auto/design-hfbk/vxldea9na9rau278amvf`,
                    alt: 'design-hfbk - Add description'
                },
                {
                    type: 'image',
                    publicId: 'design-hfbk/zdolqy5bzbl9hw8wydyp',
                    url: `${CLOUDINARY_URL}/f_auto,q_auto/design-hfbk/zdolqy5bzbl9hw8wydyp`,
                    alt: 'design-hfbk - Add description'
                },
                {
                    type: 'image',
                    publicId: 'design-hfbk/bbji4xqcia9krfxqaoy0',
                    url: `${CLOUDINARY_URL}/f_auto,q_auto/design-hfbk/bbji4xqcia9krfxqaoy0`,
                    alt: 'design-hfbk - Add description'
                },
                {
                    type: 'image',
                    publicId: 'design-hfbk/sd88ypwugtd7o86gop2o',
                    url: `${CLOUDINARY_URL}/f_auto,q_auto/design-hfbk/sd88ypwugtd7o86gop2o`,
                    alt: 'design-hfbk - Add description'
                },
                {
                    type: 'image',
                    publicId: 'design-hfbk/cw29pqip8zulpat5za7b',
                    url: `${CLOUDINARY_URL}/f_auto,q_auto/design-hfbk/cw29pqip8zulpat5za7b`,
                    alt: 'design-hfbk - Add description'
                },
                {
                    type: 'image',
                    publicId: 'design-hfbk/yv1ptujfbga62lr81slv',
                    url: `${CLOUDINARY_URL}/f_auto,q_auto/design-hfbk/yv1ptujfbga62lr81slv`,
                    alt: 'design-hfbk - Add description'
                },
            ],
        },
        {
            "id": "umlaut",
            "name": "Umlaut Digital Platform",
            "url": "umlaut.com", // Please provide if available
            "description": "Innovative interface design for management consultancy",
            "year": 2018, // Please provide the year
            "type": "Corporate Platform",
            "work": "Interface Design Lead",
            "client": "Umlaut",
            "credits": {
                "agency": ["Fork Unstable Media GmbH"],
                "personal": ["Robert Burtzik"]
            },
            "copy": {
                "intro": "Leading a small team, I directed the interface design for Umlaut's digital platform, implementing their new corporate identity while introducing innovative interaction patterns. The project was completed before Umlaut's acquisition by Accenture.",
                "sections": [
                    {
                        "title": "Identity Integration",
                        "content": "The interface design seamlessly incorporated Umlaut's new corporate identity while pushing boundaries in digital interaction. We created a distinctive digital presence that reflected the company's innovative approach to consulting.",
                        "bulletPoints": [
                            "Integration of new corporate identity elements",
                            "Development of unique interactive components"
                        ]
                    },
                    {
                        "title": "Interactive Innovation",
                        "content": "Our team developed novel interaction patterns that enhanced user engagement while maintaining professional clarity. The design balanced innovative features with intuitive usability, creating a memorable yet efficient user experience.",
                        "bulletPoints": [
                            "Custom interaction patterns and animations",
                            "Responsive design system for multiple devices"
                        ]
                    }
                ],
                "conclusion": "The platform successfully embodied Umlaut's forward-thinking approach through innovative interface design and interaction patterns, setting new standards for corporate digital presence."
            },
            media: [
                {
                    type: 'image',
                    publicId: 'umlaut/e7wttrxi948yupa0tfdi',
                    url: `${CLOUDINARY_URL}/f_auto,q_auto/umlaut/e7wttrxi948yupa0tfdi`,
                    alt: 'umlaut - Add description'
                },
            ],
        },
        {
            "id": "scamming-interfaces",
            "name": "Scamming Interfaces",
            "url": "https://www--scam.me",
            "description": "Master's thesis on the evolution and mechanisms of digital scams",
            "year": 2017, // Please provide the year
            "type": "Academic Research",
            "work": "Master's Thesis",
            "client": "HFBK Hamburg",
            "credits": {
                "agency": ["me"],
                "personal": ["Robert Burtzik"]
            },
            "copy": {
                "intro": "Scamming Interfaces is a comprehensive research thesis examining the historical development, current strategies, and future trajectories of digital scams and deception. The work analyzes how scammers exploit contemporary social, political, and economic contexts to create credible narratives.",
                "sections": [
                    {
                        "title": "Digital Deception Analysis",
                        "content": "The research investigates how scammers leverage political instability and cultural stereotypes to craft compelling narratives. It examines the intersection of comedy, magical realism, and digital communication in modern scamming techniques, particularly focusing on email-based fraud schemes.",
                        "bulletPoints": [
                            "Analysis of scam narrative structures and psychological tactics",
                            "Investigation of cultural and colonial influences in digital fraud"
                        ]
                    },
                    {
                        "title": "Alternative Reality Construction",
                        "content": "The thesis explores how scammers create alternative realities by exploiting Eurocentric perspectives and colonial histories. It examines the construction of solidarity and promise in scam narratives, revealing how these elements contribute to the effectiveness of digital deception.",
                        "bulletPoints": [
                            "Examination of reality construction in digital scams",
                            "Analysis of cultural and historical exploitation in fraud narratives"
                        ]
                    }
                ],
                "conclusion": "This research provides crucial insights into the mechanisms of digital deception, highlighting how scammers adapt to and exploit contemporary social and technological contexts to create convincing fraudulent narratives."
            },
            media: [
                {
                    type: 'image',
                    publicId: 'scamming-interfaces/tjab0jqtf4n3unvbqmvf',
                    url: `${CLOUDINARY_URL}/f_auto,q_auto/scamming-interfaces/tjab0jqtf4n3unvbqmvf`,
                    alt: 'scamming-interfaces - Add description'
                },
                {
                    type: 'image',
                    publicId: 'scamming-interfaces/skgr1qf3m76ubybl39vk',
                    url: `${CLOUDINARY_URL}/f_auto,q_auto/scamming-interfaces/skgr1qf3m76ubybl39vk`,
                    alt: 'scamming-interfaces - Add description'
                },
                {
                    type: 'image',
                    publicId: 'scamming-interfaces/cmfywhcjjheubmbgzrkg',
                    url: `${CLOUDINARY_URL}/f_auto,q_auto/scamming-interfaces/cmfywhcjjheubmbgzrkg`,
                    alt: 'scamming-interfaces - Add description'
                },
                {
                    type: 'image',
                    publicId: 'scamming-interfaces/wo7yecfwakghxzewxzkf',
                    url: `${CLOUDINARY_URL}/f_auto,q_auto/scamming-interfaces/wo7yecfwakghxzewxzkf`,
                    alt: 'scamming-interfaces - Add description'
                },
                {
                    type: 'image',
                    publicId: 'scamming-interfaces/jjfxk3xssjdy2hqmhdcc',
                    url: `${CLOUDINARY_URL}/f_auto,q_auto/scamming-interfaces/jjfxk3xssjdy2hqmhdcc`,
                    alt: 'scamming-interfaces - Add description'
                },
                {
                    type: 'video',
                    publicId: 'scamming-interfaces/xdqvpob5femud4nidn8i',
                    url: `${CLOUDINARY_URL_VIDEO}/f_auto:video,q_auto/v1/scamming-interfaces/xdqvpob5femud4nidn8i`
            
                },
            ],
        }
];