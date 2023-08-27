interface Article {
    id: number;
    title: string;
    content: string;
    postDate: string;
    tags: Tag[] | null;
}

interface Tag {
    id: number;
    name: string;
    searchable: boolean;
}
