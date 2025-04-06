import React, {useState, useMemo} from 'react'
import styled from "styled-components";
import bg from './img/bg.png'
import {MainLayout} from './styles/Layouts'
import Orb from './Components/Orb/Orb'
import Navigation from './Components/Navigation/Navigation'
import Dashboard from './Components/Dashboard/Dashboard';
import Income from './Components/Income/Income'
import Expenses from './Components/Expenses/Expenses';
import { useGlobalContext } from './context/globalContext';
// import Signup from './Components/Signup/Signup';
// import Signin from './Components/Signin/Signin';

function App() {
  const [active, setActive] = useState(1)

  const global = useGlobalContext()
  console.log(global);

  const displayData = () => {
    switch(active){
      case 1:
        return <Dashboard/>
      case 2:
        return <Dashboard />
     
      case 3:
        return <Income />
      case 4: 
        return <Expenses />
      default: 
        return <Dashboard />
    }
  }

  const orbMemo = useMemo(() => {
    return <Orb />
  },[])

  return (
    <AppStyled bg={bg} className="App">
      {orbMemo}
      <MainLayout>
        <Navigation active={active} setActive={setActive} />
        <main>
          {displayData()}
        </main>
      </MainLayout>
    </AppStyled>
  );
}

const AppStyled = styled.div`
  height: 100vh;
  background-image: url(${props => props.bg});
  position: relative;
  main{
    flex: 1;
    background: rgba(252, 246, 249, 0.78);
    border: 3px solid #FFFFFF;
    backdrop-filter: blur(4.5px);
    border-radius: 32px;
    overflow-x: hidden;
    &::-webkit-scrollbar{
      width: 0;
    }
  }
`;

export default App;
// import React, { useState, useMemo } from 'react'
// import styled from 'styled-components'
// import bg from './img/bg.png'
// import { MainLayout } from './styles/Layouts'
// import Orb from './Components/Orb/Orb'
// import Navigation from './Components/Navigation/Navigation'
// import Dashboard from './Components/Dashboard/Dashboard'
// import Income from './Components/Income/Income'
// import Expenses from './Components/Expenses/Expenses'
// import { useGlobalContext } from './context/globalContext'
// import Signup from './Components/Signup/Signup'
// import Signin from './Components/Signin/Signin'

// function App() {
//   const [active, setActive] = useState(1)
//   const global = useGlobalContext()

//   const displayData = () => {
//     switch (active) {
//       case 1:
//         return <Signup />
//       case 2:
//         return <Signin />
//       case 3:
//         return <Dashboard />
//       case 4:
//         return <Income />
//       case 5:
//         return <Expenses />
//       default:
//         return <Signup />
//     }
//   }

//   const orbMemo = useMemo(() => <Orb />, [])

//   return (
//     <AppStyled bg={bg}>
//       {orbMemo}
//       <MainLayout>
//         <Navigation active={active} setActive={setActive} />
//         <main>
//           {displayData()}
//         </main>
//       </MainLayout>
//     </AppStyled>
//   )
// }

// const AppStyled = styled.div`
//   height: 100vh;
//   background-image: url(${props => props.bg});
//   background-size: cover;
//   background-position: center;
//   position: relative;
//   box-sizing: border-box;

//   main {
//     flex: 1;
//     background: rgba(252, 246, 249, 0.78);
//     border: 3px solid #ffffff;
//     backdrop-filter: blur(4.5px);
//     border-radius: 32px;
//     overflow-x: hidden;
//     padding: 2rem;
//     &::-webkit-scrollbar {
//       width: 0;
//     }
//   }
// `

// export default App
