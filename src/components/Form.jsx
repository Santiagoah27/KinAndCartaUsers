import styled from "@emotion/styled"
import Error from "./Error"
import useSelectContinents from "../hooks/useSelectContinents"
import { continents } from "../data/continents"
import { useState } from "react"

const InputSubmit = styled.input`
  background-color: #6f719c;
  border: none;
  width: 100%;
  padding: 10px;
  color: #FFF;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 20px;
  border-radius: 5px;
  transition: background-color .3s ease;
  margin-top: 30px;

  &:hover {
    background-color: #444454;
    cursor: pointer;
  }
`

const Label = styled.label`
   color: #FFF;
   display: block;
   font-family: 'lato', sans-serif;
   font-size: 24px;
   font-weight: 700;
   margin: 15px 0;
`

const InputText = styled.input`
   width: 93%;
   font-size: 18px;
   padding: 14px;
   border-radius: 10px;
`
const Form = ({setSearchUserId}) => {

    const [ error, setError ] = useState(false)
    const [ continent, SelectContinents ] = useSelectContinents('Seleccione el continente', continents)
    const [ id, setId] = useState("")

    const handleSubmit = e => {
        e.preventDefault()
        if([continent].includes('')){
            setError(true)
            return;
        }
        setError(false)
        setSearchUserId({
            continent
        })
    }

  return (
    <>
    {error && <Error>Es necesario el continente</Error>}
     <form
        onSubmit={handleSubmit}
     >
        <SelectContinents />
        <Label>Escriba el Id del usuario</Label>
        <InputText
         type="text"
         value={id}
         onChange={(e) => setId(e.target.value)}
          />
        <InputSubmit type="submit" value="Buscar" />
     </form>
    </>
  )
}

export default Form