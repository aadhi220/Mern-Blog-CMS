
'use client';

import { Carousel } from 'flowbite-react';
import { SERVER_URL } from '../../Services/serverUrl';

export default function CarousalBlog({images}) {
  return (
    <div className="h-56 sm:h-64 xl:h-96 2xl:h-96">
      <Carousel slideInterval={2000}>
        {images?.length>0 && images.map((image,index)=>(
            <img key={index} src={`${SERVER_URL}/uploads/${image}`} alt="blog Image.." />
        ))}
       
      </Carousel>
    </div>
  );
}
