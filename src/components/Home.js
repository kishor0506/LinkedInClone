import { styled } from 'styled-components';

import Main from './Main';
import Rightside from './RightSide';
import LeftSide from './LeftSide';

const Home =(props)=>{
    return<Container>
        <Section>
            <h5>
                <a> Hiring is a hurry? - </a>
            </h5>
            <p>  Find talented pros in record time with upwork and keep business moving </p>
        </Section>
        <Layout>
        <LeftSide/>
        <Main/>
        <Rightside/>
      </Layout>
    </Container>
}

const Container =styled.div`
padding-top:60px ;
max-width: 100%;
align-items: center;
justify-content: center;

`;
const Content = styled.div`
  max-width: 1128px;
  margin-left: auto;
  margin-right: auto;
`;
const Section = styled.section`
min-height: 56px;
padding: 16px 0;
display: flex;
justify-content: center;
text-decoration: underline;
box-sizing: content-box;
text-align: center;
h5{
    font-size: 16px;
    color: #0a66c3;
}
a{
    font-weight: 700;
}
p{
    font-size: 14px;
    color: #434649;
    font-weight: 600;
}
@media (max-width: 768px){
    flex-direction: column;
    padding: 0 5px;
    
}
`
const Layout = styled.div`
display: grid;
grid-template-areas: "Leftside main Rightside";
grid-template-columns: minmax(0,5fr) minmax(0,12fr) minmax(300px 7fr);
row-gap: 25px;
column-gap: 25px;


margin: 25px 0;

@media (max-width:768px)  {
    display: flex;
    flex-direction: column;
    padding: 0 5px;
}

`
;
export default Home;