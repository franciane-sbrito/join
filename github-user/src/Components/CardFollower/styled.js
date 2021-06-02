import styled from 'styled-components'

export const ContainerCard = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr;
align-items: center;
width: 100vw;
background-color: #292929;
border-bottom: 2px solid #393939;
color: #fff;
height: 13vh;
`
export const Image = styled.img`
border: 3px solid #fff;
border-radius: 50%;
width: 17.6vw;
margin-left: 12px;
`
export const Title = styled.span`
font-family: Helvetica, sans-serif, Arial;
font-weight: bold;
font-size: 16px;
line-height: 19px;
padding-left: 30px;
width: 55.5vw;
`
export const Circle = styled.div`
width: 10px;
height: 5.5vh;
border-radius: 0 100px 100px 0;
background-color: #FFCE00;
`
export const ContainerTitle = styled.div`
display: flex;
align-items: center;
max-height: 5.5vh;
`