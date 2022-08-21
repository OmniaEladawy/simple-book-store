function AddForm() {
    return ( 
        <div className="p-5">
            <h3 className="fw-bold mb-5 text-center">Add Book</h3>
            <form className="w-50 m-auto">
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label fw-bold">Title</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label fw-bold">Price</label>
                    <input type="text" className="form-control" id="exampleInputPassword1"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="desc" className="form-label fw-bold">Description</label>
                    <textarea name="des" id="desc" rows="3" className="d-block" cols="78" style={{borderColor: '#d0d0d0'}}></textarea>
                </div>
                <button type="submit" className="btn btn-primary fw-bold">Add</button>
            </form>
        </div>
        
     );
}

export default AddForm;