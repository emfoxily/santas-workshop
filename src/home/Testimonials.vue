<template>
    <div class="testimonials">
        <div class="testimonial">
            <h1>
                &#10052; &#10052; &#10052; &#10052; &#10052;
            </h1>
            <p>
                "Buddy provided excellent service and got my broken toy replaced with no problem! He was also super personable and asked me what my favorite color was right off the bat! Love the friendly service!"
            </p>
            <h3>
                Laura L.
            </h3>
        </div>
        <div class="testimonial">
            <h1>
                &#10052; &#10052; &#10052; &#10052; 
            </h1>
            <p>
                "At first, Jovie didn't strike me as nice, but she proved me wrong with excellent customer service! Definitely will go to her with any future problems! Thanks, Jovie!"
            </p>
            <h3>
                Heather R.
            </h3>
        </div>
        <div class="testimonial">
            <h1>
                &#10052; &#10052; &#10052; &#10052; &#10052;
            </h1>
            <p>
                "I don't know what kind of joke this rating system is trying to pull, but I can assure you this is NOT a five snowflake review! Every time I would select one snowflake, the system would change to five! Ming Ming was extremely rude and insisted that what I received was meant to be broken because I was halfway on the naughty list. What?! Unacceptable service!"
            </p>
            <h3>
                Geoff M.
            </h3>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Testimonials',
}
</script>

<style>
    .testimonials {
        display: flex;
        justify-content: center;
        align-content: center;
    }

    .testimonial {
        position: relative;
        background-image: url('../assets/woodbg.png');
        width: 275px;
        height: 375px;
        padding: 1em;
        color: rgb(255, 255, 255);
        margin-right: 20px;
        border: 4px solid rgb(20, 12, 8);
        box-shadow: 5px 2px 20px rgba(0, 0, 0, .7);
    }

    .testimonial p {
        font-style: italic;
    }

    .testimonial h1 {
        border-bottom: 1px solid rgba(255, 255, 255, .5);
    }

    .testimonial h3 {
        display: flex;
        width: 90%;
        justify-content: center;
        text-align: center;
        position: absolute;
        bottom: 0;
        font-family: 'Cookie', cursive;
        font-size: 30px;
    }
</style>
