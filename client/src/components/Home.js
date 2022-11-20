import React, { useState, useEffect, useContext } from 'react'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import CreateIcon from '@mui/icons-material/Create';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { NavLink } from 'react-router-dom';
import { adddata, deldata } from './context/ContextProvider';
import { updatedata } from './context/ContextProvider'
import '../index.css';
import Details from './Details';




const Home = () => {

    const [getuserdata, setUserdata] = useState([]);
    const [search, setsearch] = useState("");
   
    console.log(getuserdata);

    const { udata, setUdata } = useContext(adddata);

    const { updata, setUPdata } = useContext(updatedata);

    const { dltdata, setDLTdata } = useContext(deldata);



    


    const getdata = async () => {

        const res = await fetch("http://localhost:8003/getdata", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });

        const data = await res.json();
        console.log(data);

        if (res.status === 422 || !data) {
            console.log("error ");

        } else {
            setUserdata(data)
            setFilterList(data);
            console.log("get data");

        }
    }

    const [filterList, setFilterList] = useState(getuserdata);


    const searchhanlder = (event) => {
       

     const data=event.target.value;
    setsearch(data);

    if (data === "") {
        setFilterList(getuserdata);
        return;
    }
    const filteredValues = getuserdata.filter(
        (item) =>
            item.name.toLowerCase().indexOf(event.target.value.toLowerCase()) !== -1
    );
    setFilterList(filteredValues);
            

    }






    useEffect(() => {
        getdata();
    }, [])

    const deleteuser = async (id) => {

        const res2 = await fetch(`http://localhost:8003/deleteuser/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        });

        const deletedata = await res2.json();
        console.log(deletedata);

        if (res2.status === 422 || !deletedata) {
            console.log("error");
        } else {
            console.log("user deleted");
            setDLTdata(deletedata)
            getdata();
        }

    }


    return (

        <>
            {
                udata ?
                    <>
                        <div class="alert alert-success alert-dismissible fade show" role="alert">
                            <strong>{udata.name}</strong>  added succesfully!
                            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                        </div>
                    </> : ""
            }
            {
                updata ?
                    <>
                        <div class="alert alert-success alert-dismissible fade show" role="alert">
                            <strong>{updata.name}</strong>  updated succesfully!
                            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                        </div>
                    </> : ""
            }

            {
                dltdata ?
                    <>
                        <div class="alert alert-danger alert-dismissible fade show" role="alert">
                            <strong>{dltdata.name}</strong>  deleted succesfully!
                            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                        </div>
                    </> : ""
            }



            <div className='maincontainer'>

                <div className="containerlist mt-5">

                    <div className="row d-flex justify-content-flex-start">

                        <div className="col-md-6">

                            <div className="card">

                                <div className="input-box">
                                    <input type="text" onChange={searchhanlder} placeholder='Customers' className="form-control" />
                                    <i className="fa fa-search"></i>
                                    <i></i>
                                </div>
                                <div className="add_btn mt-2 mb-2">
                                    <NavLink to="/register" className="btn btn-primary">Add data</NavLink>
                                </div>



                                {filterList &&
                                    filterList.map((item, id) => {
                                        return (
                                            <>
                                                <div className="list border-bottom">

                                                    <i className="">
                                                        <img src='https://th.bing.com/th/id/OIP.ymEUbl8s2t2yzvdNqwOCyAHaHa?pid=ImgDet&rs=1'></img>
                                                    </i>
                                                    <div className="d-flex flex-column ml-3">
                                                        <span>{item.name}</span>
                                                        <small>{item.email}</small>


                                                    </div>
                                                    <div className=''>
                                                        <NavLink to={`view/${item._id}`}> <button className="btn btn-success"><RemoveRedEyeIcon /></button></NavLink>
                                                    </div>

                                                </div>
                                            </>
                                        )
                                    })
                                }
                                

                                    
                            </div>
                            

                            
                           
                        
                           

                        </div>
                        
                         
                       

                    </div>
    

                </div>
                
            </div>


        </>
    )
}

export default Home

















