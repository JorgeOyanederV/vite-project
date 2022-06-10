import { types } from "../types/types"

interface New {
   author: String,
   story_title: String,
   story_url: String,
   created_at: String,
   objectID: number
}
interface NewFave extends New {
   isFave: boolean
}

export const getAllNews = (source: String) => {
   return async (dispatch, getState) => {
      // accion asincrona con para pedir las noticas
      const URL = `https://hn.algolia.com/api/v1/search_by_date?query=${source}&page=0`
      const { hits: news } = await fetch(URL)
         .then(res => res.json());
      const filteredNews = await news.filter(({ author, story_title, story_url, created_at }) =>
         (author !== null && story_title !== null && story_url !== null && created_at !== null));
      const newsFormated = await filteredNews.map((item: New) => ({ ...item, isFave: isFaves(item.objectID, getState) }));
      dispatch(setAllNews(newsFormated))
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

export const removeNewFave = (objectID: number) => {
   return async (dispatch, getState) => {
      const filtered = await getState().news.faves.filter(
         (fave: NewFave) => fave.objectID !== objectID
      )
      dispatch(removeFave(filtered));
   }
}

const addFave = (_new: NewFave) => {
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

const isFaves = (objectID: number, getState) => {
   const { faves } = getState().news;
   let isFave = false;
   faves.forEach((fave: New) => {
      if (fave.objectID === objectID) {
         isFave = true;
         return;
      }
   })
   return isFave;
}
