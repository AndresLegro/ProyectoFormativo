import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as ImIcons from 'react-icons/im';
import * as HiIcons from 'react-icons/hi';
import '../../App.scss';

const Sidebar = () => {
  const [showOptions1, setShowOptions1] = useState(false);
  const [showOptions2, setShowOptions2] = useState(false);
  const [showOptions3, setShowOptions3] = useState(false);
  const [showOptions4, setShowOptions4] = useState(false);
  const [showOptions5, setShowOptions5] = useState(false);


  const toggleOptions = (option) => {
    if (option === 'option1') {
      setShowOptions1(!showOptions1);
      setShowOptions2(false);
      setShowOptions3(false);
      setShowOptions4(false);
      setShowOptions5(false);
    } else if (option === 'option2') {
      setShowOptions1(false);
      setShowOptions2(!showOptions2);
      setShowOptions3(false);
      setShowOptions4(false);
      setShowOptions5(false);

    } else if (option === 'option3') {
      setShowOptions1(false);
      setShowOptions2(false);
      setShowOptions3(!showOptions3);
      setShowOptions4(false);
      setShowOptions5(false);

    } else if (option === 'option4') {
      setShowOptions1(false);
      setShowOptions2(false);
      setShowOptions3(false);
      setShowOptions4(!showOptions4);
      setShowOptions5(false);

    }
    else if (option === 'option5') {
    setShowOptions1(false);
    setShowOptions2(false);
    setShowOptions3(false);
    setShowOptions4(false);
    setShowOptions5(!showOptions5);
    }
  };

  return (
    <div className="sidebar bg-light">
      <ul>
        <li style={{ marginTop: "70px" }}>
          <div
            onClick={() => toggleOptions('option1')} 
            NavLink to="/" exact className="text-dark rounded py-3 w-100 d-inline-block px-3" activeClassName="active"
          >
            <FaIcons.FaHome /> Inicio <HiIcons.HiChevronRight id="chevronRight" />
          </div>
          {showOptions1 && (
            <ul className="submenu">
              <li>
                <NavLink to="/" exact activeClassName="active">
                  Subopción 1
                </NavLink>
              </li>
              <li>
                <NavLink to="/opcion2" exact activeClassName="active">
                  Subopción 2
                </NavLink>
              </li>
            </ul>
          )}
        </li>
        <li style={{ marginTop: "70px" }}>
          <div
            NavLink to="/budget"
            onClick={() => toggleOptions('option2')}
            className="text-dark rounded py-3 w-100 d-inline-block px-3"
          >
            <FaIcons.FaFileInvoiceDollar /> Presupuesto  <HiIcons.HiChevronRight id="chevronRight" />
          </div>
          {showOptions2 && (
            <ul className="submenu">
              <li>
                <NavLink to="/opcion3" id="facto" exact activeClassName="active">
                  Subopción 3
                </NavLink>
              </li>
              <li>
                <NavLink to="/opcion4" exact activeClassName="active">
                  Subopción 4
                </NavLink>
              </li>
            </ul>
          )}
        </li>
        <li style={{ marginTop: "70px" }}>
          <div
            onClick={() => toggleOptions('option3')}
            className="text-dark rounded py-3 w-100 d-inline-block px-3"
          >
            <ImIcons.ImTarget /> Metas  <HiIcons.HiChevronRight id="chevronRight" />
          </div>
          {showOptions3 && (
            <ul className="submenu">
              <li>
                <NavLink to="/opcion5" exact activeClassName="active">
                  Subopción 5
                </NavLink>
              </li>
              <li>
                <NavLink to="/opcion6" exact activeClassName="active">
                  Subopción 6
                </NavLink>
              </li>
            </ul>
          )}
        </li>
        <li style={{ marginTop: "70px" }}>
          <div
            onClick={() => toggleOptions('option4')}
            className="text-dark rounded py-3 w-100 d-inline-block px-3"
          >
            <FaIcons.FaProjectDiagram /> Programas  <HiIcons.HiChevronRight id="chevronRight" />
          </div>
          {showOptions4 && (
            <ul className="submenu">
              <li>
                <NavLink to="/opcion7" exact activeClassName="active">
                  Subopción 7
                </NavLink>
              </li>
              <li>
                <NavLink to="/opcion8" exact activeClassName="active">
                  Subopción 8
                </NavLink>
              </li>
            </ul>
          )}
        </li>
        <li style={{ marginTop: "70px" }}>
          <div
            onClick={() => toggleOptions('option5')}
            className="text-dark rounded py-3 w-100 d-inline-block px-3"
          >
            <FaIcons.FaUserTie /> Instructores  <HiIcons.HiChevronRight id="chevronRight" />
          </div>
          {showOptions5 && (
            <ul className="submenu" id="submenu">
              <li>
                <NavLink to="/CrudAppFullTimeInstructor" exact activeClassName="active" style={{ color: 'black' }}>
                  Planta
                </NavLink>
              </li>
              <li>
                <NavLink to="/CrudApp" exact activeClassName="active" style={{ color: 'black' }}>
                  Contrato
                </NavLink>
              </li>
            </ul>
          )}
        </li>
        {/* Agrega más elementos de la lista y opciones adicionales según sea necesario */}
      </ul>
    </div>
  );
};

export default Sidebar;

