import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { JSX, SVGProps } from "react"

/**
 * v0 by Vercel.
 * @see https://v0.dev/t/cFAIwJQTAG6
 */

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#F5F5F5]">
      {/* <nav className="bg-[#002C41] py-4 px-6 flex justify-between items-center">
        <Link href="#">
          <MountainIcon className="h-6 w-6" color="white" />
          <span className="sr-only">Acme Inc</span>
        </Link>
        <div className="flex space-x-8">
          <Link className="text-white hover:text-[#FB9038]" href="#">
            Why Choose Us
          </Link>
          <Link className="text-white hover:text-[#FB9038]" href="#">
            Gallery
          </Link>
          <Link className="text-white hover:text-[#FB9038]" href="#">
            Contact Us
          </Link>
        </div>
      </nav> */}
      <header className="flex flex-wrap items-center justify-between px-6 py-4 bg-gray-900 text-white">
        <div className="flex items-center justify-between w-full md:w-auto">
          <Link href="#">
            <MountainIcon className="h-6 w-6" />
            <span className="sr-only">Acme Inc</span>
          </Link>
        </div>
        <nav className="w-full md:w-auto md:flex gap-6 mt-4 md:mt-0">
          <Link className="hover:text-gray-300 block md:inline-block" href="#">
            Home
          </Link>
          <Link className="hover:text-gray-300 block md:inline-block" href="#">
            About
          </Link>
          <Link className="hover:text-gray-300 block md:inline-block" href="#">
            Services
          </Link>
          <Link className="hover:text-gray-300 block md:inline-block" href="#">
            Portfolio
          </Link>
          <Link className="hover:text-gray-300 block md:inline-block" href="#">
            Contact
          </Link>
        </nav>
      </header>
      <header className="relative bg-[#002C41] h-[400px] flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://plus.unsplash.com/premium_photo-1661962466364-1f54edb628cf?q=80&w=1856&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
          }}
        ></div>

        <div className="overlay text-center text-white px-4 relative z-10">
          <h1 className="text-4xl font-bold">
            Experience the Thrill of Off-Road Adventure
          </h1>
          <p className="mt-4 text-lg">
            Join our ATV excursions and explore the rugged terrains like never
            before.
          </p>

          <a
            className="mt-8    text-white inline-block"
            href="https://wa.me/34661776703"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              size="lg"
              variant="link"
              className="bg-[#FB9038] text-white"
            >
              Book Now
            </Button>
          </a>
        </div>
      </header>
      <AboutSection />
      <section
        className="py-12 px-4 mx-auto"
        id="why-choose"
        style={{ width: "80%" }}
      >
        <h2 className="text-3xl font-bold text-center text-[#002C41]">
          Why Choose Our Excursions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          <div className="text-center bg-white p-4 rounded-lg shadow-md">
            <MountainIcon className="h-12 w-12 mx-auto mb-4 text-[#91705A]" />
            <h3 className="text-2xl font-semibold text-[#002C41]">
              Rugged Terrains
            </h3>
            <p className="mt-2 text-[#002C41]">
              Experience the thrill of navigating through diverse landscapes.
            </p>
          </div>
          <div className="text-center bg-white p-10 rounded-lg shadow-md">
            <SunsetIcon className="h-12 w-12 mx-auto mb-4 text-[#91705A]" />
            <h3 className="text-2xl font-semibold text-[#002C41]">
              Scenic Views
            </h3>
            <p className="mt-2 text-[#002C41]">
              Enjoy breathtaking views and capture unforgettable moments.
            </p>
          </div>
          <div className="text-center bg-white p-4 rounded-lg shadow-md">
            <ViewIcon className="h-12 w-12 mx-auto mb-4 text-[#91705A]" />
            <h3 className="text-2xl font-semibold text-[#002C41]">
              Professional Guides
            </h3>
            <p className="mt-2 text-[#002C41]">
              Our guides ensure a safe and enjoyable adventure for all skill
              levels.
            </p>
          </div>
        </div>
      </section>
      <section
        className="mx-auto py-12 px-10 bg-[#F5F5F5]"
        id="gallery"
        style={{ width: "80%" }}
      >
        <h2 className="text-3xl font-bold text-center text-[#002C41]">
          Gallery
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          <Image
            alt="Gallery Image 1"
            className="w-full h-64 object-cover rounded-lg shadow-md"
            height="200"
            src="https://media.istockphoto.com/id/909363946/es/foto/hombre-montado-veh%C3%ADculo-atv-en-fuera-de-pista-tema-de-animaciones-de-deporte-al-aire-libre-de.jpg?s=1024x1024&w=is&k=20&c=yV2sXgt5NG3pgsiQo8Ml7woBRInMsfjrdJIQstOc39M="
            style={{
              aspectRatio: "200/200",
              objectFit: "cover",
            }}
            width="200"
          />
          <Image
            alt="Gallery Image 2"
            className="w-full h-64 object-cover rounded-lg shadow-md"
            height="200"
            src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/400437216.jpg?k=2c9f8271edc3d18e12ebee32a84fdc6e6e0dc89c338d151f2c849c0e8566ac8a&o=&hp=1"
            style={{
              aspectRatio: "200/200",
              objectFit: "cover",
            }}
            width="200"
          />
          <Image
            alt="Gallery Image 3"
            className="w-full h-64 object-cover rounded-lg shadow-md"
            height="200"
            src="https://media.istockphoto.com/id/1460528492/es/foto/todoterreno-en-un-paisaje-des%C3%A9rtico-al-norte-de-tabuk.jpg?s=612x612&w=0&k=20&c=3Fr8S2O6srAAbvbW07t8zgD4qPSTNxMD5pfBoSkIepA="
            style={{
              aspectRatio: "200/200",
              objectFit: "cover",
            }}
            width="200"
          />
          <Image
            alt="Gallery Image 1"
            className="w-full h-64 object-cover rounded-lg shadow-md"
            height="200"
            src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/400436398.jpg?k=4c1eace7f9bc63dbb70e4ea20db6e15a296a78bf3b7dd227eec3426aa9993927&o=&hp=1"
            style={{
              aspectRatio: "200/200",
              objectFit: "cover",
            }}
            width="200"
          />
          <Image
            alt="Gallery Image 2"
            className="w-full h-64 object-cover rounded-lg shadow-md"
            height="200"
            src="https://images.unsplash.com/photo-1678554832872-d7c4497784eb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            style={{
              aspectRatio: "200/200",
              objectFit: "cover",
            }}
            width="200"
          />
          <Image
            alt="Gallery Image 3"
            className="w-full h-64 object-cover rounded-lg shadow-md"
            height="200"
            src="https://media.istockphoto.com/id/1460528492/es/foto/todoterreno-en-un-paisaje-des%C3%A9rtico-al-norte-de-tabuk.jpg?s=612x612&w=0&k=20&c=3Fr8S2O6srAAbvbW07t8zgD4qPSTNxMD5pfBoSkIepA="
            style={{
              aspectRatio: "200/200",
              objectFit: "cover",
            }}
            width="200"
          />
        </div>
      </section>

      <section className="py-12 px-4 text-center" id="accommodation">
        <h2 className="text-3xl font-bold text-[#002C41]">
          Need Accommodation?
        </h2>
        <p className="mt-4 text-lg">
          Check out our hostel for a comfortable stay during your adventure.
        </p>
        <Link
          className="mt-8 text-white inline-block"
          href="https://www.booking.com/hotel/es/single-fin-hostel.es.html"
          target="_blank"
        >
          <Button size="lg" variant="link" className="bg-[#FB9038] text-white">
            View Hostel - Single fin
          </Button>
        </Link>
      </section>
      <footer
        className="bg-[#002C41] text-white py-8 px-4 mt-auto"
        id="contact"
      >
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-2xl font-bold">Off-Road Adventure</h3>
            <p className="mt-2">Explore the thrill of the wild.</p>
          </div>
          <div className="flex space-x-8">
            <Link className="text-white hover:text-[#FB9038]" href="#">
              About Us
            </Link>
            <Link
              className="text-white hover:text-[#FB9038]"
              href="https://wa.me/34661776703"
            >
              Contact Us
            </Link>
          </div>
        </div>
        <div className="mt-4 text-center">
          <p className="text-sm mt-2">
            © 2024 Off-Road Adventure. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}

