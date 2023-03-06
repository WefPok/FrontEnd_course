interface Comic {
    num: number;
    img: string;
    title: string;
    alt: string;
    year: number;
    month: number;
    day: number;
}

async function comicDownload(): Promise<void> {
    try {
        const params = new URLSearchParams({email: "n.noskov@innopolis.university"});
        const response = await fetch(`https://fwd.innopolis.app/api/hw2?${params}`);

        const num = await response.json() as number;
        console.log("res:", num);

        const paramsID = new URLSearchParams(num.toString());
        const data = await fetch(`https://getxkcd.vercel.app/api/comic?${paramsID}`).then((response) => response.json()) as Comic;

        // Display the comic on the page
        const comicImg = document.getElementById("image") as HTMLImageElement;
        const title = document.getElementById("text1") as HTMLParagraphElement;
        const date = document.getElementById("text2") as HTMLParagraphElement;

        comicImg.src = data.img;
        title.innerText = data.title;
        date.innerText = new Date(data.year, data.month - 1, data.day).toLocaleDateString();
        comicImg.alt = data.alt;
    } catch (error) {
        console.error(error);
    }
}

const button = document.getElementById('button-comic') as HTMLButtonElement;
button.addEventListener('click', comicDownload);
comicDownload();