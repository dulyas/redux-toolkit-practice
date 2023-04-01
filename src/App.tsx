

import './App.css'
import { useAppDispatch, useAppSelector } from './store/hooks/redux'
import { userSlice } from './store/reducers/UserSlice'
import { useEffect } from 'react'
import { fetchUsers } from './store/reducers/ActionsCreator'
import PostContainer from './components/PostContainer'

function App() {

  // const dispatch = useAppDispatch()
  // const {users, isLoading, error} = useAppSelector(state => state.userReducer)

  // useEffect(() => {
  //   dispatch(fetchUsers())
  // }, [])

  return (
    <div className="App">
      {/* {isLoading && <h1>Идет Загрузка</h1>}
      {error && <h1>{error}</h1>}
      {JSON.stringify(users, null, 2)} */}

      <PostContainer />
    </div>
  )
}

export default App
