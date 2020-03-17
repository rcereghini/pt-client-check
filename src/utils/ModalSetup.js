const ModalSetup = {
  rand: () => {
    return Math.round(Math.random() * 20) - 10;
  },

  getModalStyle: () => {
    const rand = () => {
      return Math.round(Math.random() * 20) - 10;
    };
    // const top = 50 + rand();
    // const left = 50 + rand();

    return {
      // top: `${top}%`,
      // left: `${left}%`,
      // transform: `translate(-${top}%, -${left}%)`,
      minWidth: "500px"
    };
  }
};

export default ModalSetup;
