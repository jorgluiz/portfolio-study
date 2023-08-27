import { useState } from "react";

const Localization = () => {
    const [position, setPosition] = useState()

    function getLocation() {
        try {
          navigator.geolocation.getCurrentPosition(showPosition);
        } catch(err) {
          alert(`${err}`)
        }
      }
      
      function showPosition(position) {
        setPosition("Latitude: " + position.coords.latitude + " longitude: " + position.coords.longitude) 
      }

    return (
        <>
            <p>Obtenha a latitude e longitude da posição do usuário</p><br /><br />
            {/* <p>localization</p> */}

            <button  onClick={getLocation} style={{cursor: "pointer"}}>localization</button><br />
            <p>{position}</p>
        </>
    )
}

export default Localization