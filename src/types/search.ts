interface Images {
  height: number;
  url: string;
  width: number;
}
interface Artists {
  external_urls: {
    spotify: string,
  };
  href: string;
  id: string;
  name: string;
  type: string;
  uri: string;
}
interface SearchItemsResponse {
  album: {
    album_type: string,
    artists: Artists[],
    external_urls: {
      spotify: string,
    },
    href: string,
    id: string,
    images: Images[],
    name: string,
    release_date: string,
    release_date_precision: string,
    total_tracks: number,
    type: number,
    uri: string,
  };

  artists: Artists[];
  disc_number: number;
  duration_ms: number;
  explicit: boolean;
  external_ids: {
    isrc: string,
  };
  external_urls: {
    spotify: string,
  };
  href: string;
  id: string;
  is_local: boolean;
  name: string;
  popularity: number;
  preview_url: string;
  track_number: number;
  type: string;
  uri: string;
}
interface SearchAlbumsResponse {
  items: SearchItemsResponse[];
  limit: number;
  next: null;
  offset: number;
  total: number;
}
interface SearchTrackResponse {
  items: SearchItemsResponse[];
  limit: number;
  next: null;
  offset: number;
  total: number;
}

export interface SearchResponse {
  albums: SearchAlbumsResponse;
  tracks: SearchTrackResponse;
}
