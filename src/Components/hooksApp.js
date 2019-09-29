import React from 'react';

const hooksApp = ({name, setName}) => {
  console.log (name);
  //   const onChangeHandler = e => {
  //     setName (e.target.value);
  //   };
  const keyPressHandler = e => {
    if (e.key === 'Enter') {
      setName (e.target.value);
    }
  };
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        backgroundColor: 'lightblue',
      }}
    >
      <h1>Hooks</h1>
      <input
        type="text"
        // onChange={onChangeHandler}
        onKeyPress={keyPressHandler}
      />
    </div>
  );
};

export default hooksApp;
