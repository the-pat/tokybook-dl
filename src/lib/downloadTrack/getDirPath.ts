import path from 'path';
import Case from 'case';
import { TrackWithUrl } from 'types/lib';

const getDirPath = (track: TrackWithUrl, dir: string) => {
  const dropboxLinkComponents = track.chapter_link_dropbox.split('/');

  let [bookTitleFromDropboxURL] = dropboxLinkComponents;
  bookTitleFromDropboxURL = Case.capital(bookTitleFromDropboxURL);

  const [, , filename] = dropboxLinkComponents;
  const [bookTitleFromFilename] = filename.split(' - ');

  const bookTitle = bookTitleFromFilename === filename
    ? bookTitleFromDropboxURL
    : bookTitleFromFilename;
  return path.join(dir, bookTitle);
};

export default getDirPath;
