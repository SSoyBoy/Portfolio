import React from 'react'
import ProjectItem from './ProjectItem'
import Img from '../assets/img/1012111.jpg'
import dashboard_img from '../assets/img/admin-dashboard.jpg'
import food_img from '../assets/img/food-app.jpg'
import ecommercery_img from '../assets/img/next-app.jpg'
import todo_img from '../assets/img/todo-app-redux.jpg'

const Projects = () => {
  return (
    <div id='projects' className='max-w-[1040px] m-auto md:pl-20 p-4 py-10'>
      <h1 className='text-4xl font-bold text-center text-[#001b5e] mb-10'>Projects</h1>
      <div className='grid sm:grid-cols-2 gap-12'>
        <ProjectItem img={ecommercery_img} titles='Ecommercery-app' url={'https://next-app-ecommerce.netlify.app/'}/>
        <ProjectItem img={food_img} titles='Food-app' url={'https://food-app-ssoy.netlify.app/'}/>
        <ProjectItem img={dashboard_img} titles='Admin-dashboard-app' url={'https://admin-dashboard-11016.firebaseapp.com/'}/>
        <ProjectItem img={todo_img} titles='Crypto App' url={'https://ssoy-6ecf7.firebaseapp.com/'}/>
      </div>
    </div>
  )
}

export default Projects
