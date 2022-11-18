import { getWord } from "./getWord";

const output = document.getElementById("output")!;

const render = async () => {
    output.innerText = JSON.stringify(await getWord(), null, 2);
};

render();
