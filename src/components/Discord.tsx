import { useEffect, useState } from 'react';
import { Activity, LanyardData, useLanyard } from 'react-use-lanyard';
import Code from '../icons/Code';
import Desktop from '../icons/Desktop';
import Dot from '../icons/Dot';
import MusicalNote from '../icons/MusicalNote';
import People from '../icons/People';
import Phone from '../icons/Phone';
import lang from '../lang/lang';
import Tooltip from './Tooltip';

const Discord = () => {
	const lanyard = useLanyard({ userId: '685947556655923242', socket: true });
	const [data, setData] = useState<LanyardData | undefined>(undefined);
	const [code, setCode] = useState<Activity | undefined>();

	useEffect(() => {
		setData(!lanyard.loading ? lanyard.status : undefined);
		setCode(data?.activities.find((x) => x.type === 0 && x.name === 'Visual Studio Code'));
	});

	const status = () => {
		switch (data?.discord_status) {
			case 'online':
				return (
					<div className='status'>
						<Dot className='icon-online animate' />
						<p className='text-online'>{lang('discord_online')}</p>
					</div>
				);
			case 'idle':
				return (
					<div className='status'>
						<Dot className='icon-idle animate' />
						<p className='text-idle'>{lang('discord_idle')}</p>
					</div>
				);
			case 'dnd':
				return (
					<div className='status'>
						<Dot className='icon-dnd animate' />
						<p className='text-dnd'>{lang('discord_dnd')}</p>
					</div>
				);
			case 'offline':
				return (
					<div className='status'>
						<Dot className='icon-offline animate' />
						<p className='text-offline'>{lang('discord_offline')}</p>
					</div>
				);
			default:
				return <div></div>;
		}
	};

	return (
		<div className='card-bg discord'>
			<h1 className='title'>Discord</h1>
			<div className='content'>
				{!data ? (
					<div className='container-one'>
						<Tooltip text={lang('discord_loading')}>
							<div className='loading animate'></div>
						</Tooltip>
					</div>
				) : (
					<div className='container-one'>
						{/* {avatarHover && (
							<div className='inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 shadow-sm opacity-0 tooltip'>
								Tooltip content
								<div className='tooltip-arrow'></div>
							</div>
						)} */}
						<Tooltip text='Gátomo'>
							<img
								/* onMouseEnter={() => setAvatarHover(true)}
									onMouseLeave={() => setAvatarHover(false)} */
								draggable={false}
								src={`https://cdn.discordapp.com/avatars/${data.discord_user.id}/${data.discord_user.avatar}.png?size=256`}
								className='avatar animate'
							/>
						</Tooltip>
						<div className='info'>
							<div className='username'>
								<h1 className='name'>{data.discord_user.username}</h1>
								<h1 className='discriminator'>#{data.discord_user.discriminator}</h1>
								<div className='icon-container'>
									{data.active_on_discord_desktop && (
										<Tooltip text={lang('discord_pc')}>
											<Desktop className='icon animate' />
										</Tooltip>
									)}
									{data.active_on_discord_mobile && (
										<Tooltip text={lang('discord_phone')}>
											<Phone className='icon animate' />
										</Tooltip>
									)}
								</div>
							</div>
							<div className='status'>{status()}</div>
							<div className='server'>
								<People className='icon' />
								<a className='text' href='https://discord.gg/E2yBpMq2Km' target='_blank'>
									{lang('discord_server')}
								</a>
							</div>
						</div>
					</div>
				)}
				{data?.listening_to_spotify && (
					<div className='spotify'>
						<a href={`spotify://open.spotify.com/track/${data.spotify?.track_id}`} target='_blank'>
							<Tooltip text={lang('discord_spotify_listen')}>
								<img draggable={false} className='art animate' src={data?.spotify?.album_art_url} />
							</Tooltip>
						</a>
						<div className='container-two'>
							<div className='title-icon'>
								<MusicalNote className='icon animate' />
								<h1 className='title'>{lang('discord_spotify_title')}</h1>
							</div>
							<p className='song'>{data.spotify?.song}</p>
							<p className='artist'>
								{`${data.spotify?.artist} - ${data.spotify?.album}`}
							</p>
						</div>
					</div>
				)}
				{data?.activities.some((x) => x.type === 0 && x.name === 'Visual Studio Code') && (
					<div className='code'>
						<Tooltip
							text={
								code?.assets?.large_text.split(' ').slice(2).join(' ') ||
								lang('discord_code_idle_sleeping')
							}
						>
							<img
								draggable={false}
								className='lang animate'
								src={`https://cdn.discordapp.com/app-assets/${code?.application_id}/${code?.assets?.large_image}.png`}
							/>
						</Tooltip>
						<div className='container-three'>
							<div className='title-icon'>
								<Code className='icon animate' />
								<h1 className='title'>{lang('discord_code_title')}</h1>
							</div>
							<p className='text'>
								{lang('discord_code_editing')}{' '}
								<b className='bold'>
									{code?.details?.split(' ').slice(1).join(' ') || lang('discord_code_idle_nothing')}
								</b>
							</p>
							<p className='text'>
								{lang('discord_code_working')}{' '}
								<b className='bold'>
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
