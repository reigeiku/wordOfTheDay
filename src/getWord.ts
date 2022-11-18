require("dotenv").config();
const { API_KEY } = process.env;

type Entry = {
    partOfSpeech: string;
    catergory?: string;
    meaning: string[];
};

export type WordData = {
    word: string;
    entries: Entry[];
    audio?: string[];
};

export const getWord = async (): Promise<WordData> => {
    const url = `https://api.wordnik.com/v4/words.json/wordOfTheDay?api_key=${API_KEY}`;

    const resp = await fetch(url, {
        headers: {
            Accept: "application/json",
        },
    });

    const data = await resp.json();

    const entries: Entry[] = data.definitions.map((definition) => {
        return {
            partOfSpeech: definition.partOfSpeech,
            meaning: definition.text,
        };
    });

    const wordData: WordData = {
        word: data.word,
        entries,
    };

    return wordData;
};
