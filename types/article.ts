export interface Article {
    id: number;
    title: string;
    content: string;
    postDate: string;
    tags: Tag[] | null;
}

export interface Tag {
    id: number;
    name: string;
    searchable: boolean;
}
