import { useState } from 'react';
import { DatePicker } from 'react-rainbow-components';
import Image from 'next/image';

const CalendarPicker = () => {
  const [dateValue, setState] = useState<any>();
  const containerStyles = {
    color: 'white',
  };

  return (
    <>
      <div className="rainbow-align-content_center rainbow-m-vertical_large rainbow-p-horizontal_small rainbow-m_auto border-b border-white">
        <DatePicker
          style={containerStyles}
          formatStyle="large"
          id="datePicker-19"
          selectionType="range"
          placeholder="Todas las fechas"
          value={dateValue}
          onChange={(date) => setState(date)}
          icon={
            <>
              <Image
                src="/icon/calendar.svg"
                width={100}
                height={100}
                alt="calendar"
              />
            </>
          }
        />
      </div>
    </>
  );
};

export default CalendarPicker;
