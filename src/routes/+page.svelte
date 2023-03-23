<script lang="ts">
    import Comic from "../lib/Comic.svelte";
    import Projects from "../lib/Projects.svelte";
    import About from "$lib/About.svelte";

    import { onMount } from "svelte";

    interface Comic {
        title: string;
        year: string;
        month: string;
        day: string;
        alt: string;
        img: string;
    }

    let title: string = '';
    let year: string = '';
    let month: string = '';
    let day: string = '';
    let alt: string = '';
    let img: string = '';

    async function comicDownload(): Promise<void> {
        try {
            const params = new URLSearchParams({ email: "n.noskov@innopolis.university" });
            const response = await fetch(`https://fwd.innopolis.app/api/hw2?${params}`);

            const num: number = await response.json() as number;
            console.log("res:", num);

            const paramsID = new URLSearchParams(num.toString());
            const data: Comic = await fetch(`https://getxkcd.vercel.app/api/comic?${paramsID}`).then((response) => response.json());
            title = data.title;
            year = data.year;
            month = data.month;
            day = data.day;
            alt = data.alt;
            img = data.img;
        } catch (error: unknown) {
            console.error(error);
        }
    }

    onMount(async (): Promise<void> => {
        await comicDownload();
    });
</script>

<html>
<body>
<div id="main_block">
    <Comic
            {title}
            {year}
            {month}
            {day}
            {comicDownload}
            imgParams={{ src: img, alt: alt, comicImg: img }}
    />
    <Projects/>
</div>
</body>
<style>
    body {
        margin: 0;
        padding: 0;
        font-family: Arial, sans-serif;
    }

    h1 {
        text-align: left;
        color: mintcream;
        margin: 0;
        padding: 8px 0;
    }

    h2 {
        margin-top: 30px;
    }


    p {
        margin-top: 10px;
    }


    #main_block{
        width: 80%;
        margin:  auto;
        vertical-align: middle;
    }





</style>
</html>
