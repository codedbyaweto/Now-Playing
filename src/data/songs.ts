export type Song = {
    id: number;
    title: string;
    artist: string;
    genre: string;
    duration: string;
    trackNumber: string;
    image: string;
    audio: string
}

export const initialSongs: Song[] = [
    {
        id: 1,
        title: "After Life",
        artist: "Evanescence",
        genre: "Electronic",
        duration: "3:47",
        trackNumber: "01",
        image: "/images/afterlife .jpg",
        audio: "/audio/pere.mp3"
    },
    {
        id: 2,
        title: "Monster",
        artist: "'Kanye-West', 'Jay-Z', 'Rick-Ross'",
        genre: "Hip-Hop",
        duration: "4:54",
        trackNumber: "02",
        image: "/images/monster.png",
        audio: "/audio/Kanye West, Rick Ross, JAY-Z, Nicki Minaj & Bon Iver - Monster (Official Music Video) [Remastered].mp3",
    },
    {
        id: 3,
        title: "Jennifer's Body",
        artist: "Ken Carson",
        genre: "YVL",
        duration: "2:59",
        trackNumber: "03",
        image: "/images/jennifers body.png",
        audio: "/audio/domartistudios-magical-wizard-school-orchestral-fantasy-488126.mp3"
    },
    {
        id: 4,
        title: "Bring Me To Life",
        artist: "Evanescence",
        genre: "Electronic",
        duration: "4:20",
        trackNumber: "04",
        image: "/images/bring me to life.jpg",
        audio: "/audio/domartistudios-magical-wizard-school-orchestral-fantasy-488126.mp3"
    },
    {
        id: 5,
        title: "Bigger Than Life",
        artist: "'Chris Brown', 'Rich Gang'",
        genre: "Hip-Hop",
        duration: "5:32",
        trackNumber: "05",
        image: "/images/Bugger than life.jpg",
        audio: "/audio/domartistudios-magical-wizard-school-orchestral-fantasy-488126.mp3"
    },
    {
        id: 6,
        title: "The Hills",
        artist: "The Weeknd",
        genre: "R&B",
        duration: "3:41",
        trackNumber: "06",
        image: "/images/the hills .jpg",
        audio: "/audio/domartistudios-magical-wizard-school-orchestral-fantasy-488126.mp3",
    },
    {
        id: 7,
        title: "The Worst",
        artist: "Jhene Aiko",
        genre: "R&B",
        duration: "3:20",
        trackNumber: "07",
        image: "/images/the worst.jpg",
        audio: "/audio/domartistudios-magical-wizard-school-orchestral-fantasy-488126.mp3",
    },
    {
        id: 8,
        title: "Pere",
        artist: "Davido",
        genre: "Afro-Beats",
        duration: "4:37",
        trackNumber: "08",
        image: "/images/Pere.jpg",
        audio: "/audio/pere.mp3"
    }
]
