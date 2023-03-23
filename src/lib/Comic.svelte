<script lang="ts">
    export let title: string;
    export let year: string;
    export let month: string;
    export let day: string;
    export let imgParams: {
        src: string;
        alt: string;
        comicImg: HTMLImageElement;
    };
    export let comicDownload: () => Promise<void>;
</script>

<div class="content-block">
    <h2 id="title">Free comics</h2>
    <p id="text1">{title}</p>
    <p id="text2">{new Date(year, month - 1, day).toLocaleDateString()}</p>
    <img src="{imgParams.src}" alt="{imgParams.alt}" bind:this={imgParams.comicImg} id="image" />
    <button class="cta-button" id="button-comic" on:click={comicDownload}>Learn More</button>
</div>
<style>


    h2 {
        margin-top: 30px;
    }


    p {
        margin-top: 10px;
    }




</style>
