import React from 'react'

export default function Dashboard(props) {
    const { responseData } = props
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
        </div>
    </>
    )
}
