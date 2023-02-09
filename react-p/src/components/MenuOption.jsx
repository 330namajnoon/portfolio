import { useContext } from "react";
import MenuContext from "../contexts/menu";
function MenuOption(attributes) {
    const menucontext = useContext(MenuContext);
    return ( 
        <div className="menuoption-paszamine">
            <div style={{backgroundColor: attributes.selected === true ? "#00337C" : "transparent"}}></div>
            <a href="javascript: ;"style={{color: attributes.selected == true ? "#00337C" : "#2f67b5bb"}} onClick={()=>{menucontext.setOption(attributes.pageName)}}>{attributes.name}</a>
        </div>

     );
}

export default MenuOption;
