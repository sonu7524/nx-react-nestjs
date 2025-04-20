export default function UserDetailsForm() {
    return (
        <form className="mt-6">
            <div className="mt-6">
                <label htmlFor="email-address" className="block text-sm/6 font-medium text-gray-700">
                    Email address
                </label>
                <div className="mt-2">
                    <input
                        id="email-address"
                        name="email-address"
                        type="email"
                        autoComplete="email"
                        className="block w-full rounded-md bg-white px-3 py-2 text-base text-gray-900 border outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    />
                </div>
            </div>

            <div className="mt-6">
                <label htmlFor="phone" className="block text-sm/6 font-medium text-gray-700">
                    Phone number
                </label>
                <div className="mt-2">
                    <input
                        id="phone"
                        name="phone"
                        type="text"
                        autoComplete="tel"
                        className="block w-full border rounded-md bg-white px-3 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    />
                </div>
            </div>

            <div className="mt-6 flex gap-3">
                <div className="flex h-5 shrink-0 items-center">
                    <div className="group grid size-4 grid-cols-1">
                        <input
                            id="terms"
                            name="terms"
                            type="checkbox"
                            className="col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
                        />
                        <svg
                            fill="none"
                            viewBox="0 0 14 14"
                            className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-disabled:stroke-gray-950/25"
                        >
                            <path
                                d="M3 8L6 11L11 3.5"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="opacity-0 group-has-checked:opacity-100"
                            />
                            <path
                                d="M3 7H11"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="opacity-0 group-has-indeterminate:opacity-100"
                            />
                        </svg>
                    </div>
                </div>
                <label htmlFor="terms" className="text-sm text-gray-500">
                    I have read the terms and conditions and agree to the sale of my personal information to the highest
                    bidder.
                </label>
            </div>

            <button
                type="submit"
                disabled
                className="mt-6 w-full rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-xs hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-hidden disabled:cursor-not-allowed disabled:bg-gray-100 disabled:text-gray-500"
            >
                Continue
            </button>
        </form>
    );
}