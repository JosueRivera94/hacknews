import React from 'react'
import { useState,useEffect } from 'react'
import Favorite from '../../assets/favorite.png'
import ReactPaginate from 'react-paginate'

export const NewsFaves = () => {
    const [currentPage,setCurrentPage]=useState (0)
    const [items, setItems]=useState([])
    const [query, setQuery]=useState("vuejs")
    const [totalPages,setTotalPages]=useState(0)

    const handlePageChange= event =>{
        setCurrentPage(event.selected)
    }

    const filtering=(e)=>{
      const filter =e.target.value
      localStorage.setItem('filter', JSON.stringify(filter))
      const stoaraged=localStorage.getItem('filter')?JSON.parse(localStorage.getItem('filter')):filter
      setQuery(stoaraged)
      
    }


    useEffect(()=>{
        const fetchArticles=async()=>{
            try {
                const res = await fetch(`https://hn.algolia.com/api/v1/search_by_date?query=${query}&page=${currentPage}`);
                const data = await res.json();
                //console.log(data)
                const {hits,nbPages}=data
                setItems(hits);
                setTotalPages(nbPages);
            } catch (error) {
                console.log(error)
            }
        
        }
        fetchArticles()
    },[currentPage,query])

    
  return (
    <>

    <div >
        <select className='dropdown'  onChange={filtering}>
          <option>Select your news</option>
          <option value="angular" className='angular' >Angular</option>
          <option value="reacts">Reacts</option>
          <option value="vuejs">Vuejs</option>
        </select>
    </div>



      <section className="container">
        <article className="cards">

          {items.map(({ author, title, url, created_at }) =>
            title != null ? (
              <a id="link" href={url} target="_blank" rel="noreferrer">
                <div key={title}>
                  <ul>
                    <li >
                      {created_at} by {author}{" "}
                    </li>
                    <li>{title}</li>
                  </ul>

                  <div className="fav">
                    <img src={Favorite}></img>
                  </div>
                </div>
              </a>
            ) : null
          )}
        </article>
      </section>
      <ReactPaginate
        nextLabel=">"
        previousLabel="<"
        breakLabel="..."
        forcePage={currentPage}
        pageCount={totalPages}
        renderOnZeroPageCount={null}
        onPageChange={handlePageChange}
        className="pagination"
        activeClassName="active-page"
        previousClassName="previous-page"
        nextClassName="next-page"
      />
    </>
  );
}
