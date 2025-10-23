import { lazy } from "react";

const Table = lazy(()=>import("../../components/Table")) 

const Dashboard = () => {
    return (
        <div>
            <Table/>
        </div>
    );
}

export default Dashboard;
