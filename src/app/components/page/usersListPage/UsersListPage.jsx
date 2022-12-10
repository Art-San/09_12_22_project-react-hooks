import React, { useState, useEffect, useRef } from 'react'
import Pagination from '../../common/Pagination'
import api from '../../../api'
import { paginate } from '../../../utils/paginate'
import GroupList from '../../common/GroupList'
import SearchStatus from '../../../components/ui/SearchStatus'
import UsersTable from '../../ui/UsersTable'
import _ from 'lodash'
import PropTypes from 'prop-types'

const UsersListPage = () => {
    const inputRef = useRef()
    const [currentPage, setCurrentPage] = useState(1)
    const [profession, setProfession] = useState()
    const [searchQuery, setSearchQuery] = useState('')
    const [selectedProf, setSelectedProf] = useState()
    const [sortBy, setSortBy] = useState({ path: 'name', order: 'asc' })
    const pageSize = 8

    const [users, setUsers] = useState()
    useEffect(() => {
        api.users.fetchAll().then((data) => setUsers(data))
    }, [])
    const handleDelete = (userId) => {
        setUsers(users.filter((user) => user._id !== userId))
    }
    const handleToggleBookMark = (id) => {
        setUsers(
            users.map((user) => {
                if (user._id === id) {
                    return { ...user, bookmark: !user.bookmark }
                }
                return user
            })
        )
        console.log(id)
    }

    useEffect(() => {
        api.professions.fetchAll().then((data) => setProfession(data))
    }, [])

    useEffect(() => {
        setCurrentPage(1)
    }, [selectedProf, searchQuery])

    const handleProfessionSelect = (item) => {
        if (searchQuery !== '') setSearchQuery('')
        setSelectedProf(item)
    }
    const handleSearchQuery = ({ target }) => {
        console.log('target', target)
        setSelectedProf(undefined)
        setSearchQuery(target.value)
    }

    const handlePageChange = (pageIndex) => {
        setCurrentPage(pageIndex)
    }

    const handleSort = (item) => {
        setSortBy(item)
    }

    if (users) {
        const filteredUsers = searchQuery
            ? users.filter(
                (user) =>
                    user.name
                        .toLowerCase()
                        .indexOf(searchQuery.toLowerCase()) !== -1
            )
            : selectedProf
                ? users.filter(
                    (user) =>
                        JSON.stringify(user.profession) ===
                        JSON.stringify(selectedProf)
                )
                : users

        // if (users) {
        //     const filteredUsers = selectedProf
        //         ? users.filter(
        //             (user) =>
        //                 JSON.stringify(user.profession) ===
        //                   JSON.stringify(selectedProf)
        //         )
        //         : users

        const count = filteredUsers.length
        const sortedUsers = _.orderBy(
            filteredUsers,
            [sortBy.path],
            [sortBy.order]
        )
        const userCrop = paginate(sortedUsers, currentPage, pageSize)
        const clearFilter = () => {
            setSelectedProf()
        }

        return (
            <>
                <div className="d-flex">
                    {profession && (
                        <div className="d-flex flex-column flex-shrink-0 p-3">
                            <GroupList
                                selectedItem={selectedProf}
                                items={profession}
                                onItemSelect={handleProfessionSelect}
                            />
                            <button
                                className="btn btn-secondary mt-2"
                                onClick={clearFilter}
                            >
                                Очистить
                            </button>
                        </div>
                    )}
                    <div className="d-flex flex-column">
                        <SearchStatus length={count} />
                        <input
                            ref={inputRef}
                            type="text"
                            name="searchQuery"
                            placeholder="Search.."
                            onChange={handleSearchQuery}
                            className="form-control"
                            value={searchQuery}
                        />
                        {count > 0 && (
                            <UsersTable
                                users={userCrop}
                                onSort={handleSort}
                                selectedSort={sortBy}
                                onDelete={handleDelete}
                                onToggleBookMark={handleToggleBookMark}
                            />
                        )}
                        <div className="d-flex justify-content-center">
                            <Pagination
                                itemsCount={count}
                                pageSize={pageSize}
                                currentPage={currentPage}
                                onPageChange={handlePageChange}
                            />
                        </div>
                    </div>
                </div>
            </>
        )
    }
    return 'loading...'
}
UsersListPage.propTypes = {
    users: PropTypes.array
}
export default UsersListPage
