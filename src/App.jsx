import Grid from "./components/Grid"
import { useState, useEffect } from 'react'
import styled from "@emotion/styled"
import Form from "./components/Form"
import UsersImage from './img/Users.png'

const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  width: 90%;
  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`
const Image = styled.img`
  max-width: 400px;
  width: 80%;
  margin: 100px auto 0 auto;
  margin-left: 10px;
  display: block;
`

const Heading = styled.h1`
   font-family: 'lato', sans-serif;
   color: #FFF;
   text-align: center;
   font-weight: 700;
   margin-top: 80px;
   margin-bottom: 50px;
   font-size: 34px;

   &::after {
    content: '';
    width: 100px;
    height: 6px;
    background-color: #3d516e;
    display: block;
    margin: 10px auto 0 auto;
   }
`


function App() {

  const [ searchUserId, setSearchUserId] = useState({})
  const [ resultAPI, setResultAPI ] = useState([])
  
  useEffect(() => {
    const consultAPI = async () => {
      if(Object.keys(searchUserId).length > 0){
        const { continent } = searchUserId
        const url = `https://localhost:7192/api/users/${continent}`
        const response = await fetch(url)
        const result = await response.json()
        setResultAPI(result)
      }
    }
    consultAPI()
},[searchUserId])

  return (
    <>
        <Container>
      <Image
         src={UsersImage}
         alt="imagen users"
      />
      <div>
         <Heading>Busca tus usuarios al instante</Heading>
         <Form
           setSearchUserId={setSearchUserId}
         />
      </div>
    </Container>
    <Grid resultAPI={resultAPI}/>

    </>
  )
}

export default App
