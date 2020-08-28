import React from 'react';
import './Sidebar.css';
import { Avatar,IconButton } from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert"
import ChatIcon from "@material-ui/icons/Chat";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar__header">
            <IconButton>
            <Avatar /></IconButton>
                
                <div className="sidebar__headerRight">
                    <IconButton>
                    <DonutLargeIcon/>
                    </IconButton>
                    <IconButton>
                    <ChatIcon/>
                    </IconButton>
                    <IconButton>
                    <MoreVertIcon/>
                    </IconButton>

                </div>
            </div>
            <div className="sidebar_search">
            </div>
            <div className="sidebar_chats">
            </div>
        </div>

    )
}

export default Sidebar;

