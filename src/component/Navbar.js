// ..........(Functional based component).............rfc shortcut to create functional based component
import React from 'react'

export default function Navbar(props) {
	return (
		<nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            <div className="container-fluid">
              <a className="navbar-brand" href="#">Text Convert</a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Link</a>
                  </li>
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Dropdown
                    </a>
                    <ul className="dropdown-menu">
                      <li><a className="dropdown-item" href="#">Prasad Shelke</a></li>
                      <li><a className="dropdown-item" href="#">Dattatray Shelke</a></li>
                      <li><hr className="dropdown-divider" /></li>
                      <li><a className="dropdown-item" href="#">Bhagwat Shelke</a></li>
                    </ul>
                  </li>

                  <li className="nav-item">
                    <a className="nav-link disabled">Disabled</a>
                  </li>
                </ul>
                <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                  <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckChecked" defaultChecked />
                  <label className="form-check-label" htmlFor="flexSwitchCheckChecked">Light Mode</label>
                </div>
                <form className="d-flex" role="search">
                  <input className="form-control me-2 mx-2" type="search" placeholder="Search" aria-label="Search" />
                  <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
              </div>
            </div>
          </nav>
	)
}

// ...................................................................
// Class BASE COMPONENT
// import React from "react";
// class Navbar extends React.Component{
//     render(){
//         return(
//             <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
//             <div className="container-fluid">
//               <a className="navbar-brand" href="#">Prasad Web</a>
//               <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//                 <span className="navbar-toggler-icon" />
//               </button>
//               <div className="collapse navbar-collapse" id="navbarSupportedContent">
//                 <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//                   <li className="nav-item">
//                     <a className="nav-link active" aria-current="page" href="#">Home</a>
//                   </li>
//                   <li className="nav-item">
//                     <a className="nav-link" href="#">Link</a>
//                   </li>
//                   <li className="nav-item dropdown">
//                     <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//                       Dropdown
//                     </a>
//                     <ul className="dropdown-menu">
//                       <li><a className="dropdown-item" href="#">Prasad Shelke</a></li>
//                       <li><a className="dropdown-item" href="#">Dattatray Shelke</a></li>
//                       <li><hr className="dropdown-divider" /></li>
//                       <li><a className="dropdown-item" href="#">Bhagwat Shelke</a></li>
//                     </ul>
//                   </li>
//                   <li className="nav-item">
//                     <a className="nav-link disabled">Disabled</a>
//                   </li>
//                 </ul>
//                 <form className="d-flex" role="search">
//                   <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
//                   <button className="btn btn-outline-success" type="submit">Search</button>
//                 </form>
//               </div>
//             </div>
//           </nav>
//         )
//     }

// }

// export default Navbar;