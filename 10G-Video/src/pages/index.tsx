import {useCallback,useState} from 'react'
import {useNavigate} from "react-router-dom";
export default function Home() {
   const navigate=useNavigate();
   const [value,setvalue]=useState<string>('');
   const handleJoinRoom=useCallback(()=>{
    navigate(`/room/${value}`)
   },[navigate,value]);

  return (
    
    <>
     <div>
        <input value={value} onChange={(e)=>setvalue(e.target.value)} type="text" placeholder='Enter Room Code' />
        <button onClick={handleJoinRoom}>Join</button>
     </div>
     </>
  )
}
