import React,{useState,useEffect} from 'react'

const initialForm ={
    name:"",
    constellation:"",
    id:null
}

const CrudForm = ({createData,updateData,datatoEdit,setDataToEdit}) => {

    const [form,setForm] = useState(initialForm)

    useEffect(()=>{
        if(datatoEdit){
            setForm(datatoEdit)
        }else{
            setForm(initialForm)
        }
    },[datatoEdit])

    const handleChange = (e) =>{
        setForm({
            ...form,
            [e.target.name]:e.target.value
        })
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        if(!form.name || !form.constellation){
            alert("Datos incompletos")
            return
        }
        if(form.id === null){
            createData(form)
        }else{
            updateData(form)
        }

        handleReset()
    }

    const handleReset = (e) =>{
        setForm(initialForm)
        setDataToEdit(null)
    }

  return (
    <div>
        <h3>{datatoEdit?"Editar":"Agregar"}</h3>
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                name="name" 
                placeholder='Nombre' 
                onChange={handleChange} 
                value={form.name}
            />
            <input 
                type="text" 
                name="constellation" 
                placeholder='Constelacion' 
                onChange={handleChange} 
                value={form.constellation}
            />
            <input type='submit' value="Enviar"/>
            <input type='reset' value="Limpiar" onClick={handleReset}/>
        </form>
    </div>
  )
}

export default CrudForm