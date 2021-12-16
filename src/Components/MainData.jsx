//isme table show krunga

import { useEffect,useState } from "react";
import './style.css';


const MainData = () =>{
useEffect(()=>{
    all_data();
 },[])
 
 const [users, setUsers] = useState(undefined);


 const url="https://s3.amazonaws.com/open-to-cors/assignment.json";
 async function all_data() {
     const response = await fetch(url);  
     const  data= await response.json();
  
    setUsers(Object.keys(data.products));
    let arr = []
    for(let key in data.products)
    { 
       
        arr.push(data.products[key])
    }

     arr.sort((a,b)=>Number(a.popularity) < Number(b.popularity) && 1 || -1);

    setUsers(arr);
    console.log(users);
   
 }

    return (
  <div className="table">
       <table class="users" >
           <thead>
              <tr >
                  <th class='row-1 row-ID' >Popularity</th>
                  <th class="row-1 rowname"  >Price</th>
                  <th class= "row-3 row-job" >Title</th>
              </tr>
           </thead>           

              {     users?.map((datas,id) => (
                   <tr key={id} >
                       <td>{datas.title}</td>
                       <td>{datas.popularity}</td>
                       <td>{datas.price}</td>
                   </tr>
                ))
               
            }
        </table>
        </div>
    )
}
export default MainData;