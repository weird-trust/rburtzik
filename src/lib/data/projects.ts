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
                publicId: 'hdk/hkvii0ollxpa5jnmbnvd',
                url: `${CLOUDINARY_URL}/f_auto,q_auto/v1/hdk/hkvii0ollxpa5jnmbnvd`,
                alt: 'Haus der Kunst Website Preview'
            },
            {
                type: 'video',
                publicId: 'hdk/e8hwxwh34horkxnyl0jc',
                url: `${CLOUDINARY_URL_VIDEO}/f_auto:video,q_auto/v1/hdk/e8hwxwh34horkxnyl0jc`,
            }
        ]
    },    
        { 
            id: 'hilti',
            name: 'Hilti',
            url: 'https://www.hilti.group', 
            description: 'Corporate website for Hilti Group',
            year: 2020,
            type: 'Corporate',
            work: 'Website Development',
            client: 'Hilti Group',
            credits: {
                agency: ['Fork Unstable Media GmbH'],
                personal: ['Robert Burtzik'],
            },
            copy: {
                intro: 'In der Entwicklung der variablen Schrift für das Haus der Kunst München wurden fortschrittliche Techniken sowohl im Frontend als auch in der Typografie eingesetzt. Insbesondere der Einsatz des Intersection Observers zur Steuerung der Schriftachsen und die Anpassung der Masterebenen in Glyphs zur Einführung von zwei Arten von Kerning-Extremas waren entscheidende Schritte in diesem Prozess.',
                sections: [
                    {
                        title: 'Frontend-Technik: Intersection Observer',
                        content: 'Der Intersection Observer wurde verwendet, um dynamisch auf die Sichtbarkeitseigenschaften von Schrift-Elementen auf der Webseite zu reagieren. Diese Technik ermöglicht es, Animationen und Achsenänderungen effizient zu steuern, basierend auf der Position des Elements im Sichtfeld des Nutzers.',
                        bulletPoints: [
                            'Achsensteuerung: Durch den Intersection Observer können die Schriftachsen in Echtzeit angepasst werden, wenn der Benutzer durch die Seite scrollt.',
                            'Performance-Vorteile: Der Intersection Observer ist ressourcenschonend, da er die Berechnungen für Sichtbarkeitsänderungen im Hintergrund durchführt.'
                        ]
                    },
                    {
                        title: 'Typografie-Technik: Kerning-Extremas in Glyphs',
                        content: 'In der Schriftgestaltungssoftware Glyphs wurden die Masterebenen so angepasst, dass zwei Arten von Kerning-Extremas auf den Achsen existieren.',
                        bulletPoints: [
                            'Kerning-Extremas: Zwei unterschiedliche Kerning-Extremas ermöglichen eine präzisere Kontrolle über den Abstand zwischen den Glyphen.',
                            'Interpolation und Anpassung: Die Anpassung der Masterebenen erlaubt eine nahtlose Interpolation zwischen den verschiedenen Kerning-Extremas.'
                        ]
                    }
                ],
                conclusion: 'Die Kombination aus dem Einsatz des Intersection Observers im Frontend und der Anpassung der Masterebenen in Glyphs stellt eine innovative Herangehensweise dar, um variable Schriftarten dynamisch und ansprechend zu gestalten.'
            },
            media: [
                {
                    type: 'image',
                    publicId: 'cld-sample-3',
                    url: `${CLOUDINARY_URL}/f_auto,q_auto/cld-sample-3`,
                    alt: 'Haus der Kunst Website Preview'
                },
                {
                    type: 'video',
                    publicId: 'hdk/e8hwxwh34horkxnyl0jc',
                    url: `${CLOUDINARY_URL}/video/upload/f_auto:video,q_auto/v1/hdk/e8hwxwh34horkxnyl0jc`,
                }
            ]
        },
        {
            id: 'shoah-memorial-frankfurt',
            name: 'Shoah Memorial Frankfurt',
            url: 'https://memorial.frankfurt',
            description: 'Digital memorial platform for Holocaust remembrance in Frankfurt',
            year: 2023,
            type: 'Memorial',
            work: 'Web Development & Digital Experience',
            client: 'Stadt Frankfurt',
            credits: {
                agency: ['Agency Name'],
                personal: ['Robert Burtzik']
            },
            copy: {
                intro: '',
                sections: [],
                conclusion: ''
            },
            media: [
                {
                    type: 'image',
                    publicId: 'shoah-memorial/eqag2ffiu9a7aszilhys',
                    url: `${CLOUDINARY_URL}/f_auto,q_auto/shoah-memorial/eqag2ffiu9a7aszilhys`,
                    alt: 'Haus der Kunst Website Preview'
                },
            ]
        },
        {
            id: 'internet-changed-my-life',
            name: 'Internet Changed My Life',
            url: 'https://www.internetchangedmy.life/',
            description: 'Interactive documentary platform about internet influence',
            year: 2023,
            type: 'Interactive Documentary',
            work: 'Web Development',
            client: 'Production Company',
            credits: {
                agency: ['Agency Name'],
                personal: ['Robert Burtzik']
            },
            copy: {
                intro: '',
                sections: [],
                conclusion: ''
            },
            media: [
                {
                    type: 'image',
                    publicId: 'internetchangedmylife/ccda4ngizcgyufptbxcy',
                    url: `${CLOUDINARY_URL}/t_standard_transform/internetchangedmylife/ccda4ngizcgyufptbxcy`,
                    alt: 'Internet Changed My Life Website Preview'
                },
            ]
        },
        {
            id: 'futurium-audioguide',
            name: 'Futurium Audioguide',
            url: 'https://futurium.de',
            description: 'Digital audio guide system for Futurium Berlin',
            year: 2023,
            type: 'Museum',
            work: 'Audio Guide Development',
            client: 'Futurium',
            credits: {
                agency: ['Agency Name'],
                personal: ['Robert Burtzik']
            },
            copy: {
                intro: '',
                sections: [],
                conclusion: ''
            },
            media: []
        },
        {
            id: 'kampnagel',
            name: 'Kampnagel',
            url: 'https://kampnagel.de',
            description: 'Digital platform for Kampnagel cultural center',
            year: 2023,
            type: 'Cultural Institution',
            work: 'Website Development',
            client: 'Kampnagel',
            credits: {
                agency: ['Agency Name'],
                personal: ['Robert Burtzik']
            },
            copy: {
                intro: '',
                sections: [],
                conclusion: ''
            },
            media: [
                {
                    type: 'image',
                    publicId: 'kampnagel/yduojbihike5gymbwlsi',
                    url: `${CLOUDINARY_URL}/f_webp/q_auto:best/dpr_auto/kampnagel/yduojbihike5gymbwlsi`,
                    alt: 'Kampnagel Website Preview'
                },
            ]
        },
        {
            id: 'magenta-musik',
            name: 'Magenta Musik',
            url: 'https://magenta-musik.de',
            description: 'Music streaming platform for Deutsche Telekom',
            year: 2023,
            type: 'Streaming Platform',
            work: 'Platform Development',
            client: 'Deutsche Telekom',
            credits: {
                agency: ['Agency Name'],
                personal: ['Robert Burtzik']
            },
            copy: {
                intro: '',
                sections: [],
                conclusion: ''
            },
            media: []
        },
        {
            id: 'vw-id3-training',
            name: 'Volkswagen ID3 Training Platform',
            url: 'https://id3-training.volkswagen.de',
            description: 'Digital training platform for VW ID.3',
            year: 2023,
            type: 'E-Learning',
            work: 'Training Platform Development',
            client: 'Volkswagen',
            credits: {
                agency: ['Agency Name'],
                personal: ['Robert Burtzik']
            },
            copy: {
                intro: '',
                sections: [],
                conclusion: ''
            },
            media: []
        },
        {
            id: 'design-hfbk',
            name: 'Design HFBK',
            url: 'https://design.hfbk.net',
            description: 'Website for HFBK Design Department',
            year: 2023,
            type: 'Education',
            work: 'Website Development',
            client: 'HFBK Hamburg',
            credits: {
                agency: ['Agency Name'],
                personal: ['Robert Burtzik']
            },
            copy: {
                intro: '',
                sections: [],
                conclusion: ''
            },
            media: []
        },
        {
            id: 'umlaut',
            name: 'Umlaut',
            url: 'https://umlaut.com',
            description: 'Corporate website for Umlaut consulting',
            year: 2023,
            type: 'Corporate',
            work: 'Website Development',
            client: 'Umlaut',
            credits: {
                agency: ['Agency Name'],
                personal: ['Robert Burtzik']
            },
            copy: {
                intro: '',
                sections: [],
                conclusion: ''
            },
            media: []
        }
];