import Bookdetails from "./Bookdetails";
import BooksList from "./BooksList";

function BookContainer() {
    return ( 
        <div className="container my-5">
            <div className="row justify-content-between">
                <div className="col-6" style={{borderRight: '2px solid #eee',paddingRight: '70px'}}>
                    <h3 className="text-center fw-bold mb-5">Books List</h3>
                    <BooksList />
                </div>
                <div className="col-5">
                    <h3 className="text-center fw-bold mb-5">Book Details</h3>
                    <Bookdetails />
                </div>
            </div>
        </div>
        
     );
}

export default BookContainer;