function AboutSection() {
  return (
    <section className="w-full py-4 md:py-12 lg:py-16">
      <div className="container px-4 md:px-6">
        <div className="grid items-start gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-[#002C41]">
                The Excursion
              </h2>

              <p
                className="mx-auto max-w-[700px] text-gray-700 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400"
                style={{ lineHeight: "1.5" }}
              >
                Get ready for an adrenaline-pumping adventure with our ATV
                off-road excursion in Tenerife! Our product is designed to
                provide you with the ultimate off-road experience, whether
                you&apos;re a beginner or a seasoned rider.
              </p>
              <p>
                Our excursions are led by experienced guides who will take you
                through the wilderness of Tenerife, giving you a taste of the
                island&apos;s stunning natural beauty. You&apos;ll ride through
                gently graded forest trails and enjoy spectacular ocean scenery,
                all while experiencing the thrill of off-road riding.
              </p>
              <p>
                Our ATVs are built to last and are equipped with an easy-to-use
                interface that ensures high efficiency and performance. You can
                rest assured that you&apos;ll have a safe and enjoyable ride
                with us. So what are you waiting for? Book your ATV off-road
                excursion today and experience the thrill of off-road riding
                like never before!
              </p>
            </div>
            <ul className="grid gap-2 py-4">
              <li>
                <CheckIcon className="mr-2 inline-block h-4 w-4" />
                Easy to use interface
              </li>
              <li>
                <CheckIcon className="mr-2 inline-block h-4 w-4" />
                High efficiency and performance
              </li>
              <li>
                <CheckIcon className="mr-2 inline-block h-4 w-4" />
                Durable and built to last
              </li>
            </ul>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              {/* <Button size="lg">Learn More</Button> */}
              <Button
                size="lg"
                variant="link"
                className="bg-[#FB9038] text-white"
              >
                <a href="#">Purchase Now</a>
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <Image
              alt="Product Image"
              className="rounded-lg object-cover w-full aspect-square"
              height={500}
              src="https://media.istockphoto.com/id/1460528492/es/foto/todoterreno-en-un-paisaje-des%C3%A9rtico-al-norte-de-tabuk.jpg?s=612x612&w=0&k=20&c=3Fr8S2O6srAAbvbW07t8zgD4qPSTNxMD5pfBoSkIepA="
              width={500}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

function CheckIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}

function MountainIcon(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
  const color = props.color ?? "currentColor"

  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  )
}

function SunsetIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 10V2" />
      <path d="m4.93 10.93 1.41 1.41" />
      <path d="M2 18h2" />
      <path d="M20 18h2" />
      <path d="m19.07 10.93-1.41 1.41" />
      <path d="M22 22H2" />
      <path d="m16 6-4 4-4-4" />
      <path d="M16 18a4 4 0 0 0-8 0" />
    </svg>
  )
}

function ViewIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12s2.545-5 7-5c4.454 0 7 5 7 5s-2.546 5-7 5c-4.455 0-7-5-7-5z" />
      <path d="M12 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
      <path d="M21 17v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2" />
      <path d="M21 7V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2" />
    </svg>
  )
}
