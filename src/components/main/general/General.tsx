import { useState } from 'react';
import lang from '../../../lang/lang';
import Tooltip from '../../Tooltip';
import Arch from '../../../icons/Arch';
import {
	Typescript,
	Rust,
	Python,
	Openjdk,
	Elixir,
	Html5,
	CssThree,
	C,
	Markdown,
	Gnubash,
	ReactJs,
	Tailwindcss,
	Express,
	Discord,
	Revoltdotchat,
	Socketdotio,
	Vuedotjs,
	Visualstudiocode,
	Atom,
	Apachenetbeanside,
	Neovim,
	Intellijidea,
	Pycharm,
	Androidstudio,
	Linux,
	Manjaro,
	Fedora,
	Ubuntu,
	Android,
	Macos,
	Kalilinux,
	Windows11,
	Googlechrome,
	Firefoxbrowser,
	Torbrowser,
	Microsoftedge,
	Yarn,
	Npm,
	Git,
	Github,
	Mongodb,
	Mysql,
	Figma,
	Blender,
	Postman,
	Heroku,
	Railway,
	Trello,
	Virtualbox,
	Nodedotjs,
	Adobepremierepro,
	Adobephotoshop,
	Json
} from '@icons-pack/react-simple-icons';

const Lang = () => (
	<div className='flex flex-row flex-wrap justify-center align-middle items-center mt-4'>
		{/* TypeScript */}
		<div className='mx-4'>
			<Tooltip text='TypeScript'>
				<Typescript
					className='ease-in-out duration-200
				flex
				px-0.5 py-0.5
				fill-slate-800
				hover:fill-slate-700
				w-14 h-14 mt-2
				pointer-events-none
				'
				/>
			</Tooltip>
		</div>
		{/* Rust */}
		<div className='mx-4'>
			<Tooltip text='Rust'>
				<Rust
					className='ease-in-out duration-200
				flex
				px-0.5 py-0.5
				fill-slate-800
				hover:fill-slate-700
				w-14 h-14 mt-2
				pointer-events-none
				'
				/>
			</Tooltip>
		</div>
		{/* Python */}
		<div className='mx-4'>
			<Tooltip text='Python'>
				<Python
					className='ease-in-out duration-200
				flex
				px-0.5 py-0.5
				fill-slate-800
				hover:fill-slate-700
				w-14 h-14 mt-2
				pointer-events-none
				'
				/>
			</Tooltip>
		</div>
		{/* Java */}
		<div className='mx-4'>
			<Tooltip text='Java'>
				<Openjdk
					className='ease-in-out duration-200
				flex
				px-0.5 py-0.5
				fill-slate-800
				hover:fill-slate-700
				w-14 h-14 mt-2
				pointer-events-none
				'
				/>
			</Tooltip>
		</div>
		{/* Elixir */}
		<div className='mx-4'>
			<Tooltip text='Elixir'>
				<Elixir
					className='ease-in-out duration-200
				flex
				px-0.5 py-0.5
				fill-slate-800
				hover:fill-slate-700
				w-14 h-14 mt-2
				pointer-events-none
				'
				/>
			</Tooltip>
		</div>
		{/* HTML */}
		<div className='mx-4'>
			<Tooltip text='HTML'>
				<Html5
					className='ease-in-out duration-200
				flex
				px-0.5 py-0.5
				fill-slate-800
				hover:fill-slate-700
				w-14 h-14 mt-2
				pointer-events-none
				'
				/>
			</Tooltip>
		</div>
		{/* CSS */}
		<div className='mx-4'>
			<Tooltip text='CSS'>
				<CssThree
					className='ease-in-out duration-200
				flex
				px-0.5 py-0.5
				fill-slate-800
				hover:fill-slate-700
				w-14 h-14 mt-2
				pointer-events-none
				'
				/>
			</Tooltip>
		</div>
		{/* C */}
		<div className='mx-4'>
			<Tooltip text='C'>
				<C
					className='ease-in-out duration-200
				flex
				px-0.5 py-0.5
				fill-slate-800
				hover:fill-slate-700
				w-14 h-14 mt-2
				pointer-events-none
				'
				/>
			</Tooltip>
		</div>
		{/* Markdown */}
		<div className='mx-4'>
			<Tooltip text='Markdown'>
				<Markdown
					className='ease-in-out duration-200
				flex
				px-0.5 py-0.5
				fill-slate-800
				hover:fill-slate-700
				w-14 h-14 mt-2
				pointer-events-none
				'
				/>
			</Tooltip>
		</div>
		{/* Markdown */}
		<div className='mx-4'>
			<Tooltip text='JSON'>
				<Json
					className='ease-in-out duration-200
				flex
				px-0.5 py-0.5
				fill-slate-800
				hover:fill-slate-700
				w-14 h-14 mt-2
				pointer-events-none
				'
				/>
			</Tooltip>
		</div>
		{/* Shell Script */}
		<div className='mx-4'>
			<Tooltip text='Shell Scripting'>
				<Gnubash
					className='ease-in-out duration-200
				flex
				px-0.5 py-0.5
				fill-slate-800
				hover:fill-slate-700
				w-14 h-14 mt-2
				pointer-events-none
				'
				/>
			</Tooltip>
		</div>
	</div>
);

