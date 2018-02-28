import React from 'react';
import { Link } from 'react-router-dom'
import Reveal from 'react-reveal'
import 'animate.css/animate.css'



const generateBlocks = (blocks) => {
  if(blocks){
    return blocks.map((block) => {
      return (
        <Reveal key={block.id} effect='animated fadeInUp'>
          <div className={`block ${block.type}`}> 
            <div className='veil'></div>
            <div className='img'
                style={{ background: `url(/images/blocks/${block.image}) no-repeat` }}
            ></div>
            <div className='title'>
              <Link to={block.link}>{block.title}</Link>
            </div>
          </div>
        </Reveal>
      )
    })
  }
} 

const Blocks = (props) => (
  <div className='blocks'>
    {generateBlocks(props.blocks)}
  </div>
);

export default Blocks;