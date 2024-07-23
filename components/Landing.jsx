import DynamicGridBackground from './DynamicGridBackground';
import { APP_NAME } from '@/lib/constants';
export default function Landing() {
	return (
		<DynamicGridBackground>
			<div className='absolute inset-0 flex items-center justify-center'>
				<div className='flex flex-col px-2 z-20'>
					<div className='text-center text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-orange-200'>
						Here to ease the Video Production workflow
					</div>
					<p className='text-black text-xl text-center mt-4'>
						Simplify your workflow with {APP_NAME}
					</p>
					<div className='mt-8 flex justify-center'>
						<a
							href='#'
							className='inline-flex items-center px-6 py-3 text-lg font-medium text-white bg-orange-500 rounded-md hover:bg-orange-800'>
							Join Waitlist
							<svg
								className='w-5 h-5 ml-2 -mr-1'
								fill='currentColor'
								viewBox='0 0 20 20'
								xmlns='http://www.w3.org/2000/svg'>
								<path
									fillRule='evenodd'
									d='M10.293 15.707a1 1 0 010-1.414L13.586 11H3a1 1 0 110-2h10.586l-3.293-3.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z'
									clipRule='evenodd'></path>
							</svg>
						</a>
					</div>
				</div>
			</div>
		</DynamicGridBackground>
	);
}
