import React, { Component } from 'react'
import Title from './Title'
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa'

export default class Services extends Component {
    state={
        services:[
            {
    icon:<FaCocktail/>,
    title:'freecocktails',
    info:'"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias molestias eius libero?"'
},
{
    icon:<FaHiking/>,
    title:'endless Hiking',
    info:'"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias molestias eius libero?"'
},
{icon:<FaShuttleVan/>,
    title:'free Shuttle',
    info:'"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias molestias eius libero?"'},
{
    icon:<FaBeer/>,
    title:'Strongest beer',
    info:'"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias molestias eius libero?"'    
},
]
    }
 render(){
     return(
         <div>
             <section className='services'>
                 <Title title='services'/>
                 <div className='services-center'>
                     {this.state.services.map((item,index)=>{
                         return <article key={index} className='service'>
                             <span>{item.icon}</span>
                     <h6>{item.title}</h6>
                     <p>{item.info}</p>
                         </article>
                     })}
                 </div>
             </section>
             
         </div>
     )
 }
}