const header = <h1 className="title"> Witaj na stronce!</h1>;

const classBig = "big";

const handleClick = () => alert("klik klik");
const main = (
  <div>
    <h1 onClick={handleClick} className="red">
      Pierwszy artykuł na jakże świetnej stronce
    </h1>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. A beatae vero
      corrupti obcaecati distinctio sapiente minus molestiae illum consequuntur
      odio, voluptates totam excepturi, dolore dolorum? Praesentium cum
      asperiores eum natus debitis ab nesciunt officia veritatis at, quaerat
      dolores blanditiis impedit a ut minima! Aliquam totam ipsa, in tenetur
      corrupti voluptatem optio ullam odio? Deserunt molestias ducimus fugiat
      alias debitis. Modi placeat fugiat minima vitae. Ab corrupti suscipit
      autem quam asperiores nesciunt vero sed, earum repudiandae possimus iure
      praesentium magni modi aperiam optio est perspiciatis dolorem qui atque
      facere molestias nisi ipsum accusamus? At distinctio, est commodi tempora
      consequuntur necessitatibus hic?
    </p>
  </div>
);

const footerText = "Taka sobie stopka";

const footer = (
  <footer className={classBig}>
    <p>{footerText}</p>
  </footer>
);

const app = [header, main, footer];

ReactDOM.render(app, document.getElementById("root"));
