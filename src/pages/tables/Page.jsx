import React from "react";

const TablePage = (props) => {
    return (
        <div className="card bg-base-100 w-96 shadow-sm">
            <figure>
                <img
                    src="https://media.istockphoto.com/id/828088276/vector/qr-code-illustration.jpg?s=612x612&w=0&k=20&c=FnA7agr57XpFi081ZT5sEmxhLytMBlK4vzdQxt8A70M="
                    alt="Shoes"
          
                />
            </figure>
            <div className="card-body">
                <h2 className="card-title">Table {props.id}</h2>
                <p>
                    A card component has a figure, a body part, and inside body
                    there are title and actions parts
                </p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">View Now</button>
                </div>
            </div>
        </div>
    );
};

export default TablePage;
