import { styled } from "styled-components";

const LeftSide =(props)=>{
    return<Container>
        <Artcard>Card</Artcard>
    </Container>
}
const Container = styled.div`
grid-area: Leftside;
`
const Artcard = styled.div`
text-align: center;
overflow: hidden;
margin-bottom: 8px;
background-color: #fff;
border-radius: 5px;
transition: box-shadow 83ms;
position: relative;
border: none;
box-shadow: 0 0 0 1px rgba(0 0 0 /15%), 0 0 0 rgba(0 0 0/20%);
`


export default LeftSide;