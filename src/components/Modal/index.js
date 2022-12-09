import { useEffect, useState } from 'react';
import './index.css';

export const Modal = ({ keyValue, data, setData, setIsOpen }) => {
    const [formData, setFormData] = useState({});
    const formModel = [{
        key: 'name',
        validation: [{
            type: 'required',
            message: 'Name field is required',
        }],
    },{
        key: 'email',
        validation:[{
            type: 'required',
            message: 'Email field is required',
        }, {
            type: 'email',
            message: 'Invalid email'
        }]
    },{
        key: 'phone',
        validation: [{
            type: 'required',
            message: 'Phone field is required',
        }],
    },{
        key: 'website',
        validation: [{
            type: 'required',
            message: 'Website field is required',
        }],
    },
    ]
    useEffect(() => {
        let clickData = data.filter(obj => obj.id === keyValue);
        setFormData(clickData[0])
    }, [keyValue])
    
    const onSave = () => {
        let newArray = data.map((entry) => {
                if (entry.id === formData.id) return { ...formData };
                return entry;
        })
        setData(newArray);
        setIsOpen(false);
    };

    const handleChange = (e, objKey) => {
     let obj = {
        ...formData,
        [objKey]: e.target.value
     };
     setFormData(obj);
    };
    
    return (
        <div className='popup'>
            <div className="modal-content">
                <div className="modal-header">
                    <h4>Edit Modal</h4>
                    <button className="btn-close" onClick={(e) => setIsOpen(false)}></button>      
                </div>
                <div className="modal-body">
                    {
                        formModel.map(form => {
                            return (
                            <div class="row mb-3" key={form.key}>
                                <div className='col-md-3'>*<span>{form.key}</span>:</div>
                                <div className='col-md-9'><input class="form-control" value={formData[form.key]} onChange={(e) => handleChange(e, form.key)} /></div>
                            </div>
                        )})
                    }
                </div>
                <div className="modal-footer">
                    <div>
                        <button  type="button" className="btn" onClick={(e) => setIsOpen(false)} >Cancel</button>
                        <button type="button" className="btn btn-primary" onClick={(e) => onSave()}>Ok</button>   
                    </div>   
                </div>
            </div>
        </div>
    )
};