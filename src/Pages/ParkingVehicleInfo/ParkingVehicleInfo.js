import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

const ParkingVehicleInfo = () => {
    const oldData = JSON.parse(localStorage.getItem('Vehicle Information'))
    console.log(oldData.licenseNumber);
    
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [data, setData] = useState([]);

    const date = new Date();

    const handleUpdateInfo = data => {
        setData(data)
    }

    useEffect(() => {
        // const readyData = [data]
            localStorage.setItem('Vehicle Information', JSON.stringify(data));
            // handleParkingInfo('');
          }, [data]);

    return (
        <div className='h-[800px] flex justify-center items-center'>
        <div className='w-96 p-7'>
            <h2 className='text-xl font-bold text-center text-red-600'>Update Information</h2>

            <form onSubmit={handleSubmit(handleUpdateInfo)}>

                    <div className='flex justify-end mt-5'>
                    <label className="label"> <span className="label-text">Status: </span></label> 
                    <select className='w-1/2 my-2 border-2 border-green-500 rounded' {...register("status", { required: true })}>
                        {/* <option value="">Select...</option> */}
                        <option value="In">In</option>
                        <option value="Out">Out</option>
                    </select>
                </div>

                <div className="form-control w-full max-w-xs">

                    {/* Vehicle License Number */}
                    <label className="label"> <span className="label-text">Vehicle License Number</span></label>

                    <input type="number" defaultValue={oldData.licenseNumber}  {...register("licenseNumber", { required: "Vehicle License Number is Required" })} className="input input-bordered w-full max-w-xs" />

                    {errors.licenseNumber && <p className="text-red-600">{errors.licenseNumber?.message}</p>}
                </div>

                <div className="form-control w-full max-w-xs"></div>
                {/* Vehicle Type */}
                <label className="label"> <span className="label-text">Vehicle Type</span></label>

                <input type="text" defaultValue={oldData.vehicleType} {...register("vehicleType", { required: "Vehicle Type is required" })} className="input input-bordered w-full max-w-xs" />

                {errors.vehicleType && <p className="text-red-600">{errors.vehicleType?.message}</p>}


                <div className="form-control w-full max-w-xs">

                    {/* Vehicle Owner Name */}
                    <label className="label"> <span className="label-text">Owner Name</span></label>

                    <input type="text" defaultValue={oldData.name} {...register("name", { required: "Owner Name is Required" })} readOnly className="input input-bordered w-full max-w-xs" />

                    {errors.name && <p className="text-red-600">{errors.name?.message}</p>}
                </div>


                <div className="form-control w-full max-w-xs">

                    {/* Phone Number*/}
                    <label className="label"> <span className="label-text">Phone Number</span></label>

                    <input type="number" defaultValue={oldData.phoneNumber} {...register("phoneNumber", { required: "Phone Number is Required" })} className="input input-bordered w-full max-w-xs" />

                    {errors.phoneNumber && <p className="text-red-600">{errors.phoneNumber?.message}</p>}
                </div>

                <div className="form-control w-full max-w-xs">

                    {/* Vehicle Owner Address */}
                    <label className="label"> <span className="label-text">Owner Address</span></label>

                    <input type="text" defaultValue={oldData.address} {...register("address", { required: "Owner Address is Required" })} className="input input-bordered w-full max-w-xs" />

                    {errors.address && <p className="text-red-600">{errors.address?.message}</p>}
                </div>

                <div className="form-control w-full max-w-xs">


                    {/* Date and Time */}
                    <label className="label"> <span className="label-text">Exit Date and Time</span></label>

                    <input type="text" defaultValue={date} {...register("dateTime", { required: "Date and time is Required" })} className="input input-bordered w-full max-w-xs" />
                    {errors.dateTime && <p className="text-red-600">{errors.dateTime?.message}</p>}
                </div>

                <input type="submit" className='btn btn-accent w-full my-5' value="Save" />
            </form>
        </div>
    </div>
    );
};

export default ParkingVehicleInfo;