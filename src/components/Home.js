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
                    <img className='card-img-top mx-auto' 
                    src='data:image/jpeg;base64,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' 
                    alt=''>

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
