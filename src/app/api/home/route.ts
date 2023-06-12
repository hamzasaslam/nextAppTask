import { NextResponse } from "next/server";
import axios from "axios";

export const POST = async () => { // Change GET to POST
  let data = await axios.post("http://localhost:6000");
  return new NextResponse(JSON.stringify(data.data), { status: 200 });
};
