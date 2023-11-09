import React from 'react'

export const DashboardSection = () => {
  return (
    <section>
        <div class="main_content">
            <div class="section1">
                <div class="container1">
                    <div class="container1_1">
                        <h1>Colombia: The most beautiful place on earth</h1>
                    </div>
                    <div class="container1_2">
                        <h3>The place where your dreams become true</h3>
                    </div>
                </div>
            </div>
            <div class="section2">
                <div class="box1">
                    <img class="photos2"src="../assets/acercamiento-colorida-guacamaya-roja-selva-borrosa.jpg"/>
                    <p>Guacamaya Tricolor</p>
                    <form action="url:https://colombia.travel/es">
                        <button type='submit' class="knowM">Know more</button>
                    </form>
                </div>
                <div class="box2">
                    <img class="photos2"src="../assets/disparo-vertical-hombre-hispano-que-lleva-canasta-granos-cafe-rojo-cereza.jpg"/>
                    <p>Agricultor de café</p>
                    <form action="url:https://colombia.travel/es">
                        <button type='submit'class="knowM">Know more</button>
                    </form>
                </div>
                <div class="box3">
                    <img class="photos2" src="../assets/hermoso-lindo-mono-tamarin-roca-saguinus-pequena-especie-mono.jpg"/ >
                    <p>Tití Cabeciblanco</p>
                    <form action="url:https://colombia.travel/es">
                        <button type='submit' class="knowM">Know more</button>
                    </form>
                </div>
            </div>
            
            
        </div>
    </section>
  )
}
