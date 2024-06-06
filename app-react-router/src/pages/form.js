import React from 'react'
import { useParams } from "react-router-dom";
import { useState, useEffect  } from "react"
import musicService from '../services/music-group-service';

export function Form() {

 
    const [Group, setGroup] = useState({});
    const params = useParams()

    useEffect(() => {
        (async () => {
          const service = new musicService(`https://appmusicwebapinet8.azurewebsites.net/api`);
          const a = await service.readMusicGroupAsync(params.id, false);  // Use pageNr and filter here
          setGroup(a);
        })();
      }, [params.id]);  // Add filter and pageNr as dependencies


  return (
    <>
    
        <div className="container px-4 py-4" id="view-item">
          <h1 className="pb-2 border-bottom">Details of a music group
            <a href="#edit-item"  >
              <svg className="bi text-body-secondary flex-shrink-0 me-3" width="1.75em" height="1.75em"><use xlinkHref="#edit"/></svg>
            </a>
          </h1>
          <div className="row row-cols-1 row-cols-lg-4 align-items-stretch g-4 py-5">
            <div className="col-md-7 col-lg-10">
                <form className="needs-validation" novalidate>
                    <div className="row g-3">
                        <div className="col-sm-6">
                            <label for="groupName" className="form-label"><strong>GroupName</strong></label>
                            <input type="text" className="form-control" id="groupName" value={Group.name} readonly/>
                        </div>

                        <div className="col-sm-6">
                            <label for="genre" className="form-label"><strong>Genre</strong></label>
                            <input type="text" className="form-control" id="genre" value={Group.strGenre} readonly/>
                        </div>

                        <div className="col-sm-6">
                        </div>
                        <div className="col-sm-6">
                            <label for="established" className="form-label"><strong>Established Year</strong></label>
                            <input type="text" className="form-control" id="established" value={Group.establishedYear} readonly/>
                        </div>
                    </div>
                    <div className="row g-1">
                      <h3 className="pb-2">Artists</h3>
        
                      <div className="row mb-2 text-center">
                        <div className="col-md-12 themed-grid-head-col">Name</div>
                      </div>

                      {Group?.artists?.map((a) =>
                        <div className="row mb-2 text-center">
                        <div className="col-md-12 themed-grid-col">{a.firstName} {a.lastName}</div>
                        </div>
                        )}

                      <div className="row mb-2 text-center">
                        <div className="col-md-12 themed-grid-col">Angus Young</div>
                      </div>

                        </div> 
                        <div className="row g-1">
                        <h3 className="pb-2">Albums</h3>
        
                      <div className="row mb-2 text-center">
                          <div className="col-md-10 themed-grid-head-col">Name</div>
                          <div className="col-md-2 themed-grid-head-col">Year</div>
                      </div>

                      {Group?.albums?.map((a) =>
                      <div className="row mb-2 text-center">
                      <div className="col-md-10 themed-grid-col">{a.name}</div>
                      <div className="col-md-2 themed-grid-col">{a.releaseYear}</div>
                      </div>
                      )}
                    </div>                      
                </form>
            </div>
          </div>
        </div>

    </>
  )
}
