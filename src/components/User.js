import React from 'react';

export default function User({
  userInfo
}) {
  const { name, picture } = userInfo;
  return (
    <>
      <img className="avatar img-circle" src={picture.large} alt={name.first} />
      <p>{name.first} {name.last}</p>
    </>
  );
}
