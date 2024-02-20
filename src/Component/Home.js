import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logOut } from '../redux/userSlice';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const dispatch = useDispatch();
  const {user} = useSelector((state)=>state.user);
  const navigate = useNavigate();

 

  return (
    <div>Home</div>
  )
}

export default Home