
import React from 'react'
import PropTypes from 'prop-types'

export default function Navbar(props) {
  let headingcolor = {
    color: '	#06b6d4',
    fontWeight: '500',
    fontSize: '22px'
  }

  return (
    <nav className={` navbar-brand mx-1  navbar navbar-expand-lg navbar-${props.mode} bg-body-${props.mode} `}>
      <div className="container-fluid">
        <a className="navbar-brand" style={headingcolor} href="/">{props.title} <iconify-icon icon="pajamas:pencil-square"></iconify-icon> </a>
        <div>
          <button
            className="navbar-toggler"
            type="button" data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent" align="right">
            <div className={`form-check form-switch  text-${props.mode === 'light' ? 'dark' : 'light'} `}>
              <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Dark Mode <iconify-icon icon="line-md:moon-loop"></iconify-icon></label>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}




// never make the (p) uppercase in this ->  Navbar.propTypes ={}
//import PropTypes from 'prop-types' -> to use this 
// when we set any prop diff from the set data_types it show -> error 
// in this case the datatype of prop is -> string
//.isRequired -> give the error in the console  if the thier is no set value of props
Navbar.propTypes = {
  title: PropTypes.string.isRequired
}
/* here we pass default values into it from props */
Navbar.defaultProps = {
  title: "Text-Analyzer",
};

