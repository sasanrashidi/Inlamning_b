import React, {useState, useEffect} from 'react';
import musicService from '../services/music-group-service';
import {JournalRichtext} from 'react-bootstrap-icons';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom'; // Importera Link-komponenten från react-router-dom


export function Musicalbums(props) {
  const [albums, setAlbums] = useState({});
  const [filter, setFilter] = useState(props.searchFilter || "");
  const [pageNr, setPageNr] = useState(0);  // Nytt state för aktuellt sidnummer
  const [totalPages, setTotalPages] = useState(1);  // Nytt state för totalt antal sidor

  useEffect(() => {
    (async () => {
      const service = new musicService(`https://appmusicwebapinet8.azurewebsites.net/api`);
      const a = await service.readMusicGroupsAsync(pageNr, true, filter);  // Use pageNr and filter here
      setAlbums(a);
      setTotalPages(a.pageCount);  // Update total pages
    })();
  }, [filter, pageNr]);  // Add filter and pageNr as dependencies


  const onSearch = async (e) => {
    e.preventDefault();  // Förhindrar standardformulärsändning
    const searchFilter = document.getElementById("search").value;
    const service = new musicService(`https://appmusicwebapinet8.azurewebsites.net/api`);
    const _serviceData = await service.readMusicGroupsAsync(0, true, searchFilter);
    setAlbums(_serviceData);
    setFilter(searchFilter);
    setPageNr(0);  // Återställer sidnummer vid sökning
    setTotalPages(_serviceData.pageCount);  // Uppdaterar totalt antal sidor
  }

  const onNextPage = async () => {
    if (pageNr < totalPages - 1) {
      setPageNr(pageNr + 1);  // Ökar sidnummer med 1
    }
  }

  const onPrevPage = async () => {
    if (pageNr > 0) {
      setPageNr(pageNr - 1);  // Minskar sidnummer med 1
    }
  }

  return (
    <div className="container px-4 py-4" id="list-of-items">
      <h2 className="pb-2 border-bottom">
        <JournalRichtext className="bi text-body-secondary flex-shrink-0 me-3" width="1.75em" height="1.75em"/>
        List of Albums
      </h2>
      <p>Below are some of the worlds most famous albums.</p>
      <p>Subscribe to the WebApi</p>
      <ListSearch searchFilter={filter} onSearch={onSearch} albums={albums} filter={filter}/>
      <List albums={albums}/>
      <ListPager onNextPage={onNextPage} onPrevPage={onPrevPage} />  {/*Skickar funktioner för sidbyte som props*/}
    </div>
  )
}

export function ListSearch(props) {
  const onClick = (e) => {
    e.preventDefault();
    e.searchFilter = document.getElementById("search").value;
    if (props.onSearch) props.onSearch(e);
  }

  return (
    <div className="row mb-1 text-center">
      <div className="col-md-8 ">
        <form className="d-flex mt-3 mt-lg-0" role="search">
          <input id='search' className="form-control me-2" type="search" placeholder="Search" 
            defaultValue={props.searchFilter} aria-label="Search"/>
          <button className="btn btn-outline-success" onClick={onClick}>Search</button>
        </form>
        <Card>
          <Card.Body>There are currently {props.albums.dbItemsCount} items with searchword "{props.filter}"</Card.Body>
       </Card>
      </div>
    </div>
  )
}

export function ListPager(props) {
  return (
    <nav aria-label="Standard pagination example">
      <ul className="pagination">
        <li className="page-item">
          <button className="page-link" onClick={props.onPrevPage}>&laquo;</button>  {/*Anropar onPrevPage vid klick */}
        </li>
        <li className="page-item">
          <button className="page-link" onClick={props.onNextPage}>&raquo;</button>  {/* Anropar onNextPage vid klick */}
        </li>
      </ul>
    </nav>
  )
}

export function List(props) {
  return (
    <div className="row row-cols-1 row-cols-lg-4 align-items-stretch g-4 py-5">
      <div className="col-md-7 col-lg-10">
        <div className="row mb-2 text-center">
          <div className="col-md-6 themed-grid-head-col">Name</div>
          <div className="col-md-3 themed-grid-head-col">Release Year</div>
          <div className="col-md-3 themed-grid-head-col">Genre</div>
        </div>
        {props.albums?.pageItems?.map((b, index) => (
          <div key={index} className="row mb-2 text-center">
            {/* Lägg till en länk runt artistens namn */}
            <div className="col-md-6 themed-grid-col">
              <Link to={`/form/${b.musicGroupId}`}>{b.name}</Link>
            </div>
            <div className="col-md-3 themed-grid-col">{b.establishedYear}</div>
            <div className="col-md-3 themed-grid-col">{b.strGenre}</div>
          </div>
        ))} 
      </div>
    </div>
  )
}
