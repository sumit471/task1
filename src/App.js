import MainData  from "./Components/MainData";
import {makeStyles} from "@material-ui/core";

const useStyle = makeStyles ({
  heading:{
    alignItems:"center",
    marginLeft:"40%"
  }
})
function App() {
  const classes=useStyle();
  return (
    <>
     <h1 className={classes.heading}>Data from json file</h1>
    <MainData />
    </>
   
  );
}

export default App;
