function importAll(r) {
    return r.keys().map(r);
}

const images = importAll(require.context('../assets/img/moviePoster/', false, /\.(png|jpe?g|svg)$/));

export const movieList = [
    {
        title: "Five Nights At Freddy's",
        trailerUrl: "https://www.youtube.com/embed/9fJtM5z0g7M",
        description: "Can you survive five nights?\n\nThe terrifying horror game phenomenon becomes a blood-chilling cinematic event, as Blumhouse— the producer of M3GAN, The Black Phone and The Invisible Man— brings Five Nights at Freddy’s to the big screen.\n\nThe film follows a troubled security guard as he begins working at Freddy Fazbear’s Pizza. While spending his first night on the job, he realizes the night shift at Freddy’s won’t be so easy to make it through."
    },
    {
        title: "Barbie",
        trailerUrl: "https://www.youtube.com/embed/pBk4NYhWNMM",
        description: "To live in Barbie Land is to be a perfect being in a perfect place.  Unless you have a full-on existential crisis.  Or you’re a Ken"
    },
    {
        title: "Hidden Strike",
        trailerUrl: "https://www.youtube.com/embed/qNyzyzbX0wo",
        description: "HIDDEN STRIKE Trailer (2023) Jackie Chan, John Cena, Action Movie HD",
    },
    {
        title: "My Adventures With Superman",
        trailerUrl: "https://www.youtube.com/embed/l0c-esgUaHY",
        description: "My Adventures with Superman is a serialized coming-of-age story catching up with twenty-somethings Clark Kent (voiced by Jack Quaid), the bright and driven Lois Lane (voiced by Alice Lee), and their best friend Jimmy Olsen as they begin to discover who they are and everything they can accomplish together as an investigative reporting team at the Daily Planet.",
    },
    {
        title: "Dumb Money",
        trailerUrl: "https://www.youtube.com/embed/PPEqKTM8aFw",
        description: "Based on the insane true story of the GameStop short squeeze, Dumb Money centers on the everyday investors who flipped the script on the rich – with aftershocks that reverberated around the world. In the middle of it all is regular guy Keith Gill (Paul Dano), who sinks his life savings into a single stock: GameStop, the mall videogame retailer, which he’s convinced is undervalued. If he’s wrong, he’ll lose everything. But if he’s right, and if he can convince other ordinary Joes to join the movement, then they’ll rocket GameStop to the moon – leaving billionaires holding the bag."
    }
]


