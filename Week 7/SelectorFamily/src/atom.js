import { atom, atomFamily, selectorFamily } from "recoil";
import axios from "axios";

// Selector family is used to fetch data from backend same as selector but it is used for dynamic atoms based on parameters
// not working as link is expired
export const todosAtomFamily = atomFamily({
  key: 'todosAtomFamily',
  default: selectorFamily({
    key: "todoSelectorFamily",
    get: (id) => async ({get}) => {
      const res = await axios.get(`https://sum-server.100xdevs.com/todo?id=${id}`);
      return res.data.todo;
    },
  })
});

// simple syntax 
export const todosAtomFamily2= atomFamily({
    key: 'todosAtomFamily',
    default :selectorFamily({
        key: "todoSelectorFamily",
        get:function(id) {
            return async function ({get}){
                const res=await axios.get(`https://sum-server.100xdevs.com/todo?id=${id}`);
                return res.data.todo;
            }
        }
    })
})