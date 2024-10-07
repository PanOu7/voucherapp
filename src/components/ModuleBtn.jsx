import React from 'react';
import { Link } from 'react-router-dom';

//Dashboard page
const ModuleBtn = ({name,icon,url}) => {
  return (
    <Link
      to={url}
      className="flex flex-col items-center h-full bg-emerald-500 text-white p-5 rounded-lg gap-3 "
    >
      {icon}
      {name}
    </Link>
  );
}

export default ModuleBtn;
