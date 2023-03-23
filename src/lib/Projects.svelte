<script>
    import { base } from '$app/paths'

</script>

<h2>My Projects</h2>


<div class="card-container">
    <div class="card">
        <img src={'https://hips.hearstapps.com/hmg-prod/images/domestic-cat-lies-in-a-basket-with-a-knitted-royalty-free-image-1592337336.jpg?crop=0.668xw:1.00xh;0.247xw,0&resize=1200:*'} alt="Card 1">
        <p>FlexCard 1</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>
    <div class="card">
        <img src={'https://i.guim.co.uk/img/media/26392d05302e02f7bf4eb143bb84c8097d09144b/446_167_3683_2210/master/3683.jpg?width=1200&quality=85&auto=format&fit=max&s=a52bbe202f57ac0f5ff7f47166906403'}
             alt="Card 2">
        <p>FlexCard 2</p>
        <p>Nullam non est cursus, finibus velit sed, vestibulum ante.</p>
    </div>
    <div class="card">
        <img src={'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Cat_November_2010-1a.jpg/767px-Cat_November_2010-1a.jpg'}
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