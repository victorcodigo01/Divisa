import { useEffect, useState } from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function Madrid () {
  const [usuarios, setUsuario] = useState([]);

    useEffect(() => {
        //
        
          fetch(
            `https://jsonplaceholder.typicode.com/users`,
            {
                method: "GET",
                headers: {
                    "Accept": "application/json",
                },
                

            }
          )
            .then((res) => res.json()) // entonces cuando me llegue le pasa a json (res, nombre q quieras)
            .then((data) => {
              // la recibe y puedes poner el nombre que quieras (data)
              // las then sabe que va a recibir un valor pero le pones el nombre que quieras, como declarar una variable pero que contiene ya informacion
              //segundo .then es una concatenacion en tuberia, el segundo .then recibe el objeto final, los 2 then juntos conformarn la concatenacion en tuberia y el ultimo lo recibe, asi tienes acceso a la info
                setUsuario(data);
              console.log(data);
            });
        
    }, []);

    return (
    <>
    <ul>
    {usuarios.map(function (usuario) {
                // hace lo mismo este map que el primero. el forEach recorre un array pero la diferencia con el map es que el puede transformar y el forEach simplemente recorre
                return (
                  <li key={usuario.id}>
                    {usuario.name}

                  
                  </li>
                );
              })}
    </ul>
        
    </>

    ); 
}

export default Madrid;