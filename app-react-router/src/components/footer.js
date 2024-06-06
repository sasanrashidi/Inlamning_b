import React from 'react';

export default function Footer()
{
    return (
        <div className="container">
            <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                <div className="col-md-4 d-flex align-items-center">
                    <span className="mb-3 mb-md-0 text-body-secondary">&copy; Sasan Rashidi</span>
                </div>
                <div className="col-md-4 d-flex align-items-center justify-content-end">
                    <span className="mb-3 mb-md-0 text-body-secondary">Part of the footer</span>
                </div>
            </footer>
        </div>  
    );
}

