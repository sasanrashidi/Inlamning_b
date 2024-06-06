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
    

        <div ClassName="container px-4 py-4" id="edit-item">
          <form ClassName="needs-validation" id="formValidate">
            <h2 ClassName="pb-2 border-bottom">Edit details of a music group
              <button ClassName="btn btn-primary-outline" type="submit" id="btnValidate">
                <svg ClassName="bi text-body-secondary flex-shrink-0 me-3" width="1.75em" height="1.75em"><use xlink:href="#save"/></svg>
              </button>
              <button ClassName="btn btn-primary-outline" type="submit">
                <svg ClassName="bi text-body-secondary flex-shrink-0 me-3" width="1.75em" height="1.75em"><use xlink:href="#undo"/></svg>
              </button>
            </h2>

            <div ClassName="row row-cols-1 row-cols-lg-4 align-items-stretch g-4 py-5">
                <div ClassName="col-md-7 col-lg-10">

                  <div ClassName="row g-3">
                      <div ClassName="col-sm-6">
                          <label for="groupName" ClassName="form-label">GroupName</label>
                          <input type="text" ClassName="form-control" id="groupName" value="AC/DC" required/>
                          <div ClassName="invalid-feedback">You must provide a groupname.</div>
                      </div>

                      <div ClassName="col-sm-6">
                          <label for="genre" ClassName="form-label">Genre</label>
                          <select ClassName="form-control" id="genre">
                            <option>Rock</option>
                            <option selected>Jazz</option>
                            <option>Blues</option>
                          </select>
                      </div>

                      <div ClassName="col-sm-6">
                      </div>
                      <div ClassName="col-sm-6">
                          <label for="established" ClassName="form-label">Established Year</label>
                          <input type="text" ClassName="form-control" id="established" value="1973" required/>
                          <div ClassName="invalid-feedback">You must provide a year.</div>
                      </div>
                  </div>
                  <div ClassName="row g-1">
                      <h3 ClassName="pb-2">Artists</h3>
                      

                      <input type="hidden" name="artistId" data-seido-selected-item-id-target />

                      <div ClassName="row mb-2 text-center">
                        <div ClassName="col-md-10 themed-grid-head-col">Name</div>
                        <div ClassName="col-md-2 themed-grid-head-col">
                            <button ClassName="btn btn-success btn-sm m-1" type="button" 
                            data-bs-toggle="collapse" data-bs-target="#collapseAddArtist">New
                          </button>                            
                        </div>
                      </div>
                      <div ClassName="collapse row mb-2 text-center" id="collapseAddArtist">                           
                        <div ClassName="form-floating col-md-5 themed-grid-col">
                          <input type="text" ClassName="form-control" id="firstName" required/>
                          <label for="firstName">first name</label>
                          <div ClassName="invalid-feedback">You must provide a first name.</div>
                        </div>
                        <div ClassName="form-floating col-md-5 themed-grid-col">
                          <input type="text" ClassName="form-control" id="lastName"/>
                          <label for="lastName">last name</label>
                        </div>
                        <div ClassName="col-md-2 themed-grid-col">
                          <button type="submit" asp-page-handler="AddAlbum" ClassName="btn btn-success btn-sm m-1">
                            Ok
                          </button>
                        </div>                            
                      </div>
                      
                      <div ClassName="row mb-2 text-center">
                        <div ClassName="col-md-10 themed-grid-col">Angus Young</div>
                        <div ClassName="col-md-2 themed-grid-col">
                          <button ClassName="btn btn-secondary btn-sm m-1" type="button" 
                              data-bs-toggle="collapse" data-bs-target="#collapseEditArtist">Edit
                          </button>                                  
                          <button type="submit" ClassName="btn btn-danger btn-sm m-1" data-seido-selected-item-id="123-123">
                              Del
                          </button>
                        </div>
                      </div>

                      <div ClassName="row mb-2 text-center">
                        <div ClassName="col-md-10 themed-grid-col">Bon Scott</div>
                        <div ClassName="col-md-2 themed-grid-col">
                          <button ClassName="btn btn-secondary btn-sm m-1" type="button" 
                              data-bs-toggle="collapse" data-bs-target="#collapseEditArtist">Edit
                          </button>                                  
                          <button type="submit" ClassName="btn btn-danger btn-sm m-1" data-seido-selected-item-id="456-456">
                              Del
                          </button>
                        </div>
                      </div>

                      <div ClassName="collapse row mb-2 text-center" id="collapseEditArtist">                           
                        <div ClassName="form-floating col-md-5 themed-grid-col">
                          <input type="text" ClassName="form-control" id="firstName"/>
                          <label for="firstName">first name</label>
                        </div>
                        <div ClassName="form-floating col-md-5 themed-grid-col">
                          <input type="text" ClassName="form-control" id="lastName"/>
                          <label for="lastName">last name</label>
                        </div>
                        <div ClassName="col-md-2 themed-grid-col">
                          <button type="submit" asp-page-handler="EditAlbum" ClassName="btn btn-success btn-sm m-1"
                            data-seido-selected-item-id="123-123">
                            Ok
                          </button>
                        </div>                            
                      </div>
                  </div> 

                  <div ClassName="row g-1">
                      
                      <input type="hidden" name="albumId" data-seido-selected-item-id-target />
                      <h3 ClassName="pb-2">Albums</h3>
      
                      <div ClassName="row mb-2 text-center">
                          <div ClassName="col-md-8 themed-grid-head-col">Name</div>
                          <div ClassName="col-md-2 themed-grid-head-col">Year</div>
                          <div ClassName="col-md-2 themed-grid-head-col">
                            <button ClassName="btn btn-success btn-sm m-1" type="button" 
                              data-bs-toggle="collapse" data-bs-target="#collapseAddAlbum">New
                            </button>
                          </div>
                      </div>
                      <div ClassName="collapse row mb-2 text-center" id="collapseAddAlbum">                           
                          <div ClassName="col-md-8 themed-grid-col">
                            <input type="text" ClassName="form-control" value="album name"/>
                          </div>
                          <div ClassName="col-md-2 themed-grid-col">
                            <input type="text" ClassName="form-control" value="1999"/>
                          </div>
                          <div ClassName="col-md-2 themed-grid-col">
                            <button type="submit" asp-page-handler="AddAlbum" ClassName="btn btn-success btn-sm m-1">
                              Ok
                            </button>
                          </div>                            
                      </div>
                      <div ClassName="row mb-2 text-center">
                          <div ClassName="col-md-8 themed-grid-col">High Voltage</div>
                          <div ClassName="col-md-2 themed-grid-col">1975</div>
                          <div ClassName="col-md-2 themed-grid-col">
                              <button ClassName="btn btn-secondary btn-sm m-1" type="button" 
                                  data-bs-toggle="collapse" data-bs-target="#collapseEditAlbum">Edit
                              </button>

                              <button type="submit" asp-page-handler="DeleteAlbum" ClassName="btn btn-danger btn-sm m-1"
                                      data-seido-selected-item-id="123-123">
                                  Del
                              </button>
                          </div>  
                      </div>
                      <div ClassName="collapse row mb-2 text-center" id="collapseEditAlbum">
                          <div ClassName="col-md-8 themed-grid-col">
                            <input type="text" ClassName="form-control" value=""/>
                          </div>
                          <div ClassName="col-md-2 themed-grid-col">
                            <input type="text" ClassName="form-control" value=""/>
                          </div>                          
                          <div ClassName="col-md-2 themed-grid-col">
                            <button type="submit" asp-page-handler="EditAlbum" ClassName="btn btn-success btn-sm m-1"
                              data-seido-selected-item-id="123-123">
                              Ok
                            </button>
                          </div>  
                      </div>
                  </div>
                </div>              
            </div>
          </form>
        </div>
    </>
  )
}
