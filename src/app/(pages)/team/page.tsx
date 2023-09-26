import Container from '@/components/Container';

import TeamList from '@/components/team/TeamList';

import React from 'react';

export default async function TeamPage() {
	return (
		<>
			<Container>
				<TeamList />
			</Container>
		</>
	);
}
