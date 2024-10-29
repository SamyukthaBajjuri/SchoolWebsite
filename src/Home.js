import React from 'react'
import { useState,useEffect } from 'react'

const Home = () => {
  let a=["http://www.wisdomgroupofinstitutions.com/img/slides/c13.jpg","http://www.wisdomgroupofinstitutions.com/img/slides/c5.jpg",
    "http://www.wisdomgroupofinstitutions.com/img/slides/c6.jpg",
    "http://www.wisdomgroupofinstitutions.com/img/slides/c7.jpg",
    "http://www.wisdomgroupofinstitutions.com/img/slides/c8.jpg",
    "http://www.wisdomgroupofinstitutions.com/img/slides/c9.jpg",
  "http://www.wisdomgroupofinstitutions.com/img/slides/c10.jpg",
  "http://www.wisdomgroupofinstitutions.com/img/slides/c11.jpg",
"http://www.wisdomgroupofinstitutions.com/img/slides/c12.jpg",
"http://www.wisdomgroupofinstitutions.com/img/slides/c14.jpg"]
    let [i,setI]=useState(0)
    let inc=()=>{
      setI((i)=>(i+1)%a.length)
    }
    let dec=()=>{
      setI((i)=>{
        if(i==0){
          return a.length-1
        }
        else{
          return i-1
        }
      })
    }
    let upd=(ind)=>{
      setI(()=>ind)
    }
    useEffect((c)=>{
       let iid=setInterval(inc,3000)
       return()=>{
        clearInterval(iid)
       }
    },[])
    return(<div className='con'>
      <div className='cont'>
      <img src={a[i]}/>
      <i className="fa-solid fa-circle-arrow-left lt" onClick={dec}></i>
      <i className="fa-solid fa-circle-arrow-right gt" onClick={inc}></i>
      <div className='dot'>
        {
          a.map((item,ind)=>{
            return(<i class={ind===i?"fa-solid fa-circle":"fa-regular fa-circle"}onClick={()=>upd(ind)}></i>)
          })
        }
      </div>
      </div>
      <div className='footer'>
     <h1> WELCOME TO WISDOM EDUCATIONAL INSTITUTIONS</h1>
    <p>Team Wisdom Focuses on a curriculum that balances academics,co-curricular activities,and personality development with a view to enable each child to become a global <br/>
    citizen.We strive lovingly to sow the seeds of leader ship qualities along with self-discipline,ethical principles, a caring<br/>
     attitude,sincerity,attachment,originality,integrity,hospitality,serenity,clemency,loyalty and perseverance.</p>
     <h2>Then !<br/>
   WHY COMPROMISE ?<br/>
   WHY NOT THE BEST EDUCATIONAL INSTITUTION ?</h2>
   <br/>
   <br/>
   <div className='youtube'>
   <iframe width="560" height="315" src="https://www.youtube.com/embed/q9wm8dI_tvU?si=ktZKzPd_u1Njd69y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
   <iframe width="560" height="315" className='video' src="https://www.youtube.com/embed/mQUPr6gQO4U?si=E8qHc5LFsudTPc9B" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>
    </div>
    </div>)

}
export default Home

