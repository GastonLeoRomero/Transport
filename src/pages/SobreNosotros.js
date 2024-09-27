import React from "react";
import "../styles/components/pages/Sobre-nosotros.css";

const SobreNosotros = (props) => {
  const juan = "images/images/nosotros/nosotros1.jpg";
  return (
    <main className="holder">
      <div className="historia">
        <h2>Historia</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi velit,
          a nesciunt nostrum repudiandae quaerat ratione ut nisi fugiat debitis
          commodi maiores. Fugiat nulla iure accusantium ipsam rem provident
          dolores.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi velit,
          a nesciunt nostrum repudiandae quaerat ratione ut nisi fugiat debitis
          commodi maiores. Fugiat nulla iure accusantium ipsam rem provident
          dolores.
        </p>
      </div>
      <div className="staff">
        <h2>Staff</h2>
        <div className="personas">
          <div className="persona">
            <img src={juan} alt="Juan Gomez" />
            <h5>Juan Gomez</h5>
            <h6>Gerente General</h6>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
              velit, a nesciunt nostrum repudiandae quaerat ratione ut nisi
              fugiat debitis commodi maiores. Fugiat nulla iure accusantium
              ipsam rem provident dolores.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default SobreNosotros;
