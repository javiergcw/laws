

import Navbar from "../components/navbar/navbar"
import { GoLaw } from "react-icons/go"
import { TfiBag, TfiAngleRight } from "react-icons/tfi"
import Image from "next/image"

const Data = [
  {
    id: 1,
    title: "Lorem ipsum",
    concept: "dolor sit amet, consectetur adipiscing elit. Phasellus venenatis, massa non."
  },
  {
    id: 2,
    title: "Lorem ipsum",
    concept: "dolor sit amet, consectetur adipiscing elit. Phasellus venenatis, massa non."
  },
  {
    id: 3,
    title: "Lorem ipsum",
    concept: "dolor sit amet, consectetur adipiscing elit. Phasellus venenatis, massa non."
  }
]

const Practice = [
  {
    id: 1,
    icon: "",
    title: 'Lorem ipsum dolor',
    concept: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam elementum tempor nibh, nec ultrices enim rutrum acLorem ipsum dolor sit amet, consectetur adipiscing elit.'
  },
  {
    id: 2,
    icon: "",
    title: 'Lorem ipsum dolor',
    concept: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam elementum tempor nibh, nec ultrices enim rutrum acLorem ipsum dolor sit amet, consectetur adipiscing elit.'
  },
  {
    id: 3,
    icon: "",
    title: 'Lorem ipsum dolor',
    concept: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam elementum tempor nibh, nec ultrices enim rutrum acLorem ipsum dolor sit amet, consectetur adipiscing elit.'
  },
  {
    id: 4,
    icon: "",
    title: 'Lorem ipsum dolor',
    concept: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam elementum tempor nibh, nec ultrices enim rutrum acLorem ipsum dolor sit amet, consectetur adipiscing elit.'
  },
  {
    id: 5,
    icon: "",
    title: 'Lorem ipsum dolor',
    concept: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam elementum tempor nibh, nec ultrices enim rutrum acLorem ipsum dolor sit amet, consectetur adipiscing elit.'
  },
  {
    id: 6,
    icon: "",
    title: 'Lorem ipsum dolor',
    concept: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam elementum tempor nibh, nec ultrices enim rutrum acLorem ipsum dolor sit amet, consectetur adipiscing elit.'
  }
]

export default function Home() {
  return (
    <main>
      <Navbar />
      <div className="absolute inset-0 flex items-center text-center justify-center text-white text-xl flex-col">
        <div className="absolute top-[700px] h-1/2">
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className=" flex justify-center flex-row gap-4">
              {Data.map((item) => (
                <div key={item.id} className="group bg-Azul hover:bg-Dorado h-52 w-60 text-center py-4 px-5 ">
                  <GoLaw className="text-Dorado group-hover:text-white text-5xl mx-auto" />
                  <h4 className="text-base font-bold text-white my-4">{item.title}</h4>
                  <p className="text-sm font-light text-white">{item.concept}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <p className="text-xs  font-bold mb-2 text-Dorado">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <h1 className="text-6xl text-white font-bold w-96 mb-3 ">
          Lorem ipsum dolor sit
        </h1>
        <p className="text-xs text-white w-96 mb-4 font-light">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus venenatis, massa non pretium faucibus, ex ex dictum metus, in semper libero orci vitae risus.
        </p>


        <div className="flex flex-row gap-16">
          <button class="h-9 w-32 text-xs bg-transparent hover:bg-Dorado text-white font-semibold hover:text-white py-2 px-4 border border-dorado hover:border-transparent rounded">
            Lorem Ipsum
          </button>
          <button class="h-9 w-32 text-xs bg-transparent hover:bg-Dorado text-white font-semibold hover:text-white py-2 px-4 border border-dorado hover:border-transparent rounded">
            Lorem Ipsum
          </button>
        </div>
      </div>



      {/* imagen with text */}
      <div className="mx-96 my-44">
        <div className="flex flex-row">
          <div className="w-1/2">
            photo
          </div>
          <div className="w-1/2">
            <p className="text-Dorado text-xs font-bold">
              Lorem ipsum dolor sit amet, consectetur
            </p>
            <h1 className="italic text-6xl text-black mb-5">Vote for Lorem Ipsum</h1>
            <p className="text-xs text-black mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vel nisi ac orci maximus sollicitudin. Cras sit amet porta ex, sit amet viverra nisl. Vestibulum scelerisque, lacus in eleifend cursus, ipsum orci egestas leo, sed mollis massa nisi a justo.
            </p>
            <p className="text-xs text-black mb-5">
              Fusce scelerisque lobortis lacus, at sollicitudin dui malesuada maximus. Phasellus gravida, elit ac maximus congue, diam neque bibendum turpis, vel maximus velit ex quis metus. Nam non nulla et ex euismod accumsan. Aliquam erat volutpat.
            </p>
            <button class="h-11 w-44 text-xs bg-Dorado text-white font-semibold hover:text-white py-2 px-4 border border-dorado hover:border-transparent rounded">
              Lorem Ipsum
            </button>
          </div>
        </div>
      </div>



      {/* practice */}
      <div className="bg-Gris h-1110px py-36">
        <h5 className="text-base font-bold text-center text-Dorado ">Lorem ipsum</h5>
        <h1 className="text-6xl italic text-black text-center pb-14">Our practice Area</h1>

        <div class="flex justify-center">
          <div class="grid grid-cols-3 gap-4 justify-center items-center w-1/2" >
            {Practice.map((item) => (
              <div key={item.id} className="p-4 w-60 h-80 bg-white group hover:bg-Dorado">
                <TfiBag className="text-5xl text-Dorado group-hover:text-white" />
                <h5 className="font-bold text-base text-black group-hover:text-white py-5">{item.title}</h5>
                <p className="text-xs text-black group-hover:text-white pb-3">{item.concept}</p>
                <div className="flex flex-row">
                  <p className="text-Dorado group-hover:text-white">
                    Read more
                  </p>
                  <TfiAngleRight className="text-Dorado text-xs group-hover:text-white mt-2" />
                </div>
              </div>
            ))}
          </div>
        </div>


      </div>

      <Image className="mx-auto w-full" src="images/banner.svg" width={1440} height={679} />
    </main>
  )
}
