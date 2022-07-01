let data = [
	{
		word: "food",
		phonetic: "/fuːd/",
		phonetics: [
			{
				text: "/fuːd/",
				audio:
					"https://api.dictionaryapi.dev/media/pronunciations/en/food-uk.mp3",
				sourceUrl: "https://commons.wikimedia.org/w/index.php?curid=9021827",
				license: {
					name: "BY 3.0 US",
					url: "https://creativecommons.org/licenses/by/3.0/us",
				},
			},
			{
				text: "/fud/",
				audio: "",
			},
		],
		meanings: [
			{
				partOfSpeech: "noun",
				definitions: [
					{
						definition:
							"Any solid substance that can be consumed by living organisms, especially by eating, in order to sustain life.",
						synonyms: [],
						antonyms: [],
						example: "The innkeeper brought them food and drink.",
					},
					{
						definition: "A foodstuff.",
						synonyms: ["belly-timber", "foodstuff", "provender"],
						antonyms: [],
					},
					{
						definition: "Anything that nourishes or sustains.",
						synonyms: [],
						antonyms: [],
						example: "Mozart and Bach are food for my soul.",
					},
				],
				synonyms: [
					"belly-timber",
					"chow",
					"comestible",
					"eats",
					"feed",
					"fodder",
					"foodstuffs",
					"nosh",
					"nourishment",
					"provender",
					"sustenance",
					"victuals",
					"belly-timber",
					"foodstuff",
					"provender",
				],
				antonyms: [],
			},
		],
		license: {
			name: "CC BY-SA 3.0",
			url: "https://creativecommons.org/licenses/by-sa/3.0",
		},
		sourceUrls: ["https://en.wiktionary.org/wiki/food"],
	},
];

let myData = data[0].meanings[0].definitions
let synonyms = data[0].meanings[0].synonyms

synonyms.forEach((synonym) => {
    console.log(synonym)
})
myData.forEach((defination) => {
    console.log(defination.definition)
    if (defination.example && defination.example.length !== 0) {
        console.log(defination.example)
    }
})