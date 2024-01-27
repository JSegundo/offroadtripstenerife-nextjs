// "use client"
import Link from "next/link"
import React, { useEffect, useRef } from "react"
import { Button } from "../ui/button"
import { Loader } from "@googlemaps/js-api-loader"

const mapOptions = {
  center: {
    lat: 28.00762367248535,
    lng: -16.657175064086914,
  },
  zoom: 14,
  mapId: "DEMO_MAP_ID",
}
const markerOptions = {
  lat: 28.00762367248535,
  lng: -16.657175064086914,
}
const loader = new Loader({
  apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API as string,
  version: "weekly",
  libraries: ["places"],
})

const FindUs = () => {
  const mapRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const initMap = async () => {
      const { Map } = await loader.importLibrary("maps")
      const map = new Map(mapRef.current as HTMLDivElement, mapOptions)
      const marker = new google.maps.Marker({
        position: markerOptions,
        map,
        title: "Here we are",
      })
    }

    initMap()
  }, [])

  return (
    <section
      className="mb-8 text-center        mt-6 md:mt-8 lg:mt-16"
      id="accommodation"
    >
      <h2 className="text-3xl font-bold text-[#002C41]">How to find us </h2>
      <p className="mb-2 text-center">Calle example , n 24</p>
      <div className="w-50 h-80 mt-4" ref={mapRef} />

      <Link className="mt-8 text-white inline-block" href="#" target="_blank">
        <Button size="lg" variant="link" className="bg-[#FB9038] text-white">
          Contact us
        </Button>
      </Link>
    </section>
  )
}

export default FindUs
