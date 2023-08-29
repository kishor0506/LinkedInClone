import styled from "styled-components";

const Header = (props) => {
  return (
    <Container>
      <Content>
       <Logo>
        <a href="/home">
          <img src="/Images/home-logo.svg" alt=""></img>
        </a>
       </Logo>
      <Search>
        <div>
          <input type= "text" placeholder="Search"/> 
        </div>
        <SearchIcon>
          <img src="/Images/search-icon.svg" alt=""/>
        </SearchIcon>
      </Search>
      <Nav>
        <NavListWrap>
          <NavList className='active'>
            <a> 
              <img src="/Images/nav-home.svg" alt=""/>
              <span >Home </span>
            </a>
          </NavList>
          <NavList>
            <a> 
              <img src="/Images/nav-network.svg" alt=""/>
              <span>My Network</span>
            </a>
          </NavList>
          <NavList>
            <a> 
              <img src="/Images/nav-jobs.svg" alt=""/>
              <span>Jobs</span>
            </a>
          </NavList>
          <NavList>
            <a> 
              <img src="/Images/nav-messaging.svg" alt=""/>
              <span>Messaging</span>
            </a>
          </NavList>
          <NavList>
            <a> 
              <img src="/Images/nav-notifications.svg" alt=""/>
              <span>Notifications</span>
            </a>
          </NavList>
          <User>
              <a>
                <img src="/images/user.svg" alt="" />
                <span>Me</span>
                <img src="/images/down-icon.svg" alt="" />
              </a>
              <Signout><a>Signout</a></Signout>
             
            </User>

            <Work>
              <a>
                <img src="/images/nav-work.svg" alt="" />
                <span>
                  Work
                  <img src="/images/down-icon.svg" alt="" />
                </span>
              </a>
            </Work>
        </NavListWrap>
      </Nav>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  background-color: white;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  left: 0;
  padding: 0 24px;
  position: fixed;
  top: 0;
  width: 100vw;
  z-index: 100;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;
  min-height: 100%;
  max-width: 1128px;
`;

const Logo = styled.span`
margin-right: 10px;
font-size: 0px;
`;

const Search =styled.div`
opacity: 1;
flex-grow: 1;
position: relative;
& > div {
max-width: 288px;
}
input {
  border: none;
  background-color: #eef3f8;
  width: 250px;
  height: 25px;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.75;
  box-shadow: none;
  color: black;
  vertical-align: text-top;
  padding: 0px 8px 0 40px;
  border-color: blue; 
}
`

const SearchIcon = styled.div`
width: 40px;
position: absolute;
top: 5px;
left: 5px;
z-index: 1;
pointer-events: none;
border-radius:  0 2px 2px 0;
justify-content: center;
align-items: center;
transition: background-color 0.15s;

`
const Nav = styled.div `
margin-left: auto;
display: block;
@media (max-width:768px){
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: white;

}

`
const NavListWrap = styled.ul`
display: flex;
flex-wrap: nowrap;
list-style-type: none;

.active{
  span:after{
    content: " ";
    transform: scaleX(1);
    border-bottom: 2px solid var(--white,#fff);
    bottom: 0;
    left: 0;
    position: absolute;
    transition: transform 0.2s ease-in-out;
    width: 100%;
    border-color: rgba(0,0,0,0.9);
  }
}
`
const Signout = styled.div`
position: absolute;
background: white;
top:45px;
border-radius: 0 0 5px 5px;
width: 100px;
height: 40px;
font-size: 16px;
transition-duration: 167ms;
text-align: center;
display: none;
justify-content: center;

align-items: center;
`


const NavList = styled.li`
display: flex;
align-items: center;
a {
align-items: center;
justify-content: center;
position: relative;
background: transparent;
flex-direction: column;
line-height: 1.5;
min-height: 52px;
min-width: 80px;
display: flex;
font-size: 12px;
font-weight: 400;
text-decoration: none;

span{
  display: flex;
  align-items: center;
  color: rgba(0,0,0,0.6);
}
@media (max-width:768px) {
  min-width: 70px;
}
}
&:hover,
&:active{
  a{
    span{
      color: rgba(0,0,0,0.9)
    }
  }

}
`
const User = styled(NavList)`
 a >svg{
  width: 24px;
  border-radius: 50%;
 }
 a >  img{
  width: 24px;
  height: 24px;
  border-radius: 50%;
 }
 span {
  display: flex;
  align-items: center;
 }

 &:hover{
  ${Signout}{
    align-items: center;
    display: flex;
    justify-content: center;

  }
 }
`

const Work = styled(User)`
border-left: 1px solid rgba(0,0,0,0.08) ;
`


export default Header;