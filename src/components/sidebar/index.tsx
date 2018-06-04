/*
 * @Author: SiYuan Wang 
 * @Date: 2018-06-04 10:57:14 
 * @Last Modified by: SiYuan Wang
 * @Last Modified time: 2018-06-04 11:02:35
 */
import * as React from 'react';
import * as cx from 'classnames';
import { Link } from 'react-router-dom';
import { withStyles, Drawer, Hidden, List, ListItem, ListItemIcon, ListItemText } from 'material-ui';

import { Icon } from '../index';
import sidebarStyle from './assets/style/style.sidebar';

interface sideBarProps {
    color: string,
    logo: any,
    image: any,
    logoText: string,
    routes: any[],
    classes?: any,
    open?: boolean,
    handleDrawerToggle?: React.ReactEventHandler<{}>
}

const Sidebar = ({ ...props }: sideBarProps) => {
  // verifies if routeName is the one active (in browser input)
    const activeRoute = (routeName: string) => window.location.pathname.indexOf(routeName) > -1;
    const { classes, color, logo, image, logoText, routes = [] } = props;
    const links = (
        <List className={classes.list}>
            {routes.map((route, key) => {
                if (route.redirect) return null;
                const listItemClasses = cx({ [` ${classes[color]}`]: activeRoute(route.path) });
                const whiteFontClasses = cx({ [` ${classes.whiteFont}`]: activeRoute(route.path) });
                return (
                <Link to={route.path} className={classes.item} key={key}>
                    <ListItem button className={classes.itemLink + listItemClasses}>
                        <ListItemIcon className={classes.itemIcon + whiteFontClasses}>
                            <Icon className={{}} unicode={'\ue62c'} />
                        </ListItemIcon>
                        <ListItemText
                            primary={route.sidebarName}
                            className={classes.itemText + whiteFontClasses}
                            disableTypography
                        />
                    </ListItem>
                </Link>
                );
            })}
        </List>
    );
    const brand = (
        <div className={classes.logo}>
            <a href="https://www.creative-tim.com" className={classes.logoLink}>
                <div className={classes.logoImage}>
                    <img src={logo} alt="logo" className={classes.img} />
                </div>
                {logoText}
            </a>
        </div>
    );
    return (
        <React.Fragment>
            <Hidden mdUp>
                <Drawer
                    variant="temporary"
                    anchor="right"
                    open={props.open}
                    classes={{
                        paper: classes.drawerPaper
                    }}
                    onClose={props.handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true // Better open performance on mobile.
                    }}
                >
                {brand}
                <div className={classes.sidebarWrapper}>
                    {/* <HeaderLinks /> */}
                    {links}
                </div>
                {image !== undefined ? (
                    <div
                        className={classes.background}
                        style={{ backgroundImage: `url(${image})` }}
                    />
                ) : null}
                </Drawer>
            </Hidden>
            <Hidden smDown>
                <Drawer
                    anchor="left"
                    variant="permanent"
                    open
                    classes={{
                        paper: classes.drawerPaper
                    }}
                >
                {brand}
                <div className={classes.sidebarWrapper}>{links}</div>
                {image !== undefined ? (
                    <div
                        className={classes.background}
                        style={{ backgroundImage: `url(${image})` }}
                    />
                ) : null}
                </Drawer>
            </Hidden>
        </React.Fragment>
    );
};

export default withStyles(sidebarStyle)(Sidebar);
