<script>
    import img1 from '$lib/assests/1.jpg'
    import img2 from '$lib/assests/2.jpg'
    import img3 from '$lib/assests/3.jpg'
</script>

<h2>My Projects</h2>


<div class="card-container">
    <div class="card">
        <img src={img1} alt="Card 1">
        <p>FlexCard 1</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>
    <div class="card">
        <img src={img2}
             alt="Card 2">
        <p>FlexCard 2</p>
        <p>Nullam non est cursus, finibus velit sed, vestibulum ante.</p>
    </div>
    <div class="card">
        <img src={img3}
             alt="Card 3">
        <p>FlexCard 3</p>
        <p>Pellentesque accumsan est eget metus volutpat, ac blandit quam consequat.</p>
    </div>
</div>
<style>

    h2 {
        margin-top: 30px;
    }


    p {
        margin-top: 10px;
    }


    .card-container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 80%;
        margin: auto;
        height: 400px;
    }

    .card {
        background-color: #fff;
        border-radius: 10px;
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
        padding: 20px;
        text-align: center;
        width: 25%;
        max-height: 80%;
    }
    .card img {
        width: auto;
        height: 100px;
        border-radius: 5px;
        margin-bottom: 10px;
    }

    .card p {
        font-size: 18px;
        line-height: 1.5;
        color: #666;
    }

</style>