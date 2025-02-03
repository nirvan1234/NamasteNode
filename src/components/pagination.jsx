import React, { useState, useEffect } from 'react';

export default function Pagination() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [noPerPage, setNoPerPage] = useState(10);


  useEffect(() => {
    fetchData();
  }, [page]);

  const fetchData = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const json = await response.json();
    setData(json);

  }

  const noOfPage = data.length/noPerPage
  const pageNoArray = [...Array(noOfPage+1).keys()].slice(1)
  console.log(pageNoArray);

  const lastIndexOfPage = page * noPerPage;
  const fistIndexOfPage = lastIndexOfPage - noPerPage;

  const dataToShow = data.slice(fistIndexOfPage , lastIndexOfPage)

   const handlePage = (p) =>{
      console.log(p);
      setPage(p)
   }
  const paginationForward = (p) => {
     if(p !== noOfPage){
        setPage(p+1)
     }
  }

  const paginationBacward = (p) => {
    if(p !== 1){
        setPage(p-1)
     }else{
        return null;
     }

  }


  return (
    <div className='App'>
      <div>
        {
          dataToShow.map((item, index) => (
            <div className="bg-yellow-400" key={index}>
              <h1>{item.id}</h1>
              <h2>{item.title}</h2>
              <h2>{item.body}</h2>
            </div>
          ))
        }
        <div className='flex justify-evenly'>
        <button className='bg-slate-500 ' onClick={() => paginationBacward(page)}>back</button>
        {pageNoArray.map((page) =>{
            return (
                <p onClick={() => handlePage(page)}>| {page} |</p>
            )
        })}
        <button className='bg-slate-500 ' onClick={() => paginationForward(page)}>forward</button>
        </div>
    
      </div>
    </div>
  );
}