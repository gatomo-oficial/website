import { Main } from './pages/Main';

import wallpaper1 from './assets/wallpapers/wallpaper_1.jpg';
import wallpaper2 from './assets/wallpapers/wallpaper_2.jpg';
import wallpaper3 from './assets/wallpapers/wallpaper_3.jpg';
import wallpaper4 from './assets/wallpapers/wallpaper_4.jpg';
import wallpaper5 from './assets/wallpapers/wallpaper_5.jpg';

const random = (arr: any[]) => {
	return arr[Math.floor(Math.random() * arr.length)];
};
const getImage = () => {
	const wallpapers = [wallpaper1, wallpaper2, wallpaper3, wallpaper4, wallpaper5];
	return random(wallpapers);
};

function App() {
	return (
		<div
			className='app'
			style={{
				backgroundImage: `url("${getImage()}")`
			}}
		>
			<Main />
		</div>
	);
}

export default App;
