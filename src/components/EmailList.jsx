import { Fragment } from "react";
const EmailList = () => {
    return <Fragment>
        <div>
            <div>
                <input type="search" placeholder="Search Contacts"/>
            </div>
            <div>
                <button> View </button>
                <button> Edit </button>
                <button> Status </button>
            </div>
        </div>
    </Fragment>
}
export default EmailList;