export const moviePoster = [
    {
        posterUrl: images[0],
        title: "Avatar",
        description: "Jake Sully and Ney'tiri have formed a family and are doing everything to stay together. However, they must leave their home and explore the regions of Pandora. When an ancient threat resurfaces, Jake must fight a difficult war against the humans.",
        genre: ["action", "family", "sci-fi"]
    },
    {
        posterUrl: images[1],
        title: "Creed",
        description: "Still dominating the boxing world, Adonis Creed is thriving in his career and family life. When Damian, a childhood friend and former boxing prodigy resurfaces after serving time in prison, he's eager to prove that he deserves his shot in the ring.",
        genre: ["action", "drama", "thriller"]
    },
    {
        posterUrl: images[2],
        title: "Evil Dead Rise",
        description: "A reunion between two estranged sisters gets cut short by the rise of flesh-possessing demons, thrusting them into a primal battle for survival as they face the most nightmarish version of family imaginable.",
        genre: ["action", "drama", "thriller", "horror"]
    },
    {
        posterUrl: images[3],
        title: "Aquaman",
        description: "Aquaman forges an uneasy alliance with an unlikely ally in a bid to save Atlantis and the rest of the planet.",
        genre: ["action", "comedy", "family"]
    },
    {
        posterUrl: images[4],
        title: "Don't Look Up",
        description: "Two low-level astronomers must go on a giant media tour to warn mankind of an approaching comet that will destroy planet Earth.",
        genre: ["drama", "thriller", "comedy"]
    },
    {
        posterUrl: images[5],
        title: "Dune",
        description: "Paul Atreides arrives on Arrakis after his father accepts the stewardship of the dangerous planet. However, chaos ensues after a betrayal as forces clash to control melange, a precious resource.",
        genre: ["action", "drama", "sci-fi"]
    },
    {
        posterUrl: images[6],
        title: "Dungeons & Dragons",
        description: "A charming thief and a band f unlikely adventurers embark on an epic quest to retrieve a long lost relic, but their charming adventure goes dangerously awry when they run afoul of the wrong people.",
        genre: ["action", "comedy", "fantasy", "family"]
    },
    {
        posterUrl: images[7],
        title: "Gran Turismo",
        description: "A player wins a series of Nissan-sponsored video game competitions through his gaming skills and becomes a real-life professional race car driver.",
        genre: ["action", "racing"]
    },
    {
        posterUrl: images[8],
        title: "Guardians Of The Galaxy",
        description: "Still reeling from the loss of Gamora, Peter Quill must rally his team to defend the universe and protect one of their own. If the mission is not completely successful, it could possibly lead to the end of the Guardians as we know them.",
        genre: ["action", "comedy", "sci-fi", "family"]
    },
    {
        posterUrl: images[9],
        title: "House Of Gucci",
        description: "When Patrizia Reggiani, an outsider from humble beginnings, marries into the Gucci family, her unbridled ambition begins to unravel the family legacy and triggers a reckless spiral of betrayal, decadence, revenge -- and ultimately murder.",
        genre: ["drama"]
    },
    {
        posterUrl: images[10],
        title: "Indiana Jones",
        description: "Daredevil archaeologist Indiana Jones races against time to retrieve a legendary dial that can change the course of history. Accompanied by his goddaughter, he soon finds himself squaring off against Jürgen Voller, a former Nazi who works for NASA.",
        genre: ["action", "thriller"]
    },
    {
        posterUrl: images[11],
        title: "John Wick",
        description: "With the price on his head ever increasing, legendary hit man John Wick takes his fight against the High Table global as he seeks out the most powerful players in the underworld, from New York to Paris to Japan to Berlin.",
        genre: ["action", "drama"]
    },
    {
        posterUrl: images[12],
        title: "Nobody",
        description: "Hutch Mansell fails to defend himself or his family when two thieves break into his suburban home one night. The aftermath of the incident soon strikes a match to his long-simmering rage.",
        genre: ["action", "drama"]
    },
    {
        posterUrl: images[13],
        title: "Oppenheimer",
        description: "During World War II, Lt. Gen. Leslie Groves Jr. appoints physicist J. Robert Oppenheimer to work on the top-secret Manhattan Project. Oppenheimer and a team of scientists spend years developing and designing the atomic bomb.",
        genre: ["drama"]
    },
    {
        posterUrl: images[14],
        title: "Scream",
        description: "Twenty-five years after a streak of brutal murders shocked the quiet town of Woodsboro, Calif., a new killer dons the Ghostface mask and begins targeting a group of teenagers to resurrect secrets from the town's deadly past.",
        genre: ["action", "drama", "thriller", "horror"]
    },
    {
        posterUrl: images[15],
        title: "Shazam",
        description: "Shazam and his superpowered foster siblings band together to face the Daughters of Atlas, who have stolen the Wizard's staff and plan to use it for their own ends.",
        genre: ["action", "family", "sci-fi"]
    },
    {
        posterUrl: images[16],
        title: "Space Jam",
        description: "LeBron James and his son, Dom, find themselves trapped in a virtual world. In order to get out, LeBron must team up with the Looney Tunes Squad and defeat an algorithm in a basketball match.",
        genre: ["action", "family", "sci-fi"]
    },
    {
        posterUrl: images[17],
        title: "Spider-Man",
        description: "Miles Morales embarks on a thrilling adventure through the multiverse and joins forces with Gwen Stacy and Spider-People to fight a supervillain.",
        genre: ["action", "comedy", "family"]
    },
    {
        posterUrl: images[18],
        title: "Matrix",
        description: "Thomas Anderson's seemingly ordinary life ends when he accepts Morpheus's offer, only to wake up to a new, more secure and much more dangerous Matrix.",
        genre: ["action", "drama", "sci-fi"]
    },
    {
        posterUrl: images[19],
        title: "Venom",
        description: "Eddie Brock tries to revive his failing career by interviewing a serial killer, Cletus Kasady, who is on death row. When Carnage gains control over Cletus's body, he escapes from the prison.",
        genre: ["action", "drama", "sci-fi", "comedy", "thriller"]
    }
]