import React from "react";

export default function FormattedDate(props) {
    console.log(props.date);
    let day = props.date.getDay();
    let hours = props.date.getHours();
    let minutes = props.date.getMinutes();
       minutes = minutes < 10 ? `0${minutes}` : minutes;
    
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    day = daysOfWeek[props.date.getDay()];

    return (
        <span>{`${day} ${hours}:${minutes}`}</span>
    );
}
