// rafce: for boiler plate in reactjs
import React from 'react'

const Home = () => {
  return (
    <>
    <h1>Restaurants</h1>
    <section id='products' className='container mt-5'>
        <div className='row'>
            <div className='col-sm-12 col-md-6 col-lg-3'>
                <div className='card p-3 rounded'>
                    <img className='card-img-top mx-auto' src='' alt=''>

                    </img>
                    <div className='card-body d-flexflex-column'>
                        <h5 className='card-title'>Domino's Pizza </h5>
                        <p className='rest_address'>
                            
                        </p>
                    </div>
                </div>
            </div>
        </div>

    </section>
      
    </>
  )
}

export default Home
