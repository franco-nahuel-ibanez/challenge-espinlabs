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

  const mostrarModalEditar = (dato) => {
    setForm(dato)
    setModalEditar(true)
  }

  const cerrarModalEditar = () => {
    setModalEditar(false)
  }

  const mostrarModalInsertar = () => {
    setModalInsertar(true)
  }

  const cerrarModalInsertar = () => {
    setModalInsertar(false)
  }

  const editar = (dato) => {
    const nuevo = data.map( registro => registro.id === dato.id ? registro = dato : registro )
    setData(nuevo)
    setModalEditar(false)
  }

  const eliminar = (id) => {
    let confirm = window.confirm(`Estas seguro de eliminar el registro con ${id}`)
    if(confirm){
      const nuevo = data.filter( registro => registro.id !== id ) 
      setData( nuevo )
    }
  }

  const insertar = () => {
    if(nombre.trim() !== '' && apellido.trim() !== ''){
      const nuevo = {
        id: data.length + 1,
        nombre,
        apellido
      }
      setData([...data, nuevo])
      setModalInsertar(false)
    }
  }

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  return (
    <>
      <Container>
        <br />
        <Button 
          color="success" 
          onClick={ mostrarModalInsertar } 
        >Crear</Button>
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
              data.map( (dato) => (
                <tr key={dato.id}>
                  <td>{dato.id}</td>
                  <td>{dato.nombre}</td>
                  <td>{dato.apellido}</td>
                  <td>
                    <Button
                      color="primary"
                      className="mx-1"
                      onClick={() => mostrarModalEditar(dato)}
                    >
                      Editar
                    </Button>

                    <Button
                      color="danger"
                      className="mx-1"
                      onClick={() => eliminar(dato.id)}
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
              onChange={handleChange}
              value={nombre}
            />
          </FormGroup>
          
          <FormGroup>
            <label>apellido:</label>
            <input
              className="form-control"
              name="apellido"
              type="text"
              onChange={handleChange}
              value={apellido}
            />
          </FormGroup>
        </ModalBody>

        <ModalFooter>
          <Button
            color="primary"
            onClick={() => editar(form)}
          >
            Editar
          </Button>

          <Button
            color="danger"
            onClick={cerrarModalEditar}
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
              onChange={handleChange}
            />
          </FormGroup>

          <FormGroup>
            <label>Apellido:</label>
            <input
              className="form-control"
              name="apellido"
              type="text"
              onChange={handleChange}
            />
          </FormGroup>
        </ModalBody>

        <ModalFooter>
          <Button
            color="primary"
            onClick={insertar}
          >
            Insertar
          </Button>

          <Button
            color="danger"
            onClick={cerrarModalInsertar}
          >
            Cancelar
          </Button>
        </ModalFooter>
      </Modal>

    </>
  )
}

export default App
