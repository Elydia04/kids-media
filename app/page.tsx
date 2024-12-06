export default function Home() {
  return (
    <>
      <div className="h-screen bg-black p-3 flex">
        <div className="w-full h-full flex justify-center items-center bg-no-repeat" style={{ background: `url('/1609133839871.jpg')`, backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover', backgroundPosition:'50% 50%',}}>

          <div className="p-3 bg-orange-950 rounded">
            <h1 className=" font-extrabold text-white ">KIDS MEDIA</h1>
          </div>
        </div>

        <div className="w-full h-full bg-white flex justify-center items-center " style={{background: `url('rubbing-hands-emoji.avif')`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' , backgroundPosition:'50% 50%',}}>
          <div className=" p-3 bg-black rounded">
          <h1 className="text-white font-bold text-xl">DIDDY&#39;S #1 Favorite Site</h1>
          </div>
          <input type="type" 
          placeholder="Kids Online..."
          className="absolute top-10 left-10 border border-gray-300 p-2 rounded shadow-md
  />"style={{background: `url('bbyoil.webp')`,}}
          />
          <a href="https://www.gettyimages.com/photos/p-diddy"
          target="_blank"
          rel="noopener noreferrer">
          <button className="absolute top-90 left-9 border-spacing-0 border-zinc-900 text-white font-extrabold p-2 bg-black h-10 ">
            Diddy Pics
          </button>
          </a>
          <div className="w-[200px] h-[200px] fixed bottom-20 mr-[250px]"style={{background: `url('bbyoil.webp')`, backgroundRepeat: 'no-repeat' ,backgroundPosition:'50% 50%', backgroundSize: '200px 200px'}} ></div>
        </div>

      </div>
    </>
  );
}
