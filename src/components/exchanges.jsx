import axios from 'axios'
import server from '../index'
import React, {useEffect, useState} from 'react'
import Loader from '../components/loader'
import { Container, HStack } from '@chakra-ui/react'
const Exchanges =()=>{
    const [loader, setLoader] = useState(true)
    const [exchanges, setExchanges] = useState([])


        useEffect(() => {
        const fetchApi = async ()=>{
            const {data} = await axios.get(`${server}/exchanges`)
            console.log(data)
            setLoader(false)
            setExchanges(data)
        }
        fetchApi()
        }, [])
        
      
    
    return(
        <Container>
            {loader ? <Loader></Loader> : (<>
            <HStack>
                {exchanges.map((i)=>(
                    <div>{i.name}</div>
                ))}
                
            </HStack>

            </>) }
        </Container>
    )
}

export default Exchanges