const Lib = () => (
	<div className='flex flex-row flex-wrap justify-center align-middle items-center mt-4'>
		{/* React */}
		<div className='mx-4'>
			<Tooltip text='React'>
				<ReactJs
					className='ease-in-out duration-200
				flex
				px-0.5 py-0.5
				fill-slate-800
				hover:fill-slate-700
				w-14 h-14 mt-2
				pointer-events-none
				'
				/>
			</Tooltip>
		</div>
		{/* Tailwind */}
		<div className='mx-4'>
			<Tooltip text='Tailwind'>
				<Tailwindcss
					className='ease-in-out duration-200
				flex
				px-0.5 py-0.5
				fill-slate-800
				hover:fill-slate-700
				w-14 h-14 mt-2
				pointer-events-none
				'
				/>
			</Tooltip>
		</div>
		{/* Express.js */}
		<div className='mx-4'>
			<Tooltip text='Express'>
				<Express
					className='ease-in-out duration-200
				flex
				px-0.5 py-0.5
				fill-slate-800
				hover:fill-slate-700
				w-14 h-14 mt-2
				pointer-events-none
				'
				/>
			</Tooltip>
		</div>
		{/* Discord JS */}
		<div className='mx-4'>
			<Tooltip text='Discord.js'>
				<Discord
					className='ease-in-out duration-200
				flex
				px-0.5 py-0.5
				fill-slate-800
				hover:fill-slate-700
				w-14 h-14 mt-2
				pointer-events-none
				'
				/>
			</Tooltip>
		</div>
		{/* Revolt JS */}
		<div className='mx-4'>
			<Tooltip text='Revolt.js'>
				<Revoltdotchat
					className='ease-in-out duration-200
				flex
				px-0.5 py-0.5
				fill-slate-800
				hover:fill-slate-700
				w-14 h-14 mt-2
				pointer-events-none
				'
				/>
			</Tooltip>
		</div>
		{/* Socket */}
		<div className='mx-4'>
			<Tooltip text='Socket.io'>
				<Socketdotio
					className='ease-in-out duration-200
				flex
				px-0.5 py-0.5
				fill-slate-800
				hover:fill-slate-700
				w-14 h-14 mt-2
				pointer-events-none
				'
				/>
			</Tooltip>
		</div>
		{/* Vue */}
		<div className='mx-4'>
			<Tooltip text='Vue'>
				<Vuedotjs
					className='ease-in-out duration-200
				flex
				px-0.5 py-0.5
				fill-slate-800
				hover:fill-slate-700
				w-14 h-14 mt-2
				pointer-events-none
				'
				/>
			</Tooltip>
		</div>
	</div>
);

