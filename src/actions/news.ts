import { types } from "../types/types"

interface New {
   author: String,
   story_title: String,
   story_url: String,
   created_at: String
}

interface NewFave extends New {
   fave: boolean
}

export const getAllNews = (source: String) => {
   return async (dispatch, getState) => {
      // accion asincrona con para pedir las noticas
      const URL = `https://hn.algolia.com/api/v1/search_by_date?query=${source}&page=0`
      const { hits } = await fetch(URL)
         .then(response => response.json());
      const filteredNews = await hits.filter(({ author, story_title, story_url, created_at }) =>
         (author !== null && story_title !== null && story_url !== null && created_at !== null));
      const news = filteredNews.map((item: New) => ({ ...item, isFave: isFaves(item.story_url, getState) }));
      dispatch(setAllNews(news))
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

export const addNewFave = (_new: New) => {
   return (dispatch, getState) => {
      if (!isFaves(_new.story_url, getState)) {
         dispatch(addFave(_new));
      }
   }
}
export const removeNewFave = (_new: NewFave) => {
   return (dispatch, getState) => {
      const filtered = getState().news.faves.filter(
         (fave: NewFave) => fave.story_url !== _new.story_url
      )
      console.log(filtered);
      dispatch(removeFave(filtered));
   }
}

const addFave = (_new: New) => {
   const newFave = {
      ..._new,
      isFave: true
   }
   return {
      type: types.addNewFave,
      payload: newFave
   }
}

const removeFave = (faves: NewFave[]) => {
   return {
      type: types.removeNewFave,
      payload: faves
   }
}

const setAllNews = (news: New[]) => {
   //setea las noticias
   return {
      type: types.setNews,
      payload: news
   }
}

const isFaves = (story_url: String, getState) => {
   const { faves } = getState().news;
   let isFave = false;
   faves.forEach((fave: New) => {
      if (fave.story_url === story_url) {
         isFave = true;
         return;
      }
   })
   return isFave;
}
