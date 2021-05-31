import { TrackWithUrl, DownloadConfig } from 'types/lib';
import downloadTracks from '../../src/lib/downloadTracks';
import downloadTrack from '../../src/lib/downloadTracks/downloadTrack';

jest.mock('../../src/lib/downloadTracks/downloadTrack');

describe('downloadTracks', () => {
  it('should download tracks regardless of the concurrency or directory specified', async () => {
    // arrange
    const track1 = { name: 'track1' } as TrackWithUrl;
    const track2 = { name: 'track2' } as TrackWithUrl;
    const tracks = [track1, track2];

    const dir = './some/dir';
    const concurrency = 1;
    const config: DownloadConfig = { dir, concurrency };

    // act
    await downloadTracks(tracks, config);

    // assert
    expect(downloadTrack).toHaveBeenNthCalledWith(1, track1, dir);
    expect(downloadTrack).toHaveBeenNthCalledWith(2, track2, dir);
  });
});
