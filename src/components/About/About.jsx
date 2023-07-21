import React from "react"
import styles from './About.module.css'
import {  useNavigate } from "react-router-dom"

export default function About(){
    const navigate = useNavigate();
    return (
        <div className={styles.About}>
            <div className={styles.buttonBack}>
                <button className={styles.links} onClick={()=> navigate("/home")}>Regresar a la página principal</button>
            </div>
            <br></br>
            <hr />
            <h1 className={styles.h1}> Noe Denise👩‍💻</h1>   
            <hr />
            <br />
                <div className={styles.cardAbout}>
                    <p> Soy Noe Lombardo, Desarrolladora Web FullStack con marcada orientación FrontEnd.  
                        Nací el 29/05/87 en Bs.As, Argentina, donde vivo actualmente. Soy abogada de profesión en ejercicio, egresada de la Universidad Nacional de La Matanza, migrando al mundo dev.
                    <br /> 
                        ¿Porqué el cambio? Considero que todo en la vida son ciclos, que no hay que estancarse en algo, por mucho que nos haya costado conseguirlo, y que si encontramos (de nuevo) esa chispa que nos entusiasma a levantarnos cada lunes por la mañana, es por ahí.
                    <br /> 
                        Y aunque parezca que nada tiene que ver con nada, todo tiene que ver con todo. Soy abogada especializada en géreno y llegué al mundo dev por un programa exclusivo para mujeres, con el fin de acortar la brecha existente en el sector. </p>
                </div>

                <br />
                
                <div className={styles.cardAbout}>
                    <h3 className={styles.h3}>Front End Skills</h3>
                    <p> Dentro de mi perfil Front End, me especializo en el desarrollo UI</p>
                    <p><i class="fa-brands fa-html5"></i> <strong>HTML</strong> Maquetación. Aplicación de etiquetas, atributos y enlaces. Creación de listas, tablas y formularios. API's: Canvas, Geolocalización, Web Storage. IndexDB, Web sockets, Web worker, WebGL, Drag and Drop. </p>
                    <p><i class="fa-brands fa-css3-alt"></i> <strong>CSS</strong> Manejo de selectores, utilización de paleta de colores. Posicionamiento, box model, CCS Grid y Flexbox. Responsive design. </p>
                    <p><i class="fa-brands fa-js-square"></i> <strong>JS</strong> JavaScript Avanzado.  Tipo de datos. Estructuras de control, funciones y procedimientos. POO. Pilas y Colas, listas. Coleciones: conjuntos, mapas y tablas hash. BOM. DOM. Eventos. Estructura de datos. Algoritmos</p>
                    {/* //TODO Arreglar */}
                    <p><strong>TS</strong> Variables y tipos de datos. Funciones. POO. Abstracción, encapsulamiento, herencia. Polimorfismo, Modularidad.</p>
                    <p><strong>JSON</strong> Tipo de datos. </p>
                </div>

                <br />
                
                <div className={styles.cardAbout}>     
                    <h3 className={styles.h3}> BackEnd Skills</h3>  
                    <p> Node Js - Promises - Web Server - Advance Promises - Express - Testing</p>
                </div>

                <br />

                <div className={styles.cardAbout}>     
                    <h3 className={styles.h3}> DataBase</h3>  
                    <p> PostreSQL | SQL: ORM - Autenticación</p>
                </div>

                <br />
                
                <div className={styles.cardAbout}>     
                    <h3 className={styles.h3}> Control de Versiones</h3>  
                    <p>GIT | GITHUB</p>
                </div>

                <br />
                <div className={styles.cardAbout}>      
                    <h3 className={styles.h3}> Frameworks </h3>  
                    <p><i class="fa-brands fa-angular"></i> <strong>ANGULAR</strong> </p>
                    {/* Listas, Formularios, Observables, NGModules, Dependency Injection, Routing y navegación, Consumo de Apis. Angular Material */}
                    <p><i class="fa-brands fa-react"></i> <strong>REACT</strong></p>  
                    <p> <strong>BOOSTRAP</strong></p>  
                    <p><strong>ANGULAR MATERIAL</strong></p>  
                </div>

                <br />
                
                <div className={styles.cardAbout}>

                    <h3 className={styles.h3}>Formación Full Stack Developer</h3>
                    <p><strong>Henry</strong></p>
                    <p> Egresé en mayo de 2023 del Bootcamp Soy Henry. Esta app, Rick & Morty, fue elegida por mis compañeros de cohorte como una de las mejores por su UI/UX.</p>
                    <p>
                    <strong>M1:</strong>Introduccioón a CSS - JavaScript Avanzado I y II - Estructura de datos I, II y III - Algoritmos I y II
                    <br />
                    <strong>M2 FrontEnd:</strong> Dom Avanzado -  CSS avanzado - ES6 selectores - AJAX - Módulos y Bundlers - React - Redux 
                    <br/>
                    <strong>M3 BackEnd: </strong>Node Js - Promises - Web Server - Advance Promises - Express - Testing
                    <br />
                    <strong>M4 Base de Datos:</strong>DBMS - SQL - ORM - Autenticación </p>
                    
                    <br />
                    <strong>Programa Samsung DesArrolladoras</strong> 
                    <p> Impartido por la platforma BeJob del grupo Santillana 
                        Samsung DesArrolladoras es un programa diseñado con la finalidad de formar a mujeres en el desarrollo web para así acortar la brecha de género que existe en el sector. 
                        El programa consta de tres niveles:</p>
                    <p><strong>Nivel 1: </strong>Instroducción al desarrollo web, con una carga horaria de 140 hs. A este nivel accedieron 1000 inscriptas elegidas por su perfil luego de aplicar a un proceso de selección.
                    <br />
                    <strong>Nivel 2:</strong> Desarrollo Front End, con una carga horaria de 140 hs. Luego de cursar y aprobar el nivel 1, las 700 mejores cursantes accedieron al Nivel 2. 
                    <br />
                    <strong>Nivel 3:</strong> Desarrollo FullStack. El mismo tuvo una carga horaria de 170 hs. Luego de cursar y superar con éxito los niveles 1 y 2 respectivamente, las 300 mejores cursantes accedieron al nivel final.
                    </p>
                    <p>El programa se desarrolló entre junio de 2021 y junio de 2022.Tras haber superado exitosamente los tres niveles, cuento con la <a href="https://github.com/noedenisel/LeWagon/blob/main/Certificados%20BJNoelia%20Denise%20Lombardo.report.pdf"><strong>Certificación de  la Universidad de Alcalá.</strong></a> </p>
                    <br/>
                    
                    <p> <strong>Desarrollo de aplicaciones Tizen para SmartTV</strong> </p>
                    <p>Formación de Samsung Dev Spain e impartido por la platforma BeJob del grupo Santillana. Marzo 2022</p>
                    
                    <p><strong>Otras formaciones</strong></p>
                    <p>Participé de la primer edición del Women's Coding Day de Le Wagon en Argentina.</p>
                    
                </div>

                <br />
            
                <div className={styles.cardAbout}>   
                    <h3 className={styles.h3}> More about me </h3>  
                    <p> Soy mamá de una niña con quién tengo la virtud de compartir muchas de mis pasiones, y que me desafía a mantenerme en constante movimiento y aprendizaje.
                    <br />
                    Amante de los deportes, practico yoga, natación, acrobacia en tela y trapecio y ski.
                    <br />
                    Como abogada me desempeño en el aréa penal, especiálizandome en temáticas de género. Actualmente formo parte del equipo interdisciplinario del Centro de Acceso a la Justicia (CaJUS) dependiente del Ministerio de Justicia y DDHH de la Provincia de Bs.As, en el CaJUS descentralizado de Ezeiza.
                    <br />
                    También me dedico al ejercicio independiente de la profesión, en las áreas de derecho penal y derecho de familia principalmente.
                    <br />
                    Así mismo, poseo especializaciones tematicas de Género, derecho de familia y en defensa al consumidor.
                    <br />
                    Estudiante empedernida, soy Técnica Superior en Investigaciones Periciales (carrera que no ejerzo desde 2012) y en el año 2019 por falta de tiempos, dejé en pausa la tecnicatura superior en periodismo con orientación en deportes en dónde fuí la primer mujer y primer alumna de 1er año en ganar el Concurso Nuevas tintas con mi artículo sobre la última final del munidal de fútbol femenino. Nuevas tintas es un concurso que realizaba la Escuela Superior de Periodismo del Círculo de Periodistas.</p>
                    <strong>Idiomas</strong>
                    <br />
                    Inglés B1
                    <br />
                    Italiano A2
                    <br />
                    Arabe estándar A2
                    <br />
                </div>

                <br />

                <div>
                    <ul className={styles.list}>
                        <li className={styles.li}><a href="https://www.linkedin.com/in/noedenisel"><i class="fa-brands fa-linkedin"></i></a></li>
                        <li className={styles.li}><a href="https://www.github.com/noedenisel"><i class="fa-brands fa-github"></i></a></li>
                    </ul>
                </div>

                <div className={styles.buttonBack}>
                    <button className={styles.links} onClick={()=> navigate("/home")}>Regresar a la página principal</button>
                </div>
        
        </div>
    )
}