"use client";
import axios from "axios";

async function getBlogData() {
  const response = await axios.get("http://localhost:3000/api/user");
  return response.data;
}
// async component  , can do in server component only not in client
export default async function Home() {
  const blogData = await getBlogData();

  return (
    <div className="flex flex-col justify-center h-screen">
      <div className="flex justify-center">
        <div className="border p-8 rounded">
          <div>{blogData.name}</div>
          <div>{blogData.email}</div>
        </div>
      </div>
    </div>
  );
}
