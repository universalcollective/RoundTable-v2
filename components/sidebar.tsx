import React, { useState } from 'react';
import RocketLaunchOutlinedIcon from '@mui/icons-material/RocketLaunchOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import EventNoteIcon from '@mui/icons-material/EventNote';
import AnnouncementOutlinedIcon from '@mui/icons-material/AnnouncementOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';


const Tooltip: React.FC<{ text: string }> = ({ text, children }) => {
  return (
    <div className="relative group">
      <div
        className="absolute opacity-0 group-hover:opacity-100 text-xs bg-gray-300 text-black p-2 rounded-full whitespace-nowrap z-10 -bottom-1 transition-all duration-300 ease-in-out shadow-md"
        style={{ transform: 'translateY(50%) translateX(-1.5rem)', willChange: 'transform, opacity' }}
      >
        {text}
      </div>
      <div className="opacity-100 group-hover:opacity-0 transition-opacity duration-300 ease-in-out">{children}</div>
    </div>
  );
};


const FloatingIcons: React.FC = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className={`fixed bottom-4 right-4 p-4 ${isCollapsed ? 'w-16' : 'w-20'}`}>
      <div className={`flex flex-col items-center justify-center space-y-4`}>
        {isCollapsed ? (
          <Tooltip text="Open Menu">
            <button className="floating-animation floating-button-hover rounded-full px-2 py-2 text-black bg-white mb-2 focus:outline-none" onClick={toggleCollapse}>
              <MenuIcon fontSize="medium" />
            </button>
          </Tooltip>
        ) : (
          <Tooltip text="Close Menu">
            <button className="floating-animation floating-button-hover rounded-full px-2 py-2 text-custom bg-white mb-2 focus:outline-none" onClick={toggleCollapse}>
              <CloseIcon fontSize="large" />
            </button>
          </Tooltip>
        )}
        {!isCollapsed && (
          <>
            <Tooltip text="Info">
              <button className="floating-animation floating-button-hover rounded-full px-2 py-2 text-black bg-white mb-2 focus:outline-none">
                <InfoOutlinedIcon fontSize="medium" />
              </button>
            </Tooltip>
            <Tooltip text="Events">
              <button className="floating-animation floating-button-hover rounded-full px-2 py-2 text-black bg-white mb-2 focus:outline-none">
                <EventNoteIcon fontSize="medium" />
              </button>
            </Tooltip>
            <Tooltip text="Launch">
              <button className="floating-animation floating-button-hover rounded-full px-3 py-3 text-black bg-white mb-2 focus:outline-none">
                <RocketLaunchOutlinedIcon fontSize="medium" />
              </button>
            </Tooltip>
            <Tooltip text="Announcements">
              <button className="floating-animation floating-button-hover rounded-full px-2 py-2 text-black bg-white mt-2 focus:outline-none">
                <AnnouncementOutlinedIcon fontSize="medium" />
              </button>
            </Tooltip>
            <Tooltip text="Groups">
              <button className="floating-animation floating-button-hover rounded-full px-2 py-2 text-black bg-white mt-2 focus:outline-none">
                <GroupsOutlinedIcon fontSize="medium" />
              </button>
            </Tooltip>
            <Tooltip text="Share">
              <button className="floating-animation floating-button-hover rounded-full px-2 py-2 text-black bg-white mt-2 focus:outline-none">
              <ShareOutlinedIcon fontSize="medium" />
              </button>
              </Tooltip>
            </>
          )}
        </div>
      </div>
    );
  };
  
  export default FloatingIcons;
  
  
  
  
  
