import { Fragment } from 'react';
import styled from 'styled-components';

const login=(props)=>{
return (
    
    <Container>
        <Nav>
            <a href='/'>
                <img src='/Images/login-logo.svg' alt=''/>
            </a>
            <div>
                <Join>Join now</Join>
                <SignIn>SignIn</SignIn>

            </div>
        </Nav>
    </Container>
    
)

};
const Container =styled.div`
padding :0px;
`;

const Nav = styled.nav`
max-width: 1128px;
margin: auto;
padding :12px 0 10 px;
display : flex;
align-items: center;
position: relative;
justify-content : space-between;
flex-wrap: nowrap;

&>a{
    width:135px;
    height :34px;
    @media (max-width: 768px){
        padding:0 5px;
    }
}
`;

const Join = styled.a`
font-size: 16px;
padding: 10px 15px;
text-decoration: none;
border-radius: 4px;
color:rgba(0,0,0,0.8);
margin-right: 12px;
&:hover{
    background-color: rgba(0,0,0,0.08);
    color: rgba(0,0,0,0.9);
    text-decoration: none;
}
`;

const SignIn = styled.a`
padding: 10px 15px;
margin: auto;
`;


export default login;
