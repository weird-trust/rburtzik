import type { Imprint } from '$lib/types';

export const imprint: Imprint[] = [
    {
        "id": "imprint",
        "name": "Imprint / Impressum",
        "copy": {
            "legal": {
                "responsible": "Robert Burtzik",
                "address": {
                    "street": "Please provide your street",
                    "city": "Please provide your city",
                    "postal_code": "Please provide postal code",
                    "country": "Germany"
                },
                "contact": {
                    "email": "Please provide your contact email",
                    "phone": "Please provide if you want to include phone"
                }
            },
            "sections": [
                {
                    "title": "Information according to § 5 TMG",
                    "content": "The content and works on these pages created by the site operator are subject to German copyright law. Duplication, processing, distribution, or any form of commercialization of such material beyond the scope of the copyright law shall require the prior written consent of its respective author or creator."
                },
                {
                    "title": "Liability for Content",
                    "content": "As a service provider, I am responsible for my own content on these pages in accordance with § 7 paragraph 1 TMG. However, according to §§ 8 to 10 TMG, I am not obligated to monitor transmitted or stored third-party information or to investigate circumstances that indicate illegal activity."
                },
                {
                    "title": "Liability for Links",
                    "content": "This website contains links to external third-party websites, over whose content I have no influence. Therefore, I cannot assume any liability for these external contents. The respective provider or operator of the linked pages is always responsible for their content."
                },
                {
                    "title": "Copyright",
                    "content": "The contents and works on these pages created by the site operators are subject to German copyright law. The reproduction, editing, distribution and any kind of exploitation outside the limits of copyright require the written consent of the respective author or creator. Downloads and copies of these pages are only permitted for private, non-commercial use."
                }
            ],
            "dataSecurity": {
                "title": "Data Protection",
                "content": "The use of contact details published within the framework of the imprint obligation for sending unsolicited advertising and information material is hereby expressly prohibited. The site operators expressly reserve the right to take legal action in the event of unsolicited sending of advertising information, such as spam emails."
            }
        }
    }
]