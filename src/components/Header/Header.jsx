import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, RadioGroup, Radio} from "@nextui-org/react";
import React from 'react'
import './Header.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <Navbar isBlurred="true" position="sticky">
      <NavbarBrand>
        <p className="font-bold text-inherit logo">TRUTH</p>
      </NavbarBrand>
      <NavbarContent justify="end">
        <NavbarItem>
        <Dropdown className="dark">
            <DropdownTrigger>
                <Button variant="shadow" color="success">
                    Languages <FontAwesomeIcon icon={faChevronDown}/>
                </Button>
            </DropdownTrigger>
            <DropdownMenu aria-label="Static Actions" variant='shadow' color="success" className="menu">
                <DropdownItem key="ar" onClick={()=> window.localStorage.setItem('lang', 'ar')} style={{textAlign:'end'}}>العربية</DropdownItem>
                <DropdownItem key="en" onClick={()=> window.localStorage.setItem('lang', 'en')}>English</DropdownItem>
            </DropdownMenu>
        </Dropdown>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  )
}

export default Header