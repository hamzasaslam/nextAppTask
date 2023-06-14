import { NextResponse, NextRequest } from "next/server";
import axios from "axios";


export const POST = async (req:NextRequest) =>{
  const getString = await req.json()
  let data= await axios.post("http://localhost:6000", getString);
  return NextResponse.json({message: "I am iron man"})
};
