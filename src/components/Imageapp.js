import React, { useState } from 'react';

function ImageApp() {
  const [image, setImage] = useState([]);
  const [searchh, setSearch] = useState('');

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const setting = async () => {
    const API_KEY = 'jRNF048mPyb-HuwZS_YYkAnaaNn6ZyZZFYuC_Ggsksk';
    try {
      const response = await fetch(`https://api.unsplash.com/search/photos?page=1&query=${searchh}&client_id=${API_KEY}`);
      if (!response.ok) {
        throw new Error('Not found');
      }
      const data = await response.json();
      setImage(data.results); // Set the array of images
    console.log(data.results);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <div className='text-white bg-slate-700 w-full min-h-screen'>
        <div className='container'>
          <h1 className="text-4xl  text-center"> Image Searcher</h1>
          <div className='flex flex-wrap justify-center items-center mt-4 gap-4'>
          <input
            className='bg-slate-200 px-5 items-center py-2 mx-8 rounded-md block text-blue-800 text-3xl text-center border-zinc-600'
            placeholder='Search'
            type="text"
            value={searchh}
            onChange={handleSearch}
          />
          <button
            className="block bg-blue-500 rounded-md text-white w-30 px-5 py-2 "
            onClick={setting}
          >
            Search
          </button>
          </div>
        </div>
        <div className="mt-7">
          <div className="items flex flex-wrap gap-8 justify-center">
            {image.length > 0 ? (
              image.map((el) => (
                <img
                  key={el.id}
                  src={el.urls.small}
                  alt={el.alt_description}
                  style={{ margin: '10px',maxWidth: '400px', maxHeight: '300px' }}
                />
              ))
            ) : (
              <p className='text-4xl'>No images found...</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default ImageApp;

//https://api.unsplash.com/photos/users/ashbot/likes?page=1
//'https://api.unsplash.com/search/photos?page=1&query=${searchValue}&client_id=jRNF048mPyb-HuwZS_YYkAnaaNn6ZyZZFYuC_Ggsksk')
// const data=await fetch(`https://api.unsplash.com/search/photos?page=1&query=${search}&client_id=${API_KEY}`)
// const API_KEY='jRNF048mPyb-HuwZS_YYkAnaaNn6ZyZZFYuC_Ggsksk'