import React from 'react'
import { useParams, Redirect } from 'react-router-dom'
import EditUserPage from '../components/page/editUserPage/EditUserPage'
// import UserPage from '../components/page/userPage/UserPage'
// import UsersListPage from '../components/page/usersListPage/UsersListPage'

const Users = () => {
    const { userId } = useParams()
    if (!userId) {
        return <Redirect from="/users" to="/users/67rdca3eeb7f6fgeed471815" />
    }
    return <EditUserPage />
}
// const Users = () => {
//     const params = useParams()
//     const { userId, edit } = params
//     return (
//         <>
//             {userId ? (
//                 edit ? (
//                     <EditUserPage />
//                 ) : (
//                     <UserPage userId={userId} />
//                 )
//             ) : (
//                 <UsersListPage />
//             )}
//         </>
//     )
// }

export default Users
