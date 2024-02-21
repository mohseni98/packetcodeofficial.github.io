import React, { Component } from 'react'

export default class index extends Component {
    state = {
        overview: [
            { q: 'What is 3Dot Plus?', a: 'An app designed specifically for Iranian-Canadian citizens, aimed at fostering a strong connection with their cultural roots and community. This platform serves as a comprehensive guide to Persian cultural events, allowing users to stay informed about festivals, art exhibitions, concerts, and other cultural gatherings that resonate with their heritage. Additionally, it features a curated directory of businesses owned and operated by members of the Iranian-Canadian community, promoting community support and economic solidarity. Through this app, users can easily discover, connect with, and support their cultural and entrepreneurial endeavors, enriching their sense of community and cultural identity.' },
            { q: 'My Role', a: "I played a pivotal role in conceptualizing and refining the app's user interface (UI) to ensure it aligns seamlessly with the brand's established identity on social media. My responsibilities encompassed designing wireframes, selecting color schemes, and crafting the overall UI. This process involved a detailed analysis of the brand's visual language and the emotional resonance it aimed to evoke among its audience. By meticulously choosing colors, layouts, and design elements that reflect the brand's ethos, I was able to create a user interface that not only enhances the user experience but also strengthens the brand's connection with its audience. Through this deliberate and thoughtful design approach, the app not only functions as a bridge between Iranian-Canadian citizens and their cultural heritage but also serves as an extension of the brand's identity, fostering a cohesive and immersive user experience." },
            { q: 'Team', a: 'Gedrich Mohseni' },
            { q: 'Tools', a: 'Figma, Figjam, Photoshop, Illustrator' },
        ],
        problems: [
            { title: 'Cultural and Language Representation', a: 'Accurately and respectfully representing the Persian culture through design elements (colors, patterns, typography) and supporting multiple languages (Persian, English, potentially French) without cluttering the UI.' },
            { title: 'Navigation and Information Architecture', a: 'Designing an intuitive navigation system that accommodates a wide range of content (events, business listings, articles) without overwhelming users.' },
            { title: 'Consistency', a: 'Maintaining design and functional consistency across different devices and platforms (iOS, Android, Instagram) to ensure a seamless user experience.' },
            { title: 'Feedback Loops and Engagement', a: 'Creating mechanisms within the app to collect user feedback and engage users continuously, ensuring the app evolves based on user needs and preferences.' },
        ],

        wireframe: [
            { img: '/assets/3dotplus/w1.png' },
            { img: '/assets/3dotplus/w2.png' },
            { img: '/assets/3dotplus/w3.png' },
            { img: '/assets/3dotplus/w4.png' },
            { img: '/assets/3dotplus/w5.png' },
        ],

        colors: [
            { color: '#00A693' },
            { color: '#42504C' },
            { color: '#C5D5D0' },
            { color: '#DEEFED' },
            { color: '#AEAEB2' },
            { color: '#F6F6F6' },
        ],
        screens: [
            { img: '/assets/3dotplus/s1.png' },
            { img: '/assets/3dotplus/s2.png' },
            { img: '/assets/3dotplus/s3.png' },
            { img: '/assets/3dotplus/s4.png' },
            { img: '/assets/3dotplus/s5.png' },
            { img: '/assets/3dotplus/s6.png' },
            { img: '/assets/3dotplus/s7.png' },
            { img: '/assets/3dotplus/s8.png' },
            { img: '/assets/3dotplus/s9.png' },
            { img: '/assets/3dotplus/s10.png' },
        ],
    }
    render() {
        return (
            <div className='bg-gray-50 dark:bg-gray-950'>
                <div className='max-w-5xl mx-auto px-5 lg:px-0'>
                    <div className='grid grid-cols-5 gap-10'>
                        <div className='col-span-5 md:col-span-2 pt-32'>
                            <p className='font-PlayfairDisplay text-7xl text-gray-900 dark:text-gray-100'>3Dot Plus</p>
                            <p className='font-PlayfairDisplay text-5xl text-gray-900 dark:text-gray-100 pt-5'>e-commerce marketplace</p>
                            <p className='mt-10 text-gray-800 dark:text-gray-200'>Canadian e-commerce marketplace connecting subscribers with local merchants by offering activities, travel, goods and services</p>
                        </div>
                        <div className='col-span-5 md:col-span-3'>
                            <img className='w-full' src='/assets/3dotplus/i1.png' />
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
                                    <p className='text-base pt-5 text-gray-800 dark:text-gray-200'>This structure is designed to offer users a straightforward path to finding the information they need while fostering a sense of community and connection to Persian culture. It also takes into consideration the importance of visual design and cultural sensitivity, ensuring that users of all backgrounds feel welcomed and engaged.</p>
                                </div>
                            </div>
                            <div className='md:col-span-2 col-span-4'>
                                <img src='/assets/3dotplus/sitemap.svg' />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='py-20'>
                    <div className='max-w-5xl mx-auto px-5 lg:px-0'>
                        <p className='text-2xl text-gray-800 dark:text-gray-200'>Wireframes</p>
                        <p className='text-base pt-5 text-gray-800 dark:text-gray-200'>Develop a user-friendly app that bridges Persian culture with a broader Canadian audience, targeting both Persians and non-Persians interested in exploring Persian heritage. The app should be intuitive, engaging, and educational, offering features that make Persian culture accessible and appealing. Focus on interactive elements, such as cultural stories, language tutorials, and virtual tours of historical sites, to engage users. Ensure the design is inclusive, considering diverse user backgrounds, to foster a community around the appreciation of Persian culture.</p>
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
                            <p className='text-base pt-5 text-gray-800 dark:text-gray-200'>Persian green is dark grayish green with a blue combination. Iranian green is considered one of the spring green palette subcategories. Persian green combination is prevalent in the carpet and turquoise handicrafts industry, pottery, tiling, and ornaments. The green veins inside the marble are also Iranian green.</p>
                            <p className='text-base pt-5 text-gray-800 dark:text-gray-200'>It was mentioned for the first time in 1892 in English literature as an Iranian color. As you know, many people believe in the colors' spiritual meanings and symbolism. In Iranian art, turquoise color combinations symbolize paradise and lively gardens, sanctity, and spirituality.</p>
                        </div>
                        <div className='grid grid-cols-5 gap-10 mt-20'>
                            <div className='col-span-2'>
                                <img className='rounded-2xl h-[420px]' src='/assets/3dotplus/color.png' />
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
                        <p className='text-2xl text-gray-800 dark:text-gray-200'>Screens</p>
                        <p className='text-base pt-2 text-gray-800 dark:text-gray-200'>Here are some of the high-fidelity mockups of the applications I've meticulously crafted for our project. These visuals represent the culmination of our design thinking process, showcasing the intuitive user interface, cohesive color schemes, and innovative features we've integrated to enhance user experience. Each screen has been thoughtfully designed to ensure not only aesthetic appeal but also functional excellence, aligning with our project's objectives and user needs.</p>
                        <div className='grid md:grid-cols-5 grid-cols-4 gap-10 mt-10'>
                            {this.state.screens.map((prop, index) => {
                                return (
                                    <div className='col-span-2 md:col-span-1'>
                                        <img src={prop.img} />
                                    </div>
                                )
                            })}
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
