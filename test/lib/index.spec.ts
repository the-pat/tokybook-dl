import getDirPath from '../../src/lib/downloadTrack/getDirPath';
import { TrackWithUrl } from 'types/lib';

describe('getDirPath', () => {
  it('should prefer the book name given in the final URL component', () => {
    // arrange
    const track = { chapter_link_dropbox: "probably-garbage/12345/A Book - a-file.mp3" } as TrackWithUrl;
    const dir = "path/to/books";
    const expectedDirPath = "path/to/books/A Book";

    // act
    const actualDirPath = getDirPath(track, dir);

    // assert
    expect(actualDirPath).toEqual(expectedDirPath);
  });

  it('should give a dir path regardless of whether the book name is in the final URL component', () => {
    // arrange
    const track = { chapter_link_dropbox: "a-book/12345/a-file.mp3" } as TrackWithUrl;
    const dir = "path/to/books";
    const expectedDirPath = "path/to/books/A Book";

    // act
    const actualDirPath = getDirPath(track, dir);

    // assert
    expect(actualDirPath).toEqual(expectedDirPath);
  });
});