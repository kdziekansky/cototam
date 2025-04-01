import './styles.css';
import {Track} from '../Track/Track';
import {TrackModel} from '../../models/Track';

interface TrackListProps {
    tracks: TrackModel[]
    currentPlayingTrack: TrackModel | null;
    setCurrentPlayingTrack: (currentPlayingTrackId: TrackModel) => void;
}

export const TrackList = ({ tracks, currentPlayingTrack, setCurrentPlayingTrack }: TrackListProps) => {
    return (
        <div className='trackList'>
            {tracks.map((track) => (
                <Track
                    key={track.id}
                    track={track}
                    currentPlayingTrack={currentPlayingTrack}
                    setCurrentPlayingTrack={setCurrentPlayingTrack}
                />
            ))}
        </div>
    )
}