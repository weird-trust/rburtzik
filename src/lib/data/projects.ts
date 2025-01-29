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
                publicId: 'haus-der-kunst/vkm0zyqctjphmbt1ci5h',
                url: `${CLOUDINARY_URL}/f_auto,q_auto:good,w_auto,dpr_auto,c_fill,g_auto/haus-der-kunst/vkm0zyqctjphmbt1ci5h`,
                alt: 'haus-der-kunst - Add description'
            },
            {
                type: 'image',
                publicId: 'haus-der-kunst/qc3bt3vl72b4zsrjj3hz',
                url: `${CLOUDINARY_URL}/f_auto,q_auto/haus-der-kunst/qc3bt3vl72b4zsrjj3hz`,
                alt: 'haus-der-kunst - Add description'
            },
            {
                type: 'video',
                publicId: 'haus-der-kunst/smnhjfq0krismh6kk4lr',
                url: `${CLOUDINARY_URL_VIDEO}/f_auto:video,q_auto/v1/haus-der-kunst/smnhjfq0krismh6kk4lr`
        
            },
        ],
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
            id: 'scamming-interfaces',
            name: 'Scamming Interfaces',
            url: 'https://scamminginterfaces.com',
            description: 'Thesis',
            year: 2017,
            type: 'ART',
            work: 'Website Development',
            client: 'ME',
            credits: {
                agency: ['HFBK Hamburg'],
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