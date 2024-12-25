const CLOUDINARY_URL = "https://res.cloudinary.com/dk2ozewvs/image/upload";
const projects = [
  {
    id: "haus-der-kunst",
    name: "Haus der Kunst München",
    url: "https://www.hausderkunst.de",
    description: "Digital platform for the museum Haus der Kunst in Munich",
    year: 2021,
    type: "Museum",
    work: "Website Development",
    client: "Haus der Kunst",
    credits: {
      agency: ["Fork Unstable Media GmbH"],
      personal: ["Robert Burtzik"]
    },
    copy: {
      intro: "In der Entwicklung der variablen Schrift für das Haus der Kunst München wurden fortschrittliche Techniken sowohl im Frontend als auch in der Typografie eingesetzt. Insbesondere der Einsatz des Intersection Observers zur Steuerung der Schriftachsen und die Anpassung der Masterebenen in Glyphs zur Einführung von zwei Arten von Kerning-Extremas waren entscheidende Schritte in diesem Prozess.",
      sections: [
        {
          title: "Frontend-Technik: Intersection Observer",
          content: "Der Intersection Observer wurde verwendet, um dynamisch auf die Sichtbarkeitseigenschaften von Schrift-Elementen auf der Webseite zu reagieren. Diese Technik ermöglicht es, Animationen und Achsenänderungen effizient zu steuern, basierend auf der Position des Elements im Sichtfeld des Nutzers.",
          bulletPoints: [
            "Achsensteuerung: Durch den Intersection Observer können die Schriftachsen in Echtzeit angepasst werden, wenn der Benutzer durch die Seite scrollt.",
            "Performance-Vorteile: Der Intersection Observer ist ressourcenschonend, da er die Berechnungen für Sichtbarkeitsänderungen im Hintergrund durchführt."
          ]
        },
        {
          title: "Typografie-Technik: Kerning-Extremas in Glyphs",
          content: "In der Schriftgestaltungssoftware Glyphs wurden die Masterebenen so angepasst, dass zwei Arten von Kerning-Extremas auf den Achsen existieren.",
          bulletPoints: [
            "Kerning-Extremas: Zwei unterschiedliche Kerning-Extremas ermöglichen eine präzisere Kontrolle über den Abstand zwischen den Glyphen.",
            "Interpolation und Anpassung: Die Anpassung der Masterebenen erlaubt eine nahtlose Interpolation zwischen den verschiedenen Kerning-Extremas."
          ]
        }
      ],
      conclusion: "Die Kombination aus dem Einsatz des Intersection Observers im Frontend und der Anpassung der Masterebenen in Glyphs stellt eine innovative Herangehensweise dar, um variable Schriftarten dynamisch und ansprechend zu gestalten."
    },
    media: [
      {
        type: "image",
        publicId: "cld-sample-3",
        url: `${CLOUDINARY_URL}/f_auto,q_auto/cld-sample-3`,
        alt: "Haus der Kunst Website Preview"
      },
      {
        type: "video",
        publicId: "projects/haus-der-kunst/demo",
        url: `${CLOUDINARY_URL}/videos/projects/haus-der-kunst/demo`
      }
    ]
  },
  {
    id: "hilti",
    name: "Hilti",
    url: "https://www.hilti.group",
    description: "Corporate website for Hilti Group",
    year: 2020,
    type: "Corporate",
    work: "Website Development",
    client: "Hilti Group",
    credits: {
      agency: ["Fork Unstable Media GmbH"],
      personal: ["Robert Burtzik"]
    }
  }
];
export {
  projects as p
};
