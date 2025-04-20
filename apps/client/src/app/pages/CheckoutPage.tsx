import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react"
import { ChevronDownIcon } from "@heroicons/react/24/outline"
import AddressForm from "../../components/AddressForm"
import UserDetailsForm from "../../components/UserDetailsForm"

const products = [
    {
        id: 1,
        name: "Women's Basic Tee",
        href: '#',
        price: '$32.00',
        color: 'Gray',
        size: 'S',
        imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/checkout-page-05-product-01.jpg',
        imageAlt: "Front of women's basic tee in heather gray.",
    },
    // More products...
]

export default function Example() {
    return (
        <div className="bg-white">
            <div className="mx-auto max-w-7xl px-4 pt-4 pb-16 sm:px-6 sm:pt-8 sm:pb-24 lg:px-8 xl:px-2 xl:pt-14">
                <h1 className="sr-only">Checkout</h1>

                <div className="mx-auto grid max-w-lg grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
                    <div className="mx-auto w-full max-w-lg">
                        <h2 className="sr-only">Order summary</h2>

                        <div className="flow-root">
                            <ul role="list" className="-my-6 divide-y divide-gray-200">
                                {products.map((product) => (
                                    <li key={product.id} className="flex space-x-6 py-6">
                                        <img
                                            alt={product.imageAlt}
                                            src={product.imageSrc}
                                            className="size-24 flex-none rounded-md bg-gray-100 object-cover"
                                        />
                                        <div className="flex-auto">
                                            <div className="space-y-1 sm:flex sm:items-start sm:justify-between sm:space-x-6">
                                                <div className="flex-auto space-y-1 text-sm font-medium">
                                                    <h3 className="text-gray-900">
                                                        <a href={product.href}>{product.name}</a>
                                                    </h3>
                                                    <p className="text-gray-900">{product.price}</p>
                                                    <p className="hidden text-gray-500 sm:block">{product.color}</p>
                                                    <p className="hidden text-gray-500 sm:block">{product.size}</p>
                                                </div>
                                                <div className="flex flex-none space-x-4">
                                                    <button type="button" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
                                                        Edit
                                                    </button>
                                                    <div className="flex border-l border-gray-300 pl-4">
                                                        <button type="button" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
                                                            Remove
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <dl className="mt-10 space-y-6 text-sm font-medium text-gray-500">
                            <div className="flex justify-between">
                                <dt>Subtotal</dt>
                                <dd className="text-gray-900">$104.00</dd>
                            </div>
                            <div className="flex justify-between">
                                <dt>Taxes</dt>
                                <dd className="text-gray-900">$8.32</dd>
                            </div>
                            <div className="flex justify-between">
                                <dt>Shipping</dt>
                                <dd className="text-gray-900">$14.00</dd>
                            </div>
                            <div className="flex justify-between border-t border-gray-200 pt-6 text-gray-900">
                                <dt className="text-base">Total</dt>
                                <dd className="text-base">$126.32</dd>
                            </div>
                        </dl>
                    </div>

                    <div className="mx-auto w-full max-w-lg">
                        <div className="mt-10 divide-y divide-gray-200 border-t border-b border-gray-200">
                            <Disclosure>
                                {({ open }) => (
                                    <>
                                        <DisclosureButton className="flex w-full items-center justify-between py-6 text-left text-lg font-medium text-gray-900">
                                            <span>Contact information</span>
                                            <ChevronDownIcon
                                                className={`${open ? 'rotate-180 transform' : ''
                                                    } h-5 w-5 text-indigo-500`}
                                            />
                                        </DisclosureButton>
                                        <DisclosurePanel className="pb-6 text-sm text-gray-500 border-none">
                                            <UserDetailsForm />
                                        </DisclosurePanel>
                                    </>
                                )}
                            </Disclosure>
                            <Disclosure>
                                {({ open }) => (
                                    <>
                                        <DisclosureButton className="flex w-full items-center justify-between py-6 text-left text-lg font-medium text-gray-900">
                                            <span>Shipping details</span>
                                            <ChevronDownIcon
                                                className={`${open ? 'rotate-180 transform' : ''
                                                    } h-5 w-5 text-indigo-500`}
                                            />
                                        </DisclosureButton>
                                        <DisclosurePanel className="pb-6 text-sm text-gray-500 border-none">
                                            <AddressForm />
                                        </DisclosurePanel>
                                    </>
                                )}
                            </Disclosure>
                            <Disclosure>
                                {({ open }) => (
                                    <>
                                        <DisclosureButton className="flex w-full items-center justify-between py-6 text-left text-lg font-medium text-gray-900">
                                            <span>Billing details</span>
                                            <ChevronDownIcon
                                                className={`${open ? 'rotate-180 transform' : ''
                                                    } h-5 w-5 text-indigo-500`}
                                            />
                                        </DisclosureButton>
                                        <DisclosurePanel className="pb-6 text-sm text-gray-500 border-none">
                                            <AddressForm />
                                        </DisclosurePanel>
                                    </>
                                )}
                            </Disclosure>
                            <Disclosure>
                                {({ open }) => (
                                    <>
                                        <DisclosureButton className="flex w-full items-center justify-between py-6 text-left text-lg font-medium text-gray-900">
                                            <span>Payment details</span>
                                            <ChevronDownIcon
                                                className={`${open ? 'rotate-180 transform' : ''
                                                    } h-5 w-5 text-indigo-500`}
                                            />
                                        </DisclosureButton>
                                        <DisclosurePanel className="pb-6 text-sm text-gray-500 border-none">
                                            <p>Payment form goes here</p>
                                        </DisclosurePanel>
                                    </>
                                )}
                            </Disclosure>
                            <div className="flex items-center justify-between py-6">
                                <div className="flex items-center">
                                    <input
                                        id="terms"
                                        name="terms"
                                        type="checkbox"
                                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                    />
                                    <label htmlFor="terms" className="ml-2 block text-sm text-gray-900">
                                        I agree to the{' '}
                                        <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                                            terms and conditions
                                        </a>
                                    </label>
                                </div>
                                <button
                                    type="submit"
                                    className="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                >
                                    Checkout
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
