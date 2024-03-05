import React from 'react'

export default function Dashboard(props) {
    const { responseData, documentsResultData } = props
    console.log('documentsResultData', documentsResultData);
    return (<>
        <div className='container'>
            <div className='row justify-content-center'>
                <div className='col-6'>
                    <div className='row'>
                        <div className='col-6'>Frist Name</div>
                        <div className='col-6'>{responseData.first_name}</div>
                    </div>
                    <div className='row'>
                        <div className='col-6'>Last Name</div>
                        <div className='col-6'>{responseData.last_name}</div>
                    </div>
                    <div className='row'>
                        <div className='col-6'>Email</div>
                        <div className='col-6'>{responseData.email}</div>
                    </div>
                    <div className='row'>
                        <div className='col-6'>Date of Birth</div>
                        <div className='col-6'>{responseData.date_of_birth}</div>
                    </div>
                    <div className='row'>
                        <div className='col-6'>Residential Address Street 1</div>
                        <div className='col-6'>{responseData.r_street_1}</div>
                    </div>
                    <div className='row'>
                        <div className='col-6'>Residential Address Street 2</div>
                        <div className='col-6'>{responseData.r_street_2}</div>
                    </div>
                    <div className='row'>
                        <div className='col-6'>Permanent Address Street 1</div>
                        <div className='col-6'>{responseData.per_street_1}</div>
                    </div>
                    <div className='row'>
                        <div className='col-6'>Permanent Address Street 2</div>
                        <div className='col-6'>{responseData.per_street_2}</div>
                    </div>
                </div>
            </div>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">File Name</th>
                        <th scope="col">File Type</th>
                        <th scope="col">Document</th>
                    </tr>
                </thead>
                <tbody>
                    {documentsResultData?.map((data, id) => (
                        <tr key={id}>
                            <td>{data?.file_name}</td>
                            <td>{data?.file_type}</td>
                            <td><img src={'C:\Users\R.K Singh\Desktop\RAJNISH'} alt={(data?.document)?.split('\\')?.pop()} width="50" height="50" /></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </>
    )
}
