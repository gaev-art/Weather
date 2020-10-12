import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import style from './Header.module.css';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import {NavLink} from 'react-router-dom';


export default function Header() {
    return (
        <div className={style.grow}>
            <AppBar color="inherit">
                <Toolbar className={style.container}>
                    <div className={style.grow}/>
                    <List className={style.nav}>
                        <NavLink to='/'>
                            <ListItem button>
                                Weather
                            </ListItem>
                        </NavLink>
                        <NavLink to='/history'>
                            <ListItem button>
                                History
                            </ListItem>
                        </NavLink>
                    </List>
                    <div className={style.grow}/>
                </Toolbar>
            </AppBar>
        </div>
    );
}

