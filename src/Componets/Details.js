import React, { useContext } from 'react';
import { ProductContext } from '../Pages/index';
import { Link } from 'react-router-dom';
import { ButtonStyels } from '../Componets/ButtonStyels';


export const Details = () => {
    const data  = useContext(ProductContext);
    const { id, name, img, price, company, info, inCart } = data.detailProduct;
return(

    <div className="container py-5">
    {/* title */}
    <div className="row">
      <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
        <h1>{name}</h1>
      </div>
    </div>
    {/* end of title */}
    <div className="row">
      <div className="col-10 mx-auto col-md-6 my-3">
        <img src={img} className="img-fluid" alt="" />
      </div>
      {/* prdoduct info */}
      <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
        <h1>model : {name}</h1>
        <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
          made by : <span className="text-uppercase">{company}</span>
        </h4>
        <h4 className="text-blue">
          <strong>
            price : <span>$</span>
            {price}
          </strong>
        </h4>
        <p className="text-capitalize font-weight-bold mt-3 mb-0">
          some info about product :
        </p>
        <p className="text-muted lead">{info}</p>
        {/* buttons */}
        <div>
          <Link to="/">
            <ButtonStyels>back to products</ButtonStyels>
          </Link>
          <ButtonStyels
            cart
           disabled={inCart ? true : false}
           onClick={() => {
              data.addToCart(id);
              data.openModal(id);
           }}
          >
            {inCart ? "in cart" : "add to cart"}
          </ButtonStyels>
        </div>
      </div>
    </div>
  </div>
)
}