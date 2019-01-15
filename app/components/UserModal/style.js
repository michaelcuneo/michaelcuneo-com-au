const modal = {
  position: 'fixed',
  fontFamily: 'Arial, Helvetica, sans-serif',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  background: 'rgba(0, 0, 0, 0.4)',
  zIndex: 2,
  transition: 'opacity .1s ease-in',
  pointerEvents: 'auto',
};

const pointer = {
  width: '20px',
  position: 'absolute',
  color: 'gray',
  top: '28px',
  right: '33px',
  margin: '0px 0px 0px 0px',
  padding: '0px 0px 0px 0px',
};

const container = {
  width: '240px',
  position: 'absolute',
  top: '41px',
  right: '30px',
  margin: '0px 0px 0px 0px',
  padding: '0px 0px 0px 0px',
  background: 'white',
  borderRadius: '10px',
  zIndex: 1,
};

export default {
  modal,
  pointer,
  container,
};
