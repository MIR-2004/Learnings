import { atomFamily } from "recoil";



export const todoAtom = atomFamily({
    default: id => {
        return TODO.find(x => x.id === id) 
    }
})