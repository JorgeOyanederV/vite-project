import { types } from "../types/types"

interface New {
   author: String,
   story_title: String,
   story_url: String,
   created_at: String
}

export const getAllNews = (source: String) => {

   return async (dispatch) => {
      // accion asincrona con para pedir las noticas
      const URL = `https://hn.algolia.com/api/v1/search_by_date?query=${source}&page=0`
      const { hits } = await fetch(URL)
         .then(response => response.json());
      const filteredNews = await hits.filter(({ author, story_title, story_url, created_at }) =>
         (author !== null && story_title !== null && story_url !== null && created_at !== null));

      dispatch(setAllNews(filteredNews))
   }
}

export const setActiveNews = (active: String) => {
   return {
      type: types.setActiveNews,
      payload: active
   }
}
export const setSourceNews = (source: String) => {
   return {
      type: types.setSourceNews,
      payload: source
   }
}

const setAllNews = (news: New[]) => {
   //setea las noticias
   return {
      type: types.setNews,
      payload: news
   }
}

