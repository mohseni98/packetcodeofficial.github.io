import { LockClosedIcon, ArrowRightIcon } from '@heroicons/react/24/outline';
import React, { Component } from 'react'


export default class index extends Component {
    state = {
        password: '',
        authenticated: false,
        errorMessage: '',
        overview: [
            { q: 'What is Yonnect?', a: 'Yonnect, the flagship project of Eletive, was a groundbreaking startup initiative. Our primary goal was to create a robust and consistent platform from scratch, given the immense scale of the project.' },
            { q: 'My Role', a: 'Sprint Lead for design development and prototyping, Evaluated Research Insights and Developed features, Lead development of UI and High Fidelity Design.' },
            { q: 'Team', a: 'Gedrich Mohseni, Pouya Pezhman, Reza Salek, Parna Azizi, Sharhrzad Serajpour, Hossein Morshedy' },
            { q: 'Tools', a: 'Figma, Figjam, Photoshop, Illustrator' },
        ],
        problems: [
            { title: 'Inconsistent Design', a: 'Lack of consistency in design elements, such as buttons, navigation, and color schemes, can lead to confusion and hinder the learning curve for users.' },
            { title: 'Limited Customization', a: 'Users may struggle with systems that offer limited customization options, preventing them from tailoring the interface to their specific workflows and preferences.' },
            { title: 'Inadequate Feedback', a: 'Users need feedback to understand the outcomes of their actions. Lack of clear feedback, such as confirmation messages or error notifications, can lead to uncertainty and frustration.' },
            { title: 'Long Learning Curve', a: 'Systems that are difficult to learn and use can result in a steep learning curve for new users, leading to resistance and decreased productivity.' },
            { title: 'Mobile Responsiveness', a: 'In an increasingly mobile-centric world, if the system lacks mobile responsiveness or has a suboptimal mobile interface, users may face challenges accessing and managing information on the go.' },
            { title: 'Inefficient Workflows', a: 'Poorly designed workflows can disrupt the natural progression of tasks, leading to frustration and decreased efficiency.' },
        ],
        messenger: [
            { img: '/assets/yonnect/m8.png', title: 'Start Page' },
            { img: '/assets/yonnect/m6.png', title: 'Chat Selected' },
            { img: '/assets/yonnect/m2.png', title: 'Writing' },
            { img: '/assets/yonnect/m7.png', title: 'Select Chat' },
            { img: '/assets/yonnect/m3.png', title: 'Voice Recoding' },
            { img: '/assets/yonnect/m1.png', title: 'Voice Recoding on Lock' },
            { img: '/assets/yonnect/m4.png', title: 'Voice Record Leave' },
            { img: '/assets/yonnect/m9.png', title: 'Add Chat' },
            { img: '/assets/yonnect/m10.png', title: 'User Info' },
            { img: '/assets/yonnect/m11.png', title: 'Group Info' },
            { img: '/assets/yonnect/m12.png', title: 'Channel Info' },
            { img: '/assets/yonnect/m5.png', title: 'Smaller view' },
        ],
        nootbook: [
            { img: '/assets/yonnect/n1.png', title: 'Start Page' },
            { img: '/assets/yonnect/n2.png', title: 'Temlpate hide' },
            { img: '/assets/yonnect/n3.png', title: 'List view' },
            { img: '/assets/yonnect/n4.png', title: 'Document view' },
            { img: '/assets/yonnect/n5.png', title: 'All tools' },
            { img: '/assets/yonnect/n6.png', title: 'Right click style' },
        ],
        inuiry: [
            { img: '/assets/yonnect/i1.png', title: 'Admin view' },
            { img: '/assets/yonnect/i2.png', title: 'User view' },
        ],
        inuiry2: [
            { img: '/assets/yonnect/i3.png', title: 'List view' },
            { img: '/assets/yonnect/i4.png', title: 'Creating Inquiry' },
            { img: '/assets/yonnect/i5.png', title: 'Creating Inquiry' },
            { img: '/assets/yonnect/i6.png', title: 'Form modal' },
            { img: '/assets/yonnect/i7.png', title: 'Form builder' },
            { img: '/assets/yonnect/i8.png', title: 'Checkbox form builder' },
        ],
        messenger2: [
            { img: '/assets/yonnect/q5.png', title: 'Create channel modal' },
            { img: '/assets/yonnect/q1.png', title: 'Add member modal' },
            { img: '/assets/yonnect/q2.png', title: 'Send image modal' },
            { img: '/assets/yonnect/q3.png', title: 'Send video modal' },
            { img: '/assets/yonnect/q4.png', title: 'Send file modal' },
            { img: '/assets/yonnect/q6.png', title: 'Create group modal' },
            { img: '/assets/yonnect/q9.png', title: 'Attachment modal' },
            { img: '/assets/yonnect/q10.png', title: 'Forward modal' },
            { img: '/assets/yonnect/q11.png', title: 'Emoji List' },
            { img: '/assets/yonnect/q12.png', title: 'Emoji List (right click)' },
            { img: '/assets/yonnect/q7.png', title: 'Block message modal' },
            { img: '/assets/yonnect/q13.png', title: 'Chat option (right click)' },
            { img: '/assets/yonnect/q14.png', title: 'Single chat (right click)' },
            { img: '/assets/yonnect/q15.png', title: 'Group chat (right click)' },
            { img: '/assets/yonnect/q8.png', title: 'Delete message modal' },
            { img: '/assets/yonnect/q16.png', title: 'Channel (right click)' },
        ],
        widgets: [
            { img: '/assets/yonnect/w1.png', title: 'Create channel modal' },
            { img: '/assets/yonnect/w2.png', title: 'Add member modal' },
            { img: '/assets/yonnect/w3.png', title: 'Send image modal' },
            { img: '/assets/yonnect/w4.png', title: 'Send video modal' },
            // { img: '/assets/yonnect/w5.png', title: 'Send file modal' },
            { img: '/assets/yonnect/w6.png', title: 'Create group modal' },
            // { img: '/assets/yonnect/w7.png', title: 'Attachment modal' },
            { img: '/assets/yonnect/w8.png', title: 'Forward modal' },
            { img: '/assets/yonnect/w9.png', title: 'Emoji List' },
            { img: '/assets/yonnect/w10.png', title: 'Emoji List (right click)' },
            { img: '/assets/yonnect/w11.png', title: 'Block message modal' },
            { img: '/assets/yonnect/w13.png', title: 'Single chat (right click)' },
            { img: '/assets/yonnect/w14.png', title: 'Group chat (right click)' },
            { img: '/assets/yonnect/w16.png', title: 'Channel (right click)' },
            { img: '/assets/yonnect/w17.png', title: 'Channel (right click)' },
            { img: '/assets/yonnect/w18.png', title: 'Channel (right click)' },
            { img: '/assets/yonnect/w20.png', title: 'Channel (right click)' },
            { img: '/assets/yonnect/w21.png', title: 'Channel (right click)' },
        ],
        widgets2: [
            { img: '/assets/yonnect/w5.png', title: 'Send file modal' },
            { img: '/assets/yonnect/w7.png', title: 'Attachment modal' },
            { img: '/assets/yonnect/w12.png', title: 'Chat option (right click)' },
            { img: '/assets/yonnect/w15.png', title: 'Delete message modal' },
            { img: '/assets/yonnect/w19.png', title: 'Channel (right click)' },
            { img: '/assets/yonnect/w22.png', title: 'Channel (right click)' },
        ],
        solutions1: [
            { title: 'Unified Interface', a: 'Integrate diverse tools seamlessly into a unified interface for a cohesive user experience, eliminating the need to switch tabs for different functionalities.', a2: "Revolutionizing web design, we've seamlessly integrated the OS window concept, offering users immediate access to everything. Simplify their experience with the ability to minimize and maximize windows at will.", img1: '/assets/yonnect/r1.png', img2: '/assets/yonnect/r2.png', img3: '/assets/yonnect/r3.png', img4: '/assets/yonnect/r4.png' },
        ],
        solutions2: [
            { title: 'Unified wireframes', a: 'Clarity and Consensus: They provide a clear and detailed overview of the project, allowing all stakeholders to reach a consensus on the design and functionality before any coding starts.', a2: "Efficiency: By addressing potential usability issues early in the design phase, unified wireframes can save time and resources during development.", a3: 'Consistency: They help ensure consistency across different parts of the website or application, as they allow designers to plan navigation, layout, and interactions in a holistic manner.', img1: '/assets/yonnect/a1.png', img2: '/assets/yonnect/a2.png' },
        ],
        solutions3: [
            { title: 'Full Customization', a: 'Clarity and Consensus: They provide a clear and detailed overview of the project, allowing all stakeholders to reach a consensus on the design and functionality before any coding starts.', a2: "Efficiency: By addressing potential usability issues early in the design phase, unified wireframes can save time and resources during development.", a3: 'Consistency: They help ensure consistency across different parts of the website or application, as they allow designers to plan navigation, layout, and interactions in a holistic manner.', img1: '/assets/yonnect/a1.png', img2: '/assets/yonnect/a2.png' },
        ],
    }

