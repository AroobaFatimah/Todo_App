import React from 'react'

export const show_alarm_function = () => {
    return (
        <div>
let ShowAlarm = () => {
        let itemSelectedForAlarm;
        let d = new Date();
        let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
        let currentDay = `${d.getDate()}-${months[d.getMonth()]}`;
        let currentTime = `${d.getHours()}:${d.getMinutes()}`
        let currentDate = `${currentDay}, ${currentTime}`
        itemSelectedForAlarm = items.find(item => (item.deadline == currentDate))
        console.log(itemSelectedForAlarm)
        if (itemSelectedForAlarm == undefined) {
            setShowAlarm(false)
            showAlarm;
        }
        else {
            setShowAlarm(true)
            showAlarm;
        }

        </div>
    )
}
