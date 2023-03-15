<script lang="ts">
    import Comic from "./lib/Comic.svelte";
    import Header from "./lib/Header.svelte";
    import Projects from "./lib/Projects.svelte";
    import Footer from "./lib/Footer.svelte";
</script>
<html>
<body>
    <Header/>
    <div id="main_block">

        <h2>About Me</h2>
        <p>
            I am a computer Vision Developer who specializes on OpenCV and Machine Learning.
            My main work is to create a real-time servers for web applications and update them when detecting events from
            cams.

        </p>
        <Comic/>
        <Projects/>
    </div>
    <Footer/>
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
    header{

        height: 50px;
        background-color: #333;
    }





</style>
</html>
