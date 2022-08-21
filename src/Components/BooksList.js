function BooksList() {
    return ( 
        <div className="card mb-3 text-center">
            <div className="card-header fw-bold h5">
                Book name
            </div>
            <div className="card-body">
                <h5 className="card-title">Special title treatment</h5>
                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <button  className="btn btn-primary fw-bold m-2">Read</button>
                <button  className="btn btn-danger fw-bold">Delete</button>
            </div>
        </div>
     );
}

export default BooksList;