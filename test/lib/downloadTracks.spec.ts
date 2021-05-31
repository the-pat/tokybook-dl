import { TrackWithUrl, DownloadConfig } from 'types/lib';
import downloadTracks from 'lib/downloadTracks';
import downloadTrack from 'lib/downloadTracks/downloadTrack';

import { mocked } from 'ts-jest/utils';

jest.mock('lib/downloadTracks/downloadTrack');

const mockedDownloadTrack = mocked(downloadTrack);
describe('downloadTracks', () => {
  it('should download tracks regardless of the concurrency or directory specified', async () => {
    // arrange
    const track1 = { name: 'track1' } as TrackWithUrl;
    const track2 = { name: 'track2' } as TrackWithUrl;
    const tracks = [track1, track2];

    const dir = './some/dir';
    const concurrency = 1;
    const config: DownloadConfig = { dir, concurrency };

    mockedDownloadTrack.mockResolvedValue();

    // act
    await downloadTracks(tracks, config);

    // assert
    expect(downloadTrack).toHaveBeenNthCalledWith(1, track1, dir);
    expect(downloadTrack).toHaveBeenNthCalledWith(2, track2, dir);
  });
});
