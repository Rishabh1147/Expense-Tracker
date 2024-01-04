
import './App.css';
import { Header } from './Components/Header';
import { Balance } from './Components/Balance';
import { Income } from './Components/Income';
import { TransactionList } from './Components/TransactionList';
import { AddTrans } from './Components/AddTrans';
import { GlobalProvider } from './context/GlobalStates';

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance /> 
        <Income />
        <TransactionList />
        <AddTrans />
        
      </div>
      
     </GlobalProvider>
  );
}

export default App;
