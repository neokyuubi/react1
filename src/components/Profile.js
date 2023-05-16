function Profile(props)
{
    return (
        <div>
            <h1>Name : {props.name}</h1>
            { props.children}
        </div>
    )
}

export default Profile;

// https://www.youtube.com/watch?v=o3biU6YIhjI&list=PLSsAz5wf2lkK_ekd0J__44KG6QoXetZza&index=11