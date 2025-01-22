import React, { useState } from 'react';
import List from '@material-ui/core/List';
import { useNavigate, NavLink } from 'react-router-dom';
import { Box, ListItemIcon, Typography, ListItem, SvgIcon } from '@mui/material';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Collapse from '@material-ui/core/Collapse';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { NavList } from '../../constants/NavList';
import './sidebar.scss';

function hasChildren(item: any) {
  const { items: children } = item;

  if (children === undefined) {
    return false;
  }

  if (children.constructor !== Array) {
    return false;
  }

  if (children.length === 0) {
    return false;
  }

  return true;
}

const navAttribute = {
  disableGutters: true,
};

interface navProps {
  item: any;
  id?: any;
}

function SingleLevel(props: navProps) {
  const { item } = props;
  console.log ("items", item)
  //  const { permissions } = useSelector((state: any) => state.commonSlice);
  const Navigate = useNavigate();
  // const dispatch: any = useDispatch();
  return (
    <Box className="navi_dp" >
      <ListItem {...navAttribute}>
        <NavLink to={item.href} className="nvBx">
          {item?.icon ? (
            <ListItemIcon>
              <SvgIcon component={item.icon} />
            </ListItemIcon>
          ) : (
            <></>
          )}
          <Typography variant="subtitle2">{item.title}</Typography>
          {item?.add ? (
            <AddCircleOutlineIcon className="add-icon" titleAccess="Add" />
          ) : (
            <></>
          )}
        </NavLink>
      </ListItem>
    </Box>
  );
}

function MultiLevel(props: navProps) {
  const { item } = props;
  const { items: children } = item;


  const [open, setOpen] = useState(
    item.routes
      ? item.routes.includes(
          location.pathname.split('/').filter((x) => x != '')[0]
        )
      : false
  );

  const handleClick = () => {
    setOpen((prev: any) => !prev);
  };

  return (
    <Box className="prt_drop" >
      <ListItem {...navAttribute}  onClick={handleClick}>
        <Box className="nvBx">
          {item?.icon ? (
            <ListItemIcon>
              <img src={item.icon} alt="sierra" />
            </ListItemIcon>
          ) : (
            <></>
          )}

          <Typography variant="subtitle2">{item.title}</Typography>
          <i className="nv_icon">
            {open && true ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </i>
        </Box>
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="ul" className="inside_nv_list" disablePadding>
          {children.map((child: any, key: any) => (
            <MenuItem key={key} item={child} />
          ))}
        </List>
      </Collapse>
    </Box>
  );
}

function MenuItem(props: navProps) {
  const { item } = props;
  const Component = hasChildren(item) ? MultiLevel : SingleLevel;
  return <Component item={item} />;
}

export default function SideBar() {
  return (
    <List className="listContainer" >
      {NavList.map((item, index) => (
        <MenuItem key={index} item={item} />
      ))}
    </List>
  );
}
