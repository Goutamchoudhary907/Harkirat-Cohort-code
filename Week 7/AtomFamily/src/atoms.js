import { atomFamily } from "recoil";
import { TODOS } from "./todos";

// Atom family is used when you need more than one atom
// Atom family allow us to create dynamic atoms based on parameters passed
export const todoAtomFamily= atomFamily({
    key:'todosAtomFamily' ,
    default: id => {
        return TODOS.find( x => x.id===id)
    }
})