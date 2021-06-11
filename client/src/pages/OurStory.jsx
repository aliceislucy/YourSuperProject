import React from "react";
import "./../styles/ourStory.css";

function OurStory() {
  return (
    <div className="standard-section ourstory">
      <h1>Our story</h1>
      <div className="first">
        <h2>Michael's Story</h2>
        <article>
          Growing up as an athlete, and playing tennis at the professional
          level, I felt invincible! That changed when I was diagnosed with
          cancer at age 24. While recovering and trying to rebuild my immune
          system, I learned how important it is to fuel your body with a whole
          food diet.
        </article>
      </div>
      <div className="middle">
        <h2>Kristel's Story</h2>
        <article>
          I too grew up playing tennis at the professional level and Michael and
          I actually met on the court! We were young, healthy and happy until
          Michael’s cancer diagnosis. It reminded me of when I was 12 and the
          same thing had happened to my mom. Determined to stay positive, I
          bought all of these loose bags of maca, wheatgrass, barley grass, chia
          seeds, spirulina, lucuma, flax seeds, you name it! My cabinets were
          chaotic, as my aunt Ellen, an orthonutritionst advised me on what
          vitamins and minerals the body needs on a daily basis, and what it
          needs to heal.
        </article>
      </div>
        <img id="community" src="https://i.shgcdn.com/2877ea39-9876-4b46-8a15-ad4fcb92b7af/-/format/auto/-/preview/3000x3000/-/quality/lighter/" alt="Your Super community" />
      <div className="last">
        <h2>
          WE ARE ON A MISSION TO IMPROVE PEOPLE'S HEALTH WITH THE POWER OF SUPER
          PLANTS
        </h2>
        <p>
          Most people get sick due to poor diet and lifestyle choices - we
          created superfood and plant protein mixes - so you can improve your
          health and feel your best every day! <br /> xo Kristel & Michael
        </p>
      </div>
      <img
        src="https://i.shgcdn.com/950a2452-bf67-4e53-aa8d-14fe93926d84/-/format/auto/-/preview/3000x3000/-/quality/lighter/"
        alt="What we do differently"
      />
    </div>
  );
}

export default OurStory;
