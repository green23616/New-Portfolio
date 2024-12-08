export default interface Photo {
  id: string;
  slug: string;
  alternative_slugs: {
    en?: string;
    es?: string;
    ja?: string;
    fr?: string;
    it?: string;
    ko?: string;
    de?: string;
    pt?: string;
  };
  created_at: string;
  updated_at: string;
  promoted_at: string | null;
  width: number;
  height: number;
  color: string;
  blur_hash: string;
  description: string | null;
  alt_description: string | null;
  breadcrumbs: any[];
  urls: {
    raw: string;
    full: string;
    regular: string;
    small: string;
    thumb: string;
    small_s3?: string;
  };
  links: {
    self: string;
    html: string;
    download: string;
    download_location?: string;
  };
  likes: number;
  liked_by_user: boolean;
  current_user_collections: any[];
  sponsorship: null | Record<string, any>;
  topic_submissions?: Record<string, { status: string; approved_on?: string }>;
  asset_type?: string;
  user: {
    id: string;
    updated_at: string;
    username: string;
    name: string;
    first_name?: string;
    last_name?: string | null;
    twitter_username?: string | null;
    portfolio_url?: string | null;
    bio?: string | null;
    location?: string | null;
    links: {
      self: string;
      html: string;
      photos: string;
      likes: string;
      portfolio?: string | null;
      following?: string | null;
      followers?: string | null;
    };
    profile_image: {
      small: string;
      medium: string;
      large: string;
    };
    instagram_username?: string | null;
    total_collections?: number;
    total_likes?: number;
    total_photos?: number;
    total_promoted_photos?: number;
    total_illustrations?: number | null;
    accepted_tos?: boolean;
    for_hire?: boolean;
    social?: {
      instagram_username?: string | null;
      portfolio_url?: string | null;
      twitter_username?: string | null;
      paypal_email?: any | null;
    };
  };
}
