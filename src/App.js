import React,{useState} from 'react'
import Accordion from './components/Accordion'
import Search from './components/Search'
import Dropdown from './components/Dropdown'
import Translate from './components/Translate'
import Route from './components/Route'
import Header from './components/Header'
import Link from './components/Link'





const items=[
	{
		title:'What is react?',
		content:'React is a front-end JavaScript framework'
	},
	{
		title:'Why use react?',
		content:'React is a favourite JS library among developers'
	},
	{
		title:'How do you use React?',
		content:'You use React by creating new components'
	}

]

	const options=[
{
	label:'The Color Red',
	value:'red'
},
{
	label:'The Color Green',
	value:'green'
},
{
	label:'A shade of blue',
	value:'blue'
}
];



//You should not write in that way it is too long and not reusable,instead create a Route component


// const showAccordion=()=>{
// 	if (window.location.pathname==='/') {
// 		return <Accordion items={items}/>
// 	}
// }

// const showList=()=>{
// 	if (window.location.pathname==='/list') {
// 		return <Search/>
// 	}
// }


// const showDropdown=()=>{
// 	if (window.location.pathname==='/dropdown') {
// 		return <Dropdown />
// 	}
// }



// const showTranslate=()=>{
// 	if (window.location.pathname==='/translate') {
// 		return <Translate/>
// 	}
// }





export default ()=>{
	const [selected,setSelected]=useState(options[0])
	return (<div className='ui container'>

		<Header/>

		<Route path='/'>
			<Accordion items={items}/>
		</Route>

		<Route path='/translate'>
			<Translate/>
		</Route>

		<Route path='/list'>
			<Search/>
		</Route>

		<Route path='/dropdown'>
			<Dropdown label='Select a color' options={options} selected={selected} onSelectedChange={setSelected}/>
		</Route>

		</div>
	)}