    handlePasswordChange = (event) => {
        this.setState({ password: event.target.value });
    };

    handleLogin = () => {
        let correctPassword = '@638219GM#';

        if (this.state.password === correctPassword) {
            this.setState({ authenticated: true, errorMessage: '' });
        } else {
            this.setState({ authenticated: false, errorMessage: 'Incorrect password. Please try again.' });
        }
    };

    handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            this.handleLogin();
        }
    };

    render() {
        return (
            <div class=" w-full bg-gray-50 dark:bg-gray-950">
                {this.state.authenticated ? (
                    <div>
                        <div className='max-w-5xl mx-auto px-5 lg:px-0'>
                            <div className=''>
                                <div className='pt-10'>
                                    <p className='font-PlayfairDisplay text-7xl text-gray-900 dark:text-gray-100'>Yonnect</p>
                                    <p className='font-PlayfairDisplay text-5xl text-gray-900 dark:text-gray-100 pt-5'>Total Managing System</p>
                                    <p className='mt-10 text-gray-800 dark:text-gray-200'>Unify your world with a single app—seamlessly managing your business, education, and personal life. Experience the ease of handling diverse needs, from projects to classes, all in one place.</p>
                                </div>
                                <div className='flexcc'>
                                    <img className='h-Full' src='/assets/yonnect/landing.png' />
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
                                <p className='text-2xl pb-5 text-gray-800 dark:text-gray-200'>Competition Analysis</p>
                                <p className='text-xl pb-10 text-gray-700 dark:text-gray-300 border-b border-gray-200 dark:border-gray-800'>We conducted comprehensive surveys and extensive competitive research to identify the most pressing challenges users face. Our goal is to enhance our platform by addressing these issues and delivering an improved user experience based on valuable insights gathered from our thorough analysis. </p>
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
                                <p className='text-2xl pb-10 text-gray-800 dark:text-gray-200 border-b border-gray-200 dark:border-gray-800'>Solutions</p>
                                <div className='py-10 border-b border-gray-200 dark:border-gray-800'>
                                    {this.state.solutions1.map((prop, index) => {
                                        return (
                                            <div className='' key={index}>
                                                <p className='text-gray-900 dark:text-gray-100 text-xl font-semibold'>{prop.title}</p>
                                                <p className='text-gray-800 dark:text-gray-200 text-base font-light'>{prop.a}</p>
                                                <p className='text-gray-800 dark:text-gray-200 text-base font-light pt-5'>{prop.a2}</p>
                                                <div className='grid grid-cols-2 gap-2 pt-10'>
                                                    <img className='bg-gray-100 dark:bg-gray-950 p-5 rounded-2xl' src={prop.img1} />
                                                    <img className='bg-gray-100 dark:bg-gray-950 p-5 rounded-2xl' src={prop.img2} />
                                                    <img className='bg-gray-100 dark:bg-gray-950 ps-10 pb-10 rounded-2xl' src={prop.img4} />
                                                    <img className='bg-gray-100 dark:bg-gray-950 ps-10 pb-10 rounded-2xl' src={prop.img3} />
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                                <div className='py-10'>
                                    {this.state.solutions2.map((prop, index) => {
                                        return (
                                            <div className='' key={index}>
                                                <p className='text-gray-900 dark:text-gray-100 text-xl font-semibold'>Unified wireframes</p>
                                                <p className='text-gray-800 dark:text-gray-200 text-base font-light pt-5'><span className='font-medium'>Clarity and Consensus :</span> They provide a clear and detailed overview of the project, allowing all stakeholders to reach a consensus on the design and functionality before any coding starts.</p>
                                                <p className='text-gray-800 dark:text-gray-200 text-base font-light pt-2'><span className='font-medium'>Efficiency :</span> By addressing potential usability issues early in the design phase, unified wireframes can save time and resources during development.</p>
                                                <p className='text-gray-800 dark:text-gray-200 text-base font-light pt-2'><span className='font-medium'>Consistency:</span> They help ensure consistency across different parts of the website or application, as they allow designers to plan navigation, layout, and interactions in a holistic manner.</p>
                                                <div className='grid grid-cols-2 gap-2 pt-10'>
                                                    <img className='bg-gray-100 dark:bg-gray-950 p-5 rounded-2xl' src='/assets/yonnect/a1.png' />
                                                    <img className='bg-gray-100 dark:bg-gray-950 p-5 rounded-2xl' src='/assets/yonnect/a2.png' />
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                                <div className='py-10'>
                                    {this.state.solutions2.map((prop, index) => {
                                        return (
                                            <div className='' key={index}>
                                                <p className='text-gray-900 dark:text-gray-100 text-xl font-semibold'>Full customization</p>
                                                <p className='text-gray-800 dark:text-gray-200 text-base font-light pt-5'><span className='font-medium'>Theme customization :</span> Allow users to personalize applets and hubs by modifying colors and text to suit their preferences.</p>
                                                <div className='grid grid-cols-2 gap-2 pt-5'>
                                                    <img className='bg-gray-100 dark:bg-gray-950 p-5 rounded-2xl' src='/assets/yonnect/c1.png' />
                                                    <div className='grid grid-cols-2 gap-2'>
                                                        <img className='bg-gray-100 dark:bg-gray-950 h-full p-5 rounded-2xl' src='/assets/yonnect/c2.png' />
                                                        <img className='bg-gray-100 dark:bg-gray-950 h-full p-5 rounded-2xl' src='/assets/yonnect/c3.png' />
                                                    </div>
                                                </div>
                                                <p className='text-gray-800 dark:text-gray-200 text-base font-light pt-10'><span className='font-medium'>Workflow customization :</span> Users can tailor the default workflow pipeline according to their needs, enhancing flexibility and efficiency.</p>
                                                <p className='text-gray-800 dark:text-gray-200 text-base font-light pt-10'><span className='font-medium'>Flexible Arrangement :</span> Adopt a window-based design system, enabling users to organize their workspace in a manner that mimics an operating system environment, catering to individual preferences.</p>
                                                <div className='grid grid-cols-2 gap-2 pt-5'>
                                                    <img className='bg-gray-100 dark:bg-gray-950 p-5 rounded-2xl' src='/assets/yonnect/c4.png' />
                                                    <img className='bg-gray-100 dark:bg-gray-950 p-5 rounded-2xl' src='/assets/yonnect/c5.png' />
                                                </div>
                                                <p className='text-gray-800 dark:text-gray-200 text-base font-light pt-10'><span className='font-medium'>Familiarity :</span>Leveraging the familiar platform-based design concep, we've seamlessly integrated it into the web universe. This approach minimizes complexity, ensuring users navigate the platform with ease.</p>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                        <div className='py-20'>
                            <div className='max-w-5xl mx-auto px-5 lg:px-0'>
                                <p className='text-2xl pb-5 text-gray-800 dark:text-gray-200'>Typography</p>
                                <div className='grid grid-cols-2'>
                                    <div className='col-span-2 md:col-span-1'>
                                        <p className='text-[24px] text-gray-800 dark:text-gray-200 font-semibold leading-[36px] mb-5'>SF Pro Display</p>
                                        <p className='text-base text-gray-800 dark:text-gray-200'>ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
                                        <p className='text-base text-gray-800 dark:text-gray-200 my-2'>abcdefghijklmnopqrstuvwxyz</p>
                                        <p className='text-base text-gray-800 dark:text-gray-200'>1234567890</p>
                                    </div>
                                    <div className='col-span-2 md:col-span-1 flex justify-end'>
                                        <div className='flexc'>
                                            <div>
                                                <p className='text-6xl text-gray-800 dark:text-gray-200 font-normal'>Aa</p>
                                                <p className='text-base text-gray-800 dark:text-gray-200 font-normal'>Regular</p>
                                            </div>
                                            <div className='ps-10'>
                                                <p className='text-6xl text-gray-800 dark:text-gray-200 font-medium'>Aa</p>
                                                <p className='text-base text-gray-800 dark:text-gray-200 font-normal'>Medium</p>
                                            </div>
                                            <div className='px-10'>
                                                <p className='text-6xl text-gray-800 dark:text-gray-200 font-semibold'>Aa</p>
                                                <p className='text-base text-gray-800 dark:text-gray-200 font-normal'>SemiBold</p>
                                            </div>
                                            <div>
                                                <p className='text-6xl text-gray-800 dark:text-gray-200 font-bold'>Aa</p>
                                                <p className='text-base text-gray-800 dark:text-gray-200 font-normal'>Bold</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='mt-10'>
                                    <div className=''>
                                        <div className='bg-gray-50 dark:bg-gray-1000 p-10 rounded-2xl'>
                                            <div className='mb-5'>
                                                <p className='text-[64px] text-gray-800 dark:text-gray-200 font-semibold leading-[80px]'>Headline 1</p>
                                                <p className='text-sm text-gray-600 dark:text-gray-400 font-light'>size: 64 / l-height: 80 / weight: 600</p>
                                            </div>
                                            <div className='mb-5'>
                                                <p className='text-[48px] text-gray-800 dark:text-gray-200 font-semibold leading-[64px]'>Headline 2</p>
                                                <p className='text-sm text-gray-600 dark:text-gray-400 font-light'>size: 48 / l-height: 64 / weight: 600</p>
                                            </div>
                                            <div className='mb-5'>
                                                <p className='text-[32px] text-gray-800 dark:text-gray-200 font-semibold leading-[48px]'>Headline 3</p>
                                                <p className='text-sm text-gray-600 dark:text-gray-400 font-light'>size: 32 / l-height: 48 / weight: 600</p>
                                            </div>
                                            <div className='mb-5'>
                                                <p className='text-[24px] text-gray-800 dark:text-gray-200 font-semibold leading-[36px]'>Headline 4</p>
                                                <p className='text-sm text-gray-600 dark:text-gray-400 font-light'>size: 24 / l-height: 36 / weight: 600</p>
                                            </div>
                                            <div className='mb-5'>
                                                <p className='text-[20px] text-gray-800 dark:text-gray-200 font-semibold leading-[30px]'>Headline 5</p>
                                                <p className='text-sm text-gray-600 dark:text-gray-400 font-light'>size: 20 / l-height: 30 / weight: 600</p>
                                            </div>
                                            <div>
                                                <p className='text-[18px] text-gray-800 dark:text-gray-200 font-semibold leading-[28px]'>Headline 6</p>
                                                <p className='text-sm text-gray-600 dark:text-gray-400 font-light'>size: 18 / l-height: 28 / weight: 600</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='grid grid-cols-2 mt-5 gap-5'>
                                        <div className='col-span-2 md:col-span-1'>
                                            <div className='bg-gray-50 dark:bg-gray-1000 p-10 rounded-2xl'>
                                                <div className='mb-5'>
                                                    <p className='text-[16px] text-gray-800 dark:text-gray-200 font-semibold leading-[24px]'>Subtitle 1</p>
                                                    <p className='text-sm text-gray-600 dark:text-gray-400 font-light'>size: 16 / l-height: 24 / weight: 600</p>
                                                </div>
                                                <div className='mb-5'>
                                                    <p className='text-[14px] text-gray-800 dark:text-gray-200 font-semibold leading-[22px]'>Subtitle 2</p>
                                                    <p className='text-sm text-gray-600 dark:text-gray-400 font-light'>size: 14 / l-height: 22 / weight: 600</p>
                                                </div>
                                                <div className='mb-5'>
                                                    <p className='text-[16px] text-gray-800 dark:text-gray-200 font-semibold leading-[24px]'>Body 1</p>
                                                    <p className='text-sm text-gray-600 dark:text-gray-400 font-light'>size: 16 / l-height: 24 / weight: 500</p>
                                                </div>
                                                <div className='mb-5'>
                                                    <p className='text-[22px] text-gray-800 dark:text-gray-200 font-medium leading-[22px]'>Body 2</p>
                                                    <p className='text-sm text-gray-600 dark:text-gray-400 font-light'>size: 14 / l-height: 22 / weight: 500</p>
                                                </div>
                                                <div className='mb-5'>
                                                    <p className='text-[12px] text-gray-800 dark:text-gray-200 font-semibold leading-[18px]'>Caption</p>
                                                    <p className='text-sm text-gray-600 dark:text-gray-400 font-light'>size: 12 / l-height: 18 / weight: 500</p>
                                                </div>
                                                <div>
                                                    <p className='text-[12px] text-gray-800 dark:text-gray-200 font-bold leading-[18px] '>Overline</p>
                                                    <p className='text-sm text-gray-600 dark:text-gray-400 font-light'>size: 12 / l-height: 18 / weight: 700 / spacing: 1.2</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-span-2 md:col-span-1'>
                                            <div className='bg-gray-50 dark:bg-gray-1000 p-10 rounded-2xl'>
                                                <div className='mb-5'>
                                                    <p className='text-[15px] text-gray-800 dark:text-gray-200 font-bold leading-[26px]'>Button Text Large</p>
                                                    <p className='text-sm text-gray-600 dark:text-gray-400 font-light'>size: 15 / l-height: 26 / weight: 700</p>
                                                </div>
                                                <div className='mb-5'>
                                                    <p className='text-[14px] text-gray-800 dark:text-gray-200 font-bold leading-[24px]'>Button Text Medium</p>
                                                    <p className='text-sm text-gray-600 dark:text-gray-400 font-light'>size: 14 / l-height: 24 / weight: 700</p>
                                                </div>
                                                <div className='mb-5'>
                                                    <p className='text-[13px] text-gray-800 dark:text-gray-200 font-bold leading-[22px]'>Button Text Small</p>
                                                    <p className='text-sm text-gray-600 dark:text-gray-400 font-light'>size: 13 / l-height: 22 / weight: 700</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='py-20 bg-white dark:bg-gray-1000'>
                            <div className='max-w-5xl mx-auto px-5 lg:px-0'>
                                <p className='text-2xl pb-5 text-gray-800 dark:text-gray-200'>Widgets designs</p>
                                <div className='columns-2 md:columns-4 gap-2'>
                                    {this.state.widgets.map((prop, index) => {
                                        return (
                                            <div className='mb-2'>
                                                <img className=' bg-gray-100 dark:bg-gray-900 rounded-3xl p-2' src={prop.img} />
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                        <div className='py-20'>
                            <div className='max-w-5xl mx-auto px-5 lg:px-0'>
                                <p className='text-2xl pb-5 text-gray-800 dark:text-gray-200'>Applet designs</p>
                                <p className='text-xl pb-10 text-gray-700 dark:text-gray-300 border-b border-gray-200 dark:border-gray-800'>I'll be presenting three key applets from our platform. While I can't cover everything, these highlights will give you a good sense of what we offer.</p>
                                <p className='text-gray-900 dark:text-gray-100 text-xl font-semibold pt-20'>Messenger Applet</p>
                                <div className='grid grid-cols-2 gap-10 mt-10'>
                                    {this.state.messenger.map((prop, index) => {
                                        return (
                                            <div className='col-span-2 md:col-span-1' key={index}>
                                                <div className='flexcc flex-col bg-gray-100 dark:bg-gray-900 rounded-3xl p-2'>
                                                    <img className='' src={prop.img} />
                                                    <p className='text-gray-800 dark:text-gray-200 text-base font-medium pt-2 pb-1'>{prop.title}</p>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                                <div className='columns-2 md:columns-4 gap-5 mt-10'>
                                    {this.state.messenger2.map((prop, index) => {
                                        return (
                                            <div className='flexcc flex-col bg-gray-100 dark:bg-gray-900 rounded-xl p-2 break-inside-avoid mb-5'>
                                                <img className='w-full' src={prop.img} />
                                                <p className='text-gray-800 dark:text-gray-200 text-sm font-medium pt-2 pb-1'>{prop.title}</p>
                                            </div>
                                        )
                                    })}
                                </div>
                                <p className='text-gray-900 dark:text-gray-100 text-xl font-semibold pt-20'>Nootbook Applet</p>
                                <div className='grid grid-cols-2 gap-10 mt-10'>
                                    {this.state.nootbook.map((prop, index) => {
                                        return (
                                            <div className='col-span-2 md:col-span-1' key={index}>
                                                <div className='flexcc flex-col bg-gray-100 dark:bg-gray-900 rounded-3xl p-2'>
                                                    <img className='' src={prop.img} />
                                                    <p className='text-gray-800 dark:text-gray-200 text-base font-medium pt-2 pb-1'>{prop.title}</p>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                                <p className='text-gray-900 dark:text-gray-100 text-xl font-semibold pt-20'>Inquiry Applet</p>
                                <p className='text-gray-800 dark:text-gray-200 text-base font-light pt-10'>Inquiry Applet offers a dual-view interface: one for administrators, who can access both views, and another for users, who have permissions set by the admin.</p>
                                <div className='grid grid-cols-2 gap-10 mt-10'>
                                    {this.state.inuiry.map((prop, index) => {
                                        return (
                                            <div className='col-span-2 md:col-span-1' key={index}>
                                                <div className='flexcc flex-col bg-gray-100 dark:bg-gray-900 rounded-3xl p-2'>
                                                    <img className='' src={prop.img} />
                                                    <p className='text-gray-800 dark:text-gray-200 text-base font-medium pt-2 pb-1'>{prop.title}</p>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                                <p className='text-gray-800 dark:text-gray-200 text-base font-light pt-10'>The admin can easily switch between the two views using a convenient button located below the minimize button.</p>
                                <div className='grid grid-cols-2 gap-10 mt-10'>
                                    {this.state.inuiry2.map((prop, index) => {
                                        return (
                                            <div className='col-span-2 md:col-span-1' key={index}>
                                                <div className='flexcc flex-col bg-gray-100 dark:bg-gray-900 rounded-3xl p-2'>
                                                    <img className='' src={prop.img} />
                                                    <p className='text-gray-800 dark:text-gray-200 text-base font-medium pt-2 pb-1'>{prop.title}</p>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                                <p className='text-gray-800 dark:text-gray-200 text-base font-light pt-10'>We have also developed a comprehensive form builder, designed for use in areas such as inquiries, to create highly customizable forms.</p>
                            </div>
                        </div>
                        <div className='py-20 bg-white dark:bg-gray-1000 px-5 lg:px-0'>
                            <div className='max-w-5xl mx-auto'>
                                <p className='text-3xl font-semibold text-blue-600 dark:text-blue-400'>Thanks for visiting!</p>
                                <p className='text-gray-700 dark:text-gray-300 mt-5'>Got questions, comments, or feedback? Feel free to reach out and <a className='hover:text-blue-600 hover:dark:text-blue-400 hover:underline' href='/about'>contact me</a>.</p>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className='h-[84vh] flexcc'>
                        <div className='flexc flex-col'>
                            <LockClosedIcon className='w-14 h-14 bg-gray-100 dark:bg-gray-1000 p-3 rounded-full text-gray-800 dark:text-gray-300 mb-10' aria-hidden='true' />
                            <div className='bg-gray-100 dark:bg-gray-1000 flexcb ps-4 py-1 pe-1 rounded-2xl min-w-[320px] '>
                                <input className='text-gray-800 w-[80%] dark:text-gray-200 outline-none bg-transparent placeholder:text-gray-400 placeholder:dark:text-gray-800' type="password" placeholder="Password" value={this.state.password} onChange={this.handlePasswordChange} onKeyPress={this.handleKeyPress} />
                                <ArrowRightIcon className='w-12 h-12 text-white aspect-square bg-blue-600 rounded-xl p-3 stroke-[1.5px]' aria-hidden='true' onClick={this.handleLogin} />
                            </div>
                            {this.state.errorMessage && (
                                <p className='text-sm font-normal pt-2 text-red-500 dark:text-red-400'>{this.state.errorMessage}</p>
                            )}
                            <p className='text-sm pt-5 text-gray-500'>If you don't have the password you can awlays</p>
                            <a className='text-sm pt-1 text-gray-500 underline hover:text-blue-600 hover:dark:text-blue-400 ms-1' href='/about'>contact me!</a>
                        </div>
                    </div>
                )}
            </div>
        )
    }
}
