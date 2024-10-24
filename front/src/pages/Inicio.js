import React from "react";
import "../styles/components/pages/Inicio.css";

const Inicio = (props) => {
  const avion = "images/images/home/img01.jpg";
  return (
    <main className="holder">
      <div className="homeimg">
        <img src={avion} alt="Avion" />
      </div>
      <div className="columnas">
        <div className="bienvenidos">
          <h2>Bienvenidos</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
            velit, a nesciunt nostrum repudiandae quaerat ratione ut nisi fugiat
            debitis commodi maiores. Fugiat nulla iure accusantium ipsam rem
            provident dolores.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
            velit, a nesciunt nostrum repudiandae quaerat ratione ut nisi fugiat
            debitis commodi maiores. Fugiat nulla iure accusantium ipsam rem
            provident dolores.
          </p>
        </div>
        <div className="testimonios">
          <h2>Testimonios</h2>
          <div className="testimonio">
            <span class="cita">Simplemente Excelente</span>
            <span class="autor">Juan Perez -zapatos.com</span>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Inicio;
