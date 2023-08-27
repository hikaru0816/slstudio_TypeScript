import type { Article, Tag } from "./types/article.js";

const tags: Tag[] = [
    {
        id: 11,
        name: "HTML",
        searchable: true,
    },
    {
        id: 40,
        name: "タグ",
        searchable: false,
    },
    {
        id: 54,
        name: "属性",
        searchable: false,
    }
];
const article: Article = {
    id: 33,
    title: "【新コース】HTML基礎コース 追加！",
    content: "この度、新しいコースとして HTML基礎コースを追加いたしました。",
    postDate: "2022-04-11 19:09:34",
    tags: tags,
};
const article2: Article = {
    id: 29,
    title: "【公開】SLスタジオ 正式版リリース！！",
    content: "この度、ついにSLスタジオ正式版をリリースする運びとなりました。",
    postDate: "2022-03-26 09:14:58",
    tags: null
}
