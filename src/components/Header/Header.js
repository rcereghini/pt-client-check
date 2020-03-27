import React from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";
import Icon from "@material-ui/core/Icon";
import { auth } from "../../firebase/firebase.utils";

const Header = props => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [value, setValue] = React.useState(4);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const signOutAndClose = props => {
    auth.signOut();
    props.logoutHandler();
    handleClose();
  };

  return (
    <div>
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MenuIcon />
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <Link to="/profile">
          <MenuItem onClick={handleClose}>Profile</MenuItem>
        </Link>
        <Link to="/settings">
          <MenuItem onClick={handleClose}>Settings</MenuItem>
        </Link>
        <Link to="/">
          <MenuItem onClick={() => signOutAndClose(props)}>Logout</MenuItem>
        </Link>
      </Menu>
    </div>
  );
};

export default Header;
