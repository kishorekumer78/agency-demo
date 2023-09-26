import React from 'react';
import Container from '../Container';
import Image from 'next/image';

export default function Affiliations() {
	return (
		<>
			<Container>
				<div className="flex items-center py-12 justify-between">
					<Image
						src="/images/logos_google.svg"
						width={100}
						height={100}
						alt="google"
						style={{ width: 'auto', height: 'auto' }}
					/>

					<Image
						src="/images/Trello-logo-blue 1.png"
						width={100}
						height={100}
						alt="notion"
						style={{ width: 'auto', height: 'auto' }}
					/>

					<Image
						src="/images/933ad2abf5893865392a144599344b60.png"
						width={100}
						height={100}
						alt="notion"
						style={{ width: 'auto', height: 'auto' }}
					/>
					<Image
						src="/images/933ad2abf5893865392a144599344b60.png"
						width={100}
						height={100}
						alt="notion"
						style={{ width: 'auto', height: 'auto' }}
					/>
					<Image
						src="/images/584caaf1ea80f6590e86d3891e564763.png"
						width={100}
						height={100}
						alt="google"
						style={{ width: 'auto', height: 'auto' }}
					/>
				</div>
			</Container>
			<div className="h-12" style={{ backgroundColor: '#D7F5DC' }}></div>
		</>
	);
}
