
//
import React, { useState } from 'react';
import RocketLaunchOutlinedIcon from '@mui/icons-material/RocketLaunchOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import EventNoteIcon from '@mui/icons-material/EventNote';
import AnnouncementOutlinedIcon from '@mui/icons-material/AnnouncementOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const FloatingIcons: React.FC = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className={`fixed bottom-4 right-4 p-4  ${isCollapsed ? 'w-16' : 'w-20'}`}>
      <div className={`flex flex-col items-center justify-center space-y-4`}>
        {isCollapsed ? (
          <button className="rounded-full px-2 py-2 text-black bg-white mb-2 focus:outline-none" onClick={toggleCollapse}>
            <MenuIcon fontSize="medium" />
          </button>
        ) : (
          <button className="rounded-full px-2 py-2  text-custom bg-white mb-2 focus:outline-none" onClick={toggleCollapse}>
            <CloseIcon fontSize="large"/>
          </button>
        )}
        {!isCollapsed && (
          <>
            <button className="rounded-full px-2 py-2 text-black bg-white mb-2 focus:outline-none">
              <InfoOutlinedIcon fontSize="medium" />
            </button>
            <button className="rounded-full px-2 py-2 text-black bg-white mb-2 focus:outline-none">
              <EventNoteIcon fontSize="medium" />
            </button>
            <button className="rounded-full px-3 py-3 text-black bg-white mb-2 focus:outline-none">
              <RocketLaunchOutlinedIcon fontSize="medium" />
            </button>
            <button className="rounded-full px-2 py-2 text-black bg-white mt-2 focus:outline-none">
              <AnnouncementOutlinedIcon fontSize="medium" />
            </button>
            <button className="rounded-full px-2 py-2 text-black bg-white mt-2 focus:outline-none">
              <GroupsOutlinedIcon fontSize="medium" />
            </button>
            <button className="rounded-full px-2 py-2 text-black bg-white mt-2 focus:outline-none">
              <ShareOutlinedIcon fontSize="medium" />
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default FloatingIcons;