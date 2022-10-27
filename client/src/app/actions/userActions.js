export const Types = { 
    SET_USER: 'user/GLOBAL_USER',
    GETOUT_USER: 'user/GETOUT_USER'
}

export const Creators = {
    insertion: (user) => ({
        type:  Types.INSERTION,
        user
    }),
    editBook: (user) => ({
        type: Types.UPDATE_USER,
        user
    }),
    viewAllUser: () => ({
        type: Types.VIEW_ALL,
    }),
    setUser: (user) => ({
        type: Types.SET_USER,
        user
    }),
    getoutUser: () => ({
        type: Types.GETOUT_USER
    })
}

export default Creators;