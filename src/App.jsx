import "bootstrap/dist/css/bootstrap.min.css"
import { useState } from "react"
import {
  Table,
  Button,
  Container
} from 'reactstrap'

const App = () => {

  const [data, setData] = useState([
    {id: 1, nombre: "Lionel", apellido: "Messi"},
    {id: 2, nombre: "Diego", apellido: "Maradona"},
  ])

  return (
    <>
      <Container>
        <br />
        <Button color="success">Crear</Button>
        <br />
        <br />

        <Table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>Opciones</th>
            </tr>
          </thead>

          <tbody>
            {
              data.map( ({id, nombre, apellido}) => (
                <tr key={id}>
                  <td>{id}</td>
                  <td>{nombre}</td>
                  <td>{apellido}</td>
                  <td>
                    <Button
                      color="primary"
                      className="mx-1"
                    >
                      Editar
                    </Button>

                    <Button
                      color="danger"
                      className="mx-1"
                    >
                      Eliminar
                    </Button>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </Table>

      </Container>
    </>
  )
}

export default App
