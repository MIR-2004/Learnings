import { atom, selector } from 'recoil'

export const networkAtom = atom({
    key: 'networkAtom',
    default: 104,
})

export const jobsAtom = atom({
    key: 'jobsAtom',
    default: 0,
})

export const notificationAtom = atom({
    key: 'notificationAtom',
    default: 90,
})

export const messagingAtom = atom({
    key: 'messagingAtom',
    default: 12,
})

//aasyncronus

export const asyncAtom = atom({
    key: 'asyncAtom',
    default: selector({
        key: 'asyncAtom/Default',
        get: async () => {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts')
            const data = await response.json()
            return data
        },
    })
})