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
export default Header;