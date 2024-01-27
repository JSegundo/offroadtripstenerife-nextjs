import Link from "next/link"
import React from "react"

const Services = () => {
  return (
    <section className="mb-8         mt-6 md:mt-8 lg:mt-16 " id="excursions">
      <h2 className="text-3xl font-bold text-center text-[#002C41]">
        Explore Our Diverse Adventures
      </h2>
      <article className="grid gap-10 md:grid-cols-2 lg:grid-cols-2 mt-8">
        <div className="bg-white shadow-md rounded-md overflow-hidden">
          <img
            alt="Excursion 1"
            className="w-full h-48 object-cover"
            height="200"
            src="https://media.istockphoto.com/id/909363946/es/foto/hombre-montado-veh%C3%ADculo-atv-en-fuera-de-pista-tema-de-animaciones-de-deporte-al-aire-libre-de.jpg?s=1024x1024&w=is&k=20&c=yV2sXgt5NG3pgsiQo8Ml7woBRInMsfjrdJIQstOc39M="
            style={{
              aspectRatio: "300/200",
              objectFit: "cover",
            }}
            width="300"
          />
          <div className="p-6">
            <h3 className="text-xl font-bold">Excursion 1</h3>
            <p className="mt-2 text-gray-600">
              Experience the thrill of riding through scenic landscapes.
            </p>
            <Link
              className="inline-block mt-4 px-6 py-2 text-lg font-semibold bg-gray-900 text-white rounded-md"
              href="#"
            >
              Book Now
            </Link>
          </div>
        </div>
        <div className="bg-white shadow-md rounded-md overflow-hidden">
          <img
            alt="Excursion 2"
            className="w-full h-48 object-cover"
            height="200"
            src="https://media.istockphoto.com/id/909363946/es/foto/hombre-montado-veh%C3%ADculo-atv-en-fuera-de-pista-tema-de-animaciones-de-deporte-al-aire-libre-de.jpg?s=1024x1024&w=is&k=20&c=yV2sXgt5NG3pgsiQo8Ml7woBRInMsfjrdJIQstOc39M="
            style={{
              aspectRatio: "300/200",
              objectFit: "cover",
            }}
            width="300"
          />
          <div className="p-6">
            <h3 className="text-xl font-bold">Excursion 2</h3>
            <p className="mt-2 text-gray-600">
              Enjoy a fun-filled day of ATV riding with our expert guides.
            </p>
            <Link
              className="inline-block mt-4 px-6 py-2 text-lg font-semibold bg-gray-900 text-white rounded-md"
              href="#"
            >
              Book Now
            </Link>
          </div>
        </div>
        {/* <div className="bg-white shadow-md rounded-md overflow-hidden">
          <img
            alt="Excursion 3"
            className="w-full h-48 object-cover"
            height="200"
            src="/placeholder.svg"
            style={{
              aspectRatio: "300/200",
              objectFit: "cover",
            }}
            width="300"
          />
          <div className="p-6">
            <h3 className="text-xl font-bold">Excursion 3</h3>
            <p className="mt-2 text-gray-600">
              Discover the beauty of nature on our guided ATV tours.
            </p>
            <Link
              className="inline-block mt-4 px-6 py-2 text-lg font-semibold bg-gray-900 text-white rounded-md"
              href="#"
            >
              Book Now
            </Link>
          </div>
        </div> */}
      </article>
    </section>
  )
}

export default Services
