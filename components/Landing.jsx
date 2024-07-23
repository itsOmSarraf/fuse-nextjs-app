'use client';
import DynamicGridBackground from '@/components/DynamicGridBackground';
import { APP_NAME } from '@/lib/constants';
import { MoveRight } from 'lucide-react';
import Waitlist from '@/components/Waitlist';
import { useState } from 'react';

export default function Landing() {
	const [showWaitlist, setShowWaitlist] = useState(false);

	const handleJoinWaitlistClick = () => {
		setShowWaitlist(true);
	};

	return (
		<DynamicGridBackground>
			<div className='absolute inset-0 flex items-center justify-center z-20'>
				{showWaitlist ? (
					<Waitlist />
				) : (
					<div className='flex flex-col px-2'>
						<div className='text-center text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-orange-200'>
							Here to ease the Video Production workflow
						</div>
						<p className='text-black text-xl text-center mt-4'>
							Simplify your workflow with {APP_NAME}
						</p>
						<div className='mt-8 flex justify-center'>
							<a
								href='#'
								onClick={handleJoinWaitlistClick}
								className='inline-flex items-center px-6 py-3 text-lg font-medium text-white bg-orange-500 rounded-md hover:bg-orange-800'>
								Join Waitlist
								<div className='ml-2'>
									<MoveRight />
								</div>
							</a>
						</div>
					</div>
				)}
			</div>
		</DynamicGridBackground>
	);
}
