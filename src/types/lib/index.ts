export type TrackRaw = {
  chapter_id: string;
  post_id: string;
  chapter_link_dropbox: string;
  name: string;
  duration: string;
  track: number;
  url?: string;
};

export type TrackWithUrl = Required<TrackRaw>;
