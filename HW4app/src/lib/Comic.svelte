<script lang="ts">
    import { onMount } from "svelte";
     let title;
     let year;
     let month;
     let day;
     let alt;
     let img;

    async function comicDownload() {
        try {
            const params = new URLSearchParams({ email: "n.noskov@innopolis.university" });
            const response = await fetch(`https://fwd.innopolis.app/api/hw2?${params}`);

            const num = await response.json() as number;
            console.log("res:", num);

            const paramsID = new URLSearchParams(num.toString());
            const data = await fetch(`https://getxkcd.vercel.app/api/comic?${paramsID}`).then((response) => response.json());
            title = data.title;
            year=data.year;
            month = data.month;
            day = data.day;
            alt = data.alt;
            img = data.img;
        } catch (error) {
            console.error(error);
        }
    }

    onMount(async () => {
        await comicDownload();
    });
</script>

<div class="content-block">
    <h2 id="title">Free comics</h2>
    <p id="text1">{title}</p>
    <p id="text2">{new Date(year, month - 1, day).toLocaleDateString()}</p>
    <img src="{img}" alt="{alt}" id="image" />
    <button class="cta-button" id="button-comic" on:click={comicDownload}>Learn More</button>
</div>
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



    header{

        height: 50px;
        background-color: #333;
    }

</style>
