import React from 'react';
import instagramLogo from '../assets/owner/instagram.png'
import twitterLogo from '../assets/owner/twitter.png'
import moreLogo from '../assets/owner/more.png'
import './Main.css'
import { useEffect, useState } from 'react/cjs/react.development';

export default function Main({selectedPunk , punkListData}) {
    const [activePunk , setActivePunk] = useState(punkListData[0]);
    useEffect(()=>{
        setActivePunk(punkListData[selectedPunk]);
    },[punkListData,selectedPunk])

    console.log(selectedPunk)
  return (
  <div className='main'>
      <div className='mainContent'>
        <div className='punkHighlight'>
            <div className='punkContainer'>
                <img className='selectedPunk'
                src={activePunk.image_url}
                />
            </div>
        </div>
        <div className='punkDetails' style={{color:'#fff'}}>
            <div className='title'>
                {activePunk.name}
                <span className='itemNumber'> #{activePunk.token_id}</span>
            </div>
            
            <div className='owner'>
            <div className='ownerImageContainer'>
                <img src={activePunk.owner.profile_img_url}/>
            </div>
            <div className='ownerDetails'>
                <div className='ownerNameAndHandle'>
                <div className='ownerHandle'>{activePunk.owner.address}</div>
                    <div className='ownerHandle'>@hansal kothari</div>
                </div>
                <div className='ownerLink'>
                    <img src={instagramLogo}/>
                </div>
                <div className='ownerLink'>
                    <img src={twitterLogo}/>
                </div>
                <div className='ownerLink'>
                    <img src={moreLogo}/>
                </div>
    
            </div>
        </div>
        </div>
        
      </div>
  </div>
  );
}
