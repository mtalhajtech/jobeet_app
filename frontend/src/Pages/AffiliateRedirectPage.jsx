import React, { useContext } from 'react';
import Header from '../Componenets/Header/Header';
import {Container,Row} from 'react-bootstrap'
import AuthContext from '../AuthProvider/AuthProvider';
import { useEffect } from 'react';
function AffiliateRedirectPage(props) {
    const {refreshAuthToken} = useContext(AuthContext)


    useEffect(()=>{


        refreshAuthToken()


    },[])

    return (

        <div>
            <Header />
            <Container>
           <Row className='justify-content-md-center'>
           <h3 className="text-center">
            <b>Your affiliate account has been created</b>
        </h3>

        <p>Thank you! You will receive an email with your affiliate token as soon as your account will be activated.</p>
           </Row>
       
        
            </Container>
        
        </div>
        
    );
}

export default AffiliateRedirectPage;