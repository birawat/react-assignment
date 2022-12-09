import './index.css'
import { EditOutlined, HeartOutlined, DeleteOutlined } from '@ant-design/icons';

function Cards({ data, setIsOpen, setKey }) {
    const onEditClick = (e, id) => {
        e.preventDefault();
        setKey(id)
        setIsOpen(true);
    };

    return (
        <>
            <section className='container'>
            {
                data.map(user => {
                    return (
                        <div className='card-wrapper' key={user.id} >
                            <div className='row'>
                                <div className='col-auto'>
                                    <img variant="top" alt='avatar' src={`https://avatars.dicebear.com/v2/avataaars/${user.username}.svg?options[mood][]=happy`} style={{height: '200px'}}/>
                                </div>
                                <div className='col'>
                                    <h2>{user.name}</h2>
                                    <p><strong>Email: </strong>{user.email}</p>
                                    <p><strong>Phone: </strong>{user.phone}</p>
                                    <p><strong>Company: </strong>{user.company?.name}</p>
                                    <p><strong>Website: </strong>{user.website}</p>
                                    <p><strong>Address: </strong>{`${user.address?.street}, ${user.address?.suite}, ${user.address?.city}, ${user.address?.zipcode}`}</p>
                                </div>
                                <div className='iconList'>
                                    <div className='icons'><HeartOutlined  style={{ color: '#FF0000', fontSize: 20 }}  /></div>
                                    <div className='icons' onClick={(e) => onEditClick(e, user.id)}><EditOutlined style={{ fontSize: 20 }} /></div>
                                    <div className='icons'><DeleteOutlined  theme="filled" style={{ fontSize: 20 }} /></div>
                                </div>
                            </div>                
                        </div>
                    )
                })
            }
            </section>
        </>
    );
}

export default Cards;