import "bootstrap/dist/css/bootstrap.min.css"
import { useState } from "react"
import {
  Table,
  Button,
  Container,
  Modal,
  ModalHeader,
  ModalBody,
  FormGroup,
  ModalFooter
} from 'reactstrap'

const App = () => {

  const [data, setData] = useState([
    {id: 1, nombre: "Lionel", apellido: "Messi"},
    {id: 2, nombre: "Diego", apellido: "Maradona"},
  ])

  const [modalInsertar, setModalInsertar] = useState(false)
  const [modalEditar, setModalEditar] = useState(false)
  const [form, setForm] = useState({
    id: '',
    nombre: '',
    apellido: ''
  })

  const {id, nombre, apellido} = form

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
      
      {/* MODAL EDITAR */}
      <Modal isOpen={modalEditar}>
        <ModalHeader>
          <div><h3>Editar Registro</h3></div>
        </ModalHeader>

        <ModalBody>
          <FormGroup>
            <label>Id:</label>

            <input 
              className="form-control"
              readOnly
              type="text"
              value={id}
            />
          </FormGroup>

          <FormGroup>
            <label>Nombre:</label>
            <input
              className="form-control"
              name="nombre"
              type="text"
              value={nombre}
            />
          </FormGroup>
          
          <FormGroup>
            <label>apellido:</label>
            <input
              className="form-control"
              name="apellido"
              type="text"
              value={apellido}
            />
          </FormGroup>
        </ModalBody>

        <ModalFooter>
          <Button
            color="primary"
          >
            Editar
          </Button>

          <Button
            color="danger"
          >
            Cancelar
          </Button>
        </ModalFooter>
      </Modal>


      {/* MODAL INSERTAR */}
      <Modal isOpen={modalInsertar}>
        <ModalHeader>
          <div><h3>Insertar Registro</h3></div>
        </ModalHeader>

        <ModalBody>
          <FormGroup>
            <label>Id:</label>
            <input
              className="form-control"
              readOnly
              type="text"
              value={data.length + 1}
            />
          </FormGroup>

          <FormGroup>
            <label>Nombre:</label>
            <input
              className="form-control"
              name="nombre"
              type="text"
            />
          </FormGroup>

          <FormGroup>
            <label>Apellido:</label>
            <input
              className="form-control"
              name="apellido"
              type="text"
            />
          </FormGroup>
        </ModalBody>

        <ModalFooter>
          <Button
            color="primary"
          >
            Insertar
          </Button>

          <Button
            color="danger"
          >
            Cancelar
          </Button>
        </ModalFooter>
      </Modal>

    </>
  )
}

export default App
