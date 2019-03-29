
export interface MediaEmbed {
    content: string;
    width?: number;
    scrolling?: boolean;
    height?: number;
}

export interface Oembed {
    provider_url: string;
    description: string;
    title: string;
    url: string;
    type: string;
    author_name: string;
    height: number;
    width: number;
    html: string;
    thumbnail_width: number;
    version: string;
    provider_name: string;
    thumbnail_url: string;
    thumbnail_height: number;
    author_url: string;
}

export interface SecureMedia {
    oembed: Oembed;
    type: string;
}

export interface SecureMediaEmbed {
    content: string;
    width?: number;
    scrolling?: boolean;
    height?: number;
}

export interface Oembed2 {
    provider_url: string;
    description: string;
    title: string;
    url: string;
    type: string;
    author_name: string;
    height: number;
    width: number;
    html: string;
    thumbnail_width: number;
    version: string;
    provider_name: string;
    thumbnail_url: string;
    thumbnail_height: number;
    author_url: string;
}

export interface Media {
    oembed: Oembed2;
    type: string;
}

export interface DataChild {
    domain: string;
    banned_by?: any;
    media_embed: MediaEmbed;
    subreddit: string;
    selftext_html: string;
    selftext: string;
    likes?: any;
    user_reports: any[];
    secure_media: SecureMedia;
    link_flair_text: string;
    id: string;
    gilded: number;
    secure_media_embed: SecureMediaEmbed;
    clicked: boolean;
    report_reasons?: any;
    author: string;
    media: Media;
    score: number;
    approved_by?: any;
    over_18: boolean;
    hidden: boolean;
    thumbnail: string;
    subreddit_id: string;
    edited: any;
    link_flair_css_class: string;
    author_flair_css_class?: any;
    downs: number;
    mod_reports: any[];
    saved: boolean;
    is_self: boolean;
    name: string;
    permalink: string;
    stickied: boolean;
    created: number;
    url: string;
    author_flair_text?: any;
    title: string;
    created_utc: number;
    ups: number;
    num_comments: number;
    visited: boolean;
    num_reports?: any;
    distinguished?: any;
}

export interface Child {
    kind: string;
    data: DataChild;
}

export interface Data {
    modhash: string;
    children: Child[];
    after?: string;
    before?: any;
}

export interface RootObject {
    kind: string;
    data: Data;
}


