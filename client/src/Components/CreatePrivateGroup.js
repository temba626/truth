import { React, useState } from "react";
function CreatePrivateGroup(params) {

    const [title, setTitle] = useState("");

	function handleSubmit(e) {
		e.preventDefault();

		const data = { title};

		fetch("/private_group", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(data),
		}).then(() => {
			console.log("new private group");
		});
        e.target.reset();
	}
    return(
        <form style={{padding:"100px",width:"60%"}} onSubmit={handleSubmit}>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Title of private group</label>
                    <input type="text" class="form-control"  placeholder="title" onChange={(e) => setTitle(e.target.value)}/>
                    
                </div>
               
                <button type="submit" class="btn btn-primary">Submit</button>
</form>
    )
}
export default CreatePrivateGroup