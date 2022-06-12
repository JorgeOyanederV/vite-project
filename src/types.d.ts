export interface New {
   author: String,
   story_title: String,
   story_url: String,
   created_at: String,
   objectID: number
}
export interface NewFave extends New {
   isFave: boolean
}