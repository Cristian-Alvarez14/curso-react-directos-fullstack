import { useState } from "react"

const Formulario = () => {

    const [todo, setTodo] = useState({
        todoName:'',
        todoDescription:'',
        todoEstado:'pendiente',
        todoCheck: false
    })

    const [error, setError] = useState(false)

    const handleSubmit = e => {
        e.preventDefault();

        const {todoName ,todoDescription} = todo

        if(!todoDescription.trim() || !todoName.trim()){
            setError(true)
            // console.log("nooop está vacío");
            return ;
        }

        setError(false);
        console.log(todo)

        setError()

    };
    const handleChange = e => {
        // console.log(e.target.value)
        // console.log(e.target.name)
        console.log(e.target.type)
        // setTodo({
        //     ...todo,
        //     [e.target.name]: e.target.value
        // })
    
        const {name, value, checked , type} = e.target

        setTodo((old)=> ({
            ...old,
            [name]:
                type === "checkbox" ? checked : value,
        }))
    }


    const PintarError = () => (
        <div className="alert alert-danger">Campos obligatorios</div>
    )


  return (
    <>
        <h2>No controlado</h2>  

        {
            error ? <PintarError /> :null
        }

        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                placeholder="Ingrese Todo"
                name="todoName"
                className="form-control mb-2"
                onChange={handleChange }
                value={todo.todoName}
            />
            <textarea  
                name="todoDescription"
                className="form-control mb-2"
                placeholder="Ingrese descripción del todo"
                onChange={handleChange}
                value={todo.todoDescription}
                />
            <select
              name="todoEstado"
              className="form-control mb-2"
              onChange={handleChange}
              value={todo.todoEstado}
            >
                <option value="pendiente">Pendiente</option>
                <option value="completada">Completada</option>
            </select>

            <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value={todo.todoCheck}
                  name="todoCheck"
                  onChange={handleChange}
                  checked={todo.todoCheck}
                />
                <label
                  className="form-check-label"
                  htmlFor="flexCheckDefault">
                    Dar Prioridad
                </label>
            </div>

            <button 
                type="submit"
                className="btn btn-primary"
            >
                Agregar
            </button>

        </form>
    </>
  )
}

export default Formulario;