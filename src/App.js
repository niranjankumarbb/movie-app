import React from 'react'
import MoviesList from './components/MoviesList.js'
import 'bootstrap/dist/css/bootstrap.min.css';


function App(props) {
    return (
        <div className='App'>
            <div className='row'>
                <div className='col-md-3'>
                    <h2>WOOKIE</h2>
                    <h2>MOVIES</h2>
                </div>
                <div className='col-md-9 offset-md-8'>                 
                <input
                      type='search'
                     placeholder='Type to search...'
                />
                 <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                </svg> 
                </div>   
            </div>

                <hr/>
                <div className='row'>
                <MoviesList />

                </div>

        </div>
    )
}

export default App