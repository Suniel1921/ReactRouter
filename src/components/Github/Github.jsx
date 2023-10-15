import React, { useEffect, useState } from "react";
import Loader from "../Loader";

const Github = () => {
  const [data, setData] = useState(null);
  const [loader, setLoader] = useState(true);

  // useEffect(()=>{
  //     fetch('https://api.github.com/users/suniel1921')
  //     .then((res)=> res.json())
  //     .then((data)=>{
  //         console.log(data)
  //         setData(data);
  //     } )
  // },[])

  useEffect(() => {
    const githubData = async () => {
      try {
      const res = await fetch("https://api.github.com/users/suniel1921");
      const data = await res.json();
      console.log(data);
      setData(data);
      setLoader(false)
        
      } catch (error) {
        console.log(error)
        
      }
    };
    githubData();
  }, []);

  return (
    <>
      {loader ? (
        <Loader/>

      ) : (
        <>
          <div className="text-center bg-gray-600 text-white text-3xl p-5">
            <h3>GitHub Followers : {data.followers} </h3>
            <div className="flex items-center justify-center">
              <img className="" src={data.avatar_url} alt="" />
              <h3>Location : {data.location}</h3>
            </div>
            <div className="text-center bg-gray-600 text-white text-3xl p-5">
              <h3>Bio: {data.bio}</h3>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Github;