import React from "react";
import ToDoList from "./ToDoList.jsx";


//create your first component
const Home = () => {
	return (
		<div className="container">
			<div className="d-block">
				<div className="col-12 divider"></div>
				<div className="toDoList">
					<div className="row">
						<div className="col-3"></div>
						<div className="col-6">
							<div className="col-6 d-flex justify-content-center"></div>
							<p className="text-center">What's on your mind today?</p></div>
						<div className="col-3"></div>
					</div>
					<div className="row">
						<div className="col-3"></div>
						<div className="col-6 d-flex justify-content-center">
							<ToDoList/>
						</div>
						<div className="col-3"></div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;




{/* <div className="container">
			<div className="d-block">
			<div className="col-12 divider"></div>
				<div className="row">
					<div className="col-3"></div>
					<div className="col-6">
						<div className="col-6 d-flex justify-content-center"></div>
						<p className="text-center">What's on your mind today?</p></div>
					<div className="col-3"></div>
					<div className="col-3"></div>
					<div className="col-6 d-flex justify-content-center">
						<ToDoList/>
					</div>
					<div className="col-3"></div>
				</div>
			</div>
		</div> */}
