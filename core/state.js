export const state=Object.seal({filter:"all",env:"all",query:"",sort:"relevance",lastFocus:null,uiMode:"catalog",interactionCount:0});
export function patchState(patch={}){Object.assign(state,patch);state.interactionCount++;}
