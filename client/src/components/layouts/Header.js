import React from 'react'
import styled from 'styled-components'

const Header = () => {
    return (
        <MainContainer>
           <h1>Welcome to SUPERB blog!</h1>
        </MainContainer>
    )
}

export default Header;

//main container

const MainContainer = styled.header`
    background: url(../../assets/code.jpeg)no-repeat center/cover;
    height: 25rem;

    h1 {
        transform: translate(-50%, -50%);
        color: #fff;
        font-weight: 900;
        position: absolute;
        top: 25%;
        left: 50%;
    }
`;