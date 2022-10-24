import React, { Fragment} from 'react'

export const Home = () => {


    return (
        <Fragment>
            <h1 id="encabezado_productos">Ultimos Productos</h1>

            <section id="productos" className='container mt-5'>
                <div className='row'>
                    {/*Producto 1*/}
                    <div className='col-sm-12 col-md-6 col-lg-3 my-3'>
                        <div className='card p-3 rounded'>
                            <img className='card-img-top mx-auto' src='./images/nutra_gold.jpeg' alt="NutraGold"></img>
                            <div className='card-body d-flex flex-column'>
                                <h5 id="titulo_producto"><a href='http://localhost:3000'>Nutra Gold</a></h5>
                                <div className='rating mt-auto'>
                                    <div className='rating-outer'>
                                        <div className='rating-inner'></div>
                                    </div>
                                    <span id="No_de_opiniones"> 3 reviews</span>
                                </div>
                                <p className='card-text'>$272.000</p><a href='http://localhost:3000' id="view_btn" className='btn btn-block'>
                                    Ver detalle
                                </a>
                            </div>
                        </div>
                    </div>

                    {/*Producto 2*/}
                    <div className='col-sm-12 col-md-6 col-lg-3 my-3'>
                        <div className='card p-3 rounded'>
                            <img className='card-img-top mx-auto' src='./images/nutra_gold.jpeg' alt="NutraGold"></img>
                            <div className='card-body d-flex flex-column'>
                                <h5 id="titulo_producto"><a href='http://localhost:3000'>Nutra Gold</a></h5>
                                <div className='rating mt-auto'>
                                    <div className='rating-outer'>
                                        <div className='rating-inner'></div>
                                    </div>
                                    <span id="No_de_opiniones"> 3 reviews</span>
                                </div>
                                <p className='card-text'>$272.000</p><a href='http://localhost:3000' id="view_btn" className='btn btn-block'>
                                    Ver detalle
                                </a>
                            </div>
                        </div>
                    </div>

                    {/*Producto 3*/}
                    <div className='col-sm-12 col-md-6 col-lg-3 my-3'>
                        <div className='card p-3 rounded'>
                            <img className='card-img-top mx-auto' src='./images/nutra_gold.jpeg' alt="NutraGold"></img>
                            <div className='card-body d-flex flex-column'>
                                <h5 id="titulo_producto"><a href='http://localhost:3000'>Nutra Gold</a></h5>
                                <div className='rating mt-auto'>
                                    <div className='rating-outer'>
                                        <div className='rating-inner'></div>
                                    </div>
                                    <span id="No_de_opiniones"> 3 reviews</span>
                                </div>
                                <p className='card-text'>$272.000</p><a href='http://localhost:3000' id="view_btn" className='btn btn-block'>
                                    Ver detalle
                                </a>
                            </div>
                        </div>
                    </div>

                    {/*Producto 4*/}
                    <div className='col-sm-12 col-md-6 col-lg-3 my-3'>
                        <div className='card p-3 rounded'>
                            <img className='card-img-top mx-auto' src='./images/nutra_gold.jpeg' alt="NutraGold"></img>
                            <div className='card-body d-flex flex-column'>
                                <h5 id="titulo_producto"><a href='http://localhost:3000'>Nutra Gold</a></h5>
                                <div className='rating mt-auto'>
                                    <div className='rating-outer'>
                                        <div className='rating-inner'></div>
                                    </div>
                                    <span id="No_de_opiniones"> 3 reviews</span>
                                </div>
                                <p className='card-text'>$272.000</p><a href='http://localhost:3000' id="view_btn" className='btn btn-block'>
                                    Ver detalle
                                </a>
                            </div>
                        </div>
                    </div>

                    

                    


                </div>
            </section>

        </Fragment>
    )
}
export default Home