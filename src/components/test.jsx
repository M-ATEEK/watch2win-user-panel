import React, { Component } from 'react';
import * as notificationAction from "../../redux/actions/NotificationAction";
import { beginTheBar, endTheBar } from "../services/LoadingBarService";
import { toast } from "react-toastify";
import { connect } from "react-redux";
import { compose } from "redux";
import apiInterceptors from "../../hoc/intercepter/apiInterceptors";
import http from "../services/Http";
import auth from "../services/Auth";
import config from "../../config";
import { Link } from "react-router-dom";
import moment from 'moment';

class Notification extends Component {
    state = {
        isVisible: false
    }

    

    callback = (err, res) => {
        if (res && res.status === 200 && res.data !== null) {
            endTheBar();
            toast.success(res.data.message);
        } else if (err !== null) {
            endTheBar();
        }
    };

    readNotifications = () => {
        const path = config.API_URL + `/api/1.0/user/institutes/${this.props.instituteId}/activity-notifications/mark-seen`;
        http.patch(path, {
            headers: {
                Authorization: `Bearer ${auth.getToken()}`,
            },
        });
        this.props.getNotifications(this.props.instituteId, this.callback);
    }

    render() {
        const { isVisible } = this.state;
        const show = (isVisible) ? 'show' : '';
        const notifications = this.props.notifications;
        return (
            <div>
                <li className={"dropdown dropdown-notification nav-item " + show} ref={this.container}>
                    <a className="nav-link nav-link-label" href="#" data-toggle="dropdown" onClick={this.handleToggle}><i className="ficon feather icon-bell"></i><span className="badge badge-pill badge-primary badge-up">
                        {/ 9 /}
                    </span></a>
                    <ul className={"dropdown-menu dropdown-menu-media dropdown-menu-right " + show}>
                        <li className="dropdown-menu-header">
                            <div className="dropdown-header m-0 p-2">
                                {/ <h3 className="white">9 New</h3 > /}
                                    < span className="notification-title">App Notifications</span>
</div>
</li>
                    {notifications.map((notification, key) =>
                        <li className="scrollable-container media-list">
                            <a className="d-flex justify-content-between" >
                                {/ onClick={ () => { this.readNotification(notification) }} /}
                                <div className="media d-flex align-items-start">
                                    <div className="media-left">
                                        {/ <i className="feather icon-plus-square font-medium-5 primary"></i > /}
</div>
                                    <div className="media-body">
                                        <small className="notification-text"> {notification.content}</small>
                                    </div><small>
                                        <time className="media-meta"> {moment(notification.created_at).fromNow()}</time></small>
                                </div>
                            </a>
                        </li>
                    )}
                    <li className="dropdown-menu-footer">
                        <Link to={`/institutes/${this.props.instituteId}/notifications`} className="dropdown-item p-1 text-center">
                            View all notifications
</Link>
                    </li>
</ul>
</li>
</div >
)
    }
}


const mapStateToProps = (state, error) => {
    return {
        notifications: state.NotificationReducer.notifications
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getNotifications: (instituteId, cb) => dispatch(notificationAction.getNotifications(instituteId, cb)),
    };
};

export default compose(connect(mapStateToProps, mapDispatchToProps))(apiInterceptors(Notification));