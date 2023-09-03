// import React from 'react';

// import Navbar from './Navbar';
// function MyCources(){
//     return(
        
//         <>
//         <Navbar/>
//         <div className='mycources'>
//             {/* <img src='https://png.pngtree.com/thumb_back/fh260/png-vector/20200530/ourmid/pngtree-indoor-office-png-image_2215291.jpg'/> */}
        
//         </div>
       
       
//        </>

//     )
// }

// export default MyCources




// import axios from 'axios';
// import React, { useEffect, useState } from 'react';

// import Navbar from './Navbar';
// function MyCources() {

// 	var uri = "http://localhost:1000/";
// 	var Name = localStorage.getItem('Username')
// 	console.log(Name)
// 	function getdata() {
// 		axios.post(uri + 'register', { Username: Name }).then((succ) => {
// 			console.log(succ.data)
// 		})
// 	}
// 	useEffect(() => {
// 		getdata()
// 	}, [])

// 	const [data, setdata] = useState([])
// 	function getcourses() {
// 		axios.post(uri + "getcouses2", { uName: Name }).then((succ) => {
// 			console.log(succ.data)
// 			setdata(succ.data)
// 		})
// 	}
// 	useEffect(() => {
// 		getcourses();
// 	}, [])
// 	return (

// 		<>
// 			<Navbar />
// 			<div className='mycources'>
// 				<div className='container'>
// 					{data.map((val) => (
// 						<div className='b-shdow col-md-3 col-sm-6 col-xs-12'>
// 							<p style={{color:"red"}}>{val.UName}</p>
// 						</div>
// 					))}
// 				</div>
// 			</div>


// 		</>

// 	)
// }

// export default MyCources






import axios from 'axios';
import React, { useEffect, useState } from 'react';

import Navbar from './Navbar';
function MyCources() {

	var uri = "http://localhost:1000/";
	var Name = localStorage.getItem('Username')
	console.log(Name)
	function getdata() {
		axios.post(uri + 'register', { Username: Name }).then((succ) => {
			console.log(succ.data)
		})
	}
	useEffect(() => {
		getdata()
	}, [])

	const [data, setdata] = useState([])
	function getcourses() {
		axios.post(uri + "getcouses2", { uName: Name }).then((succ) => {
			console.log(succ.data)
			setdata(succ.data)
		})
	}
	useEffect(() => {
		getcourses();
	}, [])
	return (

		<>
			<Navbar />
			<div className='mycources'>
				<div className='container-fluid'>
					<h2 className='text-center'>Courses Bought</h2>
					{data.map((val) => (
						<div className='col-md-3 col-sm-4 col-xs-12'>
							<div className=' abc abc2'>
								<h5>Your Name : {val.UName}</h5>
								<h5>Teacher Name : {val.teacher}</h5>
								<h5>Course Bought : {val.Cnm}</h5>
								<h5>Price : {val.Pri}</h5>
							</div>
						</div>
					))}
				</div>
			</div>


		</>

	)
}

export default MyCources
