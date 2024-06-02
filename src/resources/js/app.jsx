import React from 'react';
import Navbar from './components/Navbar';
import { Button } from './components/ui/button';
import { toast } from 'sonner';
import Container from './components/Container';

const App = () => {

	return(
		<React.Fragment>
			<div className="h-[100vh] bg-gray-200 grid grid-col-2 grid-flow-col">
				<div className="bg-gray-400 col-span-1">
					<Container>
						<Navbar />
					</Container>
				</div>
				<div className="col-span-11">
					<Container>
						<Button size={'sm'} variant="outline" onClick={() => {
							toast("Event has been created", {
								description: "Sunday, Dec 02 2004 AM",
								action: {
									label: "Undo",
									onClick: () => console.log("undo")
								}
							})
						}}>Test Button</Button>
					</Container>
				</div>
			</div>
		</React.Fragment>
	);
}

export default App;