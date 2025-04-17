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
            <img
              src="/src/assets/flipkart.png"
              alt="flipcart"
              className="images"
            />
            <img src="/src/assets/amazon.png" alt="amazon" className="images" />
          </div>
        </div>
      </div>
      <div className="hero-image">
        <img
          src="/src/assets/shoes-image.png"
          alt="Shoes"
          className="shoes-img"
        />
      </div>
    </main>
  );
};

export default HeroSection;
