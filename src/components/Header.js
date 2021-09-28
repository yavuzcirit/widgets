import React from 'react'
import Link from './Link'
 

const Header=()=>{
	 const mystyle = {
      color: "#55555",
      backgroundColor: "gray",
      
      fontFamily: "Arial"
    }

	return (
		<div style={mystyle} className='ui pointing menu'>
			<Link href='/' className='item'>
				 <i className="home icon"></i> Accordion
			</Link>

			<Link href='/list' className='item'>
				<i className="grid layout icon"></i> Search
			</Link>

			<Link href='/dropdown' className='item'>
				<i className="file icon"></i> Dropdown
			</Link>

			<Link href='/translate' className='item'>
				<i className="briefcase icon"></i> Translate
			</Link>


		</div>
		);
};

export default Header;