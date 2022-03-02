const element = (
  <div className="bg-container">
    <div>
      <h1 className="heading">Congratulations</h1>
      <div className="congrats-card ">
        <img src="https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png " />
        <p className="card-profile-user">Kiran V</p>
        <p className="card-profile-content">
          Vishnu Institute of Computer Education and Technology, Bhimavaram
        </p>
        <img src="https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png" />
      </div>
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
