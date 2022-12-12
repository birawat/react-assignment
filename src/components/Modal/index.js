import { useEffect, useState } from 'react';
import './index.css';

export const Modal = ({ keyValue, data, setData, setIsOpen }) => {
    const [formData, setFormData] = useState({});
    const [error, setError] = useState();
    const formModel = [{
        key: 'name',
        type: 'text',
        validation: [{
            type: 'required',
            message: 'Name field is required',
        }],
    },{
        key: 'email',
        type: 'email',
        validation:[{
            type: 'email',
            message: 'Invalid email'
        }]
    },{
        key: 'phone',
        type: 'text',
        validation: [{
            type: 'required',
            message: 'Phone field is required',
        }],
    },{
        key: 'website',
        type: 'text',
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
    
    const onSave = (e) => {
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
     setError(Object.values(obj).includes(''));
     setFormData(obj);
    };

    return (
        <div className='popup'>
            <div className="modal-content">
                <div className="modal-header">
                    <h4>Edit Modal</h4>
                    <button className="btn-close" onClick={(e) => setIsOpen(false)}></button>      
                </div>
                <form class="was-validated">
                    <div className="modal-body">
                        {
                            formModel.map(form => {
                                return (
                                <div class="row mb-3" key={form.key}>
                                    <div className='col-md-3 txt-align'><span class="text-danger">*</span><span class="text-capitalize">{form.key}</span>:</div>
                                    <div className='col-md-9'><input type={form.type} class="form-control" value={formData[form.key]} onChange={(e) => handleChange(e, form.key)} name={form.key} required/>
                                    {form.validation.map((row) => {
                                        return <div class="invalid-feedback">{row.message}</div>}
                                    )}
                                    </div>
                                </div>
                            )})
                        }
                    </div>
                <div className="modal-footer">
                    <div className="modal-button">
                        <button type="button" className="btn btn-outline-secondary" onClick={(e) => setIsOpen(false)} >Cancel</button>
                        <button type="submit" className="btn btn-primary" disabled={error} onClick={(e) => onSave(e)}>Ok</button>   
                    </div>
                </div>
                </form>
            </div>
        </div>
    )
};