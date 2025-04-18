import amazon_logo from "/src/assets/amazon.png";
import flipcart_logo from "/src/assets/flipkart.png";
import shoes_image from "/src/assets/shoes-image.png";

const HeroSection = () => {
  return (
    <main className="hero container ">
      <div className="hero-content">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>
          YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR
          SHOES.
        </p>
        <div className="hero-button">
          <button className="website-buttons">Shop</button>
          <button className="website-buttons">Category</button>
        </div>
        <div className="shopping-icons">
          <p>Also Abaiable on</p>
          <div className="brank-icons">
            <img src={flipcart_logo} alt="flipcart" className="images" />
            <img src={amazon_logo} alt="amazon" className="images" />
          </div>
        </div>
      </div>
      <div className="hero-image">
        <img src={shoes_image} alt="Shoes" className="shoes-img" />
      </div>
    </main>
  );
};

export default HeroSection;
