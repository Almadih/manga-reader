import api from "../../API";
import types from "./types";

export const fetchMangas = async(dispatch)=>{
  const res = await api.get('/')
  dispatch({type:types.FETCH_MANGAS,payload:res.data})
}
