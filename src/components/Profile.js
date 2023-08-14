function Profile(props)
{
    const {name, children} = props; // this.props when inside a component
    return (
        <div>
            <h1>Name : {name}</h1>
            {children}
        </div>
    )
}

export default Profile;