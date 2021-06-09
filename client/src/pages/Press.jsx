import React from "react";
import PressArticle from "./../components/PressArticle"

function Press() {
  return (
    <div>
      <section>
      <h1>They talk about us in the press !</h1>
        <PressArticle
          link="https://www.forbes.com/sites/sboyd/2018/05/31/your-super/#5ae9ed526c26"
          img="https://res.cloudinary.com/debzbm2xr/image/upload/v1623257191/YourSuper/Press/Forbes_opdgdd.png"
          brand="Forbes"
          preview="Beyond Meat Investor Leads Your Super's $10 Million Series B Funding"
        />
        <PressArticle
          link="https://www.builtinla.com/companies/best-places-to-work-los_angeles-2020"
          img="https://res.cloudinary.com/debzbm2xr/image/upload/v1623257191/YourSuper/Press/LA_lerzcv.png"
          brand="Built In LA"
          preview="50 Best Paying Companies in Los Angeles | 2020"
        />
        <PressArticle
          link="https://www.forbes.com/sites/sboyd/2018/05/31/your-super/#5ae9ed526c26"
          img="https://res.cloudinary.com/debzbm2xr/image/upload/v1623257191/YourSuper/Press/30_o1cqul.png"
          brand="Forbes"
          preview="Kristel De Groot in Forbes 30 Under 30"
        />
      </section>
      <section>
      <h1>You might have seen us on TV</h1>
      <iframe width="300" src="https://www.youtube.com/embed/ayqiN4Db_JU" title="YouTube video player"></iframe>
      <iframe width="300" src="https://www.youtube.com/embed/uLSJ4nYMIVM" title="YouTube video player"></iframe>
      <iframe width="300" src="https://www.youtube.com/embed/NcKTxGr_Tg0" title="YouTube video player"></iframe>
      </section>
    </div>
  );
}

export default Press;
