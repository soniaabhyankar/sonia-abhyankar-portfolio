import Head from 'next/head';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import { GithubFilled, LinkedinFilled } from '@ant-design/icons';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
	return (
		<>
			<Head>
				<title>Sonia Abhyankar | Portfolio</title>
				<meta name='description' content='Sonia Abhyankar portfolio website' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/favicon.JPEG' type='image/jpeg'></link>
			</Head>
			{/* <body className='bg-hero-pattern w-100% h-[100vh]'> */}
			<main className='bg-hero-pattern w-[100%] h-[95vh]'>
				<div className='flex justify-center items-center gap-[10%] font-bold flex-col w-auto h-[100%]'>
					<h1 className={`text-7xl ${inter.className} text-center text-[#6b6b00]`}>Coming Soon</h1>
					<div className='flex justify-center items-center gap-5'>
						<a href='https://github.com/soniaabhyankar' target='_blank'>
							<GithubFilled className='text-[#6b6b00] text-3xl' />
						</a>
						<a href='https://www.linkedin.com/in/soniaabhyankar/' target='_blank'>
							<LinkedinFilled className='text-[#6b6b00] text-3xl' />
						</a>
					</div>
				</div>
			</main>
			<footer className='text-sm text-center p-2 bg-hero-pattern w-100% h-[5vh]'>
				Made with ❤️ by Sonia Abhyankar &copy; {new Date().getFullYear()}.{' '}
			</footer>
			{/* </body> */}
		</>
	);
}
