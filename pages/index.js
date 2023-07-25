'use client';

import Head from 'next/head';
import Image from 'next/image';
import Script from 'next/script';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import { GithubFilled, LinkedinFilled, AudioFilled, TwitterCircleFilled, InstagramFilled } from '@ant-design/icons';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
	return (
		<>
			<Head>
				<title>Sonia Abhyankar</title>
				<meta name='description' content='Sonia Abhyankar portfolio website' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/sa-logo.png' type='image/png'></link>
			</Head>
			{/* <body> */}
			{/* <main className='bg-hero-pattern bg-here-pattern-size md:bg-cover w-[100%] h-[100vh]'> */}
			<div className='w-[100vw] h-[100%] md:h-[100vh] p-15 m-15 bg-[#f5efef] '>
				<div className='flex justify-center items-center gap-[10%] font-bold flex-col w-auto h-[100%] p-10 '>
					{/* <h1 className={`text-7xl ${inter.className} text-center text-[#6b6b00]`}>Coming Soon</h1> */}
					<Image src='/sa-logo-transparent.png' width={900} height={900} alt='sonia abhyankar logo' sizes='(max-width: 768px) 100vw' />
					<div className='flex justify-center items-center flex-col gap-12 m-20 md:m-10 p-0 w-[80vw] md:w-[60vw]'>
						<h3 className={`text-2xl md:text-5xl ${inter.className} text-center text-[#a2593b]`}>The Optimizer Newsletter</h3>

						<p className='text-md md:2xl text-center text-[#a2593b] w-[100%] md:w-[50%]'>
							Every Sunday, I share 5 ideas & strategies to optimize our productivity, habits, & behaviors in a feel-good and intentional
							way to build a high-quality life. 🌱🫧
						</p>
						<script async data-uid='08e5f833d8' src='https://soniaabhyankar.ck.page/08e5f833d8/index.js'></script>
						{/* <Script src='https://soniaabhyankar.ck.page/08e5f833d8/index.js' data-uid='08e5f833d8' strategy='afterInteractive'></Script> */}
					</div>

					<div className='flex justify-center items-center gap-5'>
						<a href='https://spotify.openinapp.co/theoptimizer' target='_blank'>
							<AudioFilled className='text-[#a9878a] text-3xl' />
						</a>
						<a href='https://twtr.openinapp.co/soniaabhyankar' target='_blank'>
							<TwitterCircleFilled className='text-[#a9878a] text-3xl' />
						</a>
						<a href='https://instagram.openinapp.co/soniaabhyankar' target='_blank'>
							<InstagramFilled className='text-[#a9878a] text-3xl' />
						</a>
						<a href='https://github.com/soniaabhyankar' target='_blank'>
							<GithubFilled className='text-[#a9878a] text-3xl' />
						</a>
						<a href='https://www.linkedin.com/in/soniaabhyankar/' target='_blank'>
							<LinkedinFilled className='text-[#a9878a] text-3xl' />
						</a>
					</div>
				</div>
			</div>
			{/* </body> */}
		</>
	);
}
