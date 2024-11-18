export default function Card() {
    return (
        <div className="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="/">
                <img className="p-8 rounded-t-lg" src="data:image/jpeg;base64,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" />
            </a>
            <div className="px-5 pb-5">
                <a href="/">
                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                        Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport
                    </h5>
                </a>
                <div className="flex items-center mt-2.5 mb-5">
                    <svg
                        className="w-4 h-4 text-yellow-300 mr-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                    >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                        className="w-4 h-4 text-yellow-300 mr-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                    >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                        className="w-4 h-4 text-yellow-300 mr-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                    >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                        className="w-4 h-4 text-yellow-300 mr-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                    >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                        className="w-4 h-4 text-gray-200 dark:text-gray-600"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                    >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
                        4.0
                    </span>
                </div>
                <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold text-gray-900 dark:text-white">$599</span>
                    <a
                        href="/"
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        Add to cart
                    </a>
                </div>
            </div>
        </div>
    );
}
