import React from 'react';

const NewsCard = ({ image, title, paragraph, created_at }) => {
    // Inline style objects
 
  
    return (
        <div class="bg-white bg-opacity-5 rounded-xl p-3">
        
        <div class="flex justify-between items-center gap-6">
         
          <div class="p-3  rounded-md" style={{ width: '150px'}}>
            <img style={{ width: '130px', height: '70px' }}    src={image}
        alt={title} />
          </div>
      
          
       
        </div>
      
      
        <div class="pt-3">
          <p class="font-semibold text-sm text-white mb-1" style={{
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
            textOverflow: 'ellipsis'
          }}>
          {title}
          </p>
          <p class="text-n70 text-xs"   style={{
            display: '-webkit-box',
            WebkitLineClamp: 3,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
            textOverflow: 'ellipsis'
          }}>
          {paragraph}
          </p>
        </div>
        <div class="flex justify-start items-center text-g300 text-xs">
            <i class="ph ph-calendar"></i>
            <span class="ml-1">{new Date(created_at).toLocaleString()}</span>
          </div>
      </div>
      
    );
  }
  
  export default NewsCard;