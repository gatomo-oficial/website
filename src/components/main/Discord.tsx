import { useEffect, useState } from 'react';
import { Activity, LanyardData, useLanyard } from 'react-use-lanyard';
import Code from '../../icons/Code';
import Desktop from '../../icons/Desktop';
import Dot from '../../icons/Dot';
import Globe from '../../icons/Globe';
import Globe2 from '../../icons/Globe2';
import MusicalNote from '../../icons/MusicalNote';
import People from '../../icons/People';
import Phone from '../../icons/Phone';
import lang from '../../lang/lang';
import Tooltip from '../Tooltip';

const Discord = () => {
	const langs: { [name: string]: string } = {
		TYPESCRIPT: 'TypeScript',
		JAVASCRIPT: 'JavaScript',
		TSX: 'TSX',
		JSX: 'JSX',
		CPP: 'C++',
		CSHARP: 'C#',
		SQL: 'SQL',
		JSON: 'JSON',
		JSONC: 'JSON',
		YAML: 'YAML',
		PHP: 'PHP',
		SCSS: 'SCSS',
		XML: 'XML',
		TOML: 'TOML'
	};

	const lanyard = useLanyard({ userId: '685947556655923242', socket: true });
	const [data, setData] = useState<LanyardData | undefined>(undefined);
	const [code, setCode] = useState<Activity | undefined>();

	useEffect(() => {
		setData(!lanyard.loading ? lanyard.status : undefined);
		setCode(data?.activities.find((x) => x.type === 0 && x.name === 'Visual Studio Code'));
	}, [lanyard]);

	const status = () => {
		switch (data?.discord_status) {
			case 'online':
				return (
					<div className='flex flex-row space-x-2 align-middle'>
						<Dot className='w-6 h-6 fill-emerald-700 hover:fill-emerald-600 ease-in-out duration-200' />
						<p className='font-bold text-emerald-700'>{lang('discord_online')}</p>
					</div>
				);
			case 'idle':
				return (
					<div className='flex flex-row space-x-2 align-middle'>
						<Dot className='w-6 h-6 fill-amber-700 hover:fill-amber-600 ease-in-out duration-200' />
						<p className='font-bold text-amber-700'>{lang('discord_idle')}</p>
					</div>
				);
			case 'dnd':
				return (
					<div className='flex flex-row space-x-2 align-middle'>
						<Dot className='w-6 h-6 fill-rose-700 hover:fill-rose-600 ease-in-out duration-200' />
						<p className='font-bold text-rose-700'>{lang('discord_dnd')}</p>
					</div>
				);
			case 'offline':
				return (
					<div className='flex flex-row space-x-2 align-middle'>
						<Dot className='w-6 h-6 fill-slate-700 hover:fill-slate-600 ease-in-out duration-200' />
						<p className='font-bold text-slate-700'>{lang('discord_offline')}</p>
					</div>
				);
			default:
				return <div></div>;
		}
	};

	return (
		<div
			className=' 
		backdrop-filter backdrop-blur-md
		rounded-lg
		bg-slate-100
		bg-opacity-40
		hover:bg-opacity-50
		
		ease-in-out duration-200
		
		flex flex-col flex-wrap flex-grow
		px-10 py-6 space-y-4
		'
		>
			<h1 className='font-bold text-slate-900 text-xl'>Discord</h1>
			<div
				className='flex flex-col sm:flex-row flex-wrap
			align-top
			sm:justify-between justify-center items-center
			'
			>
				{!data ? (
					<div className='container-one'>
						<Tooltip text={lang('discord_loading')}>
							<div
								className='bg-slate-300
							opacity-80
							ease-in-out duration-200 animate-pulse
							w-32 h-32
							rounded-full
							hover:shadow-lg hover:-translate-y-1
							active:translate-y-0
							'
							></div>
						</Tooltip>
					</div>
				) : (
					<div
						className='flex sm:flex-row flex-col
					sm:justify-start justify-center
					sm:space-y-0 space-y-4
					space-x-0 sm:space-x-10
					sm:mx-5 mb-7
					'
					>
						<Tooltip text='Gátomo'>
							<img
								/* onMouseEnter={() => setAvatarHover(true)}
									onMouseLeave={() => setAvatarHover(false)} */
								draggable={false}
								src={`https://cdn.discordapp.com/avatars/${data.discord_user.id}/${data.discord_user.avatar}.png?size=512`}
								className='w-32 h-32
							rounded-full
							hover:shadow-lg hover:-translate-y-1
							active:translate-y-0
							ease-in-out duration-200
							'
							/>
						</Tooltip>
						<div className='flex flex-col sm:items-start items-center'>
							<div className='flex flex-row text-xl'>
								<h1 className='text-slate-800 font-bold'>{data.discord_user.username}</h1>
								<h1 className='text-slate-600 font-medium mr-0 sm:mr-4'>
									#{data.discord_user.discriminator}
								</h1>
								<div className='flex flex-row space-x-4'>
									{data.active_on_discord_desktop && (
										<Tooltip text={lang('discord_pc')}>
											<Desktop className='w-8 h-8 fill-slate-800 hover:fill-slate-700 ease-in-out duration-200' />
										</Tooltip>
									)}
									{data.active_on_discord_mobile && (
										<Tooltip text={lang('discord_phone')}>
											<Phone className='w-8 h-8 fill-slate-800 hover:fill-slate-700 ease-in-out duration-200' />
										</Tooltip>
									)}
									{
										// @ts-ignore
										data.active_on_discord_web && (
											<Tooltip text={lang('discord_web')}>
												<Globe2 className='w-8 h-8 fill-slate-800 hover:fill-slate-700 ease-in-out duration-200' />
											</Tooltip>
										)
									}
								</div>
							</div>
							<div className='flex flex-row space-x-2 align-middle'>{status()}</div>
							<div className='flex flex-row space-x-2 mt-2 items-center'>
								<People className='w-8 h-8 fill-slate-800 hover:fill-slate-700' />
								<a
									className='text-slate-800  hover:text-slate-700 active:text-slate-900 animate font-bold'
									href='https://discord.gg/E2yBpMq2Km'
									target='_blank'
								>
									{lang('discord_server')}
								</a>
							</div>
						</div>
					</div>
				)}
				{data?.listening_to_spotify && (
					<div
						className='flex sm:flex-row flex-col
					sm:justify-start sm:items-start
					items-center justify-center
					sm:space-y-0 space-y-4
					space-x-0 sm:space-x-10
					sm:mx-5 mb-7
					'
					>
						<a href={`spotify://open.spotify.com/track/${data.spotify?.track_id}`} target='_blank'>
							<Tooltip text={lang('discord_spotify_listen')}>
								<img
									draggable={false}
									className='rounded-lg
									w-32 h-32
									hover:shadow-lg
									hover:-translate-y-1
									active:translate-y-0
									ease-in-out duration-200
									'
									src={data?.spotify?.album_art_url}
								/>
							</Tooltip>
						</a>
						<div className='flex flex-col space-y-2 sm:items-start items-center'>
							<div className='flex flex-row space-x-2 items-center'>
								<MusicalNote className='w-8 h-8 fill-slate-800 hover:fill-slate-700 ease-in-out duration-200' />
								<h1 className='font-bold text-slate-900 text-xl'>{lang('discord_spotify_title')}</h1>
							</div>
							<p className='font-semibold text-slate-800'>{data.spotify?.song}</p>
							<p className='font-medium text-slate-700'>{`${data.spotify?.artist} - ${data.spotify?.album}`}</p>
						</div>
					</div>
				)}
				{data?.activities.some((x) => x.type === 0 && x.name === 'Visual Studio Code') && (
					<div
						className='flex sm:flex-row flex-col
					sm:items-start items-center justify-center
					sm:space-y-0 space-y-4 space-x-0 sm:space-x-10
					sm:mx-5 mb-7
					'
					>
						<Tooltip
							textClassName='capitalize'
							text={
								langs[code?.assets?.large_text.split(' ').slice(2).join(' ') || ''] ||
								code?.assets?.large_text.split(' ').slice(2).join(' ').toLowerCase() ||
								lang('discord_code_idle_sleeping')
							}
						>
							<img
								draggable={false}
								className='rounded-lg w-32 h-32 hover:shadow-lg hover:-translate-y-1 active:translate-y-0 ease-in-out duration-200'
								src={`https://cdn.discordapp.com/app-assets/${code?.application_id}/${code?.assets?.large_image}.png?size=2048`}
							/>
						</Tooltip>
						<div className='flex flex-col space-y-2 sm:items-start items-center'>
							<div className='flex flex-row space-x-2 items-center'>
								<Code className='w-8 h-8 fill-slate-800 hover:fill-slate-700 ease-in-out duration-200' />
								<h1 className='font-bold text-slate-900 text-xl'>{lang('discord_code_title')}</h1>
							</div>
							<p className='font-medium text-slate-800'>
								{lang('discord_code_editing')}{' '}
								<b className='text-slate-900 font-bold'>
									{code?.details?.split(' ').slice(1).join(' ') || lang('discord_code_idle_nothing')}
								</b>
							</p>
							<p className='font-medium text-slate-800'>
								{lang('discord_code_working')}{' '}
								<b className='text-slate-900 font-bold'>
									{code?.state?.split(' ').slice(2).join(' ') || lang('discord_code_idle_nothing')}
								</b>
							</p>
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default Discord;