const Editor = () => (
	<div className='flex flex-row flex-wrap justify-center align-middle items-center mt-4'>
		{/* Vs code */}
		<div className='mx-4'>
			<Tooltip text='Visual Studio Code'>
				<Visualstudiocode
					className='ease-in-out duration-200
				flex
				px-0.5 py-0.5
				fill-slate-800
				hover:fill-slate-700
				w-14 h-14 mt-2
				pointer-events-none
				'
				/>
			</Tooltip>
		</div>
		{/* Atom */}
		<div className='mx-4'>
			<Tooltip text='Atom'>
				<Atom
					className='ease-in-out duration-200
				flex
				px-0.5 py-0.5
				fill-slate-800
				hover:fill-slate-700
				w-14 h-14 mt-2
				pointer-events-none
				'
				/>
			</Tooltip>
		</div>
		{/* NetBeans */}
		<div className='mx-4'>
			<Tooltip text='NetBeans'>
				<Apachenetbeanside
					className='ease-in-out duration-200
				flex
				px-0.5 py-0.5
				fill-slate-800
				hover:fill-slate-700
				w-14 h-14 mt-2
				pointer-events-none
				'
				/>
			</Tooltip>
		</div>
		{/* Neovim */}
		<div className='mx-4'>
			<Tooltip text='Neovim'>
				<Neovim
					className='ease-in-out duration-200
				flex
				px-0.5 py-0.5
				fill-slate-800
				hover:fill-slate-700
				w-14 h-14 mt-2
				pointer-events-none
				'
				/>
			</Tooltip>
		</div>
		{/* IntellijIDEA */}
		<div className='mx-4'>
			<Tooltip text='IntelliJ IDEA'>
				<Intellijidea
					className='ease-in-out duration-200
				flex
				px-0.5 py-0.5
				fill-slate-800
				hover:fill-slate-700
				w-14 h-14 mt-2
				pointer-events-none
				'
				/>
			</Tooltip>
		</div>
		{/* Pycharm */}
		<div className='mx-4'>
			<Tooltip text='PyCharm'>
				<Pycharm
					className='ease-in-out duration-200
				flex
				px-0.5 py-0.5
				fill-slate-800
				hover:fill-slate-700
				w-14 h-14 mt-2
				pointer-events-none
				'
				/>
			</Tooltip>
		</div>
		{/* Android Studio */}
		<div className='mx-4'>
			<Tooltip text='Android Studio'>
				<Androidstudio
					className='ease-in-out duration-200
				flex
				px-0.5 py-0.5
				fill-slate-800
				hover:fill-slate-700
				w-14 h-14 mt-2
				pointer-events-none
				'
				/>
			</Tooltip>
		</div>
	</div>
);

const Os = () => (
	<div className='flex flex-row flex-wrap justify-center align-middle items-center mt-4'>
		{/* Linux */}
		<div className='mx-4'>
			<Tooltip text='Linux'>
				<Linux
					className='ease-in-out duration-200
				flex
				px-0.5 py-0.5
				fill-slate-800
				hover:fill-slate-700
				w-14 h-14 mt-2
				pointer-events-none
				'
				/>
			</Tooltip>
		</div>
		{/* Arch */}
		<div className='mx-4'>
			<Tooltip text='Arch Linux'>
				<Arch
					className='ease-in-out duration-200
				flex
				px-0.5 py-0.5
				fill-slate-800
				hover:fill-slate-700
				w-14 h-14 mt-2
				pointer-events-none
				'
				/>
			</Tooltip>
		</div>
		{/* Manjaro */}
		<div className='mx-4'>
			<Tooltip text='Manjaro'>
				<Manjaro
					className='ease-in-out duration-200
				flex
				px-0.5 py-0.5
				fill-slate-800
				hover:fill-slate-700
				w-14 h-14 mt-2
				pointer-events-none
				'
				/>
			</Tooltip>
		</div>
		{/* Fedora */}
		<div className='mx-4'>
			<Tooltip text='Fedora'>
				<Fedora
					className='ease-in-out duration-200
				flex
				px-0.5 py-0.5
				fill-slate-800
				hover:fill-slate-700
				w-14 h-14 mt-2
				pointer-events-none
				'
				/>
			</Tooltip>
		</div>
		{/* Ubuntu */}
		<div className='mx-4'>
			<Tooltip text='Ubuntu'>
				<Ubuntu
					className='ease-in-out duration-200
				flex
				px-0.5 py-0.5
				fill-slate-800
				hover:fill-slate-700
				w-14 h-14 mt-2
				pointer-events-none
				'
				/>
			</Tooltip>
		</div>
		{/* Android */}
		<div className='mx-4'>
			<Tooltip text='Android'>
				<Android
					className='ease-in-out duration-200
				flex
				px-0.5 py-0.5
				fill-slate-800
				hover:fill-slate-700
				w-14 h-14 mt-2
				pointer-events-none
				'
				/>
			</Tooltip>
		</div>
		{/* Mac */}
		<div className='mx-4'>
			<Tooltip text='MacOS'>
				<Macos
					className='ease-in-out duration-200
				flex
				px-0.5 py-0.5
				fill-slate-800
				hover:fill-slate-700
				w-14 h-14 mt-2
				pointer-events-none
				'
				/>
			</Tooltip>
		</div>
		{/* Kali */}
		<div className='mx-4'>
			<Tooltip text='Kali'>
				<Kalilinux
					className='ease-in-out duration-200
				flex
				px-0.5 py-0.5
				fill-slate-800
				hover:fill-slate-700
				w-14 h-14 mt-2
				pointer-events-none
				'
				/>
			</Tooltip>
		</div>
		{/* Windows */}
		<div className='mx-4'>
			<Tooltip text='Windows'>
				<Windows11
					className='ease-in-out duration-200
				flex
				px-0.5 py-0.5
				fill-slate-800
				hover:fill-slate-700
				w-14 h-14 mt-2
				pointer-events-none
				'
				/>
			</Tooltip>
		</div>
	</div>
);

