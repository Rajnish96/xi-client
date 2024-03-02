import axios from 'axios';
import React, { useState, useCallback } from 'react';
import { toast } from 'react-toastify';
import { BASE_URL, REGISTER_USER } from './constant/Endpoints';

export default function Registration(props) {
    const { responseData } = props
    const [data, setData] = useState([])
    const [formData, setFormData] = useState({
        first_name: "",
        last_name: "",
        email: "",
        date_of_birth: "",
        r_street_1: "",
        r_street_2: "",
        same_as_r: false,
        per_street_1: "",
        per_street_2: "",
        file_name: "",
        file_type: "",
        document: "",
    })
    const isAtLeast18YearsOld = (dateOfBirth) => {
        const dob = new Date(dateOfBirth);
        const currentDate = new Date();
        const age = currentDate.getFullYear() - dob.getFullYear();
        const hasBirthdayOccurred = (currentDate.getMonth() >= dob.getMonth() && currentDate.getDate() >= dob.getDate());
        return age > 18 || (age === 18 && hasBirthdayOccurred);
    }
    const handleChange = useCallback((e) => {
        const { name, value, checked, type } = e.target;
        setFormData({ ...formData, [name]: type === 'checkbox' ? checked : value })
    }, [formData])

    const handleSubmit = useCallback((e) => {
        try {
            e.preventDefault()
            const input = {
                "first_name": formData.first_name,
                "last_name": formData.last_name,
                "email": formData.email,
                "date_of_birth": formData.date_of_birth,
                "r_street_1": formData.r_street_1,
                "r_street_2": formData.r_street_2,
                "per_street_1": formData.same_as_r ? formData.r_street_1 : formData.per_street_1,
                "per_street_2": formData.same_as_r ? formData.r_street_2 : formData.per_street_2,
            }
            if (isAtLeast18YearsOld(input?.date_of_birth)) {
                if (data?.length > 1) {

                    axios.post(`${BASE_URL}${REGISTER_USER}`, input)
                        .then((res) => {
                            responseData(res?.data?.result)
                            toast.success(res?.data?.message);
                        })
                        .catch((e) => { toast.error(e?.response?.data?.message || e?.response?.statusText || "error occurred"); console.log("Error-post API:", e); });
                } else toast.error("Minimum two documents are required")
            } else toast.error("Minimum age should be 18 years")
        }
        catch (err) {
            toast.error(err ? err : "something went worng");
            console.log(err);
        }
    }, [formData, data?.length])

    const addNewHandle = () => {
        if (formData?.file_name !== "" && formData?.file_type !== "" && formData?.document !== "") {
            if (formData?.file_type?.split('/')?.includes(formData?.document?.split(".")[1])) {
                setData([...data, { id: data?.length, file_name: formData?.file_name, file_type: formData?.file_type, document: formData?.document }])
                setFormData({ ...formData, file_name: "", file_type: "", document: "" })
            } else toast.error('Upload correct Document type')
        } else toast.error("fill all Data")
    }
    const deleteHandle = (i) => {
        const updatedData = data.filter((row) => row.id !== i);
        setData(updatedData);
    }
    return (<>
        <div className='container'>
            <div className='row justify-content-center'>
                <form onSubmit={handleSubmit}>
                    <h2>MERN STACK MACHINE TEST</h2>
                    <div className="row">
                        <div className="form-group col">
                            <label>Frist Name<span className="text-danger">*</span></label>
                            <input name='first_name' type="text" className="form-control" placeholder="Enter your frist name here.."
                                value={formData.first_name}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group col">
                            <label>Last Name<span className="text-danger">*</span></label>
                            <input name='last_name' type="text" className="form-control" placeholder="Enter your last name here.."
                                value={formData.last_name}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-group col">
                            <label>Email<span className="text-danger">*</span></label>
                            <input name='email' type="email" className="form-control" placeholder="ex:myname@example.com"
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group col">
                            <label>Date of Birth<span className="text-danger">*</span></label>
                            <input name='date_of_birth' type="date" className="form-control" placeholder="Date of Birth"
                                value={formData.date_of_birth}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <p className="mt-3">Residential Address</p>
                    <div className="row">
                        <div className="form-group col">
                            <label>Street 1<span className="text-danger">*</span></label>
                            <input name='r_street_1' type="text" className="form-control"
                                value={formData.r_street_1}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group col">
                            <label>Street 2<span className="text-danger">*</span></label>
                            <input name='r_street_2' type="text" className="form-control"
                                value={formData.r_street_2}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className="form-check mt-4">
                        <input name="same_as_r" className="form-check-input" type="checkbox" checked={formData.same_as_r} onChange={handleChange} />
                        <label className="form-check-label">
                            Same as Residential Address
                        </label>
                    </div>
                    <p className="mt-3">Permanent Address</p>
                    <div className="row">
                        <div className="form-group col">
                            <label>Street 1<span className="text-danger">*</span></label>
                            <input name='per_street_1' type="text" className="form-control"
                                value={formData.same_as_r ? formData.r_street_1 : formData.per_street_1}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group col">
                            <label>Street 2<span className="text-danger">*</span></label>
                            <input name='per_street_2' type="text" className="form-control"
                                value={formData.same_as_r ? formData.r_street_2 : formData.per_street_2}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <p className="mt-3">Upload Documents</p>
                    <div className='row'>
                        <div className="form-group col">
                            <label>File Name<span className="text-danger">*</span></label>
                            <input name='file_name' type="text" className="form-control"
                                value={formData.file_name}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group col">
                            <label>Type of File<span className="text-danger">*</span></label>
                            <select name="file_type" className='form-control' value={formData.file_type} onChange={handleChange}>
                                <option>select File type</option>
                                <option value='png/jpg/jpeg'>image</option>
                                <option value='pdf'>pdf</option>
                            </select>
                        </div>
                        <div className="form-group col">
                            <label>Upload Document<span className="text-danger">*</span></label>
                            <input name='document' type="file" className="form-control"
                                value={formData.document}
                                onChange={handleChange}
                            />
                        </div>
                        <div className='col d-flex align-items-end'>
                            <button type="button" className="btn btn-dark" onClick={addNewHandle}>
                                <i className="bi bi-plus"></i>
                            </button>
                        </div>
                    </div>
                    {data?.map(item => (
                        <div key={item.id} className='row'>
                            <div className="form-group col">
                                <label>File Name<span className="text-danger">*</span></label>
                                <input disabled className="form-control" value={item?.file_name} />
                            </div>
                            <div className="form-group col">
                                <label>Type of File<span className="text-danger">*</span></label>
                                <input disabled className="form-control" value={item?.file_type === "pdf" ? "pdf" : "image"} />
                            </div>
                            <div className="form-group col">
                                <label>Upload Document<span className="text-danger">*</span></label>
                                <input disabled className="form-control" value={item?.document.split('\\').pop()} />
                            </div>
                            <div className='col d-flex align-items-end'>
                                <button type="button" className="btn border" onClick={() => deleteHandle(item.id)}>
                                    <i className="bi bi-trash3"></i>
                                </button>
                            </div>
                        </div>
                    ))}
                    <div className='text-center'>
                        <button type="submit" className="btn btn-dark my-2 m-5 p-2 w-25">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    </>
    )
}
