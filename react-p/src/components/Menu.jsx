import "../css/menu.css";
import React,{useContext,useState} from "react";
import MenuContext from "../contexts/menu";
import MenuOption from "./MenuOption";
import Appcontext from "../contexts/app";
import appcontext from "../contexts/app";
import idiomas from "../idiomas";


function Menu() {
    const appcontext = useContext(Appcontext);
    const [options,setOptions] = useState({
        casa: true,
        sobremi: false,
        habilidades: false,
        informacion: false,
        proyectos: false,
        contacto: false
    })
    const [set,setState] = useState("state");
    
    return ( 
        <MenuContext.Provider value={{setOption}} >
            <div className="menu-paszamine">
                <MenuOption name={idiomas.casa[appcontext.idioma]} pageName="casa" selected={options.casa}/>
                <MenuOption name={idiomas.sobremi[appcontext.idioma]} pageName="sobremi" selected={options.sobremi}/>
                <MenuOption name={idiomas.habilidades[appcontext.idioma]} pageName="habilidades" selected={options.habilidades}/>
                <MenuOption name={idiomas.informacion[appcontext.idioma]} pageName="informacion" selected={options.informacion}/>
                <MenuOption name={idiomas.proyectos[appcontext.idioma]} pageName="proyectos" selected={options.proyectos}/>
                <MenuOption name={idiomas.contacto[appcontext.idioma]} pageName="contacto" selected={options.contacto}/>
            </div>
            <div style={{top: `${(window.innerHeight / 2)- 60}px`,left: `${window.innerWidth - 46}px`}} className="menu-navarelaghzan">
                <div style={{backgroundColor: options.casa === true ? "#00337C" : "transparent" , border: `solid 3px ${options.casa === true ? "#00337C" : "#2f67b5" }`}}></div>
                <div style={{backgroundColor: options.sobremi === true ? "#00337C" : "transparent" , border: `solid 3px ${options.sobremi === true ? "#00337C" : "#2f67b5" }`}}></div>
                <div style={{backgroundColor: options.habilidades === true ? "#00337C" : "transparent" , border: `solid 3px ${options.habilidades === true ? "#00337C" : "#2f67b5" }`}}></div>
                <div style={{backgroundColor: options.informacion === true ? "#00337C" : "transparent" , border: `solid 3px ${options.informacion === true ? "#00337C" : "#2f67b5" }`}}></div>
                <div style={{backgroundColor: options.proyectos === true ? "#00337C" : "transparent" , border: `solid 3px ${options.proyectos === true ? "#00337C" : "#2f67b5" }`}}></div>
                <div style={{backgroundColor: options.contacto === true ? "#00337C" : "transparent" , border: `solid 3px ${options.contacto === true ? "#00337C" : "#2f67b5" }`}}></div>
            </div>    
        </MenuContext.Provider>
     );


     function setOption(name) {
        options.casa = false;
        options.sobremi = false;
        options.habilidades = false;
        options.informacion = false;
        options.proyectos = false;
        options.contacto = false;
        options[name] = true;
        appcontext.pageChenged(name);
        setState(name);
    }
}

export default Menu;