const Other = () => (
	<div className='flex flex-col sm:flex-row flex-wrap justify-center align-middle items-center mt-4'>
		<div className='mx-4 md:mx-8'>
			{/* Figma */}
			<div className='mx-4'>
				<Tooltip text='Figma'>
					<Figma
						className='ease-in-out duration-200
					flex
					px-0.5 py-0.5
					fill-slate-800
					hover:fill-slate-700
					w-14 h-14 mt-2
					pointer-events-none
					'
					/>
				</Tooltip>
			</div>
			{/* Blender */}
			<div className='mx-4'>
				<Tooltip text='Blender'>
					<Blender
						className='ease-in-out duration-200
					flex
					px-0.5 py-0.5
					fill-slate-800
					hover:fill-slate-700
					w-14 h-14 mt-2
					pointer-events-none
					'
					/>
				</Tooltip>
			</div>
			{/* Trello */}
			<div className='mx-4'>
				<Tooltip text='Trello'>
					<Trello
						className='ease-in-out duration-200
					flex
					px-0.5 py-0.5
					fill-slate-800
					hover:fill-slate-700
					w-14 h-14 mt-2
					pointer-events-none
					'
					/>
				</Tooltip>
			</div>
			{/* Premiere pro */}
			<div className='mx-4'>
				<Tooltip text='Premiere Pro'>
					<Adobepremierepro
						className='ease-in-out duration-200
					flex
					px-0.5 py-0.5
					fill-slate-800
					hover:fill-slate-700
					w-14 h-14 mt-2
					pointer-events-none
					'
					/>
				</Tooltip>
			</div>
			{/* Photoshop */}
			<div className='mx-4'>
				<Tooltip text='Photoshop'>
					<Adobephotoshop
						className='ease-in-out duration-200
					flex
					px-0.5 py-0.5
					fill-slate-800
					hover:fill-slate-700
					w-14 h-14 mt-2
					pointer-events-none
					'
					/>
				</Tooltip>
			</div>
		</div>
		<div className='mx-4 md:mx-8'>
			{/* Chrome */}
			<div className='mx-4'>
				<Tooltip text='Chrome / Chromium'>
					<Googlechrome
						className='ease-in-out duration-200
					flex
					px-0.5 py-0.5
					fill-slate-800
					hover:fill-slate-700
					w-14 h-14 mt-2
					pointer-events-none
					'
					/>
				</Tooltip>
			</div>
			{/* Firefo */}
			<div className='mx-4'>
				<Tooltip text='Firefox'>
					<Firefoxbrowser
						className='ease-in-out duration-200
					flex
					px-0.5 py-0.5
					fill-slate-800
					hover:fill-slate-700
					w-14 h-14 mt-2
					pointer-events-none
					'
					/>
				</Tooltip>
			</div>
			{/* Tor */}
			<div className='mx-4'>
				<Tooltip text='Tor'>
					<Torbrowser
						className='ease-in-out duration-200
					flex
					px-0.5 py-0.5
					fill-slate-800
					hover:fill-slate-700
					w-14 h-14 mt-2
					pointer-events-none
					'
					/>
				</Tooltip>
			</div>
			{/* Edge */}
			<div className='mx-4'>
				<Tooltip text='Edge'>
					<Microsoftedge
						className='ease-in-out duration-200
					flex
					px-0.5 py-0.5
					fill-slate-800
					hover:fill-slate-700
					w-14 h-14 mt-2
					pointer-events-none
					'
					/>
				</Tooltip>
			</div>

			{/* Postman */}
			<div className='mx-4'>
				<Tooltip text='Postman'>
					<Postman
						className='ease-in-out duration-200
					flex
					px-0.5 py-0.5
					fill-slate-800
					hover:fill-slate-700
					w-14 h-14 mt-2
					pointer-events-none
					'
					/>
				</Tooltip>
			</div>
		</div>
		<div className='mx-4 md:mx-8'>
			{/* Node */}
			<div className='mx-4'>
				<Tooltip text='Node.js'>
					<Nodedotjs
						className='ease-in-out duration-200
					flex
					px-0.5 py-0.5
					fill-slate-800
					hover:fill-slate-700
					w-14 h-14 mt-2
					pointer-events-none
					'
					/>
				</Tooltip>
			</div>
			{/* Yarn */}
			<div className='mx-4'>
				<Tooltip text='Yarn'>
					<Yarn
						className='ease-in-out duration-200
					flex
					px-0.5 py-0.5
					fill-slate-800
					hover:fill-slate-700
					w-14 h-14 mt-2
					pointer-events-none
					'
					/>
				</Tooltip>
			</div>
			{/* Npm */}
			<div className='mx-4'>
				<Tooltip text='NPM'>
					<Npm
						className='ease-in-out duration-200
					flex
					px-0.5 py-0.5
					fill-slate-800
					hover:fill-slate-700
					w-14 h-14 mt-2
					pointer-events-none
					'
					/>
				</Tooltip>
			</div>
			{/* Mongodb */}
			<div className='mx-4'>
				<Tooltip text='Mongo DB'>
					<Mongodb
						className='ease-in-out duration-200
					flex
					px-0.5 py-0.5
					fill-slate-800
					hover:fill-slate-700
					w-14 h-14 mt-2
					pointer-events-none
					'
					/>
				</Tooltip>
			</div>
			{/* MySQL */}
			<div className='mx-4'>
				<Tooltip text='MySQL'>
					<Mysql
						className='ease-in-out duration-200
					flex
					px-0.5 py-0.5
					fill-slate-800
					hover:fill-slate-700
					w-14 h-14 mt-2
					pointer-events-none
					'
					/>
				</Tooltip>
			</div>
		</div>
		<div className='mx-4 md:mx-8'>
			{/* Git */}
			<div className='mx-4'>
				<Tooltip text='Git'>
					<Git
						className='ease-in-out duration-200
					flex
					px-0.5 py-0.5
					fill-slate-800
					hover:fill-slate-700
					w-14 h-14 mt-2
					pointer-events-none
					'
					/>
				</Tooltip>
			</div>
			{/* Github */}
			<div className='mx-4'>
				<Tooltip text='GitHub'>
					<Github
						className='ease-in-out duration-200
					flex
					px-0.5 py-0.5
					fill-slate-800
					hover:fill-slate-700
					w-14 h-14 mt-2
					pointer-events-none
					'
					/>
				</Tooltip>
			</div>
			{/* Heroku */}
			<div className='mx-4'>
				<Tooltip text='Heroku'>
					<Heroku
						className='ease-in-out duration-200
					flex
					px-0.5 py-0.5
					fill-slate-800
					hover:fill-slate-700
					w-14 h-14 mt-2
					pointer-events-none
					'
					/>
				</Tooltip>
			</div>
			{/* railway */}
			<div className='mx-4'>
				<Tooltip text='Railway'>
					<Railway
						className='ease-in-out duration-200
					flex
					px-0.5 py-0.5
					fill-slate-800
					hover:fill-slate-700
					w-14 h-14 mt-2
					pointer-events-none
					'
					/>
				</Tooltip>
			</div>
			{/* Virtualbox */}
			<div className='mx-4'>
				<Tooltip text='VirtualBox'>
					<Virtualbox
						className='ease-in-out duration-200
					flex
					px-0.5 py-0.5
					fill-slate-800
					hover:fill-slate-700
					w-14 h-14 mt-2
					pointer-events-none
					'
					/>
				</Tooltip>
			</div>
		</div>
	</div>
);

