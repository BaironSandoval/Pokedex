import './PagesComponent.css'

const PagesComponent = ({ 
    totalPages,  
    onChangePage, 
    onNextPage, 
    onBackPage 
}) => {
  const pagesArray = Array(totalPages)
    .fill()
    .map((_, i) => i + 1);
    
  return (
    <div className='navigate-pages'>
        <button className="fa-solid__button" onClick={() => onBackPage()}><i className="fa-solid fa-backward"></i></button>

        {pagesArray.map((page) => (
            <button className='page' key={page} onClick={() => onChangePage(page)}>{page}</button>
        ))}

        <button className="fa-solid__button" onClick={() => onNextPage()}><i className="fa-solid fa-forward"></i></button>
    </div>
  )
}

export default PagesComponent