import moment from "moment";


export const getcurrentTimeStamp = (timeFormat) => {
    return moment().format(timeFormat);
}