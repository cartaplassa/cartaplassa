import dorkerboxImage from '@assets/projects/dorkerbox.png'
import pleenumImage from '@assets/projects/pleenum.png'
import sopgImage1 from '@assets/projects/sopg-1.png'
import sopgImage2 from '@assets/projects/sopg-2.png'
import sopgImage3 from '@assets/projects/sopg-3.png'

export type ProjectType = {
    title: string;
    desc: string;
    features: string[];
    img: string | string[];
    links: {
        source: string;
        live?: string;
    }
}

const projects: ProjectType[] = [
    {
        title: 'SOPG',
        desc: 'Password generator that combines readability of random words combination with resistance towards dictionary attacks that of random char string.',
        features: ['React', 'Typescript', 'Chakra UI', 'PWA'],
        img: [sopgImage1, sopgImage2, sopgImage3],
        links: {
            source: "https://github.com/cartaplassa/sopg-v3",
            live: "https://cartaplassa.github.io/sopg-v3/"
        }
    },
    {
        title: 'Dorkerbox',
        desc: 'A simple extension to add and reuse frequently used dorks with one click.',
        features: ['React', 'Typescript', 'Chrome', 'Firefox'],
        img: dorkerboxImage,
        links: {
            source: "https://github.com/cartaplassa/dorkerbox",
            live: "https://addons.mozilla.org/en-US/firefox/addon/dorkerbox/"
        }
    },
    {
        title: 'Pleenum',
        desc: 'Telegram chat-managing bot, that helps you create subgroups inside chats with main feature of letting you mention all members of subgroup with a single command.',
        features: ['Python', 'Telegram'],
        img: pleenumImage,
        links: {
            source: "https://github.com/cartaplassa/pleenum"
        }
    }
]

export default projects
