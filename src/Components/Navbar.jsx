import React, { useState } from 'react'
import {
  CButton,
  CCollapse,
  CContainer,
  CDropdown,
  CDropdownDivider,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CForm,
  CFormInput,
  CNavbar,
  CNavbarBrand,
  CNavbarNav,
  CNavbarToggler,
  CNavItem,
  CNavLink,
} from '@coreui/react'
import { NavLink } from 'react-router';

export const NavbarExample = () => {
  const [visible, setVisible] = useState(false)
  return (
    <CNavbar expand="lg" placement="fixed-top" className ="custom-navbar">
      <CContainer fluid>
      <CNavbarBrand as={NavLink} to="/">J</CNavbarBrand>
        <CNavbarToggler onClick={() => setVisible(!visible)} />
        <CCollapse className="navbar-collapse" visible={visible}>
          <CNavbarNav className="me-auto">
            <CNavItem>
          <CNavLink as={NavLink} to="/" end>
            Home
          </CNavLink>
            </CNavItem>
            <CNavItem>
            <CNavLink as={NavLink} to="/about">
              About Me
            </CNavLink>
            </CNavItem>
          </CNavbarNav>
          <CForm className="d-flex">
          </CForm>
        </CCollapse>
      </CContainer>
    </CNavbar>
  )
}
