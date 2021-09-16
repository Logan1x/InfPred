import Nav from "./components/navbar";
import Footer from "./components/footer";

function App() {
  return (
    <div className="bg-purple-50">
      <Nav />
      <div className="md:w-3/5 mx-auto h-page flex flex-col justify-center items-center border-4 border-red-600">
        <h1 className="font-bold text-5xl text-indigo-600">
          Welcome to
          <span className="bg-gray-200 px-2 py-1 hover:bg-transparent cursor-wait">
            InfPred
          </span>
        </h1>
        <p className="text-xl text-center my-4 ">
          lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Facere porro consequuntur
          maxime aspernatur ab ad repellendus exercitationem! Fugit
          exercitationem vero, ullam sunt minima assumenda doloribus,
          voluptatibus pariatur, autem nam molestiae!
        </p>
      </div>
      {/* colored div */}
      <div className="w-screen md:h-page bg-gray-300 p-10">
        <div className="md:w-3/5 mx-auto h-full flex flex-col justify-center items-center py-10 px-6 bg-purple-50 rounded-md">
          <h1 className="font-bold text-5xl text-indigo-600 my-10">
            About Influenza
            <span className="bg-gray-200 px-2 py-1 hover:bg-transparent cursor-wait">
              Virus
            </span>
          </h1>
          <div className="flex flex-wrap md:flex-nowrap md:space-x-6">
            <p className="text-xl  my-4 bg-white px-14 py-8 shadow rounded text-left">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic,
              obcaecati odit. Eveniet, unde possimus nobis non debitis illum
              beatae voluptate atque perspiciatis enim facere ipsum dolorem amet
              adipisci, maxime doloremque?
            </p>
            <p className="text-xl  my-4 bg-white px-14 py-8 shadow rounded text-right">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic,
              obcaecati odit. Eveniet, unde possimus nobis non debitis illum
              beatae voluptate atque perspiciatis enim facere ipsum dolorem amet
              adipisci, maxime doloremque?
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
