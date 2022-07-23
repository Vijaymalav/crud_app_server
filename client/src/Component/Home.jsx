

import { Box, Typography, styled } from '@mui/material';


const Header = styled(Box)`
    margin: 50px;

        `;

const Footer=styled('footer')({
    alignItems:'center',
    color:'green',
    position:'absolute',
    bottom:'0px',
    marginLeft:'50vw'
})

const Home = () => {

    return (
        <>
        <Header>
            <Typography variant="h4">Home</Typography>
               <h1>Welcome to My CRUD application</h1>
        </Header>

        <Footer>
            made by ❤️Vijay malav
        </Footer>
        </>
    );
}

export default Home;