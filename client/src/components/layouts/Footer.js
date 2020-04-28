import React from 'react'
import styled from 'styled-components'

const Footer = () => {
    return (
        <MainFooter>
            <span style={{color: "white", top: "1.5rem", left:"3rem", position:"relative"}}>
                &copy;{new Date().getFullYear()} All Rights Reserved. Marko Vitkovic
            </span>
        </MainFooter>
    )
}

export default Footer

const MainFooter = styled.footer`
    background: var(--dark-grad);
    height: 4rem;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
`
