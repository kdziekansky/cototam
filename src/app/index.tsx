import {Layout} from '../components/Layout/Layout';
import {TrackList} from '../components/TrackList/TrackList';
import {useState} from 'react';
import {TrackModel} from '../models/Track';

const tracks: TrackModel[] = [
	{
		id: 1,
		title: 'Space Oddity',
		duration: '5:15'
	},
	{
		id: 2,
		title: 'The Man Who Sold The World',
		duration: '3:59'
	},
	{
		id: 3,
		title: 'Starman',
		duration: '4:14'
	}
]

export const App = () => {
	const [currentPlayingTrack, setCurrentPlayingTrack] = useState<TrackModel | null>(null)

	return (
		<Layout>
			<TrackList tracks={tracks} currentPlayingTrack={currentPlayingTrack} setCurrentPlayingTrack={setCurrentPlayingTrack}/>
		</Layout>
	)
}