'use client'

import Footer from "../../components/Footer"
import ImageGridStyle1 from "../../components/ImageStyles/ImageGridStyle1"
import ImageGridStyle2 from "../../components/ImageStyles/imageGridStyle2"
import { favorites, footerNavigation } from "../../utils/constants"

export default function LandingPage() {
    return (
        <div className="bg-white">

            <header className="relative overflow-hidden bg-gray-100">
                {/* Hero section */}
                <div className="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
                    <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
                        <div className="sm:max-w-lg">
                            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                                Timeless Elegance, Crafted for You
                            </h1>
                            <p className="mt-4 text-xl text-gray-500">
                                Discover our exclusive collection of handcrafted jewelry — where beauty meets brilliance. Elevate your style with pieces designed to shine through every moment.
                            </p>
                        </div>
                        <div>
                            <div className="mt-10">
                                {/* Decorative image grid */}
                                <ImageGridStyle1 />
                                <a
                                    href="#"
                                    className="inline-block rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-center font-medium text-white hover:bg-indigo-700"
                                >
                                    Shop Collection
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <main>
                {/* Category section */}
                <section aria-labelledby="category-heading" className="bg-gray-50">
                    <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
                        <div className="sm:flex sm:items-baseline sm:justify-between">
                            <h2 id="category-heading" className="text-2xl font-bold tracking-tight text-gray-900">
                                Shop by Category
                            </h2>
                            <a href="#" className="hidden text-sm font-semibold text-indigo-600 hover:text-indigo-500 sm:block">
                                Browse all categories
                                <span aria-hidden="true"> &rarr;</span>
                            </a>
                        </div>

                        <div className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:grid-rows-2 sm:gap-x-6 lg:gap-8">
                            <div className="group relative aspect-2/1 overflow-hidden rounded-lg sm:row-span-2 sm:aspect-square">
                                <img
                                    alt="Two models wearing women's black cotton crewneck tee and off-white cotton crewneck tee."
                                    src="https://media.istockphoto.com/id/940543156/photo/beautiful-indian-young-women-portrait-with-jewelry.jpg?s=612x612&w=0&k=20&c=8RMfNC0_T-eIuZ3r5dKuTbusak9Y7OX-JnP3D4_msiA="
                                    className="absolute size-full object-cover group-hover:opacity-75"
                                />
                                <div
                                    aria-hidden="true"
                                    className="absolute inset-0 bg-linear-to-b from-transparent to-black opacity-50"
                                />
                                <div className="absolute inset-0 flex items-end p-6">
                                    <div>
                                        <h3 className="font-semibold text-white">
                                            <a href="#">
                                                <span className="absolute inset-0" />
                                                New Arrivals
                                            </a>
                                        </h3>
                                        <p aria-hidden="true" className="mt-1 text-sm text-white">
                                            Shop now
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="group relative aspect-2/1 overflow-hidden rounded-lg sm:aspect-auto">
                                <img
                                    alt="Wooden shelf with gray and olive drab green baseball caps, next to wooden clothes hanger with sweaters."
                                    src="https://media.istockphoto.com/id/924150310/photo/beautiful-indian-traditional-bride-portrait.jpg?s=612x612&w=0&k=20&c=32mKuPkAWufQuCDsYfYUs7S-dIwuQ6zZxXlIbhXBaRE="
                                    className="absolute size-full object-cover group-hover:opacity-75"
                                />
                                <div
                                    aria-hidden="true"
                                    className="absolute inset-0 bg-linear-to-b from-transparent to-black opacity-50"
                                />
                                <div className="absolute inset-0 flex items-end p-6">
                                    <div>
                                        <h3 className="font-semibold text-white">
                                            <a href="#">
                                                <span className="absolute inset-0" />
                                                Necklace
                                            </a>
                                        </h3>
                                        <p aria-hidden="true" className="mt-1 text-sm text-white">
                                            Shop now
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="group relative aspect-2/1 overflow-hidden rounded-lg sm:aspect-auto">
                                <img
                                    alt="Walnut desk organizer set with white modular trays, next to porcelain mug on wooden desk."
                                    src="https://media.istockphoto.com/id/618727926/photo/happy-girls-buying-earrings-in-jewelry-shop-before-festival.jpg?s=612x612&w=0&k=20&c=G9jP3B32OLz6kG6LyDNbC8OSFLT7KJTIRXmxVX8vunQ="
                                    className="absolute size-full object-cover group-hover:opacity-75"
                                />
                                <div
                                    aria-hidden="true"
                                    className="absolute inset-0 bg-linear-to-b from-transparent to-black opacity-50"
                                />
                                <div className="absolute inset-0 flex items-end p-6">
                                    <div>
                                        <h3 className="font-semibold text-white">
                                            <a href="#">
                                                <span className="absolute inset-0" />
                                                Earings
                                            </a>
                                        </h3>
                                        <p aria-hidden="true" className="mt-1 text-sm text-white">
                                            Shop now
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-6 sm:hidden">
                            <a href="#" className="block text-sm font-semibold text-indigo-600 hover:text-indigo-500">
                                Browse all categories
                                <span aria-hidden="true"> &rarr;</span>
                            </a>
                        </div>
                    </div>
                </section>

                {/* Featured section */}
                <section aria-labelledby="craftsmanship-heading">
                    <div className="relative bg-gray-800 px-6 py-32 sm:px-12 sm:py-40 lg:px-16">
                        <div className="absolute inset-0 overflow-hidden">
                            <img
                                alt="Exquisite gold jewelry collection"
                                src="https://img.freepik.com/premium-photo/gold-jewelry-blur-background_955834-9373.jpg?semt=ais_hybrid&w=740"
                                className="size-full object-cover"
                            />
                        </div>
                        <div aria-hidden="true" className="absolute inset-0 bg-gray-900/60" />
                        <div className="relative mx-auto flex max-w-3xl flex-col items-center text-center">
                            <h2 id="craftsmanship-heading" className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                                Crafting Elegance, Preserving Heritage
                            </h2>
                            <p className="mt-3 text-xl text-white">
                                At Jewellkart, every piece tells a story. Rooted in tradition and refined with modern design, our jewelry is handcrafted with
                                precision, passion, and purpose — made to be cherished for generations.
                            </p>
                            <a
                                href="/about"
                                className="mt-8 block w-full rounded-md border border-transparent bg-white px-8 py-3 text-base font-medium text-gray-900 hover:bg-gray-100 sm:w-auto"
                            >
                                Discover Our Journey
                            </a>
                        </div>
                    </div>
                </section>

                {/* Favorites section */}
                <section aria-labelledby="favorites-heading">
                    <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
                        <div className="sm:flex sm:items-baseline sm:justify-between">
                            <h2 id="favorites-heading" className="text-2xl font-bold tracking-tight text-gray-900">
                                Our Favorites
                            </h2>
                            <a href="#" className="hidden text-sm font-semibold text-indigo-600 hover:text-indigo-500 sm:block">
                                Browse all favorites
                                <span aria-hidden="true"> &rarr;</span>
                            </a>
                        </div>

                        <div className="mt-6 grid grid-cols-1 gap-y-10 sm:grid-cols-3 sm:gap-x-6 sm:gap-y-0 lg:gap-x-8">
                            {favorites.map((favorite) => (
                                <div key={favorite.id} className="group relative">
                                    <img
                                        alt={favorite.imageAlt}
                                        src={favorite.imageSrc}
                                        className="h-96 w-full rounded-lg object-cover group-hover:opacity-75 sm:aspect-2/3 sm:h-auto"
                                    />
                                    <h3 className="mt-4 text-base font-semibold text-gray-900">
                                        <a href={favorite.href}>
                                            <span className="absolute inset-0" />
                                            {favorite.name}
                                        </a>
                                    </h3>
                                    <p className="mt-1 text-sm text-gray-500">{favorite.price}</p>
                                </div>
                            ))}
                        </div>

                        <div className="mt-6 sm:hidden">
                            <a href="#" className="block text-sm font-semibold text-indigo-600 hover:text-indigo-500">
                                Browse all favorites
                                <span aria-hidden="true"> &rarr;</span>
                            </a>
                        </div>
                    </div>
                </section>

                {/* CTA section */}
                <section aria-labelledby="sale-heading">
                    <div className="overflow-hidden pt-32 sm:pt-14">
                        <div className="bg-gray-800">
                            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                                <div className="relative pt-48 pb-16 sm:pb-24">
                                    <div>
                                        <h2 id="sale-heading" className="text-4xl font-bold tracking-tight text-white md:text-5xl">
                                            Final Stock.
                                            <br />
                                            Up to 50% off.
                                        </h2>
                                        <div className="mt-6 text-base">
                                            <a href="#" className="font-semibold text-white">
                                                Shop the sale
                                                <span aria-hidden="true"> &rarr;</span>
                                            </a>
                                        </div>
                                    </div>

                                    <ImageGridStyle2 />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}
