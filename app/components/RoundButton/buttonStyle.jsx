const buttonStyle = {
  btn: {
    color: '#fff',
    borderRadius: '50px',
    padding: '8px',
    textAlign: 'center',
    textTransform: 'uppercase',
    backgroundColor: '#e91e63',
    boxShadow:
      '0 2px 2px 0 rgba(233, 30, 99, 0.14), 0 3px 1px -2px rgba(233, 30, 99, 0.2), 0 1px 5px 0 rgba(233, 30, 99, 0.12)',
    cursor: 'pointer',
    transition: 'box-shadow 0.2s cubic-bezier(0.4, 0, 1, 1), background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
    willChange: 'box-shadow, transform',
    '&:hover,&:focus': {
      color: '#FFFFFF',
      backgroundColor: '#e91e63',
      boxShadow: '0 14px 26px -12px #e91e63',
    },
  },
};
export default buttonStyle;
