import React from 'react';

// Pricing Component. CSS file was not needed as i am using tailwindcss.

const Pricing = () => {
    return (
        <div class="pricing-table-2 bg-gray-800 py-6 md:py-12">
            <div class="container mx-auto px-4">

                <div class="max-w-3xl mx-auto text-center">
                    <h1 class="text-4xl md:text-4xl font-medium text-white mb-4 md:mb-6">Find Your Plan</h1>
                    <p class="text-gray-500 xl:mx-12">You have 3 plans to choose from WeDev. Basic courses are FREE forever. You can use it for your personal or for your organization. Just don't forget to share our website.</p>
                </div>

                <div class="pricing-plans lg:flex lg:-mx-4 mt-6 md:mt-12">

                    <div class="pricing-plan-wrap lg:w-1/3 my-4 md:my-6">
                        <div class="pricing-plan border-t-4 border-solid border-white bg-white text-center max-w-sm mx-auto hover:border-indigo-600 transition-colors duration-300">
                            <div class="p-6 md:py-8">
                                <h4 class="font-medium leading-tight text-2xl mb-2">Free</h4>
                                <p class="text-gray-600">For personal use</p>
                            </div>
                            <div class="pricing-amount bg-indigo-100 p-6 hover:bg-indigo-600 duration-300">
                                <div class=""><span class="text-4xl font-semibold">$0</span> /First Month</div>
                            </div>
                            <div class="p-6">
                                <ul class="leading-loose">
                                    <li>1 user</li>
                                    <li>Max 5 Courses/month</li>
                                    <li>100 hours/month</li>
                                    <li>Basic statistics</li>
                                    <li>Email Support</li>
                                </ul>
                                <div class="mt-6 py-4">
                                    <button class="bg-indigo-600 text-xl text-white py-2 px-6 rounded hover:bg-indigo-700 transition-colors duration-300">Get Started</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="pricing-plan-wrap lg:w-1/3 my-4 md:my-6">
                        <div class="pricing-plan border-t-4 border-solid border-white bg-white text-center max-w-sm mx-auto hover:border-indigo-600 transition-colors duration-300">
                            <div class="p-6 md:py-8">
                                <h4 class="font-medium leading-tight text-2xl mb-2">Professional</h4>
                                <p class="text-gray-600">For professional</p>
                            </div>
                            <div class="pricing-amount bg-indigo-100 p-6 hover:bg-indigo-600 duration-300">
                                <div><span class="text-4xl font-semibold">$29</span> /Month</div>
                            </div>
                            <div class="p-6">
                                <ul class="leading-loose">
                                    <li>Upto 3 uses</li>
                                    <li>Unlimited Courses</li>
                                    <li>Unlimited Hours</li>
                                    <li>Full statistics</li>
                                    <li>Email Support</li>
                                </ul>
                                <div class="mt-6 py-4">
                                    <button class="bg-indigo-600 text-xl text-white py-2 px-6 rounded hover:bg-indigo-700 transition-colors duration-300">Get Started</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="pricing-plan-wrap lg:w-1/3 my-4 md:my-6">
                        <div class="pricing-plan border-t-4 border-solid border-white bg-white text-center max-w-sm mx-auto hover:border-indigo-600 transition-colors duration-300">
                            <div class="p-6 md:py-8">
                                <h4 class="font-medium leading-tight text-2xl mb-2">Enterprise</h4>
                                <p class="text-gray-600">For large Enterprise</p>
                            </div>
                            <div class="pricing-amount bg-indigo-100 p-6  transition-colors duration-300">
                                <div class="hover:border-indigo-600"><span class="text-4xl font-semibold">$100</span> /Month</div>
                            </div>
                            <div class="p-6">
                                <ul class="leading-loose">
                                    <li>Unlimited uses</li>
                                    <li>Unlimited Courses</li>
                                    <li>Unlimited Hours</li>
                                    <li>Full statistics</li>
                                    <li>Email &amp; Phone Support</li>
                                </ul>
                                <div class="mt-6 py-4">
                                    <button class="bg-indigo-600 text-xl text-white py-2 px-6 rounded hover:bg-indigo-700 transition-colors duration-300">Get Started</button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Pricing;