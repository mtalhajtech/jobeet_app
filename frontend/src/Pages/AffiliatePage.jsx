import React, { useContext, useEffect } from 'react';
import Header from '../Componenets/Header/Header';
import AffiliateForm from '../Componenets/affiliateForm/affiliateForm';
import AuthContext from '../AuthProvider/AuthProvider';
function AffiliatePage(props) {
    const {refreshAuthToken} = useContext(AuthContext)
    

    useEffect(()=>{


        refreshAuthToken()


    },[])

    return (
        <div>
            <Header />
            <AffiliateForm/>
            
         
        </div>
    );
}

export default AffiliatePage;