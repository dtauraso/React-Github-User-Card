import React from "react"

class UserCard extends React.Component {

    state = {
        myUser: {},
        follower_count: 0,
        following_count: 0
    }
    

    getLocation = (location) =>{
        if(location === undefined) {
            return <p>{`Location: Knowhere`}</p>
        } else {
            return <p>{`Location: ${location}`}</p>
        }

    }
    getBio = (bio) => {
        if(bio === undefined) {
            return <p>{`Bio: Originated from Mars`}</p>
        } else {
            return <p>{`Bio: ${bio}`}</p>
        }
    }
    // componentDidMount() {
    //     console.log("mounting")
    //     // let users = []
    //     // seems to force the data to rerender
    //     fetch(this.props.myUser.followers_url)
    //       .then(res => res.json())
    //       .then(user => this.setState({follower_count: user.length}))
    //       .catch(err => console.log("no github users"))
        
    //     fetch(/*this.props.myUser.following_url*/"https://api.github.com/users/BryanKAdams/following")
    //       .then(res => res.json())
    //       .then(user => this.setState({following_count: user.length}))
    //       .catch(err => console.log("no github users"))
        
    //     // getFollowers("dtauraso")
    //     // fetch(`https://api.github.com/users/dtauraso/followers`)
    //     //   .then(res => res.json())
    //     //   .then(users => this.setState({myUsers: users}))
    //     //   .catch(err => console.log("no github followers"))
    //     // can cause memory leak if not cleaned up
    //     window.addEventListener("resize", this.handleResize)
    // }
    // componentWillUnmount() {
    //     console.log("unmounting")
    //     // can cause memory leak if not cleaned up
    //     window.addEventListener("resize", this.handleResize)
    
    // }
    
    render() {
        console.log("card", this.props)
        // this.setState({user: this.props})
        console.log("card", this.props.login)
        // can't pass these in now cause we can't pass them into mount
        const {login, avatar_url, name, location, followers, following, followers_url, following_url, bio, html_url} = this.props.myUser
        console.log("each user", this.props.myUser)

        return (
                // this.props
                <div className="card">
                    <img src={avatar_url}/>
                    <div className="card-info">
                        <h3 className="name">{name}</h3>
                        <p className="username">{login}</p>
                        <p>{this.getLocation(location)}</p>
                        <p>Profile:     <a href={html_url}>{html_url}</a></p>
                        <p>followers:       {String(followers)}</p>
                        <p>following:       {String(following)}</p>
                        <p>{this.getBio(bio)}</p>
                    </div>
                </div>
        );
        

    }
}

export default UserCard;