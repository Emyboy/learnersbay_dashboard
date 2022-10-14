import React, { useCallback, useState } from "react";
import DatePicker, { DateObject, DatePickerProps } from "react-multi-date-picker";
import DatePanel from "react-multi-date-picker/plugins/date_panel";

import useOnClickOutside from "./useOutside";

interface Props {
    value?: any;
    onChange: (e: any) => void;
    format?: string;
    plugins?: any[];
    datePickerProps?: DatePickerProps;
    disableDayPicker?: boolean;
}

const DateTimePicker = ({
    onChange,
    datePickerProps,
    format,
    plugins,
    value,
    disableDayPicker,
}: Props) => {
    const dateTimeRef = React.useRef<any>();
    const [dates, setDates] = useState<any>([
        new Date(),
        new DateObject({ year: 2020, month: 9, day: 8 }),
        "December 09 2020",
        1597994736000, //unix time in milliseconds (August 21 2020)
    ]);

    const handleDatePickerClose = useCallback(
        () => dateTimeRef?.current?.closeCalendar(),
        [dateTimeRef],
    );

    // if commented this line component TimePicker don't be closed on click anywhere
    useOnClickOutside(dateTimeRef, handleDatePickerClose);

    return (
        <DatePicker
            value={value}
            ref={dateTimeRef}
            onChange={onChange}
            format={format}
            // sort
            plugins={plugins}
            inputClass="chakra-input css-1kp110w"
            containerStyle={{ width: "100%" }}
            disableDayPicker={disableDayPicker}
            {...datePickerProps}
        />
    );
};

export default DateTimePicker;
