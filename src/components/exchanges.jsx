import axios from 'axios'
import server from '../index'
import React, {useEffect, useState} from 'react'
import Loader from '../components/loader'
import { Container, HStack, Text, Image, VStack, Heading } from '@chakra-ui/react'

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
        <Container maxWidth={'1300px'}>
        <>
            {loader ? <Loader></Loader> : (<>
            <HStack wrap={'wrap'} justifyContent={'center'}>
                {exchanges.map((i)=>(
                    <>
                        <a href={i.url} target={'_blank'}>           
                            <VStack w={'44'} shadow={'lg'} borderRadius={'lg'} p={'8'} m={'4'} transition={'all 0.2s'}
                            css={{
                                '&:hover':{
                                    transform:'scale(1.1)'
                                }
                            }}>
                                <Image src={i.image} w={'10'} h={'10'} objectFit={'contain'} alt={'Exchanges'}></Image>

                                <Heading noOfLines={'1'} size={'md'}>
                                    {i.trust_score_rank}
                                </Heading>

                                <Text noOfLines={1}>
                                    {i.name}
                                </Text>
                            </VStack>
                        </a>
                       
                    </>
                    


                  
                ))}
                
            </HStack>

            </>) }
        </>
      </Container>
        
        
    )
    
}

export default Exchanges