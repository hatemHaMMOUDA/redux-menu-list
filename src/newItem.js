import React, { Component } from 'react'

import NewModal from './newModal'

const NewItem = (props) => {





    const { btnFunc, modifyDish, dish, price, Img, id } = props;

   
    return (


        <div className="App col-6 ">
            <div
                style={{ height: 325, textAlign: "center" }}
                className="shadow styling "
            >
                <img className="mb-1 " src='' />
                <span className="my-1">{dish}</span>
                <span className="my-0">{price}</span>
                <button className="btn w-50 mx-auto mb-2 mt-1 m-0 pd-0 btn-sm btn-danger" onClick={() => btnFunc(id)}>Delete</button>
               
                <NewModal modifyDish={modifyDish} item={props.newItem} />
            </div>
        </div>

    );
}


export default NewItem
