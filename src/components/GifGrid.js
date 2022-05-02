import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {

    //utilizando los : entre data e images significa que estamos renombrando data por images 
    const {data:images, loading} = useFetchGifs( category ); //Le mandamos la categoria al useFetchGifs

    console.log(loading);
    console.log(images);

    

    return (
        <>
        <h3 className="animate__animated animate__bounce" >{category}</h3>

        {/* Si es true entonces haz esto, es un operador ternario corto */}
        {loading && <p className='animate__animated animate__flash' >Loading</p>  }  

        <div className="card-grid" > 

            {
                images.map((img) => (
                    <GifGridItem
                        key={img.id}
                        // img={img}
                        {...img}
                    /> //Cuando no hay {} significa que hay un  return implicito
                ))
            }
        </div>
        </>
    )
}
