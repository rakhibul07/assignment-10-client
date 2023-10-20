

const Faq = () => {
    return (
        <div className="py-4 lg:py-8">
            <div className="bg-base-100 dark:bg-slate-800 flex flex-col justify-center items-center min-h-screen">
                <section className="bg-base-200 dark:bg-slate-500 w-4/5 px-6 my-10 pb-8 pt-10 rounded-lg md:flex justify-between">
                    <div className="lg:w-2/6 py-2">
                        <p className="text-lg md:text-xl font-semibold">Frequently Asked Questions</p>
                    </div>
                    <div className="lg:w-3/4">
                        <details className="border border-slate-200 rounded pt-2 pb-3 px-3 relative open:shadow-lg mb-1 bg-none open:bg-white duration-300">
                            <summary className="list-none font-semibold relative text-sm cursor-pointer pr-7">
                                How can I purchase products from your website?
                                <div className="absolute top-0 right-0 bg-slate-200 rounded-full px-1 py-0.5 cursor-pointer visible open:invisible">
                                    <svg
                                        className="h-5 w-4 text-pink-700"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="{1.5}"
                                        stroke="currentColor"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                    </svg>
                                </div>
                            </summary>
                            <p className="text-xs pt-3 text-justify">
                                To purchase products from our website, simply browse our catalog, select the items you want, and add them to your cart. Then, proceed to the checkout page, where you can enter your shipping and payment information to complete the purchase.
                            </p>
                        </details>
                        <details className="border border-slate-200 rounded pt-2 pb-3 px-3 relative open:shadow-lg mb-1 bg-none open:bg-white duration-300">
                            <summary className="list-none font-semibold relative text-sm cursor-pointer pr-7">
                                What brands of products do you offer on your website?
                                <div className="absolute top-0 right-0 bg-slate-200 rounded-full px-1 py-0.5 cursor-pointer visible open:invisible">
                                    <svg
                                        className="h-5 w-4 text-pink-700"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="{1.5}"
                                        stroke="currentColor"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                    </svg>
                                </div>
                            </summary>
                            <p className="text-xs pt-3 text-justify">
                                We offer a wide selection of products from renowned brands such as Apple, Sony, Intel, Samsung, and many more. You can explore our website to find products from your favorite brands.
                            </p>
                        </details>
                        <details className="border border-slate-200 rounded pt-2 pb-3 px-3 relative open:shadow-lg mb-1 bg-none open:bg-white duration-300">
                            <summary className="list-none font-semibold relative text-sm cursor-pointer pr-7">
                                What payment methods are accepted on your website?
                                <div className="absolute top-0 right-0 bg-slate-200 rounded-full px-1 py-0.5 cursor-pointer visible open:invisible">
                                    <svg
                                        className="h-5 w-4 text-pink-700"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="{1.5}"
                                        stroke="currentColor"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                    </svg>
                                </div>
                            </summary>
                            <p className="text-xs pt-3 text-justify">
                                We accept a variety of payment methods, including credit/debit cards, PayPal, and other secure online payment options. You can choose the payment method that suits you best during the checkout process.
                            </p>
                        </details>
                        <details className="border border-slate-200 rounded pt-2 pb-3 px-3 relative open:shadow-lg mb-1 bg-none open:bg-white duration-300">
                            <summary className="list-none font-semibold relative text-sm cursor-pointer pr-7">
                                Is international shipping available for your products?
                                <div className="absolute top-0 right-0 bg-slate-200 rounded-full px-1 py-0.5 cursor-pointer visible open:invisible">
                                    <svg
                                        className="h-5 w-4 text-pink-700"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="{1.5}"
                                        stroke="currentColor"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                    </svg>
                                </div>
                            </summary>
                            <p className="text-xs pt-3 text-justify">
                                Yes, we offer international shipping for our products. You can place an order from anywhere in the world, and we will arrange the delivery to your location. Please note that shipping fees and delivery times may vary depending on your location.
                            </p>
                        </details>
                        <details className="border border-slate-200 rounded pt-2 pb-3 px-3 relative open:shadow-lg mb-1 bg-none open:bg-white duration-300">
                            <summary className="list-none font-semibold relative text-sm cursor-pointer pr-7">
                                What is your return and refund policy?
                                <div className="absolute top-0 right-0 bg-slate-200 rounded-full px-1 py-0.5 cursor-pointer visible open:invisible">
                                    <svg
                                        className="h-5 w-4 text-pink-700"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="{1.5}"
                                        stroke="currentColor"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                    </svg>
                                </div>
                            </summary>
                            <p className="text-xs pt-3 text-justify">
                                Our return and refund policy allows you to return products within 30 days of purchase if they are in their original condition and packaging. If you are not satisfied with your purchase, please contact our customer support to initiate a return or request a refund. We aim to process refunds within 7-10 business days.
                            </p>
                        </details>
                        <details className="border border-slate-200 rounded pt-2 pb-3 px-3 relative open:shadow-lg mb-1 bg-none open:bg-white duration-300">
                            <summary className="list-none font-semibold relative text-sm cursor-pointer pr-7">
                                Do you offer product warranties?
                                <div className="absolute top-0 right-0 bg-slate-200 rounded-full px-1 py-0.5 cursor-pointer visible open:invisible">
                                    <svg
                                        className="h-5 w-4 text-pink-700"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="{1.5}"
                                        stroke="currentColor"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                    </svg>
                                </div>
                            </summary>
                            <p className="text-xs pt-3 text-justify">
                                Yes, many of our products come with warranties. The warranty duration varies by product and brand. Please check the product details for warranty information. Our customer support team is available to assist you with any warranty claims or questions.
                            </p>
                        </details>
                        <details className="border border-slate-200 rounded pt-2 pb-3 px-3 relative open:shadow-lg mb-1 bg-none open:bg-white duration-300">
                            <summary className="list-none font-semibold relative text-sm cursor-pointer pr-7">
                                Can I track the status of my order?
                                <div className="absolute top-0 right-0 bg-slate-200 rounded-full px-1 py-0.5 cursor-pointer visible open:invisible">
                                    <svg
                                        className="h-5 w-4 text-pink-700"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="{1.5}"
                                        stroke="currentColor"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                    </svg>
                                </div>
                            </summary>
                            <p className="text-xs pt-3 text-justify">
                                Yes, you can easily track the status of your order by visiting the Order Status page on our website. You will need to enter your order number and email address to view the current status and estimated delivery date.
                            </p>
                        </details>
                        <details className="border border-slate-200 rounded pt-2 pb-3 px-3 relative open:shadow-lg mb-1 bg-none open:bg-white duration-300">
                            <summary className="list-none font-semibold relative text-sm cursor-pointer pr-7">
                                How can I contact your customer support team?
                                <div className="absolute top-0 right-0 bg-slate-200 rounded-full px-1 py-0.5 cursor-pointer visible open:invisible">
                                    <svg
                                        className="h-5 w-4 text-pink-700"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="{1.5}"
                                        stroke="currentColor"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                    </svg>
                                </div>
                            </summary>
                            <p className="text-xs pt-3 text-justify">
                                You can reach our customer support team by visiting the Contact Us page on our website. There, you will find our email address and phone number. Feel free to contact us with any questions, concerns, or inquiries, and our team will be happy to assist you.
                            </p>
                        </details>
                        {/* Add more FAQ items here */}
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Faq;
