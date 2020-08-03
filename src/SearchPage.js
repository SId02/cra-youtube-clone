import React from 'react';
import './SearchPage.css';
import ChannelRow from './ChannelRow';
import VideoRow from './VideoRow';
import TuneIcon from "@material-ui/icons/Tune";
function SearchPage() {
    return (
        <div className="searchPage">
            <div className="searchPage__filter">
                <TuneIcon />
                <h2>FILTER</h2>
            </div>
            <hr />
            <ChannelRow
            image=""
                channel="clever Programmer"
                verified
                subscribers="659K"
                noofvideos={382}
                descriptions="Loremflkjkds"
            />
            <hr />
            
            <VideoRow/>
        </div>
    )
}

export default SearchPage;
