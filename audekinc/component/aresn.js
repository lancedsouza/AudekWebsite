import { useRouter } from "next/router";
import { useEffect,useState } from "react";

export default function Product_Page(){
const [currIndex,setcurrIndex]=useState(0);

images=[]


useEffect(()=>{
    const interval=setInterval(()=>{
        setcurrIndex((prevIndex)=>(prevIndex===images.length-1 ? 0:prevIndex+1))



    },2000);
    return ()=>clearInterval(interval)
},[])





}
