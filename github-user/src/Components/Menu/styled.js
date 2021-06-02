import styled from 'styled-components'

export const ContainerMenu = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr;
justify-items: center;
border-radius: 15px 15px 0 0;
height: 80px;
color: #969696;
/* top: 91.5vh; */
position: fixed;
bottom: 0;
z-index: 7;
background-color: #fff;
max-width: 100vw;
width: 100vw;
`

export const Container = styled.div`
display: flex;
align-items: center;
flex-direction: column;
padding: 10px;
`


export const Image = styled.img`
width: 25px;
padding: 3px 8px;
`


export const Title = styled.div`
font-size: 15px;
line-height: 24px;
font-family: Helvetica, sans-serif, Arial;
font-weight: 400;
`
