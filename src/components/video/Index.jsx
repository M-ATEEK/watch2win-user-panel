import React, { Component } from "react";

class Video extends Component {
    state = {};
    handleChange(){
        console.log("azeem");
    }

    render() {

        return (
            <>
                <div>
                    <video
                        controls
                        autoPlay
                        onEnded={()=>this.handleChange}
                        src={this.props.src} />
                </div>
            </>
        );
    }
}

export default Video;