const General = () => {
	const toggle = (to: '' | 'lang' | 'lib' | 'editor' | 'os' | 'other') => (to == tab ? setTab('') : setTab(to));

	const [tab, setTab] = useState<'' | 'lang' | 'lib' | 'editor' | 'os' | 'other'>('');

	return (
		<div
			className='backdrop-filter backdrop-blur-md
		rounded-lg
		bg-slate-100
		bg-opacity-40
		hover:bg-opacity-50
		
		ease-in-out duration-200

		flex-col flex
		px-10 py-6
		'
		>
			<h1 className='text-2xl text-slate-900 mb-4'>
				{lang('general_hi')} <b>Gátomo</b>
			</h1>
			<p>{lang('general_description')}</p>
			<div
				className='flex flex-col lg:flex-row
			flex-wrap
			pt-5
			ease-in-out duration-200
			'
			>
				<div
					onClick={() => toggle('lang')}
					className={`flex flex-row
				flex-grow justify-around items-center
				font-bold text-xl
				px-6 py-4 mx-4
				text-center text-slate-800
				hover:-translate-y-1 active:translate-y-0
				
				ease-in-out duration-200

				${tab == 'lang' && 'rounded-md hover:shadow-lg bg-slate-100 bg-opacity-30'}
				`}
				>
					{lang('general_tech_lang')}
				</div>
				<div
					onClick={() => toggle('lib')}
					className={`flex flex-row
				flex-grow justify-around items-center
				font-bold text-xl
				px-6 py-4 mx-4
				text-center text-slate-800
				hover:-translate-y-1 active:translate-y-0
				
				ease-in-out duration-200

				${tab == 'lib' && 'rounded-md hover:shadow-lg bg-slate-100 bg-opacity-30'}
				`}
				>
					{lang('general_tech_lib')}
				</div>
				<div
					onClick={() => toggle('editor')}
					className={`flex flex-row
				flex-grow justify-around items-center
				font-bold text-xl
				px-6 py-4 mx-4
				text-center text-slate-800
				hover:-translate-y-1 active:translate-y-0
				
				ease-in-out duration-200

				${tab == 'editor' && 'rounded-md hover:shadow-lg bg-slate-100 bg-opacity-30'}
				`}
				>
					{lang('general_tech_editors')}
				</div>
				<div
					onClick={() => toggle('os')}
					className={`flex flex-row
				flex-grow justify-around items-center
				font-bold text-xl
				px-6 py-4 mx-4
				text-center text-slate-800
				hover:-translate-y-1 active:translate-y-0
				
				ease-in-out duration-200

				${tab == 'os' && 'rounded-md hover:shadow-lg bg-slate-100 bg-opacity-30'}
				`}
				>
					{lang('general_tech_os')}
				</div>
				<div
					onClick={() => toggle('other')}
					className={`flex flex-row
				flex-grow justify-around items-center
				font-bold text-xl
				px-6 py-4 mx-4
				text-center text-slate-800
				hover:-translate-y-1 active:translate-y-0
				
				ease-in-out duration-200

				${tab == 'other' && 'rounded-md hover:shadow-lg bg-slate-100 bg-opacity-30'}
				`}
				>
					{lang('general_tech_other')}
				</div>
			</div>
			{tab == 'lang' && <Lang />}
			{tab == 'lib' && <Lib />}
			{tab == 'editor' && <Editor />}
			{tab == 'os' && <Os />}
			{tab == 'other' && <Other />}
		</div>
	);
};

export default General;
