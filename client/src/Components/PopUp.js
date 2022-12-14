import "../Css/PopUp.css";

import React, { useEffect, useState } from 'react'

function PopUp(props) {
  const [contributors,setcontributors]=useState([])

  useEffect(() => {
		fetch(`/contributors`)
			.then((r) => r.json())
			.then((data) => setcontributors(data));
	},[]);
  
  return (props.trigger ) ? (
    <div className='popup'>
      <div className='popoup-inner'>
        <button className="btn btn-danger" onClick={()=> props.settrigger(false)}> close </button>
      <h2>contributors</h2>
        <table className="table" style={{padding:"100px",width:"100%",margin:"20px",backgroundColor:"white"}}>
					<thead>
						<tr>
							<th>#</th>
							<th>Name</th>
							<th>Amount</th>
							<th>Fundraisergroupid</th>
							
						</tr>
					</thead>
					{contributors.map((group) => {
						return (
							<tbody>
								<tr>
									<td className="td">{group.id}</td>
									<td className="td">{group.name}</td>
									<td className="td">{group.amount}</td>
									<td className="td">{group.fundraisergroupid}</td>
								</tr>
							</tbody>
						);
					})}
				</table>
      </div>
    </div>
  ) :"";
}

export default PopUp