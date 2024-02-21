import React, { Component } from 'react'

export default class index extends Component {
    state = {
        overview: [
            { q: 'What is Zitop?', a: 'I collaborated with a talented team at Elitive company on a project that involved a two-month timeline to conceptualize and design an entire app. Our focus was on providing innovative solutions to address challenges within the fashion industry, particularly those faced by buyers. Throughout the project, we worked diligently to not only develop a visually appealing design but also to create practical solutions that could enhance the overall experience for both industry stakeholders and consumers.' },
            { q: 'My Role', a: 'Sprint Lead for design development and prototyping, Evaluated Research Insights and Developed features, Lead development of UI and High Fidelity Design.' },
            { q: 'Team', a: 'Gedrich Mohseni, Pouya Pezhman, Parna Azizi' },
            { q: 'Tools', a: 'Figma, Figjam, Photoshop, Illustrator' },
        ],

        problems: [
            { title: 'Limited Reach and Visibility', a: 'Offline fashion businesses are confined to a physical location, limiting their reach to local customers. This makes it challenging to tap into a wider audience and gain visibility beyond their immediate vicinity.' },
            { title: 'Dependency on Foot Traffic', a: 'Traditional fashion stores heavily rely on foot traffic for sales. Fluctuations in footfall due to factors like weather, seasons, or local events can directly impact sales, making it difficult for businesses to maintain consistent revenue.' },
            { title: 'Inventory Management Challenges', a: 'Managing inventory in an offline fashion store can be complex. Predicting customer preferences and ensuring that the right products are in stock at all times is a delicate balance. Overstocking can lead to excess inventory, while understocking can result in missed sales opportunities.' },
            { title: 'Limited Data and Analytics', a: 'Offline businesses often lack the data analytics capabilities that online retailers benefit from. Understanding customer behavior, preferences, and purchasing patterns becomes more challenging without the data insights available in the online space. This limits the ability to make informed business decisions and optimize strategies.' },
        ], 

        challenge: [
            { title: 'Seamless User Experience' },
            { title: 'Inventory Management' },
            { title: 'Personalization' },
            { title: 'Mobile Integration' },
            { title: 'In-Store Technology' },
            { title: 'Data Security and Privacy' },
            { title: 'Order Fulfillment' },
            { title: 'Multi-Channel Marketing' },
            { title: 'Customer Loyalty Programs' },
            { title: 'User Education' },
        ],

        wireframe: [
            { img: '/assets/zitop/w1.svg' },
            { img: '/assets/zitop/w2.svg' },
            { img: '/assets/zitop/w3.svg' },
            { img: '/assets/zitop/w4.svg' },
            { img: '/assets/zitop/w5.svg' },
        ],

        colors: [
            { color: '#FF3B30' },
            { color: '#1C1C1E' },
            { color: '#6C6C70' },
            { color: '#AEAEB2' },
            { color: '#D8D8DC' },
            { color: '#F8F8F8' },
        ]
    }
    render() {
        return (
            <div className='bg-gray-50 dark:bg-gray-950'>
                <div className='max-w-5xl mx-auto px-5 lg:px-0'>
                    <div className='grid grid-cols-5 gap-10'>
                        <div className='col-span-5 md:col-span-2 pt-32'>
                            <p className='font-PlayfairDisplay text-7xl text-gray-900 dark:text-gray-100'>Zitop</p>
                            <p className='font-PlayfairDisplay text-5xl text-gray-900 dark:text-gray-100 pt-5'>O2O Fashion App!</p>
                            <p className='mt-10 text-gray-800 dark:text-gray-200'>Empower users to uncover their ideal fashion piece, offering diverse opportunities for them to choose from.</p>
                            <p className='mt-5 text-gray-800 dark:text-gray-200'>Assist in leveraging online opportunities to promote a new fashion business in the industry.</p>
                        </div>
                        <div className='col-span-5 md:col-span-3'>
                            <img className='w-full' src='/assets/zitop/1.png' />
                        </div>
                    </div>
                </div>
                <div className='py-20 bg-white dark:bg-gray-1000'>
                    <div className='max-w-5xl mx-auto px-5 lg:px-0'>
                        <p className='text-2xl pb-10 text-gray-800 dark:text-gray-200 border-b border-gray-200 dark:border-gray-800'>Overview</p>
                        <div className='grid grid-cols-2 gap-10 mt-10'>
                            {this.state.overview.map((prop, index) => {
                                return (
                                    <div className='col-span-2 md:col-span-1'>
                                        <p className='text-gray-900 dark:text-gray-100 text-lg font-medium'>{prop.q}</p>
                                        <p className='text-gray-800 dark:text-gray-200 text-base font-light'>{prop.a}</p>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
                <div className='py-20'>
                    <div className='max-w-5xl mx-auto px-5 lg:px-0'>
                        <p className='text-2xl pb-10 text-gray-800 dark:text-gray-200 border-b border-gray-200 dark:border-gray-800'>Problems</p>
                        <div className='grid grid-cols-2 gap-10 mt-10'>
                            {this.state.problems.map((prop, index) => {
                                return (
                                    <div className='col-span-2 md:col-span-2' key={index}>
                                        <p className='text-gray-900 dark:text-gray-100 text-lg font-medium'>{prop.title}</p>
                                        <p className='text-gray-800 dark:text-gray-200 text-base font-light'>{prop.a}</p>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
                <div className='py-20 bg-white dark:bg-gray-1000'>
                    <div className='max-w-5xl mx-auto px-5 lg:px-0'>
                        <div className='grid grid-cols-4 gap-20'>
                            <div className='md:col-span-2 col-span-4'>
                                <div className='sticky top-20'>
                                    <p className='text-2xl text-gray-800 dark:text-gray-200'>User flow diagram</p>
                                    <p className='text-base pt-5 text-gray-800 dark:text-gray-200'>We crafted a mobile app that offers accurate clothing recommendations and exclusive deals for users, making the shopping experience convenient. Our app also connects businesses, creating diverse fashion communities where users can contribute in unique ways.</p>
                                </div>
                            </div>
                            <div className='md:col-span-2 col-span-4'>
                                <img src='/assets/zitop/sitemap.svg' />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='py-20'>
                    <div className='max-w-5xl mx-auto px-5 lg:px-0'>
                        <p className='text-2xl text-gray-800 dark:text-gray-200'>Wireframes</p>
                        <p className='text-base pt-5 text-gray-800 dark:text-gray-200'>In my wireframes, I made sure to include some user goals, such as the ability to find, see interests, be able to switch from User View/Business View, as well as to include a communication page.</p>
                        <div className='grid grid-cols-4 md:grid-cols-5 gap-10 mt-14'>
                            {this.state.wireframe.map((prop, index) => {
                                return (
                                    <div className='col-span-2 md:col-span-1'>
                                        <img className='w-full' src={prop.img} />
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
                <div className='py-20 bg-white dark:bg-gray-1000'>
                    <div className='max-w-5xl mx-auto px-5 lg:px-0'>
                        <div className=''>
                            <p className='text-2xl text-gray-800 dark:text-gray-200'>Colors</p>
                            <p className='text-base pt-5 text-gray-800 dark:text-gray-200'>An Iconic Palette of shades with on accent color inspired by Merlin Monroe's with a splash of vibrant red lipstick</p>
                        </div>
                        <div className='grid grid-cols-5 gap-10 mt-20'>
                            <div className='col-span-2'>
                                <img className='rounded-2xl' src='/assets/zitop/merlin.png' />
                            </div>
                            <div className='col-span-3'>
                                <div className='grid grid-cols-3 gap-10'>
                                    {this.state.colors.map((prop, index) => {
                                        return (
                                            <div className='flexcc flex-col'>
                                                <div className='col-span-1 w-full aspect-square rounded-2xl shadow-md shadow-gray-100 dark:shadow-gray-1000' style={{ backgroundColor: prop.color }}></div>
                                                <p className='mt-5 text-gray-950 dark:text-gray-100'>{prop.color}</p>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='py-20'>
                    <div className='max-w-5xl mx-auto px-5 lg:px-0'>
                        {/* <p className='text-2xl text-gray-800 dark:text-gray-200'>Screens</p> */}
                        {/* <p className='text-base pt-5 pb-10 text-gray-800 dark:text-gray-200'>Selective of screans design of the application</p> */}
                        <p className='flexcc mb-10 text-lg text-gray-700 dark:text-gray-300'>Welcome</p>
                        <div className='grid grid-cols-3 gap-10 max-w-2xl mx-auto'>
                            <img className='col-span-1' src='/assets/zitop/we1.png' />
                            <img className='col-span-1' src='/assets/zitop/we2.png' />
                            <img className='col-span-1' src='/assets/zitop/we3.png' />
                        </div>
                        <div className='mt-20'>
                            <p className='flexcc mb-10 text-lg text-gray-700 dark:text-gray-300'>Sign up / Login</p>
                            <div className='grid grid-cols-4 md:grid-cols-5 gap-10'>
                                <img className='md:col-span-1 col-span-2' src='/assets/zitop/s1.png' />
                                <img className='md:col-span-1 col-span-2' src='/assets/zitop/s2.png' />
                                <img className='md:col-span-1 col-span-2' src='/assets/zitop/s3.png' />
                                <img className='md:col-span-1 col-span-2' src='/assets/zitop/s4.png' />
                                <img className='md:col-span-1 col-span-2' src='/assets/zitop/s5.png' />
                            </div>
                        </div>
                        <div className='grid grid-cols-7 gap-10 mt-20'>
                            <div className='col-span-7 md:col-span-2'>
                                <p className='flexcc mb-10 text-lg text-gray-700 dark:text-gray-300'>Product Page</p>
                                <img className='w-full' src='/assets/zitop/p1.png' />
                            </div>
                            <div className='md:col-span-5 col-span-7'>
                                <div className=''>
                                    <div className=''>
                                        <p className='flexcc mb-10 text-lg text-gray-700 dark:text-gray-300'>Main Pages</p>
                                        <div className='grid grid-cols-3 gap-10'>
                                            <img className='col-span-1' src='/assets/zitop/h1.png' />
                                            <img className='col-span-1' src='/assets/zitop/h2.png' />
                                            <img className='col-span-1' src='/assets/zitop/h3.png' />
                                        </div>
                                    </div>
                                    <div className='mt-32'>
                                        <p className='flexcc mb-10 text-lg text-gray-700 dark:text-gray-300'>Main Pages</p>
                                        <div className='grid grid-cols-3 gap-10'>
                                            <img className='col-span-1' src='/assets/zitop/h1.png' />
                                            <img className='col-span-1' src='/assets/zitop/h2.png' />
                                            <img className='col-span-1' src='/assets/zitop/h3.png' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='mt-20'>
                            <p className='flexcc mb-10 text-lg text-gray-700 dark:text-gray-300'>Map</p>
                            <div className='grid grid-cols-4 md:grid-cols-5 gap-10'>
                                <img className='md:col-span-1 col-span-2' src='/assets/zitop/ma1.png' />
                                <img className='md:col-span-1 col-span-2' src='/assets/zitop/ma2.png' />
                                <img className='md:col-span-1 col-span-2' src='/assets/zitop/ma3.png' />
                                <img className='md:col-span-1 col-span-2' src='/assets/zitop/ma4.png' />
                                <img className='md:col-span-1 col-span-2' src='/assets/zitop/ma5.png' />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='py-20 bg-white dark:bg-gray-1000 px-5 lg:px-0'>
                    <div className='max-w-5xl mx-auto'>
                        <p className='text-3xl font-semibold text-blue-600 dark:text-blue-400'>Thanks for visiting!</p>
                        <p className='text-gray-700 dark:text-gray-300 mt-5'>Got questions, comments, or feedback? Feel free to reach out and <a className='hover:text-blue-600 hover:dark:text-blue-400 hover:underline' href='/about'>contact me</a>.</p>
                    </div>
                </div>
            </div>
        )
    }
}
