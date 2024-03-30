import "./App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import RaiseIssue from "./components/RaiseIssue";
import Home from "./components/Home";
import PredictPrize from "./components/PredictPrize";
import Profile from "./components/Profile";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  // const [users,setUsers]=useState([])
  // useEffect(()=>
  // {
  //   axios.get('http://localhost:6161/getUsers')
  //   .then(users=>setUsers(users.data))
  //   .catch(err=>console.log(err))
  // },[])
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Home />}></Route>
          <Route path="/" element={<Home />}></Route>
          <Route path="/raise" element={<RaiseIssue />}></Route>
          <Route path="/predict" element={<PredictPrize />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
        </Routes>
      </BrowserRouter>
        {/* <div>
          {users.map(user=>{
            return <div>
              <p>{user.u_name}</p>
              <p>{user.email_id}</p>
              <p>{user.phn_no}</p>
              <p>{user.city}</p>
            </div>

          })
          }
        </div> */}
    </>
  );
}
export default App;



// import "./App.css";
// import { useEffect, useState } from "react";
// import axios from "axios";

// function App() {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     axios.get('http://localhost:6161/getUsers')
//       .then(response => setUsers(response.data))
//       .catch(error => console.log(error));
//   }, []);
//   console.log(users)
//   return (
//     <>
//       <div>
//         {users.map(user => (
//           <div key={user._id}>
//             <p>{user.u_name}</p>
//             <p>{user.email_id}</p>
//             <p>{user.phn_no}</p>
//             <p>{user.city}</p>
//           </div>
//         ))}
//       </div>
//     </>
//   );
// }

// export default App;


// import "./App.css";
// import { useEffect, useState } from "react";
// import axios from "axios";

// function App() {
//   const [users, setUsers] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     axios.get('http://localhost:6161/getUsers')
//       .then(response => {
//         setUsers(response.data);
//         setLoading(false);
//       })
//       .catch(error => {
//         setError(error.message);
//         setLoading(false);
//       });
//   }, []);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   return (
//     <div>
//       {users.map(user => (
//         <div key={user._id}>
//           <p>{user.u_name}</p>
//           <p>{user.email_id}</p>
//           <p>{user.phn_no}</p>
//           <p>{user.city}</p>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default App;
