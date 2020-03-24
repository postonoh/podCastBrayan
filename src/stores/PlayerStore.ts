import { action, computed, observable, runInAction } from 'mobx';
import RootStore from './RootStore';
import TrackPlayer, {
    State as TrackPlayerState,
    STATE_PLAYING,
    STATE_PAUSED
} from 'react-native-track-player';


interface ITrack {
    id: string;
    title: string;
    artist: string;
    duration: string;
    url: string;
    artwork?: string;

}

class PlayerStore {

    rootStore: RootStore;

    @observable
    private _playerState: TrackPlayerState | null = null;

    @observable
    public currentTrack: ITrack | null = null;


    constructor(rootStore: RootStore) {
        this.rootStore = rootStore;

        TrackPlayer.addEventListener(
            'playback-state',
            ({ state }: { state: TrackPlayerState }) => {
                runInAction(() => this._playerState = state);
            },
        );
    }

    @action
    public async start(track: ITrack) {
        this.currentTrack = track;
        await TrackPlayer.reset();
        await TrackPlayer.add({
            artist: track.artist,
            title: track.title,
            id: track.id,
            artwork: track.artwork,
            url: track.url,

        });
    }

    @action
    public async play() {
        await TrackPlayer.play();
    }

    @action
    public async pause() {
        await TrackPlayer.pause();
    }

    @action
    public async seek30() {
        const position = await TrackPlayer.getPosition()
        console.log('position', position);
        await TrackPlayer.seekTo(position + 30);
    }

    @computed
    public get isPlaying() {
        return this._playerState === STATE_PLAYING;
    }

    @computed
    public get isPaused() {
        return this._playerState === STATE_PAUSED;
    }

}

export default PlayerStore;