import styled from 'styled-components'
import StarBorderIcon from '@material-ui/icons/StarBorder';

export const ContainerRepositories = styled.div`
background-color: #292929;
color: #fff;
padding: 35px 20px 33px 0;
border-bottom: 2px solid #393939;
`

export const Circle = styled.div`
width: 10px;
height: 5vh;
border-radius: 0 100px 100px 0;
background-color: #FFCE00;
`
export const ContainerTitle = styled.div`
display: flex;
align-items: center;
max-height: 12vh;
`
export const Title = styled.div`
font-size: 20px;
line-height: 24px;
font-weight: bold;
font-family: Helvetica, sans-serif, Arial;
padding-left: 16px;
`

export const Content = styled.div`
font-size: 15px;
line-height: 24px;
font-family: Helvetica, sans-serif, Arial;
padding-left: 26px;

`

export const Container = styled.div`
display: flex;
justify-content: space-between;
padding-left: 26px;
`

export const Number = styled.div`
padding: 4px 4px;

`

export const Image = styled.img`
height: 28px;
padding-top: 10px;
`

export const ContainerStar = styled.div`
display: flex;
padding: 9px 4px;
align-items: center;
`

export const StyledStarBorderIcon = styled(StarBorderIcon)`
color: #FFCE00;
`