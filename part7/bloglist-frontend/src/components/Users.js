import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { listUsers } from '../reducers/userReducer'

const Users = () => {
  const dispatch = useDispatch()
  const users = useSelector(state => state.users)

  useEffect(() => {
    dispatch(listUsers())
  }, [dispatch])

  return (
    <div>
      <h2>Users</h2>
      <table>
        <thead>
          <tr>
            <th/>
            <th>blog created</th>
          </tr>
        </thead>
        <tbody>
          {users
            .map(user => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.blogs.length}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}

export default Users
